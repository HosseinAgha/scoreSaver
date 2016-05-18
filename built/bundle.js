/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var person_cls = __webpack_require__(1);
	var table_cls = __webpack_require__(1);
	var score_cls = __webpack_require__(1);
	var Main = React.createClass({
		displayName: "Main",

		render: function render() {
			alert('hohohoho');
			return React.createElement("div", null, "hello!!!");
		}
	});

	ReactDOM.render(React.createElement(Main), document.getElementById("mainWrap"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var PersonNumberClass = React.createClass({
		displayName: "PersonNumberClass",

		render: function render() {
			return React.createElement("aside", { "class": "scoreBoard" }, React.createElement("button", null, "نوبت دهی خودکار"), React.createElement("figure", { "class": "imageContainer" }, React.createElement("img", { src: "images/ahmad.jpg" }), React.createElement("figcaption", null, "نفر اول")), React.createElement("figure", { "class": "imageContainer" }, React.createElement("img", { src: "images/shoaei.jpg" }), React.createElement("figcaption", null, "نفر دوم")), React.createElement("figure", { "class": "imageContainer" }, React.createElement("img", { src: "images/abedi.jpg" }), React.createElement("figcaption", null, "نفر سوم")), React.createElement("figure", { "class": "imageContainer" }, React.createElement("img", { src: "images/mehdi.jpg" }), React.createElement("figcaption", null, "نفر چهارم")));
		}
	});
	module.export(PersonNumberClass);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);