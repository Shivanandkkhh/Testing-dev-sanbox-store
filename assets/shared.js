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

var OnetimeOptions = _ref => {
  var {
    selectedVariant,
    onUpdate,
    purchaseType
  } = _ref;
  var {
    price,
    compareAtPrice,
    OriginalCompareAtPrice
  } = selectedVariant;
  // Remove dollar signs and parse the values to floats
  var numPriceWithoutCurrency = parseFloat(price.replace('$', '')) || 0;
  var compareAtPriceWithoutCurrency = parseFloat(compareAtPrice.replace('$', '')) || 0;
  var OriginalComparePrice = parseFloat(OriginalCompareAtPrice.replace('$', '')) || 0;
  var showDiscountedPrice = compareAtPriceWithoutCurrency > numPriceWithoutCurrency;
  var finalCompareAtPrice = compareAtPrice;
  if (!showDiscountedPrice) {
    finalCompareAtPrice = OriginalCompareAtPrice;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-wrapper variant-container__var-wrapper ".concat(purchaseType === 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("onetime");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-label"
  }, "One-time Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "onetime-container__oneTime-Price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, finalCompareAtPrice), "\xA0", price)));
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
    price,
    priceWithoutCurrency
  } = selectedVariant;
  var {
    priceAdjustments,
    discount
  } = selectedSellingPlan;
  var discountNum = parseFloat(discount);
  var numPriceWithoutCurrency = parseFloat(price.replace('$', '').replace(',', '')) || 0;
  var numPrice = parseFloat(price.replace('$', '')).toFixed(2) || 0;
  var calculateDiscountedPrice = function calculateDiscountedPrice() {
    var offerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (offerType == 'percentage') {
      var discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
      return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
      var fixedAmt = numPriceWithoutCurrency - flatRate;
      return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
      return flatRate.toFixed(2);
    }
  };
  var calculateOffer = offerType => {
    if (offerType === "percentage") {
      return "".concat(discountNum, "%");
    } else if (offerType === "fixed_amount") {
      var newFixedAmountValue = discountNum / 100;
      return "$".concat(newFixedAmountValue.toFixed(2));
    } else if (offerType === "price") {
      var newValue = numPriceWithoutCurrency - discountNum / 100;
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
  }, "Subscribe ", discount > 0 && "& Save", "\xA0 ", discount > 0 && calculateOffer(priceAdjustments)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscriptionOpt-container__subscription-Price"
  }, calculateDiscountedPrice(priceAdjustments) < numPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, "$", numPrice), "\xA0$", calculateDiscountedPrice(priceAdjustments))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionOptions);

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
/* harmony import */ var _frequency_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequency-options */ "./js/components/react/frequency-options.js");

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
    options,
    selected
  } = shopifyData;
  var [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variants.find(variant => variant.id == selected));
  var [selectedSellingPlan, setselectedSellingPlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sellingplan[0] || {});
  var updateSelectedVariant = variantObj => {
    var {
      id
    } = variantObj;
    var selectedVariant = variants.find(variant => variant.id == id);
    setSelectedVariant(selectedVariant);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var {
      priceWithoutCurrency
    } = selectedVariant;
    var price = priceWithoutCurrency === null || priceWithoutCurrency === void 0 ? void 0 : priceWithoutCurrency.trim();
    if (purchaseType != "onetime") {
      if (selectedSellingPlan) {
        var {
          priceAdjustments,
          discount
        } = selectedSellingPlan;
        var discountNum = parseInt(discount);
        var numPriceWithoutCurrency = parseFloat(priceWithoutCurrency) || 0;
        var calculateDiscountedPrice = function calculateDiscountedPrice() {
          var offerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          if (offerType == 'percentage') {
            var discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
            return discountedPrice.toFixed(2);
          } else if (offerType == 'fixed_amount') {
            var fixedAmt = numPriceWithoutCurrency - flatRate;
            return fixedAmt.toFixed(2);
          } else if (offerType == 'price') {
            return flatRate.toFixed(2);
          }
        };
        price = calculateDiscountedPrice(priceAdjustments);
      }
    }
    document.querySelectorAll('[data-segmented-price]').forEach(priceInput => priceInput.value = price);
  }, [selectedVariant, purchaseType]);
  window.updateSelectedVariant = updateSelectedVariant;
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
    var sellingFrequencyInput = document.querySelectorAll('[data-selling-frequency]');
    updateInputValues(variantInputs, selectedVariant.id);
    if (purchaseType == "subscription") {
      updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
      updateInputValues(sellingFrequencyInput, selectedSellingPlan.frequency);
    } else {
      updateInputValues(sellingPlanInputs, '');
      updateInputValues(sellingFrequencyInput, '');
    }
    var priceContainer = document.querySelector('.product-price__current-price');
    if (priceContainer) {
      priceContainer.innerHTML = selectedVariant.price;
    }
  }, [selectedVariant, purchaseType, selectedSellingPlan]);
  var productOriginalPrice = parseFloat(selectedVariant.price.replace('$', '').replace(',', ''));
  var numProductCompareAtPrice = parseFloat(selectedVariant.compareAtPrice.replace('$', '').replace(',', ''));
  var productComparePrice;
  if (numProductCompareAtPrice > productOriginalPrice) {
    productComparePrice = selectedVariant.compareAtPrice;
  }
  if (!productComparePrice) {
    productComparePrice = selectedVariant.OriginalCompareAtPrice;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, sellingplan.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-label variant-container__opt-label"
  }, "Buying Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_onetime_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    onUpdate: handleSwitch
  }), Object.keys(selectedSellingPlan).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_subscription_options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: handleSwitch
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("s", null, " ", productComparePrice), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: productComparePrice ? "product-sale-color" : ""
  }, " ", selectedVariant.price, " "), " ", productComparePrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "product-sale-color"
  })), purchaseType != "onetime" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_frequency_options__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);



var transformProps = function transformProps(propsEl) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var propsJsonEl = propsEl && document.querySelector(propsEl);
  if (el) {
    propsJsonEl = propsEl && el.closest('div').querySelector(propsEl);
  }
  var props = {};
  if (propsJsonEl) {
    var jsonData = propsJsonEl.innerHTML;
    props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(jsonData);
    console.log(props, "props");
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