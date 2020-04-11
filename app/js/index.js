var containImage = function(src, rot, color) {
  color = color || '#222'
  return {
    image: src,
    size: 'contain',
    color: color
  }
}

var player = new musical_reveal.Player({
  slides: [
    {
      text: {
        value: '<h3>Happy Birthday, Dad! <br>❤️  🍰 😄 😃 🍳</h3><br>from Damien and Allan'
      },
    },
    {
      background: {
        image: 'img/IMG_9864.jpg'
      },
      text: {
        value: 'here\'s a review of the past year...',
        color: 'white'
      },
    },
    { background: containImage('img/IMG_8266.jpg') }, // waterfall
    { background: containImage('img/IMG_8280.jpg') }, // big log
    { background: containImage('img/IMG_8166.jpg') }, // peacock
    { background: containImage('img/IMG_8183.jpg') }, // peacock
    {
      text: {
        value: 'Thanks for taking us on a <strong>wonderful</strong> trip <br>to Seattle &amp; Victoria &amp; Vancouver!'
      }
    },
    { background: containImage('img/IMG_9335.jpg') }, // beauty church
    {
      background: containImage('img/IMG_9374.jpg'),  // crucifix
      text: {
        value: '<br><br><br><br><br><br>This year your<br> birthday is on Good Friday!',
        color: 'white'
      }
    },
    { background: containImage('img/IMG_9387.jpg') }, // monastery ceil
    { background: containImage('img/IMG_9380.jpg') }, // ceiling dome
    { background: containImage('img/IMG_9320.jpg') }, // 3 walking
    { background: containImage('img/IMG_9490.jpg') }, // majesty church
    { background: containImage('img/IMG_9435.jpg') }, // lisbon view
    { background: containImage('img/IMG_9636.jpg') }, // cold lookout
    { background: containImage('img/IMG_9645.jpg') }, // cold lookout flower
    { background: containImage('img/IMG_9620.jpg') }, // mom castle
    { background: containImage('img/IMG_9555.jpg') }, // fun fort
    { background: containImage('img/IMG_9773.jpg') }, // dolphin boat pier
    { background: containImage('img/IMG_9769.jpg') }, // bro dolphin
    { background: containImage('img/IMG_9341.jpg') }, // silly knight
    { background: containImage('img/IMG_9326.jpg') }, // 3 walking
    {
      text: {
        value: 'Thanks for exposing us to a little bit of Europe!'
      }
    },

    { background: containImage('img/IMG_8208.jpg') }, // chocolate ice cream
    { background: containImage('img/IMG_9794.jpg') }, // calamari
    { background: containImage('img/IMG_9314.jpg') }, // meat plate
    {
      text: {
        value: 'And enjoying great food <br>and conversations together!'
      }
    },
    { background: containImage('img/IMG_8956.jpg') }, // mtv sunset

    { background: containImage('img/IMG_7973.jpg') }, // motif
    { background: containImage('img/IMG_9899.jpg') }, // tractor
    {
      text: {
        value: 'Thanks for inspiring us to work hard!'
      }
    },

    { background: containImage('img/IMG_7492.jpg') }, // feeding donkey
    {
      text: {
        value: 'And showing us how to care for others'
      }
    },

    { background: containImage('img/IMG_7900.jpg') }, // silly
    { background: containImage('img/IMG_5560.jpg') }, // mural
    {
      text: {
        value: 'And how to be silly.'
      }
    },

    { background: containImage('img/IMG_8013.jpg') }, // mural

    {
      background: {
        image: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
      },
      text: {
        value: 'We love you Dad! 💕',
        color: 'white'
      }
    },
    {
      background: {
        image: 'https://happybirthdaywishesworld.com/wp-content/uploads/2017/02/Happy-birthday-dad.jpg',
        size: 'contain',
        color: '#222'
      }
    }
  ],
  audio: {
    src: 'https://stanford.edu/~jiangts/birthday/leader-of-the-band.mp3'
  },
  revealConfig: {
    // hash: true
  }
});
