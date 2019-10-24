webpackJsonp([7],{

/***/ 319:
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

__webpack_require__(884);

var _config = __webpack_require__(62);

var _Header = _interopRequireDefault(__webpack_require__(38));

var _SEO = _interopRequireDefault(__webpack_require__(39));

var SubscribeSuccess =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SubscribeSuccess, _Component);

  function SubscribeSuccess(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SubscribeSuccess);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SubscribeSuccess).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(SubscribeSuccess, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestOptions = {
        method: "GET"
      };
      var query = window.location.search;
      fetch("".concat(_config.apiUrl, "/verify").concat(query), requestOptions).then(function (res) {
        return res.json();
      }).then(function (res) {
        document.getElementById("subscription_status").textContent = res.message;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "cancel_subscription"
      }, _react["default"].createElement(_SEO["default"], {
        title: "Подписка на рассылку| SunTown",
        description: "Опция на сайте, которая позволяет посетителям получать рассылки компании на указанный email адрес. ",
        url: "https://suntown-ukraine.com/newsletter/verify"
      }), _react["default"].createElement(_Header["default"], this.props), _react["default"].createElement("section", {
        className: "cancel_section"
      }, _react["default"].createElement("div", {
        className: "container cancel_container"
      }, _react["default"].createElement("h2", {
        id: "subscription_status",
        className: "cancel_text"
      }, "E-mail \u0430\u0434\u0440\u0435\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D."), _react["default"].createElement("h2", {
        className: "cancel_text"
      }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E!"), _react["default"].createElement(_reactRouterDom.Link, {
        to: this.props.location.pathname.includes("/ua") ? "/ua/" : "/"
      }, _react["default"].createElement("div", {
        className: "error_return_button"
      }, _react["default"].createElement("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))))));
    }
  }]);
  return SubscribeSuccess;
}(_react.Component);

var _default = SubscribeSuccess;
exports["default"] = _default;

/***/ })

});
//# sourceMappingURL=7.js.map