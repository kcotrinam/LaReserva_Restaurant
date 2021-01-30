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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newElment\": () => /* binding */ newElment,\n/* harmony export */   \"newLinks\": () => /* binding */ newLinks,\n/* harmony export */   \"newList\": () => /* binding */ newList,\n/* harmony export */   \"createImageCollection\": () => /* binding */ createImageCollection\n/* harmony export */ });\nvar newElment = function newElment(tag, text, classes, id) {\n  var element = document.createElement(tag);\n  if (text) element.innerText = text;\n\n  if (classes) {\n    classes.forEach(function (cl) {\n      element.classList.add(cl);\n    });\n  }\n\n  if (id) element.id = id;\n  return element;\n};\nvar newLinks = function newLinks(classes, texts, links) {\n  var ul = document.createElement('ul');\n  texts.forEach(function (txt, idx) {\n    var li = document.createElement('li');\n    var a = document.createElement('a');\n    a.innerText = txt;\n    a.classList.add(classes[idx]);\n    a.href = links[idx];\n    li.append(a);\n    ul.append(li);\n  });\n  return ul;\n};\nvar newList = function newList(classes, texts) {\n  var ul = document.createElement('ul');\n  texts.forEach(function (txt, idx) {\n    var li = document.createElement('li');\n    li.innerText = txt;\n    li.classList.add(classes[idx]);\n    ul.append(li);\n  });\n  return ul;\n};\nvar createImageCollection = function createImageCollection(container, imgCollection) {\n  imgCollection.forEach(function (img) {\n    var imgTag = newElment('img');\n    imgTag.src = img;\n    container.append(imgTag);\n  });\n  return container;\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/common.js?");

/***/ }),

/***/ "./src/components/dishes.js":
/*!**********************************!*\
  !*** ./src/components/dishes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dishes\": () => /* binding */ Dishes\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_coast_coast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/coast/coast.jpg */ \"./src/img/coast/coast.jpg\");\n/* harmony import */ var _img_coast_sierra_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../img/coast/sierra.jpg */ \"./src/img/coast/sierra.jpg\");\n/* harmony import */ var _img_coast_selva_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/coast/selva.jpg */ \"./src/img/coast/selva.jpg\");\n/* harmony import */ var _img_pasta_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../img/pasta/lasagna.jpg */ \"./src/img/pasta/lasagna.jpg\");\n/* harmony import */ var _img_pasta_ravioles_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../img/pasta/ravioles.jpg */ \"./src/img/pasta/ravioles.jpg\");\n/* harmony import */ var _img_pasta_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../img/pasta/spaghetti.jpg */ \"./src/img/pasta/spaghetti.jpg\");\n/* harmony import */ var _img_seafood_arrosconmariscos_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../img/seafood/arrosconmariscos.jpg */ \"./src/img/seafood/arrosconmariscos.jpg\");\n/* harmony import */ var _img_seafood_ceviche_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../img/seafood/ceviche.jpg */ \"./src/img/seafood/ceviche.jpg\");\n/* harmony import */ var _img_seafood_chupe_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../img/seafood/chupe.jpg */ \"./src/img/seafood/chupe.jpg\");\n/* harmony import */ var _img_grill_grill_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../img/grill/grill.jpg */ \"./src/img/grill/grill.jpg\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Dishes = /*#__PURE__*/function () {\n  function Dishes(container) {\n    _classCallCheck(this, Dishes);\n\n    this.container = container;\n    this.main = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('main');\n    this.imgByRegion = [_img_coast_coast_jpg__WEBPACK_IMPORTED_MODULE_1__.default, _img_coast_sierra_jpg__WEBPACK_IMPORTED_MODULE_2__.default, _img_coast_selva_jpg__WEBPACK_IMPORTED_MODULE_3__.default];\n    this.imgPasta = [_img_pasta_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__.default, _img_pasta_ravioles_jpg__WEBPACK_IMPORTED_MODULE_5__.default, _img_pasta_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_6__.default];\n    this.imgSeaFood = [_img_seafood_arrosconmariscos_jpg__WEBPACK_IMPORTED_MODULE_7__.default, _img_seafood_ceviche_jpg__WEBPACK_IMPORTED_MODULE_8__.default, _img_seafood_chupe_jpg__WEBPACK_IMPORTED_MODULE_9__.default];\n    this.imgGrill = [_img_grill_grill_jpg__WEBPACK_IMPORTED_MODULE_10__.default];\n  }\n\n  _createClass(Dishes, [{\n    key: \"subtitle\",\n    value: function subtitle(content) {\n      return (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h3', \"\".concat(content));\n    }\n  }, {\n    key: \"article\",\n    value: function article(subtitle, images) {\n      var card = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('article', undefined, ['card']);\n      var imgcontainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['card__img-container']);\n      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.createImageCollection)(imgcontainer, images);\n      card.append(this.subtitle(\"\".concat(subtitle)));\n      card.append(imgcontainer);\n      this.main.append(card);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.title;\n      this.article('Regional Dishes', this.imgByRegion);\n      this.article('Pastas', this.imgPasta);\n      this.article('Seafood', this.imgSeaFood);\n      this.article('Meat and Grill', this.imgGrill);\n      this.container.append(this.main);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h2', 'Our Dishes');\n      this.main.append(title);\n    }\n  }]);\n\n  return Dishes;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/dishes.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => /* binding */ Footer\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/logo.png */ \"./src/img/logo.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer(container) {\n    _classCallCheck(this, Footer);\n\n    this.container = container;\n    this.footer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('footer', [], ['footer']);\n  }\n\n  _createClass(Footer, [{\n    key: \"title\",\n    value: function title() {\n      var footerTitle = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h4', 'La Reserva Restaurant');\n      this.footer.append(footerTitle);\n    }\n  }, {\n    key: \"location\",\n    value: function location() {\n      var address = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newList)(['footer-address', 'footer-number'], ['Av. La Marina 201', '650-8000']);\n      this.footer.append(address);\n    }\n  }, {\n    key: \"logo\",\n    value: function logo() {\n      var img = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('img');\n      img.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__.default;\n      this.footer.append(img);\n    }\n  }, {\n    key: \"renderFooter\",\n    value: function renderFooter() {\n      this.title();\n      this.location();\n      this.logo();\n      this.container.append(this.footer);\n    }\n  }]);\n\n  return Footer;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => /* binding */ header\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar header = /*#__PURE__*/function () {\n  function header() {\n    _classCallCheck(this, header);\n  }\n\n  _createClass(header, [{\n    key: \"createtitle\",\n    value: function createtitle() {\n      var header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('header');\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h1', 'La Reserva Restaurant', ['title']);\n      header.append(title);\n      return header;\n    }\n  }, {\n    key: \"createLinks\",\n    value: function createLinks() {\n      var header = this.createtitle();\n      var links = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newLinks)(['link1', 'link2', 'link3'], ['link1', 'link2', 'link3'], ['./', './', './']);\n      header.append(links);\n      return header;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var container = document.querySelector('.content');\n      var header = this.createLinks();\n      container.append(header);\n    }\n  }]);\n\n  return header;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/header.js?");

/***/ }),

/***/ "./src/components/offers.js":
/*!**********************************!*\
  !*** ./src/components/offers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Offer\": () => /* binding */ Offer\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_offers_prex_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/offers/prex.jpg */ \"./src/img/offers/prex.jpg\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Offer = /*#__PURE__*/function () {\n  function Offer(container) {\n    _classCallCheck(this, Offer);\n\n    this.container = container;\n    this.main = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('main');\n  }\n\n  _createClass(Offer, [{\n    key: \"render\",\n    value: function render() {\n      this.title;\n      this.banner;\n      this.container.append(this.main);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      var offersContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('section', undefined, ['offers']);\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h2', 'Offers', ['offers__title']);\n      offersContainer.append(title);\n      this.main.append(offersContainer);\n    }\n  }, {\n    key: \"banner\",\n    get: function get() {\n      var imgContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['offers__img-container']);\n      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.createImageCollection)(imgContainer, [_img_offers_prex_jpg__WEBPACK_IMPORTED_MODULE_1__.default]);\n      this.main.append(imgContainer);\n    }\n  }]);\n\n  return Offer;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/offers.js?");

/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"section\": () => /* binding */ section\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar section = /*#__PURE__*/function () {\n  function section() {\n    _classCallCheck(this, section);\n  }\n\n  _createClass(section, [{\n    key: \"location\",\n    value: function location() {\n      var container = document.querySelector('.content');\n      var section = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('section');\n      var frame = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('iframe');\n      var aside = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('aside');\n      var locationList = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newList)(['list-item', 'list-item'], ['Miraflores - Av. Ricardo Palma 145', 'San Miguel - Av. La Marina 201', 'Comas - Alfredo Mendiola 1545']);\n      aside.append(locationList);\n      section.append(frame, aside);\n      frame.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.898824056072!2d-77.03080558684975!3d-12.11907469141914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819e28cfb87%3A0x1b388d2c07ef80c2!2sAv.+Ricardo+Palma+145%2C+Miraflores+15074!5e0!3m2!1ses-419!2spe!4v1544554739888\";\n      container.append(section);\n    }\n  }]);\n\n  return section;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/section.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_carrousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carrousel */ \"./src/components/carrousel.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/section */ \"./src/components/section.js\");\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dishes */ \"./src/components/dishes.js\");\n/* harmony import */ var _components_offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offers */ \"./src/components/offers.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n\n\n\n\n\n\nvar container = document.querySelector('.content');\nvar nav = new _components_header__WEBPACK_IMPORTED_MODULE_0__.header();\nnav.render();\nvar offers = new _components_offers__WEBPACK_IMPORTED_MODULE_4__.Offer(container);\noffers.render();\nvar newfooter = new _components_footer__WEBPACK_IMPORTED_MODULE_5__.Footer(container);\nnewfooter.renderFooter();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/index.js?");

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

/***/ }),

/***/ "./src/img/coast/coast.jpg":
/*!*********************************!*\
  !*** ./src/img/coast/coast.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/coast.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/coast/coast.jpg?");

/***/ }),

/***/ "./src/img/coast/selva.jpg":
/*!*********************************!*\
  !*** ./src/img/coast/selva.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/selva.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/coast/selva.jpg?");

/***/ }),

/***/ "./src/img/coast/sierra.jpg":
/*!**********************************!*\
  !*** ./src/img/coast/sierra.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/sierra.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/coast/sierra.jpg?");

/***/ }),

/***/ "./src/img/grill/grill.jpg":
/*!*********************************!*\
  !*** ./src/img/grill/grill.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/grill.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/grill/grill.jpg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/logo.png\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/offers/prex.jpg":
/*!*********************************!*\
  !*** ./src/img/offers/prex.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prex.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prex.jpg?");

/***/ }),

/***/ "./src/img/pasta/lasagna.jpg":
/*!***********************************!*\
  !*** ./src/img/pasta/lasagna.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/lasagna.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/pasta/lasagna.jpg?");

/***/ }),

/***/ "./src/img/pasta/ravioles.jpg":
/*!************************************!*\
  !*** ./src/img/pasta/ravioles.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/ravioles.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/pasta/ravioles.jpg?");

/***/ }),

/***/ "./src/img/pasta/spaghetti.jpg":
/*!*************************************!*\
  !*** ./src/img/pasta/spaghetti.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/spaghetti.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/pasta/spaghetti.jpg?");

/***/ }),

/***/ "./src/img/seafood/arrosconmariscos.jpg":
/*!**********************************************!*\
  !*** ./src/img/seafood/arrosconmariscos.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/arrosconmariscos.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/seafood/arrosconmariscos.jpg?");

/***/ }),

/***/ "./src/img/seafood/ceviche.jpg":
/*!*************************************!*\
  !*** ./src/img/seafood/ceviche.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/ceviche.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/seafood/ceviche.jpg?");

/***/ }),

/***/ "./src/img/seafood/chupe.jpg":
/*!***********************************!*\
  !*** ./src/img/seafood/chupe.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/chupe.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/seafood/chupe.jpg?");

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