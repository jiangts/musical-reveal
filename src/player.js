import Reveal from './reveal';
import EventEmitter from 'eventemitter3'
import $ from 'jquery'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faPause);
dom.watch();

/*
 *  {
 *    transition: 'fade',
 *    timing: 'uniform',
 *    slides: [{
 *      img: { src: '' }
 *    }, {
 *      img: { src: '' },
 *      text: { value: '' }
 *    }, {
 *      text: { value: '' }
 *    }],
 *    audio: {
 *      src: ''
 *    },
 *    loop: false,
 *    revealConfig: { }
 *  }
 *
 */

export default class Player {
  constructor(multimedia={}, config={}) {
    const {
      transition='fade',
      timing='uniform', // or 'custom'
      slides=[],
      audio={},
      loop=false,
      revealConfig={}
    } = multimedia

    const default_config = {
      root: document.querySelector('.reveal > .slides'),
      interval: 50
    }
    config = Object.assign({}, default_config, config)

    this.bus = new EventEmitter
    this.multimedia = multimedia
    this.config = config
    this.transition = transition
    this.timing = timing
    this.slides = slides
    this.audio = audio
    this.loop = loop
    this.position = 0
    this.revealConfig = Object.assign({
      transition,
      loop,
      controls: false
    }, revealConfig)


    this.renderControls()
    this.renderSlides()

    if(this.audio.src) {
      const audio = new Audio(this.audio.src)
      audio.addEventListener('loadedmetadata', e => {
        this.duration = audio.duration
        this.$controls.show()
      })
      this.$controls.hide()
      this.audio.node = audio
    }
  }

  renderControls() {
    const $controls = $(`
    <div style="position: fixed; bottom: 10px; left: 10px; cursor: pointer; padding: 5px; z-index: 1000">
      <i class="fas fa-play"></i>
    </div>
    `).click(e => {
      this.playing ? this.pause() : this.play()
    })
    this.$controls = $controls
    $('body').append($controls)
    return $controls
  }

  renderSlides() {
    const {
      root
    } = this.config
    const $root = $(root)

    $root.empty()
    this.slides.forEach(slide => {
      const {
        img,
        text,
        background={}
      } = slide
      const imgHTML = img ? `<img src=${img.src}></img>` : ''
      const textHTML = text ? `<span style="color:${text.color};">${text.value}</span>` : ''
      const $slide = $(`<section>${imgHTML}${textHTML}</section>`)

      const backgroundAttrs = {}
      for(let attr in background) {
        backgroundAttrs[`data-background-${attr}`] = background[attr]
      }

      $slide.attr(backgroundAttrs)
      $root.append($slide)
    })

    this.rendered = true
    Reveal.initialize(this.revealConfig)
    Reveal.addEventListener('slidechanged', (evt) => {
      const child = evt.currentSlide
      const parent = child.parentNode;

      this.currentSlide = [...parent.children].indexOf(child)

      const slidePosition = this.currentSlide / this.slides.length * this.duration
      console.log(this.currentSlide, slidePosition, this.position)
      if(Math.abs(this.position - slidePosition) > 1) {
        this.seek(slidePosition)
      }
    });

  }

  play() {
    this.startTime = (new Date).getTime() - this.position * 1000
    this.timer = setInterval(() => {
      this.position = ((new Date).getTime() - this.startTime) / 1000
      if(this.position > this.duration) {
        this.bus.emit('ended')
        this.pause()
        this.seek(0)
      }
      this.seekSlide(this.position)
    }, this.config.interval)
    // https://fettblog.eu/blog/2012/04/08/html5-audio-on-mobile-devices/
    if(this.audio.src) {
      this.audio.node.play()
    }
    this.$controls.find('svg').addClass('fa-pause').removeClass('fa-play')
    this.bus.emit('play')
  }

  pause() {
    clearInterval(this.timer)
    this.timer = null
    this.audio.node.pause()
    this.$controls.find('svg').addClass('fa-play').removeClass('fa-pause')
    this.bus.emit('pause')
  }

  get playing() {
    return !!this.timer
  }

  seekSlide(position) {
    const slide = Math.min(this.slides.length - 1, Math.floor((position / this.duration) / (1 / this.slides.length)))
    if(this.currentSlide !== slide) {
      Reveal.slide(slide)
    }
  }

  seek(position) {
    // TODO: seek audio is an async event...
    // play audio is also an async event...
    this.position = position
    this.startTime = (new Date).getTime() - this.position * 1000
    // change slide and audio to match position
    this.seekSlide(position)
    this.audio.node.currentTime = position
    console.log(this.audio.node.readyState)
    this.bus.emit('seek')
  }

  stop() {
    clearInterval(this.timer)
    this.seek(0)
    this.bus.emit('stop')
  }

  on(...args) {
    return this.bus.on(...args)
  }

  off(...args) {
    return this.bus.off(...args)
  }
}
