var player = new musical_reveal.Player({
  slides: [{
    text: {
      value: '<h3>Happy Birthday, Dad! <br>:heart: :cake: :smile: :smiley: :fried_egg:</h3> <br> from Damien and Allan'
    },
  }, {
    background: {
      image: 'https://cvws.icloud-content.com/B/AUMecqiiNmcdfFN2bIetFBimpIRxAfDiFMow8YK_Fw2iaYOGdt637JkZ/IMG_9864.JPG?o=AsI5GaadP1vcqR-qQSsPhv0A7TdEDp1myJUWwYbUbgwm&v=1&x=3&a=CAogIuQlJsP4GgLn6LnQMbjDWyTIErDJq7uGYDTnSn0Q8XMSHRC969Wzli4YvcixtZYuIgEAUgSmpIRxWgS37JkZ&e=1586565506&k=HTPpzBL6rwAKlAzoTi2giw&fl=&r=91df0ab9-005e-44e0-8e3a-3a9f9303af1d-1&ckc=com.apple.photos.cloud&ckz=CMM-D9B84CC7-B9FA-43BC-82BE-213B3214DEA7&y=1&p=31&s=hiInVhi0lfkUIjjK1vfhYAzxBW4'
    },
    text: {
      value: 'here\'s a review of the past year...',
      color: 'white'
    },
  }, {
    background: {
      image: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
    },
    text: {
      value: 'hello',
      color: 'white'
    }
  }, {
    background: {
      image: 'https://happybirthdaywishesworld.com/wp-content/uploads/2017/02/Happy-birthday-dad.jpg',
      size: 'contain',
      color: '#222'
    }
  }],
  audio: {
    src: 'https://stanford.edu/~jiangts/birthday/leader-of-the-band.mp3'
  },
  revealConfig: {
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
  }
});

