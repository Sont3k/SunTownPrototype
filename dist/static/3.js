webpackJsonp([3],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(15));

var _createClass2 = _interopRequireDefault(__webpack_require__(16));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(17));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(18));

var _inherits2 = _interopRequireDefault(__webpack_require__(19));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(50);

var _Header = _interopRequireDefault(__webpack_require__(38));

var _SEO = _interopRequireDefault(__webpack_require__(39));

__webpack_require__(884);

var _config = __webpack_require__(62);

var _axios = _interopRequireDefault(__webpack_require__(173));

var CancelSubscription =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(CancelSubscription, _Component);

  function CancelSubscription(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CancelSubscription);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CancelSubscription).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(CancelSubscription, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestOptions = {
        method: "GET"
      };
      var query = window.location.search;
      (0, _axios["default"])("".concat(_config.apiUrl, "/verify").concat(query), requestOptions).then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "cancel_subscription"
      }, _react["default"].createElement(_SEO["default"], {
        title: "Отписка от рассылки | SunTown",
        description: "Отписка от рассылки – неотъемлемый и естественный процесс email-маркетинга. Поэтому относится к нему нужно спокойно. Не бойтесь потерять, но и не отпускайте подписчика без боя.",
        url: "https://suntown-ukraine.com/cancel-subscription"
      }), _react["default"].createElement(_Header["default"], this.props), _react["default"].createElement("section", {
        className: "cancel_section"
      }, _react["default"].createElement("div", {
        className: "container cancel_container"
      }, _react["default"].createElement("h2", {
        className: "cancel_text"
      }, "\u0412\u044B \u043E\u0442\u043F\u0438\u0441\u0430\u043D\u044B \u043E\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439", " ", _react["default"].createElement("span", {
        className: "company_color"
      }, "\u0421\u0430\u043D\u0442\u0430\u0443\u043D")), _react["default"].createElement("h2", {
        className: "cancel_text"
      }, "\u0416\u0430\u043B\u044C, \u0447\u0442\u043E \u0412\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441 \u043D\u0430\u043C\u0438."), _react["default"].createElement(_reactRouterDom.Link, {
        to: this.props.location.pathname.includes("/ua") ? "/ua/" : "/"
      }, _react["default"].createElement("div", {
        className: "error_return_button"
      }, _react["default"].createElement("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))))));
    }
  }]);
  return CancelSubscription;
}(_react.Component);

var _default = CancelSubscription;
exports["default"] = _default;

/***/ })

});
//# sourceMappingURL=3.js.map