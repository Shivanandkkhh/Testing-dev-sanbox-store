"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/react/frequency-options.js":
/*!**************************************************!*\
  !*** ./js/components/react/frequency-options.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import 'StyleComponents/variant-options.scss';

var FrequencyOptions = _ref => {
  var {
    sellingplan,
    selectedSellingPlan,
    onUpdate
  } = _ref;
  console.log('frequency...', sellingplan);
  var extractFrequency = frequency => {
    var _deliveryText;
    var [deliveryText] = frequency.split(',');
    if (!deliveryText) return;
    deliveryText = ((_deliveryText = deliveryText) === null || _deliveryText === void 0 ? void 0 : _deliveryText.toLowerCase()).split("delivery every")[1];
    return deliveryText;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-label variant-container__opt-label"
  }, "Delivery every"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-options variant-container__var-options"
  }, sellingplan.length && sellingplan.map((sellplan, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "frequency-container__freq-wrapper variant-container__var-wrapper ".concat(selectedSellingPlan.id === sellplan.id ? 'active' : ''),
    onClick: () => onUpdate(sellplan)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "frequency-container__freq-name variant-container__var-name"
  }, extractFrequency(sellplan.frequency))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrequencyOptions);

/***/ }),

/***/ "./js/components/react/onetime-options.js":
/*!************************************************!*\
  !*** ./js/components/react/onetime-options.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import 'StyleComponents/variant-options.scss';

var OnetimeOptions = _ref => {
  var {
    selectedVariant,
    onUpdate,
    purchaseType
  } = _ref;
  console.log(purchaseType, 'purchaseType');
  var {
    price
  } = selectedVariant;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-wrapper variant-container__var-wrapper ".concat(purchaseType == 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("onetime");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-label"
  }, "One-time Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "onetime-container__oneTime-Price"
  }, price)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnetimeOptions);

/***/ }),

/***/ "./js/components/react/subscription-options.js":
/*!*****************************************************!*\
  !*** ./js/components/react/subscription-options.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import "StyleComponents/subscription-sec.scss";

var SubscriptionOptions = _ref => {
  var {
    selectedVariant,
    selectedSellingPlan,
    onUpdate,
    purchaseType
  } = _ref;
  var {
    price
  } = selectedVariant;
  var {
    priceAdjustments,
    discount
  } = selectedSellingPlan;
  var discountNum = parseInt(discount);
  var calculateDiscountedPrice = function calculateDiscountedPrice() {
    var offerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var numericPrice = parseFloat(price.split("$")[1]);
    var flatRate = percentage / 100;
    if (offerType == 'percentage') {
      var discountedPrice = numericPrice * (1 - percentage / 100);
      return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
      var fixedAmt = numericPrice - flatRate;
      return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
      return flatRate.toFixed(2);
    }
  };
  var calculateOffer = (offerType, price, offerPercentage) => {
    if (offerType === "percentage") {
      return "".concat(offerPercentage, "%");
    } else if (offerType === "fixed_amount") {
      var newFixedAmountValue = offerPercentage / 100;
      return "$".concat(newFixedAmountValue.toFixed(2));
    } else if (offerType === "price") {
      var numericPrice = parseFloat(price.split("$")[1]);
      var newValue = numericPrice - offerPercentage / 100;
      return "$".concat(newValue.toFixed(2));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ".concat(purchaseType != 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("subscription");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-label"
  }, "Subscribe & Save\xA0", calculateOffer(priceAdjustments, price, discountNum)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscriptionOpt-container__subscription-Price"
  }, "$", calculateDiscountedPrice(priceAdjustments, price, discountNum))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionOptions);

/***/ }),

/***/ "./js/components/react/variant-options.js":
/*!************************************************!*\
  !*** ./js/components/react/variant-options.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import 'StyleComponents/variant-options.scss';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    variants,
    selectedVariant,
    onUpdate,
    options,
    selectedSellingPlan,
    purchaseType
  } = _ref;
  var [optionName] = Object.keys(options);
  var {
    discount
  } = selectedSellingPlan || {};
  var calculateDiscountPrice = (price, discount) => {
    if (discount && purchaseType == "subscription") {
      return price - price * discount / 100;
    } else return price;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variant-container__opt-label"
  }, optionName));
});

/***/ }),

/***/ "./js/components/react/variant-selector.js":
/*!*************************************************!*\
  !*** ./js/components/react/variant-selector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _onetime_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onetime-options */ "./js/components/react/onetime-options.js");
/* harmony import */ var _subscription_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-options */ "./js/components/react/subscription-options.js");
/* harmony import */ var _variant_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant-options */ "./js/components/react/variant-options.js");
/* harmony import */ var _frequency_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frequency-options */ "./js/components/react/frequency-options.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





// import 'StyleComponents/variant-options.scss';
// import 'StyleComponents/subscription-sec.scss';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data: shopifyData
  } = _ref;
  var [purchaseType, setPurchaseType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('onetime');
  var {
    variants,
    sellingplan,
    options
  } = shopifyData;
  var [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variants[0]);
  var [selectedSellingPlan, setselectedSellingPlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sellingplan[0]);
  var handleSwitch = purchaseType => {
    setPurchaseType(purchaseType);
  };
  var handleVariantChange = obj => {
    setSelectedVariant(_objectSpread({}, obj));
  };
  var updateSellingPlan = sellingPlanObj => {
    setselectedSellingPlan(_objectSpread({}, sellingPlanObj));
  };
  var updateInputValues = (inputs, value) => {
    inputs.forEach(input => {
      if (input.closest('[data-product-form]')) {
        input.value = value;
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    //since product-form custom element code is compiled and is not set to initialise on connected callback
    //we are simply updating the input values in the existing product form
    var variantInputs = document.querySelectorAll('input[name="id"]');
    var sellingPlanInputs = document.querySelectorAll('input[name="selling_plan"]');
    updateInputValues(variantInputs, selectedVariant.id);
    //update sellingplan id forsubscription purchase
    if (purchaseType == "subscription") {
      updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
    } else {
      updateInputValues(sellingPlanInputs, '');
    }
    var priceContainer = document.querySelector('.product-price__current-price');
    if (priceContainer) {
      priceContainer.innerHTML = selectedVariant.price;
    }
  }, [selectedVariant, purchaseType, selectedSellingPlan]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, sellingplan.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-label variant-container__opt-label"
  }, "Buying Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_onetime_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    onUpdate: handleSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_subscription_options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: handleSwitch
  }))), variants.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_variant_options__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variants: variants,
    sellingplan: sellingplan,
    selectedVariant: selectedVariant,
    onUpdate: handleVariantChange,
    options: options,
    selectedSellingPlan: selectedSellingPlan,
    purchaseType: purchaseType
  }), purchaseType != "onetime" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_frequency_options__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sellingplan: sellingplan,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: updateSellingPlan
  }));
});

/***/ }),

/***/ "./js/components/reactWrapper.js":
/*!***************************************!*\
  !*** ./js/components/reactWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var transformProps = function transformProps(propsEl) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var propsJsonEl = propsEl && document.querySelector(propsEl);
  if (el) {
    propsJsonEl = propsEl && el.closest('div').querySelector(propsEl);
  }
  var props = {};
  if (propsJsonEl) {
    var jsonData = propsJsonEl.innerHTML;
    props = JSON.parse(jsonData);
  }
  console.log(props);
  return props;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var ParentComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var propsEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var rootEl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  //parentComponent = parent vue component
  //el = element where you want render your component
  //propsEl = class or id of script from which contains json data (props) for your component
  if (!ParentComponent || !el) {
    console.error("Check reactWrapper.js file , parentComponent and element required to create vue instance");
    return;
  }
  var root = null;
  var propData = {};
  if (rootEl) {
    var rootElement = rootEl;
    propData = transformProps(propsEl, rootElement);
    root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(rootElement);
  } else {
    propData = transformProps(propsEl);
    var _rootElement = document.getElementsByTagName("".concat(el));
    root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(_rootElement[0]);
  }
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ParentComponent, propData));
});

/***/ })

}]);