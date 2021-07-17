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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/modals/modal-cashback/modal-cashback.js":
/*!***************************************************************!*\
  !*** ../views/blocks/modals/modal-cashback/modal-cashback.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.product-card__bonus').on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(this, true);
  });
});

/***/ }),

/***/ "../views/components/productCard/productCard.js":
/*!******************************************************!*\
  !*** ../views/components/productCard/productCard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _$, _$2;

$('.product-card__favorite').on('click', function () {
  $(this).toggleClass('active');
}); //Формат

var money = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
});
$('.product-card__price-current').each(function () {
  var number = $(this).text();
  $(this).text(money.format(number));
});
var disc = (_$ = $('.product-card__price-old')) !== null && _$ !== void 0 ? _$ : false;

if (disc) {
  disc.each(function () {
    var number = $(this).text();
    $(this).text(money.format(number));
  });
}

var insta = (_$2 = $('.product-card__installments')) !== null && _$2 !== void 0 ? _$2 : false;

if (insta) {
  insta.each(function () {
    var number = $(this).text();
    $(this).text(money.format(number));
  });
}
/* Button-Buy */


$('.product-card__buy').on('click', function () {
  var btn = $(this),
      span = $(this).children('span');
  btn.toggleClass('active');
  btn.hasClass('active') ? span.text('В корзине') : span.text('В корзину');
});

/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: modalClose, modalCloseFunc, modalOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCloseFunc", function() { return modalCloseFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
var modalClose = function modalClose() {
  //Отмена по кнопке "Закрыть" и по фону
  $('.modal__button, .modal__close').on('click', function () {
    modalCloseFunc();
  });
  $('.modal-overlay').on('click', function () {
    modalCloseFunc();
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalCloseFunc();
    }
  });
}; //Закрытие модалки

var modalCloseFunc = function modalCloseFunc() {
  $('body, .modal').css('padding-right', 0);
  $('.modal, .modal-overlay, html').removeClass('modal-showed');
  $('.modal-form__hidden, .modal-form__visible').removeClass('form-done');
}; //открытие модального окна

var modalOpen = function modalOpen(el) {
  var modalName = $(el).data('modal'),
      body = $('body').width();
  var scrollWidth = window.innerWidth - body; //Показ модалки

  $(".modal[data-modal=\"".concat(modalName, "\"]")).addClass('modal-showed'); //Фиксируем страницу

  $('html').addClass('modal-showed');

  if (scrollWidth > 0) {
    // не забыть убрать .header
    $('body, .modal,').css('padding-right', scrollWidth);
  }
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_modals_modal_cashback_modal_cashback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/modals/modal-cashback/modal-cashback */ "../views/blocks/modals/modal-cashback/modal-cashback.js");
/* harmony import */ var _components_productCard_productCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/productCard/productCard */ "../views/components/productCard/productCard.js");
/* harmony import */ var _components_productCard_productCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_productCard_productCard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");



$(function () {
  Object(_blocks_modals_modal_cashback_modal_cashback__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_2__["modalClose"])();
  _components_productCard_productCard__WEBPACK_IMPORTED_MODULE_1___default()();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map