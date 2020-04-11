# Musical Reveal

Simple JSON interface to define audio synchronized slideshow over [reveal.js](https://github.com/hakimel/reveal.js)



## Getting started

1. Building the library
  * Run `yarn install` to fetch JS dependencies
  * Run `yarn build` to produce minify library
2. Dev mode
  * After dependencies are installed run `yarn dev`. This starts a non-minified JS compilation watcher



## Usage & Example app

After building, start static webserver in the `app/` directory.
Usage API can be found in [`app/js/index.js`](https://github.com/jiangts/musical-reveal/blob/master/app/js/index.js).

Slide rendering functions can be found in the `renderSlides` method of the `Player` class found in [`src/player.js`](https://github.com/jiangts/musical-reveal/blob/master/src/player.js).
