(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("musical_reveal", [], factory);
	else if(typeof exports === 'object')
		exports["musical_reveal"] = factory();
	else
		root["musical_reveal"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Reveal", {
  enumerable: true,
  get: function get() {
    return _reveal.default;
  }
});

var _reveal = _interopRequireDefault(__webpack_require__(/*! ./reveal */ "./src/reveal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/reveal.js":
/*!***********************!*\
  !*** ./src/reveal.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Reveal; // The reveal.js version

var VERSION = '3.9.2';
var SLIDES_SELECTOR = '.slides section',
    HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
    VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
    HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',
    UA = navigator.userAgent,
    // Methods that may not be invoked via the postMessage API
POST_MESSAGE_METHOD_BLACKLIST = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
    // Configuration defaults, can be overridden at initialization time
config = {
  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions
  width: 960,
  height: 700,
  // Factor of the display size that should remain empty around the content
  margin: 0.04,
  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0,
  // Display presentation control arrows
  controls: true,
  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: true,
  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout: 'bottom-right',
  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows: 'faded',
  // Display a presentation progress bar
  progress: true,
  // Display the page number of the current slide
  // - true:    Show slide number
  // - false:   Hide slide number
  //
  // Can optionally be set as a string that specifies the number formatting:
  // - "h.v":	  Horizontal . vertical slide number (default)
  // - "h/v":	  Horizontal / vertical slide number
  // - "c":	  Flattened slide number
  // - "c/t":	  Flattened slide number / total slides
  //
  // Alternatively, you can provide a function that returns the slide
  // number for the current slide. The function should take in a slide
  // object and return an array with one string [slideNumber] or
  // three strings [n1,delimiter,n2]. See #formatSlideNumber().
  slideNumber: false,
  // Can be used to limit the contexts in which the slide number appears
  // - "all":      Always show the slide number
  // - "print":    Only when printing to PDF
  // - "speaker":  Only in the speaker view
  showSlideNumber: 'all',
  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex: false,
  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: false,
  // Push each slide change to the browser history.  Implies `hash: true`
  history: false,
  // Enable keyboard shortcuts for navigation
  keyboard: true,
  // Optional function that blocks keyboard events when retuning false
  keyboardCondition: null,
  // Enable the slide overview mode
  overview: true,
  // Disables the default reveal.js slide layout so that you can use
  // custom CSS layout
  disableLayout: false,
  // Vertical centering of slides
  center: true,
  // Enables touch navigation on devices with touch input
  touch: true,
  // Loop the presentation
  loop: false,
  // Change the presentation direction to be RTL
  rtl: false,
  // Changes the behavior of our navigation directions.
  //
  // "default"
  // Left/right arrow keys step between horizontal slides, up/down
  // arrow keys step between vertical slides. Space key steps through
  // all slides (both horizontal and vertical).
  //
  // "linear"
  // Removes the up/down arrows. Left/right arrows step through all
  // slides (both horizontal and vertical).
  //
  // "grid"
  // When this is enabled, stepping left/right from a vertical stack
  // to an adjacent vertical stack will land you at the same vertical
  // index.
  //
  // Consider a deck with six slides ordered in two vertical stacks:
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // If you're on slide 1.3 and navigate right, you will normally move
  // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
  // from 1.3 -> 2.3.
  navigationMode: 'default',
  // Randomizes the order of slides each time the presentation loads
  shuffle: false,
  // Turns fragments on and off globally
  fragments: true,
  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL: false,
  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,
  // Flags if we should show a help overlay when the question-mark
  // key is pressed
  help: true,
  // Flags if it should be possible to pause the presentation (blackout)
  pause: true,
  // Flags if speaker notes should be visible to all viewers
  showNotes: false,
  // Global override for autolaying embedded media (video/audio/iframe)
  // - null:   Media will only autoplay if data-autoplay is present
  // - true:   All media will autoplay, regardless of individual setting
  // - false:  No media will autoplay, regardless of individual setting
  autoPlayMedia: null,
  // Global override for preloading lazy-loaded iframes
  // - null:   Iframes with data-src AND data-preload will be loaded when within
  //           the viewDistance, iframes with only data-src will be loaded when visible
  // - true:   All iframes with data-src will be loaded when within the viewDistance
  // - false:  All iframes with data-src will be loaded only when visible
  preloadIframes: null,
  // Controls automatic progression to the next slide
  // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
  //           is present on the current slide or fragment
  // - 1+:     All slides will progress automatically at the given interval
  // - false:  No auto-sliding, even if data-autoslide is present
  autoSlide: 0,
  // Stop auto-sliding after user input
  autoSlideStoppable: true,
  // Use this method for navigation when auto-sliding (defaults to navigateNext)
  autoSlideMethod: null,
  // Specify the average time in seconds that you think you will spend
  // presenting each slide. This is used to show a pacing timer in the
  // speaker view
  defaultTiming: null,
  // Enable slide navigation via mouse wheel
  mouseWheel: false,
  // Apply a 3D roll to links on hover
  rollingLinks: false,
  // Hides the address bar on mobile devices
  hideAddressBar: true,
  // Opens links in an iframe preview overlay
  // Add `data-preview-link` and `data-preview-link="false"` to customise each link
  // individually
  previewLinks: false,
  // Exposes the reveal.js API through window.postMessage
  postMessage: true,
  // Dispatches all reveal.js events to the parent window through postMessage
  postMessageEvents: false,
  // Focuses body when page changes visibility to ensure keyboard shortcuts work
  focusBodyOnPageVisibilityChange: true,
  // Transition style
  transition: 'slide',
  // none/fade/slide/convex/concave/zoom
  // Transition speed
  transitionSpeed: 'default',
  // default/fast/slow
  // Transition style for full page slide backgrounds
  backgroundTransition: 'fade',
  // none/fade/slide/convex/concave/zoom
  // Parallax background image
  parallaxBackgroundImage: '',
  // CSS syntax, e.g. "a.jpg"
  // Parallax background size
  parallaxBackgroundSize: '',
  // CSS syntax, e.g. "3000px 2000px"
  // Parallax background repeat
  parallaxBackgroundRepeat: '',
  // repeat/repeat-x/repeat-y/no-repeat/initial/inherit
  // Parallax background position
  parallaxBackgroundPosition: '',
  // CSS syntax, e.g. "top left"
  // Amount of pixels to move the parallax background per slide step
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  // The maximum number of pages a single slide can expand onto when printing
  // to PDF, unlimited by default
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  // Prints each fragment on a separate slide
  pdfSeparateFragments: true,
  // Offset used to reduce the height of content within exported PDF pages.
  // This exists to account for environment differences based on how you
  // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
  // on precisely the total height of the document whereas in-browser
  // printing has to end one pixel before.
  pdfPageHeightOffset: -1,
  // Number of slides away from the current that are visible
  viewDistance: 3,
  // Number of slides away from the current that are visible on mobile
  // devices. It is advisable to set this to a lower number than
  // viewDistance in order to save resources.
  mobileViewDistance: 2,
  // The display mode that will be used to show slides
  display: 'block',
  // Hide cursor if inactive
  hideInactiveCursor: true,
  // Time before the cursor is hidden (in ms)
  hideCursorTime: 5000,
  // Script dependencies to load
  dependencies: []
},
    // Flags if Reveal.initialize() has been called
initialized = false,
    // Flags if reveal.js is loaded (has dispatched the 'ready' event)
loaded = false,
    // Flags if the overview mode is currently active
overview = false,
    // Holds the dimensions of our overview slides, including margins
overviewSlideWidth = null,
    overviewSlideHeight = null,
    // The horizontal and vertical index of the currently active slide
indexh,
    indexv,
    // The previous and current slide HTML elements
previousSlide,
    currentSlide,
    previousBackground,
    // Remember which directions that the user has navigated towards
hasNavigatedRight = false,
    hasNavigatedDown = false,
    // Slides may hold a data-state attribute which we pick up and apply
// as a class to the body. This list contains the combined state of
// all current slides.
state = [],
    // The current scale of the presentation (see width/height config)
scale = 1,
    // CSS transform that is currently applied to the slides container,
// split into two groups
slidesTransform = {
  layout: '',
  overview: ''
},
    // Cached references to DOM elements
dom = {},
    // A list of registered reveal.js plugins
plugins = {},
    // List of asynchronously loaded reveal.js dependencies
asyncDependencies = [],
    // Features supported by the browser, see #checkCapabilities()
features = {},
    // Client is a mobile device, see #checkCapabilities()
isMobileDevice,
    // Client is a desktop Chrome, see #checkCapabilities()
isChrome,
    // Throttles mouse wheel navigation
lastMouseWheelStep = 0,
    // Delays updates to the URL due to a Chrome thumbnailer bug
writeURLTimeout = 0,
    // Is the mouse pointer currently hidden from view
cursorHidden = false,
    // Timeout used to determine when the cursor is inactive
cursorInactiveTimeout = 0,
    // Flags if the interaction event listeners are bound
eventsAreBound = false,
    // The current auto-slide duration
autoSlide = 0,
    // Auto slide properties
autoSlidePlayer,
    autoSlideTimeout = 0,
    autoSlideStartTime = -1,
    autoSlidePaused = false,
    // Holds information about the currently ongoing touch input
touch = {
  startX: 0,
  startY: 0,
  startCount: 0,
  captured: false,
  threshold: 40
},
    // A key:value map of shortcut keyboard keys and descriptions of
// the actions they trigger, generated in #configure()
keyboardShortcuts = {},
    // Holds custom key code mappings
registeredKeyBindings = {};
/**
 * Starts up the presentation if the client is capable.
 */

function initialize(options) {
  // Make sure we only initialize once
  if (initialized === true) return;
  initialized = true;
  checkCapabilities();

  if (!features.transforms2d && !features.transforms3d) {
    document.body.setAttribute('class', 'no-transforms'); // Since JS won't be running any further, we load all lazy
    // loading elements upfront

    var images = toArray(document.getElementsByTagName('img')),
        iframes = toArray(document.getElementsByTagName('iframe'));
    var lazyLoadable = images.concat(iframes);

    for (var i = 0, len = lazyLoadable.length; i < len; i++) {
      var element = lazyLoadable[i];

      if (element.getAttribute('data-src')) {
        element.setAttribute('src', element.getAttribute('data-src'));
        element.removeAttribute('data-src');
      }
    } // If the browser doesn't support core features we won't be
    // using JavaScript to control the presentation


    return;
  } // Cache references to key DOM elements


  dom.wrapper = document.querySelector('.reveal');
  dom.slides = document.querySelector('.reveal .slides'); // Force a layout when the whole page, incl fonts, has loaded

  window.addEventListener('load', layout, false);
  var query = Reveal.getQueryHash(); // Do not accept new dependencies via query config to avoid
  // the potential of malicious script injection

  if (typeof query['dependencies'] !== 'undefined') delete query['dependencies']; // Copy options over to our config object

  extend(config, options);
  extend(config, query); // Hide the address bar in mobile browsers

  hideAddressBar(); // Loads dependencies and continues to #start() once done

  load();
}
/**
 * Inspect the client to see what it's capable of, this
 * should only happens once per runtime.
 */


function checkCapabilities() {
  isMobileDevice = /(iphone|ipod|ipad|android)/gi.test(UA) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1; // iPadOS

  isChrome = /chrome/i.test(UA) && !/edge/i.test(UA);
  var testElement = document.createElement('div');
  features.transforms3d = 'WebkitPerspective' in testElement.style || 'MozPerspective' in testElement.style || 'msPerspective' in testElement.style || 'OPerspective' in testElement.style || 'perspective' in testElement.style;
  features.transforms2d = 'WebkitTransform' in testElement.style || 'MozTransform' in testElement.style || 'msTransform' in testElement.style || 'OTransform' in testElement.style || 'transform' in testElement.style;
  features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';
  features.canvas = !!document.createElement('canvas').getContext; // Transitions in the overview are disabled in desktop and
  // Safari due to lag

  features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(UA); // Flags if we should use zoom instead of transform to scale
  // up slides. Zoom produces crisper results but has a lot of
  // xbrowser quirks so we only use it in whitelsited browsers.

  features.zoom = 'zoom' in testElement.style && !isMobileDevice && (isChrome || /Version\/[\d\.]+.*Safari/.test(UA));
}
/**
 * Loads the dependencies of reveal.js. Dependencies are
 * defined via the configuration option 'dependencies'
 * and will be loaded prior to starting/binding reveal.js.
 * Some dependencies may have an 'async' flag, if so they
 * will load after reveal.js has been started up.
 */


function load() {
  var scripts = [],
      scriptsToLoad = 0;
  config.dependencies.forEach(function (s) {
    // Load if there's no condition or the condition is truthy
    if (!s.condition || s.condition()) {
      if (s.async) {
        asyncDependencies.push(s);
      } else {
        scripts.push(s);
      }
    }
  });

  if (scripts.length) {
    scriptsToLoad = scripts.length; // Load synchronous scripts

    scripts.forEach(function (s) {
      loadScript(s.src, function () {
        if (typeof s.callback === 'function') s.callback();

        if (--scriptsToLoad === 0) {
          initPlugins();
        }
      });
    });
  } else {
    initPlugins();
  }
}
/**
 * Initializes our plugins and waits for them to be ready
 * before proceeding.
 */


function initPlugins() {
  var pluginsToInitialize = Object.keys(plugins).length; // If there are no plugins, skip this step

  if (pluginsToInitialize === 0) {
    loadAsyncDependencies();
  } // ... otherwise initialize plugins
  else {
      var afterPlugInitialized = function afterPlugInitialized() {
        if (--pluginsToInitialize === 0) {
          loadAsyncDependencies();
        }
      };

      for (var i in plugins) {
        var plugin = plugins[i]; // If the plugin has an 'init' method, invoke it

        if (typeof plugin.init === 'function') {
          var callback = plugin.init(); // If the plugin returned a Promise, wait for it

          if (callback && typeof callback.then === 'function') {
            callback.then(afterPlugInitialized);
          } else {
            afterPlugInitialized();
          }
        } else {
          afterPlugInitialized();
        }
      }
    }
}
/**
 * Loads all async reveal.js dependencies.
 */


function loadAsyncDependencies() {
  if (asyncDependencies.length) {
    asyncDependencies.forEach(function (s) {
      loadScript(s.src, s.callback);
    });
  }

  start();
}
/**
 * Loads a JavaScript file from the given URL and executes it.
 *
 * @param {string} url Address of the .js file to load
 * @param {function} callback Method to invoke when the script
 * has loaded and executed
 */


function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = false;
  script.defer = false;
  script.src = url;

  if (callback) {
    // Success callback
    script.onload = script.onreadystatechange = function (event) {
      if (event.type === "load" || /loaded|complete/.test(script.readyState)) {
        // Kill event listeners
        script.onload = script.onreadystatechange = script.onerror = null;
        callback();
      }
    }; // Error callback


    script.onerror = function (err) {
      // Kill event listeners
      script.onload = script.onreadystatechange = script.onerror = null;
      callback(new Error('Failed loading script: ' + script.src + '\n' + err));
    };
  } // Append the script at the end of <head>


  var head = document.querySelector('head');
  head.insertBefore(script, head.lastChild);
}
/**
 * Starts up reveal.js by binding input events and navigating
 * to the current URL deeplink if there is one.
 */


function start() {
  loaded = true; // Make sure we've got all the DOM elements we need

  setupDOM(); // Listen to messages posted to this window

  setupPostMessage(); // Prevent the slides from being scrolled out of view

  setupScrollPrevention(); // Resets all vertical slides so that only the first is visible

  resetVerticalSlides(); // Updates the presentation to match the current configuration values

  configure(); // Read the initial hash

  readURL(); // Update all backgrounds

  updateBackground(true); // Notify listeners that the presentation is ready but use a 1ms
  // timeout to ensure it's not fired synchronously after #initialize()

  setTimeout(function () {
    // Enable transitions now that we're loaded
    dom.slides.classList.remove('no-transition');
    dom.wrapper.classList.add('ready');
    dispatchEvent('ready', {
      'indexh': indexh,
      'indexv': indexv,
      'currentSlide': currentSlide
    });
  }, 1); // Special setup and config is required when printing to PDF

  if (isPrintingPDF()) {
    removeEventListeners(); // The document needs to have loaded for the PDF layout
    // measurements to be accurate

    if (document.readyState === 'complete') {
      setupPDF();
    } else {
      window.addEventListener('load', setupPDF);
    }
  }
}
/**
 * Finds and stores references to DOM elements which are
 * required by the presentation. If a required element is
 * not found, it is created.
 */


function setupDOM() {
  // Prevent transitions while we're loading
  dom.slides.classList.add('no-transition');

  if (isMobileDevice) {
    dom.wrapper.classList.add('no-hover');
  } else {
    dom.wrapper.classList.remove('no-hover');
  }

  if (/iphone/gi.test(UA)) {
    dom.wrapper.classList.add('ua-iphone');
  } else {
    dom.wrapper.classList.remove('ua-iphone');
  } // Background element


  dom.background = createSingletonNode(dom.wrapper, 'div', 'backgrounds', null); // Progress bar

  dom.progress = createSingletonNode(dom.wrapper, 'div', 'progress', '<span></span>');
  dom.progressbar = dom.progress.querySelector('span'); // Arrow controls

  dom.controls = createSingletonNode(dom.wrapper, 'aside', 'controls', '<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button>' + '<button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button>' + '<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>' + '<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'); // Slide number

  dom.slideNumber = createSingletonNode(dom.wrapper, 'div', 'slide-number', ''); // Element containing notes that are visible to the audience

  dom.speakerNotes = createSingletonNode(dom.wrapper, 'div', 'speaker-notes', null);
  dom.speakerNotes.setAttribute('data-prevent-swipe', '');
  dom.speakerNotes.setAttribute('tabindex', '0'); // Overlay graphic which is displayed during the paused mode

  dom.pauseOverlay = createSingletonNode(dom.wrapper, 'div', 'pause-overlay', config.controls ? '<button class="resume-button">Resume presentation</button>' : null);
  dom.wrapper.setAttribute('role', 'application'); // There can be multiple instances of controls throughout the page

  dom.controlsLeft = toArray(document.querySelectorAll('.navigate-left'));
  dom.controlsRight = toArray(document.querySelectorAll('.navigate-right'));
  dom.controlsUp = toArray(document.querySelectorAll('.navigate-up'));
  dom.controlsDown = toArray(document.querySelectorAll('.navigate-down'));
  dom.controlsPrev = toArray(document.querySelectorAll('.navigate-prev'));
  dom.controlsNext = toArray(document.querySelectorAll('.navigate-next')); // The right and down arrows in the standard reveal.js controls

  dom.controlsRightArrow = dom.controls.querySelector('.navigate-right');
  dom.controlsDownArrow = dom.controls.querySelector('.navigate-down');
  dom.statusDiv = createStatusDiv();
}
/**
 * Creates a hidden div with role aria-live to announce the
 * current slide content. Hide the div off-screen to make it
 * available only to Assistive Technologies.
 *
 * @return {HTMLElement}
 */


function createStatusDiv() {
  var statusDiv = document.getElementById('aria-status-div');

  if (!statusDiv) {
    statusDiv = document.createElement('div');
    statusDiv.style.position = 'absolute';
    statusDiv.style.height = '1px';
    statusDiv.style.width = '1px';
    statusDiv.style.overflow = 'hidden';
    statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
    statusDiv.setAttribute('id', 'aria-status-div');
    statusDiv.setAttribute('aria-live', 'polite');
    statusDiv.setAttribute('aria-atomic', 'true');
    dom.wrapper.appendChild(statusDiv);
  }

  return statusDiv;
}
/**
 * Converts the given HTML element into a string of text
 * that can be announced to a screen reader. Hidden
 * elements are excluded.
 */


function getStatusText(node) {
  var text = ''; // Text node

  if (node.nodeType === 3) {
    text += node.textContent;
  } // Element node
  else if (node.nodeType === 1) {
      var isAriaHidden = node.getAttribute('aria-hidden');
      var isDisplayHidden = window.getComputedStyle(node)['display'] === 'none';

      if (isAriaHidden !== 'true' && !isDisplayHidden) {
        toArray(node.childNodes).forEach(function (child) {
          text += getStatusText(child);
        });
      }
    }

  return text;
}
/**
 * Configures the presentation for printing to a static
 * PDF.
 */


function setupPDF() {
  var slideSize = getComputedSlideSize(window.innerWidth, window.innerHeight); // Dimensions of the PDF pages

  var pageWidth = Math.floor(slideSize.width * (1 + config.margin)),
      pageHeight = Math.floor(slideSize.height * (1 + config.margin)); // Dimensions of slides within the pages

  var slideWidth = slideSize.width,
      slideHeight = slideSize.height; // Let the browser know what page size we want to print

  injectStyleSheet('@page{size:' + pageWidth + 'px ' + pageHeight + 'px; margin: 0px;}'); // Limit the size of certain elements to the dimensions of the slide

  injectStyleSheet('.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: ' + slideWidth + 'px; max-height:' + slideHeight + 'px}');
  document.body.classList.add('print-pdf');
  document.body.style.width = pageWidth + 'px';
  document.body.style.height = pageHeight + 'px'; // Make sure stretch elements fit on slide

  layoutSlideContents(slideWidth, slideHeight); // Compute slide numbers now, before we start duplicating slides

  var doingSlideNumbers = config.slideNumber && /all|print/i.test(config.showSlideNumber);
  toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR)).forEach(function (slide) {
    slide.setAttribute('data-slide-number', getSlideNumber(slide));
  }); // Slide and slide background layout

  toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR)).forEach(function (slide) {
    // Vertical stacks are not centred since their section
    // children will be
    if (slide.classList.contains('stack') === false) {
      // Center the slide inside of the page, giving the slide some margin
      var left = (pageWidth - slideWidth) / 2,
          top = (pageHeight - slideHeight) / 2;
      var contentHeight = slide.scrollHeight;
      var numberOfPages = Math.max(Math.ceil(contentHeight / pageHeight), 1); // Adhere to configured pages per slide limit

      numberOfPages = Math.min(numberOfPages, config.pdfMaxPagesPerSlide); // Center slides vertically

      if (numberOfPages === 1 && config.center || slide.classList.contains('center')) {
        top = Math.max((pageHeight - contentHeight) / 2, 0);
      } // Wrap the slide in a page element and hide its overflow
      // so that no page ever flows onto another


      var page = document.createElement('div');
      page.className = 'pdf-page';
      page.style.height = (pageHeight + config.pdfPageHeightOffset) * numberOfPages + 'px';
      slide.parentNode.insertBefore(page, slide);
      page.appendChild(slide); // Position the slide inside of the page

      slide.style.left = left + 'px';
      slide.style.top = top + 'px';
      slide.style.width = slideWidth + 'px';

      if (slide.slideBackgroundElement) {
        page.insertBefore(slide.slideBackgroundElement, slide);
      } // Inject notes if `showNotes` is enabled


      if (config.showNotes) {
        // Are there notes for this slide?
        var notes = getSlideNotes(slide);

        if (notes) {
          var notesSpacing = 8;
          var notesLayout = typeof config.showNotes === 'string' ? config.showNotes : 'inline';
          var notesElement = document.createElement('div');
          notesElement.classList.add('speaker-notes');
          notesElement.classList.add('speaker-notes-pdf');
          notesElement.setAttribute('data-layout', notesLayout);
          notesElement.innerHTML = notes;

          if (notesLayout === 'separate-page') {
            page.parentNode.insertBefore(notesElement, page.nextSibling);
          } else {
            notesElement.style.left = notesSpacing + 'px';
            notesElement.style.bottom = notesSpacing + 'px';
            notesElement.style.width = pageWidth - notesSpacing * 2 + 'px';
            page.appendChild(notesElement);
          }
        }
      } // Inject slide numbers if `slideNumbers` are enabled


      if (doingSlideNumbers) {
        var numberElement = document.createElement('div');
        numberElement.classList.add('slide-number');
        numberElement.classList.add('slide-number-pdf');
        numberElement.innerHTML = slide.getAttribute('data-slide-number');
        page.appendChild(numberElement);
      } // Copy page and show fragments one after another


      if (config.pdfSeparateFragments) {
        // Each fragment 'group' is an array containing one or more
        // fragments. Multiple fragments that appear at the same time
        // are part of the same group.
        var fragmentGroups = sortFragments(page.querySelectorAll('.fragment'), true);
        var previousFragmentStep;
        var previousPage;
        fragmentGroups.forEach(function (fragments) {
          // Remove 'current-fragment' from the previous group
          if (previousFragmentStep) {
            previousFragmentStep.forEach(function (fragment) {
              fragment.classList.remove('current-fragment');
            });
          } // Show the fragments for the current index


          fragments.forEach(function (fragment) {
            fragment.classList.add('visible', 'current-fragment');
          }); // Create a separate page for the current fragment state

          var clonedPage = page.cloneNode(true);
          page.parentNode.insertBefore(clonedPage, (previousPage || page).nextSibling);
          previousFragmentStep = fragments;
          previousPage = clonedPage;
        }); // Reset the first/original page so that all fragments are hidden

        fragmentGroups.forEach(function (fragments) {
          fragments.forEach(function (fragment) {
            fragment.classList.remove('visible', 'current-fragment');
          });
        });
      } // Show all fragments
      else {
          toArray(page.querySelectorAll('.fragment:not(.fade-out)')).forEach(function (fragment) {
            fragment.classList.add('visible');
          });
        }
    }
  }); // Notify subscribers that the PDF layout is good to go

  dispatchEvent('pdf-ready');
}
/**
 * This is an unfortunate necessity. Some actions – such as
 * an input field being focused in an iframe or using the
 * keyboard to expand text selection beyond the bounds of
 * a slide – can trigger our content to be pushed out of view.
 * This scrolling can not be prevented by hiding overflow in
 * CSS (we already do) so we have to resort to repeatedly
 * checking if the slides have been offset :(
 */


function setupScrollPrevention() {
  setInterval(function () {
    if (dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0) {
      dom.wrapper.scrollTop = 0;
      dom.wrapper.scrollLeft = 0;
    }
  }, 1000);
}
/**
 * Creates an HTML element and returns a reference to it.
 * If the element already exists the existing instance will
 * be returned.
 *
 * @param {HTMLElement} container
 * @param {string} tagname
 * @param {string} classname
 * @param {string} innerHTML
 *
 * @return {HTMLElement}
 */


function createSingletonNode(container, tagname, classname, innerHTML) {
  // Find all nodes matching the description
  var nodes = container.querySelectorAll('.' + classname); // Check all matches to find one which is a direct child of
  // the specified container

  for (var i = 0; i < nodes.length; i++) {
    var testNode = nodes[i];

    if (testNode.parentNode === container) {
      return testNode;
    }
  } // If no node was found, create it now


  var node = document.createElement(tagname);
  node.className = classname;

  if (typeof innerHTML === 'string') {
    node.innerHTML = innerHTML;
  }

  container.appendChild(node);
  return node;
}
/**
 * Creates the slide background elements and appends them
 * to the background container. One element is created per
 * slide no matter if the given slide has visible background.
 */


function createBackgrounds() {
  var printMode = isPrintingPDF(); // Clear prior backgrounds

  dom.background.innerHTML = '';
  dom.background.classList.add('no-transition'); // Iterate over all horizontal slides

  toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)).forEach(function (slideh) {
    var backgroundStack = createBackground(slideh, dom.background); // Iterate over all vertical slides

    toArray(slideh.querySelectorAll('section')).forEach(function (slidev) {
      createBackground(slidev, backgroundStack);
      backgroundStack.classList.add('stack');
    });
  }); // Add parallax background if specified

  if (config.parallaxBackgroundImage) {
    dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
    dom.background.style.backgroundSize = config.parallaxBackgroundSize;
    dom.background.style.backgroundRepeat = config.parallaxBackgroundRepeat;
    dom.background.style.backgroundPosition = config.parallaxBackgroundPosition; // Make sure the below properties are set on the element - these properties are
    // needed for proper transitions to be set on the element via CSS. To remove
    // annoying background slide-in effect when the presentation starts, apply
    // these properties after short time delay

    setTimeout(function () {
      dom.wrapper.classList.add('has-parallax-background');
    }, 1);
  } else {
    dom.background.style.backgroundImage = '';
    dom.wrapper.classList.remove('has-parallax-background');
  }
}
/**
 * Creates a background for the given slide.
 *
 * @param {HTMLElement} slide
 * @param {HTMLElement} container The element that the background
 * should be appended to
 * @return {HTMLElement} New background div
 */


function createBackground(slide, container) {
  // Main slide background element
  var element = document.createElement('div');
  element.className = 'slide-background ' + slide.className.replace(/present|past|future/, ''); // Inner background element that wraps images/videos/iframes

  var contentElement = document.createElement('div');
  contentElement.className = 'slide-background-content';
  element.appendChild(contentElement);
  container.appendChild(element);
  slide.slideBackgroundElement = element;
  slide.slideBackgroundContentElement = contentElement; // Syncs the background to reflect all current background settings

  syncBackground(slide);
  return element;
}
/**
 * Renders all of the visual properties of a slide background
 * based on the various background attributes.
 *
 * @param {HTMLElement} slide
 */


function syncBackground(slide) {
  var element = slide.slideBackgroundElement,
      contentElement = slide.slideBackgroundContentElement; // Reset the prior background state in case this is not the
  // initial sync

  slide.classList.remove('has-dark-background');
  slide.classList.remove('has-light-background');
  element.removeAttribute('data-loaded');
  element.removeAttribute('data-background-hash');
  element.removeAttribute('data-background-size');
  element.removeAttribute('data-background-transition');
  element.style.backgroundColor = '';
  contentElement.style.backgroundSize = '';
  contentElement.style.backgroundRepeat = '';
  contentElement.style.backgroundPosition = '';
  contentElement.style.backgroundImage = '';
  contentElement.style.opacity = '';
  contentElement.innerHTML = '';
  var data = {
    background: slide.getAttribute('data-background'),
    backgroundSize: slide.getAttribute('data-background-size'),
    backgroundImage: slide.getAttribute('data-background-image'),
    backgroundVideo: slide.getAttribute('data-background-video'),
    backgroundIframe: slide.getAttribute('data-background-iframe'),
    backgroundColor: slide.getAttribute('data-background-color'),
    backgroundRepeat: slide.getAttribute('data-background-repeat'),
    backgroundPosition: slide.getAttribute('data-background-position'),
    backgroundTransition: slide.getAttribute('data-background-transition'),
    backgroundOpacity: slide.getAttribute('data-background-opacity')
  };

  if (data.background) {
    // Auto-wrap image urls in url(...)
    if (/^(http|file|\/\/)/gi.test(data.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(data.background)) {
      slide.setAttribute('data-background-image', data.background);
    } else {
      element.style.background = data.background;
    }
  } // Create a hash for this combination of background settings.
  // This is used to determine when two slide backgrounds are
  // the same.


  if (data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe) {
    element.setAttribute('data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundVideo + data.backgroundIframe + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition + data.backgroundOpacity);
  } // Additional and optional background properties


  if (data.backgroundSize) element.setAttribute('data-background-size', data.backgroundSize);
  if (data.backgroundColor) element.style.backgroundColor = data.backgroundColor;
  if (data.backgroundTransition) element.setAttribute('data-background-transition', data.backgroundTransition);
  if (slide.hasAttribute('data-preload')) element.setAttribute('data-preload', ''); // Background image options are set on the content wrapper

  if (data.backgroundSize) contentElement.style.backgroundSize = data.backgroundSize;
  if (data.backgroundRepeat) contentElement.style.backgroundRepeat = data.backgroundRepeat;
  if (data.backgroundPosition) contentElement.style.backgroundPosition = data.backgroundPosition;
  if (data.backgroundOpacity) contentElement.style.opacity = data.backgroundOpacity; // If this slide has a background color, we add a class that
  // signals if it is light or dark. If the slide has no background
  // color, no class will be added

  var contrastColor = data.backgroundColor; // If no bg color was found, check the computed background

  if (!contrastColor) {
    var computedBackgroundStyle = window.getComputedStyle(element);

    if (computedBackgroundStyle && computedBackgroundStyle.backgroundColor) {
      contrastColor = computedBackgroundStyle.backgroundColor;
    }
  }

  if (contrastColor) {
    var rgb = colorToRgb(contrastColor); // Ignore fully transparent backgrounds. Some browsers return
    // rgba(0,0,0,0) when reading the computed background color of
    // an element with no background

    if (rgb && rgb.a !== 0) {
      if (colorBrightness(contrastColor) < 128) {
        slide.classList.add('has-dark-background');
      } else {
        slide.classList.add('has-light-background');
      }
    }
  }
}
/**
 * Registers a listener to postMessage events, this makes it
 * possible to call all reveal.js API methods from another
 * window. For example:
 *
 * revealWindow.postMessage( JSON.stringify({
 *   method: 'slide',
 *   args: [ 2 ]
 * }), '*' );
 */


function setupPostMessage() {
  if (config.postMessage) {
    window.addEventListener('message', function (event) {
      var data = event.data; // Make sure we're dealing with JSON

      if (typeof data === 'string' && data.charAt(0) === '{' && data.charAt(data.length - 1) === '}') {
        data = JSON.parse(data); // Check if the requested method can be found

        if (data.method && typeof Reveal[data.method] === 'function') {
          if (POST_MESSAGE_METHOD_BLACKLIST.test(data.method) === false) {
            var result = Reveal[data.method].apply(Reveal, data.args); // Dispatch a postMessage event with the returned value from
            // our method invocation for getter functions

            dispatchPostMessage('callback', {
              method: data.method,
              result: result
            });
          } else {
            console.warn('reveal.js: "' + data.method + '" is is blacklisted from the postMessage API');
          }
        }
      }
    }, false);
  }
}
/**
 * Applies the configuration settings from the config
 * object. May be called multiple times.
 *
 * @param {object} options
 */


function configure(options) {
  var oldTransition = config.transition; // New config options may be passed when this method
  // is invoked through the API after initialization

  if (_typeof(options) === 'object') extend(config, options); // Abort if reveal.js hasn't finished loading, config
  // changes will be applied automatically once loading
  // finishes

  if (loaded === false) return;
  var numberOfSlides = dom.wrapper.querySelectorAll(SLIDES_SELECTOR).length; // Remove the previously configured transition class

  dom.wrapper.classList.remove(oldTransition); // Force linear transition based on browser capabilities

  if (features.transforms3d === false) config.transition = 'linear';
  dom.wrapper.classList.add(config.transition);
  dom.wrapper.setAttribute('data-transition-speed', config.transitionSpeed);
  dom.wrapper.setAttribute('data-background-transition', config.backgroundTransition);
  dom.controls.style.display = config.controls ? 'block' : 'none';
  dom.progress.style.display = config.progress ? 'block' : 'none';
  dom.controls.setAttribute('data-controls-layout', config.controlsLayout);
  dom.controls.setAttribute('data-controls-back-arrows', config.controlsBackArrows);

  if (config.shuffle) {
    shuffle();
  }

  if (config.rtl) {
    dom.wrapper.classList.add('rtl');
  } else {
    dom.wrapper.classList.remove('rtl');
  }

  if (config.center) {
    dom.wrapper.classList.add('center');
  } else {
    dom.wrapper.classList.remove('center');
  } // Exit the paused mode if it was configured off


  if (config.pause === false) {
    resume();
  }

  if (config.showNotes) {
    dom.speakerNotes.setAttribute('data-layout', typeof config.showNotes === 'string' ? config.showNotes : 'inline');
  }

  if (config.mouseWheel) {
    document.addEventListener('DOMMouseScroll', onDocumentMouseScroll, false); // FF

    document.addEventListener('mousewheel', onDocumentMouseScroll, false);
  } else {
    document.removeEventListener('DOMMouseScroll', onDocumentMouseScroll, false); // FF

    document.removeEventListener('mousewheel', onDocumentMouseScroll, false);
  } // Rolling 3D links


  if (config.rollingLinks) {
    enableRollingLinks();
  } else {
    disableRollingLinks();
  } // Auto-hide the mouse pointer when its inactive


  if (config.hideInactiveCursor) {
    document.addEventListener('mousemove', onDocumentCursorActive, false);
    document.addEventListener('mousedown', onDocumentCursorActive, false);
  } else {
    showCursor();
    document.removeEventListener('mousemove', onDocumentCursorActive, false);
    document.removeEventListener('mousedown', onDocumentCursorActive, false);
  } // Iframe link previews


  if (config.previewLinks) {
    enablePreviewLinks();
    disablePreviewLinks('[data-preview-link=false]');
  } else {
    disablePreviewLinks();
    enablePreviewLinks('[data-preview-link]:not([data-preview-link=false])');
  } // Remove existing auto-slide controls


  if (autoSlidePlayer) {
    autoSlidePlayer.destroy();
    autoSlidePlayer = null;
  } // Generate auto-slide controls if needed


  if (numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame) {
    autoSlidePlayer = new Playback(dom.wrapper, function () {
      return Math.min(Math.max((Date.now() - autoSlideStartTime) / autoSlide, 0), 1);
    });
    autoSlidePlayer.on('click', onAutoSlidePlayerClick);
    autoSlidePaused = false;
  } // When fragments are turned off they should be visible


  if (config.fragments === false) {
    toArray(dom.slides.querySelectorAll('.fragment')).forEach(function (element) {
      element.classList.add('visible');
      element.classList.remove('current-fragment');
    });
  } // Slide numbers


  var slideNumberDisplay = 'none';

  if (config.slideNumber && !isPrintingPDF()) {
    if (config.showSlideNumber === 'all') {
      slideNumberDisplay = 'block';
    } else if (config.showSlideNumber === 'speaker' && isSpeakerNotes()) {
      slideNumberDisplay = 'block';
    }
  }

  dom.slideNumber.style.display = slideNumberDisplay; // Add the navigation mode to the DOM so we can adjust styling

  if (config.navigationMode !== 'default') {
    dom.wrapper.setAttribute('data-navigation-mode', config.navigationMode);
  } else {
    dom.wrapper.removeAttribute('data-navigation-mode');
  } // Define our contextual list of keyboard shortcuts


  if (config.navigationMode === 'linear') {
    keyboardShortcuts['&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J'] = 'Next slide';
    keyboardShortcuts['&#8592;  ,  &#8593;  ,  P  ,  H  ,  K'] = 'Previous slide';
  } else {
    keyboardShortcuts['N  ,  SPACE'] = 'Next slide';
    keyboardShortcuts['P'] = 'Previous slide';
    keyboardShortcuts['&#8592;  ,  H'] = 'Navigate left';
    keyboardShortcuts['&#8594;  ,  L'] = 'Navigate right';
    keyboardShortcuts['&#8593;  ,  K'] = 'Navigate up';
    keyboardShortcuts['&#8595;  ,  J'] = 'Navigate down';
  }

  keyboardShortcuts['Home  ,  Shift &#8592;'] = 'First slide';
  keyboardShortcuts['End  ,  Shift &#8594;'] = 'Last slide';
  keyboardShortcuts['B  ,  .'] = 'Pause';
  keyboardShortcuts['F'] = 'Fullscreen';
  keyboardShortcuts['ESC, O'] = 'Slide overview';
  sync();
}
/**
 * Binds all event listeners.
 */


function addEventListeners() {
  eventsAreBound = true;
  window.addEventListener('hashchange', onWindowHashChange, false);
  window.addEventListener('resize', onWindowResize, false);

  if (config.touch) {
    if ('onpointerdown' in window) {
      // Use W3C pointer events
      dom.wrapper.addEventListener('pointerdown', onPointerDown, false);
      dom.wrapper.addEventListener('pointermove', onPointerMove, false);
      dom.wrapper.addEventListener('pointerup', onPointerUp, false);
    } else if (window.navigator.msPointerEnabled) {
      // IE 10 uses prefixed version of pointer events
      dom.wrapper.addEventListener('MSPointerDown', onPointerDown, false);
      dom.wrapper.addEventListener('MSPointerMove', onPointerMove, false);
      dom.wrapper.addEventListener('MSPointerUp', onPointerUp, false);
    } else {
      // Fall back to touch events
      dom.wrapper.addEventListener('touchstart', onTouchStart, false);
      dom.wrapper.addEventListener('touchmove', onTouchMove, false);
      dom.wrapper.addEventListener('touchend', onTouchEnd, false);
    }
  }

  if (config.keyboard) {
    document.addEventListener('keydown', onDocumentKeyDown, false);
    document.addEventListener('keypress', onDocumentKeyPress, false);
  }

  if (config.progress && dom.progress) {
    dom.progress.addEventListener('click', onProgressClicked, false);
  }

  dom.pauseOverlay.addEventListener('click', resume, false);

  if (config.focusBodyOnPageVisibilityChange) {
    var visibilityChange;

    if ('hidden' in document) {
      visibilityChange = 'visibilitychange';
    } else if ('msHidden' in document) {
      visibilityChange = 'msvisibilitychange';
    } else if ('webkitHidden' in document) {
      visibilityChange = 'webkitvisibilitychange';
    }

    if (visibilityChange) {
      document.addEventListener(visibilityChange, onPageVisibilityChange, false);
    }
  } // Listen to both touch and click events, in case the device
  // supports both


  var pointerEvents = ['touchstart', 'click']; // Only support touch for Android, fixes double navigations in
  // stock browser

  if (UA.match(/android/gi)) {
    pointerEvents = ['touchstart'];
  }

  pointerEvents.forEach(function (eventName) {
    dom.controlsLeft.forEach(function (el) {
      el.addEventListener(eventName, onNavigateLeftClicked, false);
    });
    dom.controlsRight.forEach(function (el) {
      el.addEventListener(eventName, onNavigateRightClicked, false);
    });
    dom.controlsUp.forEach(function (el) {
      el.addEventListener(eventName, onNavigateUpClicked, false);
    });
    dom.controlsDown.forEach(function (el) {
      el.addEventListener(eventName, onNavigateDownClicked, false);
    });
    dom.controlsPrev.forEach(function (el) {
      el.addEventListener(eventName, onNavigatePrevClicked, false);
    });
    dom.controlsNext.forEach(function (el) {
      el.addEventListener(eventName, onNavigateNextClicked, false);
    });
  });
}
/**
 * Unbinds all event listeners.
 */


function removeEventListeners() {
  eventsAreBound = false;
  document.removeEventListener('keydown', onDocumentKeyDown, false);
  document.removeEventListener('keypress', onDocumentKeyPress, false);
  window.removeEventListener('hashchange', onWindowHashChange, false);
  window.removeEventListener('resize', onWindowResize, false);
  dom.wrapper.removeEventListener('pointerdown', onPointerDown, false);
  dom.wrapper.removeEventListener('pointermove', onPointerMove, false);
  dom.wrapper.removeEventListener('pointerup', onPointerUp, false);
  dom.wrapper.removeEventListener('MSPointerDown', onPointerDown, false);
  dom.wrapper.removeEventListener('MSPointerMove', onPointerMove, false);
  dom.wrapper.removeEventListener('MSPointerUp', onPointerUp, false);
  dom.wrapper.removeEventListener('touchstart', onTouchStart, false);
  dom.wrapper.removeEventListener('touchmove', onTouchMove, false);
  dom.wrapper.removeEventListener('touchend', onTouchEnd, false);
  dom.pauseOverlay.removeEventListener('click', resume, false);

  if (config.progress && dom.progress) {
    dom.progress.removeEventListener('click', onProgressClicked, false);
  }

  ['touchstart', 'click'].forEach(function (eventName) {
    dom.controlsLeft.forEach(function (el) {
      el.removeEventListener(eventName, onNavigateLeftClicked, false);
    });
    dom.controlsRight.forEach(function (el) {
      el.removeEventListener(eventName, onNavigateRightClicked, false);
    });
    dom.controlsUp.forEach(function (el) {
      el.removeEventListener(eventName, onNavigateUpClicked, false);
    });
    dom.controlsDown.forEach(function (el) {
      el.removeEventListener(eventName, onNavigateDownClicked, false);
    });
    dom.controlsPrev.forEach(function (el) {
      el.removeEventListener(eventName, onNavigatePrevClicked, false);
    });
    dom.controlsNext.forEach(function (el) {
      el.removeEventListener(eventName, onNavigateNextClicked, false);
    });
  });
}
/**
 * Registers a new plugin with this reveal.js instance.
 *
 * reveal.js waits for all regisered plugins to initialize
 * before considering itself ready, as long as the plugin
 * is registered before calling `Reveal.initialize()`.
 */


function registerPlugin(id, plugin) {
  if (plugins[id] === undefined) {
    plugins[id] = plugin; // If a plugin is registered after reveal.js is loaded,
    // initialize it right away

    if (loaded && typeof plugin.init === 'function') {
      plugin.init();
    }
  } else {
    console.warn('reveal.js: "' + id + '" plugin has already been registered');
  }
}
/**
 * Checks if a specific plugin has been registered.
 *
 * @param {String} id Unique plugin identifier
 */


function hasPlugin(id) {
  return !!plugins[id];
}
/**
 * Returns the specific plugin instance, if a plugin
 * with the given ID has been registered.
 *
 * @param {String} id Unique plugin identifier
 */


function getPlugin(id) {
  return plugins[id];
}
/**
 * Add a custom key binding with optional description to
 * be added to the help screen.
 */


function addKeyBinding(binding, callback) {
  if (_typeof(binding) === 'object' && binding.keyCode) {
    registeredKeyBindings[binding.keyCode] = {
      callback: callback,
      key: binding.key,
      description: binding.description
    };
  } else {
    registeredKeyBindings[binding] = {
      callback: callback,
      key: null,
      description: null
    };
  }
}
/**
 * Removes the specified custom key binding.
 */


function removeKeyBinding(keyCode) {
  delete registeredKeyBindings[keyCode];
}
/**
 * Extend object a with the properties of object b.
 * If there's a conflict, object b takes precedence.
 *
 * @param {object} a
 * @param {object} b
 */


function extend(a, b) {
  for (var i in b) {
    a[i] = b[i];
  }

  return a;
}
/**
 * Converts the target object to an array.
 *
 * @param {object} o
 * @return {object[]}
 */


function toArray(o) {
  return Array.prototype.slice.call(o);
}
/**
 * Utility for deserializing a value.
 *
 * @param {*} value
 * @return {*}
 */


function deserialize(value) {
  if (typeof value === 'string') {
    if (value === 'null') return null;else if (value === 'true') return true;else if (value === 'false') return false;else if (value.match(/^-?[\d\.]+$/)) return parseFloat(value);
  }

  return value;
}
/**
 * Measures the distance in pixels between point a
 * and point b.
 *
 * @param {object} a point with x/y properties
 * @param {object} b point with x/y properties
 *
 * @return {number}
 */


function distanceBetween(a, b) {
  var dx = a.x - b.x,
      dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
/**
 * Applies a CSS transform to the target element.
 *
 * @param {HTMLElement} element
 * @param {string} transform
 */


function transformElement(element, transform) {
  element.style.WebkitTransform = transform;
  element.style.MozTransform = transform;
  element.style.msTransform = transform;
  element.style.transform = transform;
}
/**
 * Applies CSS transforms to the slides container. The container
 * is transformed from two separate sources: layout and the overview
 * mode.
 *
 * @param {object} transforms
 */


function transformSlides(transforms) {
  // Pick up new transforms from arguments
  if (typeof transforms.layout === 'string') slidesTransform.layout = transforms.layout;
  if (typeof transforms.overview === 'string') slidesTransform.overview = transforms.overview; // Apply the transforms to the slides container

  if (slidesTransform.layout) {
    transformElement(dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview);
  } else {
    transformElement(dom.slides, slidesTransform.overview);
  }
}
/**
 * Injects the given CSS styles into the DOM.
 *
 * @param {string} value
 */


function injectStyleSheet(value) {
  var tag = document.createElement('style');
  tag.type = 'text/css';

  if (tag.styleSheet) {
    tag.styleSheet.cssText = value;
  } else {
    tag.appendChild(document.createTextNode(value));
  }

  document.getElementsByTagName('head')[0].appendChild(tag);
}
/**
 * Find the closest parent that matches the given
 * selector.
 *
 * @param {HTMLElement} target The child element
 * @param {String} selector The CSS selector to match
 * the parents against
 *
 * @return {HTMLElement} The matched parent or null
 * if no matching parent was found
 */


function closestParent(target, selector) {
  var parent = target.parentNode;

  while (parent) {
    // There's some overhead doing this each time, we don't
    // want to rewrite the element prototype but should still
    // be enough to feature detect once at startup...
    var matchesMethod = parent.matches || parent.matchesSelector || parent.msMatchesSelector; // If we find a match, we're all set

    if (matchesMethod && matchesMethod.call(parent, selector)) {
      return parent;
    } // Keep searching


    parent = parent.parentNode;
  }

  return null;
}
/**
 * Converts various color input formats to an {r:0,g:0,b:0} object.
 *
 * @param {string} color The string representation of a color
 * @example
 * colorToRgb('#000');
 * @example
 * colorToRgb('#000000');
 * @example
 * colorToRgb('rgb(0,0,0)');
 * @example
 * colorToRgb('rgba(0,0,0)');
 *
 * @return {{r: number, g: number, b: number, [a]: number}|null}
 */


function colorToRgb(color) {
  var hex3 = color.match(/^#([0-9a-f]{3})$/i);

  if (hex3 && hex3[1]) {
    hex3 = hex3[1];
    return {
      r: parseInt(hex3.charAt(0), 16) * 0x11,
      g: parseInt(hex3.charAt(1), 16) * 0x11,
      b: parseInt(hex3.charAt(2), 16) * 0x11
    };
  }

  var hex6 = color.match(/^#([0-9a-f]{6})$/i);

  if (hex6 && hex6[1]) {
    hex6 = hex6[1];
    return {
      r: parseInt(hex6.substr(0, 2), 16),
      g: parseInt(hex6.substr(2, 2), 16),
      b: parseInt(hex6.substr(4, 2), 16)
    };
  }

  var rgb = color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);

  if (rgb) {
    return {
      r: parseInt(rgb[1], 10),
      g: parseInt(rgb[2], 10),
      b: parseInt(rgb[3], 10)
    };
  }

  var rgba = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);

  if (rgba) {
    return {
      r: parseInt(rgba[1], 10),
      g: parseInt(rgba[2], 10),
      b: parseInt(rgba[3], 10),
      a: parseFloat(rgba[4])
    };
  }

  return null;
}
/**
 * Calculates brightness on a scale of 0-255.
 *
 * @param {string} color See colorToRgb for supported formats.
 * @see {@link colorToRgb}
 */


function colorBrightness(color) {
  if (typeof color === 'string') color = colorToRgb(color);

  if (color) {
    return (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
  }

  return null;
}
/**
 * Returns the remaining height within the parent of the
 * target element.
 *
 * remaining height = [ configured parent height ] - [ current parent height ]
 *
 * @param {HTMLElement} element
 * @param {number} [height]
 */


function getRemainingHeight(element, height) {
  height = height || 0;

  if (element) {
    var newHeight,
        oldHeight = element.style.height; // Change the .stretch element height to 0 in order find the height of all
    // the other elements

    element.style.height = '0px'; // In Overview mode, the parent (.slide) height is set of 700px.
    // Restore it temporarily to its natural height.

    element.parentNode.style.height = 'auto';
    newHeight = height - element.parentNode.offsetHeight; // Restore the old height, just in case

    element.style.height = oldHeight + 'px'; // Clear the parent (.slide) height. .removeProperty works in IE9+

    element.parentNode.style.removeProperty('height');
    return newHeight;
  }

  return height;
}
/**
 * Checks if this instance is being used to print a PDF.
 */


function isPrintingPDF() {
  return /print-pdf/gi.test(window.location.search);
}
/**
 * Hides the address bar if we're on a mobile device.
 */


function hideAddressBar() {
  if (config.hideAddressBar && isMobileDevice) {
    // Events that should trigger the address bar to hide
    window.addEventListener('load', removeAddressBar, false);
    window.addEventListener('orientationchange', removeAddressBar, false);
  }
}
/**
 * Causes the address bar to hide on mobile devices,
 * more vertical space ftw.
 */


function removeAddressBar() {
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 10);
}
/**
 * Dispatches an event of the specified type from the
 * reveal DOM element.
 */


function dispatchEvent(type, args) {
  var event = document.createEvent('HTMLEvents', 1, 2);
  event.initEvent(type, true, true);
  extend(event, args);
  dom.wrapper.dispatchEvent(event); // If we're in an iframe, post each reveal.js event to the
  // parent window. Used by the notes plugin

  dispatchPostMessage(type);
}
/**
 * Dispatched a postMessage of the given type from our window.
 */


function dispatchPostMessage(type, data) {
  if (config.postMessageEvents && window.parent !== window.self) {
    var message = {
      namespace: 'reveal',
      eventName: type,
      state: getState()
    };
    extend(message, data);
    window.parent.postMessage(JSON.stringify(message), '*');
  }
}
/**
 * Wrap all links in 3D goodness.
 */


function enableRollingLinks() {
  if (features.transforms3d && !('msPerspective' in document.body.style)) {
    var anchors = dom.wrapper.querySelectorAll(SLIDES_SELECTOR + ' a');

    for (var i = 0, len = anchors.length; i < len; i++) {
      var anchor = anchors[i];

      if (anchor.textContent && !anchor.querySelector('*') && (!anchor.className || !anchor.classList.contains(anchor, 'roll'))) {
        var span = document.createElement('span');
        span.setAttribute('data-title', anchor.text);
        span.innerHTML = anchor.innerHTML;
        anchor.classList.add('roll');
        anchor.innerHTML = '';
        anchor.appendChild(span);
      }
    }
  }
}
/**
 * Unwrap all 3D links.
 */


function disableRollingLinks() {
  var anchors = dom.wrapper.querySelectorAll(SLIDES_SELECTOR + ' a.roll');

  for (var i = 0, len = anchors.length; i < len; i++) {
    var anchor = anchors[i];
    var span = anchor.querySelector('span');

    if (span) {
      anchor.classList.remove('roll');
      anchor.innerHTML = span.innerHTML;
    }
  }
}
/**
 * Bind preview frame links.
 *
 * @param {string} [selector=a] - selector for anchors
 */


function enablePreviewLinks(selector) {
  var anchors = toArray(document.querySelectorAll(selector ? selector : 'a'));
  anchors.forEach(function (element) {
    if (/^(http|www)/gi.test(element.getAttribute('href'))) {
      element.addEventListener('click', onPreviewLinkClicked, false);
    }
  });
}
/**
 * Unbind preview frame links.
 */


function disablePreviewLinks(selector) {
  var anchors = toArray(document.querySelectorAll(selector ? selector : 'a'));
  anchors.forEach(function (element) {
    if (/^(http|www)/gi.test(element.getAttribute('href'))) {
      element.removeEventListener('click', onPreviewLinkClicked, false);
    }
  });
}
/**
 * Opens a preview window for the target URL.
 *
 * @param {string} url - url for preview iframe src
 */


function showPreview(url) {
  closeOverlay();
  dom.overlay = document.createElement('div');
  dom.overlay.classList.add('overlay');
  dom.overlay.classList.add('overlay-preview');
  dom.wrapper.appendChild(dom.overlay);
  dom.overlay.innerHTML = ['<header>', '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + url + '" target="_blank"><span class="icon"></span></a>', '</header>', '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + url + '"></iframe>', '<small class="viewport-inner">', '<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>', '</small>', '</div>'].join('');
  dom.overlay.querySelector('iframe').addEventListener('load', function (event) {
    dom.overlay.classList.add('loaded');
  }, false);
  dom.overlay.querySelector('.close').addEventListener('click', function (event) {
    closeOverlay();
    event.preventDefault();
  }, false);
  dom.overlay.querySelector('.external').addEventListener('click', function (event) {
    closeOverlay();
  }, false);
  setTimeout(function () {
    dom.overlay.classList.add('visible');
  }, 1);
}
/**
 * Open or close help overlay window.
 *
 * @param {Boolean} [override] Flag which overrides the
 * toggle logic and forcibly sets the desired state. True means
 * help is open, false means it's closed.
 */


function toggleHelp(override) {
  if (typeof override === 'boolean') {
    override ? showHelp() : closeOverlay();
  } else {
    if (dom.overlay) {
      closeOverlay();
    } else {
      showHelp();
    }
  }
}
/**
 * Opens an overlay window with help material.
 */


function showHelp() {
  if (config.help) {
    closeOverlay();
    dom.overlay = document.createElement('div');
    dom.overlay.classList.add('overlay');
    dom.overlay.classList.add('overlay-help');
    dom.wrapper.appendChild(dom.overlay);
    var html = '<p class="title">Keyboard Shortcuts</p><br/>';
    html += '<table><th>KEY</th><th>ACTION</th>';

    for (var key in keyboardShortcuts) {
      html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[key] + '</td></tr>';
    } // Add custom key bindings that have associated descriptions


    for (var binding in registeredKeyBindings) {
      if (registeredKeyBindings[binding].key && registeredKeyBindings[binding].description) {
        html += '<tr><td>' + registeredKeyBindings[binding].key + '</td><td>' + registeredKeyBindings[binding].description + '</td></tr>';
      }
    }

    html += '</table>';
    dom.overlay.innerHTML = ['<header>', '<a class="close" href="#"><span class="icon"></span></a>', '</header>', '<div class="viewport">', '<div class="viewport-inner">' + html + '</div>', '</div>'].join('');
    dom.overlay.querySelector('.close').addEventListener('click', function (event) {
      closeOverlay();
      event.preventDefault();
    }, false);
    setTimeout(function () {
      dom.overlay.classList.add('visible');
    }, 1);
  }
}
/**
 * Closes any currently open overlay.
 */


function closeOverlay() {
  if (dom.overlay) {
    dom.overlay.parentNode.removeChild(dom.overlay);
    dom.overlay = null;
  }
}
/**
 * Applies JavaScript-controlled layout rules to the
 * presentation.
 */


function layout() {
  if (dom.wrapper && !isPrintingPDF()) {
    if (!config.disableLayout) {
      // On some mobile devices '100vh' is taller than the visible
      // viewport which leads to part of the presentation being
      // cut off. To work around this we define our own '--vh' custom
      // property where 100x adds up to the correct height.
      //
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      if (isMobileDevice) {
        document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
      }

      var size = getComputedSlideSize();
      var oldScale = scale; // Layout the contents of the slides

      layoutSlideContents(config.width, config.height);
      dom.slides.style.width = size.width + 'px';
      dom.slides.style.height = size.height + 'px'; // Determine scale of content to fit within available space

      scale = Math.min(size.presentationWidth / size.width, size.presentationHeight / size.height); // Respect max/min scale settings

      scale = Math.max(scale, config.minScale);
      scale = Math.min(scale, config.maxScale); // Don't apply any scaling styles if scale is 1

      if (scale === 1) {
        dom.slides.style.zoom = '';
        dom.slides.style.left = '';
        dom.slides.style.top = '';
        dom.slides.style.bottom = '';
        dom.slides.style.right = '';
        transformSlides({
          layout: ''
        });
      } else {
        // Zoom Scaling
        // Content remains crisp no matter how much we scale. Side
        // effects are minor differences in text layout and iframe
        // viewports changing size. A 200x200 iframe viewport in a
        // 2x zoomed presentation ends up having a 400x400 viewport.
        if (scale > 1 && features.zoom && window.devicePixelRatio < 2) {
          dom.slides.style.zoom = scale;
          dom.slides.style.left = '';
          dom.slides.style.top = '';
          dom.slides.style.bottom = '';
          dom.slides.style.right = '';
          transformSlides({
            layout: ''
          });
        } // Transform Scaling
        // Content layout remains the exact same when scaled up.
        // Side effect is content becoming blurred, especially with
        // high scale values on ldpi screens.
        else {
            dom.slides.style.zoom = '';
            dom.slides.style.left = '50%';
            dom.slides.style.top = '50%';
            dom.slides.style.bottom = 'auto';
            dom.slides.style.right = 'auto';
            transformSlides({
              layout: 'translate(-50%, -50%) scale(' + scale + ')'
            });
          }
      } // Select all slides, vertical and horizontal


      var slides = toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR));

      for (var i = 0, len = slides.length; i < len; i++) {
        var slide = slides[i]; // Don't bother updating invisible slides

        if (slide.style.display === 'none') {
          continue;
        }

        if (config.center || slide.classList.contains('center')) {
          // Vertical stacks are not centred since their section
          // children will be
          if (slide.classList.contains('stack')) {
            slide.style.top = 0;
          } else {
            slide.style.top = Math.max((size.height - slide.scrollHeight) / 2, 0) + 'px';
          }
        } else {
          slide.style.top = '';
        }
      }

      if (oldScale !== scale) {
        dispatchEvent('resize', {
          'oldScale': oldScale,
          'scale': scale,
          'size': size
        });
      }
    }

    updateProgress();
    updateParallax();

    if (isOverview()) {
      updateOverview();
    }
  }
}
/**
 * Applies layout logic to the contents of all slides in
 * the presentation.
 *
 * @param {string|number} width
 * @param {string|number} height
 */


function layoutSlideContents(width, height) {
  // Handle sizing of elements with the 'stretch' class
  toArray(dom.slides.querySelectorAll('section > .stretch')).forEach(function (element) {
    // Determine how much vertical space we can use
    var remainingHeight = getRemainingHeight(element, height); // Consider the aspect ratio of media elements

    if (/(img|video)/gi.test(element.nodeName)) {
      var nw = element.naturalWidth || element.videoWidth,
          nh = element.naturalHeight || element.videoHeight;
      var es = Math.min(width / nw, remainingHeight / nh);
      element.style.width = nw * es + 'px';
      element.style.height = nh * es + 'px';
    } else {
      element.style.width = width + 'px';
      element.style.height = remainingHeight + 'px';
    }
  });
}
/**
 * Calculates the computed pixel size of our slides. These
 * values are based on the width and height configuration
 * options.
 *
 * @param {number} [presentationWidth=dom.wrapper.offsetWidth]
 * @param {number} [presentationHeight=dom.wrapper.offsetHeight]
 */


function getComputedSlideSize(presentationWidth, presentationHeight) {
  var size = {
    // Slide size
    width: config.width,
    height: config.height,
    // Presentation size
    presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
    presentationHeight: presentationHeight || dom.wrapper.offsetHeight
  }; // Reduce available space by margin

  size.presentationWidth -= size.presentationWidth * config.margin;
  size.presentationHeight -= size.presentationHeight * config.margin; // Slide width may be a percentage of available width

  if (typeof size.width === 'string' && /%$/.test(size.width)) {
    size.width = parseInt(size.width, 10) / 100 * size.presentationWidth;
  } // Slide height may be a percentage of available height


  if (typeof size.height === 'string' && /%$/.test(size.height)) {
    size.height = parseInt(size.height, 10) / 100 * size.presentationHeight;
  }

  return size;
}
/**
 * Stores the vertical index of a stack so that the same
 * vertical slide can be selected when navigating to and
 * from the stack.
 *
 * @param {HTMLElement} stack The vertical stack element
 * @param {string|number} [v=0] Index to memorize
 */


function setPreviousVerticalIndex(stack, v) {
  if (_typeof(stack) === 'object' && typeof stack.setAttribute === 'function') {
    stack.setAttribute('data-previous-indexv', v || 0);
  }
}
/**
 * Retrieves the vertical index which was stored using
 * #setPreviousVerticalIndex() or 0 if no previous index
 * exists.
 *
 * @param {HTMLElement} stack The vertical stack element
 */


function getPreviousVerticalIndex(stack) {
  if (_typeof(stack) === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains('stack')) {
    // Prefer manually defined start-indexv
    var attributeName = stack.hasAttribute('data-start-indexv') ? 'data-start-indexv' : 'data-previous-indexv';
    return parseInt(stack.getAttribute(attributeName) || 0, 10);
  }

  return 0;
}
/**
 * Displays the overview of slides (quick nav) by scaling
 * down and arranging all slide elements.
 */


function activateOverview() {
  // Only proceed if enabled in config
  if (config.overview && !isOverview()) {
    overview = true;
    dom.wrapper.classList.add('overview');
    dom.wrapper.classList.remove('overview-deactivating');

    if (features.overviewTransitions) {
      setTimeout(function () {
        dom.wrapper.classList.add('overview-animated');
      }, 1);
    } // Don't auto-slide while in overview mode


    cancelAutoSlide(); // Move the backgrounds element into the slide container to
    // that the same scaling is applied

    dom.slides.appendChild(dom.background); // Clicking on an overview slide navigates to it

    toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR)).forEach(function (slide) {
      if (!slide.classList.contains('stack')) {
        slide.addEventListener('click', onOverviewSlideClicked, true);
      }
    }); // Calculate slide sizes

    var margin = 70;
    var slideSize = getComputedSlideSize();
    overviewSlideWidth = slideSize.width + margin;
    overviewSlideHeight = slideSize.height + margin; // Reverse in RTL mode

    if (config.rtl) {
      overviewSlideWidth = -overviewSlideWidth;
    }

    updateSlidesVisibility();
    layoutOverview();
    updateOverview();
    layout(); // Notify observers of the overview showing

    dispatchEvent('overviewshown', {
      'indexh': indexh,
      'indexv': indexv,
      'currentSlide': currentSlide
    });
  }
}
/**
 * Uses CSS transforms to position all slides in a grid for
 * display inside of the overview mode.
 */


function layoutOverview() {
  // Layout slides
  toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)).forEach(function (hslide, h) {
    hslide.setAttribute('data-index-h', h);
    transformElement(hslide, 'translate3d(' + h * overviewSlideWidth + 'px, 0, 0)');

    if (hslide.classList.contains('stack')) {
      toArray(hslide.querySelectorAll('section')).forEach(function (vslide, v) {
        vslide.setAttribute('data-index-h', h);
        vslide.setAttribute('data-index-v', v);
        transformElement(vslide, 'translate3d(0, ' + v * overviewSlideHeight + 'px, 0)');
      });
    }
  }); // Layout slide backgrounds

  toArray(dom.background.childNodes).forEach(function (hbackground, h) {
    transformElement(hbackground, 'translate3d(' + h * overviewSlideWidth + 'px, 0, 0)');
    toArray(hbackground.querySelectorAll('.slide-background')).forEach(function (vbackground, v) {
      transformElement(vbackground, 'translate3d(0, ' + v * overviewSlideHeight + 'px, 0)');
    });
  });
}
/**
 * Moves the overview viewport to the current slides.
 * Called each time the current slide changes.
 */


function updateOverview() {
  var vmin = Math.min(window.innerWidth, window.innerHeight);
  var scale = Math.max(vmin / 5, 150) / vmin;
  transformSlides({
    overview: ['scale(' + scale + ')', 'translateX(' + -indexh * overviewSlideWidth + 'px)', 'translateY(' + -indexv * overviewSlideHeight + 'px)'].join(' ')
  });
}
/**
 * Exits the slide overview and enters the currently
 * active slide.
 */


function deactivateOverview() {
  // Only proceed if enabled in config
  if (config.overview) {
    overview = false;
    dom.wrapper.classList.remove('overview');
    dom.wrapper.classList.remove('overview-animated'); // Temporarily add a class so that transitions can do different things
    // depending on whether they are exiting/entering overview, or just
    // moving from slide to slide

    dom.wrapper.classList.add('overview-deactivating');
    setTimeout(function () {
      dom.wrapper.classList.remove('overview-deactivating');
    }, 1); // Move the background element back out

    dom.wrapper.appendChild(dom.background); // Clean up changes made to slides

    toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR)).forEach(function (slide) {
      transformElement(slide, '');
      slide.removeEventListener('click', onOverviewSlideClicked, true);
    }); // Clean up changes made to backgrounds

    toArray(dom.background.querySelectorAll('.slide-background')).forEach(function (background) {
      transformElement(background, '');
    });
    transformSlides({
      overview: ''
    });
    slide(indexh, indexv);
    layout();
    cueAutoSlide(); // Notify observers of the overview hiding

    dispatchEvent('overviewhidden', {
      'indexh': indexh,
      'indexv': indexv,
      'currentSlide': currentSlide
    });
  }
}
/**
 * Toggles the slide overview mode on and off.
 *
 * @param {Boolean} [override] Flag which overrides the
 * toggle logic and forcibly sets the desired state. True means
 * overview is open, false means it's closed.
 */


function toggleOverview(override) {
  if (typeof override === 'boolean') {
    override ? activateOverview() : deactivateOverview();
  } else {
    isOverview() ? deactivateOverview() : activateOverview();
  }
}
/**
 * Checks if the overview is currently active.
 *
 * @return {Boolean} true if the overview is active,
 * false otherwise
 */


function isOverview() {
  return overview;
}
/**
 * Return a hash URL that will resolve to the given slide location.
 *
 * @param {HTMLElement} [slide=currentSlide] The slide to link to
 */


function locationHash(slide) {
  var url = '/'; // Attempt to create a named link based on the slide's ID

  var s = slide || currentSlide;
  var id = s ? s.getAttribute('id') : null;

  if (id) {
    id = encodeURIComponent(id);
  }

  var index = getIndices(slide);

  if (!config.fragmentInURL) {
    index.f = undefined;
  } // If the current slide has an ID, use that as a named link,
  // but we don't support named links with a fragment index


  if (typeof id === 'string' && id.length && index.f === undefined) {
    url = '/' + id;
  } // Otherwise use the /h/v index
  else {
      var hashIndexBase = config.hashOneBasedIndex ? 1 : 0;
      if (index.h > 0 || index.v > 0 || index.f !== undefined) url += index.h + hashIndexBase;
      if (index.v > 0 || index.f !== undefined) url += '/' + (index.v + hashIndexBase);
      if (index.f !== undefined) url += '/' + index.f;
    }

  return url;
}
/**
 * Checks if the current or specified slide is vertical
 * (nested within another slide).
 *
 * @param {HTMLElement} [slide=currentSlide] The slide to check
 * orientation of
 * @return {Boolean}
 */


function isVerticalSlide(slide) {
  // Prefer slide argument, otherwise use current slide
  slide = slide ? slide : currentSlide;
  return slide && slide.parentNode && !!slide.parentNode.nodeName.match(/section/i);
}
/**
 * Handling the fullscreen functionality via the fullscreen API
 *
 * @see http://fullscreen.spec.whatwg.org/
 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
 */


function enterFullscreen() {
  var element = document.documentElement; // Check which implementation is available

  var requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

  if (requestMethod) {
    requestMethod.apply(element);
  }
}
/**
 * Shows the mouse pointer after it has been hidden with
 * #hideCursor.
 */


function showCursor() {
  if (cursorHidden) {
    cursorHidden = false;
    dom.wrapper.style.cursor = '';
  }
}
/**
 * Hides the mouse pointer when it's on top of the .reveal
 * container.
 */


function hideCursor() {
  if (cursorHidden === false) {
    cursorHidden = true;
    dom.wrapper.style.cursor = 'none';
  }
}
/**
 * Enters the paused mode which fades everything on screen to
 * black.
 */


function pause() {
  if (config.pause) {
    var wasPaused = dom.wrapper.classList.contains('paused');
    cancelAutoSlide();
    dom.wrapper.classList.add('paused');

    if (wasPaused === false) {
      dispatchEvent('paused');
    }
  }
}
/**
 * Exits from the paused mode.
 */


function resume() {
  var wasPaused = dom.wrapper.classList.contains('paused');
  dom.wrapper.classList.remove('paused');
  cueAutoSlide();

  if (wasPaused) {
    dispatchEvent('resumed');
  }
}
/**
 * Toggles the paused mode on and off.
 */


function togglePause(override) {
  if (typeof override === 'boolean') {
    override ? pause() : resume();
  } else {
    isPaused() ? resume() : pause();
  }
}
/**
 * Checks if we are currently in the paused mode.
 *
 * @return {Boolean}
 */


function isPaused() {
  return dom.wrapper.classList.contains('paused');
}
/**
 * Toggles the auto slide mode on and off.
 *
 * @param {Boolean} [override] Flag which sets the desired state.
 * True means autoplay starts, false means it stops.
 */


function toggleAutoSlide(override) {
  if (typeof override === 'boolean') {
    override ? resumeAutoSlide() : pauseAutoSlide();
  } else {
    autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
  }
}
/**
 * Checks if the auto slide mode is currently on.
 *
 * @return {Boolean}
 */


function isAutoSliding() {
  return !!(autoSlide && !autoSlidePaused);
}
/**
 * Steps from the current point in the presentation to the
 * slide which matches the specified horizontal and vertical
 * indices.
 *
 * @param {number} [h=indexh] Horizontal index of the target slide
 * @param {number} [v=indexv] Vertical index of the target slide
 * @param {number} [f] Index of a fragment within the
 * target slide to activate
 * @param {number} [o] Origin for use in multimaster environments
 */


function slide(h, v, f, o) {
  // Remember where we were at before
  previousSlide = currentSlide; // Query all horizontal slides in the deck

  var horizontalSlides = dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR); // Abort if there are no slides

  if (horizontalSlides.length === 0) return; // If no vertical index is specified and the upcoming slide is a
  // stack, resume at its previous vertical index

  if (v === undefined && !isOverview()) {
    v = getPreviousVerticalIndex(horizontalSlides[h]);
  } // If we were on a vertical stack, remember what vertical index
  // it was on so we can resume at the same position when returning


  if (previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains('stack')) {
    setPreviousVerticalIndex(previousSlide.parentNode, indexv);
  } // Remember the state before this slide


  var stateBefore = state.concat(); // Reset the state array

  state.length = 0;
  var indexhBefore = indexh || 0,
      indexvBefore = indexv || 0; // Activate and transition to the new slide

  indexh = updateSlides(HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h);
  indexv = updateSlides(VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v); // Update the visibility of slides now that the indices have changed

  updateSlidesVisibility();
  layout(); // Update the overview if it's currently active

  if (isOverview()) {
    updateOverview();
  } // Find the current horizontal slide and any possible vertical slides
  // within it


  var currentHorizontalSlide = horizontalSlides[indexh],
      currentVerticalSlides = currentHorizontalSlide.querySelectorAll('section'); // Store references to the previous and current slides

  currentSlide = currentVerticalSlides[indexv] || currentHorizontalSlide; // Show fragment, if specified

  if (typeof f !== 'undefined') {
    navigateFragment(f);
  } // Dispatch an event if the slide changed


  var slideChanged = indexh !== indexhBefore || indexv !== indexvBefore;

  if (!slideChanged) {
    // Ensure that the previous slide is never the same as the current
    previousSlide = null;
  } // Solves an edge case where the previous slide maintains the
  // 'present' class when navigating between adjacent vertical
  // stacks


  if (previousSlide && previousSlide !== currentSlide) {
    previousSlide.classList.remove('present');
    previousSlide.setAttribute('aria-hidden', 'true'); // Reset all slides upon navigate to home
    // Issue: #285

    if (dom.wrapper.querySelector(HOME_SLIDE_SELECTOR).classList.contains('present')) {
      // Launch async task
      setTimeout(function () {
        var slides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR + '.stack')),
            i;

        for (i in slides) {
          if (slides[i]) {
            // Reset stack
            setPreviousVerticalIndex(slides[i], 0);
          }
        }
      }, 0);
    }
  } // Apply the new state


  stateLoop: for (var i = 0, len = state.length; i < len; i++) {
    // Check if this state existed on the previous slide. If it
    // did, we will avoid adding it repeatedly
    for (var j = 0; j < stateBefore.length; j++) {
      if (stateBefore[j] === state[i]) {
        stateBefore.splice(j, 1);
        continue stateLoop;
      }
    }

    document.documentElement.classList.add(state[i]); // Dispatch custom event matching the state's name

    dispatchEvent(state[i]);
  } // Clean up the remains of the previous state


  while (stateBefore.length) {
    document.documentElement.classList.remove(stateBefore.pop());
  }

  if (slideChanged) {
    dispatchEvent('slidechanged', {
      'indexh': indexh,
      'indexv': indexv,
      'previousSlide': previousSlide,
      'currentSlide': currentSlide,
      'origin': o
    });
  } // Handle embedded content


  if (slideChanged || !previousSlide) {
    stopEmbeddedContent(previousSlide);
    startEmbeddedContent(currentSlide);
  } // Announce the current slide contents, for screen readers


  dom.statusDiv.textContent = getStatusText(currentSlide);
  updateControls();
  updateProgress();
  updateBackground();
  updateParallax();
  updateSlideNumber();
  updateNotes();
  updateFragments(); // Update the URL hash

  writeURL();
  cueAutoSlide();
}
/**
 * Syncs the presentation with the current DOM. Useful
 * when new slides or control elements are added or when
 * the configuration has changed.
 */


function sync() {
  // Subscribe to input
  removeEventListeners();
  addEventListeners(); // Force a layout to make sure the current config is accounted for

  layout(); // Reflect the current autoSlide value

  autoSlide = config.autoSlide; // Start auto-sliding if it's enabled

  cueAutoSlide(); // Re-create the slide backgrounds

  createBackgrounds(); // Write the current hash to the URL

  writeURL();
  sortAllFragments();
  updateControls();
  updateProgress();
  updateSlideNumber();
  updateSlidesVisibility();
  updateBackground(true);
  updateNotesVisibility();
  updateNotes();
  formatEmbeddedContent(); // Start or stop embedded content depending on global config

  if (config.autoPlayMedia === false) {
    stopEmbeddedContent(currentSlide, {
      unloadIframes: false
    });
  } else {
    startEmbeddedContent(currentSlide);
  }

  if (isOverview()) {
    layoutOverview();
  }
}
/**
 * Updates reveal.js to keep in sync with new slide attributes. For
 * example, if you add a new `data-background-image` you can call
 * this to have reveal.js render the new background image.
 *
 * Similar to #sync() but more efficient when you only need to
 * refresh a specific slide.
 *
 * @param {HTMLElement} slide
 */


function syncSlide(slide) {
  // Default to the current slide
  slide = slide || currentSlide;
  syncBackground(slide);
  syncFragments(slide);
  loadSlide(slide);
  updateBackground();
  updateNotes();
}
/**
 * Formats the fragments on the given slide so that they have
 * valid indices. Call this if fragments are changed in the DOM
 * after reveal.js has already initialized.
 *
 * @param {HTMLElement} slide
 * @return {Array} a list of the HTML fragments that were synced
 */


function syncFragments(slide) {
  // Default to the current slide
  slide = slide || currentSlide;
  return sortFragments(slide.querySelectorAll('.fragment'));
}
/**
 * Resets all vertical slides so that only the first
 * is visible.
 */


function resetVerticalSlides() {
  var horizontalSlides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR));
  horizontalSlides.forEach(function (horizontalSlide) {
    var verticalSlides = toArray(horizontalSlide.querySelectorAll('section'));
    verticalSlides.forEach(function (verticalSlide, y) {
      if (y > 0) {
        verticalSlide.classList.remove('present');
        verticalSlide.classList.remove('past');
        verticalSlide.classList.add('future');
        verticalSlide.setAttribute('aria-hidden', 'true');
      }
    });
  });
}
/**
 * Sorts and formats all of fragments in the
 * presentation.
 */


function sortAllFragments() {
  var horizontalSlides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR));
  horizontalSlides.forEach(function (horizontalSlide) {
    var verticalSlides = toArray(horizontalSlide.querySelectorAll('section'));
    verticalSlides.forEach(function (verticalSlide, y) {
      sortFragments(verticalSlide.querySelectorAll('.fragment'));
    });
    if (verticalSlides.length === 0) sortFragments(horizontalSlide.querySelectorAll('.fragment'));
  });
}
/**
 * Randomly shuffles all slides in the deck.
 */


function shuffle() {
  var slides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR));
  slides.forEach(function (slide) {
    // Insert this slide next to another random slide. This may
    // cause the slide to insert before itself but that's fine.
    dom.slides.insertBefore(slide, slides[Math.floor(Math.random() * slides.length)]);
  });
}
/**
 * Updates one dimension of slides by showing the slide
 * with the specified index.
 *
 * @param {string} selector A CSS selector that will fetch
 * the group of slides we are working with
 * @param {number} index The index of the slide that should be
 * shown
 *
 * @return {number} The index of the slide that is now shown,
 * might differ from the passed in index if it was out of
 * bounds.
 */


function updateSlides(selector, index) {
  // Select all slides and convert the NodeList result to
  // an array
  var slides = toArray(dom.wrapper.querySelectorAll(selector)),
      slidesLength = slides.length;
  var printMode = isPrintingPDF();

  if (slidesLength) {
    // Should the index loop?
    if (config.loop) {
      index %= slidesLength;

      if (index < 0) {
        index = slidesLength + index;
      }
    } // Enforce max and minimum index bounds


    index = Math.max(Math.min(index, slidesLength - 1), 0);

    for (var i = 0; i < slidesLength; i++) {
      var element = slides[i];
      var reverse = config.rtl && !isVerticalSlide(element);
      element.classList.remove('past');
      element.classList.remove('present');
      element.classList.remove('future'); // http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute

      element.setAttribute('hidden', '');
      element.setAttribute('aria-hidden', 'true'); // If this element contains vertical slides

      if (element.querySelector('section')) {
        element.classList.add('stack');
      } // If we're printing static slides, all slides are "present"


      if (printMode) {
        element.classList.add('present');
        continue;
      }

      if (i < index) {
        // Any element previous to index is given the 'past' class
        element.classList.add(reverse ? 'future' : 'past');

        if (config.fragments) {
          // Show all fragments in prior slides
          toArray(element.querySelectorAll('.fragment')).forEach(function (fragment) {
            fragment.classList.add('visible');
            fragment.classList.remove('current-fragment');
          });
        }
      } else if (i > index) {
        // Any element subsequent to index is given the 'future' class
        element.classList.add(reverse ? 'past' : 'future');

        if (config.fragments) {
          // Hide all fragments in future slides
          toArray(element.querySelectorAll('.fragment.visible')).forEach(function (fragment) {
            fragment.classList.remove('visible');
            fragment.classList.remove('current-fragment');
          });
        }
      }
    } // Mark the current slide as present


    slides[index].classList.add('present');
    slides[index].removeAttribute('hidden');
    slides[index].removeAttribute('aria-hidden'); // If this slide has a state associated with it, add it
    // onto the current state of the deck

    var slideState = slides[index].getAttribute('data-state');

    if (slideState) {
      state = state.concat(slideState.split(' '));
    }
  } else {
    // Since there are no slides we can't be anywhere beyond the
    // zeroth index
    index = 0;
  }

  return index;
}
/**
 * Optimization method; hide all slides that are far away
 * from the present slide.
 */


function updateSlidesVisibility() {
  // Select all slides and convert the NodeList result to
  // an array
  var horizontalSlides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)),
      horizontalSlidesLength = horizontalSlides.length,
      distanceX,
      distanceY;

  if (horizontalSlidesLength && typeof indexh !== 'undefined') {
    // The number of steps away from the present slide that will
    // be visible
    var viewDistance = isOverview() ? 10 : config.viewDistance; // Shorten the view distance on devices that typically have
    // less resources

    if (isMobileDevice) {
      viewDistance = isOverview() ? 6 : config.mobileViewDistance;
    } // All slides need to be visible when exporting to PDF


    if (isPrintingPDF()) {
      viewDistance = Number.MAX_VALUE;
    }

    for (var x = 0; x < horizontalSlidesLength; x++) {
      var horizontalSlide = horizontalSlides[x];
      var verticalSlides = toArray(horizontalSlide.querySelectorAll('section')),
          verticalSlidesLength = verticalSlides.length; // Determine how far away this slide is from the present

      distanceX = Math.abs((indexh || 0) - x) || 0; // If the presentation is looped, distance should measure
      // 1 between the first and last slides

      if (config.loop) {
        distanceX = Math.abs(((indexh || 0) - x) % (horizontalSlidesLength - viewDistance)) || 0;
      } // Show the horizontal slide if it's within the view distance


      if (distanceX < viewDistance) {
        loadSlide(horizontalSlide);
      } else {
        unloadSlide(horizontalSlide);
      }

      if (verticalSlidesLength) {
        var oy = getPreviousVerticalIndex(horizontalSlide);

        for (var y = 0; y < verticalSlidesLength; y++) {
          var verticalSlide = verticalSlides[y];
          distanceY = x === (indexh || 0) ? Math.abs((indexv || 0) - y) : Math.abs(y - oy);

          if (distanceX + distanceY < viewDistance) {
            loadSlide(verticalSlide);
          } else {
            unloadSlide(verticalSlide);
          }
        }
      }
    } // Flag if there are ANY vertical slides, anywhere in the deck


    if (hasVerticalSlides()) {
      dom.wrapper.classList.add('has-vertical-slides');
    } else {
      dom.wrapper.classList.remove('has-vertical-slides');
    } // Flag if there are ANY horizontal slides, anywhere in the deck


    if (hasHorizontalSlides()) {
      dom.wrapper.classList.add('has-horizontal-slides');
    } else {
      dom.wrapper.classList.remove('has-horizontal-slides');
    }
  }
}
/**
 * Pick up notes from the current slide and display them
 * to the viewer.
 *
 * @see {@link config.showNotes}
 */


function updateNotes() {
  if (config.showNotes && dom.speakerNotes && currentSlide && !isPrintingPDF()) {
    dom.speakerNotes.innerHTML = getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>';
  }
}
/**
 * Updates the visibility of the speaker notes sidebar that
 * is used to share annotated slides. The notes sidebar is
 * only visible if showNotes is true and there are notes on
 * one or more slides in the deck.
 */


function updateNotesVisibility() {
  if (config.showNotes && hasNotes()) {
    dom.wrapper.classList.add('show-notes');
  } else {
    dom.wrapper.classList.remove('show-notes');
  }
}
/**
 * Checks if there are speaker notes for ANY slide in the
 * presentation.
 */


function hasNotes() {
  return dom.slides.querySelectorAll('[data-notes], aside.notes').length > 0;
}
/**
 * Updates the progress bar to reflect the current slide.
 */


function updateProgress() {
  // Update progress if enabled
  if (config.progress && dom.progressbar) {
    dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';
  }
}
/**
 * Updates the slide number to match the current slide.
 */


function updateSlideNumber() {
  // Update slide number if enabled
  if (config.slideNumber && dom.slideNumber) {
    dom.slideNumber.innerHTML = getSlideNumber();
  }
}
/**
 * Returns the HTML string corresponding to the current slide number,
 * including formatting.
 */


function getSlideNumber(slide) {
  var value;
  var format = 'h.v';

  if (slide === undefined) {
    slide = currentSlide;
  }

  if (typeof config.slideNumber === 'function') {
    value = config.slideNumber(slide);
  } else {
    // Check if a custom number format is available
    if (typeof config.slideNumber === 'string') {
      format = config.slideNumber;
    } // If there are ONLY vertical slides in this deck, always use
    // a flattened slide number


    if (!/c/.test(format) && dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR).length === 1) {
      format = 'c';
    }

    value = [];

    switch (format) {
      case 'c':
        value.push(getSlidePastCount(slide) + 1);
        break;

      case 'c/t':
        value.push(getSlidePastCount(slide) + 1, '/', getTotalSlides());
        break;

      default:
        var indices = getIndices(slide);
        value.push(indices.h + 1);
        var sep = format === 'h/v' ? '/' : '.';
        if (isVerticalSlide(slide)) value.push(sep, indices.v + 1);
    }
  }

  var url = '#' + locationHash(slide);
  return formatSlideNumber(value[0], value[1], value[2], url);
}
/**
 * Applies HTML formatting to a slide number before it's
 * written to the DOM.
 *
 * @param {number} a Current slide
 * @param {string} delimiter Character to separate slide numbers
 * @param {(number|*)} b Total slides
 * @param {HTMLElement} [url='#'+locationHash()] The url to link to
 * @return {string} HTML string fragment
 */


function formatSlideNumber(a, delimiter, b, url) {
  if (url === undefined) {
    url = '#' + locationHash();
  }

  if (typeof b === 'number' && !isNaN(b)) {
    return '<a href="' + url + '">' + '<span class="slide-number-a">' + a + '</span>' + '<span class="slide-number-delimiter">' + delimiter + '</span>' + '<span class="slide-number-b">' + b + '</span>' + '</a>';
  } else {
    return '<a href="' + url + '">' + '<span class="slide-number-a">' + a + '</span>' + '</a>';
  }
}
/**
 * Updates the state of all control/navigation arrows.
 */


function updateControls() {
  var routes = availableRoutes();
  var fragments = availableFragments(); // Remove the 'enabled' class from all directions

  dom.controlsLeft.concat(dom.controlsRight).concat(dom.controlsUp).concat(dom.controlsDown).concat(dom.controlsPrev).concat(dom.controlsNext).forEach(function (node) {
    node.classList.remove('enabled');
    node.classList.remove('fragmented'); // Set 'disabled' attribute on all directions

    node.setAttribute('disabled', 'disabled');
  }); // Add the 'enabled' class to the available routes; remove 'disabled' attribute to enable buttons

  if (routes.left) dom.controlsLeft.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  });
  if (routes.right) dom.controlsRight.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  });
  if (routes.up) dom.controlsUp.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  });
  if (routes.down) dom.controlsDown.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  }); // Prev/next buttons

  if (routes.left || routes.up) dom.controlsPrev.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  });
  if (routes.right || routes.down) dom.controlsNext.forEach(function (el) {
    el.classList.add('enabled');
    el.removeAttribute('disabled');
  }); // Highlight fragment directions

  if (currentSlide) {
    // Always apply fragment decorator to prev/next buttons
    if (fragments.prev) dom.controlsPrev.forEach(function (el) {
      el.classList.add('fragmented', 'enabled');
      el.removeAttribute('disabled');
    });
    if (fragments.next) dom.controlsNext.forEach(function (el) {
      el.classList.add('fragmented', 'enabled');
      el.removeAttribute('disabled');
    }); // Apply fragment decorators to directional buttons based on
    // what slide axis they are in

    if (isVerticalSlide(currentSlide)) {
      if (fragments.prev) dom.controlsUp.forEach(function (el) {
        el.classList.add('fragmented', 'enabled');
        el.removeAttribute('disabled');
      });
      if (fragments.next) dom.controlsDown.forEach(function (el) {
        el.classList.add('fragmented', 'enabled');
        el.removeAttribute('disabled');
      });
    } else {
      if (fragments.prev) dom.controlsLeft.forEach(function (el) {
        el.classList.add('fragmented', 'enabled');
        el.removeAttribute('disabled');
      });
      if (fragments.next) dom.controlsRight.forEach(function (el) {
        el.classList.add('fragmented', 'enabled');
        el.removeAttribute('disabled');
      });
    }
  }

  if (config.controlsTutorial) {
    // Highlight control arrows with an animation to ensure
    // that the viewer knows how to navigate
    if (!hasNavigatedDown && routes.down) {
      dom.controlsDownArrow.classList.add('highlight');
    } else {
      dom.controlsDownArrow.classList.remove('highlight');

      if (!hasNavigatedRight && routes.right && indexv === 0) {
        dom.controlsRightArrow.classList.add('highlight');
      } else {
        dom.controlsRightArrow.classList.remove('highlight');
      }
    }
  }
}
/**
 * Updates the background elements to reflect the current
 * slide.
 *
 * @param {boolean} includeAll If true, the backgrounds of
 * all vertical slides (not just the present) will be updated.
 */


function updateBackground(includeAll) {
  var currentBackground = null; // Reverse past/future classes when in RTL mode

  var horizontalPast = config.rtl ? 'future' : 'past',
      horizontalFuture = config.rtl ? 'past' : 'future'; // Update the classes of all backgrounds to match the
  // states of their slides (past/present/future)

  toArray(dom.background.childNodes).forEach(function (backgroundh, h) {
    backgroundh.classList.remove('past');
    backgroundh.classList.remove('present');
    backgroundh.classList.remove('future');

    if (h < indexh) {
      backgroundh.classList.add(horizontalPast);
    } else if (h > indexh) {
      backgroundh.classList.add(horizontalFuture);
    } else {
      backgroundh.classList.add('present'); // Store a reference to the current background element

      currentBackground = backgroundh;
    }

    if (includeAll || h === indexh) {
      toArray(backgroundh.querySelectorAll('.slide-background')).forEach(function (backgroundv, v) {
        backgroundv.classList.remove('past');
        backgroundv.classList.remove('present');
        backgroundv.classList.remove('future');

        if (v < indexv) {
          backgroundv.classList.add('past');
        } else if (v > indexv) {
          backgroundv.classList.add('future');
        } else {
          backgroundv.classList.add('present'); // Only if this is the present horizontal and vertical slide

          if (h === indexh) currentBackground = backgroundv;
        }
      });
    }
  }); // Stop content inside of previous backgrounds

  if (previousBackground) {
    stopEmbeddedContent(previousBackground, {
      unloadIframes: !shouldPreload(previousBackground)
    });
  } // Start content in the current background


  if (currentBackground) {
    startEmbeddedContent(currentBackground);
    var currentBackgroundContent = currentBackground.querySelector('.slide-background-content');

    if (currentBackgroundContent) {
      var backgroundImageURL = currentBackgroundContent.style.backgroundImage || ''; // Restart GIFs (doesn't work in Firefox)

      if (/\.gif/i.test(backgroundImageURL)) {
        currentBackgroundContent.style.backgroundImage = '';
        window.getComputedStyle(currentBackgroundContent).opacity;
        currentBackgroundContent.style.backgroundImage = backgroundImageURL;
      }
    } // Don't transition between identical backgrounds. This
    // prevents unwanted flicker.


    var previousBackgroundHash = previousBackground ? previousBackground.getAttribute('data-background-hash') : null;
    var currentBackgroundHash = currentBackground.getAttribute('data-background-hash');

    if (currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground) {
      dom.background.classList.add('no-transition');
    }

    previousBackground = currentBackground;
  } // If there's a background brightness flag for this slide,
  // bubble it to the .reveal container


  if (currentSlide) {
    ['has-light-background', 'has-dark-background'].forEach(function (classToBubble) {
      if (currentSlide.classList.contains(classToBubble)) {
        dom.wrapper.classList.add(classToBubble);
      } else {
        dom.wrapper.classList.remove(classToBubble);
      }
    });
  } // Allow the first background to apply without transition


  setTimeout(function () {
    dom.background.classList.remove('no-transition');
  }, 1);
}
/**
 * Updates the position of the parallax background based
 * on the current slide index.
 */


function updateParallax() {
  if (config.parallaxBackgroundImage) {
    var horizontalSlides = dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR),
        verticalSlides = dom.wrapper.querySelectorAll(VERTICAL_SLIDES_SELECTOR);
    var backgroundSize = dom.background.style.backgroundSize.split(' '),
        backgroundWidth,
        backgroundHeight;

    if (backgroundSize.length === 1) {
      backgroundWidth = backgroundHeight = parseInt(backgroundSize[0], 10);
    } else {
      backgroundWidth = parseInt(backgroundSize[0], 10);
      backgroundHeight = parseInt(backgroundSize[1], 10);
    }

    var slideWidth = dom.background.offsetWidth,
        horizontalSlideCount = horizontalSlides.length,
        horizontalOffsetMultiplier,
        horizontalOffset;

    if (typeof config.parallaxBackgroundHorizontal === 'number') {
      horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
    } else {
      horizontalOffsetMultiplier = horizontalSlideCount > 1 ? (backgroundWidth - slideWidth) / (horizontalSlideCount - 1) : 0;
    }

    horizontalOffset = horizontalOffsetMultiplier * indexh * -1;
    var slideHeight = dom.background.offsetHeight,
        verticalSlideCount = verticalSlides.length,
        verticalOffsetMultiplier,
        verticalOffset;

    if (typeof config.parallaxBackgroundVertical === 'number') {
      verticalOffsetMultiplier = config.parallaxBackgroundVertical;
    } else {
      verticalOffsetMultiplier = (backgroundHeight - slideHeight) / (verticalSlideCount - 1);
    }

    verticalOffset = verticalSlideCount > 0 ? verticalOffsetMultiplier * indexv : 0;
    dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';
  }
}
/**
 * Should the given element be preloaded?
 * Decides based on local element attributes and global config.
 *
 * @param {HTMLElement} element
 */


function shouldPreload(element) {
  // Prefer an explicit global preload setting
  var preload = config.preloadIframes; // If no global setting is available, fall back on the element's
  // own preload setting

  if (typeof preload !== 'boolean') {
    preload = element.hasAttribute('data-preload');
  }

  return preload;
}
/**
 * Called when the given slide is within the configured view
 * distance. Shows the slide element and loads any content
 * that is set to load lazily (data-src).
 *
 * @param {HTMLElement} slide Slide to show
 */


function loadSlide(slide, options) {
  options = options || {}; // Show the slide element

  slide.style.display = config.display; // Media elements with data-src attributes

  toArray(slide.querySelectorAll('img[data-src], video[data-src], audio[data-src], iframe[data-src]')).forEach(function (element) {
    if (element.tagName !== 'IFRAME' || shouldPreload(element)) {
      element.setAttribute('src', element.getAttribute('data-src'));
      element.setAttribute('data-lazy-loaded', '');
      element.removeAttribute('data-src');
    }
  }); // Media elements with <source> children

  toArray(slide.querySelectorAll('video, audio')).forEach(function (media) {
    var sources = 0;
    toArray(media.querySelectorAll('source[data-src]')).forEach(function (source) {
      source.setAttribute('src', source.getAttribute('data-src'));
      source.removeAttribute('data-src');
      source.setAttribute('data-lazy-loaded', '');
      sources += 1;
    }); // If we rewrote sources for this video/audio element, we need
    // to manually tell it to load from its new origin

    if (sources > 0) {
      media.load();
    }
  }); // Show the corresponding background element

  var background = slide.slideBackgroundElement;

  if (background) {
    background.style.display = 'block';
    var backgroundContent = slide.slideBackgroundContentElement;
    var backgroundIframe = slide.getAttribute('data-background-iframe'); // If the background contains media, load it

    if (background.hasAttribute('data-loaded') === false) {
      background.setAttribute('data-loaded', 'true');
      var backgroundImage = slide.getAttribute('data-background-image'),
          backgroundVideo = slide.getAttribute('data-background-video'),
          backgroundVideoLoop = slide.hasAttribute('data-background-video-loop'),
          backgroundVideoMuted = slide.hasAttribute('data-background-video-muted'); // Images

      if (backgroundImage) {
        backgroundContent.style.backgroundImage = 'url(' + encodeURI(backgroundImage) + ')';
      } // Videos
      else if (backgroundVideo && !isSpeakerNotes()) {
          var video = document.createElement('video');

          if (backgroundVideoLoop) {
            video.setAttribute('loop', '');
          }

          if (backgroundVideoMuted) {
            video.muted = true;
          } // Inline video playback works (at least in Mobile Safari) as
          // long as the video is muted and the `playsinline` attribute is
          // present


          if (isMobileDevice) {
            video.muted = true;
            video.autoplay = true;
            video.setAttribute('playsinline', '');
          } // Support comma separated lists of video sources


          backgroundVideo.split(',').forEach(function (source) {
            video.innerHTML += '<source src="' + source + '">';
          });
          backgroundContent.appendChild(video);
        } // Iframes
        else if (backgroundIframe && options.excludeIframes !== true) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('mozallowfullscreen', '');
            iframe.setAttribute('webkitallowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('data-src', backgroundIframe);
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.maxHeight = '100%';
            iframe.style.maxWidth = '100%';
            backgroundContent.appendChild(iframe);
          }
    } // Start loading preloadable iframes


    var backgroundIframeElement = backgroundContent.querySelector('iframe[data-src]');

    if (backgroundIframeElement) {
      // Check if this iframe is eligible to be preloaded
      if (shouldPreload(background) && !/autoplay=(1|true|yes)/gi.test(backgroundIframe)) {
        if (backgroundIframeElement.getAttribute('src') !== backgroundIframe) {
          backgroundIframeElement.setAttribute('src', backgroundIframe);
        }
      }
    }
  }
}
/**
 * Unloads and hides the given slide. This is called when the
 * slide is moved outside of the configured view distance.
 *
 * @param {HTMLElement} slide
 */


function unloadSlide(slide) {
  // Hide the slide element
  slide.style.display = 'none'; // Hide the corresponding background element

  var background = getSlideBackground(slide);

  if (background) {
    background.style.display = 'none'; // Unload any background iframes

    toArray(background.querySelectorAll('iframe[src]')).forEach(function (element) {
      element.removeAttribute('src');
    });
  } // Reset lazy-loaded media elements with src attributes


  toArray(slide.querySelectorAll('video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]')).forEach(function (element) {
    element.setAttribute('data-src', element.getAttribute('src'));
    element.removeAttribute('src');
  }); // Reset lazy-loaded media elements with <source> children

  toArray(slide.querySelectorAll('video[data-lazy-loaded] source[src], audio source[src]')).forEach(function (source) {
    source.setAttribute('data-src', source.getAttribute('src'));
    source.removeAttribute('src');
  });
}
/**
 * Determine what available routes there are for navigation.
 *
 * @return {{left: boolean, right: boolean, up: boolean, down: boolean}}
 */


function availableRoutes() {
  var horizontalSlides = dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR),
      verticalSlides = dom.wrapper.querySelectorAll(VERTICAL_SLIDES_SELECTOR);
  var routes = {
    left: indexh > 0,
    right: indexh < horizontalSlides.length - 1,
    up: indexv > 0,
    down: indexv < verticalSlides.length - 1
  }; // Looped presentations can always be navigated as long as
  // there are slides available

  if (config.loop) {
    if (horizontalSlides.length > 1) {
      routes.left = true;
      routes.right = true;
    }

    if (verticalSlides.length > 1) {
      routes.up = true;
      routes.down = true;
    }
  } // Reverse horizontal controls for rtl


  if (config.rtl) {
    var left = routes.left;
    routes.left = routes.right;
    routes.right = left;
  }

  return routes;
}
/**
 * Returns an object describing the available fragment
 * directions.
 *
 * @return {{prev: boolean, next: boolean}}
 */


function availableFragments() {
  if (currentSlide && config.fragments) {
    var fragments = currentSlide.querySelectorAll('.fragment');
    var hiddenFragments = currentSlide.querySelectorAll('.fragment:not(.visible)');
    return {
      prev: fragments.length - hiddenFragments.length > 0,
      next: !!hiddenFragments.length
    };
  } else {
    return {
      prev: false,
      next: false
    };
  }
}
/**
 * Enforces origin-specific format rules for embedded media.
 */


function formatEmbeddedContent() {
  var _appendParamToIframeSource = function _appendParamToIframeSource(sourceAttribute, sourceURL, param) {
    toArray(dom.slides.querySelectorAll('iframe[' + sourceAttribute + '*="' + sourceURL + '"]')).forEach(function (el) {
      var src = el.getAttribute(sourceAttribute);

      if (src && src.indexOf(param) === -1) {
        el.setAttribute(sourceAttribute, src + (!/\?/.test(src) ? '?' : '&') + param);
      }
    });
  }; // YouTube frames must include "?enablejsapi=1"


  _appendParamToIframeSource('src', 'youtube.com/embed/', 'enablejsapi=1');

  _appendParamToIframeSource('data-src', 'youtube.com/embed/', 'enablejsapi=1'); // Vimeo frames must include "?api=1"


  _appendParamToIframeSource('src', 'player.vimeo.com/', 'api=1');

  _appendParamToIframeSource('data-src', 'player.vimeo.com/', 'api=1');
}
/**
 * Start playback of any embedded content inside of
 * the given element.
 *
 * @param {HTMLElement} element
 */


function startEmbeddedContent(element) {
  if (element && !isSpeakerNotes()) {
    // Restart GIFs
    toArray(element.querySelectorAll('img[src$=".gif"]')).forEach(function (el) {
      // Setting the same unchanged source like this was confirmed
      // to work in Chrome, FF & Safari
      el.setAttribute('src', el.getAttribute('src'));
    }); // HTML5 media elements

    toArray(element.querySelectorAll('video, audio')).forEach(function (el) {
      if (closestParent(el, '.fragment') && !closestParent(el, '.fragment.visible')) {
        return;
      } // Prefer an explicit global autoplay setting


      var autoplay = config.autoPlayMedia; // If no global setting is available, fall back on the element's
      // own autoplay setting

      if (typeof autoplay !== 'boolean') {
        autoplay = el.hasAttribute('data-autoplay') || !!closestParent(el, '.slide-background');
      }

      if (autoplay && typeof el.play === 'function') {
        // If the media is ready, start playback
        if (el.readyState > 1) {
          startEmbeddedMedia({
            target: el
          });
        } // Mobile devices never fire a loaded event so instead
        // of waiting, we initiate playback
        else if (isMobileDevice) {
            var promise = el.play(); // If autoplay does not work, ensure that the controls are visible so
            // that the viewer can start the media on their own

            if (promise && typeof promise.catch === 'function' && el.controls === false) {
              promise.catch(function () {
                el.controls = true; // Once the video does start playing, hide the controls again

                el.addEventListener('play', function () {
                  el.controls = false;
                });
              });
            }
          } // If the media isn't loaded, wait before playing
          else {
              el.removeEventListener('loadeddata', startEmbeddedMedia); // remove first to avoid dupes

              el.addEventListener('loadeddata', startEmbeddedMedia);
            }
      }
    }); // Normal iframes

    toArray(element.querySelectorAll('iframe[src]')).forEach(function (el) {
      if (closestParent(el, '.fragment') && !closestParent(el, '.fragment.visible')) {
        return;
      }

      startEmbeddedIframe({
        target: el
      });
    }); // Lazy loading iframes

    toArray(element.querySelectorAll('iframe[data-src]')).forEach(function (el) {
      if (closestParent(el, '.fragment') && !closestParent(el, '.fragment.visible')) {
        return;
      }

      if (el.getAttribute('src') !== el.getAttribute('data-src')) {
        el.removeEventListener('load', startEmbeddedIframe); // remove first to avoid dupes

        el.addEventListener('load', startEmbeddedIframe);
        el.setAttribute('src', el.getAttribute('data-src'));
      }
    });
  }
}
/**
 * Starts playing an embedded video/audio element after
 * it has finished loading.
 *
 * @param {object} event
 */


function startEmbeddedMedia(event) {
  var isAttachedToDOM = !!closestParent(event.target, 'html'),
      isVisible = !!closestParent(event.target, '.present');

  if (isAttachedToDOM && isVisible) {
    event.target.currentTime = 0;
    event.target.play();
  }

  event.target.removeEventListener('loadeddata', startEmbeddedMedia);
}
/**
 * "Starts" the content of an embedded iframe using the
 * postMessage API.
 *
 * @param {object} event
 */


function startEmbeddedIframe(event) {
  var iframe = event.target;

  if (iframe && iframe.contentWindow) {
    var isAttachedToDOM = !!closestParent(event.target, 'html'),
        isVisible = !!closestParent(event.target, '.present');

    if (isAttachedToDOM && isVisible) {
      // Prefer an explicit global autoplay setting
      var autoplay = config.autoPlayMedia; // If no global setting is available, fall back on the element's
      // own autoplay setting

      if (typeof autoplay !== 'boolean') {
        autoplay = iframe.hasAttribute('data-autoplay') || !!closestParent(iframe, '.slide-background');
      } // YouTube postMessage API


      if (/youtube\.com\/embed\//.test(iframe.getAttribute('src')) && autoplay) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } // Vimeo postMessage API
      else if (/player\.vimeo\.com\//.test(iframe.getAttribute('src')) && autoplay) {
          iframe.contentWindow.postMessage('{"method":"play"}', '*');
        } // Generic postMessage API
        else {
            iframe.contentWindow.postMessage('slide:start', '*');
          }
    }
  }
}
/**
 * Stop playback of any embedded content inside of
 * the targeted slide.
 *
 * @param {HTMLElement} element
 */


function stopEmbeddedContent(element, options) {
  options = extend({
    // Defaults
    unloadIframes: true
  }, options || {});

  if (element && element.parentNode) {
    // HTML5 media elements
    toArray(element.querySelectorAll('video, audio')).forEach(function (el) {
      if (!el.hasAttribute('data-ignore') && typeof el.pause === 'function') {
        el.setAttribute('data-paused-by-reveal', '');
        el.pause();
      }
    }); // Generic postMessage API for non-lazy loaded iframes

    toArray(element.querySelectorAll('iframe')).forEach(function (el) {
      if (el.contentWindow) el.contentWindow.postMessage('slide:stop', '*');
      el.removeEventListener('load', startEmbeddedIframe);
    }); // YouTube postMessage API

    toArray(element.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function (el) {
      if (!el.hasAttribute('data-ignore') && el.contentWindow && typeof el.contentWindow.postMessage === 'function') {
        el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }); // Vimeo postMessage API

    toArray(element.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function (el) {
      if (!el.hasAttribute('data-ignore') && el.contentWindow && typeof el.contentWindow.postMessage === 'function') {
        el.contentWindow.postMessage('{"method":"pause"}', '*');
      }
    });

    if (options.unloadIframes === true) {
      // Unload lazy-loaded iframes
      toArray(element.querySelectorAll('iframe[data-src]')).forEach(function (el) {
        // Only removing the src doesn't actually unload the frame
        // in all browsers (Firefox) so we set it to blank first
        el.setAttribute('src', 'about:blank');
        el.removeAttribute('src');
      });
    }
  }
}
/**
 * Returns the number of past slides. This can be used as a global
 * flattened index for slides.
 *
 * @param {HTMLElement} [slide=currentSlide] The slide we're counting before
 *
 * @return {number} Past slide count
 */


function getSlidePastCount(slide) {
  if (slide === undefined) {
    slide = currentSlide;
  }

  var horizontalSlides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)); // The number of past slides

  var pastCount = 0; // Step through all slides and count the past ones

  mainLoop: for (var i = 0; i < horizontalSlides.length; i++) {
    var horizontalSlide = horizontalSlides[i];
    var verticalSlides = toArray(horizontalSlide.querySelectorAll('section'));

    for (var j = 0; j < verticalSlides.length; j++) {
      // Stop as soon as we arrive at the present
      if (verticalSlides[j] === slide) {
        break mainLoop;
      }

      pastCount++;
    } // Stop as soon as we arrive at the present


    if (horizontalSlide === slide) {
      break;
    } // Don't count the wrapping section for vertical slides


    if (horizontalSlide.classList.contains('stack') === false) {
      pastCount++;
    }
  }

  return pastCount;
}
/**
 * Returns a value ranging from 0-1 that represents
 * how far into the presentation we have navigated.
 *
 * @return {number}
 */


function getProgress() {
  // The number of past and total slides
  var totalCount = getTotalSlides();
  var pastCount = getSlidePastCount();

  if (currentSlide) {
    var allFragments = currentSlide.querySelectorAll('.fragment'); // If there are fragments in the current slide those should be
    // accounted for in the progress.

    if (allFragments.length > 0) {
      var visibleFragments = currentSlide.querySelectorAll('.fragment.visible'); // This value represents how big a portion of the slide progress
      // that is made up by its fragments (0-1)

      var fragmentWeight = 0.9; // Add fragment progress to the past slide count

      pastCount += visibleFragments.length / allFragments.length * fragmentWeight;
    }
  }

  return Math.min(pastCount / (totalCount - 1), 1);
}
/**
 * Checks if this presentation is running inside of the
 * speaker notes window.
 *
 * @return {boolean}
 */


function isSpeakerNotes() {
  return !!window.location.search.match(/receiver/gi);
}
/**
 * Reads the current URL (hash) and navigates accordingly.
 */


function readURL() {
  var hash = window.location.hash; // Attempt to parse the hash as either an index or name

  var bits = hash.slice(2).split('/'),
      name = hash.replace(/#|\//gi, ''); // If the first bit is not fully numeric and there is a name we
  // can assume that this is a named link

  if (!/^[0-9]*$/.test(bits[0]) && name.length) {
    var element; // Ensure the named link is a valid HTML ID attribute

    try {
      element = document.getElementById(decodeURIComponent(name));
    } catch (error) {} // Ensure that we're not already on a slide with the same name


    var isSameNameAsCurrentSlide = currentSlide ? currentSlide.getAttribute('id') === name : false;

    if (element) {
      // If the slide exists and is not the current slide...
      if (!isSameNameAsCurrentSlide) {
        // ...find the position of the named slide and navigate to it
        var indices = Reveal.getIndices(element);
        slide(indices.h, indices.v);
      }
    } // If the slide doesn't exist, navigate to the current slide
    else {
        slide(indexh || 0, indexv || 0);
      }
  } else {
    var hashIndexBase = config.hashOneBasedIndex ? 1 : 0; // Read the index components of the hash

    var h = parseInt(bits[0], 10) - hashIndexBase || 0,
        v = parseInt(bits[1], 10) - hashIndexBase || 0,
        f;

    if (config.fragmentInURL) {
      f = parseInt(bits[2], 10);

      if (isNaN(f)) {
        f = undefined;
      }
    }

    if (h !== indexh || v !== indexv || f !== undefined) {
      slide(h, v, f);
    }
  }
}
/**
 * Updates the page URL (hash) to reflect the current
 * state.
 *
 * @param {number} delay The time in ms to wait before
 * writing the hash
 */


function writeURL(delay) {
  // Make sure there's never more than one timeout running
  clearTimeout(writeURLTimeout); // If a delay is specified, timeout this call

  if (typeof delay === 'number') {
    writeURLTimeout = setTimeout(writeURL, delay);
  } else if (currentSlide) {
    // If we're configured to push to history OR the history
    // API is not avaialble.
    if (config.history || !window.history) {
      window.location.hash = locationHash();
    } // If we're configured to reflect the current slide in the
    // URL without pushing to history.
    else if (config.hash) {
        window.history.replaceState(null, null, '#' + locationHash());
      } // If history and hash are both disabled, a hash may still
      // be added to the URL by clicking on a href with a hash
      // target. Counter this by always removing the hash.
      else {
          window.history.replaceState(null, null, window.location.pathname + window.location.search);
        }
  }
}
/**
 * Retrieves the h/v location and fragment of the current,
 * or specified, slide.
 *
 * @param {HTMLElement} [slide] If specified, the returned
 * index will be for this slide rather than the currently
 * active one
 *
 * @return {{h: number, v: number, f: number}}
 */


function getIndices(slide) {
  // By default, return the current indices
  var h = indexh,
      v = indexv,
      f; // If a slide is specified, return the indices of that slide

  if (slide) {
    var isVertical = isVerticalSlide(slide);
    var slideh = isVertical ? slide.parentNode : slide; // Select all horizontal slides

    var horizontalSlides = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)); // Now that we know which the horizontal slide is, get its index

    h = Math.max(horizontalSlides.indexOf(slideh), 0); // Assume we're not vertical

    v = undefined; // If this is a vertical slide, grab the vertical index

    if (isVertical) {
      v = Math.max(toArray(slide.parentNode.querySelectorAll('section')).indexOf(slide), 0);
    }
  }

  if (!slide && currentSlide) {
    var hasFragments = currentSlide.querySelectorAll('.fragment').length > 0;

    if (hasFragments) {
      var currentFragment = currentSlide.querySelector('.current-fragment');

      if (currentFragment && currentFragment.hasAttribute('data-fragment-index')) {
        f = parseInt(currentFragment.getAttribute('data-fragment-index'), 10);
      } else {
        f = currentSlide.querySelectorAll('.fragment.visible').length - 1;
      }
    }
  }

  return {
    h: h,
    v: v,
    f: f
  };
}
/**
 * Retrieves all slides in this presentation.
 */


function getSlides() {
  return toArray(dom.wrapper.querySelectorAll(SLIDES_SELECTOR + ':not(.stack)'));
}
/**
 * Returns a list of all horizontal slides in the deck. Each
 * vertical stack is included as one horizontal slide in the
 * resulting array.
 */


function getHorizontalSlides() {
  return toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR));
}
/**
 * Returns all vertical slides that exist within this deck.
 */


function getVerticalSlides() {
  return toArray(dom.wrapper.querySelectorAll('.slides>section>section'));
}
/**
 * Returns true if there are at least two horizontal slides.
 */


function hasHorizontalSlides() {
  return getHorizontalSlides().length > 1;
}
/**
 * Returns true if there are at least two vertical slides.
 */


function hasVerticalSlides() {
  return getVerticalSlides().length > 1;
}
/**
 * Returns an array of objects where each object represents the
 * attributes on its respective slide.
 */


function getSlidesAttributes() {
  return getSlides().map(function (slide) {
    var attributes = {};

    for (var i = 0; i < slide.attributes.length; i++) {
      var attribute = slide.attributes[i];
      attributes[attribute.name] = attribute.value;
    }

    return attributes;
  });
}
/**
 * Retrieves the total number of slides in this presentation.
 *
 * @return {number}
 */


function getTotalSlides() {
  return getSlides().length;
}
/**
 * Returns the slide element matching the specified index.
 *
 * @return {HTMLElement}
 */


function getSlide(x, y) {
  var horizontalSlide = dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)[x];
  var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll('section');

  if (verticalSlides && verticalSlides.length && typeof y === 'number') {
    return verticalSlides ? verticalSlides[y] : undefined;
  }

  return horizontalSlide;
}
/**
 * Returns the background element for the given slide.
 * All slides, even the ones with no background properties
 * defined, have a background element so as long as the
 * index is valid an element will be returned.
 *
 * @param {mixed} x Horizontal background index OR a slide
 * HTML element
 * @param {number} y Vertical background index
 * @return {(HTMLElement[]|*)}
 */


function getSlideBackground(x, y) {
  var slide = typeof x === 'number' ? getSlide(x, y) : x;

  if (slide) {
    return slide.slideBackgroundElement;
  }

  return undefined;
}
/**
 * Retrieves the speaker notes from a slide. Notes can be
 * defined in two ways:
 * 1. As a data-notes attribute on the slide <section>
 * 2. As an <aside class="notes"> inside of the slide
 *
 * @param {HTMLElement} [slide=currentSlide]
 * @return {(string|null)}
 */


function getSlideNotes(slide) {
  // Default to the current slide
  slide = slide || currentSlide; // Notes can be specified via the data-notes attribute...

  if (slide.hasAttribute('data-notes')) {
    return slide.getAttribute('data-notes');
  } // ... or using an <aside class="notes"> element


  var notesElement = slide.querySelector('aside.notes');

  if (notesElement) {
    return notesElement.innerHTML;
  }

  return null;
}
/**
 * Retrieves the current state of the presentation as
 * an object. This state can then be restored at any
 * time.
 *
 * @return {{indexh: number, indexv: number, indexf: number, paused: boolean, overview: boolean}}
 */


function getState() {
  var indices = getIndices();
  return {
    indexh: indices.h,
    indexv: indices.v,
    indexf: indices.f,
    paused: isPaused(),
    overview: isOverview()
  };
}
/**
 * Restores the presentation to the given state.
 *
 * @param {object} state As generated by getState()
 * @see {@link getState} generates the parameter `state`
 */


function setState(state) {
  if (_typeof(state) === 'object') {
    slide(deserialize(state.indexh), deserialize(state.indexv), deserialize(state.indexf));
    var pausedFlag = deserialize(state.paused),
        overviewFlag = deserialize(state.overview);

    if (typeof pausedFlag === 'boolean' && pausedFlag !== isPaused()) {
      togglePause(pausedFlag);
    }

    if (typeof overviewFlag === 'boolean' && overviewFlag !== isOverview()) {
      toggleOverview(overviewFlag);
    }
  }
}
/**
 * Return a sorted fragments list, ordered by an increasing
 * "data-fragment-index" attribute.
 *
 * Fragments will be revealed in the order that they are returned by
 * this function, so you can use the index attributes to control the
 * order of fragment appearance.
 *
 * To maintain a sensible default fragment order, fragments are presumed
 * to be passed in document order. This function adds a "fragment-index"
 * attribute to each node if such an attribute is not already present,
 * and sets that attribute to an integer value which is the position of
 * the fragment within the fragments list.
 *
 * @param {object[]|*} fragments
 * @param {boolean} grouped If true the returned array will contain
 * nested arrays for all fragments with the same index
 * @return {object[]} sorted Sorted array of fragments
 */


function sortFragments(fragments, grouped) {
  fragments = toArray(fragments);
  var ordered = [],
      unordered = [],
      sorted = []; // Group ordered and unordered elements

  fragments.forEach(function (fragment, i) {
    if (fragment.hasAttribute('data-fragment-index')) {
      var index = parseInt(fragment.getAttribute('data-fragment-index'), 10);

      if (!ordered[index]) {
        ordered[index] = [];
      }

      ordered[index].push(fragment);
    } else {
      unordered.push([fragment]);
    }
  }); // Append fragments without explicit indices in their
  // DOM order

  ordered = ordered.concat(unordered); // Manually count the index up per group to ensure there
  // are no gaps

  var index = 0; // Push all fragments in their sorted order to an array,
  // this flattens the groups

  ordered.forEach(function (group) {
    group.forEach(function (fragment) {
      sorted.push(fragment);
      fragment.setAttribute('data-fragment-index', index);
    });
    index++;
  });
  return grouped === true ? ordered : sorted;
}
/**
 * Refreshes the fragments on the current slide so that they
 * have the appropriate classes (.visible + .current-fragment).
 *
 * @param {number} [index] The index of the current fragment
 * @param {array} [fragments] Array containing all fragments
 * in the current slide
 *
 * @return {{shown: array, hidden: array}}
 */


function updateFragments(index, fragments) {
  var changedFragments = {
    shown: [],
    hidden: []
  };

  if (currentSlide && config.fragments) {
    fragments = fragments || sortFragments(currentSlide.querySelectorAll('.fragment'));

    if (fragments.length) {
      var maxIndex = 0;

      if (typeof index !== 'number') {
        var currentFragment = sortFragments(currentSlide.querySelectorAll('.fragment.visible')).pop();

        if (currentFragment) {
          index = parseInt(currentFragment.getAttribute('data-fragment-index') || 0, 10);
        }
      }

      toArray(fragments).forEach(function (el, i) {
        if (el.hasAttribute('data-fragment-index')) {
          i = parseInt(el.getAttribute('data-fragment-index'), 10);
        }

        maxIndex = Math.max(maxIndex, i); // Visible fragments

        if (i <= index) {
          if (!el.classList.contains('visible')) changedFragments.shown.push(el);
          el.classList.add('visible');
          el.classList.remove('current-fragment'); // Announce the fragments one by one to the Screen Reader

          dom.statusDiv.textContent = getStatusText(el);

          if (i === index) {
            el.classList.add('current-fragment');
            startEmbeddedContent(el);
          }
        } // Hidden fragments
        else {
            if (el.classList.contains('visible')) changedFragments.hidden.push(el);
            el.classList.remove('visible');
            el.classList.remove('current-fragment');
          }
      }); // Write the current fragment index to the slide <section>.
      // This can be used by end users to apply styles based on
      // the current fragment index.

      index = typeof index === 'number' ? index : -1;
      index = Math.max(Math.min(index, maxIndex), -1);
      currentSlide.setAttribute('data-fragment', index);
    }
  }

  return changedFragments;
}
/**
 * Navigate to the specified slide fragment.
 *
 * @param {?number} index The index of the fragment that
 * should be shown, -1 means all are invisible
 * @param {number} offset Integer offset to apply to the
 * fragment index
 *
 * @return {boolean} true if a change was made in any
 * fragments visibility as part of this call
 */


function navigateFragment(index, offset) {
  if (currentSlide && config.fragments) {
    var fragments = sortFragments(currentSlide.querySelectorAll('.fragment'));

    if (fragments.length) {
      // If no index is specified, find the current
      if (typeof index !== 'number') {
        var lastVisibleFragment = sortFragments(currentSlide.querySelectorAll('.fragment.visible')).pop();

        if (lastVisibleFragment) {
          index = parseInt(lastVisibleFragment.getAttribute('data-fragment-index') || 0, 10);
        } else {
          index = -1;
        }
      } // If an offset is specified, apply it to the index


      if (typeof offset === 'number') {
        index += offset;
      }

      var changedFragments = updateFragments(index, fragments);

      if (changedFragments.hidden.length) {
        dispatchEvent('fragmenthidden', {
          fragment: changedFragments.hidden[0],
          fragments: changedFragments.hidden
        });
      }

      if (changedFragments.shown.length) {
        dispatchEvent('fragmentshown', {
          fragment: changedFragments.shown[0],
          fragments: changedFragments.shown
        });
      }

      updateControls();
      updateProgress();

      if (config.fragmentInURL) {
        writeURL();
      }

      return !!(changedFragments.shown.length || changedFragments.hidden.length);
    }
  }

  return false;
}
/**
 * Navigate to the next slide fragment.
 *
 * @return {boolean} true if there was a next fragment,
 * false otherwise
 */


function nextFragment() {
  return navigateFragment(null, 1);
}
/**
 * Navigate to the previous slide fragment.
 *
 * @return {boolean} true if there was a previous fragment,
 * false otherwise
 */


function previousFragment() {
  return navigateFragment(null, -1);
}
/**
 * Cues a new automated slide if enabled in the config.
 */


function cueAutoSlide() {
  cancelAutoSlide();

  if (currentSlide && config.autoSlide !== false) {
    var fragment = currentSlide.querySelector('.current-fragment'); // When the slide first appears there is no "current" fragment so
    // we look for a data-autoslide timing on the first fragment

    if (!fragment) fragment = currentSlide.querySelector('.fragment');
    var fragmentAutoSlide = fragment ? fragment.getAttribute('data-autoslide') : null;
    var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute('data-autoslide') : null;
    var slideAutoSlide = currentSlide.getAttribute('data-autoslide'); // Pick value in the following priority order:
    // 1. Current fragment's data-autoslide
    // 2. Current slide's data-autoslide
    // 3. Parent slide's data-autoslide
    // 4. Global autoSlide setting

    if (fragmentAutoSlide) {
      autoSlide = parseInt(fragmentAutoSlide, 10);
    } else if (slideAutoSlide) {
      autoSlide = parseInt(slideAutoSlide, 10);
    } else if (parentAutoSlide) {
      autoSlide = parseInt(parentAutoSlide, 10);
    } else {
      autoSlide = config.autoSlide;
    } // If there are media elements with data-autoplay,
    // automatically set the autoSlide duration to the
    // length of that media. Not applicable if the slide
    // is divided up into fragments.
    // playbackRate is accounted for in the duration.


    if (currentSlide.querySelectorAll('.fragment').length === 0) {
      toArray(currentSlide.querySelectorAll('video, audio')).forEach(function (el) {
        if (el.hasAttribute('data-autoplay')) {
          if (autoSlide && el.duration * 1000 / el.playbackRate > autoSlide) {
            autoSlide = el.duration * 1000 / el.playbackRate + 1000;
          }
        }
      });
    } // Cue the next auto-slide if:
    // - There is an autoSlide value
    // - Auto-sliding isn't paused by the user
    // - The presentation isn't paused
    // - The overview isn't active
    // - The presentation isn't over


    if (autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && (!Reveal.isLastSlide() || availableFragments().next || config.loop === true)) {
      autoSlideTimeout = setTimeout(function () {
        typeof config.autoSlideMethod === 'function' ? config.autoSlideMethod() : navigateNext();
        cueAutoSlide();
      }, autoSlide);
      autoSlideStartTime = Date.now();
    }

    if (autoSlidePlayer) {
      autoSlidePlayer.setPlaying(autoSlideTimeout !== -1);
    }
  }
}
/**
 * Cancels any ongoing request to auto-slide.
 */


function cancelAutoSlide() {
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = -1;
}

function pauseAutoSlide() {
  if (autoSlide && !autoSlidePaused) {
    autoSlidePaused = true;
    dispatchEvent('autoslidepaused');
    clearTimeout(autoSlideTimeout);

    if (autoSlidePlayer) {
      autoSlidePlayer.setPlaying(false);
    }
  }
}

function resumeAutoSlide() {
  if (autoSlide && autoSlidePaused) {
    autoSlidePaused = false;
    dispatchEvent('autoslideresumed');
    cueAutoSlide();
  }
}

function navigateLeft() {
  // Reverse for RTL
  if (config.rtl) {
    if ((isOverview() || nextFragment() === false) && availableRoutes().left) {
      slide(indexh + 1, config.navigationMode === 'grid' ? indexv : undefined);
    }
  } // Normal navigation
  else if ((isOverview() || previousFragment() === false) && availableRoutes().left) {
      slide(indexh - 1, config.navigationMode === 'grid' ? indexv : undefined);
    }
}

function navigateRight() {
  hasNavigatedRight = true; // Reverse for RTL

  if (config.rtl) {
    if ((isOverview() || previousFragment() === false) && availableRoutes().right) {
      slide(indexh - 1, config.navigationMode === 'grid' ? indexv : undefined);
    }
  } // Normal navigation
  else if ((isOverview() || nextFragment() === false) && availableRoutes().right) {
      slide(indexh + 1, config.navigationMode === 'grid' ? indexv : undefined);
    }
}

function navigateUp() {
  // Prioritize hiding fragments
  if ((isOverview() || previousFragment() === false) && availableRoutes().up) {
    slide(indexh, indexv - 1);
  }
}

function navigateDown() {
  hasNavigatedDown = true; // Prioritize revealing fragments

  if ((isOverview() || nextFragment() === false) && availableRoutes().down) {
    slide(indexh, indexv + 1);
  }
}
/**
 * Navigates backwards, prioritized in the following order:
 * 1) Previous fragment
 * 2) Previous vertical slide
 * 3) Previous horizontal slide
 */


function navigatePrev() {
  // Prioritize revealing fragments
  if (previousFragment() === false) {
    if (availableRoutes().up) {
      navigateUp();
    } else {
      // Fetch the previous horizontal slide, if there is one
      var previousSlide;

      if (config.rtl) {
        previousSlide = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR + '.future')).pop();
      } else {
        previousSlide = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR + '.past')).pop();
      }

      if (previousSlide) {
        var v = previousSlide.querySelectorAll('section').length - 1 || undefined;
        var h = indexh - 1;
        slide(h, v);
      }
    }
  }
}
/**
 * The reverse of #navigatePrev().
 */


function navigateNext() {
  hasNavigatedRight = true;
  hasNavigatedDown = true; // Prioritize revealing fragments

  if (nextFragment() === false) {
    var routes = availableRoutes(); // When looping is enabled `routes.down` is always available
    // so we need a separate check for when we've reached the
    // end of a stack and should move horizontally

    if (routes.down && routes.right && config.loop && Reveal.isLastVerticalSlide(currentSlide)) {
      routes.down = false;
    }

    if (routes.down) {
      navigateDown();
    } else if (config.rtl) {
      navigateLeft();
    } else {
      navigateRight();
    }
  }
}
/**
 * Checks if the target element prevents the triggering of
 * swipe navigation.
 */


function isSwipePrevented(target) {
  while (target && typeof target.hasAttribute === 'function') {
    if (target.hasAttribute('data-prevent-swipe')) return true;
    target = target.parentNode;
  }

  return false;
} // --------------------------------------------------------------------//
// ----------------------------- EVENTS -------------------------------//
// --------------------------------------------------------------------//

/**
 * Called by all event handlers that are based on user
 * input.
 *
 * @param {object} [event]
 */


function onUserInput(event) {
  if (config.autoSlideStoppable) {
    pauseAutoSlide();
  }
}
/**
 * Called whenever there is mouse input at the document level
 * to determine if the cursor is active or not.
 *
 * @param {object} event
 */


function onDocumentCursorActive(event) {
  showCursor();
  clearTimeout(cursorInactiveTimeout);
  cursorInactiveTimeout = setTimeout(hideCursor, config.hideCursorTime);
}
/**
 * Handler for the document level 'keypress' event.
 *
 * @param {object} event
 */


function onDocumentKeyPress(event) {
  // Check if the pressed key is question mark
  if (event.shiftKey && event.charCode === 63) {
    toggleHelp();
  }
}
/**
 * Handler for the document level 'keydown' event.
 *
 * @param {object} event
 */


function onDocumentKeyDown(event) {
  // If there's a condition specified and it returns false,
  // ignore this event
  if (typeof config.keyboardCondition === 'function' && config.keyboardCondition(event) === false) {
    return true;
  } // Shorthand


  var keyCode = event.keyCode; // Remember if auto-sliding was paused so we can toggle it

  var autoSlideWasPaused = autoSlidePaused;
  onUserInput(event); // Is there a focused element that could be using the keyboard?

  var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
  var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName);
  var activeElementIsNotes = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className); // Whitelist specific modified + keycode combinations

  var prevSlideShortcut = event.shiftKey && event.keyCode === 32;
  var firstSlideShortcut = event.shiftKey && keyCode === 37;
  var lastSlideShortcut = event.shiftKey && keyCode === 39; // Prevent all other events when a modifier is pressed

  var unusedModifier = !prevSlideShortcut && !firstSlideShortcut && !lastSlideShortcut && (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey); // Disregard the event if there's a focused element or a
  // keyboard modifier key is present

  if (activeElementIsCE || activeElementIsInput || activeElementIsNotes || unusedModifier) return; // While paused only allow resume keyboard events; 'b', 'v', '.'

  var resumeKeyCodes = [66, 86, 190, 191];
  var key; // Custom key bindings for togglePause should be able to resume

  if (_typeof(config.keyboard) === 'object') {
    for (key in config.keyboard) {
      if (config.keyboard[key] === 'togglePause') {
        resumeKeyCodes.push(parseInt(key, 10));
      }
    }
  }

  if (isPaused() && resumeKeyCodes.indexOf(keyCode) === -1) {
    return false;
  } // Use linear navigation if we're configured to OR if
  // the presentation is one-dimensional


  var useLinearMode = config.navigationMode === 'linear' || !hasHorizontalSlides() || !hasVerticalSlides();
  var triggered = false; // 1. User defined key bindings

  if (_typeof(config.keyboard) === 'object') {
    for (key in config.keyboard) {
      // Check if this binding matches the pressed key
      if (parseInt(key, 10) === keyCode) {
        var value = config.keyboard[key]; // Callback function

        if (typeof value === 'function') {
          value.apply(null, [event]);
        } // String shortcuts to reveal.js API
        else if (typeof value === 'string' && typeof Reveal[value] === 'function') {
            Reveal[value].call();
          }

        triggered = true;
      }
    }
  } // 2. Registered custom key bindings


  if (triggered === false) {
    for (key in registeredKeyBindings) {
      // Check if this binding matches the pressed key
      if (parseInt(key, 10) === keyCode) {
        var action = registeredKeyBindings[key].callback; // Callback function

        if (typeof action === 'function') {
          action.apply(null, [event]);
        } // String shortcuts to reveal.js API
        else if (typeof action === 'string' && typeof Reveal[action] === 'function') {
            Reveal[action].call();
          }

        triggered = true;
      }
    }
  } // 3. System defined key bindings


  if (triggered === false) {
    // Assume true and try to prove false
    triggered = true; // P, PAGE UP

    if (keyCode === 80 || keyCode === 33) {
      navigatePrev();
    } // N, PAGE DOWN
    else if (keyCode === 78 || keyCode === 34) {
        navigateNext();
      } // H, LEFT
      else if (keyCode === 72 || keyCode === 37) {
          if (firstSlideShortcut) {
            slide(0);
          } else if (!isOverview() && useLinearMode) {
            navigatePrev();
          } else {
            navigateLeft();
          }
        } // L, RIGHT
        else if (keyCode === 76 || keyCode === 39) {
            if (lastSlideShortcut) {
              slide(Number.MAX_VALUE);
            } else if (!isOverview() && useLinearMode) {
              navigateNext();
            } else {
              navigateRight();
            }
          } // K, UP
          else if (keyCode === 75 || keyCode === 38) {
              if (!isOverview() && useLinearMode) {
                navigatePrev();
              } else {
                navigateUp();
              }
            } // J, DOWN
            else if (keyCode === 74 || keyCode === 40) {
                if (!isOverview() && useLinearMode) {
                  navigateNext();
                } else {
                  navigateDown();
                }
              } // HOME
              else if (keyCode === 36) {
                  slide(0);
                } // END
                else if (keyCode === 35) {
                    slide(Number.MAX_VALUE);
                  } // SPACE
                  else if (keyCode === 32) {
                      if (isOverview()) {
                        deactivateOverview();
                      }

                      if (event.shiftKey) {
                        navigatePrev();
                      } else {
                        navigateNext();
                      }
                    } // TWO-SPOT, SEMICOLON, B, V, PERIOD, LOGITECH PRESENTER TOOLS "BLACK SCREEN" BUTTON
                    else if (keyCode === 58 || keyCode === 59 || keyCode === 66 || keyCode === 86 || keyCode === 190 || keyCode === 191) {
                        togglePause();
                      } // F
                      else if (keyCode === 70) {
                          enterFullscreen();
                        } // A
                        else if (keyCode === 65) {
                            if (config.autoSlideStoppable) {
                              toggleAutoSlide(autoSlideWasPaused);
                            }
                          } else {
                            triggered = false;
                          }
  } // If the input resulted in a triggered action we should prevent
  // the browsers default behavior


  if (triggered) {
    event.preventDefault && event.preventDefault();
  } // ESC or O key
  else if ((keyCode === 27 || keyCode === 79) && features.transforms3d) {
      if (dom.overlay) {
        closeOverlay();
      } else {
        toggleOverview();
      }

      event.preventDefault && event.preventDefault();
    } // If auto-sliding is enabled we need to cue up
  // another timeout


  cueAutoSlide();
}
/**
 * Handler for the 'touchstart' event, enables support for
 * swipe and pinch gestures.
 *
 * @param {object} event
 */


function onTouchStart(event) {
  if (isSwipePrevented(event.target)) return true;
  touch.startX = event.touches[0].clientX;
  touch.startY = event.touches[0].clientY;
  touch.startCount = event.touches.length;
}
/**
 * Handler for the 'touchmove' event.
 *
 * @param {object} event
 */


function onTouchMove(event) {
  if (isSwipePrevented(event.target)) return true; // Each touch should only trigger one action

  if (!touch.captured) {
    onUserInput(event);
    var currentX = event.touches[0].clientX;
    var currentY = event.touches[0].clientY; // There was only one touch point, look for a swipe

    if (event.touches.length === 1 && touch.startCount !== 2) {
      var deltaX = currentX - touch.startX,
          deltaY = currentY - touch.startY;

      if (deltaX > touch.threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
        touch.captured = true;

        if (config.navigationMode === 'linear') {
          if (config.rtl) {
            navigateNext();
          } else {
            navigatePrev();
          }
        } else {
          navigateLeft();
        }
      } else if (deltaX < -touch.threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
        touch.captured = true;

        if (config.navigationMode === 'linear') {
          if (config.rtl) {
            navigatePrev();
          } else {
            navigateNext();
          }
        } else {
          navigateRight();
        }
      } else if (deltaY > touch.threshold) {
        touch.captured = true;

        if (config.navigationMode === 'linear') {
          navigatePrev();
        } else {
          navigateUp();
        }
      } else if (deltaY < -touch.threshold) {
        touch.captured = true;

        if (config.navigationMode === 'linear') {
          navigateNext();
        } else {
          navigateDown();
        }
      } // If we're embedded, only block touch events if they have
      // triggered an action


      if (config.embedded) {
        if (touch.captured || isVerticalSlide(currentSlide)) {
          event.preventDefault();
        }
      } // Not embedded? Block them all to avoid needless tossing
      // around of the viewport in iOS
      else {
          event.preventDefault();
        }
    }
  } // There's a bug with swiping on some Android devices unless
  // the default action is always prevented
  else if (UA.match(/android/gi)) {
      event.preventDefault();
    }
}
/**
 * Handler for the 'touchend' event.
 *
 * @param {object} event
 */


function onTouchEnd(event) {
  touch.captured = false;
}
/**
 * Convert pointer down to touch start.
 *
 * @param {object} event
 */


function onPointerDown(event) {
  if (event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch") {
    event.touches = [{
      clientX: event.clientX,
      clientY: event.clientY
    }];
    onTouchStart(event);
  }
}
/**
 * Convert pointer move to touch move.
 *
 * @param {object} event
 */


function onPointerMove(event) {
  if (event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch") {
    event.touches = [{
      clientX: event.clientX,
      clientY: event.clientY
    }];
    onTouchMove(event);
  }
}
/**
 * Convert pointer up to touch end.
 *
 * @param {object} event
 */


function onPointerUp(event) {
  if (event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch") {
    event.touches = [{
      clientX: event.clientX,
      clientY: event.clientY
    }];
    onTouchEnd(event);
  }
}
/**
 * Handles mouse wheel scrolling, throttled to avoid skipping
 * multiple slides.
 *
 * @param {object} event
 */


function onDocumentMouseScroll(event) {
  if (Date.now() - lastMouseWheelStep > 600) {
    lastMouseWheelStep = Date.now();
    var delta = event.detail || -event.wheelDelta;

    if (delta > 0) {
      navigateNext();
    } else if (delta < 0) {
      navigatePrev();
    }
  }
}
/**
 * Clicking on the progress bar results in a navigation to the
 * closest approximate horizontal slide using this equation:
 *
 * ( clickX / presentationWidth ) * numberOfSlides
 *
 * @param {object} event
 */


function onProgressClicked(event) {
  onUserInput(event);
  event.preventDefault();
  var slidesTotal = toArray(dom.wrapper.querySelectorAll(HORIZONTAL_SLIDES_SELECTOR)).length;
  var slideIndex = Math.floor(event.clientX / dom.wrapper.offsetWidth * slidesTotal);

  if (config.rtl) {
    slideIndex = slidesTotal - slideIndex;
  }

  slide(slideIndex);
}
/**
 * Event handler for navigation control buttons.
 */


function onNavigateLeftClicked(event) {
  event.preventDefault();
  onUserInput();
  config.navigationMode === 'linear' ? navigatePrev() : navigateLeft();
}

function onNavigateRightClicked(event) {
  event.preventDefault();
  onUserInput();
  config.navigationMode === 'linear' ? navigateNext() : navigateRight();
}

function onNavigateUpClicked(event) {
  event.preventDefault();
  onUserInput();
  navigateUp();
}

function onNavigateDownClicked(event) {
  event.preventDefault();
  onUserInput();
  navigateDown();
}

function onNavigatePrevClicked(event) {
  event.preventDefault();
  onUserInput();
  navigatePrev();
}

function onNavigateNextClicked(event) {
  event.preventDefault();
  onUserInput();
  navigateNext();
}
/**
 * Handler for the window level 'hashchange' event.
 *
 * @param {object} [event]
 */


function onWindowHashChange(event) {
  readURL();
}
/**
 * Handler for the window level 'resize' event.
 *
 * @param {object} [event]
 */


function onWindowResize(event) {
  layout();
}
/**
 * Handle for the window level 'visibilitychange' event.
 *
 * @param {object} [event]
 */


function onPageVisibilityChange(event) {
  var isHidden = document.webkitHidden || document.msHidden || document.hidden; // If, after clicking a link or similar and we're coming back,
  // focus the document.body to ensure we can use keyboard shortcuts

  if (isHidden === false && document.activeElement !== document.body) {
    // Not all elements support .blur() - SVGs among them.
    if (typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }

    document.body.focus();
  }
}
/**
 * Invoked when a slide is and we're in the overview.
 *
 * @param {object} event
 */


function onOverviewSlideClicked(event) {
  // TODO There's a bug here where the event listeners are not
  // removed after deactivating the overview.
  if (eventsAreBound && isOverview()) {
    event.preventDefault();
    var element = event.target;

    while (element && !element.nodeName.match(/section/gi)) {
      element = element.parentNode;
    }

    if (element && !element.classList.contains('disabled')) {
      deactivateOverview();

      if (element.nodeName.match(/section/gi)) {
        var h = parseInt(element.getAttribute('data-index-h'), 10),
            v = parseInt(element.getAttribute('data-index-v'), 10);
        slide(h, v);
      }
    }
  }
}
/**
 * Handles clicks on links that are set to preview in the
 * iframe overlay.
 *
 * @param {object} event
 */


function onPreviewLinkClicked(event) {
  if (event.currentTarget && event.currentTarget.hasAttribute('href')) {
    var url = event.currentTarget.getAttribute('href');

    if (url) {
      showPreview(url);
      event.preventDefault();
    }
  }
}
/**
 * Handles click on the auto-sliding controls element.
 *
 * @param {object} [event]
 */


function onAutoSlidePlayerClick(event) {
  // Replay
  if (Reveal.isLastSlide() && config.loop === false) {
    slide(0, 0);
    resumeAutoSlide();
  } // Resume
  else if (autoSlidePaused) {
      resumeAutoSlide();
    } // Pause
    else {
        pauseAutoSlide();
      }
} // --------------------------------------------------------------------//
// ------------------------ PLAYBACK COMPONENT ------------------------//
// --------------------------------------------------------------------//

/**
 * Constructor for the playback component, which displays
 * play/pause/progress controls.
 *
 * @param {HTMLElement} container The component will append
 * itself to this
 * @param {function} progressCheck A method which will be
 * called frequently to get the current progress on a range
 * of 0-1
 */


function Playback(container, progressCheck) {
  // Cosmetics
  this.diameter = 100;
  this.diameter2 = this.diameter / 2;
  this.thickness = 6; // Flags if we are currently playing

  this.playing = false; // Current progress on a 0-1 range

  this.progress = 0; // Used to loop the animation smoothly

  this.progressOffset = 1;
  this.container = container;
  this.progressCheck = progressCheck;
  this.canvas = document.createElement('canvas');
  this.canvas.className = 'playback';
  this.canvas.width = this.diameter;
  this.canvas.height = this.diameter;
  this.canvas.style.width = this.diameter2 + 'px';
  this.canvas.style.height = this.diameter2 + 'px';
  this.context = this.canvas.getContext('2d');
  this.container.appendChild(this.canvas);
  this.render();
}
/**
 * @param value
 */


Playback.prototype.setPlaying = function (value) {
  var wasPlaying = this.playing;
  this.playing = value; // Start repainting if we weren't already

  if (!wasPlaying && this.playing) {
    this.animate();
  } else {
    this.render();
  }
};

Playback.prototype.animate = function () {
  var progressBefore = this.progress;
  this.progress = this.progressCheck(); // When we loop, offset the progress so that it eases
  // smoothly rather than immediately resetting

  if (progressBefore > 0.8 && this.progress < 0.2) {
    this.progressOffset = this.progress;
  }

  this.render();

  if (this.playing) {
    features.requestAnimationFrameMethod.call(window, this.animate.bind(this));
  }
};
/**
 * Renders the current progress and playback state.
 */


Playback.prototype.render = function () {
  var progress = this.playing ? this.progress : 0,
      radius = this.diameter2 - this.thickness,
      x = this.diameter2,
      y = this.diameter2,
      iconSize = 28; // Ease towards 1

  this.progressOffset += (1 - this.progressOffset) * 0.1;
  var endAngle = -Math.PI / 2 + progress * (Math.PI * 2);
  var startAngle = -Math.PI / 2 + this.progressOffset * (Math.PI * 2);
  this.context.save();
  this.context.clearRect(0, 0, this.diameter, this.diameter); // Solid background color

  this.context.beginPath();
  this.context.arc(x, y, radius + 4, 0, Math.PI * 2, false);
  this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
  this.context.fill(); // Draw progress track

  this.context.beginPath();
  this.context.arc(x, y, radius, 0, Math.PI * 2, false);
  this.context.lineWidth = this.thickness;
  this.context.strokeStyle = 'rgba( 255, 255, 255, 0.2 )';
  this.context.stroke();

  if (this.playing) {
    // Draw progress on top of track
    this.context.beginPath();
    this.context.arc(x, y, radius, startAngle, endAngle, false);
    this.context.lineWidth = this.thickness;
    this.context.strokeStyle = '#fff';
    this.context.stroke();
  }

  this.context.translate(x - iconSize / 2, y - iconSize / 2); // Draw play/pause icons

  if (this.playing) {
    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, iconSize / 2 - 4, iconSize);
    this.context.fillRect(iconSize / 2 + 4, 0, iconSize / 2 - 4, iconSize);
  } else {
    this.context.beginPath();
    this.context.translate(4, 0);
    this.context.moveTo(0, 0);
    this.context.lineTo(iconSize - 4, iconSize / 2);
    this.context.lineTo(0, iconSize);
    this.context.fillStyle = '#fff';
    this.context.fill();
  }

  this.context.restore();
};

Playback.prototype.on = function (type, listener) {
  this.canvas.addEventListener(type, listener, false);
};

Playback.prototype.off = function (type, listener) {
  this.canvas.removeEventListener(type, listener, false);
};

Playback.prototype.destroy = function () {
  this.playing = false;

  if (this.canvas.parentNode) {
    this.container.removeChild(this.canvas);
  }
}; // --------------------------------------------------------------------//
// ------------------------------- API --------------------------------//
// --------------------------------------------------------------------//


Reveal = {
  VERSION: VERSION,
  initialize: initialize,
  configure: configure,
  sync: sync,
  syncSlide: syncSlide,
  syncFragments: syncFragments,
  // Navigation methods
  slide: slide,
  left: navigateLeft,
  right: navigateRight,
  up: navigateUp,
  down: navigateDown,
  prev: navigatePrev,
  next: navigateNext,
  // Fragment methods
  navigateFragment: navigateFragment,
  prevFragment: previousFragment,
  nextFragment: nextFragment,
  // Deprecated aliases
  navigateTo: slide,
  navigateLeft: navigateLeft,
  navigateRight: navigateRight,
  navigateUp: navigateUp,
  navigateDown: navigateDown,
  navigatePrev: navigatePrev,
  navigateNext: navigateNext,
  // Forces an update in slide layout
  layout: layout,
  // Randomizes the order of slides
  shuffle: shuffle,
  // Returns an object with the available routes as booleans (left/right/top/bottom)
  availableRoutes: availableRoutes,
  // Returns an object with the available fragments as booleans (prev/next)
  availableFragments: availableFragments,
  // Toggles a help overlay with keyboard shortcuts
  toggleHelp: toggleHelp,
  // Toggles the overview mode on/off
  toggleOverview: toggleOverview,
  // Toggles the "black screen" mode on/off
  togglePause: togglePause,
  // Toggles the auto slide mode on/off
  toggleAutoSlide: toggleAutoSlide,
  // State checks
  isOverview: isOverview,
  isPaused: isPaused,
  isAutoSliding: isAutoSliding,
  isSpeakerNotes: isSpeakerNotes,
  // Slide preloading
  loadSlide: loadSlide,
  unloadSlide: unloadSlide,
  // Adds or removes all internal event listeners (such as keyboard)
  addEventListeners: addEventListeners,
  removeEventListeners: removeEventListeners,
  // Facility for persisting and restoring the presentation state
  getState: getState,
  setState: setState,
  // Presentation progress
  getSlidePastCount: getSlidePastCount,
  // Presentation progress on range of 0-1
  getProgress: getProgress,
  // Returns the indices of the current, or specified, slide
  getIndices: getIndices,
  // Returns an Array of all slides
  getSlides: getSlides,
  // Returns an Array of objects representing the attributes on
  // the slides
  getSlidesAttributes: getSlidesAttributes,
  // Returns the total number of slides
  getTotalSlides: getTotalSlides,
  // Returns the slide element at the specified index
  getSlide: getSlide,
  // Returns the slide background element at the specified index
  getSlideBackground: getSlideBackground,
  // Returns the speaker notes string for a slide, or null
  getSlideNotes: getSlideNotes,
  // Returns an array with all horizontal/vertical slides in the deck
  getHorizontalSlides: getHorizontalSlides,
  getVerticalSlides: getVerticalSlides,
  // Checks if the presentation contains two or more
  // horizontal/vertical slides
  hasHorizontalSlides: hasHorizontalSlides,
  hasVerticalSlides: hasVerticalSlides,
  // Returns the previous slide element, may be null
  getPreviousSlide: function getPreviousSlide() {
    return previousSlide;
  },
  // Returns the current slide element
  getCurrentSlide: function getCurrentSlide() {
    return currentSlide;
  },
  // Returns the current scale of the presentation content
  getScale: function getScale() {
    return scale;
  },
  // Returns the current configuration object
  getConfig: function getConfig() {
    return config;
  },
  // Helper method, retrieves query string as a key/value hash
  getQueryHash: function getQueryHash() {
    var query = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function (a) {
      query[a.split('=').shift()] = a.split('=').pop();
    }); // Basic deserialization

    for (var i in query) {
      var value = query[i];
      query[i] = deserialize(unescape(value));
    }

    return query;
  },
  // Returns the top-level DOM element
  getRevealElement: function getRevealElement() {
    return dom.wrapper || document.querySelector('.reveal');
  },
  // Returns a hash with all registered plugins
  getPlugins: function getPlugins() {
    return plugins;
  },
  // Returns true if we're currently on the first slide
  isFirstSlide: function isFirstSlide() {
    return indexh === 0 && indexv === 0;
  },
  // Returns true if we're currently on the last slide
  isLastSlide: function isLastSlide() {
    if (currentSlide) {
      // Does this slide have a next sibling?
      if (currentSlide.nextElementSibling) return false; // If it's vertical, does its parent have a next sibling?

      if (isVerticalSlide(currentSlide) && currentSlide.parentNode.nextElementSibling) return false;
      return true;
    }

    return false;
  },
  // Returns true if we're on the last slide in the current
  // vertical stack
  isLastVerticalSlide: function isLastVerticalSlide() {
    if (currentSlide && isVerticalSlide(currentSlide)) {
      // Does this slide have a next sibling?
      if (currentSlide.nextElementSibling) return false;
      return true;
    }

    return false;
  },
  // Checks if reveal.js has been loaded and is ready for use
  isReady: function isReady() {
    return loaded;
  },
  // Forward event binding to the reveal DOM element
  addEventListener: function addEventListener(type, listener, useCapture) {
    if ('addEventListener' in window) {
      Reveal.getRevealElement().addEventListener(type, listener, useCapture);
    }
  },
  removeEventListener: function removeEventListener(type, listener, useCapture) {
    if ('addEventListener' in window) {
      Reveal.getRevealElement().removeEventListener(type, listener, useCapture);
    }
  },
  // Adds/removes a custom key binding
  addKeyBinding: addKeyBinding,
  removeKeyBinding: removeKeyBinding,
  // API for registering and retrieving plugins
  registerPlugin: registerPlugin,
  hasPlugin: hasPlugin,
  getPlugin: getPlugin,
  // Programmatically triggers a keyboard event
  triggerKey: function triggerKey(keyCode) {
    onDocumentKeyDown({
      keyCode: keyCode
    });
  },
  // Registers a new shortcut to include in the help overlay
  registerKeyboardShortcut: function registerKeyboardShortcut(key, value) {
    keyboardShortcuts[key] = value;
  }
};
var _default = Reveal;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY2FsX3JldmVhbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbXVzaWNhbF9yZXZlYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXVzaWNhbF9yZXZlYWwvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXVzaWNhbF9yZXZlYWwvLi9zcmMvcmV2ZWFsLmpzIl0sIm5hbWVzIjpbIlJldmVhbCIsIlZFUlNJT04iLCJTTElERVNfU0VMRUNUT1IiLCJIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiIsIlZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiIsIkhPTUVfU0xJREVfU0VMRUNUT1IiLCJVQSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIlBPU1RfTUVTU0FHRV9NRVRIT0RfQkxBQ0tMSVNUIiwiY29uZmlnIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJtaW5TY2FsZSIsIm1heFNjYWxlIiwiY29udHJvbHMiLCJjb250cm9sc1R1dG9yaWFsIiwiY29udHJvbHNMYXlvdXQiLCJjb250cm9sc0JhY2tBcnJvd3MiLCJwcm9ncmVzcyIsInNsaWRlTnVtYmVyIiwic2hvd1NsaWRlTnVtYmVyIiwiaGFzaE9uZUJhc2VkSW5kZXgiLCJoYXNoIiwiaGlzdG9yeSIsImtleWJvYXJkIiwia2V5Ym9hcmRDb25kaXRpb24iLCJvdmVydmlldyIsImRpc2FibGVMYXlvdXQiLCJjZW50ZXIiLCJ0b3VjaCIsImxvb3AiLCJydGwiLCJuYXZpZ2F0aW9uTW9kZSIsInNodWZmbGUiLCJmcmFnbWVudHMiLCJmcmFnbWVudEluVVJMIiwiZW1iZWRkZWQiLCJoZWxwIiwicGF1c2UiLCJzaG93Tm90ZXMiLCJhdXRvUGxheU1lZGlhIiwicHJlbG9hZElmcmFtZXMiLCJhdXRvU2xpZGUiLCJhdXRvU2xpZGVTdG9wcGFibGUiLCJhdXRvU2xpZGVNZXRob2QiLCJkZWZhdWx0VGltaW5nIiwibW91c2VXaGVlbCIsInJvbGxpbmdMaW5rcyIsImhpZGVBZGRyZXNzQmFyIiwicHJldmlld0xpbmtzIiwicG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZUV2ZW50cyIsImZvY3VzQm9keU9uUGFnZVZpc2liaWxpdHlDaGFuZ2UiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvblNwZWVkIiwiYmFja2dyb3VuZFRyYW5zaXRpb24iLCJwYXJhbGxheEJhY2tncm91bmRJbWFnZSIsInBhcmFsbGF4QmFja2dyb3VuZFNpemUiLCJwYXJhbGxheEJhY2tncm91bmRSZXBlYXQiLCJwYXJhbGxheEJhY2tncm91bmRQb3NpdGlvbiIsInBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWwiLCJwYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbCIsInBkZk1heFBhZ2VzUGVyU2xpZGUiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInBkZlNlcGFyYXRlRnJhZ21lbnRzIiwicGRmUGFnZUhlaWdodE9mZnNldCIsInZpZXdEaXN0YW5jZSIsIm1vYmlsZVZpZXdEaXN0YW5jZSIsImRpc3BsYXkiLCJoaWRlSW5hY3RpdmVDdXJzb3IiLCJoaWRlQ3Vyc29yVGltZSIsImRlcGVuZGVuY2llcyIsImluaXRpYWxpemVkIiwibG9hZGVkIiwib3ZlcnZpZXdTbGlkZVdpZHRoIiwib3ZlcnZpZXdTbGlkZUhlaWdodCIsImluZGV4aCIsImluZGV4diIsInByZXZpb3VzU2xpZGUiLCJjdXJyZW50U2xpZGUiLCJwcmV2aW91c0JhY2tncm91bmQiLCJoYXNOYXZpZ2F0ZWRSaWdodCIsImhhc05hdmlnYXRlZERvd24iLCJzdGF0ZSIsInNjYWxlIiwic2xpZGVzVHJhbnNmb3JtIiwibGF5b3V0IiwiZG9tIiwicGx1Z2lucyIsImFzeW5jRGVwZW5kZW5jaWVzIiwiZmVhdHVyZXMiLCJpc01vYmlsZURldmljZSIsImlzQ2hyb21lIiwibGFzdE1vdXNlV2hlZWxTdGVwIiwid3JpdGVVUkxUaW1lb3V0IiwiY3Vyc29ySGlkZGVuIiwiY3Vyc29ySW5hY3RpdmVUaW1lb3V0IiwiZXZlbnRzQXJlQm91bmQiLCJhdXRvU2xpZGVQbGF5ZXIiLCJhdXRvU2xpZGVUaW1lb3V0IiwiYXV0b1NsaWRlU3RhcnRUaW1lIiwiYXV0b1NsaWRlUGF1c2VkIiwic3RhcnRYIiwic3RhcnRZIiwic3RhcnRDb3VudCIsImNhcHR1cmVkIiwidGhyZXNob2xkIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJyZWdpc3RlcmVkS2V5QmluZGluZ3MiLCJpbml0aWFsaXplIiwib3B0aW9ucyIsImNoZWNrQ2FwYWJpbGl0aWVzIiwidHJhbnNmb3JtczJkIiwidHJhbnNmb3JtczNkIiwiZG9jdW1lbnQiLCJib2R5Iiwic2V0QXR0cmlidXRlIiwiaW1hZ2VzIiwidG9BcnJheSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWZyYW1lcyIsImxhenlMb2FkYWJsZSIsImNvbmNhdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwid3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnkiLCJnZXRRdWVyeUhhc2giLCJleHRlbmQiLCJsb2FkIiwidGVzdCIsInBsYXRmb3JtIiwibWF4VG91Y2hQb2ludHMiLCJ0ZXN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZU1ldGhvZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJvdmVydmlld1RyYW5zaXRpb25zIiwiem9vbSIsInNjcmlwdHMiLCJzY3JpcHRzVG9Mb2FkIiwiZm9yRWFjaCIsInMiLCJjb25kaXRpb24iLCJhc3luYyIsInB1c2giLCJsb2FkU2NyaXB0Iiwic3JjIiwiY2FsbGJhY2siLCJpbml0UGx1Z2lucyIsInBsdWdpbnNUb0luaXRpYWxpemUiLCJPYmplY3QiLCJrZXlzIiwibG9hZEFzeW5jRGVwZW5kZW5jaWVzIiwiYWZ0ZXJQbHVnSW5pdGlhbGl6ZWQiLCJwbHVnaW4iLCJpbml0IiwidGhlbiIsInN0YXJ0IiwidXJsIiwic2NyaXB0IiwidHlwZSIsImRlZmVyIiwib25sb2FkIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZXZlbnQiLCJyZWFkeVN0YXRlIiwib25lcnJvciIsImVyciIsIkVycm9yIiwiaGVhZCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInNldHVwRE9NIiwic2V0dXBQb3N0TWVzc2FnZSIsInNldHVwU2Nyb2xsUHJldmVudGlvbiIsInJlc2V0VmVydGljYWxTbGlkZXMiLCJjb25maWd1cmUiLCJyZWFkVVJMIiwidXBkYXRlQmFja2dyb3VuZCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkaXNwYXRjaEV2ZW50IiwiaXNQcmludGluZ1BERiIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwic2V0dXBQREYiLCJiYWNrZ3JvdW5kIiwiY3JlYXRlU2luZ2xldG9uTm9kZSIsInByb2dyZXNzYmFyIiwic3BlYWtlck5vdGVzIiwicGF1c2VPdmVybGF5IiwiY29udHJvbHNMZWZ0IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRyb2xzUmlnaHQiLCJjb250cm9sc1VwIiwiY29udHJvbHNEb3duIiwiY29udHJvbHNQcmV2IiwiY29udHJvbHNOZXh0IiwiY29udHJvbHNSaWdodEFycm93IiwiY29udHJvbHNEb3duQXJyb3ciLCJzdGF0dXNEaXYiLCJjcmVhdGVTdGF0dXNEaXYiLCJnZXRFbGVtZW50QnlJZCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJjbGlwIiwiYXBwZW5kQ2hpbGQiLCJnZXRTdGF0dXNUZXh0Iiwibm9kZSIsInRleHQiLCJub2RlVHlwZSIsInRleHRDb250ZW50IiwiaXNBcmlhSGlkZGVuIiwiaXNEaXNwbGF5SGlkZGVuIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNoaWxkTm9kZXMiLCJjaGlsZCIsInNsaWRlU2l6ZSIsImdldENvbXB1dGVkU2xpZGVTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGFnZVdpZHRoIiwiTWF0aCIsImZsb29yIiwicGFnZUhlaWdodCIsInNsaWRlV2lkdGgiLCJzbGlkZUhlaWdodCIsImluamVjdFN0eWxlU2hlZXQiLCJsYXlvdXRTbGlkZUNvbnRlbnRzIiwiZG9pbmdTbGlkZU51bWJlcnMiLCJzbGlkZSIsImdldFNsaWRlTnVtYmVyIiwiY29udGFpbnMiLCJsZWZ0IiwidG9wIiwiY29udGVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm51bWJlck9mUGFnZXMiLCJtYXgiLCJjZWlsIiwibWluIiwicGFnZSIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJzbGlkZUJhY2tncm91bmRFbGVtZW50Iiwibm90ZXMiLCJnZXRTbGlkZU5vdGVzIiwibm90ZXNTcGFjaW5nIiwibm90ZXNMYXlvdXQiLCJub3Rlc0VsZW1lbnQiLCJpbm5lckhUTUwiLCJuZXh0U2libGluZyIsImJvdHRvbSIsIm51bWJlckVsZW1lbnQiLCJmcmFnbWVudEdyb3VwcyIsInNvcnRGcmFnbWVudHMiLCJwcmV2aW91c0ZyYWdtZW50U3RlcCIsInByZXZpb3VzUGFnZSIsImZyYWdtZW50IiwiY2xvbmVkUGFnZSIsImNsb25lTm9kZSIsInNldEludGVydmFsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImNvbnRhaW5lciIsInRhZ25hbWUiLCJjbGFzc25hbWUiLCJub2RlcyIsInRlc3ROb2RlIiwiY3JlYXRlQmFja2dyb3VuZHMiLCJwcmludE1vZGUiLCJzbGlkZWgiLCJiYWNrZ3JvdW5kU3RhY2siLCJjcmVhdGVCYWNrZ3JvdW5kIiwic2xpZGV2IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicmVwbGFjZSIsImNvbnRlbnRFbGVtZW50Iiwic2xpZGVCYWNrZ3JvdW5kQ29udGVudEVsZW1lbnQiLCJzeW5jQmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJkYXRhIiwiYmFja2dyb3VuZFZpZGVvIiwiYmFja2dyb3VuZElmcmFtZSIsImJhY2tncm91bmRPcGFjaXR5IiwiaGFzQXR0cmlidXRlIiwiY29udHJhc3RDb2xvciIsImNvbXB1dGVkQmFja2dyb3VuZFN0eWxlIiwicmdiIiwiY29sb3JUb1JnYiIsImEiLCJjb2xvckJyaWdodG5lc3MiLCJjaGFyQXQiLCJKU09OIiwicGFyc2UiLCJtZXRob2QiLCJyZXN1bHQiLCJhcHBseSIsImFyZ3MiLCJkaXNwYXRjaFBvc3RNZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJvbGRUcmFuc2l0aW9uIiwibnVtYmVyT2ZTbGlkZXMiLCJyZXN1bWUiLCJvbkRvY3VtZW50TW91c2VTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5hYmxlUm9sbGluZ0xpbmtzIiwiZGlzYWJsZVJvbGxpbmdMaW5rcyIsIm9uRG9jdW1lbnRDdXJzb3JBY3RpdmUiLCJzaG93Q3Vyc29yIiwiZW5hYmxlUHJldmlld0xpbmtzIiwiZGlzYWJsZVByZXZpZXdMaW5rcyIsImRlc3Ryb3kiLCJQbGF5YmFjayIsIkRhdGUiLCJub3ciLCJvbiIsIm9uQXV0b1NsaWRlUGxheWVyQ2xpY2siLCJzbGlkZU51bWJlckRpc3BsYXkiLCJpc1NwZWFrZXJOb3RlcyIsInN5bmMiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uV2luZG93SGFzaENoYW5nZSIsIm9uV2luZG93UmVzaXplIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlck1vdmUiLCJvblBvaW50ZXJVcCIsIm1zUG9pbnRlckVuYWJsZWQiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJvbkRvY3VtZW50S2V5RG93biIsIm9uRG9jdW1lbnRLZXlQcmVzcyIsIm9uUHJvZ3Jlc3NDbGlja2VkIiwidmlzaWJpbGl0eUNoYW5nZSIsIm9uUGFnZVZpc2liaWxpdHlDaGFuZ2UiLCJwb2ludGVyRXZlbnRzIiwibWF0Y2giLCJldmVudE5hbWUiLCJlbCIsIm9uTmF2aWdhdGVMZWZ0Q2xpY2tlZCIsIm9uTmF2aWdhdGVSaWdodENsaWNrZWQiLCJvbk5hdmlnYXRlVXBDbGlja2VkIiwib25OYXZpZ2F0ZURvd25DbGlja2VkIiwib25OYXZpZ2F0ZVByZXZDbGlja2VkIiwib25OYXZpZ2F0ZU5leHRDbGlja2VkIiwicmVnaXN0ZXJQbHVnaW4iLCJpZCIsInVuZGVmaW5lZCIsImhhc1BsdWdpbiIsImdldFBsdWdpbiIsImFkZEtleUJpbmRpbmciLCJiaW5kaW5nIiwia2V5Q29kZSIsImtleSIsImRlc2NyaXB0aW9uIiwicmVtb3ZlS2V5QmluZGluZyIsImIiLCJvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJkZXNlcmlhbGl6ZSIsInZhbHVlIiwicGFyc2VGbG9hdCIsImRpc3RhbmNlQmV0d2VlbiIsImR4IiwieCIsImR5IiwieSIsInNxcnQiLCJ0cmFuc2Zvcm1FbGVtZW50IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwiTW96VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1TbGlkZXMiLCJ0cmFuc2Zvcm1zIiwidGFnIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImNsb3Nlc3RQYXJlbnQiLCJ0YXJnZXQiLCJzZWxlY3RvciIsInBhcmVudCIsIm1hdGNoZXNNZXRob2QiLCJtYXRjaGVzIiwibWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjb2xvciIsImhleDMiLCJyIiwicGFyc2VJbnQiLCJnIiwiaGV4NiIsInN1YnN0ciIsInJnYmEiLCJnZXRSZW1haW5pbmdIZWlnaHQiLCJuZXdIZWlnaHQiLCJvbGRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmVQcm9wZXJ0eSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVtb3ZlQWRkcmVzc0JhciIsInNjcm9sbFRvIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzZWxmIiwibWVzc2FnZSIsIm5hbWVzcGFjZSIsImdldFN0YXRlIiwic3RyaW5naWZ5IiwiYW5jaG9ycyIsImFuY2hvciIsInNwYW4iLCJvblByZXZpZXdMaW5rQ2xpY2tlZCIsInNob3dQcmV2aWV3IiwiY2xvc2VPdmVybGF5Iiwib3ZlcmxheSIsImpvaW4iLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUhlbHAiLCJvdmVycmlkZSIsInNob3dIZWxwIiwiaHRtbCIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJzaXplIiwib2xkU2NhbGUiLCJwcmVzZW50YXRpb25XaWR0aCIsInByZXNlbnRhdGlvbkhlaWdodCIsInJpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInVwZGF0ZVByb2dyZXNzIiwidXBkYXRlUGFyYWxsYXgiLCJpc092ZXJ2aWV3IiwidXBkYXRlT3ZlcnZpZXciLCJyZW1haW5pbmdIZWlnaHQiLCJub2RlTmFtZSIsIm53IiwibmF0dXJhbFdpZHRoIiwidmlkZW9XaWR0aCIsIm5oIiwibmF0dXJhbEhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZXMiLCJvZmZzZXRXaWR0aCIsInNldFByZXZpb3VzVmVydGljYWxJbmRleCIsInN0YWNrIiwidiIsImdldFByZXZpb3VzVmVydGljYWxJbmRleCIsImF0dHJpYnV0ZU5hbWUiLCJhY3RpdmF0ZU92ZXJ2aWV3IiwiY2FuY2VsQXV0b1NsaWRlIiwib25PdmVydmlld1NsaWRlQ2xpY2tlZCIsInVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkiLCJsYXlvdXRPdmVydmlldyIsImhzbGlkZSIsImgiLCJ2c2xpZGUiLCJoYmFja2dyb3VuZCIsInZiYWNrZ3JvdW5kIiwidm1pbiIsImRlYWN0aXZhdGVPdmVydmlldyIsImN1ZUF1dG9TbGlkZSIsInRvZ2dsZU92ZXJ2aWV3IiwibG9jYXRpb25IYXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaW5kZXgiLCJnZXRJbmRpY2VzIiwiZiIsImhhc2hJbmRleEJhc2UiLCJpc1ZlcnRpY2FsU2xpZGUiLCJlbnRlckZ1bGxzY3JlZW4iLCJyZXF1ZXN0TWV0aG9kIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiY3Vyc29yIiwiaGlkZUN1cnNvciIsIndhc1BhdXNlZCIsInRvZ2dsZVBhdXNlIiwiaXNQYXVzZWQiLCJ0b2dnbGVBdXRvU2xpZGUiLCJyZXN1bWVBdXRvU2xpZGUiLCJwYXVzZUF1dG9TbGlkZSIsImlzQXV0b1NsaWRpbmciLCJob3Jpem9udGFsU2xpZGVzIiwic3RhdGVCZWZvcmUiLCJpbmRleGhCZWZvcmUiLCJpbmRleHZCZWZvcmUiLCJ1cGRhdGVTbGlkZXMiLCJjdXJyZW50SG9yaXpvbnRhbFNsaWRlIiwiY3VycmVudFZlcnRpY2FsU2xpZGVzIiwibmF2aWdhdGVGcmFnbWVudCIsInNsaWRlQ2hhbmdlZCIsInN0YXRlTG9vcCIsImoiLCJzcGxpY2UiLCJwb3AiLCJzdG9wRW1iZWRkZWRDb250ZW50Iiwic3RhcnRFbWJlZGRlZENvbnRlbnQiLCJ1cGRhdGVDb250cm9scyIsInVwZGF0ZVNsaWRlTnVtYmVyIiwidXBkYXRlTm90ZXMiLCJ1cGRhdGVGcmFnbWVudHMiLCJ3cml0ZVVSTCIsInNvcnRBbGxGcmFnbWVudHMiLCJ1cGRhdGVOb3Rlc1Zpc2liaWxpdHkiLCJmb3JtYXRFbWJlZGRlZENvbnRlbnQiLCJ1bmxvYWRJZnJhbWVzIiwic3luY1NsaWRlIiwic3luY0ZyYWdtZW50cyIsImxvYWRTbGlkZSIsImhvcml6b250YWxTbGlkZSIsInZlcnRpY2FsU2xpZGVzIiwidmVydGljYWxTbGlkZSIsInJhbmRvbSIsInNsaWRlc0xlbmd0aCIsInJldmVyc2UiLCJzbGlkZVN0YXRlIiwic3BsaXQiLCJob3Jpem9udGFsU2xpZGVzTGVuZ3RoIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiTUFYX1ZBTFVFIiwidmVydGljYWxTbGlkZXNMZW5ndGgiLCJhYnMiLCJ1bmxvYWRTbGlkZSIsIm95IiwiaGFzVmVydGljYWxTbGlkZXMiLCJoYXNIb3Jpem9udGFsU2xpZGVzIiwiaGFzTm90ZXMiLCJnZXRQcm9ncmVzcyIsImZvcm1hdCIsImdldFNsaWRlUGFzdENvdW50IiwiZ2V0VG90YWxTbGlkZXMiLCJpbmRpY2VzIiwic2VwIiwiZm9ybWF0U2xpZGVOdW1iZXIiLCJkZWxpbWl0ZXIiLCJpc05hTiIsInJvdXRlcyIsImF2YWlsYWJsZVJvdXRlcyIsImF2YWlsYWJsZUZyYWdtZW50cyIsInVwIiwiZG93biIsInByZXYiLCJuZXh0IiwiaW5jbHVkZUFsbCIsImN1cnJlbnRCYWNrZ3JvdW5kIiwiaG9yaXpvbnRhbFBhc3QiLCJob3Jpem9udGFsRnV0dXJlIiwiYmFja2dyb3VuZGgiLCJiYWNrZ3JvdW5kdiIsInNob3VsZFByZWxvYWQiLCJjdXJyZW50QmFja2dyb3VuZENvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2VVUkwiLCJwcmV2aW91c0JhY2tncm91bmRIYXNoIiwiY3VycmVudEJhY2tncm91bmRIYXNoIiwiY2xhc3NUb0J1YmJsZSIsImJhY2tncm91bmRXaWR0aCIsImJhY2tncm91bmRIZWlnaHQiLCJob3Jpem9udGFsU2xpZGVDb3VudCIsImhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyIiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsU2xpZGVDb3VudCIsInZlcnRpY2FsT2Zmc2V0TXVsdGlwbGllciIsInZlcnRpY2FsT2Zmc2V0IiwicHJlbG9hZCIsInRhZ05hbWUiLCJtZWRpYSIsInNvdXJjZXMiLCJzb3VyY2UiLCJiYWNrZ3JvdW5kQ29udGVudCIsImJhY2tncm91bmRWaWRlb0xvb3AiLCJiYWNrZ3JvdW5kVmlkZW9NdXRlZCIsImVuY29kZVVSSSIsInZpZGVvIiwibXV0ZWQiLCJhdXRvcGxheSIsImV4Y2x1ZGVJZnJhbWVzIiwiaWZyYW1lIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kSWZyYW1lRWxlbWVudCIsImdldFNsaWRlQmFja2dyb3VuZCIsImhpZGRlbkZyYWdtZW50cyIsIl9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlIiwic291cmNlQXR0cmlidXRlIiwic291cmNlVVJMIiwicGFyYW0iLCJpbmRleE9mIiwicGxheSIsInN0YXJ0RW1iZWRkZWRNZWRpYSIsInByb21pc2UiLCJjYXRjaCIsInN0YXJ0RW1iZWRkZWRJZnJhbWUiLCJpc0F0dGFjaGVkVG9ET00iLCJpc1Zpc2libGUiLCJjdXJyZW50VGltZSIsImNvbnRlbnRXaW5kb3ciLCJwYXN0Q291bnQiLCJtYWluTG9vcCIsInRvdGFsQ291bnQiLCJhbGxGcmFnbWVudHMiLCJ2aXNpYmxlRnJhZ21lbnRzIiwiZnJhZ21lbnRXZWlnaHQiLCJiaXRzIiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVycm9yIiwiaXNTYW1lTmFtZUFzQ3VycmVudFNsaWRlIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsImlzVmVydGljYWwiLCJoYXNGcmFnbWVudHMiLCJjdXJyZW50RnJhZ21lbnQiLCJnZXRTbGlkZXMiLCJnZXRIb3Jpem9udGFsU2xpZGVzIiwiZ2V0VmVydGljYWxTbGlkZXMiLCJnZXRTbGlkZXNBdHRyaWJ1dGVzIiwibWFwIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsImdldFNsaWRlIiwiaW5kZXhmIiwicGF1c2VkIiwic2V0U3RhdGUiLCJwYXVzZWRGbGFnIiwib3ZlcnZpZXdGbGFnIiwiZ3JvdXBlZCIsIm9yZGVyZWQiLCJ1bm9yZGVyZWQiLCJzb3J0ZWQiLCJncm91cCIsImNoYW5nZWRGcmFnbWVudHMiLCJzaG93biIsImhpZGRlbiIsIm1heEluZGV4Iiwib2Zmc2V0IiwibGFzdFZpc2libGVGcmFnbWVudCIsIm5leHRGcmFnbWVudCIsInByZXZpb3VzRnJhZ21lbnQiLCJmcmFnbWVudEF1dG9TbGlkZSIsInBhcmVudEF1dG9TbGlkZSIsInNsaWRlQXV0b1NsaWRlIiwiZHVyYXRpb24iLCJwbGF5YmFja1JhdGUiLCJpc0xhc3RTbGlkZSIsIm5hdmlnYXRlTmV4dCIsInNldFBsYXlpbmciLCJuYXZpZ2F0ZUxlZnQiLCJuYXZpZ2F0ZVJpZ2h0IiwibmF2aWdhdGVVcCIsIm5hdmlnYXRlRG93biIsIm5hdmlnYXRlUHJldiIsImlzTGFzdFZlcnRpY2FsU2xpZGUiLCJpc1N3aXBlUHJldmVudGVkIiwib25Vc2VySW5wdXQiLCJzaGlmdEtleSIsImNoYXJDb2RlIiwiYXV0b1NsaWRlV2FzUGF1c2VkIiwiYWN0aXZlRWxlbWVudElzQ0UiLCJhY3RpdmVFbGVtZW50IiwiY29udGVudEVkaXRhYmxlIiwiYWN0aXZlRWxlbWVudElzSW5wdXQiLCJhY3RpdmVFbGVtZW50SXNOb3RlcyIsInByZXZTbGlkZVNob3J0Y3V0IiwiZmlyc3RTbGlkZVNob3J0Y3V0IiwibGFzdFNsaWRlU2hvcnRjdXQiLCJ1bnVzZWRNb2RpZmllciIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwicmVzdW1lS2V5Q29kZXMiLCJ1c2VMaW5lYXJNb2RlIiwidHJpZ2dlcmVkIiwiYWN0aW9uIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImRlbHRhWCIsImRlbHRhWSIsInBvaW50ZXJUeXBlIiwiTVNQT0lOVEVSX1RZUEVfVE9VQ0giLCJkZWx0YSIsImRldGFpbCIsIndoZWVsRGVsdGEiLCJzbGlkZXNUb3RhbCIsInNsaWRlSW5kZXgiLCJpc0hpZGRlbiIsIndlYmtpdEhpZGRlbiIsIm1zSGlkZGVuIiwiYmx1ciIsImZvY3VzIiwiY3VycmVudFRhcmdldCIsInByb2dyZXNzQ2hlY2siLCJkaWFtZXRlciIsImRpYW1ldGVyMiIsInRoaWNrbmVzcyIsInBsYXlpbmciLCJwcm9ncmVzc09mZnNldCIsImNvbnRleHQiLCJyZW5kZXIiLCJ3YXNQbGF5aW5nIiwiYW5pbWF0ZSIsInByb2dyZXNzQmVmb3JlIiwiYmluZCIsInJhZGl1cyIsImljb25TaXplIiwiZW5kQW5nbGUiLCJQSSIsInN0YXJ0QW5nbGUiLCJzYXZlIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidHJhbnNsYXRlIiwiZmlsbFJlY3QiLCJtb3ZlVG8iLCJsaW5lVG8iLCJyZXN0b3JlIiwibGlzdGVuZXIiLCJvZmYiLCJwcmV2RnJhZ21lbnQiLCJuYXZpZ2F0ZVRvIiwiZ2V0UHJldmlvdXNTbGlkZSIsImdldEN1cnJlbnRTbGlkZSIsImdldFNjYWxlIiwiZ2V0Q29uZmlnIiwic2hpZnQiLCJ1bmVzY2FwZSIsImdldFJldmVhbEVsZW1lbnQiLCJnZXRQbHVnaW5zIiwiaXNGaXJzdFNsaWRlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaXNSZWFkeSIsInVzZUNhcHR1cmUiLCJ0cmlnZ2VyS2V5IiwicmVnaXN0ZXJLZXlib2FyZFNob3J0Y3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBC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QUE0TVBoYyxxQkFBbUIsRUFBRSw2QkFBVXZKLElBQVYsRUFBZ0J3a0IsUUFBaEIsRUFBMEJlLFVBQTFCLEVBQXVDO0FBQzFELFFBQUksc0JBQXNCam9CLE1BQTFCLEVBQW1DO0FBQ2pDdkksWUFBTSxDQUFDbXdCLGdCQUFQLEdBQTBCM2IsbUJBQTFCLENBQStDdkosSUFBL0MsRUFBcUR3a0IsUUFBckQsRUFBK0RlLFVBQS9EO0FBQ0Q7QUFDRixHQWhOTTtBQWtOUDtBQUNBbFosZUFBYSxFQUFFQSxhQW5OUjtBQW9OUEssa0JBQWdCLEVBQUVBLGdCQXBOWDtBQXNOUDtBQUNBVixnQkFBYyxFQUFFQSxjQXZOVDtBQXdOUEcsV0FBUyxFQUFFQSxTQXhOSjtBQXlOUEMsV0FBUyxFQUFFQSxTQXpOSjtBQTJOUDtBQUNBb1osWUFBVSxFQUFFLG9CQUFValosT0FBVixFQUFvQjtBQUM5QnRCLHFCQUFpQixDQUFFO0FBQUVzQixhQUFPLEVBQUVBO0FBQVgsS0FBRixDQUFqQjtBQUNELEdBOU5NO0FBZ09QO0FBQ0FrWiwwQkFBd0IsRUFBRSxrQ0FBVWpaLEdBQVYsRUFBZVUsS0FBZixFQUF1QjtBQUMvQ3JSLHFCQUFpQixDQUFDMlEsR0FBRCxDQUFqQixHQUF5QlUsS0FBekI7QUFDRDtBQW5PTSxDQUFUO2VBc09lblksTSIsImZpbGUiOiJtdXNpY2FsX3JldmVhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibXVzaWNhbF9yZXZlYWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibXVzaWNhbF9yZXZlYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibXVzaWNhbF9yZXZlYWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmV2ZWFsIGZyb20gJy4vcmV2ZWFsJztcbmV4cG9ydCB7IFJldmVhbCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmV2ZWFsO1xuXG4vLyBUaGUgcmV2ZWFsLmpzIHZlcnNpb25cbnZhciBWRVJTSU9OID0gJzMuOS4yJztcblxudmFyIFNMSURFU19TRUxFQ1RPUiA9ICcuc2xpZGVzIHNlY3Rpb24nLFxuICBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiA9ICcuc2xpZGVzPnNlY3Rpb24nLFxuICBWRVJUSUNBTF9TTElERVNfU0VMRUNUT1IgPSAnLnNsaWRlcz5zZWN0aW9uLnByZXNlbnQ+c2VjdGlvbicsXG4gIEhPTUVfU0xJREVfU0VMRUNUT1IgPSAnLnNsaWRlcz5zZWN0aW9uOmZpcnN0LW9mLXR5cGUnLFxuXG4gIFVBID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcblxuICAvLyBNZXRob2RzIHRoYXQgbWF5IG5vdCBiZSBpbnZva2VkIHZpYSB0aGUgcG9zdE1lc3NhZ2UgQVBJXG4gIFBPU1RfTUVTU0FHRV9NRVRIT0RfQkxBQ0tMSVNUID0gL3JlZ2lzdGVyUGx1Z2lufHJlZ2lzdGVyS2V5Ym9hcmRTaG9ydGN1dHxhZGRLZXlCaW5kaW5nfGFkZEV2ZW50TGlzdGVuZXIvLFxuXG4gIC8vIENvbmZpZ3VyYXRpb24gZGVmYXVsdHMsIGNhbiBiZSBvdmVycmlkZGVuIGF0IGluaXRpYWxpemF0aW9uIHRpbWVcbiAgY29uZmlnID0ge1xuXG4gICAgLy8gVGhlIFwibm9ybWFsXCIgc2l6ZSBvZiB0aGUgcHJlc2VudGF0aW9uLCBhc3BlY3QgcmF0aW8gd2lsbCBiZSBwcmVzZXJ2ZWRcbiAgICAvLyB3aGVuIHRoZSBwcmVzZW50YXRpb24gaXMgc2NhbGVkIHRvIGZpdCBkaWZmZXJlbnQgcmVzb2x1dGlvbnNcbiAgICB3aWR0aDogOTYwLFxuICAgIGhlaWdodDogNzAwLFxuXG4gICAgLy8gRmFjdG9yIG9mIHRoZSBkaXNwbGF5IHNpemUgdGhhdCBzaG91bGQgcmVtYWluIGVtcHR5IGFyb3VuZCB0aGUgY29udGVudFxuICAgIG1hcmdpbjogMC4wNCxcblxuICAgIC8vIEJvdW5kcyBmb3Igc21hbGxlc3QvbGFyZ2VzdCBwb3NzaWJsZSBzY2FsZSB0byBhcHBseSB0byBjb250ZW50XG4gICAgbWluU2NhbGU6IDAuMixcbiAgICBtYXhTY2FsZTogMi4wLFxuXG4gICAgLy8gRGlzcGxheSBwcmVzZW50YXRpb24gY29udHJvbCBhcnJvd3NcbiAgICBjb250cm9sczogdHJ1ZSxcblxuICAgIC8vIEhlbHAgdGhlIHVzZXIgbGVhcm4gdGhlIGNvbnRyb2xzIGJ5IHByb3ZpZGluZyBoaW50cywgZm9yIGV4YW1wbGUgYnlcbiAgICAvLyBib3VuY2luZyB0aGUgZG93biBhcnJvdyB3aGVuIHRoZXkgZmlyc3QgZW5jb3VudGVyIGEgdmVydGljYWwgc2xpZGVcbiAgICBjb250cm9sc1R1dG9yaWFsOiB0cnVlLFxuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGVyZSBjb250cm9scyBhcHBlYXIsIFwiZWRnZXNcIiBvciBcImJvdHRvbS1yaWdodFwiXG4gICAgY29udHJvbHNMYXlvdXQ6ICdib3R0b20tcmlnaHQnLFxuXG4gICAgLy8gVmlzaWJpbGl0eSBydWxlIGZvciBiYWNrd2FyZHMgbmF2aWdhdGlvbiBhcnJvd3M7IFwiZmFkZWRcIiwgXCJoaWRkZW5cIlxuICAgIC8vIG9yIFwidmlzaWJsZVwiXG4gICAgY29udHJvbHNCYWNrQXJyb3dzOiAnZmFkZWQnLFxuXG4gICAgLy8gRGlzcGxheSBhIHByZXNlbnRhdGlvbiBwcm9ncmVzcyBiYXJcbiAgICBwcm9ncmVzczogdHJ1ZSxcblxuICAgIC8vIERpc3BsYXkgdGhlIHBhZ2UgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHNsaWRlXG4gICAgLy8gLSB0cnVlOiAgICBTaG93IHNsaWRlIG51bWJlclxuICAgIC8vIC0gZmFsc2U6ICAgSGlkZSBzbGlkZSBudW1iZXJcbiAgICAvL1xuICAgIC8vIENhbiBvcHRpb25hbGx5IGJlIHNldCBhcyBhIHN0cmluZyB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIGZvcm1hdHRpbmc6XG4gICAgLy8gLSBcImgudlwiOlx0ICBIb3Jpem9udGFsIC4gdmVydGljYWwgc2xpZGUgbnVtYmVyIChkZWZhdWx0KVxuICAgIC8vIC0gXCJoL3ZcIjpcdCAgSG9yaXpvbnRhbCAvIHZlcnRpY2FsIHNsaWRlIG51bWJlclxuICAgIC8vIC0gXCJjXCI6XHQgIEZsYXR0ZW5lZCBzbGlkZSBudW1iZXJcbiAgICAvLyAtIFwiYy90XCI6XHQgIEZsYXR0ZW5lZCBzbGlkZSBudW1iZXIgLyB0b3RhbCBzbGlkZXNcbiAgICAvL1xuICAgIC8vIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gcHJvdmlkZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgc2xpZGVcbiAgICAvLyBudW1iZXIgZm9yIHRoZSBjdXJyZW50IHNsaWRlLiBUaGUgZnVuY3Rpb24gc2hvdWxkIHRha2UgaW4gYSBzbGlkZVxuICAgIC8vIG9iamVjdCBhbmQgcmV0dXJuIGFuIGFycmF5IHdpdGggb25lIHN0cmluZyBbc2xpZGVOdW1iZXJdIG9yXG4gICAgLy8gdGhyZWUgc3RyaW5ncyBbbjEsZGVsaW1pdGVyLG4yXS4gU2VlICNmb3JtYXRTbGlkZU51bWJlcigpLlxuICAgIHNsaWRlTnVtYmVyOiBmYWxzZSxcblxuICAgIC8vIENhbiBiZSB1c2VkIHRvIGxpbWl0IHRoZSBjb250ZXh0cyBpbiB3aGljaCB0aGUgc2xpZGUgbnVtYmVyIGFwcGVhcnNcbiAgICAvLyAtIFwiYWxsXCI6ICAgICAgQWx3YXlzIHNob3cgdGhlIHNsaWRlIG51bWJlclxuICAgIC8vIC0gXCJwcmludFwiOiAgICBPbmx5IHdoZW4gcHJpbnRpbmcgdG8gUERGXG4gICAgLy8gLSBcInNwZWFrZXJcIjogIE9ubHkgaW4gdGhlIHNwZWFrZXIgdmlld1xuICAgIHNob3dTbGlkZU51bWJlcjogJ2FsbCcsXG5cbiAgICAvLyBVc2UgMSBiYXNlZCBpbmRleGluZyBmb3IgIyBsaW5rcyB0byBtYXRjaCBzbGlkZSBudW1iZXIgKGRlZmF1bHQgaXMgemVyb1xuICAgIC8vIGJhc2VkKVxuICAgIGhhc2hPbmVCYXNlZEluZGV4OiBmYWxzZSxcblxuICAgIC8vIEFkZCB0aGUgY3VycmVudCBzbGlkZSBudW1iZXIgdG8gdGhlIFVSTCBoYXNoIHNvIHRoYXQgcmVsb2FkaW5nIHRoZVxuICAgIC8vIHBhZ2UvY29weWluZyB0aGUgVVJMIHdpbGwgcmV0dXJuIHlvdSB0byB0aGUgc2FtZSBzbGlkZVxuICAgIGhhc2g6IGZhbHNlLFxuXG4gICAgLy8gUHVzaCBlYWNoIHNsaWRlIGNoYW5nZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5LiAgSW1wbGllcyBgaGFzaDogdHJ1ZWBcbiAgICBoaXN0b3J5OiBmYWxzZSxcblxuICAgIC8vIEVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgZm9yIG5hdmlnYXRpb25cbiAgICBrZXlib2FyZDogdHJ1ZSxcblxuICAgIC8vIE9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgYmxvY2tzIGtleWJvYXJkIGV2ZW50cyB3aGVuIHJldHVuaW5nIGZhbHNlXG4gICAga2V5Ym9hcmRDb25kaXRpb246IG51bGwsXG5cbiAgICAvLyBFbmFibGUgdGhlIHNsaWRlIG92ZXJ2aWV3IG1vZGVcbiAgICBvdmVydmlldzogdHJ1ZSxcblxuICAgIC8vIERpc2FibGVzIHRoZSBkZWZhdWx0IHJldmVhbC5qcyBzbGlkZSBsYXlvdXQgc28gdGhhdCB5b3UgY2FuIHVzZVxuICAgIC8vIGN1c3RvbSBDU1MgbGF5b3V0XG4gICAgZGlzYWJsZUxheW91dDogZmFsc2UsXG5cbiAgICAvLyBWZXJ0aWNhbCBjZW50ZXJpbmcgb2Ygc2xpZGVzXG4gICAgY2VudGVyOiB0cnVlLFxuXG4gICAgLy8gRW5hYmxlcyB0b3VjaCBuYXZpZ2F0aW9uIG9uIGRldmljZXMgd2l0aCB0b3VjaCBpbnB1dFxuICAgIHRvdWNoOiB0cnVlLFxuXG4gICAgLy8gTG9vcCB0aGUgcHJlc2VudGF0aW9uXG4gICAgbG9vcDogZmFsc2UsXG5cbiAgICAvLyBDaGFuZ2UgdGhlIHByZXNlbnRhdGlvbiBkaXJlY3Rpb24gdG8gYmUgUlRMXG4gICAgcnRsOiBmYWxzZSxcblxuICAgIC8vIENoYW5nZXMgdGhlIGJlaGF2aW9yIG9mIG91ciBuYXZpZ2F0aW9uIGRpcmVjdGlvbnMuXG4gICAgLy9cbiAgICAvLyBcImRlZmF1bHRcIlxuICAgIC8vIExlZnQvcmlnaHQgYXJyb3cga2V5cyBzdGVwIGJldHdlZW4gaG9yaXpvbnRhbCBzbGlkZXMsIHVwL2Rvd25cbiAgICAvLyBhcnJvdyBrZXlzIHN0ZXAgYmV0d2VlbiB2ZXJ0aWNhbCBzbGlkZXMuIFNwYWNlIGtleSBzdGVwcyB0aHJvdWdoXG4gICAgLy8gYWxsIHNsaWRlcyAoYm90aCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCkuXG4gICAgLy9cbiAgICAvLyBcImxpbmVhclwiXG4gICAgLy8gUmVtb3ZlcyB0aGUgdXAvZG93biBhcnJvd3MuIExlZnQvcmlnaHQgYXJyb3dzIHN0ZXAgdGhyb3VnaCBhbGxcbiAgICAvLyBzbGlkZXMgKGJvdGggaG9yaXpvbnRhbCBhbmQgdmVydGljYWwpLlxuICAgIC8vXG4gICAgLy8gXCJncmlkXCJcbiAgICAvLyBXaGVuIHRoaXMgaXMgZW5hYmxlZCwgc3RlcHBpbmcgbGVmdC9yaWdodCBmcm9tIGEgdmVydGljYWwgc3RhY2tcbiAgICAvLyB0byBhbiBhZGphY2VudCB2ZXJ0aWNhbCBzdGFjayB3aWxsIGxhbmQgeW91IGF0IHRoZSBzYW1lIHZlcnRpY2FsXG4gICAgLy8gaW5kZXguXG4gICAgLy9cbiAgICAvLyBDb25zaWRlciBhIGRlY2sgd2l0aCBzaXggc2xpZGVzIG9yZGVyZWQgaW4gdHdvIHZlcnRpY2FsIHN0YWNrczpcbiAgICAvLyAxLjEgICAgMi4xXG4gICAgLy8gMS4yICAgIDIuMlxuICAgIC8vIDEuMyAgICAyLjNcbiAgICAvL1xuICAgIC8vIElmIHlvdSdyZSBvbiBzbGlkZSAxLjMgYW5kIG5hdmlnYXRlIHJpZ2h0LCB5b3Ugd2lsbCBub3JtYWxseSBtb3ZlXG4gICAgLy8gZnJvbSAxLjMgLT4gMi4xLiBJZiBcImdyaWRcIiBpcyB1c2VkLCB0aGUgc2FtZSBuYXZpZ2F0aW9uIHRha2VzIHlvdVxuICAgIC8vIGZyb20gMS4zIC0+IDIuMy5cbiAgICBuYXZpZ2F0aW9uTW9kZTogJ2RlZmF1bHQnLFxuXG4gICAgLy8gUmFuZG9taXplcyB0aGUgb3JkZXIgb2Ygc2xpZGVzIGVhY2ggdGltZSB0aGUgcHJlc2VudGF0aW9uIGxvYWRzXG4gICAgc2h1ZmZsZTogZmFsc2UsXG5cbiAgICAvLyBUdXJucyBmcmFnbWVudHMgb24gYW5kIG9mZiBnbG9iYWxseVxuICAgIGZyYWdtZW50czogdHJ1ZSxcblxuICAgIC8vIEZsYWdzIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgY3VycmVudCBmcmFnbWVudCBpbiB0aGUgVVJMLFxuICAgIC8vIHNvIHRoYXQgcmVsb2FkaW5nIGJyaW5ncyB5b3UgdG8gdGhlIHNhbWUgZnJhZ21lbnQgcG9zaXRpb25cbiAgICBmcmFnbWVudEluVVJMOiBmYWxzZSxcblxuICAgIC8vIEZsYWdzIGlmIHRoZSBwcmVzZW50YXRpb24gaXMgcnVubmluZyBpbiBhbiBlbWJlZGRlZCBtb2RlLFxuICAgIC8vIGkuZS4gY29udGFpbmVkIHdpdGhpbiBhIGxpbWl0ZWQgcG9ydGlvbiBvZiB0aGUgc2NyZWVuXG4gICAgZW1iZWRkZWQ6IGZhbHNlLFxuXG4gICAgLy8gRmxhZ3MgaWYgd2Ugc2hvdWxkIHNob3cgYSBoZWxwIG92ZXJsYXkgd2hlbiB0aGUgcXVlc3Rpb24tbWFya1xuICAgIC8vIGtleSBpcyBwcmVzc2VkXG4gICAgaGVscDogdHJ1ZSxcblxuICAgIC8vIEZsYWdzIGlmIGl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBwYXVzZSB0aGUgcHJlc2VudGF0aW9uIChibGFja291dClcbiAgICBwYXVzZTogdHJ1ZSxcblxuICAgIC8vIEZsYWdzIGlmIHNwZWFrZXIgbm90ZXMgc2hvdWxkIGJlIHZpc2libGUgdG8gYWxsIHZpZXdlcnNcbiAgICBzaG93Tm90ZXM6IGZhbHNlLFxuXG4gICAgLy8gR2xvYmFsIG92ZXJyaWRlIGZvciBhdXRvbGF5aW5nIGVtYmVkZGVkIG1lZGlhICh2aWRlby9hdWRpby9pZnJhbWUpXG4gICAgLy8gLSBudWxsOiAgIE1lZGlhIHdpbGwgb25seSBhdXRvcGxheSBpZiBkYXRhLWF1dG9wbGF5IGlzIHByZXNlbnRcbiAgICAvLyAtIHRydWU6ICAgQWxsIG1lZGlhIHdpbGwgYXV0b3BsYXksIHJlZ2FyZGxlc3Mgb2YgaW5kaXZpZHVhbCBzZXR0aW5nXG4gICAgLy8gLSBmYWxzZTogIE5vIG1lZGlhIHdpbGwgYXV0b3BsYXksIHJlZ2FyZGxlc3Mgb2YgaW5kaXZpZHVhbCBzZXR0aW5nXG4gICAgYXV0b1BsYXlNZWRpYTogbnVsbCxcblxuICAgIC8vIEdsb2JhbCBvdmVycmlkZSBmb3IgcHJlbG9hZGluZyBsYXp5LWxvYWRlZCBpZnJhbWVzXG4gICAgLy8gLSBudWxsOiAgIElmcmFtZXMgd2l0aCBkYXRhLXNyYyBBTkQgZGF0YS1wcmVsb2FkIHdpbGwgYmUgbG9hZGVkIHdoZW4gd2l0aGluXG4gICAgLy8gICAgICAgICAgIHRoZSB2aWV3RGlzdGFuY2UsIGlmcmFtZXMgd2l0aCBvbmx5IGRhdGEtc3JjIHdpbGwgYmUgbG9hZGVkIHdoZW4gdmlzaWJsZVxuICAgIC8vIC0gdHJ1ZTogICBBbGwgaWZyYW1lcyB3aXRoIGRhdGEtc3JjIHdpbGwgYmUgbG9hZGVkIHdoZW4gd2l0aGluIHRoZSB2aWV3RGlzdGFuY2VcbiAgICAvLyAtIGZhbHNlOiAgQWxsIGlmcmFtZXMgd2l0aCBkYXRhLXNyYyB3aWxsIGJlIGxvYWRlZCBvbmx5IHdoZW4gdmlzaWJsZVxuICAgIHByZWxvYWRJZnJhbWVzOiBudWxsLFxuXG4gICAgLy8gQ29udHJvbHMgYXV0b21hdGljIHByb2dyZXNzaW9uIHRvIHRoZSBuZXh0IHNsaWRlXG4gICAgLy8gLSAwOiAgICAgIEF1dG8tc2xpZGluZyBvbmx5IGhhcHBlbnMgaWYgdGhlIGRhdGEtYXV0b3NsaWRlIEhUTUwgYXR0cmlidXRlXG4gICAgLy8gICAgICAgICAgIGlzIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgc2xpZGUgb3IgZnJhZ21lbnRcbiAgICAvLyAtIDErOiAgICAgQWxsIHNsaWRlcyB3aWxsIHByb2dyZXNzIGF1dG9tYXRpY2FsbHkgYXQgdGhlIGdpdmVuIGludGVydmFsXG4gICAgLy8gLSBmYWxzZTogIE5vIGF1dG8tc2xpZGluZywgZXZlbiBpZiBkYXRhLWF1dG9zbGlkZSBpcyBwcmVzZW50XG4gICAgYXV0b1NsaWRlOiAwLFxuXG4gICAgLy8gU3RvcCBhdXRvLXNsaWRpbmcgYWZ0ZXIgdXNlciBpbnB1dFxuICAgIGF1dG9TbGlkZVN0b3BwYWJsZTogdHJ1ZSxcblxuICAgIC8vIFVzZSB0aGlzIG1ldGhvZCBmb3IgbmF2aWdhdGlvbiB3aGVuIGF1dG8tc2xpZGluZyAoZGVmYXVsdHMgdG8gbmF2aWdhdGVOZXh0KVxuICAgIGF1dG9TbGlkZU1ldGhvZDogbnVsbCxcblxuICAgIC8vIFNwZWNpZnkgdGhlIGF2ZXJhZ2UgdGltZSBpbiBzZWNvbmRzIHRoYXQgeW91IHRoaW5rIHlvdSB3aWxsIHNwZW5kXG4gICAgLy8gcHJlc2VudGluZyBlYWNoIHNsaWRlLiBUaGlzIGlzIHVzZWQgdG8gc2hvdyBhIHBhY2luZyB0aW1lciBpbiB0aGVcbiAgICAvLyBzcGVha2VyIHZpZXdcbiAgICBkZWZhdWx0VGltaW5nOiBudWxsLFxuXG4gICAgLy8gRW5hYmxlIHNsaWRlIG5hdmlnYXRpb24gdmlhIG1vdXNlIHdoZWVsXG4gICAgbW91c2VXaGVlbDogZmFsc2UsXG5cbiAgICAvLyBBcHBseSBhIDNEIHJvbGwgdG8gbGlua3Mgb24gaG92ZXJcbiAgICByb2xsaW5nTGlua3M6IGZhbHNlLFxuXG4gICAgLy8gSGlkZXMgdGhlIGFkZHJlc3MgYmFyIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgaGlkZUFkZHJlc3NCYXI6IHRydWUsXG5cbiAgICAvLyBPcGVucyBsaW5rcyBpbiBhbiBpZnJhbWUgcHJldmlldyBvdmVybGF5XG4gICAgLy8gQWRkIGBkYXRhLXByZXZpZXctbGlua2AgYW5kIGBkYXRhLXByZXZpZXctbGluaz1cImZhbHNlXCJgIHRvIGN1c3RvbWlzZSBlYWNoIGxpbmtcbiAgICAvLyBpbmRpdmlkdWFsbHlcbiAgICBwcmV2aWV3TGlua3M6IGZhbHNlLFxuXG4gICAgLy8gRXhwb3NlcyB0aGUgcmV2ZWFsLmpzIEFQSSB0aHJvdWdoIHdpbmRvdy5wb3N0TWVzc2FnZVxuICAgIHBvc3RNZXNzYWdlOiB0cnVlLFxuXG4gICAgLy8gRGlzcGF0Y2hlcyBhbGwgcmV2ZWFsLmpzIGV2ZW50cyB0byB0aGUgcGFyZW50IHdpbmRvdyB0aHJvdWdoIHBvc3RNZXNzYWdlXG4gICAgcG9zdE1lc3NhZ2VFdmVudHM6IGZhbHNlLFxuXG4gICAgLy8gRm9jdXNlcyBib2R5IHdoZW4gcGFnZSBjaGFuZ2VzIHZpc2liaWxpdHkgdG8gZW5zdXJlIGtleWJvYXJkIHNob3J0Y3V0cyB3b3JrXG4gICAgZm9jdXNCb2R5T25QYWdlVmlzaWJpbGl0eUNoYW5nZTogdHJ1ZSxcblxuICAgIC8vIFRyYW5zaXRpb24gc3R5bGVcbiAgICB0cmFuc2l0aW9uOiAnc2xpZGUnLCAvLyBub25lL2ZhZGUvc2xpZGUvY29udmV4L2NvbmNhdmUvem9vbVxuXG4gICAgLy8gVHJhbnNpdGlvbiBzcGVlZFxuICAgIHRyYW5zaXRpb25TcGVlZDogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0L2Zhc3Qvc2xvd1xuXG4gICAgLy8gVHJhbnNpdGlvbiBzdHlsZSBmb3IgZnVsbCBwYWdlIHNsaWRlIGJhY2tncm91bmRzXG4gICAgYmFja2dyb3VuZFRyYW5zaXRpb246ICdmYWRlJywgLy8gbm9uZS9mYWRlL3NsaWRlL2NvbnZleC9jb25jYXZlL3pvb21cblxuICAgIC8vIFBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2VcbiAgICBwYXJhbGxheEJhY2tncm91bmRJbWFnZTogJycsIC8vIENTUyBzeW50YXgsIGUuZy4gXCJhLmpwZ1wiXG5cbiAgICAvLyBQYXJhbGxheCBiYWNrZ3JvdW5kIHNpemVcbiAgICBwYXJhbGxheEJhY2tncm91bmRTaXplOiAnJywgLy8gQ1NTIHN5bnRheCwgZS5nLiBcIjMwMDBweCAyMDAwcHhcIlxuXG4gICAgLy8gUGFyYWxsYXggYmFja2dyb3VuZCByZXBlYXRcbiAgICBwYXJhbGxheEJhY2tncm91bmRSZXBlYXQ6ICcnLCAvLyByZXBlYXQvcmVwZWF0LXgvcmVwZWF0LXkvbm8tcmVwZWF0L2luaXRpYWwvaW5oZXJpdFxuXG4gICAgLy8gUGFyYWxsYXggYmFja2dyb3VuZCBwb3NpdGlvblxuICAgIHBhcmFsbGF4QmFja2dyb3VuZFBvc2l0aW9uOiAnJywgLy8gQ1NTIHN5bnRheCwgZS5nLiBcInRvcCBsZWZ0XCJcblxuICAgIC8vIEFtb3VudCBvZiBwaXhlbHMgdG8gbW92ZSB0aGUgcGFyYWxsYXggYmFja2dyb3VuZCBwZXIgc2xpZGUgc3RlcFxuICAgIHBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWw6IG51bGwsXG4gICAgcGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWw6IG51bGwsXG5cbiAgICAvLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcGFnZXMgYSBzaW5nbGUgc2xpZGUgY2FuIGV4cGFuZCBvbnRvIHdoZW4gcHJpbnRpbmdcbiAgICAvLyB0byBQREYsIHVubGltaXRlZCBieSBkZWZhdWx0XG4gICAgcGRmTWF4UGFnZXNQZXJTbGlkZTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXG4gICAgLy8gUHJpbnRzIGVhY2ggZnJhZ21lbnQgb24gYSBzZXBhcmF0ZSBzbGlkZVxuICAgIHBkZlNlcGFyYXRlRnJhZ21lbnRzOiB0cnVlLFxuXG4gICAgLy8gT2Zmc2V0IHVzZWQgdG8gcmVkdWNlIHRoZSBoZWlnaHQgb2YgY29udGVudCB3aXRoaW4gZXhwb3J0ZWQgUERGIHBhZ2VzLlxuICAgIC8vIFRoaXMgZXhpc3RzIHRvIGFjY291bnQgZm9yIGVudmlyb25tZW50IGRpZmZlcmVuY2VzIGJhc2VkIG9uIGhvdyB5b3VcbiAgICAvLyBwcmludCB0byBQREYuIENMSSBwcmludGluZyBvcHRpb25zLCBsaWtlIHBoYW50b21qcyBhbmQgd2twZGYsIGNhbiBlbmRcbiAgICAvLyBvbiBwcmVjaXNlbHkgdGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgd2hlcmVhcyBpbi1icm93c2VyXG4gICAgLy8gcHJpbnRpbmcgaGFzIHRvIGVuZCBvbmUgcGl4ZWwgYmVmb3JlLlxuICAgIHBkZlBhZ2VIZWlnaHRPZmZzZXQ6IC0xLFxuXG4gICAgLy8gTnVtYmVyIG9mIHNsaWRlcyBhd2F5IGZyb20gdGhlIGN1cnJlbnQgdGhhdCBhcmUgdmlzaWJsZVxuICAgIHZpZXdEaXN0YW5jZTogMyxcblxuICAgIC8vIE51bWJlciBvZiBzbGlkZXMgYXdheSBmcm9tIHRoZSBjdXJyZW50IHRoYXQgYXJlIHZpc2libGUgb24gbW9iaWxlXG4gICAgLy8gZGV2aWNlcy4gSXQgaXMgYWR2aXNhYmxlIHRvIHNldCB0aGlzIHRvIGEgbG93ZXIgbnVtYmVyIHRoYW5cbiAgICAvLyB2aWV3RGlzdGFuY2UgaW4gb3JkZXIgdG8gc2F2ZSByZXNvdXJjZXMuXG4gICAgbW9iaWxlVmlld0Rpc3RhbmNlOiAyLFxuXG4gICAgLy8gVGhlIGRpc3BsYXkgbW9kZSB0aGF0IHdpbGwgYmUgdXNlZCB0byBzaG93IHNsaWRlc1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG5cbiAgICAvLyBIaWRlIGN1cnNvciBpZiBpbmFjdGl2ZVxuICAgIGhpZGVJbmFjdGl2ZUN1cnNvcjogdHJ1ZSxcblxuICAgIC8vIFRpbWUgYmVmb3JlIHRoZSBjdXJzb3IgaXMgaGlkZGVuIChpbiBtcylcbiAgICBoaWRlQ3Vyc29yVGltZTogNTAwMCxcblxuICAgIC8vIFNjcmlwdCBkZXBlbmRlbmNpZXMgdG8gbG9hZFxuICAgIGRlcGVuZGVuY2llczogW11cblxuICB9LFxuXG4gIC8vIEZsYWdzIGlmIFJldmVhbC5pbml0aWFsaXplKCkgaGFzIGJlZW4gY2FsbGVkXG4gIGluaXRpYWxpemVkID0gZmFsc2UsXG5cbiAgLy8gRmxhZ3MgaWYgcmV2ZWFsLmpzIGlzIGxvYWRlZCAoaGFzIGRpc3BhdGNoZWQgdGhlICdyZWFkeScgZXZlbnQpXG4gIGxvYWRlZCA9IGZhbHNlLFxuXG4gIC8vIEZsYWdzIGlmIHRoZSBvdmVydmlldyBtb2RlIGlzIGN1cnJlbnRseSBhY3RpdmVcbiAgb3ZlcnZpZXcgPSBmYWxzZSxcblxuICAvLyBIb2xkcyB0aGUgZGltZW5zaW9ucyBvZiBvdXIgb3ZlcnZpZXcgc2xpZGVzLCBpbmNsdWRpbmcgbWFyZ2luc1xuICBvdmVydmlld1NsaWRlV2lkdGggPSBudWxsLFxuICBvdmVydmlld1NsaWRlSGVpZ2h0ID0gbnVsbCxcblxuICAvLyBUaGUgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgc2xpZGVcbiAgaW5kZXhoLFxuICBpbmRleHYsXG5cbiAgLy8gVGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IHNsaWRlIEhUTUwgZWxlbWVudHNcbiAgcHJldmlvdXNTbGlkZSxcbiAgY3VycmVudFNsaWRlLFxuXG4gIHByZXZpb3VzQmFja2dyb3VuZCxcblxuICAvLyBSZW1lbWJlciB3aGljaCBkaXJlY3Rpb25zIHRoYXQgdGhlIHVzZXIgaGFzIG5hdmlnYXRlZCB0b3dhcmRzXG4gIGhhc05hdmlnYXRlZFJpZ2h0ID0gZmFsc2UsXG4gIGhhc05hdmlnYXRlZERvd24gPSBmYWxzZSxcblxuICAvLyBTbGlkZXMgbWF5IGhvbGQgYSBkYXRhLXN0YXRlIGF0dHJpYnV0ZSB3aGljaCB3ZSBwaWNrIHVwIGFuZCBhcHBseVxuICAvLyBhcyBhIGNsYXNzIHRvIHRoZSBib2R5LiBUaGlzIGxpc3QgY29udGFpbnMgdGhlIGNvbWJpbmVkIHN0YXRlIG9mXG4gIC8vIGFsbCBjdXJyZW50IHNsaWRlcy5cbiAgc3RhdGUgPSBbXSxcblxuICAvLyBUaGUgY3VycmVudCBzY2FsZSBvZiB0aGUgcHJlc2VudGF0aW9uIChzZWUgd2lkdGgvaGVpZ2h0IGNvbmZpZylcbiAgc2NhbGUgPSAxLFxuXG4gIC8vIENTUyB0cmFuc2Zvcm0gdGhhdCBpcyBjdXJyZW50bHkgYXBwbGllZCB0byB0aGUgc2xpZGVzIGNvbnRhaW5lcixcbiAgLy8gc3BsaXQgaW50byB0d28gZ3JvdXBzXG4gIHNsaWRlc1RyYW5zZm9ybSA9IHsgbGF5b3V0OiAnJywgb3ZlcnZpZXc6ICcnIH0sXG5cbiAgLy8gQ2FjaGVkIHJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzXG4gIGRvbSA9IHt9LFxuXG4gIC8vIEEgbGlzdCBvZiByZWdpc3RlcmVkIHJldmVhbC5qcyBwbHVnaW5zXG4gIHBsdWdpbnMgPSB7fSxcblxuICAvLyBMaXN0IG9mIGFzeW5jaHJvbm91c2x5IGxvYWRlZCByZXZlYWwuanMgZGVwZW5kZW5jaWVzXG4gIGFzeW5jRGVwZW5kZW5jaWVzID0gW10sXG5cbiAgLy8gRmVhdHVyZXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLCBzZWUgI2NoZWNrQ2FwYWJpbGl0aWVzKClcbiAgZmVhdHVyZXMgPSB7fSxcblxuICAvLyBDbGllbnQgaXMgYSBtb2JpbGUgZGV2aWNlLCBzZWUgI2NoZWNrQ2FwYWJpbGl0aWVzKClcbiAgaXNNb2JpbGVEZXZpY2UsXG5cbiAgLy8gQ2xpZW50IGlzIGEgZGVza3RvcCBDaHJvbWUsIHNlZSAjY2hlY2tDYXBhYmlsaXRpZXMoKVxuICBpc0Nocm9tZSxcblxuICAvLyBUaHJvdHRsZXMgbW91c2Ugd2hlZWwgbmF2aWdhdGlvblxuICBsYXN0TW91c2VXaGVlbFN0ZXAgPSAwLFxuXG4gIC8vIERlbGF5cyB1cGRhdGVzIHRvIHRoZSBVUkwgZHVlIHRvIGEgQ2hyb21lIHRodW1ibmFpbGVyIGJ1Z1xuICB3cml0ZVVSTFRpbWVvdXQgPSAwLFxuXG4gIC8vIElzIHRoZSBtb3VzZSBwb2ludGVyIGN1cnJlbnRseSBoaWRkZW4gZnJvbSB2aWV3XG4gIGN1cnNvckhpZGRlbiA9IGZhbHNlLFxuXG4gIC8vIFRpbWVvdXQgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgY3Vyc29yIGlzIGluYWN0aXZlXG4gIGN1cnNvckluYWN0aXZlVGltZW91dCA9IDAsXG5cbiAgLy8gRmxhZ3MgaWYgdGhlIGludGVyYWN0aW9uIGV2ZW50IGxpc3RlbmVycyBhcmUgYm91bmRcbiAgZXZlbnRzQXJlQm91bmQgPSBmYWxzZSxcblxuICAvLyBUaGUgY3VycmVudCBhdXRvLXNsaWRlIGR1cmF0aW9uXG4gIGF1dG9TbGlkZSA9IDAsXG5cbiAgLy8gQXV0byBzbGlkZSBwcm9wZXJ0aWVzXG4gIGF1dG9TbGlkZVBsYXllcixcbiAgYXV0b1NsaWRlVGltZW91dCA9IDAsXG4gIGF1dG9TbGlkZVN0YXJ0VGltZSA9IC0xLFxuICBhdXRvU2xpZGVQYXVzZWQgPSBmYWxzZSxcblxuICAvLyBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudGx5IG9uZ29pbmcgdG91Y2ggaW5wdXRcbiAgdG91Y2ggPSB7XG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBzdGFydENvdW50OiAwLFxuICAgIGNhcHR1cmVkOiBmYWxzZSxcbiAgICB0aHJlc2hvbGQ6IDQwXG4gIH0sXG5cbiAgLy8gQSBrZXk6dmFsdWUgbWFwIG9mIHNob3J0Y3V0IGtleWJvYXJkIGtleXMgYW5kIGRlc2NyaXB0aW9ucyBvZlxuICAvLyB0aGUgYWN0aW9ucyB0aGV5IHRyaWdnZXIsIGdlbmVyYXRlZCBpbiAjY29uZmlndXJlKClcbiAga2V5Ym9hcmRTaG9ydGN1dHMgPSB7fSxcblxuICAvLyBIb2xkcyBjdXN0b20ga2V5IGNvZGUgbWFwcGluZ3NcbiAgcmVnaXN0ZXJlZEtleUJpbmRpbmdzID0ge307XG5cbi8qKlxuICogU3RhcnRzIHVwIHRoZSBwcmVzZW50YXRpb24gaWYgdGhlIGNsaWVudCBpcyBjYXBhYmxlLlxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplKCBvcHRpb25zICkge1xuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGluaXRpYWxpemUgb25jZVxuICBpZiggaW5pdGlhbGl6ZWQgPT09IHRydWUgKSByZXR1cm47XG5cbiAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIGNoZWNrQ2FwYWJpbGl0aWVzKCk7XG5cbiAgaWYoICFmZWF0dXJlcy50cmFuc2Zvcm1zMmQgJiYgIWZlYXR1cmVzLnRyYW5zZm9ybXMzZCApIHtcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ25vLXRyYW5zZm9ybXMnICk7XG5cbiAgICAvLyBTaW5jZSBKUyB3b24ndCBiZSBydW5uaW5nIGFueSBmdXJ0aGVyLCB3ZSBsb2FkIGFsbCBsYXp5XG4gICAgLy8gbG9hZGluZyBlbGVtZW50cyB1cGZyb250XG4gICAgdmFyIGltYWdlcyA9IHRvQXJyYXkoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaW1nJyApICksXG4gICAgICBpZnJhbWVzID0gdG9BcnJheSggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdpZnJhbWUnICkgKTtcblxuICAgIHZhciBsYXp5TG9hZGFibGUgPSBpbWFnZXMuY29uY2F0KCBpZnJhbWVzICk7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gbGF6eUxvYWRhYmxlLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBsYXp5TG9hZGFibGVbaV07XG4gICAgICBpZiggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCAnZGF0YS1zcmMnICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNvcmUgZmVhdHVyZXMgd2Ugd29uJ3QgYmVcbiAgICAvLyB1c2luZyBKYXZhU2NyaXB0IHRvIGNvbnRyb2wgdGhlIHByZXNlbnRhdGlvblxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENhY2hlIHJlZmVyZW5jZXMgdG8ga2V5IERPTSBlbGVtZW50c1xuICBkb20ud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsJyApO1xuICBkb20uc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwgLnNsaWRlcycgKTtcblxuICAvLyBGb3JjZSBhIGxheW91dCB3aGVuIHRoZSB3aG9sZSBwYWdlLCBpbmNsIGZvbnRzLCBoYXMgbG9hZGVkXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGxheW91dCwgZmFsc2UgKTtcblxuICB2YXIgcXVlcnkgPSBSZXZlYWwuZ2V0UXVlcnlIYXNoKCk7XG5cbiAgLy8gRG8gbm90IGFjY2VwdCBuZXcgZGVwZW5kZW5jaWVzIHZpYSBxdWVyeSBjb25maWcgdG8gYXZvaWRcbiAgLy8gdGhlIHBvdGVudGlhbCBvZiBtYWxpY2lvdXMgc2NyaXB0IGluamVjdGlvblxuICBpZiggdHlwZW9mIHF1ZXJ5WydkZXBlbmRlbmNpZXMnXSAhPT0gJ3VuZGVmaW5lZCcgKSBkZWxldGUgcXVlcnlbJ2RlcGVuZGVuY2llcyddO1xuXG4gIC8vIENvcHkgb3B0aW9ucyBvdmVyIHRvIG91ciBjb25maWcgb2JqZWN0XG4gIGV4dGVuZCggY29uZmlnLCBvcHRpb25zICk7XG4gIGV4dGVuZCggY29uZmlnLCBxdWVyeSApO1xuXG4gIC8vIEhpZGUgdGhlIGFkZHJlc3MgYmFyIGluIG1vYmlsZSBicm93c2Vyc1xuICBoaWRlQWRkcmVzc0JhcigpO1xuXG4gIC8vIExvYWRzIGRlcGVuZGVuY2llcyBhbmQgY29udGludWVzIHRvICNzdGFydCgpIG9uY2UgZG9uZVxuICBsb2FkKCk7XG5cbn1cblxuLyoqXG4gKiBJbnNwZWN0IHRoZSBjbGllbnQgdG8gc2VlIHdoYXQgaXQncyBjYXBhYmxlIG9mLCB0aGlzXG4gKiBzaG91bGQgb25seSBoYXBwZW5zIG9uY2UgcGVyIHJ1bnRpbWUuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ2FwYWJpbGl0aWVzKCkge1xuXG4gIGlzTW9iaWxlRGV2aWNlID0gLyhpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWQpL2dpLnRlc3QoIFVBICkgfHxcbiAgICAoIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxICk7IC8vIGlQYWRPU1xuICBpc0Nocm9tZSA9IC9jaHJvbWUvaS50ZXN0KCBVQSApICYmICEvZWRnZS9pLnRlc3QoIFVBICk7XG5cbiAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuICBmZWF0dXJlcy50cmFuc2Zvcm1zM2QgPSAnV2Via2l0UGVyc3BlY3RpdmUnIGluIHRlc3RFbGVtZW50LnN0eWxlIHx8XG4gICAgJ01velBlcnNwZWN0aXZlJyBpbiB0ZXN0RWxlbWVudC5zdHlsZSB8fFxuICAgICdtc1BlcnNwZWN0aXZlJyBpbiB0ZXN0RWxlbWVudC5zdHlsZSB8fFxuICAgICdPUGVyc3BlY3RpdmUnIGluIHRlc3RFbGVtZW50LnN0eWxlIHx8XG4gICAgJ3BlcnNwZWN0aXZlJyBpbiB0ZXN0RWxlbWVudC5zdHlsZTtcblxuICBmZWF0dXJlcy50cmFuc2Zvcm1zMmQgPSAnV2Via2l0VHJhbnNmb3JtJyBpbiB0ZXN0RWxlbWVudC5zdHlsZSB8fFxuICAgICdNb3pUcmFuc2Zvcm0nIGluIHRlc3RFbGVtZW50LnN0eWxlIHx8XG4gICAgJ21zVHJhbnNmb3JtJyBpbiB0ZXN0RWxlbWVudC5zdHlsZSB8fFxuICAgICdPVHJhbnNmb3JtJyBpbiB0ZXN0RWxlbWVudC5zdHlsZSB8fFxuICAgICd0cmFuc2Zvcm0nIGluIHRlc3RFbGVtZW50LnN0eWxlO1xuXG4gIGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZU1ldGhvZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICBmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0eXBlb2YgZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lTWV0aG9kID09PSAnZnVuY3Rpb24nO1xuXG4gIGZlYXR1cmVzLmNhbnZhcyA9ICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKS5nZXRDb250ZXh0O1xuXG4gIC8vIFRyYW5zaXRpb25zIGluIHRoZSBvdmVydmlldyBhcmUgZGlzYWJsZWQgaW4gZGVza3RvcCBhbmRcbiAgLy8gU2FmYXJpIGR1ZSB0byBsYWdcbiAgZmVhdHVyZXMub3ZlcnZpZXdUcmFuc2l0aW9ucyA9ICEvVmVyc2lvblxcL1tcXGRcXC5dKy4qU2FmYXJpLy50ZXN0KCBVQSApO1xuXG4gIC8vIEZsYWdzIGlmIHdlIHNob3VsZCB1c2Ugem9vbSBpbnN0ZWFkIG9mIHRyYW5zZm9ybSB0byBzY2FsZVxuICAvLyB1cCBzbGlkZXMuIFpvb20gcHJvZHVjZXMgY3Jpc3BlciByZXN1bHRzIGJ1dCBoYXMgYSBsb3Qgb2ZcbiAgLy8geGJyb3dzZXIgcXVpcmtzIHNvIHdlIG9ubHkgdXNlIGl0IGluIHdoaXRlbHNpdGVkIGJyb3dzZXJzLlxuICBmZWF0dXJlcy56b29tID0gJ3pvb20nIGluIHRlc3RFbGVtZW50LnN0eWxlICYmICFpc01vYmlsZURldmljZSAmJlxuICAgICggaXNDaHJvbWUgfHwgL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdCggVUEgKSApO1xuXG59XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlcGVuZGVuY2llcyBvZiByZXZlYWwuanMuIERlcGVuZGVuY2llcyBhcmVcbiAqIGRlZmluZWQgdmlhIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbiAnZGVwZW5kZW5jaWVzJ1xuICogYW5kIHdpbGwgYmUgbG9hZGVkIHByaW9yIHRvIHN0YXJ0aW5nL2JpbmRpbmcgcmV2ZWFsLmpzLlxuICogU29tZSBkZXBlbmRlbmNpZXMgbWF5IGhhdmUgYW4gJ2FzeW5jJyBmbGFnLCBpZiBzbyB0aGV5XG4gKiB3aWxsIGxvYWQgYWZ0ZXIgcmV2ZWFsLmpzIGhhcyBiZWVuIHN0YXJ0ZWQgdXAuXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cbiAgdmFyIHNjcmlwdHMgPSBbXSxcbiAgICBzY3JpcHRzVG9Mb2FkID0gMDtcblxuICBjb25maWcuZGVwZW5kZW5jaWVzLmZvckVhY2goIGZ1bmN0aW9uKCBzICkge1xuICAgIC8vIExvYWQgaWYgdGhlcmUncyBubyBjb25kaXRpb24gb3IgdGhlIGNvbmRpdGlvbiBpcyB0cnV0aHlcbiAgICBpZiggIXMuY29uZGl0aW9uIHx8IHMuY29uZGl0aW9uKCkgKSB7XG4gICAgICBpZiggcy5hc3luYyApIHtcbiAgICAgICAgYXN5bmNEZXBlbmRlbmNpZXMucHVzaCggcyApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjcmlwdHMucHVzaCggcyApO1xuICAgICAgfVxuICAgIH1cbiAgfSApO1xuXG4gIGlmKCBzY3JpcHRzLmxlbmd0aCApIHtcbiAgICBzY3JpcHRzVG9Mb2FkID0gc2NyaXB0cy5sZW5ndGg7XG5cbiAgICAvLyBMb2FkIHN5bmNocm9ub3VzIHNjcmlwdHNcbiAgICBzY3JpcHRzLmZvckVhY2goIGZ1bmN0aW9uKCBzICkge1xuICAgICAgbG9hZFNjcmlwdCggcy5zcmMsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmKCB0eXBlb2Ygcy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHMuY2FsbGJhY2soKTtcblxuICAgICAgICBpZiggLS1zY3JpcHRzVG9Mb2FkID09PSAwICkge1xuICAgICAgICAgIGluaXRQbHVnaW5zKCk7XG4gICAgICAgIH1cblxuICAgICAgfSApO1xuICAgIH0gKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpbml0UGx1Z2lucygpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBvdXIgcGx1Z2lucyBhbmQgd2FpdHMgZm9yIHRoZW0gdG8gYmUgcmVhZHlcbiAqIGJlZm9yZSBwcm9jZWVkaW5nLlxuICovXG5mdW5jdGlvbiBpbml0UGx1Z2lucygpIHtcblxuICB2YXIgcGx1Z2luc1RvSW5pdGlhbGl6ZSA9IE9iamVjdC5rZXlzKCBwbHVnaW5zICkubGVuZ3RoO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwbHVnaW5zLCBza2lwIHRoaXMgc3RlcFxuICBpZiggcGx1Z2luc1RvSW5pdGlhbGl6ZSA9PT0gMCApIHtcbiAgICBsb2FkQXN5bmNEZXBlbmRlbmNpZXMoKTtcbiAgfVxuICAvLyAuLi4gb3RoZXJ3aXNlIGluaXRpYWxpemUgcGx1Z2luc1xuICBlbHNlIHtcblxuICAgIHZhciBhZnRlclBsdWdJbml0aWFsaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYoIC0tcGx1Z2luc1RvSW5pdGlhbGl6ZSA9PT0gMCApIHtcbiAgICAgICAgbG9hZEFzeW5jRGVwZW5kZW5jaWVzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciggdmFyIGkgaW4gcGx1Z2lucyApIHtcblxuICAgICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbaV07XG5cbiAgICAgIC8vIElmIHRoZSBwbHVnaW4gaGFzIGFuICdpbml0JyBtZXRob2QsIGludm9rZSBpdFxuICAgICAgaWYoIHR5cGVvZiBwbHVnaW4uaW5pdCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcGx1Z2luLmluaXQoKTtcblxuICAgICAgICAvLyBJZiB0aGUgcGx1Z2luIHJldHVybmVkIGEgUHJvbWlzZSwgd2FpdCBmb3IgaXRcbiAgICAgICAgaWYoIGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjay50aGVuID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgIGNhbGxiYWNrLnRoZW4oIGFmdGVyUGx1Z0luaXRpYWxpemVkICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWZ0ZXJQbHVnSW5pdGlhbGl6ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFmdGVyUGx1Z0luaXRpYWxpemVkKCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogTG9hZHMgYWxsIGFzeW5jIHJldmVhbC5qcyBkZXBlbmRlbmNpZXMuXG4gKi9cbmZ1bmN0aW9uIGxvYWRBc3luY0RlcGVuZGVuY2llcygpIHtcblxuICBpZiggYXN5bmNEZXBlbmRlbmNpZXMubGVuZ3RoICkge1xuICAgIGFzeW5jRGVwZW5kZW5jaWVzLmZvckVhY2goIGZ1bmN0aW9uKCBzICkge1xuICAgICAgbG9hZFNjcmlwdCggcy5zcmMsIHMuY2FsbGJhY2sgKTtcbiAgICB9ICk7XG4gIH1cblxuICBzdGFydCgpO1xuXG59XG5cbi8qKlxuICogTG9hZHMgYSBKYXZhU2NyaXB0IGZpbGUgZnJvbSB0aGUgZ2l2ZW4gVVJMIGFuZCBleGVjdXRlcyBpdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIEFkZHJlc3Mgb2YgdGhlIC5qcyBmaWxlIHRvIGxvYWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIE1ldGhvZCB0byBpbnZva2Ugd2hlbiB0aGUgc2NyaXB0XG4gKiBoYXMgbG9hZGVkIGFuZCBleGVjdXRlZFxuICovXG5mdW5jdGlvbiBsb2FkU2NyaXB0KCB1cmwsIGNhbGxiYWNrICkge1xuXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICBzY3JpcHQuYXN5bmMgPSBmYWxzZTtcbiAgc2NyaXB0LmRlZmVyID0gZmFsc2U7XG4gIHNjcmlwdC5zcmMgPSB1cmw7XG5cbiAgaWYoIGNhbGxiYWNrICkge1xuXG4gICAgLy8gU3VjY2VzcyBjYWxsYmFja1xuICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgaWYoIGV2ZW50LnR5cGUgPT09IFwibG9hZFwiIHx8ICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KCBzY3JpcHQucmVhZHlTdGF0ZSApICkgKSB7XG5cbiAgICAgICAgLy8gS2lsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHQub25lcnJvciA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFcnJvciBjYWxsYmFja1xuICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oIGVyciApIHtcblxuICAgICAgLy8gS2lsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayggbmV3IEVycm9yKCAnRmFpbGVkIGxvYWRpbmcgc2NyaXB0OiAnICsgc2NyaXB0LnNyYyArICdcXG4nICsgZXJyKSApO1xuXG4gICAgfTtcblxuICB9XG5cbiAgLy8gQXBwZW5kIHRoZSBzY3JpcHQgYXQgdGhlIGVuZCBvZiA8aGVhZD5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaGVhZCcgKTtcbiAgaGVhZC5pbnNlcnRCZWZvcmUoIHNjcmlwdCwgaGVhZC5sYXN0Q2hpbGQgKTtcblxufVxuXG4vKipcbiAqIFN0YXJ0cyB1cCByZXZlYWwuanMgYnkgYmluZGluZyBpbnB1dCBldmVudHMgYW5kIG5hdmlnYXRpbmdcbiAqIHRvIHRoZSBjdXJyZW50IFVSTCBkZWVwbGluayBpZiB0aGVyZSBpcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gIGxvYWRlZCA9IHRydWU7XG5cbiAgLy8gTWFrZSBzdXJlIHdlJ3ZlIGdvdCBhbGwgdGhlIERPTSBlbGVtZW50cyB3ZSBuZWVkXG4gIHNldHVwRE9NKCk7XG5cbiAgLy8gTGlzdGVuIHRvIG1lc3NhZ2VzIHBvc3RlZCB0byB0aGlzIHdpbmRvd1xuICBzZXR1cFBvc3RNZXNzYWdlKCk7XG5cbiAgLy8gUHJldmVudCB0aGUgc2xpZGVzIGZyb20gYmVpbmcgc2Nyb2xsZWQgb3V0IG9mIHZpZXdcbiAgc2V0dXBTY3JvbGxQcmV2ZW50aW9uKCk7XG5cbiAgLy8gUmVzZXRzIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgc28gdGhhdCBvbmx5IHRoZSBmaXJzdCBpcyB2aXNpYmxlXG4gIHJlc2V0VmVydGljYWxTbGlkZXMoKTtcblxuICAvLyBVcGRhdGVzIHRoZSBwcmVzZW50YXRpb24gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiB2YWx1ZXNcbiAgY29uZmlndXJlKCk7XG5cbiAgLy8gUmVhZCB0aGUgaW5pdGlhbCBoYXNoXG4gIHJlYWRVUkwoKTtcblxuICAvLyBVcGRhdGUgYWxsIGJhY2tncm91bmRzXG4gIHVwZGF0ZUJhY2tncm91bmQoIHRydWUgKTtcblxuICAvLyBOb3RpZnkgbGlzdGVuZXJzIHRoYXQgdGhlIHByZXNlbnRhdGlvbiBpcyByZWFkeSBidXQgdXNlIGEgMW1zXG4gIC8vIHRpbWVvdXQgdG8gZW5zdXJlIGl0J3Mgbm90IGZpcmVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgI2luaXRpYWxpemUoKVxuICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAvLyBFbmFibGUgdHJhbnNpdGlvbnMgbm93IHRoYXQgd2UncmUgbG9hZGVkXG4gICAgZG9tLnNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKCAnbm8tdHJhbnNpdGlvbicgKTtcblxuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdyZWFkeScgKTtcblxuICAgIGRpc3BhdGNoRXZlbnQoICdyZWFkeScsIHtcbiAgICAgICdpbmRleGgnOiBpbmRleGgsXG4gICAgICAnaW5kZXh2JzogaW5kZXh2LFxuICAgICAgJ2N1cnJlbnRTbGlkZSc6IGN1cnJlbnRTbGlkZVxuICAgIH0gKTtcbiAgfSwgMSApO1xuXG4gIC8vIFNwZWNpYWwgc2V0dXAgYW5kIGNvbmZpZyBpcyByZXF1aXJlZCB3aGVuIHByaW50aW5nIHRvIFBERlxuICBpZiggaXNQcmludGluZ1BERigpICkge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAvLyBUaGUgZG9jdW1lbnQgbmVlZHMgdG8gaGF2ZSBsb2FkZWQgZm9yIHRoZSBQREYgbGF5b3V0XG4gICAgLy8gbWVhc3VyZW1lbnRzIHRvIGJlIGFjY3VyYXRlXG4gICAgaWYoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgKSB7XG4gICAgICBzZXR1cFBERigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHNldHVwUERGICk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBGaW5kcyBhbmQgc3RvcmVzIHJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzIHdoaWNoIGFyZVxuICogcmVxdWlyZWQgYnkgdGhlIHByZXNlbnRhdGlvbi4gSWYgYSByZXF1aXJlZCBlbGVtZW50IGlzXG4gKiBub3QgZm91bmQsIGl0IGlzIGNyZWF0ZWQuXG4gKi9cbmZ1bmN0aW9uIHNldHVwRE9NKCkge1xuXG4gIC8vIFByZXZlbnQgdHJhbnNpdGlvbnMgd2hpbGUgd2UncmUgbG9hZGluZ1xuICBkb20uc2xpZGVzLmNsYXNzTGlzdC5hZGQoICduby10cmFuc2l0aW9uJyApO1xuXG4gIGlmKCBpc01vYmlsZURldmljZSApIHtcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnbm8taG92ZXInICk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ25vLWhvdmVyJyApO1xuICB9XG5cbiAgaWYoIC9pcGhvbmUvZ2kudGVzdCggVUEgKSApIHtcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAndWEtaXBob25lJyApO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICd1YS1pcGhvbmUnICk7XG4gIH1cblxuICAvLyBCYWNrZ3JvdW5kIGVsZW1lbnRcbiAgZG9tLmJhY2tncm91bmQgPSBjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdiYWNrZ3JvdW5kcycsIG51bGwgKTtcblxuICAvLyBQcm9ncmVzcyBiYXJcbiAgZG9tLnByb2dyZXNzID0gY3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdkaXYnLCAncHJvZ3Jlc3MnLCAnPHNwYW4+PC9zcGFuPicgKTtcbiAgZG9tLnByb2dyZXNzYmFyID0gZG9tLnByb2dyZXNzLnF1ZXJ5U2VsZWN0b3IoICdzcGFuJyApO1xuXG4gIC8vIEFycm93IGNvbnRyb2xzXG4gIGRvbS5jb250cm9scyA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnYXNpZGUnLCAnY29udHJvbHMnLFxuICAgICc8YnV0dG9uIGNsYXNzPVwibmF2aWdhdGUtbGVmdFwiIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBzbGlkZVwiPjxkaXYgY2xhc3M9XCJjb250cm9scy1hcnJvd1wiPjwvZGl2PjwvYnV0dG9uPicgK1xuICAgICc8YnV0dG9uIGNsYXNzPVwibmF2aWdhdGUtcmlnaHRcIiBhcmlhLWxhYmVsPVwibmV4dCBzbGlkZVwiPjxkaXYgY2xhc3M9XCJjb250cm9scy1hcnJvd1wiPjwvZGl2PjwvYnV0dG9uPicgK1xuICAgICc8YnV0dG9uIGNsYXNzPVwibmF2aWdhdGUtdXBcIiBhcmlhLWxhYmVsPVwiYWJvdmUgc2xpZGVcIj48ZGl2IGNsYXNzPVwiY29udHJvbHMtYXJyb3dcIj48L2Rpdj48L2J1dHRvbj4nICtcbiAgICAnPGJ1dHRvbiBjbGFzcz1cIm5hdmlnYXRlLWRvd25cIiBhcmlhLWxhYmVsPVwiYmVsb3cgc2xpZGVcIj48ZGl2IGNsYXNzPVwiY29udHJvbHMtYXJyb3dcIj48L2Rpdj48L2J1dHRvbj4nICk7XG5cbiAgLy8gU2xpZGUgbnVtYmVyXG4gIGRvbS5zbGlkZU51bWJlciA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ3NsaWRlLW51bWJlcicsICcnICk7XG5cbiAgLy8gRWxlbWVudCBjb250YWluaW5nIG5vdGVzIHRoYXQgYXJlIHZpc2libGUgdG8gdGhlIGF1ZGllbmNlXG4gIGRvbS5zcGVha2VyTm90ZXMgPSBjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdzcGVha2VyLW5vdGVzJywgbnVsbCApO1xuICBkb20uc3BlYWtlck5vdGVzLnNldEF0dHJpYnV0ZSggJ2RhdGEtcHJldmVudC1zd2lwZScsICcnICk7XG4gIGRvbS5zcGVha2VyTm90ZXMuc2V0QXR0cmlidXRlKCAndGFiaW5kZXgnLCAnMCcgKTtcblxuICAvLyBPdmVybGF5IGdyYXBoaWMgd2hpY2ggaXMgZGlzcGxheWVkIGR1cmluZyB0aGUgcGF1c2VkIG1vZGVcbiAgZG9tLnBhdXNlT3ZlcmxheSA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ3BhdXNlLW92ZXJsYXknLCBjb25maWcuY29udHJvbHMgPyAnPGJ1dHRvbiBjbGFzcz1cInJlc3VtZS1idXR0b25cIj5SZXN1bWUgcHJlc2VudGF0aW9uPC9idXR0b24+JyA6IG51bGwgKTtcblxuICBkb20ud3JhcHBlci5zZXRBdHRyaWJ1dGUoICdyb2xlJywgJ2FwcGxpY2F0aW9uJyApO1xuXG4gIC8vIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgY29udHJvbHMgdGhyb3VnaG91dCB0aGUgcGFnZVxuICBkb20uY29udHJvbHNMZWZ0ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1sZWZ0JyApICk7XG4gIGRvbS5jb250cm9sc1JpZ2h0ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1yaWdodCcgKSApO1xuICBkb20uY29udHJvbHNVcCA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtdXAnICkgKTtcbiAgZG9tLmNvbnRyb2xzRG93biA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtZG93bicgKSApO1xuICBkb20uY29udHJvbHNQcmV2ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1wcmV2JyApICk7XG4gIGRvbS5jb250cm9sc05leHQgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLW5leHQnICkgKTtcblxuICAvLyBUaGUgcmlnaHQgYW5kIGRvd24gYXJyb3dzIGluIHRoZSBzdGFuZGFyZCByZXZlYWwuanMgY29udHJvbHNcbiAgZG9tLmNvbnRyb2xzUmlnaHRBcnJvdyA9IGRvbS5jb250cm9scy5xdWVyeVNlbGVjdG9yKCAnLm5hdmlnYXRlLXJpZ2h0JyApO1xuICBkb20uY29udHJvbHNEb3duQXJyb3cgPSBkb20uY29udHJvbHMucXVlcnlTZWxlY3RvciggJy5uYXZpZ2F0ZS1kb3duJyApO1xuXG4gIGRvbS5zdGF0dXNEaXYgPSBjcmVhdGVTdGF0dXNEaXYoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlkZGVuIGRpdiB3aXRoIHJvbGUgYXJpYS1saXZlIHRvIGFubm91bmNlIHRoZVxuICogY3VycmVudCBzbGlkZSBjb250ZW50LiBIaWRlIHRoZSBkaXYgb2ZmLXNjcmVlbiB0byBtYWtlIGl0XG4gKiBhdmFpbGFibGUgb25seSB0byBBc3Npc3RpdmUgVGVjaG5vbG9naWVzLlxuICpcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGF0dXNEaXYoKSB7XG5cbiAgdmFyIHN0YXR1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYXJpYS1zdGF0dXMtZGl2JyApO1xuICBpZiggIXN0YXR1c0RpdiApIHtcbiAgICBzdGF0dXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIHN0YXR1c0Rpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgc3RhdHVzRGl2LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgIHN0YXR1c0Rpdi5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgIHN0YXR1c0Rpdi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHN0YXR1c0Rpdi5zdHlsZS5jbGlwID0gJ3JlY3QoIDFweCwgMXB4LCAxcHgsIDFweCApJztcbiAgICBzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCAnaWQnLCAnYXJpYS1zdGF0dXMtZGl2JyApO1xuICAgIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCAncG9saXRlJyApO1xuICAgIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWF0b21pYycsJ3RydWUnICk7XG4gICAgZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIHN0YXR1c0RpdiApO1xuICB9XG4gIHJldHVybiBzdGF0dXNEaXY7XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGludG8gYSBzdHJpbmcgb2YgdGV4dFxuICogdGhhdCBjYW4gYmUgYW5ub3VuY2VkIHRvIGEgc2NyZWVuIHJlYWRlci4gSGlkZGVuXG4gKiBlbGVtZW50cyBhcmUgZXhjbHVkZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXR1c1RleHQoIG5vZGUgKSB7XG5cbiAgdmFyIHRleHQgPSAnJztcblxuICAvLyBUZXh0IG5vZGVcbiAgaWYoIG5vZGUubm9kZVR5cGUgPT09IDMgKSB7XG4gICAgdGV4dCArPSBub2RlLnRleHRDb250ZW50O1xuICB9XG4gIC8vIEVsZW1lbnQgbm9kZVxuICBlbHNlIGlmKCBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG4gICAgdmFyIGlzQXJpYUhpZGRlbiA9IG5vZGUuZ2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nICk7XG4gICAgdmFyIGlzRGlzcGxheUhpZGRlbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBub2RlIClbJ2Rpc3BsYXknXSA9PT0gJ25vbmUnO1xuICAgIGlmKCBpc0FyaWFIaWRkZW4gIT09ICd0cnVlJyAmJiAhaXNEaXNwbGF5SGlkZGVuICkge1xuXG4gICAgICB0b0FycmF5KCBub2RlLmNoaWxkTm9kZXMgKS5mb3JFYWNoKCBmdW5jdGlvbiggY2hpbGQgKSB7XG4gICAgICAgIHRleHQgKz0gZ2V0U3RhdHVzVGV4dCggY2hpbGQgKTtcbiAgICAgIH0gKTtcblxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG5cbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBwcmVzZW50YXRpb24gZm9yIHByaW50aW5nIHRvIGEgc3RhdGljXG4gKiBQREYuXG4gKi9cbmZ1bmN0aW9uIHNldHVwUERGKCkge1xuXG4gIHZhciBzbGlkZVNpemUgPSBnZXRDb21wdXRlZFNsaWRlU2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuXG4gIC8vIERpbWVuc2lvbnMgb2YgdGhlIFBERiBwYWdlc1xuICB2YXIgcGFnZVdpZHRoID0gTWF0aC5mbG9vciggc2xpZGVTaXplLndpZHRoICogKCAxICsgY29uZmlnLm1hcmdpbiApICksXG4gICAgcGFnZUhlaWdodCA9IE1hdGguZmxvb3IoIHNsaWRlU2l6ZS5oZWlnaHQgKiAoIDEgKyBjb25maWcubWFyZ2luICkgKTtcblxuICAvLyBEaW1lbnNpb25zIG9mIHNsaWRlcyB3aXRoaW4gdGhlIHBhZ2VzXG4gIHZhciBzbGlkZVdpZHRoID0gc2xpZGVTaXplLndpZHRoLFxuICAgIHNsaWRlSGVpZ2h0ID0gc2xpZGVTaXplLmhlaWdodDtcblxuICAvLyBMZXQgdGhlIGJyb3dzZXIga25vdyB3aGF0IHBhZ2Ugc2l6ZSB3ZSB3YW50IHRvIHByaW50XG4gIGluamVjdFN0eWxlU2hlZXQoICdAcGFnZXtzaXplOicrIHBhZ2VXaWR0aCArJ3B4ICcrIHBhZ2VIZWlnaHQgKydweDsgbWFyZ2luOiAwcHg7fScgKTtcblxuICAvLyBMaW1pdCB0aGUgc2l6ZSBvZiBjZXJ0YWluIGVsZW1lbnRzIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBzbGlkZVxuICBpbmplY3RTdHlsZVNoZWV0KCAnLnJldmVhbCBzZWN0aW9uPmltZywgLnJldmVhbCBzZWN0aW9uPnZpZGVvLCAucmV2ZWFsIHNlY3Rpb24+aWZyYW1le21heC13aWR0aDogJysgc2xpZGVXaWR0aCArJ3B4OyBtYXgtaGVpZ2h0OicrIHNsaWRlSGVpZ2h0ICsncHh9JyApO1xuXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ3ByaW50LXBkZicgKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IHBhZ2VXaWR0aCArICdweCc7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gcGFnZUhlaWdodCArICdweCc7XG5cbiAgLy8gTWFrZSBzdXJlIHN0cmV0Y2ggZWxlbWVudHMgZml0IG9uIHNsaWRlXG4gIGxheW91dFNsaWRlQ29udGVudHMoIHNsaWRlV2lkdGgsIHNsaWRlSGVpZ2h0ICk7XG5cbiAgLy8gQ29tcHV0ZSBzbGlkZSBudW1iZXJzIG5vdywgYmVmb3JlIHdlIHN0YXJ0IGR1cGxpY2F0aW5nIHNsaWRlc1xuICB2YXIgZG9pbmdTbGlkZU51bWJlcnMgPSBjb25maWcuc2xpZGVOdW1iZXIgJiYgL2FsbHxwcmludC9pLnRlc3QoIGNvbmZpZy5zaG93U2xpZGVOdW1iZXIgKTtcbiAgdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG4gICAgc2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1zbGlkZS1udW1iZXInLCBnZXRTbGlkZU51bWJlciggc2xpZGUgKSApO1xuICB9ICk7XG5cbiAgLy8gU2xpZGUgYW5kIHNsaWRlIGJhY2tncm91bmQgbGF5b3V0XG4gIHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuXG4gICAgLy8gVmVydGljYWwgc3RhY2tzIGFyZSBub3QgY2VudHJlZCBzaW5jZSB0aGVpciBzZWN0aW9uXG4gICAgLy8gY2hpbGRyZW4gd2lsbCBiZVxuICAgIGlmKCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSA9PT0gZmFsc2UgKSB7XG4gICAgICAvLyBDZW50ZXIgdGhlIHNsaWRlIGluc2lkZSBvZiB0aGUgcGFnZSwgZ2l2aW5nIHRoZSBzbGlkZSBzb21lIG1hcmdpblxuICAgICAgdmFyIGxlZnQgPSAoIHBhZ2VXaWR0aCAtIHNsaWRlV2lkdGggKSAvIDIsXG4gICAgICAgIHRvcCA9ICggcGFnZUhlaWdodCAtIHNsaWRlSGVpZ2h0ICkgLyAyO1xuXG4gICAgICB2YXIgY29udGVudEhlaWdodCA9IHNsaWRlLnNjcm9sbEhlaWdodDtcbiAgICAgIHZhciBudW1iZXJPZlBhZ2VzID0gTWF0aC5tYXgoIE1hdGguY2VpbCggY29udGVudEhlaWdodCAvIHBhZ2VIZWlnaHQgKSwgMSApO1xuXG4gICAgICAvLyBBZGhlcmUgdG8gY29uZmlndXJlZCBwYWdlcyBwZXIgc2xpZGUgbGltaXRcbiAgICAgIG51bWJlck9mUGFnZXMgPSBNYXRoLm1pbiggbnVtYmVyT2ZQYWdlcywgY29uZmlnLnBkZk1heFBhZ2VzUGVyU2xpZGUgKTtcblxuICAgICAgLy8gQ2VudGVyIHNsaWRlcyB2ZXJ0aWNhbGx5XG4gICAgICBpZiggbnVtYmVyT2ZQYWdlcyA9PT0gMSAmJiBjb25maWcuY2VudGVyIHx8IHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ2NlbnRlcicgKSApIHtcbiAgICAgICAgdG9wID0gTWF0aC5tYXgoICggcGFnZUhlaWdodCAtIGNvbnRlbnRIZWlnaHQgKSAvIDIsIDAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gV3JhcCB0aGUgc2xpZGUgaW4gYSBwYWdlIGVsZW1lbnQgYW5kIGhpZGUgaXRzIG92ZXJmbG93XG4gICAgICAvLyBzbyB0aGF0IG5vIHBhZ2UgZXZlciBmbG93cyBvbnRvIGFub3RoZXJcbiAgICAgIHZhciBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgIHBhZ2UuY2xhc3NOYW1lID0gJ3BkZi1wYWdlJztcbiAgICAgIHBhZ2Uuc3R5bGUuaGVpZ2h0ID0gKCAoIHBhZ2VIZWlnaHQgKyBjb25maWcucGRmUGFnZUhlaWdodE9mZnNldCApICogbnVtYmVyT2ZQYWdlcyApICsgJ3B4JztcbiAgICAgIHNsaWRlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBwYWdlLCBzbGlkZSApO1xuICAgICAgcGFnZS5hcHBlbmRDaGlsZCggc2xpZGUgKTtcblxuICAgICAgLy8gUG9zaXRpb24gdGhlIHNsaWRlIGluc2lkZSBvZiB0aGUgcGFnZVxuICAgICAgc2xpZGUuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgc2xpZGUuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gc2xpZGVXaWR0aCArICdweCc7XG5cbiAgICAgIGlmKCBzbGlkZS5zbGlkZUJhY2tncm91bmRFbGVtZW50ICkge1xuICAgICAgICBwYWdlLmluc2VydEJlZm9yZSggc2xpZGUuc2xpZGVCYWNrZ3JvdW5kRWxlbWVudCwgc2xpZGUgKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5qZWN0IG5vdGVzIGlmIGBzaG93Tm90ZXNgIGlzIGVuYWJsZWRcbiAgICAgIGlmKCBjb25maWcuc2hvd05vdGVzICkge1xuXG4gICAgICAgIC8vIEFyZSB0aGVyZSBub3RlcyBmb3IgdGhpcyBzbGlkZT9cbiAgICAgICAgdmFyIG5vdGVzID0gZ2V0U2xpZGVOb3Rlcyggc2xpZGUgKTtcbiAgICAgICAgaWYoIG5vdGVzICkge1xuXG4gICAgICAgICAgdmFyIG5vdGVzU3BhY2luZyA9IDg7XG4gICAgICAgICAgdmFyIG5vdGVzTGF5b3V0ID0gdHlwZW9mIGNvbmZpZy5zaG93Tm90ZXMgPT09ICdzdHJpbmcnID8gY29uZmlnLnNob3dOb3RlcyA6ICdpbmxpbmUnO1xuICAgICAgICAgIHZhciBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICAgIG5vdGVzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc3BlYWtlci1ub3RlcycgKTtcbiAgICAgICAgICBub3Rlc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3NwZWFrZXItbm90ZXMtcGRmJyApO1xuICAgICAgICAgIG5vdGVzRWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWxheW91dCcsIG5vdGVzTGF5b3V0ICk7XG4gICAgICAgICAgbm90ZXNFbGVtZW50LmlubmVySFRNTCA9IG5vdGVzO1xuXG4gICAgICAgICAgaWYoIG5vdGVzTGF5b3V0ID09PSAnc2VwYXJhdGUtcGFnZScgKSB7XG4gICAgICAgICAgICBwYWdlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBub3Rlc0VsZW1lbnQsIHBhZ2UubmV4dFNpYmxpbmcgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3Rlc0VsZW1lbnQuc3R5bGUubGVmdCA9IG5vdGVzU3BhY2luZyArICdweCc7XG4gICAgICAgICAgICBub3Rlc0VsZW1lbnQuc3R5bGUuYm90dG9tID0gbm90ZXNTcGFjaW5nICsgJ3B4JztcbiAgICAgICAgICAgIG5vdGVzRWxlbWVudC5zdHlsZS53aWR0aCA9ICggcGFnZVdpZHRoIC0gbm90ZXNTcGFjaW5nKjIgKSArICdweCc7XG4gICAgICAgICAgICBwYWdlLmFwcGVuZENoaWxkKCBub3Rlc0VsZW1lbnQgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC8vIEluamVjdCBzbGlkZSBudW1iZXJzIGlmIGBzbGlkZU51bWJlcnNgIGFyZSBlbmFibGVkXG4gICAgICBpZiggZG9pbmdTbGlkZU51bWJlcnMgKSB7XG4gICAgICAgIHZhciBudW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgbnVtYmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc2xpZGUtbnVtYmVyJyApO1xuICAgICAgICBudW1iZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzbGlkZS1udW1iZXItcGRmJyApO1xuICAgICAgICBudW1iZXJFbGVtZW50LmlubmVySFRNTCA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtc2xpZGUtbnVtYmVyJyApO1xuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKCBudW1iZXJFbGVtZW50ICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgcGFnZSBhbmQgc2hvdyBmcmFnbWVudHMgb25lIGFmdGVyIGFub3RoZXJcbiAgICAgIGlmKCBjb25maWcucGRmU2VwYXJhdGVGcmFnbWVudHMgKSB7XG5cbiAgICAgICAgLy8gRWFjaCBmcmFnbWVudCAnZ3JvdXAnIGlzIGFuIGFycmF5IGNvbnRhaW5pbmcgb25lIG9yIG1vcmVcbiAgICAgICAgLy8gZnJhZ21lbnRzLiBNdWx0aXBsZSBmcmFnbWVudHMgdGhhdCBhcHBlYXIgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICAvLyBhcmUgcGFydCBvZiB0aGUgc2FtZSBncm91cC5cbiAgICAgICAgdmFyIGZyYWdtZW50R3JvdXBzID0gc29ydEZyYWdtZW50cyggcGFnZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApLCB0cnVlICk7XG5cbiAgICAgICAgdmFyIHByZXZpb3VzRnJhZ21lbnRTdGVwO1xuICAgICAgICB2YXIgcHJldmlvdXNQYWdlO1xuXG4gICAgICAgIGZyYWdtZW50R3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKCBmcmFnbWVudHMgKSB7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgJ2N1cnJlbnQtZnJhZ21lbnQnIGZyb20gdGhlIHByZXZpb3VzIGdyb3VwXG4gICAgICAgICAgaWYoIHByZXZpb3VzRnJhZ21lbnRTdGVwICkge1xuICAgICAgICAgICAgcHJldmlvdXNGcmFnbWVudFN0ZXAuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuICAgICAgICAgICAgICBmcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTaG93IHRoZSBmcmFnbWVudHMgZm9yIHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgICAgZnJhZ21lbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBmcmFnbWVudCApIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJywgJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG4gICAgICAgICAgfSApO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgc2VwYXJhdGUgcGFnZSBmb3IgdGhlIGN1cnJlbnQgZnJhZ21lbnQgc3RhdGVcbiAgICAgICAgICB2YXIgY2xvbmVkUGFnZSA9IHBhZ2UuY2xvbmVOb2RlKCB0cnVlICk7XG4gICAgICAgICAgcGFnZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggY2xvbmVkUGFnZSwgKCBwcmV2aW91c1BhZ2UgfHwgcGFnZSApLm5leHRTaWJsaW5nICk7XG5cbiAgICAgICAgICBwcmV2aW91c0ZyYWdtZW50U3RlcCA9IGZyYWdtZW50cztcbiAgICAgICAgICBwcmV2aW91c1BhZ2UgPSBjbG9uZWRQYWdlO1xuXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgZmlyc3Qvb3JpZ2luYWwgcGFnZSBzbyB0aGF0IGFsbCBmcmFnbWVudHMgYXJlIGhpZGRlblxuICAgICAgICBmcmFnbWVudEdyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnRzICkge1xuICAgICAgICAgIGZyYWdtZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQgKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAndmlzaWJsZScsICdjdXJyZW50LWZyYWdtZW50JyApO1xuICAgICAgICAgIH0gKTtcbiAgICAgICAgfSApO1xuXG4gICAgICB9XG4gICAgICAvLyBTaG93IGFsbCBmcmFnbWVudHNcbiAgICAgIGVsc2Uge1xuICAgICAgICB0b0FycmF5KCBwYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQ6bm90KC5mYWRlLW91dCknICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQgKSB7XG4gICAgICAgICAgZnJhZ21lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG4gICAgICAgIH0gKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9ICk7XG5cbiAgLy8gTm90aWZ5IHN1YnNjcmliZXJzIHRoYXQgdGhlIFBERiBsYXlvdXQgaXMgZ29vZCB0byBnb1xuICBkaXNwYXRjaEV2ZW50KCAncGRmLXJlYWR5JyApO1xuXG59XG5cbi8qKlxuICogVGhpcyBpcyBhbiB1bmZvcnR1bmF0ZSBuZWNlc3NpdHkuIFNvbWUgYWN0aW9ucyDigJMgc3VjaCBhc1xuICogYW4gaW5wdXQgZmllbGQgYmVpbmcgZm9jdXNlZCBpbiBhbiBpZnJhbWUgb3IgdXNpbmcgdGhlXG4gKiBrZXlib2FyZCB0byBleHBhbmQgdGV4dCBzZWxlY3Rpb24gYmV5b25kIHRoZSBib3VuZHMgb2ZcbiAqIGEgc2xpZGUg4oCTIGNhbiB0cmlnZ2VyIG91ciBjb250ZW50IHRvIGJlIHB1c2hlZCBvdXQgb2Ygdmlldy5cbiAqIFRoaXMgc2Nyb2xsaW5nIGNhbiBub3QgYmUgcHJldmVudGVkIGJ5IGhpZGluZyBvdmVyZmxvdyBpblxuICogQ1NTICh3ZSBhbHJlYWR5IGRvKSBzbyB3ZSBoYXZlIHRvIHJlc29ydCB0byByZXBlYXRlZGx5XG4gKiBjaGVja2luZyBpZiB0aGUgc2xpZGVzIGhhdmUgYmVlbiBvZmZzZXQgOihcbiAqL1xuZnVuY3Rpb24gc2V0dXBTY3JvbGxQcmV2ZW50aW9uKCkge1xuXG4gIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcbiAgICBpZiggZG9tLndyYXBwZXIuc2Nyb2xsVG9wICE9PSAwIHx8IGRvbS53cmFwcGVyLnNjcm9sbExlZnQgIT09IDAgKSB7XG4gICAgICBkb20ud3JhcHBlci5zY3JvbGxUb3AgPSAwO1xuICAgICAgZG9tLndyYXBwZXIuc2Nyb2xsTGVmdCA9IDA7XG4gICAgfVxuICB9LCAxMDAwICk7XG5cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIEhUTUwgZWxlbWVudCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byBpdC5cbiAqIElmIHRoZSBlbGVtZW50IGFscmVhZHkgZXhpc3RzIHRoZSBleGlzdGluZyBpbnN0YW5jZSB3aWxsXG4gKiBiZSByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWduYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5uZXJIVE1MXG4gKlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGNvbnRhaW5lciwgdGFnbmFtZSwgY2xhc3NuYW1lLCBpbm5lckhUTUwgKSB7XG5cbiAgLy8gRmluZCBhbGwgbm9kZXMgbWF0Y2hpbmcgdGhlIGRlc2NyaXB0aW9uXG4gIHZhciBub2RlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLicgKyBjbGFzc25hbWUgKTtcblxuICAvLyBDaGVjayBhbGwgbWF0Y2hlcyB0byBmaW5kIG9uZSB3aGljaCBpcyBhIGRpcmVjdCBjaGlsZCBvZlxuICAvLyB0aGUgc3BlY2lmaWVkIGNvbnRhaW5lclxuICBmb3IoIHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciB0ZXN0Tm9kZSA9IG5vZGVzW2ldO1xuICAgIGlmKCB0ZXN0Tm9kZS5wYXJlbnROb2RlID09PSBjb250YWluZXIgKSB7XG4gICAgICByZXR1cm4gdGVzdE5vZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm8gbm9kZSB3YXMgZm91bmQsIGNyZWF0ZSBpdCBub3dcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0YWduYW1lICk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xuICBpZiggdHlwZW9mIGlubmVySFRNTCA9PT0gJ3N0cmluZycgKSB7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKCBub2RlICk7XG5cbiAgcmV0dXJuIG5vZGU7XG5cbn1cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBzbGlkZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIGFuZCBhcHBlbmRzIHRoZW1cbiAqIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5lci4gT25lIGVsZW1lbnQgaXMgY3JlYXRlZCBwZXJcbiAqIHNsaWRlIG5vIG1hdHRlciBpZiB0aGUgZ2l2ZW4gc2xpZGUgaGFzIHZpc2libGUgYmFja2dyb3VuZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZHMoKSB7XG5cbiAgdmFyIHByaW50TW9kZSA9IGlzUHJpbnRpbmdQREYoKTtcblxuICAvLyBDbGVhciBwcmlvciBiYWNrZ3JvdW5kc1xuICBkb20uYmFja2dyb3VuZC5pbm5lckhUTUwgPSAnJztcbiAgZG9tLmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCggJ25vLXRyYW5zaXRpb24nICk7XG5cbiAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBob3Jpem9udGFsIHNsaWRlc1xuICB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlaCApIHtcblxuICAgIHZhciBiYWNrZ3JvdW5kU3RhY2sgPSBjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZWgsIGRvbS5iYWNrZ3JvdW5kICk7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHZlcnRpY2FsIHNsaWRlc1xuICAgIHRvQXJyYXkoIHNsaWRlaC5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZXYgKSB7XG5cbiAgICAgIGNyZWF0ZUJhY2tncm91bmQoIHNsaWRldiwgYmFja2dyb3VuZFN0YWNrICk7XG5cbiAgICAgIGJhY2tncm91bmRTdGFjay5jbGFzc0xpc3QuYWRkKCAnc3RhY2snICk7XG5cbiAgICB9ICk7XG5cbiAgfSApO1xuXG4gIC8vIEFkZCBwYXJhbGxheCBiYWNrZ3JvdW5kIGlmIHNwZWNpZmllZFxuICBpZiggY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEltYWdlICkge1xuXG4gICAgZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2UgKyAnXCIpJztcbiAgICBkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRTaXplO1xuICAgIGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kUmVwZWF0O1xuICAgIGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRQb3NpdGlvbjtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYmVsb3cgcHJvcGVydGllcyBhcmUgc2V0IG9uIHRoZSBlbGVtZW50IC0gdGhlc2UgcHJvcGVydGllcyBhcmVcbiAgICAvLyBuZWVkZWQgZm9yIHByb3BlciB0cmFuc2l0aW9ucyB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnQgdmlhIENTUy4gVG8gcmVtb3ZlXG4gICAgLy8gYW5ub3lpbmcgYmFja2dyb3VuZCBzbGlkZS1pbiBlZmZlY3Qgd2hlbiB0aGUgcHJlc2VudGF0aW9uIHN0YXJ0cywgYXBwbHlcbiAgICAvLyB0aGVzZSBwcm9wZXJ0aWVzIGFmdGVyIHNob3J0IHRpbWUgZGVsYXlcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdoYXMtcGFyYWxsYXgtYmFja2dyb3VuZCcgKTtcbiAgICB9LCAxICk7XG5cbiAgfVxuICBlbHNlIHtcblxuICAgIGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtcGFyYWxsYXgtYmFja2dyb3VuZCcgKTtcblxuICB9XG5cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFja2dyb3VuZCBmb3IgdGhlIGdpdmVuIHNsaWRlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhhdCB0aGUgYmFja2dyb3VuZFxuICogc2hvdWxkIGJlIGFwcGVuZGVkIHRvXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTmV3IGJhY2tncm91bmQgZGl2XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQoIHNsaWRlLCBjb250YWluZXIgKSB7XG5cblxuICAvLyBNYWluIHNsaWRlIGJhY2tncm91bmQgZWxlbWVudFxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3NsaWRlLWJhY2tncm91bmQgJyArIHNsaWRlLmNsYXNzTmFtZS5yZXBsYWNlKCAvcHJlc2VudHxwYXN0fGZ1dHVyZS8sICcnICk7XG5cbiAgLy8gSW5uZXIgYmFja2dyb3VuZCBlbGVtZW50IHRoYXQgd3JhcHMgaW1hZ2VzL3ZpZGVvcy9pZnJhbWVzXG4gIHZhciBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gIGNvbnRlbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdzbGlkZS1iYWNrZ3JvdW5kLWNvbnRlbnQnO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRlbnRFbGVtZW50ICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gIHNsaWRlLnNsaWRlQmFja2dyb3VuZEVsZW1lbnQgPSBlbGVtZW50O1xuICBzbGlkZS5zbGlkZUJhY2tncm91bmRDb250ZW50RWxlbWVudCA9IGNvbnRlbnRFbGVtZW50O1xuXG4gIC8vIFN5bmNzIHRoZSBiYWNrZ3JvdW5kIHRvIHJlZmxlY3QgYWxsIGN1cnJlbnQgYmFja2dyb3VuZCBzZXR0aW5nc1xuICBzeW5jQmFja2dyb3VuZCggc2xpZGUgKTtcblxuICByZXR1cm4gZWxlbWVudDtcblxufVxuXG4vKipcbiAqIFJlbmRlcnMgYWxsIG9mIHRoZSB2aXN1YWwgcHJvcGVydGllcyBvZiBhIHNsaWRlIGJhY2tncm91bmRcbiAqIGJhc2VkIG9uIHRoZSB2YXJpb3VzIGJhY2tncm91bmQgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzbGlkZVxuICovXG5mdW5jdGlvbiBzeW5jQmFja2dyb3VuZCggc2xpZGUgKSB7XG5cbiAgdmFyIGVsZW1lbnQgPSBzbGlkZS5zbGlkZUJhY2tncm91bmRFbGVtZW50LFxuICAgIGNvbnRlbnRFbGVtZW50ID0gc2xpZGUuc2xpZGVCYWNrZ3JvdW5kQ29udGVudEVsZW1lbnQ7XG5cbiAgLy8gUmVzZXQgdGhlIHByaW9yIGJhY2tncm91bmQgc3RhdGUgaW4gY2FzZSB0aGlzIGlzIG5vdCB0aGVcbiAgLy8gaW5pdGlhbCBzeW5jXG4gIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtZGFyay1iYWNrZ3JvdW5kJyApO1xuICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAnaGFzLWxpZ2h0LWJhY2tncm91bmQnICk7XG5cbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLWxvYWRlZCcgKTtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaGFzaCcgKTtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtc2l6ZScgKTtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbicgKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJyc7XG4gIGNvbnRlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcnO1xuICBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgY29udGVudEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xuICBjb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICB2YXIgZGF0YSA9IHtcbiAgICBiYWNrZ3JvdW5kOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQnICksXG4gICAgYmFja2dyb3VuZFNpemU6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1zaXplJyApLFxuICAgIGJhY2tncm91bmRJbWFnZTogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJyApLFxuICAgIGJhY2tncm91bmRWaWRlbzogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvJyApLFxuICAgIGJhY2tncm91bmRJZnJhbWU6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pZnJhbWUnICksXG4gICAgYmFja2dyb3VuZENvbG9yOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtY29sb3InICksXG4gICAgYmFja2dyb3VuZFJlcGVhdDogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXJlcGVhdCcgKSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1wb3NpdGlvbicgKSxcbiAgICBiYWNrZ3JvdW5kVHJhbnNpdGlvbjogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb24nICksXG4gICAgYmFja2dyb3VuZE9wYWNpdHk6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1vcGFjaXR5JyApXG4gIH07XG5cbiAgaWYoIGRhdGEuYmFja2dyb3VuZCApIHtcbiAgICAvLyBBdXRvLXdyYXAgaW1hZ2UgdXJscyBpbiB1cmwoLi4uKVxuICAgIGlmKCAvXihodHRwfGZpbGV8XFwvXFwvKS9naS50ZXN0KCBkYXRhLmJhY2tncm91bmQgKSB8fCAvXFwuKHN2Z3xwbmd8anBnfGpwZWd8Z2lmfGJtcCkoWz8jXFxzXXwkKS9naS50ZXN0KCBkYXRhLmJhY2tncm91bmQgKSApIHtcbiAgICAgIHNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pbWFnZScsIGRhdGEuYmFja2dyb3VuZCApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGRhdGEuYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgYSBoYXNoIGZvciB0aGlzIGNvbWJpbmF0aW9uIG9mIGJhY2tncm91bmQgc2V0dGluZ3MuXG4gIC8vIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0d28gc2xpZGUgYmFja2dyb3VuZHMgYXJlXG4gIC8vIHRoZSBzYW1lLlxuICBpZiggZGF0YS5iYWNrZ3JvdW5kIHx8IGRhdGEuYmFja2dyb3VuZENvbG9yIHx8IGRhdGEuYmFja2dyb3VuZEltYWdlIHx8IGRhdGEuYmFja2dyb3VuZFZpZGVvIHx8IGRhdGEuYmFja2dyb3VuZElmcmFtZSApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1oYXNoJywgZGF0YS5iYWNrZ3JvdW5kICtcbiAgICAgIGRhdGEuYmFja2dyb3VuZFNpemUgK1xuICAgICAgZGF0YS5iYWNrZ3JvdW5kSW1hZ2UgK1xuICAgICAgZGF0YS5iYWNrZ3JvdW5kVmlkZW8gK1xuICAgICAgZGF0YS5iYWNrZ3JvdW5kSWZyYW1lICtcbiAgICAgIGRhdGEuYmFja2dyb3VuZENvbG9yICtcbiAgICAgIGRhdGEuYmFja2dyb3VuZFJlcGVhdCArXG4gICAgICBkYXRhLmJhY2tncm91bmRQb3NpdGlvbiArXG4gICAgICBkYXRhLmJhY2tncm91bmRUcmFuc2l0aW9uICtcbiAgICAgIGRhdGEuYmFja2dyb3VuZE9wYWNpdHkgKTtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgYW5kIG9wdGlvbmFsIGJhY2tncm91bmQgcHJvcGVydGllc1xuICBpZiggZGF0YS5iYWNrZ3JvdW5kU2l6ZSApIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXNpemUnLCBkYXRhLmJhY2tncm91bmRTaXplICk7XG4gIGlmKCBkYXRhLmJhY2tncm91bmRDb2xvciApIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGlmKCBkYXRhLmJhY2tncm91bmRUcmFuc2l0aW9uICkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbicsIGRhdGEuYmFja2dyb3VuZFRyYW5zaXRpb24gKTtcblxuICBpZiggc2xpZGUuaGFzQXR0cmlidXRlKCAnZGF0YS1wcmVsb2FkJyApICkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLXByZWxvYWQnLCAnJyApO1xuXG4gIC8vIEJhY2tncm91bmQgaW1hZ2Ugb3B0aW9ucyBhcmUgc2V0IG9uIHRoZSBjb250ZW50IHdyYXBwZXJcbiAgaWYoIGRhdGEuYmFja2dyb3VuZFNpemUgKSBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGRhdGEuYmFja2dyb3VuZFNpemU7XG4gIGlmKCBkYXRhLmJhY2tncm91bmRSZXBlYXQgKSBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gZGF0YS5iYWNrZ3JvdW5kUmVwZWF0O1xuICBpZiggZGF0YS5iYWNrZ3JvdW5kUG9zaXRpb24gKSBjb250ZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBkYXRhLmJhY2tncm91bmRQb3NpdGlvbjtcbiAgaWYoIGRhdGEuYmFja2dyb3VuZE9wYWNpdHkgKSBjb250ZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gZGF0YS5iYWNrZ3JvdW5kT3BhY2l0eTtcblxuICAvLyBJZiB0aGlzIHNsaWRlIGhhcyBhIGJhY2tncm91bmQgY29sb3IsIHdlIGFkZCBhIGNsYXNzIHRoYXRcbiAgLy8gc2lnbmFscyBpZiBpdCBpcyBsaWdodCBvciBkYXJrLiBJZiB0aGUgc2xpZGUgaGFzIG5vIGJhY2tncm91bmRcbiAgLy8gY29sb3IsIG5vIGNsYXNzIHdpbGwgYmUgYWRkZWRcbiAgdmFyIGNvbnRyYXN0Q29sb3IgPSBkYXRhLmJhY2tncm91bmRDb2xvcjtcblxuICAvLyBJZiBubyBiZyBjb2xvciB3YXMgZm91bmQsIGNoZWNrIHRoZSBjb21wdXRlZCBiYWNrZ3JvdW5kXG4gIGlmKCAhY29udHJhc3RDb2xvciApIHtcbiAgICB2YXIgY29tcHV0ZWRCYWNrZ3JvdW5kU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbWVudCApO1xuICAgIGlmKCBjb21wdXRlZEJhY2tncm91bmRTdHlsZSAmJiBjb21wdXRlZEJhY2tncm91bmRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgKSB7XG4gICAgICBjb250cmFzdENvbG9yID0gY29tcHV0ZWRCYWNrZ3JvdW5kU3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGlmKCBjb250cmFzdENvbG9yICkge1xuICAgIHZhciByZ2IgPSBjb2xvclRvUmdiKCBjb250cmFzdENvbG9yICk7XG5cbiAgICAvLyBJZ25vcmUgZnVsbHkgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHMuIFNvbWUgYnJvd3NlcnMgcmV0dXJuXG4gICAgLy8gcmdiYSgwLDAsMCwwKSB3aGVuIHJlYWRpbmcgdGhlIGNvbXB1dGVkIGJhY2tncm91bmQgY29sb3Igb2ZcbiAgICAvLyBhbiBlbGVtZW50IHdpdGggbm8gYmFja2dyb3VuZFxuICAgIGlmKCByZ2IgJiYgcmdiLmEgIT09IDAgKSB7XG4gICAgICBpZiggY29sb3JCcmlnaHRuZXNzKCBjb250cmFzdENvbG9yICkgPCAxMjggKSB7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoICdoYXMtZGFyay1iYWNrZ3JvdW5kJyApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoICdoYXMtbGlnaHQtYmFja2dyb3VuZCcgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRvIHBvc3RNZXNzYWdlIGV2ZW50cywgdGhpcyBtYWtlcyBpdFxuICogcG9zc2libGUgdG8gY2FsbCBhbGwgcmV2ZWFsLmpzIEFQSSBtZXRob2RzIGZyb20gYW5vdGhlclxuICogd2luZG93LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiByZXZlYWxXaW5kb3cucG9zdE1lc3NhZ2UoIEpTT04uc3RyaW5naWZ5KHtcbiAqICAgbWV0aG9kOiAnc2xpZGUnLFxuICogICBhcmdzOiBbIDIgXVxuICogfSksICcqJyApO1xuICovXG5mdW5jdGlvbiBzZXR1cFBvc3RNZXNzYWdlKCkge1xuXG4gIGlmKCBjb25maWcucG9zdE1lc3NhZ2UgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdtZXNzYWdlJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIGRlYWxpbmcgd2l0aCBKU09OXG4gICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIGRhdGEuY2hhckF0KCAwICkgPT09ICd7JyAmJiBkYXRhLmNoYXJBdCggZGF0YS5sZW5ndGggLSAxICkgPT09ICd9JyApIHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoIGRhdGEgKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVxdWVzdGVkIG1ldGhvZCBjYW4gYmUgZm91bmRcbiAgICAgICAgaWYoIGRhdGEubWV0aG9kICYmIHR5cGVvZiBSZXZlYWxbZGF0YS5tZXRob2RdID09PSAnZnVuY3Rpb24nICkge1xuXG4gICAgICAgICAgaWYoIFBPU1RfTUVTU0FHRV9NRVRIT0RfQkxBQ0tMSVNULnRlc3QoIGRhdGEubWV0aG9kICkgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gUmV2ZWFsW2RhdGEubWV0aG9kXS5hcHBseSggUmV2ZWFsLCBkYXRhLmFyZ3MgKTtcblxuICAgICAgICAgICAgLy8gRGlzcGF0Y2ggYSBwb3N0TWVzc2FnZSBldmVudCB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZSBmcm9tXG4gICAgICAgICAgICAvLyBvdXIgbWV0aG9kIGludm9jYXRpb24gZm9yIGdldHRlciBmdW5jdGlvbnNcbiAgICAgICAgICAgIGRpc3BhdGNoUG9zdE1lc3NhZ2UoICdjYWxsYmFjaycsIHsgbWV0aG9kOiBkYXRhLm1ldGhvZCwgcmVzdWx0OiByZXN1bHQgfSApO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCAncmV2ZWFsLmpzOiBcIicrIGRhdGEubWV0aG9kICsnXCIgaXMgaXMgYmxhY2tsaXN0ZWQgZnJvbSB0aGUgcG9zdE1lc3NhZ2UgQVBJJyApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZmFsc2UgKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQXBwbGllcyB0aGUgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmcm9tIHRoZSBjb25maWdcbiAqIG9iamVjdC4gTWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjb25maWd1cmUoIG9wdGlvbnMgKSB7XG5cbiAgdmFyIG9sZFRyYW5zaXRpb24gPSBjb25maWcudHJhbnNpdGlvbjtcblxuICAvLyBOZXcgY29uZmlnIG9wdGlvbnMgbWF5IGJlIHBhc3NlZCB3aGVuIHRoaXMgbWV0aG9kXG4gIC8vIGlzIGludm9rZWQgdGhyb3VnaCB0aGUgQVBJIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgKSBleHRlbmQoIGNvbmZpZywgb3B0aW9ucyApO1xuXG4gIC8vIEFib3J0IGlmIHJldmVhbC5qcyBoYXNuJ3QgZmluaXNoZWQgbG9hZGluZywgY29uZmlnXG4gIC8vIGNoYW5nZXMgd2lsbCBiZSBhcHBsaWVkIGF1dG9tYXRpY2FsbHkgb25jZSBsb2FkaW5nXG4gIC8vIGZpbmlzaGVzXG4gIGlmKCBsb2FkZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gIHZhciBudW1iZXJPZlNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApLmxlbmd0aDtcblxuICAvLyBSZW1vdmUgdGhlIHByZXZpb3VzbHkgY29uZmlndXJlZCB0cmFuc2l0aW9uIGNsYXNzXG4gIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIG9sZFRyYW5zaXRpb24gKTtcblxuICAvLyBGb3JjZSBsaW5lYXIgdHJhbnNpdGlvbiBiYXNlZCBvbiBicm93c2VyIGNhcGFiaWxpdGllc1xuICBpZiggZmVhdHVyZXMudHJhbnNmb3JtczNkID09PSBmYWxzZSApIGNvbmZpZy50cmFuc2l0aW9uID0gJ2xpbmVhcic7XG5cbiAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggY29uZmlnLnRyYW5zaXRpb24gKTtcblxuICBkb20ud3JhcHBlci5zZXRBdHRyaWJ1dGUoICdkYXRhLXRyYW5zaXRpb24tc3BlZWQnLCBjb25maWcudHJhbnNpdGlvblNwZWVkICk7XG4gIGRvbS53cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uJywgY29uZmlnLmJhY2tncm91bmRUcmFuc2l0aW9uICk7XG5cbiAgZG9tLmNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBjb25maWcuY29udHJvbHMgPyAnYmxvY2snIDogJ25vbmUnO1xuICBkb20ucHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IGNvbmZpZy5wcm9ncmVzcyA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgZG9tLmNvbnRyb2xzLnNldEF0dHJpYnV0ZSggJ2RhdGEtY29udHJvbHMtbGF5b3V0JywgY29uZmlnLmNvbnRyb2xzTGF5b3V0ICk7XG4gIGRvbS5jb250cm9scy5zZXRBdHRyaWJ1dGUoICdkYXRhLWNvbnRyb2xzLWJhY2stYXJyb3dzJywgY29uZmlnLmNvbnRyb2xzQmFja0Fycm93cyApO1xuXG4gIGlmKCBjb25maWcuc2h1ZmZsZSApIHtcbiAgICBzaHVmZmxlKCk7XG4gIH1cblxuICBpZiggY29uZmlnLnJ0bCApIHtcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAncnRsJyApO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdydGwnICk7XG4gIH1cblxuICBpZiggY29uZmlnLmNlbnRlciApIHtcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnY2VudGVyJyApO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdjZW50ZXInICk7XG4gIH1cblxuICAvLyBFeGl0IHRoZSBwYXVzZWQgbW9kZSBpZiBpdCB3YXMgY29uZmlndXJlZCBvZmZcbiAgaWYoIGNvbmZpZy5wYXVzZSA9PT0gZmFsc2UgKSB7XG4gICAgcmVzdW1lKCk7XG4gIH1cblxuICBpZiggY29uZmlnLnNob3dOb3RlcyApIHtcbiAgICBkb20uc3BlYWtlck5vdGVzLnNldEF0dHJpYnV0ZSggJ2RhdGEtbGF5b3V0JywgdHlwZW9mIGNvbmZpZy5zaG93Tm90ZXMgPT09ICdzdHJpbmcnID8gY29uZmlnLnNob3dOb3RlcyA6ICdpbmxpbmUnICk7XG4gIH1cblxuICBpZiggY29uZmlnLm1vdXNlV2hlZWwgKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApOyAvLyBGRlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTsgLy8gRkZcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTtcbiAgfVxuXG4gIC8vIFJvbGxpbmcgM0QgbGlua3NcbiAgaWYoIGNvbmZpZy5yb2xsaW5nTGlua3MgKSB7XG4gICAgZW5hYmxlUm9sbGluZ0xpbmtzKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGlzYWJsZVJvbGxpbmdMaW5rcygpO1xuICB9XG5cbiAgLy8gQXV0by1oaWRlIHRoZSBtb3VzZSBwb2ludGVyIHdoZW4gaXRzIGluYWN0aXZlXG4gIGlmKCBjb25maWcuaGlkZUluYWN0aXZlQ3Vyc29yICkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbkRvY3VtZW50Q3Vyc29yQWN0aXZlLCBmYWxzZSApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbkRvY3VtZW50Q3Vyc29yQWN0aXZlLCBmYWxzZSApO1xuICB9XG4gIGVsc2Uge1xuICAgIHNob3dDdXJzb3IoKTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbkRvY3VtZW50Q3Vyc29yQWN0aXZlLCBmYWxzZSApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbkRvY3VtZW50Q3Vyc29yQWN0aXZlLCBmYWxzZSApO1xuICB9XG5cbiAgLy8gSWZyYW1lIGxpbmsgcHJldmlld3NcbiAgaWYoIGNvbmZpZy5wcmV2aWV3TGlua3MgKSB7XG4gICAgZW5hYmxlUHJldmlld0xpbmtzKCk7XG4gICAgZGlzYWJsZVByZXZpZXdMaW5rcyggJ1tkYXRhLXByZXZpZXctbGluaz1mYWxzZV0nICk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGlzYWJsZVByZXZpZXdMaW5rcygpO1xuICAgIGVuYWJsZVByZXZpZXdMaW5rcyggJ1tkYXRhLXByZXZpZXctbGlua106bm90KFtkYXRhLXByZXZpZXctbGluaz1mYWxzZV0pJyApO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGV4aXN0aW5nIGF1dG8tc2xpZGUgY29udHJvbHNcbiAgaWYoIGF1dG9TbGlkZVBsYXllciApIHtcbiAgICBhdXRvU2xpZGVQbGF5ZXIuZGVzdHJveSgpO1xuICAgIGF1dG9TbGlkZVBsYXllciA9IG51bGw7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBhdXRvLXNsaWRlIGNvbnRyb2xzIGlmIG5lZWRlZFxuICBpZiggbnVtYmVyT2ZTbGlkZXMgPiAxICYmIGNvbmZpZy5hdXRvU2xpZGUgJiYgY29uZmlnLmF1dG9TbGlkZVN0b3BwYWJsZSAmJiBmZWF0dXJlcy5jYW52YXMgJiYgZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lICkge1xuICAgIGF1dG9TbGlkZVBsYXllciA9IG5ldyBQbGF5YmFjayggZG9tLndyYXBwZXIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKCBNYXRoLm1heCggKCBEYXRlLm5vdygpIC0gYXV0b1NsaWRlU3RhcnRUaW1lICkgLyBhdXRvU2xpZGUsIDAgKSwgMSApO1xuICAgIH0gKTtcblxuICAgIGF1dG9TbGlkZVBsYXllci5vbiggJ2NsaWNrJywgb25BdXRvU2xpZGVQbGF5ZXJDbGljayApO1xuICAgIGF1dG9TbGlkZVBhdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gV2hlbiBmcmFnbWVudHMgYXJlIHR1cm5lZCBvZmYgdGhleSBzaG91bGQgYmUgdmlzaWJsZVxuICBpZiggY29uZmlnLmZyYWdtZW50cyA9PT0gZmFsc2UgKSB7XG4gICAgdG9BcnJheSggZG9tLnNsaWRlcy5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICB9ICk7XG4gIH1cblxuICAvLyBTbGlkZSBudW1iZXJzXG4gIHZhciBzbGlkZU51bWJlckRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmKCBjb25maWcuc2xpZGVOdW1iZXIgJiYgIWlzUHJpbnRpbmdQREYoKSApIHtcbiAgICBpZiggY29uZmlnLnNob3dTbGlkZU51bWJlciA9PT0gJ2FsbCcgKSB7XG4gICAgICBzbGlkZU51bWJlckRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBlbHNlIGlmKCBjb25maWcuc2hvd1NsaWRlTnVtYmVyID09PSAnc3BlYWtlcicgJiYgaXNTcGVha2VyTm90ZXMoKSApIHtcbiAgICAgIHNsaWRlTnVtYmVyRGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZG9tLnNsaWRlTnVtYmVyLnN0eWxlLmRpc3BsYXkgPSBzbGlkZU51bWJlckRpc3BsYXk7XG5cbiAgLy8gQWRkIHRoZSBuYXZpZ2F0aW9uIG1vZGUgdG8gdGhlIERPTSBzbyB3ZSBjYW4gYWRqdXN0IHN0eWxpbmdcbiAgaWYoIGNvbmZpZy5uYXZpZ2F0aW9uTW9kZSAhPT0gJ2RlZmF1bHQnICkge1xuICAgIGRvbS53cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2RhdGEtbmF2aWdhdGlvbi1tb2RlJywgY29uZmlnLm5hdmlnYXRpb25Nb2RlICk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9tLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCAnZGF0YS1uYXZpZ2F0aW9uLW1vZGUnICk7XG4gIH1cblxuICAvLyBEZWZpbmUgb3VyIGNvbnRleHR1YWwgbGlzdCBvZiBrZXlib2FyZCBzaG9ydGN1dHNcbiAgaWYoIGNvbmZpZy5uYXZpZ2F0aW9uTW9kZSA9PT0gJ2xpbmVhcicgKSB7XG4gICAga2V5Ym9hcmRTaG9ydGN1dHNbJyYjODU5NDsgICwgICYjODU5NTsgICwgIFNQQUNFICAsICBOICAsICBMICAsICBKJ10gPSAnTmV4dCBzbGlkZSc7XG4gICAga2V5Ym9hcmRTaG9ydGN1dHNbJyYjODU5MjsgICwgICYjODU5MzsgICwgIFAgICwgIEggICwgIEsnXSAgICAgICAgICAgPSAnUHJldmlvdXMgc2xpZGUnO1xuICB9XG4gIGVsc2Uge1xuICAgIGtleWJvYXJkU2hvcnRjdXRzWydOICAsICBTUEFDRSddICAgPSAnTmV4dCBzbGlkZSc7XG4gICAga2V5Ym9hcmRTaG9ydGN1dHNbJ1AnXSAgICAgICAgICAgICA9ICdQcmV2aW91cyBzbGlkZSc7XG4gICAga2V5Ym9hcmRTaG9ydGN1dHNbJyYjODU5MjsgICwgIEgnXSA9ICdOYXZpZ2F0ZSBsZWZ0JztcbiAgICBrZXlib2FyZFNob3J0Y3V0c1snJiM4NTk0OyAgLCAgTCddID0gJ05hdmlnYXRlIHJpZ2h0JztcbiAgICBrZXlib2FyZFNob3J0Y3V0c1snJiM4NTkzOyAgLCAgSyddID0gJ05hdmlnYXRlIHVwJztcbiAgICBrZXlib2FyZFNob3J0Y3V0c1snJiM4NTk1OyAgLCAgSiddID0gJ05hdmlnYXRlIGRvd24nO1xuICB9XG5cbiAga2V5Ym9hcmRTaG9ydGN1dHNbJ0hvbWUgICwgIFNoaWZ0ICYjODU5MjsnXSAgICAgICAgPSAnRmlyc3Qgc2xpZGUnO1xuICBrZXlib2FyZFNob3J0Y3V0c1snRW5kICAsICBTaGlmdCAmIzg1OTQ7J10gICAgICAgICA9ICdMYXN0IHNsaWRlJztcbiAga2V5Ym9hcmRTaG9ydGN1dHNbJ0IgICwgIC4nXSAgICAgICAgICAgICAgICAgICAgICAgPSAnUGF1c2UnO1xuICBrZXlib2FyZFNob3J0Y3V0c1snRiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdGdWxsc2NyZWVuJztcbiAga2V5Ym9hcmRTaG9ydGN1dHNbJ0VTQywgTyddICAgICAgICAgICAgICAgICAgICAgICAgPSAnU2xpZGUgb3ZlcnZpZXcnO1xuXG4gIHN5bmMoKTtcblxufVxuXG4vKipcbiAqIEJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gIGV2ZW50c0FyZUJvdW5kID0gdHJ1ZTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBvbldpbmRvd0hhc2hDaGFuZ2UsIGZhbHNlICk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG5cbiAgaWYoIGNvbmZpZy50b3VjaCApIHtcbiAgICBpZiggJ29ucG9pbnRlcmRvd24nIGluIHdpbmRvdyApIHtcbiAgICAgIC8vIFVzZSBXM0MgcG9pbnRlciBldmVudHNcbiAgICAgIGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XG4gICAgICBkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuICAgICAgZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuICAgIH1cbiAgICBlbHNlIGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgKSB7XG4gICAgICAvLyBJRSAxMCB1c2VzIHByZWZpeGVkIHZlcnNpb24gb2YgcG9pbnRlciBldmVudHNcbiAgICAgIGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJEb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcbiAgICAgIGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJNb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcbiAgICAgIGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJVcCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIEZhbGwgYmFjayB0byB0b3VjaCBldmVudHNcbiAgICAgIGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuICAgICAgZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuICAgICAgZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcbiAgICB9XG4gIH1cblxuICBpZiggY29uZmlnLmtleWJvYXJkICkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25Eb2N1bWVudEtleURvd24sIGZhbHNlICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXByZXNzJywgb25Eb2N1bWVudEtleVByZXNzLCBmYWxzZSApO1xuICB9XG5cbiAgaWYoIGNvbmZpZy5wcm9ncmVzcyAmJiBkb20ucHJvZ3Jlc3MgKSB7XG4gICAgZG9tLnByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJvZ3Jlc3NDbGlja2VkLCBmYWxzZSApO1xuICB9XG5cbiAgZG9tLnBhdXNlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCByZXN1bWUsIGZhbHNlICk7XG5cbiAgaWYoIGNvbmZpZy5mb2N1c0JvZHlPblBhZ2VWaXNpYmlsaXR5Q2hhbmdlICkge1xuICAgIHZhciB2aXNpYmlsaXR5Q2hhbmdlO1xuXG4gICAgaWYoICdoaWRkZW4nIGluIGRvY3VtZW50ICkge1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICB9XG4gICAgZWxzZSBpZiggJ21zSGlkZGVuJyBpbiBkb2N1bWVudCApIHtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICB9XG4gICAgZWxzZSBpZiggJ3dlYmtpdEhpZGRlbicgaW4gZG9jdW1lbnQgKSB7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgIH1cblxuICAgIGlmKCB2aXNpYmlsaXR5Q2hhbmdlICkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdmlzaWJpbGl0eUNoYW5nZSwgb25QYWdlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UgKTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0ZW4gdG8gYm90aCB0b3VjaCBhbmQgY2xpY2sgZXZlbnRzLCBpbiBjYXNlIHRoZSBkZXZpY2VcbiAgLy8gc3VwcG9ydHMgYm90aFxuICB2YXIgcG9pbnRlckV2ZW50cyA9IFsgJ3RvdWNoc3RhcnQnLCAnY2xpY2snIF07XG5cbiAgLy8gT25seSBzdXBwb3J0IHRvdWNoIGZvciBBbmRyb2lkLCBmaXhlcyBkb3VibGUgbmF2aWdhdGlvbnMgaW5cbiAgLy8gc3RvY2sgYnJvd3NlclxuICBpZiggVUEubWF0Y2goIC9hbmRyb2lkL2dpICkgKSB7XG4gICAgcG9pbnRlckV2ZW50cyA9IFsgJ3RvdWNoc3RhcnQnIF07XG4gIH1cblxuICBwb2ludGVyRXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZUxlZnRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG4gICAgZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVSaWdodENsaWNrZWQsIGZhbHNlICk7IH0gKTtcbiAgICBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVVwQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVQcmV2Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVOZXh0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICB9ICk7XG5cbn1cblxuLyoqXG4gKiBVbmJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuXG4gIGV2ZW50c0FyZUJvdW5kID0gZmFsc2U7XG5cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbkRvY3VtZW50S2V5RG93biwgZmFsc2UgKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXByZXNzJywgb25Eb2N1bWVudEtleVByZXNzLCBmYWxzZSApO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBvbldpbmRvd0hhc2hDaGFuZ2UsIGZhbHNlICk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG5cbiAgZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcbiAgZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcbiAgZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuXG4gIGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJEb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcbiAgZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlck1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuICBkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyVXAnLCBvblBvaW50ZXJVcCwgZmFsc2UgKTtcblxuICBkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcbiAgZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuICBkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXG4gIGRvbS5wYXVzZU92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgcmVzdW1lLCBmYWxzZSApO1xuXG4gIGlmICggY29uZmlnLnByb2dyZXNzICYmIGRvbS5wcm9ncmVzcyApIHtcbiAgICBkb20ucHJvZ3Jlc3MucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25Qcm9ncmVzc0NsaWNrZWQsIGZhbHNlICk7XG4gIH1cblxuICBbICd0b3VjaHN0YXJ0JywgJ2NsaWNrJyBdLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZUxlZnRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG4gICAgZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVSaWdodENsaWNrZWQsIGZhbHNlICk7IH0gKTtcbiAgICBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVVwQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVQcmV2Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICAgIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVOZXh0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuICB9ICk7XG5cbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBuZXcgcGx1Z2luIHdpdGggdGhpcyByZXZlYWwuanMgaW5zdGFuY2UuXG4gKlxuICogcmV2ZWFsLmpzIHdhaXRzIGZvciBhbGwgcmVnaXNlcmVkIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZVxuICogYmVmb3JlIGNvbnNpZGVyaW5nIGl0c2VsZiByZWFkeSwgYXMgbG9uZyBhcyB0aGUgcGx1Z2luXG4gKiBpcyByZWdpc3RlcmVkIGJlZm9yZSBjYWxsaW5nIGBSZXZlYWwuaW5pdGlhbGl6ZSgpYC5cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oIGlkLCBwbHVnaW4gKSB7XG5cbiAgaWYoIHBsdWdpbnNbaWRdID09PSB1bmRlZmluZWQgKSB7XG4gICAgcGx1Z2luc1tpZF0gPSBwbHVnaW47XG5cbiAgICAvLyBJZiBhIHBsdWdpbiBpcyByZWdpc3RlcmVkIGFmdGVyIHJldmVhbC5qcyBpcyBsb2FkZWQsXG4gICAgLy8gaW5pdGlhbGl6ZSBpdCByaWdodCBhd2F5XG4gICAgaWYoIGxvYWRlZCAmJiB0eXBlb2YgcGx1Z2luLmluaXQgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICBwbHVnaW4uaW5pdCgpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oICdyZXZlYWwuanM6IFwiJysgaWQgKydcIiBwbHVnaW4gaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkJyApO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzcGVjaWZpYyBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVW5pcXVlIHBsdWdpbiBpZGVudGlmaWVyXG4gKi9cbmZ1bmN0aW9uIGhhc1BsdWdpbiggaWQgKSB7XG5cbiAgcmV0dXJuICEhcGx1Z2luc1tpZF07XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcGVjaWZpYyBwbHVnaW4gaW5zdGFuY2UsIGlmIGEgcGx1Z2luXG4gKiB3aXRoIHRoZSBnaXZlbiBJRCBoYXMgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBVbmlxdWUgcGx1Z2luIGlkZW50aWZpZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UGx1Z2luKCBpZCApIHtcblxuICByZXR1cm4gcGx1Z2luc1tpZF07XG5cbn1cblxuLyoqXG4gKiBBZGQgYSBjdXN0b20ga2V5IGJpbmRpbmcgd2l0aCBvcHRpb25hbCBkZXNjcmlwdGlvbiB0b1xuICogYmUgYWRkZWQgdG8gdGhlIGhlbHAgc2NyZWVuLlxuICovXG5mdW5jdGlvbiBhZGRLZXlCaW5kaW5nKCBiaW5kaW5nLCBjYWxsYmFjayApIHtcblxuICBpZiggdHlwZW9mIGJpbmRpbmcgPT09ICdvYmplY3QnICYmIGJpbmRpbmcua2V5Q29kZSApIHtcbiAgICByZWdpc3RlcmVkS2V5QmluZGluZ3NbYmluZGluZy5rZXlDb2RlXSA9IHtcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGtleTogYmluZGluZy5rZXksXG4gICAgICBkZXNjcmlwdGlvbjogYmluZGluZy5kZXNjcmlwdGlvblxuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgcmVnaXN0ZXJlZEtleUJpbmRpbmdzW2JpbmRpbmddID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAga2V5OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGxcbiAgICB9O1xuICB9XG5cbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY3VzdG9tIGtleSBiaW5kaW5nLlxuICovXG5mdW5jdGlvbiByZW1vdmVLZXlCaW5kaW5nKCBrZXlDb2RlICkge1xuXG4gIGRlbGV0ZSByZWdpc3RlcmVkS2V5QmluZGluZ3Nba2V5Q29kZV07XG5cbn1cblxuLyoqXG4gKiBFeHRlbmQgb2JqZWN0IGEgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqIElmIHRoZXJlJ3MgYSBjb25mbGljdCwgb2JqZWN0IGIgdGFrZXMgcHJlY2VkZW5jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYVxuICogQHBhcmFtIHtvYmplY3R9IGJcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKCBhLCBiICkge1xuXG4gIGZvciggdmFyIGkgaW4gYiApIHtcbiAgICBhWyBpIF0gPSBiWyBpIF07XG4gIH1cblxuICByZXR1cm4gYTtcblxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB0YXJnZXQgb2JqZWN0IHRvIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSggbyApIHtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIG8gKTtcblxufVxuXG4vKipcbiAqIFV0aWxpdHkgZm9yIGRlc2VyaWFsaXppbmcgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSggdmFsdWUgKSB7XG5cbiAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKSB7XG4gICAgaWYoIHZhbHVlID09PSAnbnVsbCcgKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIGlmKCB2YWx1ZSA9PT0gJ3RydWUnICkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiggdmFsdWUgPT09ICdmYWxzZScgKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiggdmFsdWUubWF0Y2goIC9eLT9bXFxkXFwuXSskLyApICkgcmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG5cbn1cblxuLyoqXG4gKiBNZWFzdXJlcyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGJldHdlZW4gcG9pbnQgYVxuICogYW5kIHBvaW50IGIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGEgcG9pbnQgd2l0aCB4L3kgcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IGIgcG9pbnQgd2l0aCB4L3kgcHJvcGVydGllc1xuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VCZXR3ZWVuKCBhLCBiICkge1xuXG4gIHZhciBkeCA9IGEueCAtIGIueCxcbiAgICBkeSA9IGEueSAtIGIueTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KCBkeCpkeCArIGR5KmR5ICk7XG5cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgQ1NTIHRyYW5zZm9ybSB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zZm9ybVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1FbGVtZW50KCBlbGVtZW50LCB0cmFuc2Zvcm0gKSB7XG5cbiAgZWxlbWVudC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHRyYW5zZm9ybXMgdG8gdGhlIHNsaWRlcyBjb250YWluZXIuIFRoZSBjb250YWluZXJcbiAqIGlzIHRyYW5zZm9ybWVkIGZyb20gdHdvIHNlcGFyYXRlIHNvdXJjZXM6IGxheW91dCBhbmQgdGhlIG92ZXJ2aWV3XG4gKiBtb2RlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0cmFuc2Zvcm1zXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVNsaWRlcyggdHJhbnNmb3JtcyApIHtcblxuICAvLyBQaWNrIHVwIG5ldyB0cmFuc2Zvcm1zIGZyb20gYXJndW1lbnRzXG4gIGlmKCB0eXBlb2YgdHJhbnNmb3Jtcy5sYXlvdXQgPT09ICdzdHJpbmcnICkgc2xpZGVzVHJhbnNmb3JtLmxheW91dCA9IHRyYW5zZm9ybXMubGF5b3V0O1xuICBpZiggdHlwZW9mIHRyYW5zZm9ybXMub3ZlcnZpZXcgPT09ICdzdHJpbmcnICkgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ID0gdHJhbnNmb3Jtcy5vdmVydmlldztcblxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtcyB0byB0aGUgc2xpZGVzIGNvbnRhaW5lclxuICBpZiggc2xpZGVzVHJhbnNmb3JtLmxheW91dCApIHtcbiAgICB0cmFuc2Zvcm1FbGVtZW50KCBkb20uc2xpZGVzLCBzbGlkZXNUcmFuc2Zvcm0ubGF5b3V0ICsgJyAnICsgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ICk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdHJhbnNmb3JtRWxlbWVudCggZG9tLnNsaWRlcywgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ICk7XG4gIH1cblxufVxuXG4vKipcbiAqIEluamVjdHMgdGhlIGdpdmVuIENTUyBzdHlsZXMgaW50byB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpbmplY3RTdHlsZVNoZWV0KCB2YWx1ZSApIHtcblxuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIGlmKCB0YWcuc3R5bGVTaGVldCApIHtcbiAgICB0YWcuc3R5bGVTaGVldC5jc3NUZXh0ID0gdmFsdWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGFnLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdmFsdWUgKSApO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaGVhZCcgKVswXS5hcHBlbmRDaGlsZCggdGFnICk7XG5cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuXG4gKiBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGNoaWxkIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBUaGUgQ1NTIHNlbGVjdG9yIHRvIG1hdGNoXG4gKiB0aGUgcGFyZW50cyBhZ2FpbnN0XG4gKlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBtYXRjaGVkIHBhcmVudCBvciBudWxsXG4gKiBpZiBubyBtYXRjaGluZyBwYXJlbnQgd2FzIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3RQYXJlbnQoIHRhcmdldCwgc2VsZWN0b3IgKSB7XG5cbiAgdmFyIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gIHdoaWxlKCBwYXJlbnQgKSB7XG5cbiAgICAvLyBUaGVyZSdzIHNvbWUgb3ZlcmhlYWQgZG9pbmcgdGhpcyBlYWNoIHRpbWUsIHdlIGRvbid0XG4gICAgLy8gd2FudCB0byByZXdyaXRlIHRoZSBlbGVtZW50IHByb3RvdHlwZSBidXQgc2hvdWxkIHN0aWxsXG4gICAgLy8gYmUgZW5vdWdoIHRvIGZlYXR1cmUgZGV0ZWN0IG9uY2UgYXQgc3RhcnR1cC4uLlxuICAgIHZhciBtYXRjaGVzTWV0aG9kID0gcGFyZW50Lm1hdGNoZXMgfHwgcGFyZW50Lm1hdGNoZXNTZWxlY3RvciB8fCBwYXJlbnQubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvLyBJZiB3ZSBmaW5kIGEgbWF0Y2gsIHdlJ3JlIGFsbCBzZXRcbiAgICBpZiggbWF0Y2hlc01ldGhvZCAmJiBtYXRjaGVzTWV0aG9kLmNhbGwoIHBhcmVudCwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgLy8gS2VlcCBzZWFyY2hpbmdcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB2YXJpb3VzIGNvbG9yIGlucHV0IGZvcm1hdHMgdG8gYW4ge3I6MCxnOjAsYjowfSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvclxuICogQGV4YW1wbGVcbiAqIGNvbG9yVG9SZ2IoJyMwMDAnKTtcbiAqIEBleGFtcGxlXG4gKiBjb2xvclRvUmdiKCcjMDAwMDAwJyk7XG4gKiBAZXhhbXBsZVxuICogY29sb3JUb1JnYigncmdiKDAsMCwwKScpO1xuICogQGV4YW1wbGVcbiAqIGNvbG9yVG9SZ2IoJ3JnYmEoMCwwLDApJyk7XG4gKlxuICogQHJldHVybiB7e3I6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIFthXTogbnVtYmVyfXxudWxsfVxuICovXG5mdW5jdGlvbiBjb2xvclRvUmdiKCBjb2xvciApIHtcblxuICB2YXIgaGV4MyA9IGNvbG9yLm1hdGNoKCAvXiMoWzAtOWEtZl17M30pJC9pICk7XG4gIGlmKCBoZXgzICYmIGhleDNbMV0gKSB7XG4gICAgaGV4MyA9IGhleDNbMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMCApLCAxNiApICogMHgxMSxcbiAgICAgIGc6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMSApLCAxNiApICogMHgxMSxcbiAgICAgIGI6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMiApLCAxNiApICogMHgxMVxuICAgIH07XG4gIH1cblxuICB2YXIgaGV4NiA9IGNvbG9yLm1hdGNoKCAvXiMoWzAtOWEtZl17Nn0pJC9pICk7XG4gIGlmKCBoZXg2ICYmIGhleDZbMV0gKSB7XG4gICAgaGV4NiA9IGhleDZbMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50KCBoZXg2LnN1YnN0ciggMCwgMiApLCAxNiApLFxuICAgICAgZzogcGFyc2VJbnQoIGhleDYuc3Vic3RyKCAyLCAyICksIDE2ICksXG4gICAgICBiOiBwYXJzZUludCggaGV4Ni5zdWJzdHIoIDQsIDIgKSwgMTYgKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiID0gY29sb3IubWF0Y2goIC9ecmdiXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwpJC9pICk7XG4gIGlmKCByZ2IgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50KCByZ2JbMV0sIDEwICksXG4gICAgICBnOiBwYXJzZUludCggcmdiWzJdLCAxMCApLFxuICAgICAgYjogcGFyc2VJbnQoIHJnYlszXSwgMTAgKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiYSA9IGNvbG9yLm1hdGNoKCAvXnJnYmFcXHMqXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccypcXCxcXHMqKFtcXGRdK3xbXFxkXSouW1xcZF0rKVxccypcXCkkL2kgKTtcbiAgaWYoIHJnYmEgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50KCByZ2JhWzFdLCAxMCApLFxuICAgICAgZzogcGFyc2VJbnQoIHJnYmFbMl0sIDEwICksXG4gICAgICBiOiBwYXJzZUludCggcmdiYVszXSwgMTAgKSxcbiAgICAgIGE6IHBhcnNlRmxvYXQoIHJnYmFbNF0gKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcblxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYnJpZ2h0bmVzcyBvbiBhIHNjYWxlIG9mIDAtMjU1LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciBTZWUgY29sb3JUb1JnYiBmb3Igc3VwcG9ydGVkIGZvcm1hdHMuXG4gKiBAc2VlIHtAbGluayBjb2xvclRvUmdifVxuICovXG5mdW5jdGlvbiBjb2xvckJyaWdodG5lc3MoIGNvbG9yICkge1xuXG4gIGlmKCB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICkgY29sb3IgPSBjb2xvclRvUmdiKCBjb2xvciApO1xuXG4gIGlmKCBjb2xvciApIHtcbiAgICByZXR1cm4gKCBjb2xvci5yICogMjk5ICsgY29sb3IuZyAqIDU4NyArIGNvbG9yLmIgKiAxMTQgKSAvIDEwMDA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcblxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlbWFpbmluZyBoZWlnaHQgd2l0aGluIHRoZSBwYXJlbnQgb2YgdGhlXG4gKiB0YXJnZXQgZWxlbWVudC5cbiAqXG4gKiByZW1haW5pbmcgaGVpZ2h0ID0gWyBjb25maWd1cmVkIHBhcmVudCBoZWlnaHQgXSAtIFsgY3VycmVudCBwYXJlbnQgaGVpZ2h0IF1cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF1cbiAqL1xuZnVuY3Rpb24gZ2V0UmVtYWluaW5nSGVpZ2h0KCBlbGVtZW50LCBoZWlnaHQgKSB7XG5cbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG5cbiAgaWYoIGVsZW1lbnQgKSB7XG4gICAgdmFyIG5ld0hlaWdodCwgb2xkSGVpZ2h0ID0gZWxlbWVudC5zdHlsZS5oZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIC5zdHJldGNoIGVsZW1lbnQgaGVpZ2h0IHRvIDAgaW4gb3JkZXIgZmluZCB0aGUgaGVpZ2h0IG9mIGFsbFxuICAgIC8vIHRoZSBvdGhlciBlbGVtZW50c1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cbiAgICAvLyBJbiBPdmVydmlldyBtb2RlLCB0aGUgcGFyZW50ICguc2xpZGUpIGhlaWdodCBpcyBzZXQgb2YgNzAwcHguXG4gICAgLy8gUmVzdG9yZSBpdCB0ZW1wb3JhcmlseSB0byBpdHMgbmF0dXJhbCBoZWlnaHQuXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgIG5ld0hlaWdodCA9IGhlaWdodCAtIGVsZW1lbnQucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBvbGQgaGVpZ2h0LCBqdXN0IGluIGNhc2VcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArICdweCc7XG5cbiAgICAvLyBDbGVhciB0aGUgcGFyZW50ICguc2xpZGUpIGhlaWdodC4gLnJlbW92ZVByb3BlcnR5IHdvcmtzIGluIElFOStcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuXG4gICAgcmV0dXJuIG5ld0hlaWdodDtcbiAgfVxuXG4gIHJldHVybiBoZWlnaHQ7XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhpcyBpbnN0YW5jZSBpcyBiZWluZyB1c2VkIHRvIHByaW50IGEgUERGLlxuICovXG5mdW5jdGlvbiBpc1ByaW50aW5nUERGKCkge1xuXG4gIHJldHVybiAoIC9wcmludC1wZGYvZ2kgKS50ZXN0KCB3aW5kb3cubG9jYXRpb24uc2VhcmNoICk7XG5cbn1cblxuLyoqXG4gKiBIaWRlcyB0aGUgYWRkcmVzcyBiYXIgaWYgd2UncmUgb24gYSBtb2JpbGUgZGV2aWNlLlxuICovXG5mdW5jdGlvbiBoaWRlQWRkcmVzc0JhcigpIHtcblxuICBpZiggY29uZmlnLmhpZGVBZGRyZXNzQmFyICYmIGlzTW9iaWxlRGV2aWNlICkge1xuICAgIC8vIEV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyIHRoZSBhZGRyZXNzIGJhciB0byBoaWRlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgcmVtb3ZlQWRkcmVzc0JhciwgZmFsc2UgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgcmVtb3ZlQWRkcmVzc0JhciwgZmFsc2UgKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ2F1c2VzIHRoZSBhZGRyZXNzIGJhciB0byBoaWRlIG9uIG1vYmlsZSBkZXZpY2VzLFxuICogbW9yZSB2ZXJ0aWNhbCBzcGFjZSBmdHcuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUFkZHJlc3NCYXIoKSB7XG5cbiAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKCAwLCAxICk7XG4gIH0sIDEwICk7XG5cbn1cblxuLyoqXG4gKiBEaXNwYXRjaGVzIGFuIGV2ZW50IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBmcm9tIHRoZVxuICogcmV2ZWFsIERPTSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCB0eXBlLCBhcmdzICkge1xuXG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnSFRNTEV2ZW50cycsIDEsIDIgKTtcbiAgZXZlbnQuaW5pdEV2ZW50KCB0eXBlLCB0cnVlLCB0cnVlICk7XG4gIGV4dGVuZCggZXZlbnQsIGFyZ3MgKTtcbiAgZG9tLndyYXBwZXIuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblxuICAvLyBJZiB3ZSdyZSBpbiBhbiBpZnJhbWUsIHBvc3QgZWFjaCByZXZlYWwuanMgZXZlbnQgdG8gdGhlXG4gIC8vIHBhcmVudCB3aW5kb3cuIFVzZWQgYnkgdGhlIG5vdGVzIHBsdWdpblxuICBkaXNwYXRjaFBvc3RNZXNzYWdlKCB0eXBlICk7XG5cbn1cblxuLyoqXG4gKiBEaXNwYXRjaGVkIGEgcG9zdE1lc3NhZ2Ugb2YgdGhlIGdpdmVuIHR5cGUgZnJvbSBvdXIgd2luZG93LlxuICovXG5mdW5jdGlvbiBkaXNwYXRjaFBvc3RNZXNzYWdlKCB0eXBlLCBkYXRhICkge1xuXG4gIGlmKCBjb25maWcucG9zdE1lc3NhZ2VFdmVudHMgJiYgd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGYgKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICBuYW1lc3BhY2U6ICdyZXZlYWwnLFxuICAgICAgZXZlbnROYW1lOiB0eXBlLFxuICAgICAgc3RhdGU6IGdldFN0YXRlKClcbiAgICB9O1xuXG4gICAgZXh0ZW5kKCBtZXNzYWdlLCBkYXRhICk7XG5cbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKCBKU09OLnN0cmluZ2lmeSggbWVzc2FnZSApLCAnKicgKTtcbiAgfVxuXG59XG5cbi8qKlxuICogV3JhcCBhbGwgbGlua3MgaW4gM0QgZ29vZG5lc3MuXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZVJvbGxpbmdMaW5rcygpIHtcblxuICBpZiggZmVhdHVyZXMudHJhbnNmb3JtczNkICYmICEoICdtc1BlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlICkgKSB7XG4gICAgdmFyIGFuY2hvcnMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnIGEnICk7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gYW5jaG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBhbmNob3IgPSBhbmNob3JzW2ldO1xuXG4gICAgICBpZiggYW5jaG9yLnRleHRDb250ZW50ICYmICFhbmNob3IucXVlcnlTZWxlY3RvciggJyonICkgJiYgKCAhYW5jaG9yLmNsYXNzTmFtZSB8fCAhYW5jaG9yLmNsYXNzTGlzdC5jb250YWlucyggYW5jaG9yLCAncm9sbCcgKSApICkge1xuICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBhbmNob3IudGV4dCk7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYW5jaG9yLmlubmVySFRNTDtcblxuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCggJ3JvbGwnICk7XG4gICAgICAgIGFuY2hvci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogVW53cmFwIGFsbCAzRCBsaW5rcy5cbiAqL1xuZnVuY3Rpb24gZGlzYWJsZVJvbGxpbmdMaW5rcygpIHtcblxuICB2YXIgYW5jaG9ycyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiArICcgYS5yb2xsJyApO1xuXG4gIGZvciggdmFyIGkgPSAwLCBsZW4gPSBhbmNob3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBhbmNob3IgPSBhbmNob3JzW2ldO1xuICAgIHZhciBzcGFuID0gYW5jaG9yLnF1ZXJ5U2VsZWN0b3IoICdzcGFuJyApO1xuXG4gICAgaWYoIHNwYW4gKSB7XG4gICAgICBhbmNob3IuY2xhc3NMaXN0LnJlbW92ZSggJ3JvbGwnICk7XG4gICAgICBhbmNob3IuaW5uZXJIVE1MID0gc3Bhbi5pbm5lckhUTUw7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBCaW5kIHByZXZpZXcgZnJhbWUgbGlua3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj1hXSAtIHNlbGVjdG9yIGZvciBhbmNob3JzXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZVByZXZpZXdMaW5rcyggc2VsZWN0b3IgKSB7XG5cbiAgdmFyIGFuY2hvcnMgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciA/IHNlbGVjdG9yIDogJ2EnICkgKTtcblxuICBhbmNob3JzLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuICAgIGlmKCAvXihodHRwfHd3dykvZ2kudGVzdCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdocmVmJyApICkgKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJldmlld0xpbmtDbGlja2VkLCBmYWxzZSApO1xuICAgIH1cbiAgfSApO1xuXG59XG5cbi8qKlxuICogVW5iaW5kIHByZXZpZXcgZnJhbWUgbGlua3MuXG4gKi9cbmZ1bmN0aW9uIGRpc2FibGVQcmV2aWV3TGlua3MoIHNlbGVjdG9yICkge1xuXG4gIHZhciBhbmNob3JzID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgPyBzZWxlY3RvciA6ICdhJyApICk7XG5cbiAgYW5jaG9ycy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICBpZiggL14oaHR0cHx3d3cpL2dpLnRlc3QoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnaHJlZicgKSApICkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvblByZXZpZXdMaW5rQ2xpY2tlZCwgZmFsc2UgKTtcbiAgICB9XG4gIH0gKTtcblxufVxuXG4vKipcbiAqIE9wZW5zIGEgcHJldmlldyB3aW5kb3cgZm9yIHRoZSB0YXJnZXQgVVJMLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSB1cmwgZm9yIHByZXZpZXcgaWZyYW1lIHNyY1xuICovXG5mdW5jdGlvbiBzaG93UHJldmlldyggdXJsICkge1xuXG4gIGNsb3NlT3ZlcmxheSgpO1xuXG4gIGRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ292ZXJsYXknICk7XG4gIGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5LXByZXZpZXcnICk7XG4gIGRvbS53cmFwcGVyLmFwcGVuZENoaWxkKCBkb20ub3ZlcmxheSApO1xuXG4gIGRvbS5vdmVybGF5LmlubmVySFRNTCA9IFtcbiAgICAnPGhlYWRlcj4nLFxuICAgICc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImljb25cIj48L3NwYW4+PC9hPicsXG4gICAgJzxhIGNsYXNzPVwiZXh0ZXJuYWxcIiBocmVmPVwiJysgdXJsICsnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+PC9zcGFuPjwvYT4nLFxuICAgICc8L2hlYWRlcj4nLFxuICAgICc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PicsXG4gICAgJzxkaXYgY2xhc3M9XCJ2aWV3cG9ydFwiPicsXG4gICAgJzxpZnJhbWUgc3JjPVwiJysgdXJsICsnXCI+PC9pZnJhbWU+JyxcbiAgICAnPHNtYWxsIGNsYXNzPVwidmlld3BvcnQtaW5uZXJcIj4nLFxuICAgICc8c3BhbiBjbGFzcz1cIngtZnJhbWUtZXJyb3JcIj5VbmFibGUgdG8gbG9hZCBpZnJhbWUuIFRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgc2l0ZVxcJ3MgcG9saWN5ICh4LWZyYW1lLW9wdGlvbnMpLjwvc3Bhbj4nLFxuICAgICc8L3NtYWxsPicsXG4gICAgJzwvZGl2PidcbiAgXS5qb2luKCcnKTtcblxuICBkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnaWZyYW1lJyApLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdsb2FkZWQnICk7XG4gIH0sIGZhbHNlICk7XG5cbiAgZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJy5jbG9zZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgY2xvc2VPdmVybGF5KCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSwgZmFsc2UgKTtcblxuICBkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnLmV4dGVybmFsJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBjbG9zZU92ZXJsYXkoKTtcbiAgfSwgZmFsc2UgKTtcblxuICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICBkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcbiAgfSwgMSApO1xuXG59XG5cbi8qKlxuICogT3BlbiBvciBjbG9zZSBoZWxwIG92ZXJsYXkgd2luZG93LlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW292ZXJyaWRlXSBGbGFnIHdoaWNoIG92ZXJyaWRlcyB0aGVcbiAqIHRvZ2dsZSBsb2dpYyBhbmQgZm9yY2libHkgc2V0cyB0aGUgZGVzaXJlZCBzdGF0ZS4gVHJ1ZSBtZWFuc1xuICogaGVscCBpcyBvcGVuLCBmYWxzZSBtZWFucyBpdCdzIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gdG9nZ2xlSGVscCggb3ZlcnJpZGUgKXtcblxuICBpZiggdHlwZW9mIG92ZXJyaWRlID09PSAnYm9vbGVhbicgKSB7XG4gICAgb3ZlcnJpZGUgPyBzaG93SGVscCgpIDogY2xvc2VPdmVybGF5KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYoIGRvbS5vdmVybGF5ICkge1xuICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2hvd0hlbHAoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBPcGVucyBhbiBvdmVybGF5IHdpbmRvdyB3aXRoIGhlbHAgbWF0ZXJpYWwuXG4gKi9cbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xuXG4gIGlmKCBjb25maWcuaGVscCApIHtcblxuICAgIGNsb3NlT3ZlcmxheSgpO1xuXG4gICAgZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5JyApO1xuICAgIGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5LWhlbHAnICk7XG4gICAgZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIGRvbS5vdmVybGF5ICk7XG5cbiAgICB2YXIgaHRtbCA9ICc8cCBjbGFzcz1cInRpdGxlXCI+S2V5Ym9hcmQgU2hvcnRjdXRzPC9wPjxici8+JztcblxuICAgIGh0bWwgKz0gJzx0YWJsZT48dGg+S0VZPC90aD48dGg+QUNUSU9OPC90aD4nO1xuICAgIGZvciggdmFyIGtleSBpbiBrZXlib2FyZFNob3J0Y3V0cyApIHtcbiAgICAgIGh0bWwgKz0gJzx0cj48dGQ+JyArIGtleSArICc8L3RkPjx0ZD4nICsga2V5Ym9hcmRTaG9ydGN1dHNbIGtleSBdICsgJzwvdGQ+PC90cj4nO1xuICAgIH1cblxuICAgIC8vIEFkZCBjdXN0b20ga2V5IGJpbmRpbmdzIHRoYXQgaGF2ZSBhc3NvY2lhdGVkIGRlc2NyaXB0aW9uc1xuICAgIGZvciggdmFyIGJpbmRpbmcgaW4gcmVnaXN0ZXJlZEtleUJpbmRpbmdzICkge1xuICAgICAgaWYoIHJlZ2lzdGVyZWRLZXlCaW5kaW5nc1tiaW5kaW5nXS5rZXkgJiYgcmVnaXN0ZXJlZEtleUJpbmRpbmdzW2JpbmRpbmddLmRlc2NyaXB0aW9uICkge1xuICAgICAgICBodG1sICs9ICc8dHI+PHRkPicgKyByZWdpc3RlcmVkS2V5QmluZGluZ3NbYmluZGluZ10ua2V5ICsgJzwvdGQ+PHRkPicgKyByZWdpc3RlcmVkS2V5QmluZGluZ3NbYmluZGluZ10uZGVzY3JpcHRpb24gKyAnPC90ZD48L3RyPic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaHRtbCArPSAnPC90YWJsZT4nO1xuXG4gICAgZG9tLm92ZXJsYXkuaW5uZXJIVE1MID0gW1xuICAgICAgJzxoZWFkZXI+JyxcbiAgICAgICc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImljb25cIj48L3NwYW4+PC9hPicsXG4gICAgICAnPC9oZWFkZXI+JyxcbiAgICAgICc8ZGl2IGNsYXNzPVwidmlld3BvcnRcIj4nLFxuICAgICAgJzxkaXYgY2xhc3M9XCJ2aWV3cG9ydC1pbm5lclwiPicrIGh0bWwgKyc8L2Rpdj4nLFxuICAgICAgJzwvZGl2PidcbiAgICBdLmpvaW4oJycpO1xuXG4gICAgZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJy5jbG9zZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgZmFsc2UgKTtcblxuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG4gICAgfSwgMSApO1xuXG4gIH1cblxufVxuXG4vKipcbiAqIENsb3NlcyBhbnkgY3VycmVudGx5IG9wZW4gb3ZlcmxheS5cbiAqL1xuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuXG4gIGlmKCBkb20ub3ZlcmxheSApIHtcbiAgICBkb20ub3ZlcmxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBkb20ub3ZlcmxheSApO1xuICAgIGRvbS5vdmVybGF5ID0gbnVsbDtcbiAgfVxuXG59XG5cbi8qKlxuICogQXBwbGllcyBKYXZhU2NyaXB0LWNvbnRyb2xsZWQgbGF5b3V0IHJ1bGVzIHRvIHRoZVxuICogcHJlc2VudGF0aW9uLlxuICovXG5mdW5jdGlvbiBsYXlvdXQoKSB7XG5cbiAgaWYoIGRvbS53cmFwcGVyICYmICFpc1ByaW50aW5nUERGKCkgKSB7XG5cbiAgICBpZiggIWNvbmZpZy5kaXNhYmxlTGF5b3V0ICkge1xuXG4gICAgICAvLyBPbiBzb21lIG1vYmlsZSBkZXZpY2VzICcxMDB2aCcgaXMgdGFsbGVyIHRoYW4gdGhlIHZpc2libGVcbiAgICAgIC8vIHZpZXdwb3J0IHdoaWNoIGxlYWRzIHRvIHBhcnQgb2YgdGhlIHByZXNlbnRhdGlvbiBiZWluZ1xuICAgICAgLy8gY3V0IG9mZi4gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBkZWZpbmUgb3VyIG93biAnLS12aCcgY3VzdG9tXG4gICAgICAvLyBwcm9wZXJ0eSB3aGVyZSAxMDB4IGFkZHMgdXAgdG8gdGhlIGNvcnJlY3QgaGVpZ2h0LlxuICAgICAgLy9cbiAgICAgIC8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdGhlLXRyaWNrLXRvLXZpZXdwb3J0LXVuaXRzLW9uLW1vYmlsZS9cbiAgICAgIGlmKCBpc01vYmlsZURldmljZSApIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCAnLS12aCcsICggd2luZG93LmlubmVySGVpZ2h0ICogMC4wMSApICsgJ3B4JyApO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2l6ZSA9IGdldENvbXB1dGVkU2xpZGVTaXplKCk7XG5cbiAgICAgIHZhciBvbGRTY2FsZSA9IHNjYWxlO1xuXG4gICAgICAvLyBMYXlvdXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzbGlkZXNcbiAgICAgIGxheW91dFNsaWRlQ29udGVudHMoIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCApO1xuXG4gICAgICBkb20uc2xpZGVzLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XG4gICAgICBkb20uc2xpZGVzLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgLy8gRGV0ZXJtaW5lIHNjYWxlIG9mIGNvbnRlbnQgdG8gZml0IHdpdGhpbiBhdmFpbGFibGUgc3BhY2VcbiAgICAgIHNjYWxlID0gTWF0aC5taW4oIHNpemUucHJlc2VudGF0aW9uV2lkdGggLyBzaXplLndpZHRoLCBzaXplLnByZXNlbnRhdGlvbkhlaWdodCAvIHNpemUuaGVpZ2h0ICk7XG5cbiAgICAgIC8vIFJlc3BlY3QgbWF4L21pbiBzY2FsZSBzZXR0aW5nc1xuICAgICAgc2NhbGUgPSBNYXRoLm1heCggc2NhbGUsIGNvbmZpZy5taW5TY2FsZSApO1xuICAgICAgc2NhbGUgPSBNYXRoLm1pbiggc2NhbGUsIGNvbmZpZy5tYXhTY2FsZSApO1xuXG4gICAgICAvLyBEb24ndCBhcHBseSBhbnkgc2NhbGluZyBzdHlsZXMgaWYgc2NhbGUgaXMgMVxuICAgICAgaWYoIHNjYWxlID09PSAxICkge1xuICAgICAgICBkb20uc2xpZGVzLnN0eWxlLnpvb20gPSAnJztcbiAgICAgICAgZG9tLnNsaWRlcy5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgIGRvbS5zbGlkZXMuc3R5bGUudG9wID0gJyc7XG4gICAgICAgIGRvbS5zbGlkZXMuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgICAgIGRvbS5zbGlkZXMuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgICAgdHJhbnNmb3JtU2xpZGVzKCB7IGxheW91dDogJycgfSApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFpvb20gU2NhbGluZ1xuICAgICAgICAvLyBDb250ZW50IHJlbWFpbnMgY3Jpc3Agbm8gbWF0dGVyIGhvdyBtdWNoIHdlIHNjYWxlLiBTaWRlXG4gICAgICAgIC8vIGVmZmVjdHMgYXJlIG1pbm9yIGRpZmZlcmVuY2VzIGluIHRleHQgbGF5b3V0IGFuZCBpZnJhbWVcbiAgICAgICAgLy8gdmlld3BvcnRzIGNoYW5naW5nIHNpemUuIEEgMjAweDIwMCBpZnJhbWUgdmlld3BvcnQgaW4gYVxuICAgICAgICAvLyAyeCB6b29tZWQgcHJlc2VudGF0aW9uIGVuZHMgdXAgaGF2aW5nIGEgNDAweDQwMCB2aWV3cG9ydC5cbiAgICAgICAgaWYoIHNjYWxlID4gMSAmJiBmZWF0dXJlcy56b29tICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiApIHtcbiAgICAgICAgICBkb20uc2xpZGVzLnN0eWxlLnpvb20gPSBzY2FsZTtcbiAgICAgICAgICBkb20uc2xpZGVzLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICBkb20uc2xpZGVzLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICAgIGRvbS5zbGlkZXMuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgICAgICAgZG9tLnNsaWRlcy5zdHlsZS5yaWdodCA9ICcnO1xuICAgICAgICAgIHRyYW5zZm9ybVNsaWRlcyggeyBsYXlvdXQ6ICcnIH0gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2Zvcm0gU2NhbGluZ1xuICAgICAgICAvLyBDb250ZW50IGxheW91dCByZW1haW5zIHRoZSBleGFjdCBzYW1lIHdoZW4gc2NhbGVkIHVwLlxuICAgICAgICAvLyBTaWRlIGVmZmVjdCBpcyBjb250ZW50IGJlY29taW5nIGJsdXJyZWQsIGVzcGVjaWFsbHkgd2l0aFxuICAgICAgICAvLyBoaWdoIHNjYWxlIHZhbHVlcyBvbiBsZHBpIHNjcmVlbnMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvbS5zbGlkZXMuc3R5bGUuem9vbSA9ICcnO1xuICAgICAgICAgIGRvbS5zbGlkZXMuc3R5bGUubGVmdCA9ICc1MCUnO1xuICAgICAgICAgIGRvbS5zbGlkZXMuc3R5bGUudG9wID0gJzUwJSc7XG4gICAgICAgICAgZG9tLnNsaWRlcy5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgZG9tLnNsaWRlcy5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgICAgICB0cmFuc2Zvcm1TbGlkZXMoIHsgbGF5b3V0OiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKCcrIHNjYWxlICsnKScgfSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCBhbGwgc2xpZGVzLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxuICAgICAgdmFyIHNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICk7XG5cbiAgICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgIHZhciBzbGlkZSA9IHNsaWRlc1sgaSBdO1xuXG4gICAgICAgIC8vIERvbid0IGJvdGhlciB1cGRhdGluZyBpbnZpc2libGUgc2xpZGVzXG4gICAgICAgIGlmKCBzbGlkZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggY29uZmlnLmNlbnRlciB8fCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdjZW50ZXInICkgKSB7XG4gICAgICAgICAgLy8gVmVydGljYWwgc3RhY2tzIGFyZSBub3QgY2VudHJlZCBzaW5jZSB0aGVpciBzZWN0aW9uXG4gICAgICAgICAgLy8gY2hpbGRyZW4gd2lsbCBiZVxuICAgICAgICAgIGlmKCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcbiAgICAgICAgICAgIHNsaWRlLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2xpZGUuc3R5bGUudG9wID0gTWF0aC5tYXgoICggc2l6ZS5oZWlnaHQgLSBzbGlkZS5zY3JvbGxIZWlnaHQgKSAvIDIsIDAgKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYoIG9sZFNjYWxlICE9PSBzY2FsZSApIHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudCggJ3Jlc2l6ZScsIHtcbiAgICAgICAgICAnb2xkU2NhbGUnOiBvbGRTY2FsZSxcbiAgICAgICAgICAnc2NhbGUnOiBzY2FsZSxcbiAgICAgICAgICAnc2l6ZSc6IHNpemVcbiAgICAgICAgfSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgdXBkYXRlUGFyYWxsYXgoKTtcblxuICAgIGlmKCBpc092ZXJ2aWV3KCkgKSB7XG4gICAgICB1cGRhdGVPdmVydmlldygpO1xuICAgIH1cblxuICB9XG5cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGxheW91dCBsb2dpYyB0byB0aGUgY29udGVudHMgb2YgYWxsIHNsaWRlcyBpblxuICogdGhlIHByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGhlaWdodFxuICovXG5mdW5jdGlvbiBsYXlvdXRTbGlkZUNvbnRlbnRzKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gIC8vIEhhbmRsZSBzaXppbmcgb2YgZWxlbWVudHMgd2l0aCB0aGUgJ3N0cmV0Y2gnIGNsYXNzXG4gIHRvQXJyYXkoIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24gPiAuc3RyZXRjaCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtdWNoIHZlcnRpY2FsIHNwYWNlIHdlIGNhbiB1c2VcbiAgICB2YXIgcmVtYWluaW5nSGVpZ2h0ID0gZ2V0UmVtYWluaW5nSGVpZ2h0KCBlbGVtZW50LCBoZWlnaHQgKTtcblxuICAgIC8vIENvbnNpZGVyIHRoZSBhc3BlY3QgcmF0aW8gb2YgbWVkaWEgZWxlbWVudHNcbiAgICBpZiggLyhpbWd8dmlkZW8pL2dpLnRlc3QoIGVsZW1lbnQubm9kZU5hbWUgKSApIHtcbiAgICAgIHZhciBudyA9IGVsZW1lbnQubmF0dXJhbFdpZHRoIHx8IGVsZW1lbnQudmlkZW9XaWR0aCxcbiAgICAgICAgbmggPSBlbGVtZW50Lm5hdHVyYWxIZWlnaHQgfHwgZWxlbWVudC52aWRlb0hlaWdodDtcblxuICAgICAgdmFyIGVzID0gTWF0aC5taW4oIHdpZHRoIC8gbncsIHJlbWFpbmluZ0hlaWdodCAvIG5oICk7XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAoIG53ICogZXMgKSArICdweCc7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICggbmggKiBlcyApICsgJ3B4JztcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHJlbWFpbmluZ0hlaWdodCArICdweCc7XG4gICAgfVxuXG4gIH0gKTtcblxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbXB1dGVkIHBpeGVsIHNpemUgb2Ygb3VyIHNsaWRlcy4gVGhlc2VcbiAqIHZhbHVlcyBhcmUgYmFzZWQgb24gdGhlIHdpZHRoIGFuZCBoZWlnaHQgY29uZmlndXJhdGlvblxuICogb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3ByZXNlbnRhdGlvbldpZHRoPWRvbS53cmFwcGVyLm9mZnNldFdpZHRoXVxuICogQHBhcmFtIHtudW1iZXJ9IFtwcmVzZW50YXRpb25IZWlnaHQ9ZG9tLndyYXBwZXIub2Zmc2V0SGVpZ2h0XVxuICovXG5mdW5jdGlvbiBnZXRDb21wdXRlZFNsaWRlU2l6ZSggcHJlc2VudGF0aW9uV2lkdGgsIHByZXNlbnRhdGlvbkhlaWdodCApIHtcblxuICB2YXIgc2l6ZSA9IHtcbiAgICAvLyBTbGlkZSBzaXplXG4gICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG5cbiAgICAvLyBQcmVzZW50YXRpb24gc2l6ZVxuICAgIHByZXNlbnRhdGlvbldpZHRoOiBwcmVzZW50YXRpb25XaWR0aCB8fCBkb20ud3JhcHBlci5vZmZzZXRXaWR0aCxcbiAgICBwcmVzZW50YXRpb25IZWlnaHQ6IHByZXNlbnRhdGlvbkhlaWdodCB8fCBkb20ud3JhcHBlci5vZmZzZXRIZWlnaHRcbiAgfTtcblxuICAvLyBSZWR1Y2UgYXZhaWxhYmxlIHNwYWNlIGJ5IG1hcmdpblxuICBzaXplLnByZXNlbnRhdGlvbldpZHRoIC09ICggc2l6ZS5wcmVzZW50YXRpb25XaWR0aCAqIGNvbmZpZy5tYXJnaW4gKTtcbiAgc2l6ZS5wcmVzZW50YXRpb25IZWlnaHQgLT0gKCBzaXplLnByZXNlbnRhdGlvbkhlaWdodCAqIGNvbmZpZy5tYXJnaW4gKTtcblxuICAvLyBTbGlkZSB3aWR0aCBtYXkgYmUgYSBwZXJjZW50YWdlIG9mIGF2YWlsYWJsZSB3aWR0aFxuICBpZiggdHlwZW9mIHNpemUud2lkdGggPT09ICdzdHJpbmcnICYmIC8lJC8udGVzdCggc2l6ZS53aWR0aCApICkge1xuICAgIHNpemUud2lkdGggPSBwYXJzZUludCggc2l6ZS53aWR0aCwgMTAgKSAvIDEwMCAqIHNpemUucHJlc2VudGF0aW9uV2lkdGg7XG4gIH1cblxuICAvLyBTbGlkZSBoZWlnaHQgbWF5IGJlIGEgcGVyY2VudGFnZSBvZiBhdmFpbGFibGUgaGVpZ2h0XG4gIGlmKCB0eXBlb2Ygc2l6ZS5oZWlnaHQgPT09ICdzdHJpbmcnICYmIC8lJC8udGVzdCggc2l6ZS5oZWlnaHQgKSApIHtcbiAgICBzaXplLmhlaWdodCA9IHBhcnNlSW50KCBzaXplLmhlaWdodCwgMTAgKSAvIDEwMCAqIHNpemUucHJlc2VudGF0aW9uSGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHNpemU7XG5cbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIHZlcnRpY2FsIGluZGV4IG9mIGEgc3RhY2sgc28gdGhhdCB0aGUgc2FtZVxuICogdmVydGljYWwgc2xpZGUgY2FuIGJlIHNlbGVjdGVkIHdoZW4gbmF2aWdhdGluZyB0byBhbmRcbiAqIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YWNrIFRoZSB2ZXJ0aWNhbCBzdGFjayBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt2PTBdIEluZGV4IHRvIG1lbW9yaXplXG4gKi9cbmZ1bmN0aW9uIHNldFByZXZpb3VzVmVydGljYWxJbmRleCggc3RhY2ssIHYgKSB7XG5cbiAgaWYoIHR5cGVvZiBzdGFjayA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHN0YWNrLnNldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBzdGFjay5zZXRBdHRyaWJ1dGUoICdkYXRhLXByZXZpb3VzLWluZGV4dicsIHYgfHwgMCApO1xuICB9XG5cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHZlcnRpY2FsIGluZGV4IHdoaWNoIHdhcyBzdG9yZWQgdXNpbmdcbiAqICNzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoKSBvciAwIGlmIG5vIHByZXZpb3VzIGluZGV4XG4gKiBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhY2sgVGhlIHZlcnRpY2FsIHN0YWNrIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBzdGFjayApIHtcblxuICBpZiggdHlwZW9mIHN0YWNrID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygc3RhY2suc2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nICYmIHN0YWNrLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuICAgIC8vIFByZWZlciBtYW51YWxseSBkZWZpbmVkIHN0YXJ0LWluZGV4dlxuICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gc3RhY2suaGFzQXR0cmlidXRlKCAnZGF0YS1zdGFydC1pbmRleHYnICkgPyAnZGF0YS1zdGFydC1pbmRleHYnIDogJ2RhdGEtcHJldmlvdXMtaW5kZXh2JztcblxuICAgIHJldHVybiBwYXJzZUludCggc3RhY2suZ2V0QXR0cmlidXRlKCBhdHRyaWJ1dGVOYW1lICkgfHwgMCwgMTAgKTtcbiAgfVxuXG4gIHJldHVybiAwO1xuXG59XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIG92ZXJ2aWV3IG9mIHNsaWRlcyAocXVpY2sgbmF2KSBieSBzY2FsaW5nXG4gKiBkb3duIGFuZCBhcnJhbmdpbmcgYWxsIHNsaWRlIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhY3RpdmF0ZU92ZXJ2aWV3KCkge1xuXG4gIC8vIE9ubHkgcHJvY2VlZCBpZiBlbmFibGVkIGluIGNvbmZpZ1xuICBpZiggY29uZmlnLm92ZXJ2aWV3ICYmICFpc092ZXJ2aWV3KCkgKSB7XG5cbiAgICBvdmVydmlldyA9IHRydWU7XG5cbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnb3ZlcnZpZXcnICk7XG4gICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3LWRlYWN0aXZhdGluZycgKTtcblxuICAgIGlmKCBmZWF0dXJlcy5vdmVydmlld1RyYW5zaXRpb25zICkge1xuICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdvdmVydmlldy1hbmltYXRlZCcgKTtcbiAgICAgIH0sIDEgKTtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBhdXRvLXNsaWRlIHdoaWxlIGluIG92ZXJ2aWV3IG1vZGVcbiAgICBjYW5jZWxBdXRvU2xpZGUoKTtcblxuICAgIC8vIE1vdmUgdGhlIGJhY2tncm91bmRzIGVsZW1lbnQgaW50byB0aGUgc2xpZGUgY29udGFpbmVyIHRvXG4gICAgLy8gdGhhdCB0aGUgc2FtZSBzY2FsaW5nIGlzIGFwcGxpZWRcbiAgICBkb20uc2xpZGVzLmFwcGVuZENoaWxkKCBkb20uYmFja2dyb3VuZCApO1xuXG4gICAgLy8gQ2xpY2tpbmcgb24gYW4gb3ZlcnZpZXcgc2xpZGUgbmF2aWdhdGVzIHRvIGl0XG4gICAgdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG4gICAgICBpZiggIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuICAgICAgICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvbk92ZXJ2aWV3U2xpZGVDbGlja2VkLCB0cnVlICk7XG4gICAgICB9XG4gICAgfSApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHNsaWRlIHNpemVzXG4gICAgdmFyIG1hcmdpbiA9IDcwO1xuICAgIHZhciBzbGlkZVNpemUgPSBnZXRDb21wdXRlZFNsaWRlU2l6ZSgpO1xuICAgIG92ZXJ2aWV3U2xpZGVXaWR0aCA9IHNsaWRlU2l6ZS53aWR0aCArIG1hcmdpbjtcbiAgICBvdmVydmlld1NsaWRlSGVpZ2h0ID0gc2xpZGVTaXplLmhlaWdodCArIG1hcmdpbjtcblxuICAgIC8vIFJldmVyc2UgaW4gUlRMIG1vZGVcbiAgICBpZiggY29uZmlnLnJ0bCApIHtcbiAgICAgIG92ZXJ2aWV3U2xpZGVXaWR0aCA9IC1vdmVydmlld1NsaWRlV2lkdGg7XG4gICAgfVxuXG4gICAgdXBkYXRlU2xpZGVzVmlzaWJpbGl0eSgpO1xuICAgIGxheW91dE92ZXJ2aWV3KCk7XG4gICAgdXBkYXRlT3ZlcnZpZXcoKTtcblxuICAgIGxheW91dCgpO1xuXG4gICAgLy8gTm90aWZ5IG9ic2VydmVycyBvZiB0aGUgb3ZlcnZpZXcgc2hvd2luZ1xuICAgIGRpc3BhdGNoRXZlbnQoICdvdmVydmlld3Nob3duJywge1xuICAgICAgJ2luZGV4aCc6IGluZGV4aCxcbiAgICAgICdpbmRleHYnOiBpbmRleHYsXG4gICAgICAnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlXG4gICAgfSApO1xuXG4gIH1cblxufVxuXG4vKipcbiAqIFVzZXMgQ1NTIHRyYW5zZm9ybXMgdG8gcG9zaXRpb24gYWxsIHNsaWRlcyBpbiBhIGdyaWQgZm9yXG4gKiBkaXNwbGF5IGluc2lkZSBvZiB0aGUgb3ZlcnZpZXcgbW9kZS5cbiAqL1xuZnVuY3Rpb24gbGF5b3V0T3ZlcnZpZXcoKSB7XG5cbiAgLy8gTGF5b3V0IHNsaWRlc1xuICB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIGhzbGlkZSwgaCApIHtcbiAgICBoc2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJywgaCApO1xuICAgIHRyYW5zZm9ybUVsZW1lbnQoIGhzbGlkZSwgJ3RyYW5zbGF0ZTNkKCcgKyAoIGggKiBvdmVydmlld1NsaWRlV2lkdGggKSArICdweCwgMCwgMCknICk7XG5cbiAgICBpZiggaHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXG4gICAgICB0b0FycmF5KCBoc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggdnNsaWRlLCB2ICkge1xuICAgICAgICB2c2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJywgaCApO1xuICAgICAgICB2c2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC12JywgdiApO1xuXG4gICAgICAgIHRyYW5zZm9ybUVsZW1lbnQoIHZzbGlkZSwgJ3RyYW5zbGF0ZTNkKDAsICcgKyAoIHYgKiBvdmVydmlld1NsaWRlSGVpZ2h0ICkgKyAncHgsIDApJyApO1xuICAgICAgfSApO1xuXG4gICAgfVxuICB9ICk7XG5cbiAgLy8gTGF5b3V0IHNsaWRlIGJhY2tncm91bmRzXG4gIHRvQXJyYXkoIGRvbS5iYWNrZ3JvdW5kLmNoaWxkTm9kZXMgKS5mb3JFYWNoKCBmdW5jdGlvbiggaGJhY2tncm91bmQsIGggKSB7XG4gICAgdHJhbnNmb3JtRWxlbWVudCggaGJhY2tncm91bmQsICd0cmFuc2xhdGUzZCgnICsgKCBoICogb3ZlcnZpZXdTbGlkZVdpZHRoICkgKyAncHgsIDAsIDApJyApO1xuXG4gICAgdG9BcnJheSggaGJhY2tncm91bmQucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIHZiYWNrZ3JvdW5kLCB2ICkge1xuICAgICAgdHJhbnNmb3JtRWxlbWVudCggdmJhY2tncm91bmQsICd0cmFuc2xhdGUzZCgwLCAnICsgKCB2ICogb3ZlcnZpZXdTbGlkZUhlaWdodCApICsgJ3B4LCAwKScgKTtcbiAgICB9ICk7XG4gIH0gKTtcblxufVxuXG4vKipcbiAqIE1vdmVzIHRoZSBvdmVydmlldyB2aWV3cG9ydCB0byB0aGUgY3VycmVudCBzbGlkZXMuXG4gKiBDYWxsZWQgZWFjaCB0aW1lIHRoZSBjdXJyZW50IHNsaWRlIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU92ZXJ2aWV3KCkge1xuXG4gIHZhciB2bWluID0gTWF0aC5taW4oIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgdmFyIHNjYWxlID0gTWF0aC5tYXgoIHZtaW4gLyA1LCAxNTAgKSAvIHZtaW47XG5cbiAgdHJhbnNmb3JtU2xpZGVzKCB7XG4gICAgb3ZlcnZpZXc6IFtcbiAgICAgICdzY2FsZSgnKyBzY2FsZSArJyknLFxuICAgICAgJ3RyYW5zbGF0ZVgoJysgKCAtaW5kZXhoICogb3ZlcnZpZXdTbGlkZVdpZHRoICkgKydweCknLFxuICAgICAgJ3RyYW5zbGF0ZVkoJysgKCAtaW5kZXh2ICogb3ZlcnZpZXdTbGlkZUhlaWdodCApICsncHgpJ1xuICAgIF0uam9pbiggJyAnIClcbiAgfSApO1xuXG59XG5cbi8qKlxuICogRXhpdHMgdGhlIHNsaWRlIG92ZXJ2aWV3IGFuZCBlbnRlcnMgdGhlIGN1cnJlbnRseVxuICogYWN0aXZlIHNsaWRlLlxuICovXG5mdW5jdGlvbiBkZWFjdGl2YXRlT3ZlcnZpZXcoKSB7XG5cbiAgLy8gT25seSBwcm9jZWVkIGlmIGVuYWJsZWQgaW4gY29uZmlnXG4gIGlmKCBjb25maWcub3ZlcnZpZXcgKSB7XG5cbiAgICBvdmVydmlldyA9IGZhbHNlO1xuXG4gICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3JyApO1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdvdmVydmlldy1hbmltYXRlZCcgKTtcblxuICAgIC8vIFRlbXBvcmFyaWx5IGFkZCBhIGNsYXNzIHNvIHRoYXQgdHJhbnNpdGlvbnMgY2FuIGRvIGRpZmZlcmVudCB0aGluZ3NcbiAgICAvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGV5IGFyZSBleGl0aW5nL2VudGVyaW5nIG92ZXJ2aWV3LCBvciBqdXN0XG4gICAgLy8gbW92aW5nIGZyb20gc2xpZGUgdG8gc2xpZGVcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnb3ZlcnZpZXctZGVhY3RpdmF0aW5nJyApO1xuXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3LWRlYWN0aXZhdGluZycgKTtcbiAgICB9LCAxICk7XG5cbiAgICAvLyBNb3ZlIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQgYmFjayBvdXRcbiAgICBkb20ud3JhcHBlci5hcHBlbmRDaGlsZCggZG9tLmJhY2tncm91bmQgKTtcblxuICAgIC8vIENsZWFuIHVwIGNoYW5nZXMgbWFkZSB0byBzbGlkZXNcbiAgICB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcbiAgICAgIHRyYW5zZm9ybUVsZW1lbnQoIHNsaWRlLCAnJyApO1xuXG4gICAgICBzbGlkZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvbk92ZXJ2aWV3U2xpZGVDbGlja2VkLCB0cnVlICk7XG4gICAgfSApO1xuXG4gICAgLy8gQ2xlYW4gdXAgY2hhbmdlcyBtYWRlIHRvIGJhY2tncm91bmRzXG4gICAgdG9BcnJheSggZG9tLmJhY2tncm91bmQucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGJhY2tncm91bmQgKSB7XG4gICAgICB0cmFuc2Zvcm1FbGVtZW50KCBiYWNrZ3JvdW5kLCAnJyApO1xuICAgIH0gKTtcblxuICAgIHRyYW5zZm9ybVNsaWRlcyggeyBvdmVydmlldzogJycgfSApO1xuXG4gICAgc2xpZGUoIGluZGV4aCwgaW5kZXh2ICk7XG5cbiAgICBsYXlvdXQoKTtcblxuICAgIGN1ZUF1dG9TbGlkZSgpO1xuXG4gICAgLy8gTm90aWZ5IG9ic2VydmVycyBvZiB0aGUgb3ZlcnZpZXcgaGlkaW5nXG4gICAgZGlzcGF0Y2hFdmVudCggJ292ZXJ2aWV3aGlkZGVuJywge1xuICAgICAgJ2luZGV4aCc6IGluZGV4aCxcbiAgICAgICdpbmRleHYnOiBpbmRleHYsXG4gICAgICAnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlXG4gICAgfSApO1xuXG4gIH1cbn1cblxuLyoqXG4gKiBUb2dnbGVzIHRoZSBzbGlkZSBvdmVydmlldyBtb2RlIG9uIGFuZCBvZmYuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbb3ZlcnJpZGVdIEZsYWcgd2hpY2ggb3ZlcnJpZGVzIHRoZVxuICogdG9nZ2xlIGxvZ2ljIGFuZCBmb3JjaWJseSBzZXRzIHRoZSBkZXNpcmVkIHN0YXRlLiBUcnVlIG1lYW5zXG4gKiBvdmVydmlldyBpcyBvcGVuLCBmYWxzZSBtZWFucyBpdCdzIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gdG9nZ2xlT3ZlcnZpZXcoIG92ZXJyaWRlICkge1xuXG4gIGlmKCB0eXBlb2Ygb3ZlcnJpZGUgPT09ICdib29sZWFuJyApIHtcbiAgICBvdmVycmlkZSA/IGFjdGl2YXRlT3ZlcnZpZXcoKSA6IGRlYWN0aXZhdGVPdmVydmlldygpO1xuICB9XG4gIGVsc2Uge1xuICAgIGlzT3ZlcnZpZXcoKSA/IGRlYWN0aXZhdGVPdmVydmlldygpIDogYWN0aXZhdGVPdmVydmlldygpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG92ZXJ2aWV3IGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb3ZlcnZpZXcgaXMgYWN0aXZlLFxuICogZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzT3ZlcnZpZXcoKSB7XG5cbiAgcmV0dXJuIG92ZXJ2aWV3O1xuXG59XG5cbi8qKlxuICogUmV0dXJuIGEgaGFzaCBVUkwgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIGdpdmVuIHNsaWRlIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtzbGlkZT1jdXJyZW50U2xpZGVdIFRoZSBzbGlkZSB0byBsaW5rIHRvXG4gKi9cbmZ1bmN0aW9uIGxvY2F0aW9uSGFzaCggc2xpZGUgKSB7XG5cbiAgdmFyIHVybCA9ICcvJztcblxuICAvLyBBdHRlbXB0IHRvIGNyZWF0ZSBhIG5hbWVkIGxpbmsgYmFzZWQgb24gdGhlIHNsaWRlJ3MgSURcbiAgdmFyIHMgPSBzbGlkZSB8fCBjdXJyZW50U2xpZGU7XG4gIHZhciBpZCA9IHMgPyBzLmdldEF0dHJpYnV0ZSggJ2lkJyApIDogbnVsbDtcbiAgaWYoIGlkICkge1xuICAgIGlkID0gZW5jb2RlVVJJQ29tcG9uZW50KCBpZCApO1xuICB9XG5cbiAgdmFyIGluZGV4ID0gZ2V0SW5kaWNlcyggc2xpZGUgKTtcbiAgaWYoICFjb25maWcuZnJhZ21lbnRJblVSTCApIHtcbiAgICBpbmRleC5mID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gSWYgdGhlIGN1cnJlbnQgc2xpZGUgaGFzIGFuIElELCB1c2UgdGhhdCBhcyBhIG5hbWVkIGxpbmssXG4gIC8vIGJ1dCB3ZSBkb24ndCBzdXBwb3J0IG5hbWVkIGxpbmtzIHdpdGggYSBmcmFnbWVudCBpbmRleFxuICBpZiggdHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiBpZC5sZW5ndGggJiYgaW5kZXguZiA9PT0gdW5kZWZpbmVkICkge1xuICAgIHVybCA9ICcvJyArIGlkO1xuICB9XG4gIC8vIE90aGVyd2lzZSB1c2UgdGhlIC9oL3YgaW5kZXhcbiAgZWxzZSB7XG4gICAgdmFyIGhhc2hJbmRleEJhc2UgPSBjb25maWcuaGFzaE9uZUJhc2VkSW5kZXggPyAxIDogMDtcbiAgICBpZiggaW5kZXguaCA+IDAgfHwgaW5kZXgudiA+IDAgfHwgaW5kZXguZiAhPT0gdW5kZWZpbmVkICkgdXJsICs9IGluZGV4LmggKyBoYXNoSW5kZXhCYXNlO1xuICAgIGlmKCBpbmRleC52ID4gMCB8fCBpbmRleC5mICE9PSB1bmRlZmluZWQgKSB1cmwgKz0gJy8nICsgKGluZGV4LnYgKyBoYXNoSW5kZXhCYXNlICk7XG4gICAgaWYoIGluZGV4LmYgIT09IHVuZGVmaW5lZCApIHVybCArPSAnLycgKyBpbmRleC5mO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcblxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBvciBzcGVjaWZpZWQgc2xpZGUgaXMgdmVydGljYWxcbiAqIChuZXN0ZWQgd2l0aGluIGFub3RoZXIgc2xpZGUpLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtzbGlkZT1jdXJyZW50U2xpZGVdIFRoZSBzbGlkZSB0byBjaGVja1xuICogb3JpZW50YXRpb24gb2ZcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmVydGljYWxTbGlkZSggc2xpZGUgKSB7XG5cbiAgLy8gUHJlZmVyIHNsaWRlIGFyZ3VtZW50LCBvdGhlcndpc2UgdXNlIGN1cnJlbnQgc2xpZGVcbiAgc2xpZGUgPSBzbGlkZSA/IHNsaWRlIDogY3VycmVudFNsaWRlO1xuXG4gIHJldHVybiBzbGlkZSAmJiBzbGlkZS5wYXJlbnROb2RlICYmICEhc2xpZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5tYXRjaCggL3NlY3Rpb24vaSApO1xuXG59XG5cbi8qKlxuICogSGFuZGxpbmcgdGhlIGZ1bGxzY3JlZW4gZnVuY3Rpb25hbGl0eSB2aWEgdGhlIGZ1bGxzY3JlZW4gQVBJXG4gKlxuICogQHNlZSBodHRwOi8vZnVsbHNjcmVlbi5zcGVjLndoYXR3Zy5vcmcvXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL1VzaW5nX2Z1bGxzY3JlZW5fbW9kZVxuICovXG5mdW5jdGlvbiBlbnRlckZ1bGxzY3JlZW4oKSB7XG5cbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLy8gQ2hlY2sgd2hpY2ggaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlXG4gIHZhciByZXF1ZXN0TWV0aG9kID0gZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbiB8fFxuICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4gfHxcbiAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbjtcblxuICBpZiggcmVxdWVzdE1ldGhvZCApIHtcbiAgICByZXF1ZXN0TWV0aG9kLmFwcGx5KCBlbGVtZW50ICk7XG4gIH1cblxufVxuXG4vKipcbiAqIFNob3dzIHRoZSBtb3VzZSBwb2ludGVyIGFmdGVyIGl0IGhhcyBiZWVuIGhpZGRlbiB3aXRoXG4gKiAjaGlkZUN1cnNvci5cbiAqL1xuZnVuY3Rpb24gc2hvd0N1cnNvcigpIHtcblxuICBpZiggY3Vyc29ySGlkZGVuICkge1xuICAgIGN1cnNvckhpZGRlbiA9IGZhbHNlO1xuICAgIGRvbS53cmFwcGVyLnN0eWxlLmN1cnNvciA9ICcnO1xuICB9XG5cbn1cblxuLyoqXG4gKiBIaWRlcyB0aGUgbW91c2UgcG9pbnRlciB3aGVuIGl0J3Mgb24gdG9wIG9mIHRoZSAucmV2ZWFsXG4gKiBjb250YWluZXIuXG4gKi9cbmZ1bmN0aW9uIGhpZGVDdXJzb3IoKSB7XG5cbiAgaWYoIGN1cnNvckhpZGRlbiA9PT0gZmFsc2UgKSB7XG4gICAgY3Vyc29ySGlkZGVuID0gdHJ1ZTtcbiAgICBkb20ud3JhcHBlci5zdHlsZS5jdXJzb3IgPSAnbm9uZSc7XG4gIH1cblxufVxuXG4vKipcbiAqIEVudGVycyB0aGUgcGF1c2VkIG1vZGUgd2hpY2ggZmFkZXMgZXZlcnl0aGluZyBvbiBzY3JlZW4gdG9cbiAqIGJsYWNrLlxuICovXG5mdW5jdGlvbiBwYXVzZSgpIHtcblxuICBpZiggY29uZmlnLnBhdXNlICkge1xuICAgIHZhciB3YXNQYXVzZWQgPSBkb20ud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdwYXVzZWQnICk7XG5cbiAgICBjYW5jZWxBdXRvU2xpZGUoKTtcbiAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAncGF1c2VkJyApO1xuXG4gICAgaWYoIHdhc1BhdXNlZCA9PT0gZmFsc2UgKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KCAncGF1c2VkJyApO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogRXhpdHMgZnJvbSB0aGUgcGF1c2VkIG1vZGUuXG4gKi9cbmZ1bmN0aW9uIHJlc3VtZSgpIHtcblxuICB2YXIgd2FzUGF1c2VkID0gZG9tLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGF1c2VkJyApO1xuICBkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAncGF1c2VkJyApO1xuXG4gIGN1ZUF1dG9TbGlkZSgpO1xuXG4gIGlmKCB3YXNQYXVzZWQgKSB7XG4gICAgZGlzcGF0Y2hFdmVudCggJ3Jlc3VtZWQnICk7XG4gIH1cblxufVxuXG4vKipcbiAqIFRvZ2dsZXMgdGhlIHBhdXNlZCBtb2RlIG9uIGFuZCBvZmYuXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVBhdXNlKCBvdmVycmlkZSApIHtcblxuICBpZiggdHlwZW9mIG92ZXJyaWRlID09PSAnYm9vbGVhbicgKSB7XG4gICAgb3ZlcnJpZGUgPyBwYXVzZSgpIDogcmVzdW1lKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaXNQYXVzZWQoKSA/IHJlc3VtZSgpIDogcGF1c2UoKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHdlIGFyZSBjdXJyZW50bHkgaW4gdGhlIHBhdXNlZCBtb2RlLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUGF1c2VkKCkge1xuXG4gIHJldHVybiBkb20ud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdwYXVzZWQnICk7XG5cbn1cblxuLyoqXG4gKiBUb2dnbGVzIHRoZSBhdXRvIHNsaWRlIG1vZGUgb24gYW5kIG9mZi5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvdmVycmlkZV0gRmxhZyB3aGljaCBzZXRzIHRoZSBkZXNpcmVkIHN0YXRlLlxuICogVHJ1ZSBtZWFucyBhdXRvcGxheSBzdGFydHMsIGZhbHNlIG1lYW5zIGl0IHN0b3BzLlxuICovXG5cbmZ1bmN0aW9uIHRvZ2dsZUF1dG9TbGlkZSggb3ZlcnJpZGUgKSB7XG5cbiAgaWYoIHR5cGVvZiBvdmVycmlkZSA9PT0gJ2Jvb2xlYW4nICkge1xuICAgIG92ZXJyaWRlID8gcmVzdW1lQXV0b1NsaWRlKCkgOiBwYXVzZUF1dG9TbGlkZSgpO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgYXV0b1NsaWRlUGF1c2VkID8gcmVzdW1lQXV0b1NsaWRlKCkgOiBwYXVzZUF1dG9TbGlkZSgpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGF1dG8gc2xpZGUgbW9kZSBpcyBjdXJyZW50bHkgb24uXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNBdXRvU2xpZGluZygpIHtcblxuICByZXR1cm4gISEoIGF1dG9TbGlkZSAmJiAhYXV0b1NsaWRlUGF1c2VkICk7XG5cbn1cblxuLyoqXG4gKiBTdGVwcyBmcm9tIHRoZSBjdXJyZW50IHBvaW50IGluIHRoZSBwcmVzZW50YXRpb24gdG8gdGhlXG4gKiBzbGlkZSB3aGljaCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWxcbiAqIGluZGljZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtoPWluZGV4aF0gSG9yaXpvbnRhbCBpbmRleCBvZiB0aGUgdGFyZ2V0IHNsaWRlXG4gKiBAcGFyYW0ge251bWJlcn0gW3Y9aW5kZXh2XSBWZXJ0aWNhbCBpbmRleCBvZiB0aGUgdGFyZ2V0IHNsaWRlXG4gKiBAcGFyYW0ge251bWJlcn0gW2ZdIEluZGV4IG9mIGEgZnJhZ21lbnQgd2l0aGluIHRoZVxuICogdGFyZ2V0IHNsaWRlIHRvIGFjdGl2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gW29dIE9yaWdpbiBmb3IgdXNlIGluIG11bHRpbWFzdGVyIGVudmlyb25tZW50c1xuICovXG5mdW5jdGlvbiBzbGlkZSggaCwgdiwgZiwgbyApIHtcblxuICAvLyBSZW1lbWJlciB3aGVyZSB3ZSB3ZXJlIGF0IGJlZm9yZVxuICBwcmV2aW91c1NsaWRlID0gY3VycmVudFNsaWRlO1xuXG4gIC8vIFF1ZXJ5IGFsbCBob3Jpem9udGFsIHNsaWRlcyBpbiB0aGUgZGVja1xuICB2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICk7XG5cbiAgLy8gQWJvcnQgaWYgdGhlcmUgYXJlIG5vIHNsaWRlc1xuICBpZiggaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGggPT09IDAgKSByZXR1cm47XG5cbiAgLy8gSWYgbm8gdmVydGljYWwgaW5kZXggaXMgc3BlY2lmaWVkIGFuZCB0aGUgdXBjb21pbmcgc2xpZGUgaXMgYVxuICAvLyBzdGFjaywgcmVzdW1lIGF0IGl0cyBwcmV2aW91cyB2ZXJ0aWNhbCBpbmRleFxuICBpZiggdiA9PT0gdW5kZWZpbmVkICYmICFpc092ZXJ2aWV3KCkgKSB7XG4gICAgdiA9IGdldFByZXZpb3VzVmVydGljYWxJbmRleCggaG9yaXpvbnRhbFNsaWRlc1sgaCBdICk7XG4gIH1cblxuICAvLyBJZiB3ZSB3ZXJlIG9uIGEgdmVydGljYWwgc3RhY2ssIHJlbWVtYmVyIHdoYXQgdmVydGljYWwgaW5kZXhcbiAgLy8gaXQgd2FzIG9uIHNvIHdlIGNhbiByZXN1bWUgYXQgdGhlIHNhbWUgcG9zaXRpb24gd2hlbiByZXR1cm5pbmdcbiAgaWYoIHByZXZpb3VzU2xpZGUgJiYgcHJldmlvdXNTbGlkZS5wYXJlbnROb2RlICYmIHByZXZpb3VzU2xpZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcbiAgICBzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIHByZXZpb3VzU2xpZGUucGFyZW50Tm9kZSwgaW5kZXh2ICk7XG4gIH1cblxuICAvLyBSZW1lbWJlciB0aGUgc3RhdGUgYmVmb3JlIHRoaXMgc2xpZGVcbiAgdmFyIHN0YXRlQmVmb3JlID0gc3RhdGUuY29uY2F0KCk7XG5cbiAgLy8gUmVzZXQgdGhlIHN0YXRlIGFycmF5XG4gIHN0YXRlLmxlbmd0aCA9IDA7XG5cbiAgdmFyIGluZGV4aEJlZm9yZSA9IGluZGV4aCB8fCAwLFxuICAgIGluZGV4dkJlZm9yZSA9IGluZGV4diB8fCAwO1xuXG4gIC8vIEFjdGl2YXRlIGFuZCB0cmFuc2l0aW9uIHRvIHRoZSBuZXcgc2xpZGVcbiAgaW5kZXhoID0gdXBkYXRlU2xpZGVzKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiwgaCA9PT0gdW5kZWZpbmVkID8gaW5kZXhoIDogaCApO1xuICBpbmRleHYgPSB1cGRhdGVTbGlkZXMoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiwgdiA9PT0gdW5kZWZpbmVkID8gaW5kZXh2IDogdiApO1xuXG4gIC8vIFVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiBzbGlkZXMgbm93IHRoYXQgdGhlIGluZGljZXMgaGF2ZSBjaGFuZ2VkXG4gIHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKTtcblxuICBsYXlvdXQoKTtcblxuICAvLyBVcGRhdGUgdGhlIG92ZXJ2aWV3IGlmIGl0J3MgY3VycmVudGx5IGFjdGl2ZVxuICBpZiggaXNPdmVydmlldygpICkge1xuICAgIHVwZGF0ZU92ZXJ2aWV3KCk7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBjdXJyZW50IGhvcml6b250YWwgc2xpZGUgYW5kIGFueSBwb3NzaWJsZSB2ZXJ0aWNhbCBzbGlkZXNcbiAgLy8gd2l0aGluIGl0XG4gIHZhciBjdXJyZW50SG9yaXpvbnRhbFNsaWRlID0gaG9yaXpvbnRhbFNsaWRlc1sgaW5kZXhoIF0sXG4gICAgY3VycmVudFZlcnRpY2FsU2xpZGVzID0gY3VycmVudEhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKTtcblxuICAvLyBTdG9yZSByZWZlcmVuY2VzIHRvIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBzbGlkZXNcbiAgY3VycmVudFNsaWRlID0gY3VycmVudFZlcnRpY2FsU2xpZGVzWyBpbmRleHYgXSB8fCBjdXJyZW50SG9yaXpvbnRhbFNsaWRlO1xuXG4gIC8vIFNob3cgZnJhZ21lbnQsIGlmIHNwZWNpZmllZFxuICBpZiggdHlwZW9mIGYgIT09ICd1bmRlZmluZWQnICkge1xuICAgIG5hdmlnYXRlRnJhZ21lbnQoIGYgKTtcbiAgfVxuXG4gIC8vIERpc3BhdGNoIGFuIGV2ZW50IGlmIHRoZSBzbGlkZSBjaGFuZ2VkXG4gIHZhciBzbGlkZUNoYW5nZWQgPSAoIGluZGV4aCAhPT0gaW5kZXhoQmVmb3JlIHx8IGluZGV4diAhPT0gaW5kZXh2QmVmb3JlICk7XG4gIGlmICghc2xpZGVDaGFuZ2VkKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIHByZXZpb3VzIHNsaWRlIGlzIG5ldmVyIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG4gICAgcHJldmlvdXNTbGlkZSA9IG51bGw7XG4gIH1cblxuICAvLyBTb2x2ZXMgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwcmV2aW91cyBzbGlkZSBtYWludGFpbnMgdGhlXG4gIC8vICdwcmVzZW50JyBjbGFzcyB3aGVuIG5hdmlnYXRpbmcgYmV0d2VlbiBhZGphY2VudCB2ZXJ0aWNhbFxuICAvLyBzdGFja3NcbiAgaWYoIHByZXZpb3VzU2xpZGUgJiYgcHJldmlvdXNTbGlkZSAhPT0gY3VycmVudFNsaWRlICkge1xuICAgIHByZXZpb3VzU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG4gICAgcHJldmlvdXNTbGlkZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXG4gICAgLy8gUmVzZXQgYWxsIHNsaWRlcyB1cG9uIG5hdmlnYXRlIHRvIGhvbWVcbiAgICAvLyBJc3N1ZTogIzI4NVxuICAgIGlmICggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvciggSE9NRV9TTElERV9TRUxFQ1RPUiApLmNsYXNzTGlzdC5jb250YWlucyggJ3ByZXNlbnQnICkgKSB7XG4gICAgICAvLyBMYXVuY2ggYXN5bmMgdGFza1xuICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKyAnLnN0YWNrJykgKSwgaTtcbiAgICAgICAgZm9yKCBpIGluIHNsaWRlcyApIHtcbiAgICAgICAgICBpZiggc2xpZGVzW2ldICkge1xuICAgICAgICAgICAgLy8gUmVzZXQgc3RhY2tcbiAgICAgICAgICAgIHNldFByZXZpb3VzVmVydGljYWxJbmRleCggc2xpZGVzW2ldLCAwICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwICk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgdGhlIG5ldyBzdGF0ZVxuICBzdGF0ZUxvb3A6IGZvciggdmFyIGkgPSAwLCBsZW4gPSBzdGF0ZS5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICAvLyBDaGVjayBpZiB0aGlzIHN0YXRlIGV4aXN0ZWQgb24gdGhlIHByZXZpb3VzIHNsaWRlLiBJZiBpdFxuICAgIC8vIGRpZCwgd2Ugd2lsbCBhdm9pZCBhZGRpbmcgaXQgcmVwZWF0ZWRseVxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgc3RhdGVCZWZvcmUubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggc3RhdGVCZWZvcmVbal0gPT09IHN0YXRlW2ldICkge1xuICAgICAgICBzdGF0ZUJlZm9yZS5zcGxpY2UoIGosIDEgKTtcbiAgICAgICAgY29udGludWUgc3RhdGVMb29wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBzdGF0ZVtpXSApO1xuXG4gICAgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IG1hdGNoaW5nIHRoZSBzdGF0ZSdzIG5hbWVcbiAgICBkaXNwYXRjaEV2ZW50KCBzdGF0ZVtpXSApO1xuICB9XG5cbiAgLy8gQ2xlYW4gdXAgdGhlIHJlbWFpbnMgb2YgdGhlIHByZXZpb3VzIHN0YXRlXG4gIHdoaWxlKCBzdGF0ZUJlZm9yZS5sZW5ndGggKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHN0YXRlQmVmb3JlLnBvcCgpICk7XG4gIH1cblxuICBpZiggc2xpZGVDaGFuZ2VkICkge1xuICAgIGRpc3BhdGNoRXZlbnQoICdzbGlkZWNoYW5nZWQnLCB7XG4gICAgICAnaW5kZXhoJzogaW5kZXhoLFxuICAgICAgJ2luZGV4dic6IGluZGV4dixcbiAgICAgICdwcmV2aW91c1NsaWRlJzogcHJldmlvdXNTbGlkZSxcbiAgICAgICdjdXJyZW50U2xpZGUnOiBjdXJyZW50U2xpZGUsXG4gICAgICAnb3JpZ2luJzogb1xuICAgIH0gKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSBlbWJlZGRlZCBjb250ZW50XG4gIGlmKCBzbGlkZUNoYW5nZWQgfHwgIXByZXZpb3VzU2xpZGUgKSB7XG4gICAgc3RvcEVtYmVkZGVkQ29udGVudCggcHJldmlvdXNTbGlkZSApO1xuICAgIHN0YXJ0RW1iZWRkZWRDb250ZW50KCBjdXJyZW50U2xpZGUgKTtcbiAgfVxuXG4gIC8vIEFubm91bmNlIHRoZSBjdXJyZW50IHNsaWRlIGNvbnRlbnRzLCBmb3Igc2NyZWVuIHJlYWRlcnNcbiAgZG9tLnN0YXR1c0Rpdi50ZXh0Q29udGVudCA9IGdldFN0YXR1c1RleHQoIGN1cnJlbnRTbGlkZSApO1xuXG4gIHVwZGF0ZUNvbnRyb2xzKCk7XG4gIHVwZGF0ZVByb2dyZXNzKCk7XG4gIHVwZGF0ZUJhY2tncm91bmQoKTtcbiAgdXBkYXRlUGFyYWxsYXgoKTtcbiAgdXBkYXRlU2xpZGVOdW1iZXIoKTtcbiAgdXBkYXRlTm90ZXMoKTtcbiAgdXBkYXRlRnJhZ21lbnRzKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBVUkwgaGFzaFxuICB3cml0ZVVSTCgpO1xuXG4gIGN1ZUF1dG9TbGlkZSgpO1xuXG59XG5cbi8qKlxuICogU3luY3MgdGhlIHByZXNlbnRhdGlvbiB3aXRoIHRoZSBjdXJyZW50IERPTS4gVXNlZnVsXG4gKiB3aGVuIG5ldyBzbGlkZXMgb3IgY29udHJvbCBlbGVtZW50cyBhcmUgYWRkZWQgb3Igd2hlblxuICogdGhlIGNvbmZpZ3VyYXRpb24gaGFzIGNoYW5nZWQuXG4gKi9cbmZ1bmN0aW9uIHN5bmMoKSB7XG5cbiAgLy8gU3Vic2NyaWJlIHRvIGlucHV0XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gRm9yY2UgYSBsYXlvdXQgdG8gbWFrZSBzdXJlIHRoZSBjdXJyZW50IGNvbmZpZyBpcyBhY2NvdW50ZWQgZm9yXG4gIGxheW91dCgpO1xuXG4gIC8vIFJlZmxlY3QgdGhlIGN1cnJlbnQgYXV0b1NsaWRlIHZhbHVlXG4gIGF1dG9TbGlkZSA9IGNvbmZpZy5hdXRvU2xpZGU7XG5cbiAgLy8gU3RhcnQgYXV0by1zbGlkaW5nIGlmIGl0J3MgZW5hYmxlZFxuICBjdWVBdXRvU2xpZGUoKTtcblxuICAvLyBSZS1jcmVhdGUgdGhlIHNsaWRlIGJhY2tncm91bmRzXG4gIGNyZWF0ZUJhY2tncm91bmRzKCk7XG5cbiAgLy8gV3JpdGUgdGhlIGN1cnJlbnQgaGFzaCB0byB0aGUgVVJMXG4gIHdyaXRlVVJMKCk7XG5cbiAgc29ydEFsbEZyYWdtZW50cygpO1xuXG4gIHVwZGF0ZUNvbnRyb2xzKCk7XG4gIHVwZGF0ZVByb2dyZXNzKCk7XG4gIHVwZGF0ZVNsaWRlTnVtYmVyKCk7XG4gIHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKTtcbiAgdXBkYXRlQmFja2dyb3VuZCggdHJ1ZSApO1xuICB1cGRhdGVOb3Rlc1Zpc2liaWxpdHkoKTtcbiAgdXBkYXRlTm90ZXMoKTtcblxuICBmb3JtYXRFbWJlZGRlZENvbnRlbnQoKTtcblxuICAvLyBTdGFydCBvciBzdG9wIGVtYmVkZGVkIGNvbnRlbnQgZGVwZW5kaW5nIG9uIGdsb2JhbCBjb25maWdcbiAgaWYoIGNvbmZpZy5hdXRvUGxheU1lZGlhID09PSBmYWxzZSApIHtcbiAgICBzdG9wRW1iZWRkZWRDb250ZW50KCBjdXJyZW50U2xpZGUsIHsgdW5sb2FkSWZyYW1lczogZmFsc2UgfSApO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXJ0RW1iZWRkZWRDb250ZW50KCBjdXJyZW50U2xpZGUgKTtcbiAgfVxuXG4gIGlmKCBpc092ZXJ2aWV3KCkgKSB7XG4gICAgbGF5b3V0T3ZlcnZpZXcoKTtcbiAgfVxuXG59XG5cbi8qKlxuICogVXBkYXRlcyByZXZlYWwuanMgdG8ga2VlcCBpbiBzeW5jIHdpdGggbmV3IHNsaWRlIGF0dHJpYnV0ZXMuIEZvclxuICogZXhhbXBsZSwgaWYgeW91IGFkZCBhIG5ldyBgZGF0YS1iYWNrZ3JvdW5kLWltYWdlYCB5b3UgY2FuIGNhbGxcbiAqIHRoaXMgdG8gaGF2ZSByZXZlYWwuanMgcmVuZGVyIHRoZSBuZXcgYmFja2dyb3VuZCBpbWFnZS5cbiAqXG4gKiBTaW1pbGFyIHRvICNzeW5jKCkgYnV0IG1vcmUgZWZmaWNpZW50IHdoZW4geW91IG9ubHkgbmVlZCB0b1xuICogcmVmcmVzaCBhIHNwZWNpZmljIHNsaWRlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlXG4gKi9cbmZ1bmN0aW9uIHN5bmNTbGlkZSggc2xpZGUgKSB7XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgY3VycmVudCBzbGlkZVxuICBzbGlkZSA9IHNsaWRlIHx8IGN1cnJlbnRTbGlkZTtcblxuICBzeW5jQmFja2dyb3VuZCggc2xpZGUgKTtcbiAgc3luY0ZyYWdtZW50cyggc2xpZGUgKTtcblxuICBsb2FkU2xpZGUoIHNsaWRlICk7XG5cbiAgdXBkYXRlQmFja2dyb3VuZCgpO1xuICB1cGRhdGVOb3RlcygpO1xuXG59XG5cbi8qKlxuICogRm9ybWF0cyB0aGUgZnJhZ21lbnRzIG9uIHRoZSBnaXZlbiBzbGlkZSBzbyB0aGF0IHRoZXkgaGF2ZVxuICogdmFsaWQgaW5kaWNlcy4gQ2FsbCB0aGlzIGlmIGZyYWdtZW50cyBhcmUgY2hhbmdlZCBpbiB0aGUgRE9NXG4gKiBhZnRlciByZXZlYWwuanMgaGFzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2xpZGVcbiAqIEByZXR1cm4ge0FycmF5fSBhIGxpc3Qgb2YgdGhlIEhUTUwgZnJhZ21lbnRzIHRoYXQgd2VyZSBzeW5jZWRcbiAqL1xuZnVuY3Rpb24gc3luY0ZyYWdtZW50cyggc2xpZGUgKSB7XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgY3VycmVudCBzbGlkZVxuICBzbGlkZSA9IHNsaWRlIHx8IGN1cnJlbnRTbGlkZTtcblxuICByZXR1cm4gc29ydEZyYWdtZW50cyggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG59XG5cbi8qKlxuICogUmVzZXRzIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgc28gdGhhdCBvbmx5IHRoZSBmaXJzdFxuICogaXMgdmlzaWJsZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRWZXJ0aWNhbFNsaWRlcygpIHtcblxuICB2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcbiAgaG9yaXpvbnRhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggaG9yaXpvbnRhbFNsaWRlICkge1xuXG4gICAgdmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG4gICAgdmVydGljYWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHZlcnRpY2FsU2xpZGUsIHkgKSB7XG5cbiAgICAgIGlmKCB5ID4gMCApIHtcbiAgICAgICAgdmVydGljYWxTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcbiAgICAgICAgdmVydGljYWxTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAncGFzdCcgKTtcbiAgICAgICAgdmVydGljYWxTbGlkZS5jbGFzc0xpc3QuYWRkKCAnZnV0dXJlJyApO1xuICAgICAgICB2ZXJ0aWNhbFNsaWRlLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG4gICAgICB9XG5cbiAgICB9ICk7XG5cbiAgfSApO1xuXG59XG5cbi8qKlxuICogU29ydHMgYW5kIGZvcm1hdHMgYWxsIG9mIGZyYWdtZW50cyBpbiB0aGVcbiAqIHByZXNlbnRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gc29ydEFsbEZyYWdtZW50cygpIHtcblxuICB2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcbiAgaG9yaXpvbnRhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggaG9yaXpvbnRhbFNsaWRlICkge1xuXG4gICAgdmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG4gICAgdmVydGljYWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHZlcnRpY2FsU2xpZGUsIHkgKSB7XG5cbiAgICAgIHNvcnRGcmFnbWVudHMoIHZlcnRpY2FsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG4gICAgfSApO1xuXG4gICAgaWYoIHZlcnRpY2FsU2xpZGVzLmxlbmd0aCA9PT0gMCApIHNvcnRGcmFnbWVudHMoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICk7XG5cbiAgfSApO1xuXG59XG5cbi8qKlxuICogUmFuZG9tbHkgc2h1ZmZsZXMgYWxsIHNsaWRlcyBpbiB0aGUgZGVjay5cbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcblxuICB2YXIgc2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApO1xuXG4gIHNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG5cbiAgICAvLyBJbnNlcnQgdGhpcyBzbGlkZSBuZXh0IHRvIGFub3RoZXIgcmFuZG9tIHNsaWRlLiBUaGlzIG1heVxuICAgIC8vIGNhdXNlIHRoZSBzbGlkZSB0byBpbnNlcnQgYmVmb3JlIGl0c2VsZiBidXQgdGhhdCdzIGZpbmUuXG4gICAgZG9tLnNsaWRlcy5pbnNlcnRCZWZvcmUoIHNsaWRlLCBzbGlkZXNbIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBzbGlkZXMubGVuZ3RoICkgXSApO1xuXG4gIH0gKTtcblxufVxuXG4vKipcbiAqIFVwZGF0ZXMgb25lIGRpbWVuc2lvbiBvZiBzbGlkZXMgYnkgc2hvd2luZyB0aGUgc2xpZGVcbiAqIHdpdGggdGhlIHNwZWNpZmllZCBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgQSBDU1Mgc2VsZWN0b3IgdGhhdCB3aWxsIGZldGNoXG4gKiB0aGUgZ3JvdXAgb2Ygc2xpZGVzIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRoYXQgc2hvdWxkIGJlXG4gKiBzaG93blxuICpcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBzbGlkZSB0aGF0IGlzIG5vdyBzaG93bixcbiAqIG1pZ2h0IGRpZmZlciBmcm9tIHRoZSBwYXNzZWQgaW4gaW5kZXggaWYgaXQgd2FzIG91dCBvZlxuICogYm91bmRzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXMoIHNlbGVjdG9yLCBpbmRleCApIHtcblxuICAvLyBTZWxlY3QgYWxsIHNsaWRlcyBhbmQgY29udmVydCB0aGUgTm9kZUxpc3QgcmVzdWx0IHRvXG4gIC8vIGFuIGFycmF5XG4gIHZhciBzbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApICksXG4gICAgc2xpZGVzTGVuZ3RoID0gc2xpZGVzLmxlbmd0aDtcblxuICB2YXIgcHJpbnRNb2RlID0gaXNQcmludGluZ1BERigpO1xuXG4gIGlmKCBzbGlkZXNMZW5ndGggKSB7XG5cbiAgICAvLyBTaG91bGQgdGhlIGluZGV4IGxvb3A/XG4gICAgaWYoIGNvbmZpZy5sb29wICkge1xuICAgICAgaW5kZXggJT0gc2xpZGVzTGVuZ3RoO1xuXG4gICAgICBpZiggaW5kZXggPCAwICkge1xuICAgICAgICBpbmRleCA9IHNsaWRlc0xlbmd0aCArIGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuZm9yY2UgbWF4IGFuZCBtaW5pbXVtIGluZGV4IGJvdW5kc1xuICAgIGluZGV4ID0gTWF0aC5tYXgoIE1hdGgubWluKCBpbmRleCwgc2xpZGVzTGVuZ3RoIC0gMSApLCAwICk7XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzbGlkZXNbaV07XG5cbiAgICAgIHZhciByZXZlcnNlID0gY29uZmlnLnJ0bCAmJiAhaXNWZXJ0aWNhbFNsaWRlKCBlbGVtZW50ICk7XG5cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3QnICk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnZnV0dXJlJyApO1xuXG4gICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lZGl0aW5nLmh0bWwjdGhlLWhpZGRlbi1hdHRyaWJ1dGVcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnaGlkZGVuJywgJycgKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblxuICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGNvbnRhaW5zIHZlcnRpY2FsIHNsaWRlc1xuICAgICAgaWYoIGVsZW1lbnQucXVlcnlTZWxlY3RvciggJ3NlY3Rpb24nICkgKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3N0YWNrJyApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBwcmludGluZyBzdGF0aWMgc2xpZGVzLCBhbGwgc2xpZGVzIGFyZSBcInByZXNlbnRcIlxuICAgICAgaWYoIHByaW50TW9kZSApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncHJlc2VudCcgKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCBpIDwgaW5kZXggKSB7XG4gICAgICAgIC8vIEFueSBlbGVtZW50IHByZXZpb3VzIHRvIGluZGV4IGlzIGdpdmVuIHRoZSAncGFzdCcgY2xhc3NcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCByZXZlcnNlID8gJ2Z1dHVyZScgOiAncGFzdCcgKTtcblxuICAgICAgICBpZiggY29uZmlnLmZyYWdtZW50cyApIHtcbiAgICAgICAgICAvLyBTaG93IGFsbCBmcmFnbWVudHMgaW4gcHJpb3Igc2xpZGVzXG4gICAgICAgICAgdG9BcnJheSggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuICAgICAgICAgICAgZnJhZ21lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG4gICAgICAgICAgICBmcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIGkgPiBpbmRleCApIHtcbiAgICAgICAgLy8gQW55IGVsZW1lbnQgc3Vic2VxdWVudCB0byBpbmRleCBpcyBnaXZlbiB0aGUgJ2Z1dHVyZScgY2xhc3NcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCByZXZlcnNlID8gJ3Bhc3QnIDogJ2Z1dHVyZScgKTtcblxuICAgICAgICBpZiggY29uZmlnLmZyYWdtZW50cyApIHtcbiAgICAgICAgICAvLyBIaWRlIGFsbCBmcmFnbWVudHMgaW4gZnV0dXJlIHNsaWRlc1xuICAgICAgICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuICAgICAgICAgICAgZnJhZ21lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Zpc2libGUnICk7XG4gICAgICAgICAgICBmcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXJrIHRoZSBjdXJyZW50IHNsaWRlIGFzIHByZXNlbnRcbiAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuICAgIHNsaWRlc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCAnaGlkZGVuJyApO1xuICAgIHNsaWRlc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nICk7XG5cbiAgICAvLyBJZiB0aGlzIHNsaWRlIGhhcyBhIHN0YXRlIGFzc29jaWF0ZWQgd2l0aCBpdCwgYWRkIGl0XG4gICAgLy8gb250byB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGVja1xuICAgIHZhciBzbGlkZVN0YXRlID0gc2xpZGVzW2luZGV4XS5nZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJyApO1xuICAgIGlmKCBzbGlkZVN0YXRlICkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5jb25jYXQoIHNsaWRlU3RhdGUuc3BsaXQoICcgJyApICk7XG4gICAgfVxuXG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIG5vIHNsaWRlcyB3ZSBjYW4ndCBiZSBhbnl3aGVyZSBiZXlvbmQgdGhlXG4gICAgLy8gemVyb3RoIGluZGV4XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xuXG59XG5cbi8qKlxuICogT3B0aW1pemF0aW9uIG1ldGhvZDsgaGlkZSBhbGwgc2xpZGVzIHRoYXQgYXJlIGZhciBhd2F5XG4gKiBmcm9tIHRoZSBwcmVzZW50IHNsaWRlLlxuICovXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNWaXNpYmlsaXR5KCkge1xuXG4gIC8vIFNlbGVjdCBhbGwgc2xpZGVzIGFuZCBjb252ZXJ0IHRoZSBOb2RlTGlzdCByZXN1bHQgdG9cbiAgLy8gYW4gYXJyYXlcbiAgdmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICksXG4gICAgaG9yaXpvbnRhbFNsaWRlc0xlbmd0aCA9IGhvcml6b250YWxTbGlkZXMubGVuZ3RoLFxuICAgIGRpc3RhbmNlWCxcbiAgICBkaXN0YW5jZVk7XG5cbiAgaWYoIGhvcml6b250YWxTbGlkZXNMZW5ndGggJiYgdHlwZW9mIGluZGV4aCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAvLyBUaGUgbnVtYmVyIG9mIHN0ZXBzIGF3YXkgZnJvbSB0aGUgcHJlc2VudCBzbGlkZSB0aGF0IHdpbGxcbiAgICAvLyBiZSB2aXNpYmxlXG4gICAgdmFyIHZpZXdEaXN0YW5jZSA9IGlzT3ZlcnZpZXcoKSA/IDEwIDogY29uZmlnLnZpZXdEaXN0YW5jZTtcblxuICAgIC8vIFNob3J0ZW4gdGhlIHZpZXcgZGlzdGFuY2Ugb24gZGV2aWNlcyB0aGF0IHR5cGljYWxseSBoYXZlXG4gICAgLy8gbGVzcyByZXNvdXJjZXNcbiAgICBpZiggaXNNb2JpbGVEZXZpY2UgKSB7XG4gICAgICB2aWV3RGlzdGFuY2UgPSBpc092ZXJ2aWV3KCkgPyA2IDogY29uZmlnLm1vYmlsZVZpZXdEaXN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBBbGwgc2xpZGVzIG5lZWQgdG8gYmUgdmlzaWJsZSB3aGVuIGV4cG9ydGluZyB0byBQREZcbiAgICBpZiggaXNQcmludGluZ1BERigpICkge1xuICAgICAgdmlld0Rpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB9XG5cbiAgICBmb3IoIHZhciB4ID0gMDsgeCA8IGhvcml6b250YWxTbGlkZXNMZW5ndGg7IHgrKyApIHtcbiAgICAgIHZhciBob3Jpem9udGFsU2xpZGUgPSBob3Jpem9udGFsU2xpZGVzW3hdO1xuXG4gICAgICB2YXIgdmVydGljYWxTbGlkZXMgPSB0b0FycmF5KCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKSxcbiAgICAgICAgdmVydGljYWxTbGlkZXNMZW5ndGggPSB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGg7XG5cbiAgICAgIC8vIERldGVybWluZSBob3cgZmFyIGF3YXkgdGhpcyBzbGlkZSBpcyBmcm9tIHRoZSBwcmVzZW50XG4gICAgICBkaXN0YW5jZVggPSBNYXRoLmFicyggKCBpbmRleGggfHwgMCApIC0geCApIHx8IDA7XG5cbiAgICAgIC8vIElmIHRoZSBwcmVzZW50YXRpb24gaXMgbG9vcGVkLCBkaXN0YW5jZSBzaG91bGQgbWVhc3VyZVxuICAgICAgLy8gMSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCBzbGlkZXNcbiAgICAgIGlmKCBjb25maWcubG9vcCApIHtcbiAgICAgICAgZGlzdGFuY2VYID0gTWF0aC5hYnMoICggKCBpbmRleGggfHwgMCApIC0geCApICUgKCBob3Jpem9udGFsU2xpZGVzTGVuZ3RoIC0gdmlld0Rpc3RhbmNlICkgKSB8fCAwO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IHRoZSBob3Jpem9udGFsIHNsaWRlIGlmIGl0J3Mgd2l0aGluIHRoZSB2aWV3IGRpc3RhbmNlXG4gICAgICBpZiggZGlzdGFuY2VYIDwgdmlld0Rpc3RhbmNlICkge1xuICAgICAgICBsb2FkU2xpZGUoIGhvcml6b250YWxTbGlkZSApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHVubG9hZFNsaWRlKCBob3Jpem9udGFsU2xpZGUgKTtcbiAgICAgIH1cblxuICAgICAgaWYoIHZlcnRpY2FsU2xpZGVzTGVuZ3RoICkge1xuXG4gICAgICAgIHZhciBveSA9IGdldFByZXZpb3VzVmVydGljYWxJbmRleCggaG9yaXpvbnRhbFNsaWRlICk7XG5cbiAgICAgICAgZm9yKCB2YXIgeSA9IDA7IHkgPCB2ZXJ0aWNhbFNsaWRlc0xlbmd0aDsgeSsrICkge1xuICAgICAgICAgIHZhciB2ZXJ0aWNhbFNsaWRlID0gdmVydGljYWxTbGlkZXNbeV07XG5cbiAgICAgICAgICBkaXN0YW5jZVkgPSB4ID09PSAoIGluZGV4aCB8fCAwICkgPyBNYXRoLmFicyggKCBpbmRleHYgfHwgMCApIC0geSApIDogTWF0aC5hYnMoIHkgLSBveSApO1xuXG4gICAgICAgICAgaWYoIGRpc3RhbmNlWCArIGRpc3RhbmNlWSA8IHZpZXdEaXN0YW5jZSApIHtcbiAgICAgICAgICAgIGxvYWRTbGlkZSggdmVydGljYWxTbGlkZSApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubG9hZFNsaWRlKCB2ZXJ0aWNhbFNsaWRlICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGbGFnIGlmIHRoZXJlIGFyZSBBTlkgdmVydGljYWwgc2xpZGVzLCBhbnl3aGVyZSBpbiB0aGUgZGVja1xuICAgIGlmKCBoYXNWZXJ0aWNhbFNsaWRlcygpICkge1xuICAgICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2hhcy12ZXJ0aWNhbC1zbGlkZXMnICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy12ZXJ0aWNhbC1zbGlkZXMnICk7XG4gICAgfVxuXG4gICAgLy8gRmxhZyBpZiB0aGVyZSBhcmUgQU5ZIGhvcml6b250YWwgc2xpZGVzLCBhbnl3aGVyZSBpbiB0aGUgZGVja1xuICAgIGlmKCBoYXNIb3Jpem9udGFsU2xpZGVzKCkgKSB7XG4gICAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnaGFzLWhvcml6b250YWwtc2xpZGVzJyApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtaG9yaXpvbnRhbC1zbGlkZXMnICk7XG4gICAgfVxuXG4gIH1cblxufVxuXG4vKipcbiAqIFBpY2sgdXAgbm90ZXMgZnJvbSB0aGUgY3VycmVudCBzbGlkZSBhbmQgZGlzcGxheSB0aGVtXG4gKiB0byB0aGUgdmlld2VyLlxuICpcbiAqIEBzZWUge0BsaW5rIGNvbmZpZy5zaG93Tm90ZXN9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU5vdGVzKCkge1xuXG4gIGlmKCBjb25maWcuc2hvd05vdGVzICYmIGRvbS5zcGVha2VyTm90ZXMgJiYgY3VycmVudFNsaWRlICYmICFpc1ByaW50aW5nUERGKCkgKSB7XG5cbiAgICBkb20uc3BlYWtlck5vdGVzLmlubmVySFRNTCA9IGdldFNsaWRlTm90ZXMoKSB8fCAnPHNwYW4gY2xhc3M9XCJub3Rlcy1wbGFjZWhvbGRlclwiPk5vIG5vdGVzIG9uIHRoaXMgc2xpZGUuPC9zcGFuPic7XG5cbiAgfVxuXG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgc3BlYWtlciBub3RlcyBzaWRlYmFyIHRoYXRcbiAqIGlzIHVzZWQgdG8gc2hhcmUgYW5ub3RhdGVkIHNsaWRlcy4gVGhlIG5vdGVzIHNpZGViYXIgaXNcbiAqIG9ubHkgdmlzaWJsZSBpZiBzaG93Tm90ZXMgaXMgdHJ1ZSBhbmQgdGhlcmUgYXJlIG5vdGVzIG9uXG4gKiBvbmUgb3IgbW9yZSBzbGlkZXMgaW4gdGhlIGRlY2suXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU5vdGVzVmlzaWJpbGl0eSgpIHtcblxuICBpZiggY29uZmlnLnNob3dOb3RlcyAmJiBoYXNOb3RlcygpICkge1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdzaG93LW5vdGVzJyApO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93LW5vdGVzJyApO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgYXJlIHNwZWFrZXIgbm90ZXMgZm9yIEFOWSBzbGlkZSBpbiB0aGVcbiAqIHByZXNlbnRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gaGFzTm90ZXMoKSB7XG5cbiAgcmV0dXJuIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLW5vdGVzXSwgYXNpZGUubm90ZXMnICkubGVuZ3RoID4gMDtcblxufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHByb2dyZXNzIGJhciB0byByZWZsZWN0IHRoZSBjdXJyZW50IHNsaWRlLlxuICovXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcblxuICAvLyBVcGRhdGUgcHJvZ3Jlc3MgaWYgZW5hYmxlZFxuICBpZiggY29uZmlnLnByb2dyZXNzICYmIGRvbS5wcm9ncmVzc2JhciApIHtcblxuICAgIGRvbS5wcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IGdldFByb2dyZXNzKCkgKiBkb20ud3JhcHBlci5vZmZzZXRXaWR0aCArICdweCc7XG5cbiAgfVxuXG59XG5cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzbGlkZSBudW1iZXIgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgc2xpZGUuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlTnVtYmVyKCkge1xuXG4gIC8vIFVwZGF0ZSBzbGlkZSBudW1iZXIgaWYgZW5hYmxlZFxuICBpZiggY29uZmlnLnNsaWRlTnVtYmVyICYmIGRvbS5zbGlkZU51bWJlciApIHtcbiAgICBkb20uc2xpZGVOdW1iZXIuaW5uZXJIVE1MID0gZ2V0U2xpZGVOdW1iZXIoKTtcbiAgfVxuXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgSFRNTCBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCBzbGlkZSBudW1iZXIsXG4gKiBpbmNsdWRpbmcgZm9ybWF0dGluZy5cbiAqL1xuZnVuY3Rpb24gZ2V0U2xpZGVOdW1iZXIoIHNsaWRlICkge1xuXG4gIHZhciB2YWx1ZTtcbiAgdmFyIGZvcm1hdCA9ICdoLnYnO1xuICBpZiggc2xpZGUgPT09IHVuZGVmaW5lZCApIHtcbiAgICBzbGlkZSA9IGN1cnJlbnRTbGlkZTtcbiAgfVxuXG4gIGlmICggdHlwZW9mIGNvbmZpZy5zbGlkZU51bWJlciA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICB2YWx1ZSA9IGNvbmZpZy5zbGlkZU51bWJlciggc2xpZGUgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDaGVjayBpZiBhIGN1c3RvbSBudW1iZXIgZm9ybWF0IGlzIGF2YWlsYWJsZVxuICAgIGlmKCB0eXBlb2YgY29uZmlnLnNsaWRlTnVtYmVyID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGZvcm1hdCA9IGNvbmZpZy5zbGlkZU51bWJlcjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgT05MWSB2ZXJ0aWNhbCBzbGlkZXMgaW4gdGhpcyBkZWNrLCBhbHdheXMgdXNlXG4gICAgLy8gYSBmbGF0dGVuZWQgc2xpZGUgbnVtYmVyXG4gICAgaWYoICEvYy8udGVzdCggZm9ybWF0ICkgJiYgZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKS5sZW5ndGggPT09IDEgKSB7XG4gICAgICBmb3JtYXQgPSAnYyc7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBbXTtcbiAgICBzd2l0Y2goIGZvcm1hdCApIHtcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICB2YWx1ZS5wdXNoKCBnZXRTbGlkZVBhc3RDb3VudCggc2xpZGUgKSArIDEgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjL3QnOlxuICAgICAgICB2YWx1ZS5wdXNoKCBnZXRTbGlkZVBhc3RDb3VudCggc2xpZGUgKSArIDEsICcvJywgZ2V0VG90YWxTbGlkZXMoKSApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciBpbmRpY2VzID0gZ2V0SW5kaWNlcyggc2xpZGUgKTtcbiAgICAgICAgdmFsdWUucHVzaCggaW5kaWNlcy5oICsgMSApO1xuICAgICAgICB2YXIgc2VwID0gZm9ybWF0ID09PSAnaC92JyA/ICcvJyA6ICcuJztcbiAgICAgICAgaWYoIGlzVmVydGljYWxTbGlkZSggc2xpZGUgKSApIHZhbHVlLnB1c2goIHNlcCwgaW5kaWNlcy52ICsgMSApO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1cmwgPSAnIycgKyBsb2NhdGlvbkhhc2goIHNsaWRlICk7XG4gIHJldHVybiBmb3JtYXRTbGlkZU51bWJlciggdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdXJsICk7XG5cbn1cblxuLyoqXG4gKiBBcHBsaWVzIEhUTUwgZm9ybWF0dGluZyB0byBhIHNsaWRlIG51bWJlciBiZWZvcmUgaXQnc1xuICogd3JpdHRlbiB0byB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIEN1cnJlbnQgc2xpZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgQ2hhcmFjdGVyIHRvIHNlcGFyYXRlIHNsaWRlIG51bWJlcnNcbiAqIEBwYXJhbSB7KG51bWJlcnwqKX0gYiBUb3RhbCBzbGlkZXNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFt1cmw9JyMnK2xvY2F0aW9uSGFzaCgpXSBUaGUgdXJsIHRvIGxpbmsgdG9cbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmcgZnJhZ21lbnRcbiAqL1xuZnVuY3Rpb24gZm9ybWF0U2xpZGVOdW1iZXIoIGEsIGRlbGltaXRlciwgYiwgdXJsICkge1xuXG4gIGlmKCB1cmwgPT09IHVuZGVmaW5lZCApIHtcbiAgICB1cmwgPSAnIycgKyBsb2NhdGlvbkhhc2goKTtcbiAgfVxuICBpZiggdHlwZW9mIGIgPT09ICdudW1iZXInICYmICFpc05hTiggYiApICkge1xuICAgIHJldHVybiAgJzxhIGhyZWY9XCInICsgdXJsICsgJ1wiPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2xpZGUtbnVtYmVyLWFcIj4nKyBhICsnPC9zcGFuPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2xpZGUtbnVtYmVyLWRlbGltaXRlclwiPicrIGRlbGltaXRlciArJzwvc3Bhbj4nICtcbiAgICAgICc8c3BhbiBjbGFzcz1cInNsaWRlLW51bWJlci1iXCI+JysgYiArJzwvc3Bhbj4nICtcbiAgICAgICc8L2E+JztcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgdXJsICsgJ1wiPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2xpZGUtbnVtYmVyLWFcIj4nKyBhICsnPC9zcGFuPicgK1xuICAgICAgJzwvYT4nO1xuICB9XG5cbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgY29udHJvbC9uYXZpZ2F0aW9uIGFycm93cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ29udHJvbHMoKSB7XG5cbiAgdmFyIHJvdXRlcyA9IGF2YWlsYWJsZVJvdXRlcygpO1xuICB2YXIgZnJhZ21lbnRzID0gYXZhaWxhYmxlRnJhZ21lbnRzKCk7XG5cbiAgLy8gUmVtb3ZlIHRoZSAnZW5hYmxlZCcgY2xhc3MgZnJvbSBhbGwgZGlyZWN0aW9uc1xuICBkb20uY29udHJvbHNMZWZ0LmNvbmNhdCggZG9tLmNvbnRyb2xzUmlnaHQgKVxuICAgIC5jb25jYXQoIGRvbS5jb250cm9sc1VwIClcbiAgICAuY29uY2F0KCBkb20uY29udHJvbHNEb3duIClcbiAgICAuY29uY2F0KCBkb20uY29udHJvbHNQcmV2IClcbiAgICAuY29uY2F0KCBkb20uY29udHJvbHNOZXh0ICkuZm9yRWFjaCggZnVuY3Rpb24oIG5vZGUgKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdlbmFibGVkJyApO1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnZnJhZ21lbnRlZCcgKTtcblxuICAgICAgLy8gU2V0ICdkaXNhYmxlZCcgYXR0cmlidXRlIG9uIGFsbCBkaXJlY3Rpb25zXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSggJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyApO1xuICAgIH0gKTtcblxuICAvLyBBZGQgdGhlICdlbmFibGVkJyBjbGFzcyB0byB0aGUgYXZhaWxhYmxlIHJvdXRlczsgcmVtb3ZlICdkaXNhYmxlZCcgYXR0cmlidXRlIHRvIGVuYWJsZSBidXR0b25zXG4gIGlmKCByb3V0ZXMubGVmdCApIGRvbS5jb250cm9sc0xlZnQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcbiAgaWYoIHJvdXRlcy5yaWdodCApIGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IGVsLnJlbW92ZUF0dHJpYnV0ZSggJ2Rpc2FibGVkJyApOyB9ICk7XG4gIGlmKCByb3V0ZXMudXAgKSBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApOyBlbC5yZW1vdmVBdHRyaWJ1dGUoICdkaXNhYmxlZCcgKTsgfSApO1xuICBpZiggcm91dGVzLmRvd24gKSBkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IGVsLnJlbW92ZUF0dHJpYnV0ZSggJ2Rpc2FibGVkJyApOyB9ICk7XG5cbiAgLy8gUHJldi9uZXh0IGJ1dHRvbnNcbiAgaWYoIHJvdXRlcy5sZWZ0IHx8IHJvdXRlcy51cCApIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcbiAgaWYoIHJvdXRlcy5yaWdodCB8fCByb3V0ZXMuZG93biApIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcblxuICAvLyBIaWdobGlnaHQgZnJhZ21lbnQgZGlyZWN0aW9uc1xuICBpZiggY3VycmVudFNsaWRlICkge1xuXG4gICAgLy8gQWx3YXlzIGFwcGx5IGZyYWdtZW50IGRlY29yYXRvciB0byBwcmV2L25leHQgYnV0dG9uc1xuICAgIGlmKCBmcmFnbWVudHMucHJldiApIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyBlbC5yZW1vdmVBdHRyaWJ1dGUoICdkaXNhYmxlZCcgKTsgfSApO1xuICAgIGlmKCBmcmFnbWVudHMubmV4dCApIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyBlbC5yZW1vdmVBdHRyaWJ1dGUoICdkaXNhYmxlZCcgKTsgfSApO1xuXG4gICAgLy8gQXBwbHkgZnJhZ21lbnQgZGVjb3JhdG9ycyB0byBkaXJlY3Rpb25hbCBidXR0b25zIGJhc2VkIG9uXG4gICAgLy8gd2hhdCBzbGlkZSBheGlzIHRoZXkgYXJlIGluXG4gICAgaWYoIGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgKSB7XG4gICAgICBpZiggZnJhZ21lbnRzLnByZXYgKSBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IGVsLnJlbW92ZUF0dHJpYnV0ZSggJ2Rpc2FibGVkJyApOyB9ICk7XG4gICAgICBpZiggZnJhZ21lbnRzLm5leHQgKSBkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiggZnJhZ21lbnRzLnByZXYgKSBkb20uY29udHJvbHNMZWZ0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcbiAgICAgIGlmKCBmcmFnbWVudHMubmV4dCApIGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgZWwucmVtb3ZlQXR0cmlidXRlKCAnZGlzYWJsZWQnICk7IH0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIGlmKCBjb25maWcuY29udHJvbHNUdXRvcmlhbCApIHtcblxuICAgIC8vIEhpZ2hsaWdodCBjb250cm9sIGFycm93cyB3aXRoIGFuIGFuaW1hdGlvbiB0byBlbnN1cmVcbiAgICAvLyB0aGF0IHRoZSB2aWV3ZXIga25vd3MgaG93IHRvIG5hdmlnYXRlXG4gICAgaWYoICFoYXNOYXZpZ2F0ZWREb3duICYmIHJvdXRlcy5kb3duICkge1xuICAgICAgZG9tLmNvbnRyb2xzRG93bkFycm93LmNsYXNzTGlzdC5hZGQoICdoaWdobGlnaHQnICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZG9tLmNvbnRyb2xzRG93bkFycm93LmNsYXNzTGlzdC5yZW1vdmUoICdoaWdobGlnaHQnICk7XG5cbiAgICAgIGlmKCAhaGFzTmF2aWdhdGVkUmlnaHQgJiYgcm91dGVzLnJpZ2h0ICYmIGluZGV4diA9PT0gMCApIHtcbiAgICAgICAgZG9tLmNvbnRyb2xzUmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKCAnaGlnaGxpZ2h0JyApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRvbS5jb250cm9sc1JpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZSggJ2hpZ2hsaWdodCcgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgYmFja2dyb3VuZCBlbGVtZW50cyB0byByZWZsZWN0IHRoZSBjdXJyZW50XG4gKiBzbGlkZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVBbGwgSWYgdHJ1ZSwgdGhlIGJhY2tncm91bmRzIG9mXG4gKiBhbGwgdmVydGljYWwgc2xpZGVzIChub3QganVzdCB0aGUgcHJlc2VudCkgd2lsbCBiZSB1cGRhdGVkLlxuICovXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKCBpbmNsdWRlQWxsICkge1xuXG4gIHZhciBjdXJyZW50QmFja2dyb3VuZCA9IG51bGw7XG5cbiAgLy8gUmV2ZXJzZSBwYXN0L2Z1dHVyZSBjbGFzc2VzIHdoZW4gaW4gUlRMIG1vZGVcbiAgdmFyIGhvcml6b250YWxQYXN0ID0gY29uZmlnLnJ0bCA/ICdmdXR1cmUnIDogJ3Bhc3QnLFxuICAgIGhvcml6b250YWxGdXR1cmUgPSBjb25maWcucnRsID8gJ3Bhc3QnIDogJ2Z1dHVyZSc7XG5cbiAgLy8gVXBkYXRlIHRoZSBjbGFzc2VzIG9mIGFsbCBiYWNrZ3JvdW5kcyB0byBtYXRjaCB0aGVcbiAgLy8gc3RhdGVzIG9mIHRoZWlyIHNsaWRlcyAocGFzdC9wcmVzZW50L2Z1dHVyZSlcbiAgdG9BcnJheSggZG9tLmJhY2tncm91bmQuY2hpbGROb2RlcyApLmZvckVhY2goIGZ1bmN0aW9uKCBiYWNrZ3JvdW5kaCwgaCApIHtcblxuICAgIGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuICAgIGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuICAgIGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdmdXR1cmUnICk7XG5cbiAgICBpZiggaCA8IGluZGV4aCApIHtcbiAgICAgIGJhY2tncm91bmRoLmNsYXNzTGlzdC5hZGQoIGhvcml6b250YWxQYXN0ICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCBoID4gaW5kZXhoICkge1xuICAgICAgYmFja2dyb3VuZGguY2xhc3NMaXN0LmFkZCggaG9yaXpvbnRhbEZ1dHVyZSApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJhY2tncm91bmRoLmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXG4gICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBiYWNrZ3JvdW5kIGVsZW1lbnRcbiAgICAgIGN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZGg7XG4gICAgfVxuXG4gICAgaWYoIGluY2x1ZGVBbGwgfHwgaCA9PT0gaW5kZXhoICkge1xuICAgICAgdG9BcnJheSggYmFja2dyb3VuZGgucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGJhY2tncm91bmR2LCB2ICkge1xuXG4gICAgICAgIGJhY2tncm91bmR2LmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuICAgICAgICBiYWNrZ3JvdW5kdi5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcbiAgICAgICAgYmFja2dyb3VuZHYuY2xhc3NMaXN0LnJlbW92ZSggJ2Z1dHVyZScgKTtcblxuICAgICAgICBpZiggdiA8IGluZGV4diApIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kdi5jbGFzc0xpc3QuYWRkKCAncGFzdCcgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggdiA+IGluZGV4diApIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kdi5jbGFzc0xpc3QuYWRkKCAnZnV0dXJlJyApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJhY2tncm91bmR2LmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXG4gICAgICAgICAgLy8gT25seSBpZiB0aGlzIGlzIHRoZSBwcmVzZW50IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNsaWRlXG4gICAgICAgICAgaWYoIGggPT09IGluZGV4aCApIGN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZHY7XG4gICAgICAgIH1cblxuICAgICAgfSApO1xuICAgIH1cblxuICB9ICk7XG5cbiAgLy8gU3RvcCBjb250ZW50IGluc2lkZSBvZiBwcmV2aW91cyBiYWNrZ3JvdW5kc1xuICBpZiggcHJldmlvdXNCYWNrZ3JvdW5kICkge1xuXG4gICAgc3RvcEVtYmVkZGVkQ29udGVudCggcHJldmlvdXNCYWNrZ3JvdW5kLCB7IHVubG9hZElmcmFtZXM6ICFzaG91bGRQcmVsb2FkKCBwcmV2aW91c0JhY2tncm91bmQgKSB9ICk7XG5cbiAgfVxuXG4gIC8vIFN0YXJ0IGNvbnRlbnQgaW4gdGhlIGN1cnJlbnQgYmFja2dyb3VuZFxuICBpZiggY3VycmVudEJhY2tncm91bmQgKSB7XG5cbiAgICBzdGFydEVtYmVkZGVkQ29udGVudCggY3VycmVudEJhY2tncm91bmQgKTtcblxuICAgIHZhciBjdXJyZW50QmFja2dyb3VuZENvbnRlbnQgPSBjdXJyZW50QmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCAnLnNsaWRlLWJhY2tncm91bmQtY29udGVudCcgKTtcbiAgICBpZiggY3VycmVudEJhY2tncm91bmRDb250ZW50ICkge1xuXG4gICAgICB2YXIgYmFja2dyb3VuZEltYWdlVVJMID0gY3VycmVudEJhY2tncm91bmRDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSB8fCAnJztcblxuICAgICAgLy8gUmVzdGFydCBHSUZzIChkb2Vzbid0IHdvcmsgaW4gRmlyZWZveClcbiAgICAgIGlmKCAvXFwuZ2lmL2kudGVzdCggYmFja2dyb3VuZEltYWdlVVJMICkgKSB7XG4gICAgICAgIGN1cnJlbnRCYWNrZ3JvdW5kQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGN1cnJlbnRCYWNrZ3JvdW5kQ29udGVudCApLm9wYWNpdHk7XG4gICAgICAgIGN1cnJlbnRCYWNrZ3JvdW5kQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2VVUkw7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBEb24ndCB0cmFuc2l0aW9uIGJldHdlZW4gaWRlbnRpY2FsIGJhY2tncm91bmRzLiBUaGlzXG4gICAgLy8gcHJldmVudHMgdW53YW50ZWQgZmxpY2tlci5cbiAgICB2YXIgcHJldmlvdXNCYWNrZ3JvdW5kSGFzaCA9IHByZXZpb3VzQmFja2dyb3VuZCA/IHByZXZpb3VzQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaGFzaCcgKSA6IG51bGw7XG4gICAgdmFyIGN1cnJlbnRCYWNrZ3JvdW5kSGFzaCA9IGN1cnJlbnRCYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1oYXNoJyApO1xuICAgIGlmKCBjdXJyZW50QmFja2dyb3VuZEhhc2ggJiYgY3VycmVudEJhY2tncm91bmRIYXNoID09PSBwcmV2aW91c0JhY2tncm91bmRIYXNoICYmIGN1cnJlbnRCYWNrZ3JvdW5kICE9PSBwcmV2aW91c0JhY2tncm91bmQgKSB7XG4gICAgICBkb20uYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCAnbm8tdHJhbnNpdGlvbicgKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c0JhY2tncm91bmQgPSBjdXJyZW50QmFja2dyb3VuZDtcblxuICB9XG5cbiAgLy8gSWYgdGhlcmUncyBhIGJhY2tncm91bmQgYnJpZ2h0bmVzcyBmbGFnIGZvciB0aGlzIHNsaWRlLFxuICAvLyBidWJibGUgaXQgdG8gdGhlIC5yZXZlYWwgY29udGFpbmVyXG4gIGlmKCBjdXJyZW50U2xpZGUgKSB7XG4gICAgWyAnaGFzLWxpZ2h0LWJhY2tncm91bmQnLCAnaGFzLWRhcmstYmFja2dyb3VuZCcgXS5mb3JFYWNoKCBmdW5jdGlvbiggY2xhc3NUb0J1YmJsZSApIHtcbiAgICAgIGlmKCBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGFzc1RvQnViYmxlICkgKSB7XG4gICAgICAgIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGNsYXNzVG9CdWJibGUgKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBjbGFzc1RvQnViYmxlICk7XG4gICAgICB9XG4gICAgfSApO1xuICB9XG5cbiAgLy8gQWxsb3cgdGhlIGZpcnN0IGJhY2tncm91bmQgdG8gYXBwbHkgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIGRvbS5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoICduby10cmFuc2l0aW9uJyApO1xuICB9LCAxICk7XG5cbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFyYWxsYXggYmFja2dyb3VuZCBiYXNlZFxuICogb24gdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuXG4gIGlmKCBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2UgKSB7XG5cbiAgICB2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICksXG4gICAgICB2ZXJ0aWNhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiApO1xuXG4gICAgdmFyIGJhY2tncm91bmRTaXplID0gZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUuc3BsaXQoICcgJyApLFxuICAgICAgYmFja2dyb3VuZFdpZHRoLCBiYWNrZ3JvdW5kSGVpZ2h0O1xuXG4gICAgaWYoIGJhY2tncm91bmRTaXplLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIGJhY2tncm91bmRXaWR0aCA9IGJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUludCggYmFja2dyb3VuZFNpemVbMF0sIDEwICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYmFja2dyb3VuZFdpZHRoID0gcGFyc2VJbnQoIGJhY2tncm91bmRTaXplWzBdLCAxMCApO1xuICAgICAgYmFja2dyb3VuZEhlaWdodCA9IHBhcnNlSW50KCBiYWNrZ3JvdW5kU2l6ZVsxXSwgMTAgKTtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGVXaWR0aCA9IGRvbS5iYWNrZ3JvdW5kLm9mZnNldFdpZHRoLFxuICAgICAgaG9yaXpvbnRhbFNsaWRlQ291bnQgPSBob3Jpem9udGFsU2xpZGVzLmxlbmd0aCxcbiAgICAgIGhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyLFxuICAgICAgaG9yaXpvbnRhbE9mZnNldDtcblxuICAgIGlmKCB0eXBlb2YgY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWwgPT09ICdudW1iZXInICkge1xuICAgICAgaG9yaXpvbnRhbE9mZnNldE11bHRpcGxpZXIgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSG9yaXpvbnRhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllciA9IGhvcml6b250YWxTbGlkZUNvdW50ID4gMSA/ICggYmFja2dyb3VuZFdpZHRoIC0gc2xpZGVXaWR0aCApIC8gKCBob3Jpem9udGFsU2xpZGVDb3VudC0xICkgOiAwO1xuICAgIH1cblxuICAgIGhvcml6b250YWxPZmZzZXQgPSBob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllciAqIGluZGV4aCAqIC0xO1xuXG4gICAgdmFyIHNsaWRlSGVpZ2h0ID0gZG9tLmJhY2tncm91bmQub2Zmc2V0SGVpZ2h0LFxuICAgICAgdmVydGljYWxTbGlkZUNvdW50ID0gdmVydGljYWxTbGlkZXMubGVuZ3RoLFxuICAgICAgdmVydGljYWxPZmZzZXRNdWx0aXBsaWVyLFxuICAgICAgdmVydGljYWxPZmZzZXQ7XG5cbiAgICBpZiggdHlwZW9mIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbCA9PT0gJ251bWJlcicgKSB7XG4gICAgICB2ZXJ0aWNhbE9mZnNldE11bHRpcGxpZXIgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmVydGljYWxPZmZzZXRNdWx0aXBsaWVyID0gKCBiYWNrZ3JvdW5kSGVpZ2h0IC0gc2xpZGVIZWlnaHQgKSAvICggdmVydGljYWxTbGlkZUNvdW50LTEgKTtcbiAgICB9XG5cbiAgICB2ZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2xpZGVDb3VudCA+IDAgPyAgdmVydGljYWxPZmZzZXRNdWx0aXBsaWVyICogaW5kZXh2IDogMDtcblxuICAgIGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGhvcml6b250YWxPZmZzZXQgKyAncHggJyArIC12ZXJ0aWNhbE9mZnNldCArICdweCc7XG5cbiAgfVxuXG59XG5cbi8qKlxuICogU2hvdWxkIHRoZSBnaXZlbiBlbGVtZW50IGJlIHByZWxvYWRlZD9cbiAqIERlY2lkZXMgYmFzZWQgb24gbG9jYWwgZWxlbWVudCBhdHRyaWJ1dGVzIGFuZCBnbG9iYWwgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2hvdWxkUHJlbG9hZCggZWxlbWVudCApIHtcblxuICAvLyBQcmVmZXIgYW4gZXhwbGljaXQgZ2xvYmFsIHByZWxvYWQgc2V0dGluZ1xuICB2YXIgcHJlbG9hZCA9IGNvbmZpZy5wcmVsb2FkSWZyYW1lcztcblxuICAvLyBJZiBubyBnbG9iYWwgc2V0dGluZyBpcyBhdmFpbGFibGUsIGZhbGwgYmFjayBvbiB0aGUgZWxlbWVudCdzXG4gIC8vIG93biBwcmVsb2FkIHNldHRpbmdcbiAgaWYoIHR5cGVvZiBwcmVsb2FkICE9PSAnYm9vbGVhbicgKSB7XG4gICAgcHJlbG9hZCA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1wcmVsb2FkJyApO1xuICB9XG5cbiAgcmV0dXJuIHByZWxvYWQ7XG59XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlIGdpdmVuIHNsaWRlIGlzIHdpdGhpbiB0aGUgY29uZmlndXJlZCB2aWV3XG4gKiBkaXN0YW5jZS4gU2hvd3MgdGhlIHNsaWRlIGVsZW1lbnQgYW5kIGxvYWRzIGFueSBjb250ZW50XG4gKiB0aGF0IGlzIHNldCB0byBsb2FkIGxhemlseSAoZGF0YS1zcmMpLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlIFNsaWRlIHRvIHNob3dcbiAqL1xuZnVuY3Rpb24gbG9hZFNsaWRlKCBzbGlkZSwgb3B0aW9ucyApIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBTaG93IHRoZSBzbGlkZSBlbGVtZW50XG4gIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSBjb25maWcuZGlzcGxheTtcblxuICAvLyBNZWRpYSBlbGVtZW50cyB3aXRoIGRhdGEtc3JjIGF0dHJpYnV0ZXNcbiAgdG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2ltZ1tkYXRhLXNyY10sIHZpZGVvW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gICAgaWYoIGVsZW1lbnQudGFnTmFtZSAhPT0gJ0lGUkFNRScgfHwgc2hvdWxkUHJlbG9hZCggZWxlbWVudCApICkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtbGF6eS1sb2FkZWQnLCAnJyApO1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLXNyYycgKTtcbiAgICB9XG4gIH0gKTtcblxuICAvLyBNZWRpYSBlbGVtZW50cyB3aXRoIDxzb3VyY2U+IGNoaWxkcmVuXG4gIHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlbywgYXVkaW8nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggbWVkaWEgKSB7XG4gICAgdmFyIHNvdXJjZXMgPSAwO1xuXG4gICAgdG9BcnJheSggbWVkaWEucXVlcnlTZWxlY3RvckFsbCggJ3NvdXJjZVtkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc291cmNlICkge1xuICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSggJ3NyYycsIHNvdXJjZS5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuICAgICAgc291cmNlLnJlbW92ZUF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApO1xuICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSggJ2RhdGEtbGF6eS1sb2FkZWQnLCAnJyApO1xuICAgICAgc291cmNlcyArPSAxO1xuICAgIH0gKTtcblxuICAgIC8vIElmIHdlIHJld3JvdGUgc291cmNlcyBmb3IgdGhpcyB2aWRlby9hdWRpbyBlbGVtZW50LCB3ZSBuZWVkXG4gICAgLy8gdG8gbWFudWFsbHkgdGVsbCBpdCB0byBsb2FkIGZyb20gaXRzIG5ldyBvcmlnaW5cbiAgICBpZiggc291cmNlcyA+IDAgKSB7XG4gICAgICBtZWRpYS5sb2FkKCk7XG4gICAgfVxuICB9ICk7XG5cblxuICAvLyBTaG93IHRoZSBjb3JyZXNwb25kaW5nIGJhY2tncm91bmQgZWxlbWVudFxuICB2YXIgYmFja2dyb3VuZCA9IHNsaWRlLnNsaWRlQmFja2dyb3VuZEVsZW1lbnQ7XG4gIGlmKCBiYWNrZ3JvdW5kICkge1xuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICB2YXIgYmFja2dyb3VuZENvbnRlbnQgPSBzbGlkZS5zbGlkZUJhY2tncm91bmRDb250ZW50RWxlbWVudDtcbiAgICB2YXIgYmFja2dyb3VuZElmcmFtZSA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pZnJhbWUnICk7XG5cbiAgICAvLyBJZiB0aGUgYmFja2dyb3VuZCBjb250YWlucyBtZWRpYSwgbG9hZCBpdFxuICAgIGlmKCBiYWNrZ3JvdW5kLmhhc0F0dHJpYnV0ZSggJ2RhdGEtbG9hZGVkJyApID09PSBmYWxzZSApIHtcbiAgICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCAnZGF0YS1sb2FkZWQnLCAndHJ1ZScgKTtcblxuICAgICAgdmFyIGJhY2tncm91bmRJbWFnZSA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pbWFnZScgKSxcbiAgICAgICAgYmFja2dyb3VuZFZpZGVvID0gc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvJyApLFxuICAgICAgICBiYWNrZ3JvdW5kVmlkZW9Mb29wID0gc2xpZGUuaGFzQXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvLWxvb3AnICksXG4gICAgICAgIGJhY2tncm91bmRWaWRlb011dGVkID0gc2xpZGUuaGFzQXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvLW11dGVkJyApO1xuXG4gICAgICAvLyBJbWFnZXNcbiAgICAgIGlmKCBiYWNrZ3JvdW5kSW1hZ2UgKSB7XG4gICAgICAgIGJhY2tncm91bmRDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJysgZW5jb2RlVVJJKCBiYWNrZ3JvdW5kSW1hZ2UgKSArJyknO1xuICAgICAgfVxuICAgICAgLy8gVmlkZW9zXG4gICAgICBlbHNlIGlmICggYmFja2dyb3VuZFZpZGVvICYmICFpc1NwZWFrZXJOb3RlcygpICkge1xuICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICk7XG5cbiAgICAgICAgaWYoIGJhY2tncm91bmRWaWRlb0xvb3AgKSB7XG4gICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnbG9vcCcsICcnICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggYmFja2dyb3VuZFZpZGVvTXV0ZWQgKSB7XG4gICAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5saW5lIHZpZGVvIHBsYXliYWNrIHdvcmtzIChhdCBsZWFzdCBpbiBNb2JpbGUgU2FmYXJpKSBhc1xuICAgICAgICAvLyBsb25nIGFzIHRoZSB2aWRlbyBpcyBtdXRlZCBhbmQgdGhlIGBwbGF5c2lubGluZWAgYXR0cmlidXRlIGlzXG4gICAgICAgIC8vIHByZXNlbnRcbiAgICAgICAgaWYoIGlzTW9iaWxlRGV2aWNlICkge1xuICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICB2aWRlby5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwcG9ydCBjb21tYSBzZXBhcmF0ZWQgbGlzdHMgb2YgdmlkZW8gc291cmNlc1xuICAgICAgICBiYWNrZ3JvdW5kVmlkZW8uc3BsaXQoICcsJyApLmZvckVhY2goIGZ1bmN0aW9uKCBzb3VyY2UgKSB7XG4gICAgICAgICAgdmlkZW8uaW5uZXJIVE1MICs9ICc8c291cmNlIHNyYz1cIicrIHNvdXJjZSArJ1wiPic7XG4gICAgICAgIH0gKTtcblxuICAgICAgICBiYWNrZ3JvdW5kQ29udGVudC5hcHBlbmRDaGlsZCggdmlkZW8gKTtcbiAgICAgIH1cbiAgICAgIC8vIElmcmFtZXNcbiAgICAgIGVsc2UgaWYoIGJhY2tncm91bmRJZnJhbWUgJiYgb3B0aW9ucy5leGNsdWRlSWZyYW1lcyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpZnJhbWUnICk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoICdhbGxvd2Z1bGxzY3JlZW4nLCAnJyApO1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCAnbW96YWxsb3dmdWxsc2NyZWVuJywgJycgKTtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSggJ3dlYmtpdGFsbG93ZnVsbHNjcmVlbicsICcnICk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoICdhbGxvdycsICdhdXRvcGxheScgKTtcblxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnLCBiYWNrZ3JvdW5kSWZyYW1lICk7XG5cbiAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoICA9ICcxMDAlJztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgaWZyYW1lLnN0eWxlLm1heEhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgaWZyYW1lLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnO1xuXG4gICAgICAgIGJhY2tncm91bmRDb250ZW50LmFwcGVuZENoaWxkKCBpZnJhbWUgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGFydCBsb2FkaW5nIHByZWxvYWRhYmxlIGlmcmFtZXNcbiAgICB2YXIgYmFja2dyb3VuZElmcmFtZUVsZW1lbnQgPSBiYWNrZ3JvdW5kQ29udGVudC5xdWVyeVNlbGVjdG9yKCAnaWZyYW1lW2RhdGEtc3JjXScgKTtcbiAgICBpZiggYmFja2dyb3VuZElmcmFtZUVsZW1lbnQgKSB7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaWZyYW1lIGlzIGVsaWdpYmxlIHRvIGJlIHByZWxvYWRlZFxuICAgICAgaWYoIHNob3VsZFByZWxvYWQoIGJhY2tncm91bmQgKSAmJiAhL2F1dG9wbGF5PSgxfHRydWV8eWVzKS9naS50ZXN0KCBiYWNrZ3JvdW5kSWZyYW1lICkgKSB7XG4gICAgICAgIGlmKCBiYWNrZ3JvdW5kSWZyYW1lRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdzcmMnICkgIT09IGJhY2tncm91bmRJZnJhbWUgKSB7XG4gICAgICAgICAgYmFja2dyb3VuZElmcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCAnc3JjJywgYmFja2dyb3VuZElmcmFtZSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogVW5sb2FkcyBhbmQgaGlkZXMgdGhlIGdpdmVuIHNsaWRlLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZVxuICogc2xpZGUgaXMgbW92ZWQgb3V0c2lkZSBvZiB0aGUgY29uZmlndXJlZCB2aWV3IGRpc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlXG4gKi9cbmZ1bmN0aW9uIHVubG9hZFNsaWRlKCBzbGlkZSApIHtcblxuICAvLyBIaWRlIHRoZSBzbGlkZSBlbGVtZW50XG4gIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gSGlkZSB0aGUgY29ycmVzcG9uZGluZyBiYWNrZ3JvdW5kIGVsZW1lbnRcbiAgdmFyIGJhY2tncm91bmQgPSBnZXRTbGlkZUJhY2tncm91bmQoIHNsaWRlICk7XG4gIGlmKCBiYWNrZ3JvdW5kICkge1xuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIFVubG9hZCBhbnkgYmFja2dyb3VuZCBpZnJhbWVzXG4gICAgdG9BcnJheSggYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW3NyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCAnc3JjJyApO1xuICAgIH0gKTtcbiAgfVxuXG4gIC8vIFJlc2V0IGxhenktbG9hZGVkIG1lZGlhIGVsZW1lbnRzIHdpdGggc3JjIGF0dHJpYnV0ZXNcbiAgdG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvW2RhdGEtbGF6eS1sb2FkZWRdW3NyY10sIGF1ZGlvW2RhdGEtbGF6eS1sb2FkZWRdW3NyY10sIGlmcmFtZVtkYXRhLWxhenktbG9hZGVkXVtzcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnc3JjJyApICk7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdzcmMnICk7XG4gIH0gKTtcblxuICAvLyBSZXNldCBsYXp5LWxvYWRlZCBtZWRpYSBlbGVtZW50cyB3aXRoIDxzb3VyY2U+IGNoaWxkcmVuXG4gIHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlb1tkYXRhLWxhenktbG9hZGVkXSBzb3VyY2Vbc3JjXSwgYXVkaW8gc291cmNlW3NyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc291cmNlICkge1xuICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycsIHNvdXJjZS5nZXRBdHRyaWJ1dGUoICdzcmMnICkgKTtcbiAgICBzb3VyY2UucmVtb3ZlQXR0cmlidXRlKCAnc3JjJyApO1xuICB9ICk7XG5cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hhdCBhdmFpbGFibGUgcm91dGVzIHRoZXJlIGFyZSBmb3IgbmF2aWdhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHt7bGVmdDogYm9vbGVhbiwgcmlnaHQ6IGJvb2xlYW4sIHVwOiBib29sZWFuLCBkb3duOiBib29sZWFufX1cbiAqL1xuZnVuY3Rpb24gYXZhaWxhYmxlUm91dGVzKCkge1xuXG4gIHZhciBob3Jpem9udGFsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSxcbiAgICB2ZXJ0aWNhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiApO1xuXG4gIHZhciByb3V0ZXMgPSB7XG4gICAgbGVmdDogaW5kZXhoID4gMCxcbiAgICByaWdodDogaW5kZXhoIDwgaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGggLSAxLFxuICAgIHVwOiBpbmRleHYgPiAwLFxuICAgIGRvd246IGluZGV4diA8IHZlcnRpY2FsU2xpZGVzLmxlbmd0aCAtIDFcbiAgfTtcblxuICAvLyBMb29wZWQgcHJlc2VudGF0aW9ucyBjYW4gYWx3YXlzIGJlIG5hdmlnYXRlZCBhcyBsb25nIGFzXG4gIC8vIHRoZXJlIGFyZSBzbGlkZXMgYXZhaWxhYmxlXG4gIGlmKCBjb25maWcubG9vcCApIHtcbiAgICBpZiggaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGggPiAxICkge1xuICAgICAgcm91dGVzLmxlZnQgPSB0cnVlO1xuICAgICAgcm91dGVzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiggdmVydGljYWxTbGlkZXMubGVuZ3RoID4gMSApIHtcbiAgICAgIHJvdXRlcy51cCA9IHRydWU7XG4gICAgICByb3V0ZXMuZG93biA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV2ZXJzZSBob3Jpem9udGFsIGNvbnRyb2xzIGZvciBydGxcbiAgaWYoIGNvbmZpZy5ydGwgKSB7XG4gICAgdmFyIGxlZnQgPSByb3V0ZXMubGVmdDtcbiAgICByb3V0ZXMubGVmdCA9IHJvdXRlcy5yaWdodDtcbiAgICByb3V0ZXMucmlnaHQgPSBsZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlcztcblxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IGRlc2NyaWJpbmcgdGhlIGF2YWlsYWJsZSBmcmFnbWVudFxuICogZGlyZWN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHt7cHJldjogYm9vbGVhbiwgbmV4dDogYm9vbGVhbn19XG4gKi9cbmZ1bmN0aW9uIGF2YWlsYWJsZUZyYWdtZW50cygpIHtcblxuICBpZiggY3VycmVudFNsaWRlICYmIGNvbmZpZy5mcmFnbWVudHMgKSB7XG4gICAgdmFyIGZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApO1xuICAgIHZhciBoaWRkZW5GcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudDpub3QoLnZpc2libGUpJyApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXY6IGZyYWdtZW50cy5sZW5ndGggLSBoaWRkZW5GcmFnbWVudHMubGVuZ3RoID4gMCxcbiAgICAgIG5leHQ6ICEhaGlkZGVuRnJhZ21lbnRzLmxlbmd0aFxuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHsgcHJldjogZmFsc2UsIG5leHQ6IGZhbHNlIH07XG4gIH1cblxufVxuXG4vKipcbiAqIEVuZm9yY2VzIG9yaWdpbi1zcGVjaWZpYyBmb3JtYXQgcnVsZXMgZm9yIGVtYmVkZGVkIG1lZGlhLlxuICovXG5mdW5jdGlvbiBmb3JtYXRFbWJlZGRlZENvbnRlbnQoKSB7XG5cbiAgdmFyIF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlID0gZnVuY3Rpb24oIHNvdXJjZUF0dHJpYnV0ZSwgc291cmNlVVJMLCBwYXJhbSApIHtcbiAgICB0b0FycmF5KCBkb20uc2xpZGVzLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbJysgc291cmNlQXR0cmlidXRlICsnKj1cIicrIHNvdXJjZVVSTCArJ1wiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcbiAgICAgIHZhciBzcmMgPSBlbC5nZXRBdHRyaWJ1dGUoIHNvdXJjZUF0dHJpYnV0ZSApO1xuICAgICAgaWYoIHNyYyAmJiBzcmMuaW5kZXhPZiggcGFyYW0gKSA9PT0gLTEgKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSggc291cmNlQXR0cmlidXRlLCBzcmMgKyAoICEvXFw/Ly50ZXN0KCBzcmMgKSA/ICc/JyA6ICcmJyApICsgcGFyYW0gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBZb3VUdWJlIGZyYW1lcyBtdXN0IGluY2x1ZGUgXCI/ZW5hYmxlanNhcGk9MVwiXG4gIF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlKCAnc3JjJywgJ3lvdXR1YmUuY29tL2VtYmVkLycsICdlbmFibGVqc2FwaT0xJyApO1xuICBfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ2RhdGEtc3JjJywgJ3lvdXR1YmUuY29tL2VtYmVkLycsICdlbmFibGVqc2FwaT0xJyApO1xuXG4gIC8vIFZpbWVvIGZyYW1lcyBtdXN0IGluY2x1ZGUgXCI/YXBpPTFcIlxuICBfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ3NyYycsICdwbGF5ZXIudmltZW8uY29tLycsICdhcGk9MScgKTtcbiAgX2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UoICdkYXRhLXNyYycsICdwbGF5ZXIudmltZW8uY29tLycsICdhcGk9MScgKTtcblxufVxuXG4vKipcbiAqIFN0YXJ0IHBsYXliYWNrIG9mIGFueSBlbWJlZGRlZCBjb250ZW50IGluc2lkZSBvZlxuICogdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzdGFydEVtYmVkZGVkQ29udGVudCggZWxlbWVudCApIHtcblxuICBpZiggZWxlbWVudCAmJiAhaXNTcGVha2VyTm90ZXMoKSApIHtcblxuICAgIC8vIFJlc3RhcnQgR0lGc1xuICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2ltZ1tzcmMkPVwiLmdpZlwiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcbiAgICAgIC8vIFNldHRpbmcgdGhlIHNhbWUgdW5jaGFuZ2VkIHNvdXJjZSBsaWtlIHRoaXMgd2FzIGNvbmZpcm1lZFxuICAgICAgLy8gdG8gd29yayBpbiBDaHJvbWUsIEZGICYgU2FmYXJpXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbC5nZXRBdHRyaWJ1dGUoICdzcmMnICkgKTtcbiAgICB9ICk7XG5cbiAgICAvLyBIVE1MNSBtZWRpYSBlbGVtZW50c1xuICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvLCBhdWRpbycgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcbiAgICAgIGlmKCBjbG9zZXN0UGFyZW50KCBlbCwgJy5mcmFnbWVudCcgKSAmJiAhY2xvc2VzdFBhcmVudCggZWwsICcuZnJhZ21lbnQudmlzaWJsZScgKSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgYW4gZXhwbGljaXQgZ2xvYmFsIGF1dG9wbGF5IHNldHRpbmdcbiAgICAgIHZhciBhdXRvcGxheSA9IGNvbmZpZy5hdXRvUGxheU1lZGlhO1xuXG4gICAgICAvLyBJZiBubyBnbG9iYWwgc2V0dGluZyBpcyBhdmFpbGFibGUsIGZhbGwgYmFjayBvbiB0aGUgZWxlbWVudCdzXG4gICAgICAvLyBvd24gYXV0b3BsYXkgc2V0dGluZ1xuICAgICAgaWYoIHR5cGVvZiBhdXRvcGxheSAhPT0gJ2Jvb2xlYW4nICkge1xuICAgICAgICBhdXRvcGxheSA9IGVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgfHwgISFjbG9zZXN0UGFyZW50KCBlbCwgJy5zbGlkZS1iYWNrZ3JvdW5kJyApO1xuICAgICAgfVxuXG4gICAgICBpZiggYXV0b3BsYXkgJiYgdHlwZW9mIGVsLnBsYXkgPT09ICdmdW5jdGlvbicgKSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIG1lZGlhIGlzIHJlYWR5LCBzdGFydCBwbGF5YmFja1xuICAgICAgICBpZiggZWwucmVhZHlTdGF0ZSA+IDEgKSB7XG4gICAgICAgICAgc3RhcnRFbWJlZGRlZE1lZGlhKCB7IHRhcmdldDogZWwgfSApO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vYmlsZSBkZXZpY2VzIG5ldmVyIGZpcmUgYSBsb2FkZWQgZXZlbnQgc28gaW5zdGVhZFxuICAgICAgICAvLyBvZiB3YWl0aW5nLCB3ZSBpbml0aWF0ZSBwbGF5YmFja1xuICAgICAgICBlbHNlIGlmKCBpc01vYmlsZURldmljZSApIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IGVsLnBsYXkoKTtcblxuICAgICAgICAgIC8vIElmIGF1dG9wbGF5IGRvZXMgbm90IHdvcmssIGVuc3VyZSB0aGF0IHRoZSBjb250cm9scyBhcmUgdmlzaWJsZSBzb1xuICAgICAgICAgIC8vIHRoYXQgdGhlIHZpZXdlciBjYW4gc3RhcnQgdGhlIG1lZGlhIG9uIHRoZWlyIG93blxuICAgICAgICAgIGlmKCBwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLmNhdGNoID09PSAnZnVuY3Rpb24nICYmIGVsLmNvbnRyb2xzID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHByb21pc2UuY2F0Y2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBlbC5jb250cm9scyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8gT25jZSB0aGUgdmlkZW8gZG9lcyBzdGFydCBwbGF5aW5nLCBoaWRlIHRoZSBjb250cm9scyBhZ2FpblxuICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCAncGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVsLmNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIG1lZGlhIGlzbid0IGxvYWRlZCwgd2FpdCBiZWZvcmUgcGxheWluZ1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZGVkZGF0YScsIHN0YXJ0RW1iZWRkZWRNZWRpYSApOyAvLyByZW1vdmUgZmlyc3QgdG8gYXZvaWQgZHVwZXNcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVkZGF0YScsIHN0YXJ0RW1iZWRkZWRNZWRpYSApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9ICk7XG5cbiAgICAvLyBOb3JtYWwgaWZyYW1lc1xuICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtzcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuICAgICAgaWYoIGNsb3Nlc3RQYXJlbnQoIGVsLCAnLmZyYWdtZW50JyApICYmICFjbG9zZXN0UGFyZW50KCBlbCwgJy5mcmFnbWVudC52aXNpYmxlJyApICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0RW1iZWRkZWRJZnJhbWUoIHsgdGFyZ2V0OiBlbCB9ICk7XG4gICAgfSApO1xuXG4gICAgLy8gTGF6eSBsb2FkaW5nIGlmcmFtZXNcbiAgICB0b0FycmF5KCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuICAgICAgaWYoIGNsb3Nlc3RQYXJlbnQoIGVsLCAnLmZyYWdtZW50JyApICYmICFjbG9zZXN0UGFyZW50KCBlbCwgJy5mcmFnbWVudC52aXNpYmxlJyApICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCBlbC5nZXRBdHRyaWJ1dGUoICdzcmMnICkgIT09IGVsLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHN0YXJ0RW1iZWRkZWRJZnJhbWUgKTsgLy8gcmVtb3ZlIGZpcnN0IHRvIGF2b2lkIGR1cGVzXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgc3RhcnRFbWJlZGRlZElmcmFtZSApO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuICAgICAgfVxuICAgIH0gKTtcblxuICB9XG5cbn1cblxuLyoqXG4gKiBTdGFydHMgcGxheWluZyBhbiBlbWJlZGRlZCB2aWRlby9hdWRpbyBlbGVtZW50IGFmdGVyXG4gKiBpdCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gc3RhcnRFbWJlZGRlZE1lZGlhKCBldmVudCApIHtcblxuICB2YXIgaXNBdHRhY2hlZFRvRE9NID0gISFjbG9zZXN0UGFyZW50KCBldmVudC50YXJnZXQsICdodG1sJyApLFxuICAgIGlzVmlzaWJsZSAgXHRcdD0gISFjbG9zZXN0UGFyZW50KCBldmVudC50YXJnZXQsICcucHJlc2VudCcgKTtcblxuICBpZiggaXNBdHRhY2hlZFRvRE9NICYmIGlzVmlzaWJsZSApIHtcbiAgICBldmVudC50YXJnZXQuY3VycmVudFRpbWUgPSAwO1xuICAgIGV2ZW50LnRhcmdldC5wbGF5KCk7XG4gIH1cblxuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWRlZGRhdGEnLCBzdGFydEVtYmVkZGVkTWVkaWEgKTtcblxufVxuXG4vKipcbiAqIFwiU3RhcnRzXCIgdGhlIGNvbnRlbnQgb2YgYW4gZW1iZWRkZWQgaWZyYW1lIHVzaW5nIHRoZVxuICogcG9zdE1lc3NhZ2UgQVBJLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICovXG5mdW5jdGlvbiBzdGFydEVtYmVkZGVkSWZyYW1lKCBldmVudCApIHtcblxuICB2YXIgaWZyYW1lID0gZXZlbnQudGFyZ2V0O1xuXG4gIGlmKCBpZnJhbWUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cgKSB7XG5cbiAgICB2YXIgaXNBdHRhY2hlZFRvRE9NID0gISFjbG9zZXN0UGFyZW50KCBldmVudC50YXJnZXQsICdodG1sJyApLFxuICAgICAgaXNWaXNpYmxlICBcdFx0PSAhIWNsb3Nlc3RQYXJlbnQoIGV2ZW50LnRhcmdldCwgJy5wcmVzZW50JyApO1xuXG4gICAgaWYoIGlzQXR0YWNoZWRUb0RPTSAmJiBpc1Zpc2libGUgKSB7XG5cbiAgICAgIC8vIFByZWZlciBhbiBleHBsaWNpdCBnbG9iYWwgYXV0b3BsYXkgc2V0dGluZ1xuICAgICAgdmFyIGF1dG9wbGF5ID0gY29uZmlnLmF1dG9QbGF5TWVkaWE7XG5cbiAgICAgIC8vIElmIG5vIGdsb2JhbCBzZXR0aW5nIGlzIGF2YWlsYWJsZSwgZmFsbCBiYWNrIG9uIHRoZSBlbGVtZW50J3NcbiAgICAgIC8vIG93biBhdXRvcGxheSBzZXR0aW5nXG4gICAgICBpZiggdHlwZW9mIGF1dG9wbGF5ICE9PSAnYm9vbGVhbicgKSB7XG4gICAgICAgIGF1dG9wbGF5ID0gaWZyYW1lLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgfHwgISFjbG9zZXN0UGFyZW50KCBpZnJhbWUsICcuc2xpZGUtYmFja2dyb3VuZCcgKTtcbiAgICAgIH1cblxuICAgICAgLy8gWW91VHViZSBwb3N0TWVzc2FnZSBBUElcbiAgICAgIGlmKCAveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvLy50ZXN0KCBpZnJhbWUuZ2V0QXR0cmlidXRlKCAnc3JjJyApICkgJiYgYXV0b3BsYXkgKSB7XG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBsYXlWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonICk7XG4gICAgICB9XG4gICAgICAvLyBWaW1lbyBwb3N0TWVzc2FnZSBBUElcbiAgICAgIGVsc2UgaWYoIC9wbGF5ZXJcXC52aW1lb1xcLmNvbVxcLy8udGVzdCggaWZyYW1lLmdldEF0dHJpYnV0ZSggJ3NyYycgKSApICYmIGF1dG9wbGF5ICkge1xuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcIm1ldGhvZFwiOlwicGxheVwifScsICcqJyApO1xuICAgICAgfVxuICAgICAgLy8gR2VuZXJpYyBwb3N0TWVzc2FnZSBBUElcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3NsaWRlOnN0YXJ0JywgJyonICk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogU3RvcCBwbGF5YmFjayBvZiBhbnkgZW1iZWRkZWQgY29udGVudCBpbnNpZGUgb2ZcbiAqIHRoZSB0YXJnZXRlZCBzbGlkZS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHN0b3BFbWJlZGRlZENvbnRlbnQoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG5cbiAgb3B0aW9ucyA9IGV4dGVuZCgge1xuICAgIC8vIERlZmF1bHRzXG4gICAgdW5sb2FkSWZyYW1lczogdHJ1ZVxuICB9LCBvcHRpb25zIHx8IHt9ICk7XG5cbiAgaWYoIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICkge1xuICAgIC8vIEhUTUw1IG1lZGlhIGVsZW1lbnRzXG4gICAgdG9BcnJheSggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuICAgICAgaWYoICFlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWlnbm9yZScgKSAmJiB0eXBlb2YgZWwucGF1c2UgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXVzZWQtYnktcmV2ZWFsJywgJycpO1xuICAgICAgICBlbC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0gKTtcblxuICAgIC8vIEdlbmVyaWMgcG9zdE1lc3NhZ2UgQVBJIGZvciBub24tbGF6eSBsb2FkZWQgaWZyYW1lc1xuICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcbiAgICAgIGlmKCBlbC5jb250ZW50V2luZG93ICkgZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3NsaWRlOnN0b3AnLCAnKicgKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgc3RhcnRFbWJlZGRlZElmcmFtZSApO1xuICAgIH0pO1xuXG4gICAgLy8gWW91VHViZSBwb3N0TWVzc2FnZSBBUElcbiAgICB0b0FycmF5KCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcbiAgICAgIGlmKCAhZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1pZ25vcmUnICkgJiYgZWwuY29udGVudFdpbmRvdyAmJiB0eXBlb2YgZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFZpbWVvIHBvc3RNZXNzYWdlIEFQSVxuICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtzcmMqPVwicGxheWVyLnZpbWVvLmNvbS9cIl0nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG4gICAgICBpZiggIWVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtaWdub3JlJyApICYmIGVsLmNvbnRlbnRXaW5kb3cgJiYgdHlwZW9mIGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgIGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICd7XCJtZXRob2RcIjpcInBhdXNlXCJ9JywgJyonICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiggb3B0aW9ucy51bmxvYWRJZnJhbWVzID09PSB0cnVlICkge1xuICAgICAgLy8gVW5sb2FkIGxhenktbG9hZGVkIGlmcmFtZXNcbiAgICAgIHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG4gICAgICAgIC8vIE9ubHkgcmVtb3ZpbmcgdGhlIHNyYyBkb2Vzbid0IGFjdHVhbGx5IHVubG9hZCB0aGUgZnJhbWVcbiAgICAgICAgLy8gaW4gYWxsIGJyb3dzZXJzIChGaXJlZm94KSBzbyB3ZSBzZXQgaXQgdG8gYmxhbmsgZmlyc3RcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCAnc3JjJywgJ2Fib3V0OmJsYW5rJyApO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoICdzcmMnICk7XG4gICAgICB9ICk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFzdCBzbGlkZXMuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBnbG9iYWxcbiAqIGZsYXR0ZW5lZCBpbmRleCBmb3Igc2xpZGVzLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtzbGlkZT1jdXJyZW50U2xpZGVdIFRoZSBzbGlkZSB3ZSdyZSBjb3VudGluZyBiZWZvcmVcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFBhc3Qgc2xpZGUgY291bnRcbiAqL1xuZnVuY3Rpb24gZ2V0U2xpZGVQYXN0Q291bnQoIHNsaWRlICkge1xuXG4gIGlmKCBzbGlkZSA9PT0gdW5kZWZpbmVkICkge1xuICAgIHNsaWRlID0gY3VycmVudFNsaWRlO1xuICB9XG5cbiAgdmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cbiAgLy8gVGhlIG51bWJlciBvZiBwYXN0IHNsaWRlc1xuICB2YXIgcGFzdENvdW50ID0gMDtcblxuICAvLyBTdGVwIHRocm91Z2ggYWxsIHNsaWRlcyBhbmQgY291bnQgdGhlIHBhc3Qgb25lc1xuICBtYWluTG9vcDogZm9yKCB2YXIgaSA9IDA7IGkgPCBob3Jpem9udGFsU2xpZGVzLmxlbmd0aDsgaSsrICkge1xuXG4gICAgdmFyIGhvcml6b250YWxTbGlkZSA9IGhvcml6b250YWxTbGlkZXNbaV07XG4gICAgdmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IHZlcnRpY2FsU2xpZGVzLmxlbmd0aDsgaisrICkge1xuXG4gICAgICAvLyBTdG9wIGFzIHNvb24gYXMgd2UgYXJyaXZlIGF0IHRoZSBwcmVzZW50XG4gICAgICBpZiggdmVydGljYWxTbGlkZXNbal0gPT09IHNsaWRlICkge1xuICAgICAgICBicmVhayBtYWluTG9vcDtcbiAgICAgIH1cblxuICAgICAgcGFzdENvdW50Kys7XG5cbiAgICB9XG5cbiAgICAvLyBTdG9wIGFzIHNvb24gYXMgd2UgYXJyaXZlIGF0IHRoZSBwcmVzZW50XG4gICAgaWYoIGhvcml6b250YWxTbGlkZSA9PT0gc2xpZGUgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBEb24ndCBjb3VudCB0aGUgd3JhcHBpbmcgc2VjdGlvbiBmb3IgdmVydGljYWwgc2xpZGVzXG4gICAgaWYoIGhvcml6b250YWxTbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSA9PT0gZmFsc2UgKSB7XG4gICAgICBwYXN0Q291bnQrKztcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBwYXN0Q291bnQ7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgcmFuZ2luZyBmcm9tIDAtMSB0aGF0IHJlcHJlc2VudHNcbiAqIGhvdyBmYXIgaW50byB0aGUgcHJlc2VudGF0aW9uIHdlIGhhdmUgbmF2aWdhdGVkLlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MoKSB7XG5cbiAgLy8gVGhlIG51bWJlciBvZiBwYXN0IGFuZCB0b3RhbCBzbGlkZXNcbiAgdmFyIHRvdGFsQ291bnQgPSBnZXRUb3RhbFNsaWRlcygpO1xuICB2YXIgcGFzdENvdW50ID0gZ2V0U2xpZGVQYXN0Q291bnQoKTtcblxuICBpZiggY3VycmVudFNsaWRlICkge1xuXG4gICAgdmFyIGFsbEZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGZyYWdtZW50cyBpbiB0aGUgY3VycmVudCBzbGlkZSB0aG9zZSBzaG91bGQgYmVcbiAgICAvLyBhY2NvdW50ZWQgZm9yIGluIHRoZSBwcm9ncmVzcy5cbiAgICBpZiggYWxsRnJhZ21lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICB2YXIgdmlzaWJsZUZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICk7XG5cbiAgICAgIC8vIFRoaXMgdmFsdWUgcmVwcmVzZW50cyBob3cgYmlnIGEgcG9ydGlvbiBvZiB0aGUgc2xpZGUgcHJvZ3Jlc3NcbiAgICAgIC8vIHRoYXQgaXMgbWFkZSB1cCBieSBpdHMgZnJhZ21lbnRzICgwLTEpXG4gICAgICB2YXIgZnJhZ21lbnRXZWlnaHQgPSAwLjk7XG5cbiAgICAgIC8vIEFkZCBmcmFnbWVudCBwcm9ncmVzcyB0byB0aGUgcGFzdCBzbGlkZSBjb3VudFxuICAgICAgcGFzdENvdW50ICs9ICggdmlzaWJsZUZyYWdtZW50cy5sZW5ndGggLyBhbGxGcmFnbWVudHMubGVuZ3RoICkgKiBmcmFnbWVudFdlaWdodDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbiggcGFzdENvdW50IC8gKCB0b3RhbENvdW50IC0gMSApLCAxICk7XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhpcyBwcmVzZW50YXRpb24gaXMgcnVubmluZyBpbnNpZGUgb2YgdGhlXG4gKiBzcGVha2VyIG5vdGVzIHdpbmRvdy5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWFrZXJOb3RlcygpIHtcblxuICByZXR1cm4gISF3aW5kb3cubG9jYXRpb24uc2VhcmNoLm1hdGNoKCAvcmVjZWl2ZXIvZ2kgKTtcblxufVxuXG4vKipcbiAqIFJlYWRzIHRoZSBjdXJyZW50IFVSTCAoaGFzaCkgYW5kIG5hdmlnYXRlcyBhY2NvcmRpbmdseS5cbiAqL1xuZnVuY3Rpb24gcmVhZFVSTCgpIHtcblxuICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gIC8vIEF0dGVtcHQgdG8gcGFyc2UgdGhlIGhhc2ggYXMgZWl0aGVyIGFuIGluZGV4IG9yIG5hbWVcbiAgdmFyIGJpdHMgPSBoYXNoLnNsaWNlKCAyICkuc3BsaXQoICcvJyApLFxuICAgIG5hbWUgPSBoYXNoLnJlcGxhY2UoIC8jfFxcLy9naSwgJycgKTtcblxuICAvLyBJZiB0aGUgZmlyc3QgYml0IGlzIG5vdCBmdWxseSBudW1lcmljIGFuZCB0aGVyZSBpcyBhIG5hbWUgd2VcbiAgLy8gY2FuIGFzc3VtZSB0aGF0IHRoaXMgaXMgYSBuYW1lZCBsaW5rXG4gIGlmKCAhL15bMC05XSokLy50ZXN0KCBiaXRzWzBdICkgJiYgbmFtZS5sZW5ndGggKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAvLyBFbnN1cmUgdGhlIG5hbWVkIGxpbmsgaXMgYSB2YWxpZCBIVE1MIElEIGF0dHJpYnV0ZVxuICAgIHRyeSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGRlY29kZVVSSUNvbXBvbmVudCggbmFtZSApICk7XG4gICAgfVxuICAgIGNhdGNoICggZXJyb3IgKSB7IH1cblxuICAgIC8vIEVuc3VyZSB0aGF0IHdlJ3JlIG5vdCBhbHJlYWR5IG9uIGEgc2xpZGUgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgdmFyIGlzU2FtZU5hbWVBc0N1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZSA/IGN1cnJlbnRTbGlkZS5nZXRBdHRyaWJ1dGUoICdpZCcgKSA9PT0gbmFtZSA6IGZhbHNlO1xuXG4gICAgaWYoIGVsZW1lbnQgKSB7XG4gICAgICAvLyBJZiB0aGUgc2xpZGUgZXhpc3RzIGFuZCBpcyBub3QgdGhlIGN1cnJlbnQgc2xpZGUuLi5cbiAgICAgIGlmICggIWlzU2FtZU5hbWVBc0N1cnJlbnRTbGlkZSApIHtcbiAgICAgICAgLy8gLi4uZmluZCB0aGUgcG9zaXRpb24gb2YgdGhlIG5hbWVkIHNsaWRlIGFuZCBuYXZpZ2F0ZSB0byBpdFxuICAgICAgICB2YXIgaW5kaWNlcyA9IFJldmVhbC5nZXRJbmRpY2VzKGVsZW1lbnQpO1xuICAgICAgICBzbGlkZShpbmRpY2VzLmgsIGluZGljZXMudik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoZSBzbGlkZSBkb2Vzbid0IGV4aXN0LCBuYXZpZ2F0ZSB0byB0aGUgY3VycmVudCBzbGlkZVxuICAgIGVsc2Uge1xuICAgICAgc2xpZGUoIGluZGV4aCB8fCAwLCBpbmRleHYgfHwgMCApO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgaGFzaEluZGV4QmFzZSA9IGNvbmZpZy5oYXNoT25lQmFzZWRJbmRleCA/IDEgOiAwO1xuXG4gICAgLy8gUmVhZCB0aGUgaW5kZXggY29tcG9uZW50cyBvZiB0aGUgaGFzaFxuICAgIHZhciBoID0gKCBwYXJzZUludCggYml0c1swXSwgMTAgKSAtIGhhc2hJbmRleEJhc2UgKSB8fCAwLFxuICAgICAgdiA9ICggcGFyc2VJbnQoIGJpdHNbMV0sIDEwICkgLSBoYXNoSW5kZXhCYXNlICkgfHwgMCxcbiAgICAgIGY7XG5cbiAgICBpZiggY29uZmlnLmZyYWdtZW50SW5VUkwgKSB7XG4gICAgICBmID0gcGFyc2VJbnQoIGJpdHNbMl0sIDEwICk7XG4gICAgICBpZiggaXNOYU4oIGYgKSApIHtcbiAgICAgICAgZiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggaCAhPT0gaW5kZXhoIHx8IHYgIT09IGluZGV4diB8fCBmICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBzbGlkZSggaCwgdiwgZiApO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcGFnZSBVUkwgKGhhc2gpIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnRcbiAqIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgdGltZSBpbiBtcyB0byB3YWl0IGJlZm9yZVxuICogd3JpdGluZyB0aGUgaGFzaFxuICovXG5mdW5jdGlvbiB3cml0ZVVSTCggZGVsYXkgKSB7XG5cbiAgLy8gTWFrZSBzdXJlIHRoZXJlJ3MgbmV2ZXIgbW9yZSB0aGFuIG9uZSB0aW1lb3V0IHJ1bm5pbmdcbiAgY2xlYXJUaW1lb3V0KCB3cml0ZVVSTFRpbWVvdXQgKTtcblxuICAvLyBJZiBhIGRlbGF5IGlzIHNwZWNpZmllZCwgdGltZW91dCB0aGlzIGNhbGxcbiAgaWYoIHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgKSB7XG4gICAgd3JpdGVVUkxUaW1lb3V0ID0gc2V0VGltZW91dCggd3JpdGVVUkwsIGRlbGF5ICk7XG4gIH1cbiAgZWxzZSBpZiggY3VycmVudFNsaWRlICkge1xuICAgIC8vIElmIHdlJ3JlIGNvbmZpZ3VyZWQgdG8gcHVzaCB0byBoaXN0b3J5IE9SIHRoZSBoaXN0b3J5XG4gICAgLy8gQVBJIGlzIG5vdCBhdmFpYWxibGUuXG4gICAgaWYoIGNvbmZpZy5oaXN0b3J5IHx8ICF3aW5kb3cuaGlzdG9yeSApIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbG9jYXRpb25IYXNoKCk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIGNvbmZpZ3VyZWQgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzbGlkZSBpbiB0aGVcbiAgICAvLyBVUkwgd2l0aG91dCBwdXNoaW5nIHRvIGhpc3RvcnkuXG4gICAgZWxzZSBpZiggY29uZmlnLmhhc2ggKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsICcjJyArIGxvY2F0aW9uSGFzaCgpICk7XG4gICAgfVxuICAgIC8vIElmIGhpc3RvcnkgYW5kIGhhc2ggYXJlIGJvdGggZGlzYWJsZWQsIGEgaGFzaCBtYXkgc3RpbGxcbiAgICAvLyBiZSBhZGRlZCB0byB0aGUgVVJMIGJ5IGNsaWNraW5nIG9uIGEgaHJlZiB3aXRoIGEgaGFzaFxuICAgIC8vIHRhcmdldC4gQ291bnRlciB0aGlzIGJ5IGFsd2F5cyByZW1vdmluZyB0aGUgaGFzaC5cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSggbnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCApO1xuICAgIH1cbiAgfVxuXG59XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgaC92IGxvY2F0aW9uIGFuZCBmcmFnbWVudCBvZiB0aGUgY3VycmVudCxcbiAqIG9yIHNwZWNpZmllZCwgc2xpZGUuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3NsaWRlXSBJZiBzcGVjaWZpZWQsIHRoZSByZXR1cm5lZFxuICogaW5kZXggd2lsbCBiZSBmb3IgdGhpcyBzbGlkZSByYXRoZXIgdGhhbiB0aGUgY3VycmVudGx5XG4gKiBhY3RpdmUgb25lXG4gKlxuICogQHJldHVybiB7e2g6IG51bWJlciwgdjogbnVtYmVyLCBmOiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRJbmRpY2VzKCBzbGlkZSApIHtcblxuICAvLyBCeSBkZWZhdWx0LCByZXR1cm4gdGhlIGN1cnJlbnQgaW5kaWNlc1xuICB2YXIgaCA9IGluZGV4aCxcbiAgICB2ID0gaW5kZXh2LFxuICAgIGY7XG5cbiAgLy8gSWYgYSBzbGlkZSBpcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgaW5kaWNlcyBvZiB0aGF0IHNsaWRlXG4gIGlmKCBzbGlkZSApIHtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IGlzVmVydGljYWxTbGlkZSggc2xpZGUgKTtcbiAgICB2YXIgc2xpZGVoID0gaXNWZXJ0aWNhbCA/IHNsaWRlLnBhcmVudE5vZGUgOiBzbGlkZTtcblxuICAgIC8vIFNlbGVjdCBhbGwgaG9yaXpvbnRhbCBzbGlkZXNcbiAgICB2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcblxuICAgIC8vIE5vdyB0aGF0IHdlIGtub3cgd2hpY2ggdGhlIGhvcml6b250YWwgc2xpZGUgaXMsIGdldCBpdHMgaW5kZXhcbiAgICBoID0gTWF0aC5tYXgoIGhvcml6b250YWxTbGlkZXMuaW5kZXhPZiggc2xpZGVoICksIDAgKTtcblxuICAgIC8vIEFzc3VtZSB3ZSdyZSBub3QgdmVydGljYWxcbiAgICB2ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHZlcnRpY2FsIHNsaWRlLCBncmFiIHRoZSB2ZXJ0aWNhbCBpbmRleFxuICAgIGlmKCBpc1ZlcnRpY2FsICkge1xuICAgICAgdiA9IE1hdGgubWF4KCB0b0FycmF5KCBzbGlkZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICkuaW5kZXhPZiggc2xpZGUgKSwgMCApO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhc2xpZGUgJiYgY3VycmVudFNsaWRlICkge1xuICAgIHZhciBoYXNGcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKS5sZW5ndGggPiAwO1xuICAgIGlmKCBoYXNGcmFnbWVudHMgKSB7XG4gICAgICB2YXIgY3VycmVudEZyYWdtZW50ID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgIGlmKCBjdXJyZW50RnJhZ21lbnQgJiYgY3VycmVudEZyYWdtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgKSB7XG4gICAgICAgIGYgPSBwYXJzZUludCggY3VycmVudEZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICksIDEwICk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZiA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICkubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBoOiBoLCB2OiB2LCBmOiBmIH07XG5cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIHNsaWRlcyBpbiB0aGlzIHByZXNlbnRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuXG4gIHJldHVybiB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnOm5vdCguc3RhY2spJyApICk7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgaG9yaXpvbnRhbCBzbGlkZXMgaW4gdGhlIGRlY2suIEVhY2hcbiAqIHZlcnRpY2FsIHN0YWNrIGlzIGluY2x1ZGVkIGFzIG9uZSBob3Jpem9udGFsIHNsaWRlIGluIHRoZVxuICogcmVzdWx0aW5nIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRIb3Jpem9udGFsU2xpZGVzKCkge1xuXG4gIHJldHVybiB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgdGhhdCBleGlzdCB3aXRoaW4gdGhpcyBkZWNrLlxuICovXG5mdW5jdGlvbiBnZXRWZXJ0aWNhbFNsaWRlcygpIHtcblxuICByZXR1cm4gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZXM+c2VjdGlvbj5zZWN0aW9uJyApICk7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIGF0IGxlYXN0IHR3byBob3Jpem9udGFsIHNsaWRlcy5cbiAqL1xuZnVuY3Rpb24gaGFzSG9yaXpvbnRhbFNsaWRlcygpIHtcblxuICByZXR1cm4gZ2V0SG9yaXpvbnRhbFNsaWRlcygpLmxlbmd0aCA+IDE7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBhdCBsZWFzdCB0d28gdmVydGljYWwgc2xpZGVzLlxuICovXG5mdW5jdGlvbiBoYXNWZXJ0aWNhbFNsaWRlcygpIHtcblxuICByZXR1cm4gZ2V0VmVydGljYWxTbGlkZXMoKS5sZW5ndGggPiAxO1xuXG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHdoZXJlIGVhY2ggb2JqZWN0IHJlcHJlc2VudHMgdGhlXG4gKiBhdHRyaWJ1dGVzIG9uIGl0cyByZXNwZWN0aXZlIHNsaWRlLlxuICovXG5mdW5jdGlvbiBnZXRTbGlkZXNBdHRyaWJ1dGVzKCkge1xuXG4gIHJldHVybiBnZXRTbGlkZXMoKS5tYXAoIGZ1bmN0aW9uKCBzbGlkZSApIHtcblxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBzbGlkZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSA9IHNsaWRlLmF0dHJpYnV0ZXNbIGkgXTtcbiAgICAgIGF0dHJpYnV0ZXNbIGF0dHJpYnV0ZS5uYW1lIF0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuXG4gIH0gKTtcblxufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHNsaWRlcyBpbiB0aGlzIHByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFRvdGFsU2xpZGVzKCkge1xuXG4gIHJldHVybiBnZXRTbGlkZXMoKS5sZW5ndGg7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzbGlkZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gKlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldFNsaWRlKCB4LCB5ICkge1xuXG4gIHZhciBob3Jpem9udGFsU2xpZGUgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApWyB4IF07XG4gIHZhciB2ZXJ0aWNhbFNsaWRlcyA9IGhvcml6b250YWxTbGlkZSAmJiBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICk7XG5cbiAgaWYoIHZlcnRpY2FsU2xpZGVzICYmIHZlcnRpY2FsU2xpZGVzLmxlbmd0aCAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHZlcnRpY2FsU2xpZGVzID8gdmVydGljYWxTbGlkZXNbIHkgXSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBob3Jpem9udGFsU2xpZGU7XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQgZm9yIHRoZSBnaXZlbiBzbGlkZS5cbiAqIEFsbCBzbGlkZXMsIGV2ZW4gdGhlIG9uZXMgd2l0aCBubyBiYWNrZ3JvdW5kIHByb3BlcnRpZXNcbiAqIGRlZmluZWQsIGhhdmUgYSBiYWNrZ3JvdW5kIGVsZW1lbnQgc28gYXMgbG9uZyBhcyB0aGVcbiAqIGluZGV4IGlzIHZhbGlkIGFuIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge21peGVkfSB4IEhvcml6b250YWwgYmFja2dyb3VuZCBpbmRleCBPUiBhIHNsaWRlXG4gKiBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFZlcnRpY2FsIGJhY2tncm91bmQgaW5kZXhcbiAqIEByZXR1cm4geyhIVE1MRWxlbWVudFtdfCopfVxuICovXG5mdW5jdGlvbiBnZXRTbGlkZUJhY2tncm91bmQoIHgsIHkgKSB7XG5cbiAgdmFyIHNsaWRlID0gdHlwZW9mIHggPT09ICdudW1iZXInID8gZ2V0U2xpZGUoIHgsIHkgKSA6IHg7XG4gIGlmKCBzbGlkZSApIHtcbiAgICByZXR1cm4gc2xpZGUuc2xpZGVCYWNrZ3JvdW5kRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG5cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHNwZWFrZXIgbm90ZXMgZnJvbSBhIHNsaWRlLiBOb3RlcyBjYW4gYmVcbiAqIGRlZmluZWQgaW4gdHdvIHdheXM6XG4gKiAxLiBBcyBhIGRhdGEtbm90ZXMgYXR0cmlidXRlIG9uIHRoZSBzbGlkZSA8c2VjdGlvbj5cbiAqIDIuIEFzIGFuIDxhc2lkZSBjbGFzcz1cIm5vdGVzXCI+IGluc2lkZSBvZiB0aGUgc2xpZGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbc2xpZGU9Y3VycmVudFNsaWRlXVxuICogQHJldHVybiB7KHN0cmluZ3xudWxsKX1cbiAqL1xuZnVuY3Rpb24gZ2V0U2xpZGVOb3Rlcyggc2xpZGUgKSB7XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgY3VycmVudCBzbGlkZVxuICBzbGlkZSA9IHNsaWRlIHx8IGN1cnJlbnRTbGlkZTtcblxuICAvLyBOb3RlcyBjYW4gYmUgc3BlY2lmaWVkIHZpYSB0aGUgZGF0YS1ub3RlcyBhdHRyaWJ1dGUuLi5cbiAgaWYoIHNsaWRlLmhhc0F0dHJpYnV0ZSggJ2RhdGEtbm90ZXMnICkgKSB7XG4gICAgcmV0dXJuIHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtbm90ZXMnICk7XG4gIH1cblxuICAvLyAuLi4gb3IgdXNpbmcgYW4gPGFzaWRlIGNsYXNzPVwibm90ZXNcIj4gZWxlbWVudFxuICB2YXIgbm90ZXNFbGVtZW50ID0gc2xpZGUucXVlcnlTZWxlY3RvciggJ2FzaWRlLm5vdGVzJyApO1xuICBpZiggbm90ZXNFbGVtZW50ICkge1xuICAgIHJldHVybiBub3Rlc0VsZW1lbnQuaW5uZXJIVE1MO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG5cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHByZXNlbnRhdGlvbiBhc1xuICogYW4gb2JqZWN0LiBUaGlzIHN0YXRlIGNhbiB0aGVuIGJlIHJlc3RvcmVkIGF0IGFueVxuICogdGltZS5cbiAqXG4gKiBAcmV0dXJuIHt7aW5kZXhoOiBudW1iZXIsIGluZGV4djogbnVtYmVyLCBpbmRleGY6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBvdmVydmlldzogYm9vbGVhbn19XG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuXG4gIHZhciBpbmRpY2VzID0gZ2V0SW5kaWNlcygpO1xuXG4gIHJldHVybiB7XG4gICAgaW5kZXhoOiBpbmRpY2VzLmgsXG4gICAgaW5kZXh2OiBpbmRpY2VzLnYsXG4gICAgaW5kZXhmOiBpbmRpY2VzLmYsXG4gICAgcGF1c2VkOiBpc1BhdXNlZCgpLFxuICAgIG92ZXJ2aWV3OiBpc092ZXJ2aWV3KClcbiAgfTtcblxufVxuXG4vKipcbiAqIFJlc3RvcmVzIHRoZSBwcmVzZW50YXRpb24gdG8gdGhlIGdpdmVuIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBBcyBnZW5lcmF0ZWQgYnkgZ2V0U3RhdGUoKVxuICogQHNlZSB7QGxpbmsgZ2V0U3RhdGV9IGdlbmVyYXRlcyB0aGUgcGFyYW1ldGVyIGBzdGF0ZWBcbiAqL1xuZnVuY3Rpb24gc2V0U3RhdGUoIHN0YXRlICkge1xuXG4gIGlmKCB0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnICkge1xuICAgIHNsaWRlKCBkZXNlcmlhbGl6ZSggc3RhdGUuaW5kZXhoICksIGRlc2VyaWFsaXplKCBzdGF0ZS5pbmRleHYgKSwgZGVzZXJpYWxpemUoIHN0YXRlLmluZGV4ZiApICk7XG5cbiAgICB2YXIgcGF1c2VkRmxhZyA9IGRlc2VyaWFsaXplKCBzdGF0ZS5wYXVzZWQgKSxcbiAgICAgIG92ZXJ2aWV3RmxhZyA9IGRlc2VyaWFsaXplKCBzdGF0ZS5vdmVydmlldyApO1xuXG4gICAgaWYoIHR5cGVvZiBwYXVzZWRGbGFnID09PSAnYm9vbGVhbicgJiYgcGF1c2VkRmxhZyAhPT0gaXNQYXVzZWQoKSApIHtcbiAgICAgIHRvZ2dsZVBhdXNlKCBwYXVzZWRGbGFnICk7XG4gICAgfVxuXG4gICAgaWYoIHR5cGVvZiBvdmVydmlld0ZsYWcgPT09ICdib29sZWFuJyAmJiBvdmVydmlld0ZsYWcgIT09IGlzT3ZlcnZpZXcoKSApIHtcbiAgICAgIHRvZ2dsZU92ZXJ2aWV3KCBvdmVydmlld0ZsYWcgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIFJldHVybiBhIHNvcnRlZCBmcmFnbWVudHMgbGlzdCwgb3JkZXJlZCBieSBhbiBpbmNyZWFzaW5nXG4gKiBcImRhdGEtZnJhZ21lbnQtaW5kZXhcIiBhdHRyaWJ1dGUuXG4gKlxuICogRnJhZ21lbnRzIHdpbGwgYmUgcmV2ZWFsZWQgaW4gdGhlIG9yZGVyIHRoYXQgdGhleSBhcmUgcmV0dXJuZWQgYnlcbiAqIHRoaXMgZnVuY3Rpb24sIHNvIHlvdSBjYW4gdXNlIHRoZSBpbmRleCBhdHRyaWJ1dGVzIHRvIGNvbnRyb2wgdGhlXG4gKiBvcmRlciBvZiBmcmFnbWVudCBhcHBlYXJhbmNlLlxuICpcbiAqIFRvIG1haW50YWluIGEgc2Vuc2libGUgZGVmYXVsdCBmcmFnbWVudCBvcmRlciwgZnJhZ21lbnRzIGFyZSBwcmVzdW1lZFxuICogdG8gYmUgcGFzc2VkIGluIGRvY3VtZW50IG9yZGVyLiBUaGlzIGZ1bmN0aW9uIGFkZHMgYSBcImZyYWdtZW50LWluZGV4XCJcbiAqIGF0dHJpYnV0ZSB0byBlYWNoIG5vZGUgaWYgc3VjaCBhbiBhdHRyaWJ1dGUgaXMgbm90IGFscmVhZHkgcHJlc2VudCxcbiAqIGFuZCBzZXRzIHRoYXQgYXR0cmlidXRlIHRvIGFuIGludGVnZXIgdmFsdWUgd2hpY2ggaXMgdGhlIHBvc2l0aW9uIG9mXG4gKiB0aGUgZnJhZ21lbnQgd2l0aGluIHRoZSBmcmFnbWVudHMgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdFtdfCp9IGZyYWdtZW50c1xuICogQHBhcmFtIHtib29sZWFufSBncm91cGVkIElmIHRydWUgdGhlIHJldHVybmVkIGFycmF5IHdpbGwgY29udGFpblxuICogbmVzdGVkIGFycmF5cyBmb3IgYWxsIGZyYWdtZW50cyB3aXRoIHRoZSBzYW1lIGluZGV4XG4gKiBAcmV0dXJuIHtvYmplY3RbXX0gc29ydGVkIFNvcnRlZCBhcnJheSBvZiBmcmFnbWVudHNcbiAqL1xuZnVuY3Rpb24gc29ydEZyYWdtZW50cyggZnJhZ21lbnRzLCBncm91cGVkICkge1xuXG4gIGZyYWdtZW50cyA9IHRvQXJyYXkoIGZyYWdtZW50cyApO1xuXG4gIHZhciBvcmRlcmVkID0gW10sXG4gICAgdW5vcmRlcmVkID0gW10sXG4gICAgc29ydGVkID0gW107XG5cbiAgLy8gR3JvdXAgb3JkZXJlZCBhbmQgdW5vcmRlcmVkIGVsZW1lbnRzXG4gIGZyYWdtZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQsIGkgKSB7XG4gICAgaWYoIGZyYWdtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgKSB7XG4gICAgICB2YXIgaW5kZXggPSBwYXJzZUludCggZnJhZ21lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSwgMTAgKTtcblxuICAgICAgaWYoICFvcmRlcmVkW2luZGV4XSApIHtcbiAgICAgICAgb3JkZXJlZFtpbmRleF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgb3JkZXJlZFtpbmRleF0ucHVzaCggZnJhZ21lbnQgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1bm9yZGVyZWQucHVzaCggWyBmcmFnbWVudCBdICk7XG4gICAgfVxuICB9ICk7XG5cbiAgLy8gQXBwZW5kIGZyYWdtZW50cyB3aXRob3V0IGV4cGxpY2l0IGluZGljZXMgaW4gdGhlaXJcbiAgLy8gRE9NIG9yZGVyXG4gIG9yZGVyZWQgPSBvcmRlcmVkLmNvbmNhdCggdW5vcmRlcmVkICk7XG5cbiAgLy8gTWFudWFsbHkgY291bnQgdGhlIGluZGV4IHVwIHBlciBncm91cCB0byBlbnN1cmUgdGhlcmVcbiAgLy8gYXJlIG5vIGdhcHNcbiAgdmFyIGluZGV4ID0gMDtcblxuICAvLyBQdXNoIGFsbCBmcmFnbWVudHMgaW4gdGhlaXIgc29ydGVkIG9yZGVyIHRvIGFuIGFycmF5LFxuICAvLyB0aGlzIGZsYXR0ZW5zIHRoZSBncm91cHNcbiAgb3JkZXJlZC5mb3JFYWNoKCBmdW5jdGlvbiggZ3JvdXAgKSB7XG4gICAgZ3JvdXAuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuICAgICAgc29ydGVkLnB1c2goIGZyYWdtZW50ICk7XG4gICAgICBmcmFnbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JywgaW5kZXggKTtcbiAgICB9ICk7XG5cbiAgICBpbmRleCArKztcbiAgfSApO1xuXG4gIHJldHVybiBncm91cGVkID09PSB0cnVlID8gb3JkZXJlZCA6IHNvcnRlZDtcblxufVxuXG4vKipcbiAqIFJlZnJlc2hlcyB0aGUgZnJhZ21lbnRzIG9uIHRoZSBjdXJyZW50IHNsaWRlIHNvIHRoYXQgdGhleVxuICogaGF2ZSB0aGUgYXBwcm9wcmlhdGUgY2xhc3NlcyAoLnZpc2libGUgKyAuY3VycmVudC1mcmFnbWVudCkuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGZyYWdtZW50XG4gKiBAcGFyYW0ge2FycmF5fSBbZnJhZ21lbnRzXSBBcnJheSBjb250YWluaW5nIGFsbCBmcmFnbWVudHNcbiAqIGluIHRoZSBjdXJyZW50IHNsaWRlXG4gKlxuICogQHJldHVybiB7e3Nob3duOiBhcnJheSwgaGlkZGVuOiBhcnJheX19XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZyYWdtZW50cyggaW5kZXgsIGZyYWdtZW50cyApIHtcblxuICB2YXIgY2hhbmdlZEZyYWdtZW50cyA9IHtcbiAgICBzaG93bjogW10sXG4gICAgaGlkZGVuOiBbXVxuICB9O1xuXG4gIGlmKCBjdXJyZW50U2xpZGUgJiYgY29uZmlnLmZyYWdtZW50cyApIHtcblxuICAgIGZyYWdtZW50cyA9IGZyYWdtZW50cyB8fCBzb3J0RnJhZ21lbnRzKCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG4gICAgaWYoIGZyYWdtZW50cy5sZW5ndGggKSB7XG5cbiAgICAgIHZhciBtYXhJbmRleCA9IDA7XG5cbiAgICAgIGlmKCB0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICkge1xuICAgICAgICB2YXIgY3VycmVudEZyYWdtZW50ID0gc29ydEZyYWdtZW50cyggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQudmlzaWJsZScgKSApLnBvcCgpO1xuICAgICAgICBpZiggY3VycmVudEZyYWdtZW50ICkge1xuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoIGN1cnJlbnRGcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApIHx8IDAsIDEwICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdG9BcnJheSggZnJhZ21lbnRzICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsLCBpICkge1xuXG4gICAgICAgIGlmKCBlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApICkge1xuICAgICAgICAgIGkgPSBwYXJzZUludCggZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSwgMTAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1heEluZGV4ID0gTWF0aC5tYXgoIG1heEluZGV4LCBpICk7XG5cbiAgICAgICAgLy8gVmlzaWJsZSBmcmFnbWVudHNcbiAgICAgICAgaWYoIGkgPD0gaW5kZXggKSB7XG4gICAgICAgICAgaWYoICFlbC5jbGFzc0xpc3QuY29udGFpbnMoICd2aXNpYmxlJyApICkgY2hhbmdlZEZyYWdtZW50cy5zaG93bi5wdXNoKCBlbCApO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXG4gICAgICAgICAgLy8gQW5ub3VuY2UgdGhlIGZyYWdtZW50cyBvbmUgYnkgb25lIHRvIHRoZSBTY3JlZW4gUmVhZGVyXG4gICAgICAgICAgZG9tLnN0YXR1c0Rpdi50ZXh0Q29udGVudCA9IGdldFN0YXR1c1RleHQoIGVsICk7XG5cbiAgICAgICAgICBpZiggaSA9PT0gaW5kZXggKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgICAgICAgIHN0YXJ0RW1iZWRkZWRDb250ZW50KCBlbCApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIaWRkZW4gZnJhZ21lbnRzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmKCBlbC5jbGFzc0xpc3QuY29udGFpbnMoICd2aXNpYmxlJyApICkgY2hhbmdlZEZyYWdtZW50cy5oaWRkZW4ucHVzaCggZWwgKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCAndmlzaWJsZScgKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcbiAgICAgICAgfVxuXG4gICAgICB9ICk7XG5cbiAgICAgIC8vIFdyaXRlIHRoZSBjdXJyZW50IGZyYWdtZW50IGluZGV4IHRvIHRoZSBzbGlkZSA8c2VjdGlvbj4uXG4gICAgICAvLyBUaGlzIGNhbiBiZSB1c2VkIGJ5IGVuZCB1c2VycyB0byBhcHBseSBzdHlsZXMgYmFzZWQgb25cbiAgICAgIC8vIHRoZSBjdXJyZW50IGZyYWdtZW50IGluZGV4LlxuICAgICAgaW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiAtMTtcbiAgICAgIGluZGV4ID0gTWF0aC5tYXgoIE1hdGgubWluKCBpbmRleCwgbWF4SW5kZXggKSwgLTEgKTtcbiAgICAgIGN1cnJlbnRTbGlkZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50JywgaW5kZXggKTtcblxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGNoYW5nZWRGcmFnbWVudHM7XG5cbn1cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byB0aGUgc3BlY2lmaWVkIHNsaWRlIGZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7P251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBmcmFnbWVudCB0aGF0XG4gKiBzaG91bGQgYmUgc2hvd24sIC0xIG1lYW5zIGFsbCBhcmUgaW52aXNpYmxlXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IEludGVnZXIgb2Zmc2V0IHRvIGFwcGx5IHRvIHRoZVxuICogZnJhZ21lbnQgaW5kZXhcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGEgY2hhbmdlIHdhcyBtYWRlIGluIGFueVxuICogZnJhZ21lbnRzIHZpc2liaWxpdHkgYXMgcGFydCBvZiB0aGlzIGNhbGxcbiAqL1xuZnVuY3Rpb24gbmF2aWdhdGVGcmFnbWVudCggaW5kZXgsIG9mZnNldCApIHtcblxuICBpZiggY3VycmVudFNsaWRlICYmIGNvbmZpZy5mcmFnbWVudHMgKSB7XG5cbiAgICB2YXIgZnJhZ21lbnRzID0gc29ydEZyYWdtZW50cyggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKTtcbiAgICBpZiggZnJhZ21lbnRzLmxlbmd0aCApIHtcblxuICAgICAgLy8gSWYgbm8gaW5kZXggaXMgc3BlY2lmaWVkLCBmaW5kIHRoZSBjdXJyZW50XG4gICAgICBpZiggdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyApIHtcbiAgICAgICAgdmFyIGxhc3RWaXNpYmxlRnJhZ21lbnQgPSBzb3J0RnJhZ21lbnRzKCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApICkucG9wKCk7XG5cbiAgICAgICAgaWYoIGxhc3RWaXNpYmxlRnJhZ21lbnQgKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludCggbGFzdFZpc2libGVGcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApIHx8IDAsIDEwICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhbiBvZmZzZXQgaXMgc3BlY2lmaWVkLCBhcHBseSBpdCB0byB0aGUgaW5kZXhcbiAgICAgIGlmKCB0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgaW5kZXggKz0gb2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlZEZyYWdtZW50cyA9IHVwZGF0ZUZyYWdtZW50cyggaW5kZXgsIGZyYWdtZW50cyApO1xuXG4gICAgICBpZiggY2hhbmdlZEZyYWdtZW50cy5oaWRkZW4ubGVuZ3RoICkge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KCAnZnJhZ21lbnRoaWRkZW4nLCB7IGZyYWdtZW50OiBjaGFuZ2VkRnJhZ21lbnRzLmhpZGRlblswXSwgZnJhZ21lbnRzOiBjaGFuZ2VkRnJhZ21lbnRzLmhpZGRlbiB9ICk7XG4gICAgICB9XG5cbiAgICAgIGlmKCBjaGFuZ2VkRnJhZ21lbnRzLnNob3duLmxlbmd0aCApIHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudCggJ2ZyYWdtZW50c2hvd24nLCB7IGZyYWdtZW50OiBjaGFuZ2VkRnJhZ21lbnRzLnNob3duWzBdLCBmcmFnbWVudHM6IGNoYW5nZWRGcmFnbWVudHMuc2hvd24gfSApO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVDb250cm9scygpO1xuICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcblxuICAgICAgaWYoIGNvbmZpZy5mcmFnbWVudEluVVJMICkge1xuICAgICAgICB3cml0ZVVSTCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gISEoIGNoYW5nZWRGcmFnbWVudHMuc2hvd24ubGVuZ3RoIHx8IGNoYW5nZWRGcmFnbWVudHMuaGlkZGVuLmxlbmd0aCApO1xuXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG5cbn1cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byB0aGUgbmV4dCBzbGlkZSBmcmFnbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZXJlIHdhcyBhIG5leHQgZnJhZ21lbnQsXG4gKiBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gbmV4dEZyYWdtZW50KCkge1xuXG4gIHJldHVybiBuYXZpZ2F0ZUZyYWdtZW50KCBudWxsLCAxICk7XG5cbn1cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc2xpZGUgZnJhZ21lbnQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSB3YXMgYSBwcmV2aW91cyBmcmFnbWVudCxcbiAqIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBwcmV2aW91c0ZyYWdtZW50KCkge1xuXG4gIHJldHVybiBuYXZpZ2F0ZUZyYWdtZW50KCBudWxsLCAtMSApO1xuXG59XG5cbi8qKlxuICogQ3VlcyBhIG5ldyBhdXRvbWF0ZWQgc2xpZGUgaWYgZW5hYmxlZCBpbiB0aGUgY29uZmlnLlxuICovXG5mdW5jdGlvbiBjdWVBdXRvU2xpZGUoKSB7XG5cbiAgY2FuY2VsQXV0b1NsaWRlKCk7XG5cbiAgaWYoIGN1cnJlbnRTbGlkZSAmJiBjb25maWcuYXV0b1NsaWRlICE9PSBmYWxzZSApIHtcblxuICAgIHZhciBmcmFnbWVudCA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yKCAnLmN1cnJlbnQtZnJhZ21lbnQnICk7XG5cbiAgICAvLyBXaGVuIHRoZSBzbGlkZSBmaXJzdCBhcHBlYXJzIHRoZXJlIGlzIG5vIFwiY3VycmVudFwiIGZyYWdtZW50IHNvXG4gICAgLy8gd2UgbG9vayBmb3IgYSBkYXRhLWF1dG9zbGlkZSB0aW1pbmcgb24gdGhlIGZpcnN0IGZyYWdtZW50XG4gICAgaWYoICFmcmFnbWVudCApIGZyYWdtZW50ID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuZnJhZ21lbnQnICk7XG5cbiAgICB2YXIgZnJhZ21lbnRBdXRvU2xpZGUgPSBmcmFnbWVudCA/IGZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtYXV0b3NsaWRlJyApIDogbnVsbDtcbiAgICB2YXIgcGFyZW50QXV0b1NsaWRlID0gY3VycmVudFNsaWRlLnBhcmVudE5vZGUgPyBjdXJyZW50U2xpZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWF1dG9zbGlkZScgKSA6IG51bGw7XG4gICAgdmFyIHNsaWRlQXV0b1NsaWRlID0gY3VycmVudFNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYXV0b3NsaWRlJyApO1xuXG4gICAgLy8gUGljayB2YWx1ZSBpbiB0aGUgZm9sbG93aW5nIHByaW9yaXR5IG9yZGVyOlxuICAgIC8vIDEuIEN1cnJlbnQgZnJhZ21lbnQncyBkYXRhLWF1dG9zbGlkZVxuICAgIC8vIDIuIEN1cnJlbnQgc2xpZGUncyBkYXRhLWF1dG9zbGlkZVxuICAgIC8vIDMuIFBhcmVudCBzbGlkZSdzIGRhdGEtYXV0b3NsaWRlXG4gICAgLy8gNC4gR2xvYmFsIGF1dG9TbGlkZSBzZXR0aW5nXG4gICAgaWYoIGZyYWdtZW50QXV0b1NsaWRlICkge1xuICAgICAgYXV0b1NsaWRlID0gcGFyc2VJbnQoIGZyYWdtZW50QXV0b1NsaWRlLCAxMCApO1xuICAgIH1cbiAgICBlbHNlIGlmKCBzbGlkZUF1dG9TbGlkZSApIHtcbiAgICAgIGF1dG9TbGlkZSA9IHBhcnNlSW50KCBzbGlkZUF1dG9TbGlkZSwgMTAgKTtcbiAgICB9XG4gICAgZWxzZSBpZiggcGFyZW50QXV0b1NsaWRlICkge1xuICAgICAgYXV0b1NsaWRlID0gcGFyc2VJbnQoIHBhcmVudEF1dG9TbGlkZSwgMTAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhdXRvU2xpZGUgPSBjb25maWcuYXV0b1NsaWRlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBtZWRpYSBlbGVtZW50cyB3aXRoIGRhdGEtYXV0b3BsYXksXG4gICAgLy8gYXV0b21hdGljYWxseSBzZXQgdGhlIGF1dG9TbGlkZSBkdXJhdGlvbiB0byB0aGVcbiAgICAvLyBsZW5ndGggb2YgdGhhdCBtZWRpYS4gTm90IGFwcGxpY2FibGUgaWYgdGhlIHNsaWRlXG4gICAgLy8gaXMgZGl2aWRlZCB1cCBpbnRvIGZyYWdtZW50cy5cbiAgICAvLyBwbGF5YmFja1JhdGUgaXMgYWNjb3VudGVkIGZvciBpbiB0aGUgZHVyYXRpb24uXG4gICAgaWYoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIHRvQXJyYXkoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuICAgICAgICBpZiggZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1hdXRvcGxheScgKSApIHtcbiAgICAgICAgICBpZiggYXV0b1NsaWRlICYmIChlbC5kdXJhdGlvbiAqIDEwMDAgLyBlbC5wbGF5YmFja1JhdGUgKSA+IGF1dG9TbGlkZSApIHtcbiAgICAgICAgICAgIGF1dG9TbGlkZSA9ICggZWwuZHVyYXRpb24gKiAxMDAwIC8gZWwucGxheWJhY2tSYXRlICkgKyAxMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH1cblxuICAgIC8vIEN1ZSB0aGUgbmV4dCBhdXRvLXNsaWRlIGlmOlxuICAgIC8vIC0gVGhlcmUgaXMgYW4gYXV0b1NsaWRlIHZhbHVlXG4gICAgLy8gLSBBdXRvLXNsaWRpbmcgaXNuJ3QgcGF1c2VkIGJ5IHRoZSB1c2VyXG4gICAgLy8gLSBUaGUgcHJlc2VudGF0aW9uIGlzbid0IHBhdXNlZFxuICAgIC8vIC0gVGhlIG92ZXJ2aWV3IGlzbid0IGFjdGl2ZVxuICAgIC8vIC0gVGhlIHByZXNlbnRhdGlvbiBpc24ndCBvdmVyXG4gICAgaWYoIGF1dG9TbGlkZSAmJiAhYXV0b1NsaWRlUGF1c2VkICYmICFpc1BhdXNlZCgpICYmICFpc092ZXJ2aWV3KCkgJiYgKCAhUmV2ZWFsLmlzTGFzdFNsaWRlKCkgfHwgYXZhaWxhYmxlRnJhZ21lbnRzKCkubmV4dCB8fCBjb25maWcubG9vcCA9PT0gdHJ1ZSApICkge1xuICAgICAgYXV0b1NsaWRlVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICB0eXBlb2YgY29uZmlnLmF1dG9TbGlkZU1ldGhvZCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5hdXRvU2xpZGVNZXRob2QoKSA6IG5hdmlnYXRlTmV4dCgpO1xuICAgICAgICBjdWVBdXRvU2xpZGUoKTtcbiAgICAgIH0sIGF1dG9TbGlkZSApO1xuICAgICAgYXV0b1NsaWRlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBpZiggYXV0b1NsaWRlUGxheWVyICkge1xuICAgICAgYXV0b1NsaWRlUGxheWVyLnNldFBsYXlpbmcoIGF1dG9TbGlkZVRpbWVvdXQgIT09IC0xICk7XG4gICAgfVxuXG4gIH1cblxufVxuXG4vKipcbiAqIENhbmNlbHMgYW55IG9uZ29pbmcgcmVxdWVzdCB0byBhdXRvLXNsaWRlLlxuICovXG5mdW5jdGlvbiBjYW5jZWxBdXRvU2xpZGUoKSB7XG5cbiAgY2xlYXJUaW1lb3V0KCBhdXRvU2xpZGVUaW1lb3V0ICk7XG4gIGF1dG9TbGlkZVRpbWVvdXQgPSAtMTtcblxufVxuXG5mdW5jdGlvbiBwYXVzZUF1dG9TbGlkZSgpIHtcblxuICBpZiggYXV0b1NsaWRlICYmICFhdXRvU2xpZGVQYXVzZWQgKSB7XG4gICAgYXV0b1NsaWRlUGF1c2VkID0gdHJ1ZTtcbiAgICBkaXNwYXRjaEV2ZW50KCAnYXV0b3NsaWRlcGF1c2VkJyApO1xuICAgIGNsZWFyVGltZW91dCggYXV0b1NsaWRlVGltZW91dCApO1xuXG4gICAgaWYoIGF1dG9TbGlkZVBsYXllciApIHtcbiAgICAgIGF1dG9TbGlkZVBsYXllci5zZXRQbGF5aW5nKCBmYWxzZSApO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlc3VtZUF1dG9TbGlkZSgpIHtcblxuICBpZiggYXV0b1NsaWRlICYmIGF1dG9TbGlkZVBhdXNlZCApIHtcbiAgICBhdXRvU2xpZGVQYXVzZWQgPSBmYWxzZTtcbiAgICBkaXNwYXRjaEV2ZW50KCAnYXV0b3NsaWRlcmVzdW1lZCcgKTtcbiAgICBjdWVBdXRvU2xpZGUoKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlTGVmdCgpIHtcblxuICAvLyBSZXZlcnNlIGZvciBSVExcbiAgaWYoIGNvbmZpZy5ydGwgKSB7XG4gICAgaWYoICggaXNPdmVydmlldygpIHx8IG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLmxlZnQgKSB7XG4gICAgICBzbGlkZSggaW5kZXhoICsgMSwgY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnZ3JpZCcgPyBpbmRleHYgOiB1bmRlZmluZWQgKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsIG5hdmlnYXRpb25cbiAgZWxzZSBpZiggKCBpc092ZXJ2aWV3KCkgfHwgcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLmxlZnQgKSB7XG4gICAgc2xpZGUoIGluZGV4aCAtIDEsIGNvbmZpZy5uYXZpZ2F0aW9uTW9kZSA9PT0gJ2dyaWQnID8gaW5kZXh2IDogdW5kZWZpbmVkICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZVJpZ2h0KCkge1xuXG4gIGhhc05hdmlnYXRlZFJpZ2h0ID0gdHJ1ZTtcblxuICAvLyBSZXZlcnNlIGZvciBSVExcbiAgaWYoIGNvbmZpZy5ydGwgKSB7XG4gICAgaWYoICggaXNPdmVydmlldygpIHx8IHByZXZpb3VzRnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5yaWdodCApIHtcbiAgICAgIHNsaWRlKCBpbmRleGggLSAxLCBjb25maWcubmF2aWdhdGlvbk1vZGUgPT09ICdncmlkJyA/IGluZGV4diA6IHVuZGVmaW5lZCApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWwgbmF2aWdhdGlvblxuICBlbHNlIGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBuZXh0RnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5yaWdodCApIHtcbiAgICBzbGlkZSggaW5kZXhoICsgMSwgY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnZ3JpZCcgPyBpbmRleHYgOiB1bmRlZmluZWQgKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlVXAoKSB7XG5cbiAgLy8gUHJpb3JpdGl6ZSBoaWRpbmcgZnJhZ21lbnRzXG4gIGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBwcmV2aW91c0ZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkudXAgKSB7XG4gICAgc2xpZGUoIGluZGV4aCwgaW5kZXh2IC0gMSApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gbmF2aWdhdGVEb3duKCkge1xuXG4gIGhhc05hdmlnYXRlZERvd24gPSB0cnVlO1xuXG4gIC8vIFByaW9yaXRpemUgcmV2ZWFsaW5nIGZyYWdtZW50c1xuICBpZiggKCBpc092ZXJ2aWV3KCkgfHwgbmV4dEZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkuZG93biApIHtcbiAgICBzbGlkZSggaW5kZXhoLCBpbmRleHYgKyAxICk7XG4gIH1cblxufVxuXG4vKipcbiAqIE5hdmlnYXRlcyBiYWNrd2FyZHMsIHByaW9yaXRpemVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gKiAxKSBQcmV2aW91cyBmcmFnbWVudFxuICogMikgUHJldmlvdXMgdmVydGljYWwgc2xpZGVcbiAqIDMpIFByZXZpb3VzIGhvcml6b250YWwgc2xpZGVcbiAqL1xuZnVuY3Rpb24gbmF2aWdhdGVQcmV2KCkge1xuXG4gIC8vIFByaW9yaXRpemUgcmV2ZWFsaW5nIGZyYWdtZW50c1xuICBpZiggcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApIHtcbiAgICBpZiggYXZhaWxhYmxlUm91dGVzKCkudXAgKSB7XG4gICAgICBuYXZpZ2F0ZVVwKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gRmV0Y2ggdGhlIHByZXZpb3VzIGhvcml6b250YWwgc2xpZGUsIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgdmFyIHByZXZpb3VzU2xpZGU7XG5cbiAgICAgIGlmKCBjb25maWcucnRsICkge1xuICAgICAgICBwcmV2aW91c1NsaWRlID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKyAnLmZ1dHVyZScgKSApLnBvcCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByZXZpb3VzU2xpZGUgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiArICcucGFzdCcgKSApLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiggcHJldmlvdXNTbGlkZSApIHtcbiAgICAgICAgdmFyIHYgPSAoIHByZXZpb3VzU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkubGVuZ3RoIC0gMSApIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGggPSBpbmRleGggLSAxO1xuICAgICAgICBzbGlkZSggaCwgdiApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogVGhlIHJldmVyc2Ugb2YgI25hdmlnYXRlUHJldigpLlxuICovXG5mdW5jdGlvbiBuYXZpZ2F0ZU5leHQoKSB7XG5cbiAgaGFzTmF2aWdhdGVkUmlnaHQgPSB0cnVlO1xuICBoYXNOYXZpZ2F0ZWREb3duID0gdHJ1ZTtcblxuICAvLyBQcmlvcml0aXplIHJldmVhbGluZyBmcmFnbWVudHNcbiAgaWYoIG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApIHtcblxuICAgIHZhciByb3V0ZXMgPSBhdmFpbGFibGVSb3V0ZXMoKTtcblxuICAgIC8vIFdoZW4gbG9vcGluZyBpcyBlbmFibGVkIGByb3V0ZXMuZG93bmAgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIC8vIHNvIHdlIG5lZWQgYSBzZXBhcmF0ZSBjaGVjayBmb3Igd2hlbiB3ZSd2ZSByZWFjaGVkIHRoZVxuICAgIC8vIGVuZCBvZiBhIHN0YWNrIGFuZCBzaG91bGQgbW92ZSBob3Jpem9udGFsbHlcbiAgICBpZiggcm91dGVzLmRvd24gJiYgcm91dGVzLnJpZ2h0ICYmIGNvbmZpZy5sb29wICYmIFJldmVhbC5pc0xhc3RWZXJ0aWNhbFNsaWRlKCBjdXJyZW50U2xpZGUgKSApIHtcbiAgICAgIHJvdXRlcy5kb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIHJvdXRlcy5kb3duICkge1xuICAgICAgbmF2aWdhdGVEb3duKCk7XG4gICAgfVxuICAgIGVsc2UgaWYoIGNvbmZpZy5ydGwgKSB7XG4gICAgICBuYXZpZ2F0ZUxlZnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBuYXZpZ2F0ZVJpZ2h0KCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHRhcmdldCBlbGVtZW50IHByZXZlbnRzIHRoZSB0cmlnZ2VyaW5nIG9mXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICovXG5mdW5jdGlvbiBpc1N3aXBlUHJldmVudGVkKCB0YXJnZXQgKSB7XG5cbiAgd2hpbGUoIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtcHJldmVudC1zd2lwZScgKSApIHJldHVybiB0cnVlO1xuICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xuXG59XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vKipcbiAqIENhbGxlZCBieSBhbGwgZXZlbnQgaGFuZGxlcnMgdGhhdCBhcmUgYmFzZWQgb24gdXNlclxuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IFtldmVudF1cbiAqL1xuZnVuY3Rpb24gb25Vc2VySW5wdXQoIGV2ZW50ICkge1xuXG4gIGlmKCBjb25maWcuYXV0b1NsaWRlU3RvcHBhYmxlICkge1xuICAgIHBhdXNlQXV0b1NsaWRlKCk7XG4gIH1cblxufVxuXG4vKipcbiAqIENhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBtb3VzZSBpbnB1dCBhdCB0aGUgZG9jdW1lbnQgbGV2ZWxcbiAqIHRvIGRldGVybWluZSBpZiB0aGUgY3Vyc29yIGlzIGFjdGl2ZSBvciBub3QuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uRG9jdW1lbnRDdXJzb3JBY3RpdmUoIGV2ZW50ICkge1xuXG4gIHNob3dDdXJzb3IoKTtcblxuICBjbGVhclRpbWVvdXQoIGN1cnNvckluYWN0aXZlVGltZW91dCApO1xuXG4gIGN1cnNvckluYWN0aXZlVGltZW91dCA9IHNldFRpbWVvdXQoIGhpZGVDdXJzb3IsIGNvbmZpZy5oaWRlQ3Vyc29yVGltZSApO1xuXG59XG5cbi8qKlxuICogSGFuZGxlciBmb3IgdGhlIGRvY3VtZW50IGxldmVsICdrZXlwcmVzcycgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlQcmVzcyggZXZlbnQgKSB7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHByZXNzZWQga2V5IGlzIHF1ZXN0aW9uIG1hcmtcbiAgaWYoIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmNoYXJDb2RlID09PSA2MyApIHtcbiAgICB0b2dnbGVIZWxwKCk7XG4gIH1cblxufVxuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHRoZSBkb2N1bWVudCBsZXZlbCAna2V5ZG93bicgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlEb3duKCBldmVudCApIHtcblxuICAvLyBJZiB0aGVyZSdzIGEgY29uZGl0aW9uIHNwZWNpZmllZCBhbmQgaXQgcmV0dXJucyBmYWxzZSxcbiAgLy8gaWdub3JlIHRoaXMgZXZlbnRcbiAgaWYoIHR5cGVvZiBjb25maWcua2V5Ym9hcmRDb25kaXRpb24gPT09ICdmdW5jdGlvbicgJiYgY29uZmlnLmtleWJvYXJkQ29uZGl0aW9uKGV2ZW50KSA9PT0gZmFsc2UgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBTaG9ydGhhbmRcbiAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIC8vIFJlbWVtYmVyIGlmIGF1dG8tc2xpZGluZyB3YXMgcGF1c2VkIHNvIHdlIGNhbiB0b2dnbGUgaXRcbiAgdmFyIGF1dG9TbGlkZVdhc1BhdXNlZCA9IGF1dG9TbGlkZVBhdXNlZDtcblxuICBvblVzZXJJbnB1dCggZXZlbnQgKTtcblxuICAvLyBJcyB0aGVyZSBhIGZvY3VzZWQgZWxlbWVudCB0aGF0IGNvdWxkIGJlIHVzaW5nIHRoZSBrZXlib2FyZD9cbiAgdmFyIGFjdGl2ZUVsZW1lbnRJc0NFID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSAhPT0gJ2luaGVyaXQnO1xuICB2YXIgYWN0aXZlRWxlbWVudElzSW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSAmJiAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUgKTtcbiAgdmFyIGFjdGl2ZUVsZW1lbnRJc05vdGVzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTmFtZSAmJiAvc3BlYWtlci1ub3Rlcy9pLnRlc3QoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lKTtcblxuICAvLyBXaGl0ZWxpc3Qgc3BlY2lmaWMgbW9kaWZpZWQgKyBrZXljb2RlIGNvbWJpbmF0aW9uc1xuICB2YXIgcHJldlNsaWRlU2hvcnRjdXQgPSBldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXlDb2RlID09PSAzMjtcbiAgdmFyIGZpcnN0U2xpZGVTaG9ydGN1dCA9IGV2ZW50LnNoaWZ0S2V5ICYmIGtleUNvZGUgPT09IDM3O1xuICB2YXIgbGFzdFNsaWRlU2hvcnRjdXQgPSBldmVudC5zaGlmdEtleSAmJiBrZXlDb2RlID09PSAzOTtcblxuICAvLyBQcmV2ZW50IGFsbCBvdGhlciBldmVudHMgd2hlbiBhIG1vZGlmaWVyIGlzIHByZXNzZWRcbiAgdmFyIHVudXNlZE1vZGlmaWVyID0gXHQhcHJldlNsaWRlU2hvcnRjdXQgJiYgIWZpcnN0U2xpZGVTaG9ydGN1dCAmJiAhbGFzdFNsaWRlU2hvcnRjdXQgJiZcbiAgICAoIGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgKTtcblxuICAvLyBEaXNyZWdhcmQgdGhlIGV2ZW50IGlmIHRoZXJlJ3MgYSBmb2N1c2VkIGVsZW1lbnQgb3IgYVxuICAvLyBrZXlib2FyZCBtb2RpZmllciBrZXkgaXMgcHJlc2VudFxuICBpZiggYWN0aXZlRWxlbWVudElzQ0UgfHwgYWN0aXZlRWxlbWVudElzSW5wdXQgfHwgYWN0aXZlRWxlbWVudElzTm90ZXMgfHwgdW51c2VkTW9kaWZpZXIgKSByZXR1cm47XG5cbiAgLy8gV2hpbGUgcGF1c2VkIG9ubHkgYWxsb3cgcmVzdW1lIGtleWJvYXJkIGV2ZW50czsgJ2InLCAndicsICcuJ1xuICB2YXIgcmVzdW1lS2V5Q29kZXMgPSBbNjYsODYsMTkwLDE5MV07XG4gIHZhciBrZXk7XG5cbiAgLy8gQ3VzdG9tIGtleSBiaW5kaW5ncyBmb3IgdG9nZ2xlUGF1c2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVzdW1lXG4gIGlmKCB0eXBlb2YgY29uZmlnLmtleWJvYXJkID09PSAnb2JqZWN0JyApIHtcbiAgICBmb3IoIGtleSBpbiBjb25maWcua2V5Ym9hcmQgKSB7XG4gICAgICBpZiggY29uZmlnLmtleWJvYXJkW2tleV0gPT09ICd0b2dnbGVQYXVzZScgKSB7XG4gICAgICAgIHJlc3VtZUtleUNvZGVzLnB1c2goIHBhcnNlSW50KCBrZXksIDEwICkgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiggaXNQYXVzZWQoKSAmJiByZXN1bWVLZXlDb2Rlcy5pbmRleE9mKCBrZXlDb2RlICkgPT09IC0xICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFVzZSBsaW5lYXIgbmF2aWdhdGlvbiBpZiB3ZSdyZSBjb25maWd1cmVkIHRvIE9SIGlmXG4gIC8vIHRoZSBwcmVzZW50YXRpb24gaXMgb25lLWRpbWVuc2lvbmFsXG4gIHZhciB1c2VMaW5lYXJNb2RlID0gY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnbGluZWFyJyB8fCAhaGFzSG9yaXpvbnRhbFNsaWRlcygpIHx8ICFoYXNWZXJ0aWNhbFNsaWRlcygpO1xuXG4gIHZhciB0cmlnZ2VyZWQgPSBmYWxzZTtcblxuICAvLyAxLiBVc2VyIGRlZmluZWQga2V5IGJpbmRpbmdzXG4gIGlmKCB0eXBlb2YgY29uZmlnLmtleWJvYXJkID09PSAnb2JqZWN0JyApIHtcblxuICAgIGZvcigga2V5IGluIGNvbmZpZy5rZXlib2FyZCApIHtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBiaW5kaW5nIG1hdGNoZXMgdGhlIHByZXNzZWQga2V5XG4gICAgICBpZiggcGFyc2VJbnQoIGtleSwgMTAgKSA9PT0ga2V5Q29kZSApIHtcblxuICAgICAgICB2YXIgdmFsdWUgPSBjb25maWcua2V5Ym9hcmRbIGtleSBdO1xuXG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgdmFsdWUuYXBwbHkoIG51bGwsIFsgZXZlbnQgXSApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cmluZyBzaG9ydGN1dHMgdG8gcmV2ZWFsLmpzIEFQSVxuICAgICAgICBlbHNlIGlmKCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBSZXZlYWxbIHZhbHVlIF0gPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgUmV2ZWFsWyB2YWx1ZSBdLmNhbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJlZCA9IHRydWU7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gMi4gUmVnaXN0ZXJlZCBjdXN0b20ga2V5IGJpbmRpbmdzXG4gIGlmKCB0cmlnZ2VyZWQgPT09IGZhbHNlICkge1xuXG4gICAgZm9yKCBrZXkgaW4gcmVnaXN0ZXJlZEtleUJpbmRpbmdzICkge1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGJpbmRpbmcgbWF0Y2hlcyB0aGUgcHJlc3NlZCBrZXlcbiAgICAgIGlmKCBwYXJzZUludCgga2V5LCAxMCApID09PSBrZXlDb2RlICkge1xuXG4gICAgICAgIHZhciBhY3Rpb24gPSByZWdpc3RlcmVkS2V5QmluZGluZ3NbIGtleSBdLmNhbGxiYWNrO1xuXG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGlmKCB0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgIGFjdGlvbi5hcHBseSggbnVsbCwgWyBldmVudCBdICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RyaW5nIHNob3J0Y3V0cyB0byByZXZlYWwuanMgQVBJXG4gICAgICAgIGVsc2UgaWYoIHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBSZXZlYWxbIGFjdGlvbiBdID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgIFJldmVhbFsgYWN0aW9uIF0uY2FsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAzLiBTeXN0ZW0gZGVmaW5lZCBrZXkgYmluZGluZ3NcbiAgaWYoIHRyaWdnZXJlZCA9PT0gZmFsc2UgKSB7XG5cbiAgICAvLyBBc3N1bWUgdHJ1ZSBhbmQgdHJ5IHRvIHByb3ZlIGZhbHNlXG4gICAgdHJpZ2dlcmVkID0gdHJ1ZTtcblxuICAgIC8vIFAsIFBBR0UgVVBcbiAgICBpZigga2V5Q29kZSA9PT0gODAgfHwga2V5Q29kZSA9PT0gMzMgKSB7XG4gICAgICBuYXZpZ2F0ZVByZXYoKTtcbiAgICB9XG4gICAgLy8gTiwgUEFHRSBET1dOXG4gICAgZWxzZSBpZigga2V5Q29kZSA9PT0gNzggfHwga2V5Q29kZSA9PT0gMzQgKSB7XG4gICAgICBuYXZpZ2F0ZU5leHQoKTtcbiAgICB9XG4gICAgLy8gSCwgTEVGVFxuICAgIGVsc2UgaWYoIGtleUNvZGUgPT09IDcyIHx8IGtleUNvZGUgPT09IDM3ICkge1xuICAgICAgaWYoIGZpcnN0U2xpZGVTaG9ydGN1dCApIHtcbiAgICAgICAgc2xpZGUoIDAgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoICFpc092ZXJ2aWV3KCkgJiYgdXNlTGluZWFyTW9kZSApIHtcbiAgICAgICAgbmF2aWdhdGVQcmV2KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGVMZWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEwsIFJJR0hUXG4gICAgZWxzZSBpZigga2V5Q29kZSA9PT0gNzYgfHwga2V5Q29kZSA9PT0gMzkgKSB7XG4gICAgICBpZiggbGFzdFNsaWRlU2hvcnRjdXQgKSB7XG4gICAgICAgIHNsaWRlKCBOdW1iZXIuTUFYX1ZBTFVFICk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCAhaXNPdmVydmlldygpICYmIHVzZUxpbmVhck1vZGUgKSB7XG4gICAgICAgIG5hdmlnYXRlTmV4dCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5hdmlnYXRlUmlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSywgVVBcbiAgICBlbHNlIGlmKCBrZXlDb2RlID09PSA3NSB8fCBrZXlDb2RlID09PSAzOCApIHtcbiAgICAgIGlmKCAhaXNPdmVydmlldygpICYmIHVzZUxpbmVhck1vZGUgKSB7XG4gICAgICAgIG5hdmlnYXRlUHJldigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5hdmlnYXRlVXAoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSiwgRE9XTlxuICAgIGVsc2UgaWYoIGtleUNvZGUgPT09IDc0IHx8IGtleUNvZGUgPT09IDQwICkge1xuICAgICAgaWYoICFpc092ZXJ2aWV3KCkgJiYgdXNlTGluZWFyTW9kZSApIHtcbiAgICAgICAgbmF2aWdhdGVOZXh0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGVEb3duKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEhPTUVcbiAgICBlbHNlIGlmKCBrZXlDb2RlID09PSAzNiApIHtcbiAgICAgIHNsaWRlKCAwICk7XG4gICAgfVxuICAgIC8vIEVORFxuICAgIGVsc2UgaWYoIGtleUNvZGUgPT09IDM1ICkge1xuICAgICAgc2xpZGUoIE51bWJlci5NQVhfVkFMVUUgKTtcbiAgICB9XG4gICAgLy8gU1BBQ0VcbiAgICBlbHNlIGlmKCBrZXlDb2RlID09PSAzMiApIHtcbiAgICAgIGlmKCBpc092ZXJ2aWV3KCkgKSB7XG4gICAgICAgIGRlYWN0aXZhdGVPdmVydmlldygpO1xuICAgICAgfVxuICAgICAgaWYoIGV2ZW50LnNoaWZ0S2V5ICkge1xuICAgICAgICBuYXZpZ2F0ZVByZXYoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuYXZpZ2F0ZU5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVFdPLVNQT1QsIFNFTUlDT0xPTiwgQiwgViwgUEVSSU9ELCBMT0dJVEVDSCBQUkVTRU5URVIgVE9PTFMgXCJCTEFDSyBTQ1JFRU5cIiBCVVRUT05cbiAgICBlbHNlIGlmKCBrZXlDb2RlID09PSA1OCB8fCBrZXlDb2RlID09PSA1OSB8fCBrZXlDb2RlID09PSA2NiB8fCBrZXlDb2RlID09PSA4NiB8fCBrZXlDb2RlID09PSAxOTAgfHwga2V5Q29kZSA9PT0gMTkxICkge1xuICAgICAgdG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gICAgLy8gRlxuICAgIGVsc2UgaWYoIGtleUNvZGUgPT09IDcwICkge1xuICAgICAgZW50ZXJGdWxsc2NyZWVuKCk7XG4gICAgfVxuICAgIC8vIEFcbiAgICBlbHNlIGlmKCBrZXlDb2RlID09PSA2NSApIHtcbiAgICAgIGlmICggY29uZmlnLmF1dG9TbGlkZVN0b3BwYWJsZSApIHtcbiAgICAgICAgdG9nZ2xlQXV0b1NsaWRlKCBhdXRvU2xpZGVXYXNQYXVzZWQgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIElmIHRoZSBpbnB1dCByZXN1bHRlZCBpbiBhIHRyaWdnZXJlZCBhY3Rpb24gd2Ugc2hvdWxkIHByZXZlbnRcbiAgLy8gdGhlIGJyb3dzZXJzIGRlZmF1bHQgYmVoYXZpb3JcbiAgaWYoIHRyaWdnZXJlZCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8vIEVTQyBvciBPIGtleVxuICBlbHNlIGlmICggKCBrZXlDb2RlID09PSAyNyB8fCBrZXlDb2RlID09PSA3OSApICYmIGZlYXR1cmVzLnRyYW5zZm9ybXMzZCApIHtcbiAgICBpZiggZG9tLm92ZXJsYXkgKSB7XG4gICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0b2dnbGVPdmVydmlldygpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvLyBJZiBhdXRvLXNsaWRpbmcgaXMgZW5hYmxlZCB3ZSBuZWVkIHRvIGN1ZSB1cFxuICAvLyBhbm90aGVyIHRpbWVvdXRcbiAgY3VlQXV0b1NsaWRlKCk7XG5cbn1cblxuLyoqXG4gKiBIYW5kbGVyIGZvciB0aGUgJ3RvdWNoc3RhcnQnIGV2ZW50LCBlbmFibGVzIHN1cHBvcnQgZm9yXG4gKiBzd2lwZSBhbmQgcGluY2ggZ2VzdHVyZXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cbiAgaWYoIGlzU3dpcGVQcmV2ZW50ZWQoIGV2ZW50LnRhcmdldCApICkgcmV0dXJuIHRydWU7XG5cbiAgdG91Y2guc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICB0b3VjaC5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIHRvdWNoLnN0YXJ0Q291bnQgPSBldmVudC50b3VjaGVzLmxlbmd0aDtcblxufVxuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHRoZSAndG91Y2htb3ZlJyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG4gIGlmKCBpc1N3aXBlUHJldmVudGVkKCBldmVudC50YXJnZXQgKSApIHJldHVybiB0cnVlO1xuXG4gIC8vIEVhY2ggdG91Y2ggc2hvdWxkIG9ubHkgdHJpZ2dlciBvbmUgYWN0aW9uXG4gIGlmKCAhdG91Y2guY2FwdHVyZWQgKSB7XG4gICAgb25Vc2VySW5wdXQoIGV2ZW50ICk7XG5cbiAgICB2YXIgY3VycmVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgdmFyIGN1cnJlbnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXG4gICAgLy8gVGhlcmUgd2FzIG9ubHkgb25lIHRvdWNoIHBvaW50LCBsb29rIGZvciBhIHN3aXBlXG4gICAgaWYoIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRvdWNoLnN0YXJ0Q291bnQgIT09IDIgKSB7XG5cbiAgICAgIHZhciBkZWx0YVggPSBjdXJyZW50WCAtIHRvdWNoLnN0YXJ0WCxcbiAgICAgICAgZGVsdGFZID0gY3VycmVudFkgLSB0b3VjaC5zdGFydFk7XG5cbiAgICAgIGlmKCBkZWx0YVggPiB0b3VjaC50aHJlc2hvbGQgJiYgTWF0aC5hYnMoIGRlbHRhWCApID4gTWF0aC5hYnMoIGRlbHRhWSApICkge1xuICAgICAgICB0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG4gICAgICAgIGlmKCBjb25maWcubmF2aWdhdGlvbk1vZGUgPT09ICdsaW5lYXInICkge1xuICAgICAgICAgIGlmKCBjb25maWcucnRsICkge1xuICAgICAgICAgICAgbmF2aWdhdGVOZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGVQcmV2KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG5hdmlnYXRlTGVmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCBkZWx0YVggPCAtdG91Y2gudGhyZXNob2xkICYmIE1hdGguYWJzKCBkZWx0YVggKSA+IE1hdGguYWJzKCBkZWx0YVkgKSApIHtcbiAgICAgICAgdG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuICAgICAgICBpZiggY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnbGluZWFyJyApIHtcbiAgICAgICAgICBpZiggY29uZmlnLnJ0bCApIHtcbiAgICAgICAgICAgIG5hdmlnYXRlUHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5hdmlnYXRlTmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuYXZpZ2F0ZVJpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIGRlbHRhWSA+IHRvdWNoLnRocmVzaG9sZCApIHtcbiAgICAgICAgdG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuICAgICAgICBpZiggY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnbGluZWFyJyApIHtcbiAgICAgICAgICBuYXZpZ2F0ZVByZXYoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuYXZpZ2F0ZVVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIGRlbHRhWSA8IC10b3VjaC50aHJlc2hvbGQgKSB7XG4gICAgICAgIHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcbiAgICAgICAgaWYoIGNvbmZpZy5uYXZpZ2F0aW9uTW9kZSA9PT0gJ2xpbmVhcicgKSB7XG4gICAgICAgICAgbmF2aWdhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmF2aWdhdGVEb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgZW1iZWRkZWQsIG9ubHkgYmxvY2sgdG91Y2ggZXZlbnRzIGlmIHRoZXkgaGF2ZVxuICAgICAgLy8gdHJpZ2dlcmVkIGFuIGFjdGlvblxuICAgICAgaWYoIGNvbmZpZy5lbWJlZGRlZCApIHtcbiAgICAgICAgaWYoIHRvdWNoLmNhcHR1cmVkIHx8IGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTm90IGVtYmVkZGVkPyBCbG9jayB0aGVtIGFsbCB0byBhdm9pZCBuZWVkbGVzcyB0b3NzaW5nXG4gICAgICAvLyBhcm91bmQgb2YgdGhlIHZpZXdwb3J0IGluIGlPU1xuICAgICAgZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgLy8gVGhlcmUncyBhIGJ1ZyB3aXRoIHN3aXBpbmcgb24gc29tZSBBbmRyb2lkIGRldmljZXMgdW5sZXNzXG4gIC8vIHRoZSBkZWZhdWx0IGFjdGlvbiBpcyBhbHdheXMgcHJldmVudGVkXG4gIGVsc2UgaWYoIFVBLm1hdGNoKCAvYW5kcm9pZC9naSApICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHRoZSAndG91Y2hlbmQnIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICovXG5mdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuICB0b3VjaC5jYXB0dXJlZCA9IGZhbHNlO1xuXG59XG5cbi8qKlxuICogQ29udmVydCBwb2ludGVyIGRvd24gdG8gdG91Y2ggc3RhcnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oIGV2ZW50ICkge1xuXG4gIGlmKCBldmVudC5wb2ludGVyVHlwZSA9PT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIiApIHtcbiAgICBldmVudC50b3VjaGVzID0gW3sgY2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WSB9XTtcbiAgICBvblRvdWNoU3RhcnQoIGV2ZW50ICk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnQgcG9pbnRlciBtb3ZlIHRvIHRvdWNoIG1vdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoIGV2ZW50ICkge1xuXG4gIGlmKCBldmVudC5wb2ludGVyVHlwZSA9PT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIiApICB7XG4gICAgZXZlbnQudG91Y2hlcyA9IFt7IGNsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFkgfV07XG4gICAgb25Ub3VjaE1vdmUoIGV2ZW50ICk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnQgcG9pbnRlciB1cCB0byB0b3VjaCBlbmQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uUG9pbnRlclVwKCBldmVudCApIHtcblxuICBpZiggZXZlbnQucG9pbnRlclR5cGUgPT09IGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgKSAge1xuICAgIGV2ZW50LnRvdWNoZXMgPSBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dO1xuICAgIG9uVG91Y2hFbmQoIGV2ZW50ICk7XG4gIH1cblxufVxuXG4vKipcbiAqIEhhbmRsZXMgbW91c2Ugd2hlZWwgc2Nyb2xsaW5nLCB0aHJvdHRsZWQgdG8gYXZvaWQgc2tpcHBpbmdcbiAqIG11bHRpcGxlIHNsaWRlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlU2Nyb2xsKCBldmVudCApIHtcblxuICBpZiggRGF0ZS5ub3coKSAtIGxhc3RNb3VzZVdoZWVsU3RlcCA+IDYwMCApIHtcblxuICAgIGxhc3RNb3VzZVdoZWVsU3RlcCA9IERhdGUubm93KCk7XG5cbiAgICB2YXIgZGVsdGEgPSBldmVudC5kZXRhaWwgfHwgLWV2ZW50LndoZWVsRGVsdGE7XG4gICAgaWYoIGRlbHRhID4gMCApIHtcbiAgICAgIG5hdmlnYXRlTmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIGlmKCBkZWx0YSA8IDAgKSB7XG4gICAgICBuYXZpZ2F0ZVByZXYoKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogQ2xpY2tpbmcgb24gdGhlIHByb2dyZXNzIGJhciByZXN1bHRzIGluIGEgbmF2aWdhdGlvbiB0byB0aGVcbiAqIGNsb3Nlc3QgYXBwcm94aW1hdGUgaG9yaXpvbnRhbCBzbGlkZSB1c2luZyB0aGlzIGVxdWF0aW9uOlxuICpcbiAqICggY2xpY2tYIC8gcHJlc2VudGF0aW9uV2lkdGggKSAqIG51bWJlck9mU2xpZGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uUHJvZ3Jlc3NDbGlja2VkKCBldmVudCApIHtcblxuICBvblVzZXJJbnB1dCggZXZlbnQgKTtcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHZhciBzbGlkZXNUb3RhbCA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKS5sZW5ndGg7XG4gIHZhciBzbGlkZUluZGV4ID0gTWF0aC5mbG9vciggKCBldmVudC5jbGllbnRYIC8gZG9tLndyYXBwZXIub2Zmc2V0V2lkdGggKSAqIHNsaWRlc1RvdGFsICk7XG5cbiAgaWYoIGNvbmZpZy5ydGwgKSB7XG4gICAgc2xpZGVJbmRleCA9IHNsaWRlc1RvdGFsIC0gc2xpZGVJbmRleDtcbiAgfVxuXG4gIHNsaWRlKCBzbGlkZUluZGV4ICk7XG5cbn1cblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBuYXZpZ2F0aW9uIGNvbnRyb2wgYnV0dG9ucy5cbiAqL1xuZnVuY3Rpb24gb25OYXZpZ2F0ZUxlZnRDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgY29uZmlnLm5hdmlnYXRpb25Nb2RlID09PSAnbGluZWFyJyA/IG5hdmlnYXRlUHJldigpIDogbmF2aWdhdGVMZWZ0KCk7IH1cbmZ1bmN0aW9uIG9uTmF2aWdhdGVSaWdodENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBjb25maWcubmF2aWdhdGlvbk1vZGUgPT09ICdsaW5lYXInID8gbmF2aWdhdGVOZXh0KCkgOiBuYXZpZ2F0ZVJpZ2h0KCk7IH1cbmZ1bmN0aW9uIG9uTmF2aWdhdGVVcENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZVVwKCk7IH1cbmZ1bmN0aW9uIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlRG93bigpOyB9XG5mdW5jdGlvbiBvbk5hdmlnYXRlUHJldkNsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZVByZXYoKTsgfVxuZnVuY3Rpb24gb25OYXZpZ2F0ZU5leHRDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVOZXh0KCk7IH1cblxuLyoqXG4gKiBIYW5kbGVyIGZvciB0aGUgd2luZG93IGxldmVsICdoYXNoY2hhbmdlJyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW2V2ZW50XVxuICovXG5mdW5jdGlvbiBvbldpbmRvd0hhc2hDaGFuZ2UoIGV2ZW50ICkge1xuXG4gIHJlYWRVUkwoKTtcblxufVxuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHRoZSB3aW5kb3cgbGV2ZWwgJ3Jlc2l6ZScgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IFtldmVudF1cbiAqL1xuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoIGV2ZW50ICkge1xuXG4gIGxheW91dCgpO1xuXG59XG5cbi8qKlxuICogSGFuZGxlIGZvciB0aGUgd2luZG93IGxldmVsICd2aXNpYmlsaXR5Y2hhbmdlJyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW2V2ZW50XVxuICovXG5mdW5jdGlvbiBvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlKCBldmVudCApIHtcblxuICB2YXIgaXNIaWRkZW4gPSAgZG9jdW1lbnQud2Via2l0SGlkZGVuIHx8XG4gICAgZG9jdW1lbnQubXNIaWRkZW4gfHxcbiAgICBkb2N1bWVudC5oaWRkZW47XG5cbiAgLy8gSWYsIGFmdGVyIGNsaWNraW5nIGEgbGluayBvciBzaW1pbGFyIGFuZCB3ZSdyZSBjb21pbmcgYmFjayxcbiAgLy8gZm9jdXMgdGhlIGRvY3VtZW50LmJvZHkgdG8gZW5zdXJlIHdlIGNhbiB1c2Uga2V5Ym9hcmQgc2hvcnRjdXRzXG4gIGlmKCBpc0hpZGRlbiA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICAvLyBOb3QgYWxsIGVsZW1lbnRzIHN1cHBvcnQgLmJsdXIoKSAtIFNWR3MgYW1vbmcgdGhlbS5cbiAgICBpZiggdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gIH1cblxufVxuXG4vKipcbiAqIEludm9rZWQgd2hlbiBhIHNsaWRlIGlzIGFuZCB3ZSdyZSBpbiB0aGUgb3ZlcnZpZXcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uT3ZlcnZpZXdTbGlkZUNsaWNrZWQoIGV2ZW50ICkge1xuXG4gIC8vIFRPRE8gVGhlcmUncyBhIGJ1ZyBoZXJlIHdoZXJlIHRoZSBldmVudCBsaXN0ZW5lcnMgYXJlIG5vdFxuICAvLyByZW1vdmVkIGFmdGVyIGRlYWN0aXZhdGluZyB0aGUgb3ZlcnZpZXcuXG4gIGlmKCBldmVudHNBcmVCb3VuZCAmJiBpc092ZXJ2aWV3KCkgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgd2hpbGUoIGVsZW1lbnQgJiYgIWVsZW1lbnQubm9kZU5hbWUubWF0Y2goIC9zZWN0aW9uL2dpICkgKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIGlmKCBlbGVtZW50ICYmICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2Rpc2FibGVkJyApICkge1xuXG4gICAgICBkZWFjdGl2YXRlT3ZlcnZpZXcoKTtcblxuICAgICAgaWYoIGVsZW1lbnQubm9kZU5hbWUubWF0Y2goIC9zZWN0aW9uL2dpICkgKSB7XG4gICAgICAgIHZhciBoID0gcGFyc2VJbnQoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJyApLCAxMCApLFxuICAgICAgICAgIHYgPSBwYXJzZUludCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LXYnICksIDEwICk7XG5cbiAgICAgICAgc2xpZGUoIGgsIHYgKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogSGFuZGxlcyBjbGlja3Mgb24gbGlua3MgdGhhdCBhcmUgc2V0IHRvIHByZXZpZXcgaW4gdGhlXG4gKiBpZnJhbWUgb3ZlcmxheS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gb25QcmV2aWV3TGlua0NsaWNrZWQoIGV2ZW50ICkge1xuXG4gIGlmKCBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuaGFzQXR0cmlidXRlKCAnaHJlZicgKSApIHtcbiAgICB2YXIgdXJsID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoICdocmVmJyApO1xuICAgIGlmKCB1cmwgKSB7XG4gICAgICBzaG93UHJldmlldyggdXJsICk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogSGFuZGxlcyBjbGljayBvbiB0aGUgYXV0by1zbGlkaW5nIGNvbnRyb2xzIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IFtldmVudF1cbiAqL1xuZnVuY3Rpb24gb25BdXRvU2xpZGVQbGF5ZXJDbGljayggZXZlbnQgKSB7XG5cbiAgLy8gUmVwbGF5XG4gIGlmKCBSZXZlYWwuaXNMYXN0U2xpZGUoKSAmJiBjb25maWcubG9vcCA9PT0gZmFsc2UgKSB7XG4gICAgc2xpZGUoIDAsIDAgKTtcbiAgICByZXN1bWVBdXRvU2xpZGUoKTtcbiAgfVxuICAvLyBSZXN1bWVcbiAgZWxzZSBpZiggYXV0b1NsaWRlUGF1c2VkICkge1xuICAgIHJlc3VtZUF1dG9TbGlkZSgpO1xuICB9XG4gIC8vIFBhdXNlXG4gIGVsc2Uge1xuICAgIHBhdXNlQXV0b1NsaWRlKCk7XG4gIH1cblxufVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQTEFZQkFDSyBDT01QT05FTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgcGxheWJhY2sgY29tcG9uZW50LCB3aGljaCBkaXNwbGF5c1xuICogcGxheS9wYXVzZS9wcm9ncmVzcyBjb250cm9scy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbXBvbmVudCB3aWxsIGFwcGVuZFxuICogaXRzZWxmIHRvIHRoaXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb2dyZXNzQ2hlY2sgQSBtZXRob2Qgd2hpY2ggd2lsbCBiZVxuICogY2FsbGVkIGZyZXF1ZW50bHkgdG8gZ2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9uIGEgcmFuZ2VcbiAqIG9mIDAtMVxuICovXG5mdW5jdGlvbiBQbGF5YmFjayggY29udGFpbmVyLCBwcm9ncmVzc0NoZWNrICkge1xuXG4gIC8vIENvc21ldGljc1xuICB0aGlzLmRpYW1ldGVyID0gMTAwO1xuICB0aGlzLmRpYW1ldGVyMiA9IHRoaXMuZGlhbWV0ZXIvMjtcbiAgdGhpcy50aGlja25lc3MgPSA2O1xuXG4gIC8vIEZsYWdzIGlmIHdlIGFyZSBjdXJyZW50bHkgcGxheWluZ1xuICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuICAvLyBDdXJyZW50IHByb2dyZXNzIG9uIGEgMC0xIHJhbmdlXG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXG4gIC8vIFVzZWQgdG8gbG9vcCB0aGUgYW5pbWF0aW9uIHNtb290aGx5XG4gIHRoaXMucHJvZ3Jlc3NPZmZzZXQgPSAxO1xuXG4gIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICB0aGlzLnByb2dyZXNzQ2hlY2sgPSBwcm9ncmVzc0NoZWNrO1xuXG4gIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcbiAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gJ3BsYXliYWNrJztcbiAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmRpYW1ldGVyO1xuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmRpYW1ldGVyO1xuICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuZGlhbWV0ZXIyICsgJ3B4JztcbiAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaWFtZXRlcjIgKyAncHgnO1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cbiAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMuY2FudmFzICk7XG5cbiAgdGhpcy5yZW5kZXIoKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5QbGF5YmFjay5wcm90b3R5cGUuc2V0UGxheWluZyA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblxuICB2YXIgd2FzUGxheWluZyA9IHRoaXMucGxheWluZztcblxuICB0aGlzLnBsYXlpbmcgPSB2YWx1ZTtcblxuICAvLyBTdGFydCByZXBhaW50aW5nIGlmIHdlIHdlcmVuJ3QgYWxyZWFkeVxuICBpZiggIXdhc1BsYXlpbmcgJiYgdGhpcy5wbGF5aW5nICkge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxufTtcblxuUGxheWJhY2sucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgcHJvZ3Jlc3NCZWZvcmUgPSB0aGlzLnByb2dyZXNzO1xuXG4gIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQ2hlY2soKTtcblxuICAvLyBXaGVuIHdlIGxvb3AsIG9mZnNldCB0aGUgcHJvZ3Jlc3Mgc28gdGhhdCBpdCBlYXNlc1xuICAvLyBzbW9vdGhseSByYXRoZXIgdGhhbiBpbW1lZGlhdGVseSByZXNldHRpbmdcbiAgaWYoIHByb2dyZXNzQmVmb3JlID4gMC44ICYmIHRoaXMucHJvZ3Jlc3MgPCAwLjIgKSB7XG4gICAgdGhpcy5wcm9ncmVzc09mZnNldCA9IHRoaXMucHJvZ3Jlc3M7XG4gIH1cblxuICB0aGlzLnJlbmRlcigpO1xuXG4gIGlmKCB0aGlzLnBsYXlpbmcgKSB7XG4gICAgZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lTWV0aG9kLmNhbGwoIHdpbmRvdywgdGhpcy5hbmltYXRlLmJpbmQoIHRoaXMgKSApO1xuICB9XG5cbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY3VycmVudCBwcm9ncmVzcyBhbmQgcGxheWJhY2sgc3RhdGUuXG4gKi9cblBsYXliYWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLnBsYXlpbmcgPyB0aGlzLnByb2dyZXNzIDogMCxcbiAgICByYWRpdXMgPSAoIHRoaXMuZGlhbWV0ZXIyICkgLSB0aGlzLnRoaWNrbmVzcyxcbiAgICB4ID0gdGhpcy5kaWFtZXRlcjIsXG4gICAgeSA9IHRoaXMuZGlhbWV0ZXIyLFxuICAgIGljb25TaXplID0gMjg7XG5cbiAgLy8gRWFzZSB0b3dhcmRzIDFcbiAgdGhpcy5wcm9ncmVzc09mZnNldCArPSAoIDEgLSB0aGlzLnByb2dyZXNzT2Zmc2V0ICkgKiAwLjE7XG5cbiAgdmFyIGVuZEFuZ2xlID0gKCAtIE1hdGguUEkgLyAyICkgKyAoIHByb2dyZXNzICogKCBNYXRoLlBJICogMiApICk7XG4gIHZhciBzdGFydEFuZ2xlID0gKCAtIE1hdGguUEkgLyAyICkgKyAoIHRoaXMucHJvZ3Jlc3NPZmZzZXQgKiAoIE1hdGguUEkgKiAyICkgKTtcblxuICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCB0aGlzLmRpYW1ldGVyLCB0aGlzLmRpYW1ldGVyICk7XG5cbiAgLy8gU29saWQgYmFja2dyb3VuZCBjb2xvclxuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIHRoaXMuY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cyArIDQsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSApO1xuICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoIDAsIDAsIDAsIDAuNCApJztcbiAgdGhpcy5jb250ZXh0LmZpbGwoKTtcblxuICAvLyBEcmF3IHByb2dyZXNzIHRyYWNrXG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UgKTtcbiAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yICknO1xuICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgaWYoIHRoaXMucGxheWluZyApIHtcbiAgICAvLyBEcmF3IHByb2dyZXNzIG9uIHRvcCBvZiB0cmFja1xuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNvbnRleHQuYXJjKCB4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSApO1xuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSggeCAtICggaWNvblNpemUgLyAyICksIHkgLSAoIGljb25TaXplIC8gMiApICk7XG5cbiAgLy8gRHJhdyBwbGF5L3BhdXNlIGljb25zXG4gIGlmKCB0aGlzLnBsYXlpbmcgKSB7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIGljb25TaXplIC8gMiAtIDQsIGljb25TaXplICk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KCBpY29uU2l6ZSAvIDIgKyA0LCAwLCBpY29uU2l6ZSAvIDIgLSA0LCBpY29uU2l6ZSApO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKCA0LCAwICk7XG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyggMCwgMCApO1xuICAgIHRoaXMuY29udGV4dC5saW5lVG8oIGljb25TaXplIC0gNCwgaWNvblNpemUgLyAyICk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyggMCwgaWNvblNpemUgKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gIH1cblxuICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuXG59O1xuXG5QbGF5YmFjay5wcm90b3R5cGUub24gPSBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIgKSB7XG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSApO1xufTtcblxuUGxheWJhY2sucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCB0eXBlLCBsaXN0ZW5lciApIHtcbiAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgbGlzdGVuZXIsIGZhbHNlICk7XG59O1xuXG5QbGF5YmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMucGxheWluZyA9IGZhbHNlO1xuXG4gIGlmKCB0aGlzLmNhbnZhcy5wYXJlbnROb2RlICkge1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmNhbnZhcyApO1xuICB9XG5cbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cblJldmVhbCA9IHtcbiAgVkVSU0lPTjogVkVSU0lPTixcblxuICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICBjb25maWd1cmU6IGNvbmZpZ3VyZSxcblxuICBzeW5jOiBzeW5jLFxuICBzeW5jU2xpZGU6IHN5bmNTbGlkZSxcbiAgc3luY0ZyYWdtZW50czogc3luY0ZyYWdtZW50cyxcblxuICAvLyBOYXZpZ2F0aW9uIG1ldGhvZHNcbiAgc2xpZGU6IHNsaWRlLFxuICBsZWZ0OiBuYXZpZ2F0ZUxlZnQsXG4gIHJpZ2h0OiBuYXZpZ2F0ZVJpZ2h0LFxuICB1cDogbmF2aWdhdGVVcCxcbiAgZG93bjogbmF2aWdhdGVEb3duLFxuICBwcmV2OiBuYXZpZ2F0ZVByZXYsXG4gIG5leHQ6IG5hdmlnYXRlTmV4dCxcblxuICAvLyBGcmFnbWVudCBtZXRob2RzXG4gIG5hdmlnYXRlRnJhZ21lbnQ6IG5hdmlnYXRlRnJhZ21lbnQsXG4gIHByZXZGcmFnbWVudDogcHJldmlvdXNGcmFnbWVudCxcbiAgbmV4dEZyYWdtZW50OiBuZXh0RnJhZ21lbnQsXG5cbiAgLy8gRGVwcmVjYXRlZCBhbGlhc2VzXG4gIG5hdmlnYXRlVG86IHNsaWRlLFxuICBuYXZpZ2F0ZUxlZnQ6IG5hdmlnYXRlTGVmdCxcbiAgbmF2aWdhdGVSaWdodDogbmF2aWdhdGVSaWdodCxcbiAgbmF2aWdhdGVVcDogbmF2aWdhdGVVcCxcbiAgbmF2aWdhdGVEb3duOiBuYXZpZ2F0ZURvd24sXG4gIG5hdmlnYXRlUHJldjogbmF2aWdhdGVQcmV2LFxuICBuYXZpZ2F0ZU5leHQ6IG5hdmlnYXRlTmV4dCxcblxuICAvLyBGb3JjZXMgYW4gdXBkYXRlIGluIHNsaWRlIGxheW91dFxuICBsYXlvdXQ6IGxheW91dCxcblxuICAvLyBSYW5kb21pemVzIHRoZSBvcmRlciBvZiBzbGlkZXNcbiAgc2h1ZmZsZTogc2h1ZmZsZSxcblxuICAvLyBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBhdmFpbGFibGUgcm91dGVzIGFzIGJvb2xlYW5zIChsZWZ0L3JpZ2h0L3RvcC9ib3R0b20pXG4gIGF2YWlsYWJsZVJvdXRlczogYXZhaWxhYmxlUm91dGVzLFxuXG4gIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGF2YWlsYWJsZSBmcmFnbWVudHMgYXMgYm9vbGVhbnMgKHByZXYvbmV4dClcbiAgYXZhaWxhYmxlRnJhZ21lbnRzOiBhdmFpbGFibGVGcmFnbWVudHMsXG5cbiAgLy8gVG9nZ2xlcyBhIGhlbHAgb3ZlcmxheSB3aXRoIGtleWJvYXJkIHNob3J0Y3V0c1xuICB0b2dnbGVIZWxwOiB0b2dnbGVIZWxwLFxuXG4gIC8vIFRvZ2dsZXMgdGhlIG92ZXJ2aWV3IG1vZGUgb24vb2ZmXG4gIHRvZ2dsZU92ZXJ2aWV3OiB0b2dnbGVPdmVydmlldyxcblxuICAvLyBUb2dnbGVzIHRoZSBcImJsYWNrIHNjcmVlblwiIG1vZGUgb24vb2ZmXG4gIHRvZ2dsZVBhdXNlOiB0b2dnbGVQYXVzZSxcblxuICAvLyBUb2dnbGVzIHRoZSBhdXRvIHNsaWRlIG1vZGUgb24vb2ZmXG4gIHRvZ2dsZUF1dG9TbGlkZTogdG9nZ2xlQXV0b1NsaWRlLFxuXG4gIC8vIFN0YXRlIGNoZWNrc1xuICBpc092ZXJ2aWV3OiBpc092ZXJ2aWV3LFxuICBpc1BhdXNlZDogaXNQYXVzZWQsXG4gIGlzQXV0b1NsaWRpbmc6IGlzQXV0b1NsaWRpbmcsXG4gIGlzU3BlYWtlck5vdGVzOiBpc1NwZWFrZXJOb3RlcyxcblxuICAvLyBTbGlkZSBwcmVsb2FkaW5nXG4gIGxvYWRTbGlkZTogbG9hZFNsaWRlLFxuICB1bmxvYWRTbGlkZTogdW5sb2FkU2xpZGUsXG5cbiAgLy8gQWRkcyBvciByZW1vdmVzIGFsbCBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnMgKHN1Y2ggYXMga2V5Ym9hcmQpXG4gIGFkZEV2ZW50TGlzdGVuZXJzOiBhZGRFdmVudExpc3RlbmVycyxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnM6IHJlbW92ZUV2ZW50TGlzdGVuZXJzLFxuXG4gIC8vIEZhY2lsaXR5IGZvciBwZXJzaXN0aW5nIGFuZCByZXN0b3JpbmcgdGhlIHByZXNlbnRhdGlvbiBzdGF0ZVxuICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gIHNldFN0YXRlOiBzZXRTdGF0ZSxcblxuICAvLyBQcmVzZW50YXRpb24gcHJvZ3Jlc3NcbiAgZ2V0U2xpZGVQYXN0Q291bnQ6IGdldFNsaWRlUGFzdENvdW50LFxuXG4gIC8vIFByZXNlbnRhdGlvbiBwcm9ncmVzcyBvbiByYW5nZSBvZiAwLTFcbiAgZ2V0UHJvZ3Jlc3M6IGdldFByb2dyZXNzLFxuXG4gIC8vIFJldHVybnMgdGhlIGluZGljZXMgb2YgdGhlIGN1cnJlbnQsIG9yIHNwZWNpZmllZCwgc2xpZGVcbiAgZ2V0SW5kaWNlczogZ2V0SW5kaWNlcyxcblxuICAvLyBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCBzbGlkZXNcbiAgZ2V0U2xpZGVzOiBnZXRTbGlkZXMsXG5cbiAgLy8gUmV0dXJucyBhbiBBcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvblxuICAvLyB0aGUgc2xpZGVzXG4gIGdldFNsaWRlc0F0dHJpYnV0ZXM6IGdldFNsaWRlc0F0dHJpYnV0ZXMsXG5cbiAgLy8gUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIHNsaWRlc1xuICBnZXRUb3RhbFNsaWRlczogZ2V0VG90YWxTbGlkZXMsXG5cbiAgLy8gUmV0dXJucyB0aGUgc2xpZGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gIGdldFNsaWRlOiBnZXRTbGlkZSxcblxuICAvLyBSZXR1cm5zIHRoZSBzbGlkZSBiYWNrZ3JvdW5kIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICBnZXRTbGlkZUJhY2tncm91bmQ6IGdldFNsaWRlQmFja2dyb3VuZCxcblxuICAvLyBSZXR1cm5zIHRoZSBzcGVha2VyIG5vdGVzIHN0cmluZyBmb3IgYSBzbGlkZSwgb3IgbnVsbFxuICBnZXRTbGlkZU5vdGVzOiBnZXRTbGlkZU5vdGVzLFxuXG4gIC8vIFJldHVybnMgYW4gYXJyYXkgd2l0aCBhbGwgaG9yaXpvbnRhbC92ZXJ0aWNhbCBzbGlkZXMgaW4gdGhlIGRlY2tcbiAgZ2V0SG9yaXpvbnRhbFNsaWRlczogZ2V0SG9yaXpvbnRhbFNsaWRlcyxcbiAgZ2V0VmVydGljYWxTbGlkZXM6IGdldFZlcnRpY2FsU2xpZGVzLFxuXG4gIC8vIENoZWNrcyBpZiB0aGUgcHJlc2VudGF0aW9uIGNvbnRhaW5zIHR3byBvciBtb3JlXG4gIC8vIGhvcml6b250YWwvdmVydGljYWwgc2xpZGVzXG4gIGhhc0hvcml6b250YWxTbGlkZXM6IGhhc0hvcml6b250YWxTbGlkZXMsXG4gIGhhc1ZlcnRpY2FsU2xpZGVzOiBoYXNWZXJ0aWNhbFNsaWRlcyxcblxuICAvLyBSZXR1cm5zIHRoZSBwcmV2aW91cyBzbGlkZSBlbGVtZW50LCBtYXkgYmUgbnVsbFxuICBnZXRQcmV2aW91c1NsaWRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJldmlvdXNTbGlkZTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNsaWRlIGVsZW1lbnRcbiAgZ2V0Q3VycmVudFNsaWRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY3VycmVudFNsaWRlO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2NhbGUgb2YgdGhlIHByZXNlbnRhdGlvbiBjb250ZW50XG4gIGdldFNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIG9iamVjdFxuICBnZXRDb25maWc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG5cbiAgLy8gSGVscGVyIG1ldGhvZCwgcmV0cmlldmVzIHF1ZXJ5IHN0cmluZyBhcyBhIGtleS92YWx1ZSBoYXNoXG4gIGdldFF1ZXJ5SGFzaDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHF1ZXJ5ID0ge307XG5cbiAgICBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSggL1tBLVowLTldKz89KFtcXHdcXC4lLV0qKS9naSwgZnVuY3Rpb24oYSkge1xuICAgICAgcXVlcnlbIGEuc3BsaXQoICc9JyApLnNoaWZ0KCkgXSA9IGEuc3BsaXQoICc9JyApLnBvcCgpO1xuICAgIH0gKTtcblxuICAgIC8vIEJhc2ljIGRlc2VyaWFsaXphdGlvblxuICAgIGZvciggdmFyIGkgaW4gcXVlcnkgKSB7XG4gICAgICB2YXIgdmFsdWUgPSBxdWVyeVsgaSBdO1xuXG4gICAgICBxdWVyeVsgaSBdID0gZGVzZXJpYWxpemUoIHVuZXNjYXBlKCB2YWx1ZSApICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIHRvcC1sZXZlbCBET00gZWxlbWVudFxuICBnZXRSZXZlYWxFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9tLndyYXBwZXIgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwnICk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIGhhc2ggd2l0aCBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zXG4gIGdldFBsdWdpbnM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwbHVnaW5zO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB3ZSdyZSBjdXJyZW50bHkgb24gdGhlIGZpcnN0IHNsaWRlXG4gIGlzRmlyc3RTbGlkZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICggaW5kZXhoID09PSAwICYmIGluZGV4diA9PT0gMCApO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB3ZSdyZSBjdXJyZW50bHkgb24gdGhlIGxhc3Qgc2xpZGVcbiAgaXNMYXN0U2xpZGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmKCBjdXJyZW50U2xpZGUgKSB7XG4gICAgICAvLyBEb2VzIHRoaXMgc2xpZGUgaGF2ZSBhIG5leHQgc2libGluZz9cbiAgICAgIGlmKCBjdXJyZW50U2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBJZiBpdCdzIHZlcnRpY2FsLCBkb2VzIGl0cyBwYXJlbnQgaGF2ZSBhIG5leHQgc2libGluZz9cbiAgICAgIGlmKCBpc1ZlcnRpY2FsU2xpZGUoIGN1cnJlbnRTbGlkZSApICYmIGN1cnJlbnRTbGlkZS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZyApIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB3ZSdyZSBvbiB0aGUgbGFzdCBzbGlkZSBpbiB0aGUgY3VycmVudFxuICAvLyB2ZXJ0aWNhbCBzdGFja1xuICBpc0xhc3RWZXJ0aWNhbFNsaWRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiggY3VycmVudFNsaWRlICYmIGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgKSB7XG4gICAgICAvLyBEb2VzIHRoaXMgc2xpZGUgaGF2ZSBhIG5leHQgc2libGluZz9cbiAgICAgIGlmKCBjdXJyZW50U2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLy8gQ2hlY2tzIGlmIHJldmVhbC5qcyBoYXMgYmVlbiBsb2FkZWQgYW5kIGlzIHJlYWR5IGZvciB1c2VcbiAgaXNSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvYWRlZDtcbiAgfSxcblxuICAvLyBGb3J3YXJkIGV2ZW50IGJpbmRpbmcgdG8gdGhlIHJldmVhbCBET00gZWxlbWVudFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKSB7XG4gICAgaWYoICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgKSB7XG4gICAgICBSZXZlYWwuZ2V0UmV2ZWFsRWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICk7XG4gICAgfVxuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKSB7XG4gICAgaWYoICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgKSB7XG4gICAgICBSZXZlYWwuZ2V0UmV2ZWFsRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFkZHMvcmVtb3ZlcyBhIGN1c3RvbSBrZXkgYmluZGluZ1xuICBhZGRLZXlCaW5kaW5nOiBhZGRLZXlCaW5kaW5nLFxuICByZW1vdmVLZXlCaW5kaW5nOiByZW1vdmVLZXlCaW5kaW5nLFxuXG4gIC8vIEFQSSBmb3IgcmVnaXN0ZXJpbmcgYW5kIHJldHJpZXZpbmcgcGx1Z2luc1xuICByZWdpc3RlclBsdWdpbjogcmVnaXN0ZXJQbHVnaW4sXG4gIGhhc1BsdWdpbjogaGFzUGx1Z2luLFxuICBnZXRQbHVnaW46IGdldFBsdWdpbixcblxuICAvLyBQcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXJzIGEga2V5Ym9hcmQgZXZlbnRcbiAgdHJpZ2dlcktleTogZnVuY3Rpb24oIGtleUNvZGUgKSB7XG4gICAgb25Eb2N1bWVudEtleURvd24oIHsga2V5Q29kZToga2V5Q29kZSB9ICk7XG4gIH0sXG5cbiAgLy8gUmVnaXN0ZXJzIGEgbmV3IHNob3J0Y3V0IHRvIGluY2x1ZGUgaW4gdGhlIGhlbHAgb3ZlcmxheVxuICByZWdpc3RlcktleWJvYXJkU2hvcnRjdXQ6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuICAgIGtleWJvYXJkU2hvcnRjdXRzW2tleV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2ZWFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==