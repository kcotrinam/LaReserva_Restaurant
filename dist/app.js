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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carrousel\": () => /* binding */ carrousel\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/banner/banner1.png */ \"./src/img/banner/banner1.png\");\n/* harmony import */ var _img_banner_banner2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/banner/banner2.png */ \"./src/img/banner/banner2.png\");\n/* harmony import */ var _img_banner_banner3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/banner/banner3.png */ \"./src/img/banner/banner3.png\");\n\n\n\n\nvar n = 0;\n\nvar displayCarrousel = function displayCarrousel(carrouselContainer, img) {\n  if (n > 2) {\n    n = 0;\n  }\n\n  carrouselContainer.src = img[n];\n  n += 1;\n};\n\nvar carrousel = function carrousel(container) {\n  container.innerHTML = '';\n  var imgCollection = [_img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__.default, _img_banner_banner2_png__WEBPACK_IMPORTED_MODULE_2__.default, _img_banner_banner3_png__WEBPACK_IMPORTED_MODULE_3__.default];\n  var bannerContainer = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['baner-container']);\n  var imgcontainer = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('img');\n  imgcontainer.src = _img_banner_banner1_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  setInterval(function () {\n    displayCarrousel(imgcontainer, imgCollection);\n  }, 1000);\n  bannerContainer.append(imgcontainer);\n  container.append(bannerContainer);\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/carrousel.js?");

/***/ }),

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newElment\": () => /* binding */ newElment,\n/* harmony export */   \"newLinks\": () => /* binding */ newLinks,\n/* harmony export */   \"newList\": () => /* binding */ newList,\n/* harmony export */   \"createImageCollection\": () => /* binding */ createImageCollection,\n/* harmony export */   \"createCards\": () => /* binding */ createCards\n/* harmony export */ });\nvar newElment = function newElment(tag, text, classes, id) {\n  var element = document.createElement(tag);\n  if (text) element.innerText = text;\n\n  if (classes) {\n    classes.forEach(function (cl) {\n      element.classList.add(cl);\n    });\n  }\n\n  if (id) element.id = id;\n  return element;\n};\nvar newLinks = function newLinks(classes, texts, links) {\n  var ul = document.createElement('ul');\n  texts.forEach(function (txt, idx) {\n    var li = document.createElement('li');\n    var a = document.createElement('a');\n    a.innerText = txt;\n    a.classList.add(classes[idx]);\n    a.href = links[idx];\n    li.append(a);\n    ul.append(li);\n  });\n  return ul;\n};\nvar newList = function newList(texts, classes) {\n  var ul = document.createElement('ul');\n  texts.forEach(function (txt, idx) {\n    var li = document.createElement('li');\n    li.innerText = txt;\n    li.classList.add(classes[idx]);\n    ul.append(li);\n  });\n  return ul;\n};\nvar createImageCollection = function createImageCollection(container, imgCollection) {\n  imgCollection.forEach(function (img) {\n    var imgTag = newElment('img');\n    imgTag.src = img;\n    container.append(imgTag);\n  });\n  return container;\n};\nvar createCards = function createCards(container, titles, images) {\n  titles.forEach(function (title, idx) {\n    var card = newElment('article', undefined, ['card']);\n    var cardTitle = newElment('h3', title, ['card__title']);\n    var cardImgContainer = newElment('div', undefined, ['card__img']);\n    var cardImg = newElment('img');\n    var cardBtn = newElment('div', 'buy', ['card__btn']);\n    cardImg.src = images[idx];\n    cardImgContainer.append(cardImg);\n    card.append(cardTitle, cardImgContainer, cardBtn);\n    container.append(card);\n  });\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/common.js?");

/***/ }),

/***/ "./src/components/dishes.js":
/*!**********************************!*\
  !*** ./src/components/dishes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dishes\": () => /* binding */ Dishes\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _img_coast_coast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/coast/coast.jpg */ \"./src/img/coast/coast.jpg\");\n/* harmony import */ var _img_coast_sierra_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/coast/sierra.jpg */ \"./src/img/coast/sierra.jpg\");\n/* harmony import */ var _img_coast_selva_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/coast/selva.jpg */ \"./src/img/coast/selva.jpg\");\n/* harmony import */ var _img_pasta_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pasta/lasagna.jpg */ \"./src/img/pasta/lasagna.jpg\");\n/* harmony import */ var _img_pasta_ravioles_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pasta/ravioles.jpg */ \"./src/img/pasta/ravioles.jpg\");\n/* harmony import */ var _img_pasta_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/pasta/spaghetti.jpg */ \"./src/img/pasta/spaghetti.jpg\");\n/* harmony import */ var _img_seafood_arrosconmariscos_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/seafood/arrosconmariscos.jpg */ \"./src/img/seafood/arrosconmariscos.jpg\");\n/* harmony import */ var _img_seafood_ceviche_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/seafood/ceviche.jpg */ \"./src/img/seafood/ceviche.jpg\");\n/* harmony import */ var _img_seafood_chupe_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/seafood/chupe.jpg */ \"./src/img/seafood/chupe.jpg\");\n/* harmony import */ var _img_grill_grill_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/grill/grill.jpg */ \"./src/img/grill/grill.jpg\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Dishes = /*#__PURE__*/function () {\n  function Dishes(container) {\n    _classCallCheck(this, Dishes);\n\n    this.container = container;\n    this.cardsContainer = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('section', undefined, ['cards-container']);\n    this.imgByRegion = [_img_coast_coast_jpg__WEBPACK_IMPORTED_MODULE_1__.default, _img_coast_sierra_jpg__WEBPACK_IMPORTED_MODULE_2__.default, _img_coast_selva_jpg__WEBPACK_IMPORTED_MODULE_3__.default];\n    this.imgPasta = [_img_pasta_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__.default, _img_pasta_ravioles_jpg__WEBPACK_IMPORTED_MODULE_5__.default, _img_pasta_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_6__.default];\n    this.imgSeaFood = [_img_seafood_arrosconmariscos_jpg__WEBPACK_IMPORTED_MODULE_7__.default, _img_seafood_ceviche_jpg__WEBPACK_IMPORTED_MODULE_8__.default, _img_seafood_chupe_jpg__WEBPACK_IMPORTED_MODULE_9__.default];\n    this.imgGrill = [_img_grill_grill_jpg__WEBPACK_IMPORTED_MODULE_10__.default];\n  }\n\n  _createClass(Dishes, [{\n    key: \"title\",\n    value: function title() {\n      this.container.innerHTML = '';\n      var title = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('h2', 'Our Dishes');\n      this.container.append(title);\n    }\n  }, {\n    key: \"article\",\n    value: function article(subtitle, images) {\n      var card = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('article', undefined, ['card']);\n      var imgcontainer = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['card__img-container']);\n      var cardSubtitle = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('h3', \"\".concat(subtitle), ['card__title']);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.createImageCollection)(imgcontainer, images);\n      card.append(cardSubtitle);\n      card.append(imgcontainer);\n      this.cardsContainer.append(card);\n    }\n  }, {\n    key: \"renderDishes\",\n    value: function renderDishes() {\n      this.title();\n      this.container.append(this.cardsContainer);\n      this.article('Regional Dishes', this.imgByRegion);\n      this.article('Pastas', this.imgPasta);\n      this.article('Seafood', this.imgSeaFood);\n      this.article('Meat and Grill', this.imgGrill);\n    }\n  }]);\n\n  return Dishes;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/dishes.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => /* binding */ Footer\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer(container) {\n    _classCallCheck(this, Footer);\n\n    this.container = container;\n    this.footer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('footer', [], ['footer']);\n    this.footerLeft = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', [], ['footer__left']);\n  }\n\n  _createClass(Footer, [{\n    key: \"title\",\n    value: function title() {\n      var footerTitle = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h4', 'La Reserva Restaurant', ['footer__title']);\n      this.footerLeft.append(footerTitle);\n    }\n  }, {\n    key: \"location\",\n    value: function location() {\n      var address = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newList)(['Av. La Marina 201', '650-8000'], ['footer-address', 'footer-number']);\n      this.footerLeft.append(address);\n    }\n  }, {\n    key: \"logo\",\n    value: function logo() {\n      var img = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('img');\n      img.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__.default;\n      this.footer.append(img);\n    }\n  }, {\n    key: \"renderFooter\",\n    value: function renderFooter() {\n      this.footer.append(this.footerLeft);\n      this.title();\n      this.location();\n      this.logo();\n      this.container.append(this.footer);\n    }\n  }]);\n\n  return Footer;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/components/tabs.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Header = /*#__PURE__*/function () {\n  function Header(container, main) {\n    _classCallCheck(this, Header);\n\n    this.container = container;\n    this.header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('header', undefined, ['header']);\n    this.main = main;\n  }\n\n  _createClass(Header, [{\n    key: \"renderHeader\",\n    value: function renderHeader() {\n      this.createtitle;\n      this.container.append(this.header);\n      var tabsCollection = new _tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs(this.container, this.main);\n      tabsCollection.renderTabs();\n    }\n  }, {\n    key: \"createtitle\",\n    get: function get() {\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h1', 'La Reserva Restaurant', ['title']);\n      this.header.append(title);\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/header.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => /* binding */ Index\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _carrousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrousel */ \"./src/components/carrousel.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section */ \"./src/components/section.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function () {\n  function Index(container) {\n    _classCallCheck(this, Index);\n\n    this.container = container;\n    this.main = (0,_common__WEBPACK_IMPORTED_MODULE_0__.newElment)('main');\n  }\n\n  _createClass(Index, [{\n    key: \"renderPage\",\n    get: function get() {\n      var newHeader = new _header__WEBPACK_IMPORTED_MODULE_1__.Header(this.container, this.main);\n      newHeader.renderHeader();\n      (0,_carrousel__WEBPACK_IMPORTED_MODULE_2__.carrousel)(this.main);\n      var firstPage = new _section__WEBPACK_IMPORTED_MODULE_3__.Home(this.main);\n      firstPage.renderHome;\n      this.container.append(this.main);\n      var footer = new _footer__WEBPACK_IMPORTED_MODULE_4__.Footer(this.container);\n      footer.renderFooter();\n    }\n  }]);\n\n  return Index;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/main.js?");

/***/ }),

/***/ "./src/components/offers.js":
/*!**********************************!*\
  !*** ./src/components/offers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Offer\": () => /* binding */ Offer\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _img_offers_prex_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/offers/prex.jpg */ \"./src/img/offers/prex.jpg\");\n/* harmony import */ var _img_offers_prlunes_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/offers/prlunes.jpg */ \"./src/img/offers/prlunes.jpg\");\n/* harmony import */ var _img_offers_prmartes_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/offers/prmartes.jpg */ \"./src/img/offers/prmartes.jpg\");\n/* harmony import */ var _img_offers_prmiercoles_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/offers/prmiercoles.jpg */ \"./src/img/offers/prmiercoles.jpg\");\n/* harmony import */ var _img_offers_prjueves_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/offers/prjueves.png */ \"./src/img/offers/prjueves.png\");\n/* harmony import */ var _img_offers_prfin_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/offers/prfin.jpg */ \"./src/img/offers/prfin.jpg\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Offer = /*#__PURE__*/function () {\n  function Offer(container) {\n    _classCallCheck(this, Offer);\n\n    this.container = container;\n    this.main = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('main');\n    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];\n    this.images = [_img_offers_prlunes_jpg__WEBPACK_IMPORTED_MODULE_2__.default, _img_offers_prmartes_jpg__WEBPACK_IMPORTED_MODULE_3__.default, _img_offers_prmiercoles_jpg__WEBPACK_IMPORTED_MODULE_4__.default, _img_offers_prjueves_png__WEBPACK_IMPORTED_MODULE_5__.default, _img_offers_prfin_jpg__WEBPACK_IMPORTED_MODULE_6__.default];\n    this.offersContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['offers-container']);\n  }\n\n  _createClass(Offer, [{\n    key: \"title\",\n    get: function get() {\n      this.container.innerHTML = '';\n      var offersContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('section', undefined, ['offers']);\n      var title = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h2', 'Offers', ['offers__title']);\n      offersContainer.append(title);\n      this.main.append(offersContainer);\n    }\n  }, {\n    key: \"banner\",\n    get: function get() {\n      var imgContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['offers__img-container']);\n      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.createImageCollection)(imgContainer, [_img_offers_prex_jpg__WEBPACK_IMPORTED_MODULE_1__.default]);\n      this.main.append(imgContainer);\n    }\n  }, {\n    key: \"displaycards\",\n    get: function get() {\n      var cardContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['card-container']);\n      var subtitle = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('h3', 'Weekly Offers', ['subtitle']);\n      cardContainer.append(subtitle);\n      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.createCards)(this.offersContainer, this.days, this.images);\n      this.main.append(cardContainer);\n      this.main.append(this.offersContainer);\n    }\n  }, {\n    key: \"renderOffers\",\n    get: function get() {\n      this.title;\n      this.banner;\n      this.displaycards;\n      this.container.append(this.main);\n    }\n  }]);\n\n  return Offer;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/offers.js?");

/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Home = /*#__PURE__*/function () {\n  function Home(container) {\n    _classCallCheck(this, Home);\n\n    this.container = container;\n    this.section = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('section', undefined, ['frames-container']);\n  }\n\n  _createClass(Home, [{\n    key: \"generateLocations\",\n    value: function generateLocations(amount, link) {\n      for (var i = 0; i < amount; i++) {\n        var frameContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('div', undefined, ['frame-container']);\n        var frame = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('iframe');\n        var aside = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('aside', undefined, ['frame__list']);\n        var locationList = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newList)(['Miraflores - Av. Ricardo Palma 145', 'San Miguel - Av. La Marina 201', 'Comas - Alfredo Mendiola 1545'], ['frame__list-item', 'frame__list-item', 'frame__list-item']);\n        frame.src = link;\n        aside.append(locationList);\n        frameContainer.append(frame, aside);\n        this.section.append(frameContainer);\n      }\n    }\n  }, {\n    key: \"location\",\n    get: function get() {\n      this.generateLocations(3, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.898824056072!2d-77.03080558684975!3d-12.11907469141914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819e28cfb87%3A0x1b388d2c07ef80c2!2sAv.+Ricardo+Palma+145%2C+Miraflores+15074!5e0!3m2!1ses-419!2spe!4v1544554739888'); // this.container.innerHTML = '';\n    }\n  }, {\n    key: \"renderHome\",\n    get: function get() {\n      this.location;\n      this.container.append(this.section);\n    }\n  }]);\n\n  return Home;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/section.js?");

/***/ }),

/***/ "./src/components/tabs.js":
/*!********************************!*\
  !*** ./src/components/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tabs\": () => /* binding */ Tabs\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/components/common.js\");\n/* harmony import */ var _carrousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrousel */ \"./src/components/carrousel.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ \"./src/components/section.js\");\n/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ \"./src/components/dishes.js\");\n/* harmony import */ var _offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers */ \"./src/components/offers.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs(container, main) {\n    _classCallCheck(this, Tabs);\n\n    this.container = container;\n    this.activeTab = 0;\n    this.main = main;\n  }\n\n  _createClass(Tabs, [{\n    key: \"createTabs\",\n    value: function createTabs() {\n      var navBar = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newElment)('nav', undefined, ['nav']);\n      var links = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.newLinks)(['tab', 'tab', 'tab'], ['Branches', 'dishes', 'Offers'], ['#', '#', '#']);\n      navBar.append(links);\n      this.container.append(navBar);\n    }\n  }, {\n    key: \"listenTabs\",\n    value: function listenTabs() {\n      this.createTabs();\n\n      var links = _toConsumableArray(document.querySelectorAll('.tab'));\n\n      this.setTab(links);\n      this.AddActiveClass(links, this.activeTab);\n    }\n  }, {\n    key: \"setTab\",\n    value: function setTab(tabs) {\n      var _this = this;\n\n      tabs.forEach(function (tab, idx) {\n        tab.addEventListener('click', function () {\n          _this.removeActiveTabs(tabs);\n\n          _this.activeTab = idx;\n\n          _this.AddActiveClass(tabs);\n\n          _this.displayContent(_this.activeTab);\n        });\n      });\n    }\n  }, {\n    key: \"AddActiveClass\",\n    value: function AddActiveClass(linksCollection) {\n      linksCollection[this.activeTab].classList.add('active-tab');\n    }\n  }, {\n    key: \"removeActiveTabs\",\n    value: function removeActiveTabs(tabs) {\n      tabs.forEach(function (tab) {\n        tab.classList.remove('active-tab');\n      });\n    }\n  }, {\n    key: \"displayContent\",\n    value: function displayContent(tabIdx) {\n      switch (tabIdx) {\n        case 0:\n          var loc = new _section__WEBPACK_IMPORTED_MODULE_2__.Home(this.main);\n          (0,_carrousel__WEBPACK_IMPORTED_MODULE_1__.carrousel)(this.main);\n          loc.renderHome;\n          break;\n\n        case 1:\n          var dish = new _dishes__WEBPACK_IMPORTED_MODULE_3__.Dishes(this.main);\n          dish.renderDishes();\n          break;\n\n        default:\n          var off = new _offers__WEBPACK_IMPORTED_MODULE_4__.Offer(this.main);\n          off.renderOffers;\n          break;\n      }\n    }\n  }, {\n    key: \"renderTabs\",\n    value: function renderTabs() {\n      this.listenTabs();\n      this.container.append(this.main);\n    }\n  }]);\n\n  return Tabs;\n}();\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/components/tabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main */ \"./src/components/main.js\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\n\nvar container = document.querySelector('.content');\nvar renderHome = new _components_main__WEBPACK_IMPORTED_MODULE_0__.Index(container);\nrenderHome.renderPage;\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\na {\\n  color: black;\\n  text-decoration: none; }\\n\\nimg {\\n  object-fit: fill;\\n  width: 100%;\\n  height: 100%; }\\n\\n:root {\\n  --primary-color: #ffe187; }\\n\\n:root {\\n  --h1-size: 3.5rem; }\\n\\n:root {\\n  --navbar-columns: 3; }\\n\\n.nav ul {\\n  display: grid;\\n  grid-template-columns: repeat(var(--navbar-columns), 1fr); }\\n\\nmain .frames-container {\\n  display: grid;\\n  grid-template-rows: repeat(3, auto);\\n  row-gap: 1.5rem; }\\n\\nmain .frame-container {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  column-gap: 1.5rem; }\\n\\nmain .frame-container:nth-child(2) aside {\\n  grid-column: 1;\\n  grid-row: 1/3; }\\n\\nmain .frame-container:nth-child(2) iframe {\\n  grid-column: 2;\\n  grid-row: span 2; }\\n\\n.card {\\n  display: grid;\\n  grid-template-rows: auto 1fr;\\n  row-gap: 1rem; }\\n  .card__img-container {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    column-gap: 1.2rem; }\\n\\n.offers-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\\n  grid-gap: 1rem; }\\n\\n.footer {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr); }\\n\\n.content {\\n  max-width: 100vw; }\\n\\nheader,\\n.nav {\\n  background: var(--primary-color); }\\n\\n.header {\\n  font-size: var(--h1-size); }\\n\\nmain {\\n  padding: 0.75rem; }\\n\\n.header .title {\\n  text-align: center;\\n  padding: 1.75rem;\\n  color: #8C1204;\\n  font-weight: bolder; }\\n\\n.nav {\\n  border-radius: 10px 1px 0 0; }\\n  .nav .tab {\\n    display: block;\\n    width: 100%;\\n    text-align: center;\\n    text-transform: capitalize;\\n    font-size: 1.2rem;\\n    font-weight: bold;\\n    padding: 0.5rem 0; }\\n    .nav .tab:not(.active-tab):hover {\\n      background: #ffd454; }\\n\\n.active-tab {\\n  background-color: #fff; }\\n\\n.frame-container {\\n  padding: 2.5rem; }\\n  .frame-container iframe {\\n    width: 100%; }\\n  .frame-container .frame__list {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n  .frame-container li {\\n    line-height: 1.75;\\n    list-style: circle; }\\n  @media screen and (min-width: 992px) {\\n    .frame-container {\\n      width: 50vw;\\n      margin: 0 auto; } }\\n\\n.footer {\\n  background-color: var(--primary-color);\\n  padding: 1.5rem; }\\n  .footer__left {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center; }\\n  .footer__title {\\n    font-size: 1.75rem;\\n    font-weight: bold; }\\n  .footer ul {\\n    margin-top: 0.75rem; }\\n  .footer img {\\n    max-width: 300px;\\n    margin: auto; }\\n\\nmain {\\n  margin-top: 0.75rem; }\\n  main h2 {\\n    display: inline-block;\\n    font-size: 2.75rem;\\n    font-weight: bold;\\n    padding-right: 2.5rem;\\n    padding-bottom: 1.5rem;\\n    border-bottom: 5px solid #ffe187; }\\n  @media screen and (min-width: 768px) {\\n    main .cards-container {\\n      width: 75%;\\n      margin-left: auto;\\n      margin-right: auto; }\\n    main h2 {\\n      margin-left: 1.5rem; } }\\n\\n.card {\\n  margin-top: 1.75rem; }\\n  .card__title {\\n    font-size: 2rem;\\n    font-weight: bold; }\\n  .card__img-container {\\n    max-height: 300px; }\\n\\n.subtitle {\\n  margin-top: 1.52rem;\\n  font-size: 2.5rem;\\n  font-weight: bold; }\\n\\n.offers__img-container {\\n  margin-top: 1.5rem; }\\n\\n.card__btn {\\n  background: green;\\n  padding: 0.75rem 0;\\n  color: #fff;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n  border-radius: 0.5rem;\\n  text-align: center;\\n  text-transform: capitalize;\\n  cursor: pointer; }\\n  .card__btn:hover {\\n    background: #00b300; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./node_modules/css-loader/dist/runtime/api.js?");

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

/***/ "./src/img/offers/prfin.jpg":
/*!**********************************!*\
  !*** ./src/img/offers/prfin.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prfin.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prfin.jpg?");

/***/ }),

/***/ "./src/img/offers/prjueves.png":
/*!*************************************!*\
  !*** ./src/img/offers/prjueves.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prjueves.png\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prjueves.png?");

/***/ }),

/***/ "./src/img/offers/prlunes.jpg":
/*!************************************!*\
  !*** ./src/img/offers/prlunes.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prlunes.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prlunes.jpg?");

/***/ }),

/***/ "./src/img/offers/prmartes.jpg":
/*!*************************************!*\
  !*** ./src/img/offers/prmartes.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prmartes.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prmartes.jpg?");

/***/ }),

/***/ "./src/img/offers/prmiercoles.jpg":
/*!****************************************!*\
  !*** ./src/img/offers/prmiercoles.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/prmiercoles.jpg\");\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/img/offers/prmiercoles.jpg?");

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

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://LaReserva_Restaurant/./src/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://LaReserva_Restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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