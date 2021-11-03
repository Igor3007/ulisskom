/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/banner-home/banner-home.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/banner-home/banner-home.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var owlBannerHome = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-home__slider.owl-carousel');
  owlBannerHome.owlCarousel({
    items: 1,
    animateOut: 'fadeOut'
  });
});

/***/ }),

/***/ "./src/blocks/modules/basket-aside/basket-aside.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/basket-aside/basket-aside.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__type input').on('change', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() == 2) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__form').removeClass('hide');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__button').hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__form').addClass('hide');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__button').show();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.basket-aside__title, .basket-aside__subtitle').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 767) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.page-basket__aside').toggleClass('open');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/basketcard/basketcard.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/basketcard/basketcard.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import $ from 'jquery';
// $(document).ready(function () {
//     function totalPrice() {
//         const cardElem = $('.page-basket__list > div');
//         const totalPriceElem = $('.total-price-aside');
//         const totalCountElem = $('.total-count-aside');
//         var total = 0;
//         cardElem.each(function (index) {
//             let count = Number($(this).find('.basketcard__count input').val());
//             let price = Number($(this).find('.basketcard__price .basketcard__price-current span').text());
//             $(this).find('.basketcard__cost .basketcard__price-current span').text((count * price).toFixed(2))
//             total = total + (count * price);
//             totalCountElem.text(index + 1);
//         })
//         totalPriceElem.text(total.toFixed(2))
//     }
//     totalPrice();
//     $('.basketcard__count-inc').on('click', function () {
//         var total = Number($(this).parent().find('input').val());
//         $(this).parent().find('input').val(total + 1)
//         totalPrice()
//     })
//     $('.basketcard__count-dec').on('click', function () {
//         var total = Number($(this).parent().find('input').val());
//         if (total > 1) {
//             $(this).parent().find('input').val(total - 1)
//         }
//         totalPrice()
//     })
//     $('.basketcard__count-num input').on('blur', function () {
//         const regEx = /[^\d\+]/g;
//         const value = $(this).val().replace(regEx, '');
//         $(this).val(value ? value : 1);
//         totalPrice()
//     })
// })

/***/ }),

/***/ "./src/blocks/modules/card-callback/card-callback.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/card-callback/card-callback.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function modal(params) {
    this.container = params.container;

    this.onOpen = function () {
      this.container.addClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('hidden');
    };

    this.onClose = function () {
      this.container.removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('hidden');
    };
  } // init


  var popupOpenCallBack = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-modal-open=callback]');
  var popupCloseCallBack = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-modal-close=callback]');
  var rightModalCallback = new modal({
    'container': jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right-popup[data-modal=callback]')
  });
  popupOpenCallBack.on('click', function () {
    rightModalCallback.onOpen();
  });
  popupCloseCallBack.on('click', function () {
    rightModalCallback.onClose();
  });
});

/***/ }),

/***/ "./src/blocks/modules/card-moreinfo/card-moreinfo.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/card-moreinfo/card-moreinfo.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  /* info slider */
  var cardProps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__slider.owl-carousel');
  var cardPropsTabs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__tabs');
  var cardPropsItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__itemtab');

  function scrollToElement(elem, container) {
    container.animate({
      scrollLeft: elem.offset().left - container.offset().left + container.scrollLeft() - container.width() / 2 + elem.width() / 2,
      duration: 300
    });
  }

  function scrollToElementTop(elem, container) {
    container.animate({
      scrollTop: elem.offset().top - container.offset().top + container.scrollTop() - container.height() / 2 + elem.height() / 2,
      duration: 200
    });
  }

  cardProps.owlCarousel({
    items: 1,
    loop: false,
    mouseDrag: false,
    onInitialized: function onInitialized(event) {
      cardPropsTabs.find('li').first().addClass('active');
    },
    onTranslate: function onTranslate() {
      cardPropsItem.show();
    },
    onTranslated: function onTranslated() {
      cardPropsItem.removeAttr('style');
    },
    onDrag: function onDrag() {
      cardPropsItem.show();
    },
    onDragged: function onDragged() {
      cardPropsItem.removeAttr('style');
    }
  });
  cardPropsTabs.on('click', 'li', function (e) {
    e.preventDefault();
    cardPropsTabs.find('li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    var selectGroup = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('filter-id');
    /*переходим к группе*/

    cardProps.trigger('to.owl.carousel', [selectGroup, 300, true]);
  });
  cardProps.on('changed.owl.carousel', function (event) {
    var indexElemSlider = event.item.index;
    var ElemSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__tabcontainer .owl-stage > div').eq(indexElemSlider).children().data('filter');
    cardPropsTabs.find('li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-filter-id=' + ElemSlider + ']').addClass('active');
    scrollToElement(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__tabs ul li.active'), jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-moreinfo__tabs ul'));
  });
  /*  reviewSend */

  var reviewSend = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reviewSend');
  var reviewForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reviewForm');
  reviewSend.on('click', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.review-add__form').hasClass('hide')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.review-add__form').removeClass('hide');
    } else {
      reviewForm.submit();
    }
  });
  /* .card-slider__list.owl-carousel */

  var cardSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-slider__list.owl-carousel');
  var cardThunb = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-slider__thumb');
  cardSlider.owlCarousel({
    items: 1,
    loop: false
  });
  cardSlider.on('changed.owl.carousel', function (event) {
    var indexElemSlider = event.item.index;
    var elemActive = cardThunb.find('li').eq(indexElemSlider);
    cardThunb.find('li').removeClass('active');
    elemActive.addClass('active');
    scrollToElementTop(elemActive, cardThunb.find('ul'));
  });
  cardThunb.on('click', 'li', function () {
    var indexThumb = cardThunb.find('li').index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    cardSlider.trigger('to.owl.carousel', [indexThumb, 300, true]);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-slider__thumb ul').on('scroll', function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
  /* shadow for thumbnail */

  function thumbShadow(elem) {
    var elemScrollHeight = elem.find('li').outerHeight();
    var countScrollElement = elem.find('li').length;
    var scrollElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-overlay');

    if (elem.scrollTop() > 0) {
      scrollElem.addClass('topshw');
    } else {
      scrollElem.removeClass('topshw');
    }

    if (elem.scrollTop() + 15 < elemScrollHeight * (countScrollElement + 1) - elem.height()) {
      scrollElem.addClass('btmshw');
    } else {
      scrollElem.removeClass('btmshw');
    }
  } //init scroll


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-overlay ul').on('scroll', function (e) {
    thumbShadow(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  }); //init onload

  thumbShadow(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-overlay ul'));
}); //ready

/***/ }),

/***/ "./src/blocks/modules/cart-similar/cart-similar.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/cart-similar/cart-similar.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var similarSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-similar.owl-carousel');
  similarSlider.owlCarousel({
    items: 1,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 2
      },
      580: {
        items: 3
      },
      768: {
        items: 4
      }
    }
  });
}); //ready

/***/ }),

/***/ "./src/blocks/modules/catalog-filter/catalog-filter.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/catalog-filter/catalog-filter.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider_distribute_nouislider_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider/distribute/nouislider.min */ "./node_modules/nouislider/distribute/nouislider.min.js");
/* harmony import */ var nouislider_distribute_nouislider_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider_distribute_nouislider_min__WEBPACK_IMPORTED_MODULE_0__);


if (document.getElementById('slider-price')) {
  var handlesSlider = document.getElementById('slider-price');
  var startSider = handlesSlider.getAttribute('data-nouislider-start').split(',');
  var rangeSider = handlesSlider.getAttribute('data-nouislider-range').split(',');
  nouislider_distribute_nouislider_min__WEBPACK_IMPORTED_MODULE_0___default.a.create(handlesSlider, {
    start: startSider,
    // tooltips: [true, true],
    step: 100,
    range: {
      'min': [Number(rangeSider[0])],
      'max': [Number(rangeSider[1])]
    }
  });
  handlesSlider.noUiSlider.on('update', function (values, handle) {
    var res = handlesSlider.noUiSlider.get();
    document.querySelector('#min-price').innerText = Number(res[0]);
    document.querySelector('#max-price').innerText = Number(res[1]);
    document.querySelector('#price-start').value = Number(res[0]);
    document.querySelector('#price-end').value = Number(res[1]);
  });
  /* button view all */

  document.querySelector('.catalog-filter-checkbox__all').addEventListener('click', function (elem) {
    if (elem.target.parentElement.children[0].classList.toggle('open')) {
      elem.target.innerText = 'Свернуть';
    } else {
      elem.target.innerText = 'Показать все';
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/form-login/form-login.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/form-login/form-login.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var login = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-login__slider.owl-carousel');
  var loginPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-login__item');
  login.owlCarousel({
    items: 1,
    margin: 0,
    onTranslate: function onTranslate() {
      loginPanel.show();
    },
    onTranslated: function onTranslated() {
      loginPanel.removeAttr('style');
    },
    onDrag: function onDrag() {
      loginPanel.show();
    },
    onDragged: function onDragged() {
      loginPanel.removeAttr('style');
    },
    onInitialized: function onInitialized() {}
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#register', function (event) {
    event.preventDefault();
    login.trigger('to.owl.carousel', [1, 300, true]);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#recovery', function (event) {
    event.preventDefault();
    login.trigger('to.owl.carousel', [2, 300, true]);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#signin', function (event) {
    event.preventDefault();
    login.trigger('to.owl.carousel', [0, 300, true]);
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var button = document.querySelector('.nav__hamburger');
var buttonMobile = document.querySelector('.menu-catalog__close');
var buttonFooter = document.querySelector('.footer__catalog');
var elemMenu = document.querySelector('.menu-catalog');
var elemBody = document.querySelector('body');
var elemMain = document.querySelector('main');
var elemHeaderInfo = document.querySelector('.header-info');
var elemHeaderMain = document.querySelector('.header-main');
var elemHeaderLogo = document.querySelector('.header-main__logo');
var elemFooter = document.querySelector('footer');

function openMenu() {
  button.classList.toggle("open");
  elemBody.classList.toggle('menuOpen');
  elemMenu.classList.toggle('open');

  if (document.querySelector('body').clientWidth > 1024 && !document.querySelector('.main-container__aside')) {
    if (elemMenu.classList.contains('open')) {
      elemMain.style.marginLeft = elemMenu.clientWidth + 'px';
      elemFooter.style.marginLeft = elemMenu.clientWidth + 'px'; // elemMenu.style.top = 0
    } else {
      elemMain.style.marginLeft = '0';
      elemFooter.style.marginLeft = '0';
    }
  } else {
    elemMain.style.marginLeft = '0'; // elemMenu.style.top = document.querySelector('header').clientHeight+'px'
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    setTimeout(function () {// $('.banner-home__slider.owl-carousel').trigger('refresh.owl.carousel')
      // $('.slider-home.owl-carousel').trigger('refresh.owl.carousel')
    }, 300);
  });
}

button.addEventListener('click', function () {
  openMenu();
});

if (buttonMobile) {
  buttonMobile.addEventListener('click', function () {
    openMenu();
  });
}

buttonFooter.addEventListener('click', function () {
  openMenu();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  /* serch */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__search span').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.form').toggleClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.form input').focus();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__search input').on('blur', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.nav__search').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.nav__search').find('.form').toggleClass('hide');
  });
  /* fixed */

  function fixedHeader() {
    var heightOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-top').height();
    var fixedElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-main');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() > heightOffset && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 940) {
      fixedElem.addClass('fixed');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('main').css({
        'top': fixedElem.height() + 'px',
        'position': 'relative'
      });
    } else {
      fixedElem.removeClass('fixed');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('main').removeAttr('style');
    }
  }
  /* init */

  /* fixedHeader();
    $(document).on('scroll', function (event) {
      fixedHeader();
  }) */

});

/***/ }),

/***/ "./src/blocks/modules/mapsfilter/mapsfilter.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/mapsfilter/mapsfilter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* maps yandex */
var myMap;
var mapsObj = [{
  'image': 'obj1.jpg',
  'title': 'ЧТУП УлиссКом',
  'address': 'г. Могилев, ул. Криулина, д. 27, 2 этаж',
  'point': [53.955871570632105, 30.33343899999998],
  'time': [{
    'weekday': 'Пн - Пт',
    'time': '7:30-20:30'
  }],
  'phone': ['+375 (44) 788-88-52']
}, {
  'image': 'obj2.jpg',
  'title': 'ТЦ АРГО',
  'address': 'г. Могилев, ул. Габровская, д. 45, 2 этаж, павильон 12 ',
  'point': [53.87191807067873, 30.361358499999984],
  'time': [{
    'weekday': 'Пн - Пт',
    'time': '7:30-20:30'
  }, {
    'weekday': 'Сб',
    'time': '8:00-20:00'
  }, {
    'weekday': 'Вс',
    'time': '8:00-19:00'
  }],
  'phone': ['+375 (44) 788-88-52']
}, {
  'image': 'obj3.jpg',
  'title': 'ТЦ Строймаркет',
  'address': 'г. Могилев, ул. Чайковского, д. 8, 2 этаж, павильон 56',
  'point': [53.87724207069243, 30.33389749999995],
  'time': [{
    'weekday': 'Пн - Пт',
    'time': '7:30-20:30'
  }],
  'phone': ['+375 (44) 788-88-52']
}, {
  'image': 'obj3.jpg',
  'title': 'ИП А. Мацукевич',
  'address': 'г. Могилев, ул. Быховская, 6 , Быховский рынок, павильон 97-98',
  'point': [53.89449557064934, 30.323261499999955],
  'time': [{
    'weekday': 'Пн - Пт',
    'time': '11:00 - 20:00'
  }, {
    'weekday': 'Сб-Вс',
    'time': '11:00 - 19:00'
  }],
  'phone': ['+375 (44) 788-88-52', '+375 (44) 788-88-52']
}]; // Дождёмся загрузки API и готовности DOM.

if (document.querySelector('#map')) {
  ymaps.ready(init);
}

function init() {
  /* масштаб карты */
  function zoom() {
    if ($(window).width() < 680) {
      return 10;
    } else {
      return 11;
    }
  }
  /* коррдинаты геообъектов */


  function getPinCoordinats() {
    var arr = [];
    mapsObj.forEach(function (item) {
      arr.push(item.point);
    });
    return arr;
  }

  console.log(getPinCoordinats());
  var center = [53.92860497860575, 30.329383698242154];
  var myMap = new ymaps.Map('map', {
    center: center,
    zoom: zoom()
  }, {
    searchControlProvider: 'yandex#search'
  }),
      // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      pinSetting = {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '/img/svg/ic_pin.svg',
    // Размеры метки.
    iconImageSize: [39, 53],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-18, -58]
  },
      pinCoordints = getPinCoordinats();

  function baloonSetting(index) {
    function sliceNumber(arr) {
      var html = '';
      arr.forEach(function (item) {
        html += item + '<br>';
      });
      return html;
    }

    var html = '<div class="yamp_baloon" ><h3>' + mapsObj[index].title + '</h3><p>' + mapsObj[index].address + '</p><p>' + sliceNumber(mapsObj[index].phone) + '</p></div>';
    return {
      hintContent: 'Ulisscom',
      balloonContent: html,
      iconCaption: 'Ulisscom'
    };
  }

  pinCoordints.forEach(function (item, index, array) {
    var myPlacemark = new ymaps.Placemark(item, baloonSetting(index), pinSetting);
    myMap.geoObjects.add(myPlacemark);
  });
  myMap.behaviors.disable('scrollZoom');
  var ctrlKey = false;
  var ctrlMessVisible = false;
  var timer; // Отслеживаем скролл мыши на карте, чтобы показывать уведомление

  myMap.events.add(['wheel', 'mousedown'], function (e) {
    if (e.get('type') == 'wheel') {
      if (!ctrlKey) {
        // Ctrl не нажат, показываем уведомление
        $('#ymap_ctrl_display').fadeIn(300);
        ctrlMessVisible = true;
        clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление

        timer = setTimeout(function () {
          $('#ymap_ctrl_display').fadeOut(300);
          ctrlMessVisible = false;
        }, 1500);
      } else {
        // Ctrl нажат, скрываем сообщение
        $('#ymap_ctrl_display').fadeOut(100);
      }
    }

    if (e.get('type') == 'mousedown' && ctrlMessVisible) {
      // Скрываем уведомление при клике на карте
      $('#ymap_ctrl_display').fadeOut(100);
    }
  }); // Обрабатываем нажатие на Ctrl

  $(document).keydown(function (e) {
    if (e.which === 17 && !ctrlKey) {
      // Ctrl нажат: включаем масштабирование мышью
      ctrlKey = true;
      myMap.behaviors.enable('scrollZoom');
    }
  });
  $(document).keyup(function (e) {
    // Ctrl не нажат: выключаем масштабирование мышью
    if (e.which === 17) {
      ctrlKey = false;
      myMap.behaviors.disable('scrollZoom');
    }
  });
  $(document).on('click', '.maps-filter__item', function (e) {
    e.preventDefault();
    var index = $('.maps-filter__item').index($(this));
    $('html').animate({
      scrollTop: $('main').offset().top
    }, 100);
    myMap.setCenter(pinCoordints[index], 16, {
      checkZoomRange: true
    });
  });
}
/* maps yandex */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/minicard/minicard.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/minicard/minicard.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* modules.define('minicard', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

            }
        }
    }
}));

}); */

/***/ }),

/***/ "./src/blocks/modules/mobile-menu-button/mobile-menu-button.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/mobile-menu-button/mobile-menu-button.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var buttonOpenFilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter-mobile-button');

if (buttonOpenFilter) {
  buttonOpenFilter.on('click', function (elem) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-container__aside').toggleClass('open') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-container__aside').hasClass('open')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').text('назад');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-text'));
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/product-slider-home/product-slider-home.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/modules/product-slider-home/product-slider-home.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var productSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__tabscontainer.owl-carousel');
  var productSliderNext = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__nav-next');
  var productSliderPrev = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__nav-prev');
  var productSliderTabs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__list');
  var productSliderSlide = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__slide');
  productSlider.owlCarousel({
    items: 5,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 2
      },
      650: {
        items: 3
      },
      1024: {
        items: 4
      },
      1440: {
        items: 5
      }
    }
  });
  productSliderNext.on('click', function () {
    productSlider.trigger('next.owl.carousel');
  });
  productSliderPrev.on('click', function () {
    productSlider.trigger('prev.owl.carousel');
  });
  /* filter slider-2 */

  productSliderTabs.on('click', 'li', function (e) {
    e.preventDefault();
    productSliderTabs.find('li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    /*получаем id текущей группы*/

    var selectGroup = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('filter-id');
    /* находим первый элем в слайдере с таким id и получаем index */

    var indexElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__slide[data-filter=' + selectGroup + ']').parent().index();
    /*переходим к группе*/

    productSlider.trigger('to.owl.carousel', [indexElem, 200, true]);
  });
  productSlider.on('changed.owl.carousel', function (event) {
    var indexElemSlider = event.item.index;
    var ElemSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-slider__tabscontainer .owl-stage > div').eq(indexElemSlider).children().data('filter');
    productSliderTabs.find('li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-filter-id=' + ElemSlider + ']').addClass('active');
  });
});
/* modules.define('product-slider-home', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                }
            }
        }
    }));

}); */

/***/ }),

/***/ "./src/blocks/modules/right-popup/right-popup.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/right-popup/right-popup.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  /* 
  =====================================================    
  */
  function modal(params) {
    this.container = params.container;

    this.onOpen = function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('div').is('[data-modal=login]')) {
        this.container.addClass('open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('hidden');
      }
    };

    this.onClose = function () {
      this.container.removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('hidden');
    };
  } // init


  var popupContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right-popup[data-modal=login]');
  var popupOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-modal-open=login]');
  var popupClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-modal-close=login]');
  var rightModal = new modal({
    'container': popupContainer
  });
  popupOpen.on('click', function () {
    rightModal.onOpen();
  });
  popupClose.on('click', function () {
    rightModal.onClose();
  });
});

/***/ }),

/***/ "./src/blocks/modules/slider-home/slider-home.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/slider-home/slider-home.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider-home.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      800: {
        items: 3
      }
    }
  });
});
/* modules.define('slider-home', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    const slide = ['slide1', 'slide2']
                }
            }
        }
    }));

}); */

/***/ }),

/***/ "./src/blocks/modules/top-brands/top-brands.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/top-brands/top-brands.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2 */ "./node_modules/owl.carousel2/dist/owl.carousel.js");
/* harmony import */ var owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-brands__list.owl-carousel').owlCarousel({
    items: 7,
    margin: 5,
    loop: true,
    responsive: {
      0: {
        items: 3
      },
      580: {
        items: 4
      },
      760: {
        items: 5
      },
      1200: {
        items: 6
      },
      1440: {
        items: 7
      }
    }
  });
});
/* modules.define('top-brands', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

            }
        }
    }
}));

}); */

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_banner_home_banner_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/banner-home/banner-home */ "./src/blocks/modules/banner-home/banner-home.js");
/* harmony import */ var _modules_slider_home_slider_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/slider-home/slider-home */ "./src/blocks/modules/slider-home/slider-home.js");
/* harmony import */ var _modules_product_slider_home_product_slider_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/product-slider-home/product-slider-home */ "./src/blocks/modules/product-slider-home/product-slider-home.js");
/* harmony import */ var _modules_minicard_minicard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/minicard/minicard */ "./src/blocks/modules/minicard/minicard.js");
/* harmony import */ var _modules_minicard_minicard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_minicard_minicard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_top_brands_top_brands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/top-brands/top-brands */ "./src/blocks/modules/top-brands/top-brands.js");
/* harmony import */ var _modules_catalog_filter_catalog_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/catalog-filter/catalog-filter */ "./src/blocks/modules/catalog-filter/catalog-filter.js");
/* harmony import */ var _modules_card_moreinfo_card_moreinfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/card-moreinfo/card-moreinfo */ "./src/blocks/modules/card-moreinfo/card-moreinfo.js");
/* harmony import */ var _modules_cart_similar_cart_similar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/cart-similar/cart-similar */ "./src/blocks/modules/cart-similar/cart-similar.js");
/* harmony import */ var _modules_mapsfilter_mapsfilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/mapsfilter/mapsfilter */ "./src/blocks/modules/mapsfilter/mapsfilter.js");
/* harmony import */ var _modules_mapsfilter_mapsfilter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_mapsfilter_mapsfilter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_card_callback_card_callback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/card-callback/card-callback */ "./src/blocks/modules/card-callback/card-callback.js");
/* harmony import */ var _modules_right_popup_right_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/right-popup/right-popup */ "./src/blocks/modules/right-popup/right-popup.js");
/* harmony import */ var _modules_form_login_form_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/form-login/form-login */ "./src/blocks/modules/form-login/form-login.js");
/* harmony import */ var _modules_basketcard_basketcard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/basketcard/basketcard */ "./src/blocks/modules/basketcard/basketcard.js");
/* harmony import */ var _modules_basketcard_basketcard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_basketcard_basketcard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_basket_aside_basket_aside__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/basket-aside/basket-aside */ "./src/blocks/modules/basket-aside/basket-aside.js");
/* harmony import */ var _modules_mobile_menu_button_mobile_menu_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/mobile-menu-button/mobile-menu-button */ "./src/blocks/modules/mobile-menu-button/mobile-menu-button.js");


/* home */






/* catalog */


/* card */





/* popup */




/* basket */




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svg4everybody/dist/svg4everybody.js */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tooltipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tooltipster */ "./node_modules/tooltipster/dist/js/tooltipster.bundle.min.js");
/* harmony import */ var tooltipster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tooltipster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery.inputmask/dist/jquery.inputmask.bundle */ "./node_modules/jquery.inputmask/dist/jquery.inputmask.bundle.js");
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_5__);






/* init svgPolyfill */

_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-tooltip=text]').tooltipster({
    theme: 'tooltipster-shadow',
    delay: 0,
    triggerOpen: {
      mouseenter: true,
      // For mouse
      tap: true // For touch device

    },
    triggerClose: {
      mouseleave: true,
      // For mouse
      tap: true // For touch device

    },
    animation: 'fade',
    debug: true,
    side: 'top',
    contentAsHTML: true,
    interactive: true
  });
  var contentTooltip;
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-tooltip=content]').on('click', function () {
    contentTooltip = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this);
  }).tooltipster({
    content: function content() {
      return contentTooltip.parent().find('.tooltip-content').html();
    },
    functionPosition: function functionPosition(instance, helper, position) {
      if (contentTooltip.hasClass('ic_pin-green')) {
        position.coord.left += 100;
        return position;
      }
    },
    theme: 'tooltipster-shadow',
    trigger: 'custom',
    triggerOpen: {
      click: true,
      // For mouse
      tap: true // For touch device

    },
    triggerClose: {
      click: true,
      // For mouse
      tap: true // For touch device

    },
    animation: 'fade',
    debug: true,
    side: 'top',
    contentCloning: true,
    contentAsHTML: true,
    interactive: true,
    delay: 100
  });
  /* init inputmask */

  jquery__WEBPACK_IMPORTED_MODULE_3___default()("input[type=tel]").inputmask("+375(99) 999-99-99");
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map