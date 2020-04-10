var player = new musical_reveal.Player({
  slides: [{
    img: {
      src: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
    }
  }, {
    img: {
      src: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
    },
    text: {
      value: 'Caption?'
    }
  }, {
    background: {
      image: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
      // size
      // cover
      // position
      // repeat
      // opacity
    },
    text: {
      value: 'hello',
      color: 'white'
    }
  }],
  audio: {
    // src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    // src: 'http://www.hubharp.com/web_sound/BachGavotteShort.mp3'
    src: 'static/1456.mp3'
  },
  revealConfig: {
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
  }
});

