/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image1 = document.createElement('img');
image1.src = _small2.default;
document.body.appendChild(image1);

var image2 = document.createElement('img');
image2.src = _big2.default;
document.body.appendChild(image2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c640e60470e079bec9884b6e55032f4c.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ }
/******/ ]);