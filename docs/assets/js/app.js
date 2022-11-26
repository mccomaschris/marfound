/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* Main navigation accordions 
*/

var accordionButtons = document.getElementsByClassName('muf-accordion-button');
for (var i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener('click', toggleAccordion, false);
}
function toggleAccordion(event) {
  event.preventDefault();
  var accordionItem = this.parentNode;
  if (this.getAttribute('aria-expanded') === 'false') {
    // First, close all the accordions
    for (var _i = 0; _i < accordionButtons.length; _i++) {
      accordionButtons[_i].setAttribute('aria-expanded', false);
    }

    // Next, open the one clicked
    this.setAttribute('aria-expanded', true);
  } else {
    // It's already open, so close it.
    this.setAttribute('aria-expanded', false);
  }
}

/*
* Show/hide the menu 
*/

var body = document.body;
var menuOpenButton = document.getElementById('muf-menu-trigger-open');
var menuCloseButton = document.getElementById('muf-menu-trigger-close');
menuOpenButton.addEventListener('click', openMenu, false);
menuCloseButton.addEventListener('click', closeMenu, false);
function openMenu(event) {
  body.classList.add("show-menu");
}
function closeMenu(event) {
  body.classList.remove("show-menu");
}

/*
* Show/hide the search 
*/

var searchOpenButton = document.getElementById('muf-search-trigger-open');
var searchCloseButton = document.getElementById('muf-search-trigger-close');
searchOpenButton.addEventListener('click', openSearch, false);
searchCloseButton.addEventListener('click', closeSearch, false);
function openSearch(event) {
  body.classList.add("show-search");
  document.getElementById('muf-search-box-desktop').focus();
}
function closeSearch(event) {
  body.classList.remove("show-search");
}

/*
* Deal with the section nav open/close 
*/

var sectionNavTrigger = document.getElementById('muf-section-nav-trigger');
if (sectionNavTrigger) {
  sectionNavTrigger.addEventListener('click', function () {
    if (this.getAttribute('aria-expanded') === 'false') {
      this.setAttribute('aria-expanded', true);
    } else {
      this.setAttribute('aria-expanded', false);
    }
  }, false);
}

/*
* Tabbed Content 
*/

var tabButtons = document.getElementsByClassName('muf-tab-button');
var tabPanels = document.getElementsByClassName('muf-tab-panel');

// Start by hiding all the tab panels
for (var _i2 = 0; _i2 < tabPanels.length; _i2++) {
  tabPanels[_i2].classList.add('hidden');
}

// Add click event for the tab buttons
for (var _i3 = 0; _i3 < tabButtons.length; _i3++) {
  tabButtons[_i3].addEventListener('click', toggleTab, false);
  if (tabButtons[_i3].getAttribute('aria-expanded') === "true") {
    // If one is set to show by default, click it.
    tabButtons[_i3].click();
  }
}
function resetTabs() {
  // Hide all the tab panels and reset buttons
  for (var _i4 = 0; _i4 < tabPanels.length; _i4++) {
    tabPanels[_i4].classList.add('hidden');
  }
  for (var _i5 = 0; _i5 < tabButtons.length; _i5++) {
    tabButtons[_i5].setAttribute('aria-expanded', false);
  }
}
function toggleTab(event) {
  event.preventDefault;
  var thisTabButton = event.currentTarget;
  resetTabs();
  thisTabButton.setAttribute('aria-expanded', true);
  for (var _i6 = 0; _i6 < tabPanels.length; _i6++) {
    //console.log(tabPanels[i].getAttribute('aria-labelledby'))
    //console.log(thisTabButton.getAttribute('id'))
    if (tabPanels[_i6].getAttribute('aria-labelledby') == thisTabButton.getAttribute('id')) {
      tabPanels[_i6].classList.remove('hidden');
    }
  }
}

/*
* News Carousel
*/

// On larger screens the news carousel can be initialized
var w = window.innerWidth;
if (w >= 820) {
  if (document.getElementsByClassName('muf-news-wrapper').length) {
    var newsflkty = new Flickity('.muf-news-wrapper', {
      "adaptiveHeight": false,
      "cellAlign": "left",
      "pageDots": false
    });
  }
}
if (w <= 819) {
  if (document.getElementsByClassName('muf-alumni-stats-wrapper').length) {
    var statsflkty = new Flickity('.muf-alumni-stats-wrapper', {
      "adaptiveHeight": false,
      "cellAlign": "left",
      "pageDots": false
    });
  }
}

/*
* Video poster swap
*/

var videoPoster = document.getElementsByClassName('muf-video-poster-wrapper');
for (var _i7 = 0; _i7 < videoPoster.length; _i7++) {
  videoPoster[_i7].addEventListener('click', showVideo, false);
}
function showVideo(event) {
  this.classList.add('hidden');
  this.nextElementSibling.classList.remove('hidden');
}

/*
* Make some fixes around window resizes
*/

window.addEventListener("resize", resetCarousels);
function resetCarousels() {
  var w = window.innerWidth;
  if (w <= 819) {
    if (document.getElementsByClassName('muf-news-wrapper').length) {
      newsflkty.destroy();
    }
  }
  if (w >= 820) {
    if (document.getElementsByClassName('muf-alumni-stats-wrapper').length) {
      statsflkty.destroy();
    }
  }
}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sethmeranda/Sites/marfound/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/sethmeranda/Sites/marfound/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });