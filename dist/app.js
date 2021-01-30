/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/carrousel.js":
/*!*************************************!*\
  !*** ./src/components/carrousel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carrousel\": () => /* binding */ carrousel\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/banner/banner1.png */ \"./src/img/banner/banner1.png\");\n/* harmony import */ var _img_banner_banner2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../img/banner/banner2.png */ \"./src/img/banner/banner2.png\");\n/* harmony import */ var _img_banner_banner3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/banner/banner3.png */ \"./src/img/banner/banner3.png\");\n\n\n\n\nvar carrousel = function carrousel() {\n  var imgCollection = [_img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__.default, _img_banner_banner2_png__WEBPACK_IMPORTED_MODULE_2__.default, _img_banner_banner3_png__WEBPACK_IMPORTED_MODULE_3__.default];\n  var container = document.querySelector('.content');\n  var imgcontainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('img');\n  setInterval(function () {\n    // displayCarrousel(imgcontainer, imgCollection)\n    imgcontainer.src = _img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  }, 1000);\n  container.append(imgcontainer);\n};\nvar n = 1;\n\nvar displayCarrousel = function displayCarrousel(carrouselContainer, img) {\n  if (n > 2) {\n    n = 0;\n  }\n\n  carrouselContainer.src = img[n];\n  n++;\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/carrousel.js?");

/***/ }),

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newElment\": () => /* binding */ newElment,\n/* harmony export */   \"newLinks\": () => /* binding */ newLinks\n/* harmony export */ });\nvar newElment = function newElment(tag, text, classes, id) {\n  var element = document.createElement(tag);\n  if (text) element.innerText = text;\n\n  if (classes) {\n    classes.forEach(function (cl) {\n      element.classList.add(cl);\n    });\n  }\n\n  if (id) element.id = id;\n  return element;\n};\nvar newLinks = function newLinks(classes, texts, links) {\n  var ul = document.createElement('ul');\n  texts.forEach(function (txt, idx) {\n    var li = document.createElement('li');\n    var a = document.createElement('a');\n    a.innerText = txt;\n    a.classList.add(classes[idx]);\n    a.href = links[idx];\n    li.append(a);\n    ul.append(li);\n  });\n  return ul;\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/common.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => /* binding */ header\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar header = /*#__PURE__*/function () {\n  function header() {\n    _classCallCheck(this, header);\n  }\n\n  _createClass(header, [{\n    key: \"createtitle\",\n    value: function createtitle() {\n      var header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('header');\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h1', 'La Reserva Restaurant', ['title']);\n      header.append(title);\n      return header;\n    }\n  }, {\n    key: \"createLinks\",\n    value: function createLinks() {\n      var header = this.createtitle();\n      var links = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newLinks)(['link1', 'link2', 'link3'], ['link1', 'link2', 'link3'], ['./', './', './']);\n      header.append(links);\n      return header;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var container = document.querySelector('.content');\n      var header = this.createLinks();\n      container.append(header);\n    }\n  }]);\n\n  return header;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_carrousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carrousel */ \"./src/components/carrousel.js\");\n\n\nvar nav = new _components_header__WEBPACK_IMPORTED_MODULE_0__.header();\nnav.render();\n(0,_components_carrousel__WEBPACK_IMPORTED_MODULE_1__.carrousel)();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/index.js?");

/***/ }),

/***/ "./src/img/banner/banner1.png":
/*!************************************!*\
  !*** ./src/img/banner/banner1.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/banner1.png\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/banner/banner1.png?");

/***/ }),

/***/ "./src/img/banner/banner2.png":
/*!************************************!*\
  !*** ./src/img/banner/banner2.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/banner2.png\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/banner/banner2.png?");

/***/ }),

/***/ "./src/img/banner/banner3.png":
/*!************************************!*\
  !*** ./src/img/banner/banner3.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/banner3.png\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/banner/banner3.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;