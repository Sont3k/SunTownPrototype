webpackJsonp([5],{

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(11);

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(12));

var _createClass2 = _interopRequireDefault(__webpack_require__(13));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(14));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(15));

var _inherits2 = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(50);

var _Header = _interopRequireDefault(__webpack_require__(34));

__webpack_require__(912);

var _reactRedux = __webpack_require__(26);

var _lines = _interopRequireDefault(__webpack_require__(913));

var Error =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Error, _Component);

  function Error(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Error);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Error).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Error, [{
    key: "render",
    value: function render() {
      var staticContext = this.props.staticContext;
      staticContext = staticContext ? staticContext : {};
      staticContext.notFound = true;
      return _react["default"].createElement("div", {
        className: "error"
      }, _react["default"].createElement(_Header["default"], this.props), _react["default"].createElement("section", {
        className: "error_section"
      }, _react["default"].createElement("div", {
        className: "container error_container"
      }, _react["default"].createElement("img", {
        src: _lines["default"],
        className: "error_section_lines",
        alt: ""
      }), _react["default"].createElement("span", {
        className: "error_text_404"
      }, "404"), _react["default"].createElement("p", {
        className: "error_description"
      }, this.props.lang.isRu ? "К сожалению, была введена неверная страница. Попробуйте еще раз." : "На жаль, була введена невірна сторінка. Спробуйте ще раз."), _react["default"].createElement(_reactRouterDom.Link, {
        to: this.props.location.pathname.includes("/ua") ? "/ua/" : "/"
      }, _react["default"].createElement("div", {
        className: "error_return_button"
      }, _react["default"].createElement("span", null, this.props.lang.isRu ? "На главную" : "На головну"))))));
    }
  }]);
  return Error;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    lang: state.lang
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Error);

exports["default"] = _default;

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
if (false) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1572077603672
		require("../../../node_modules/extract-css-chunks-webpack-plugin/hotModuleReplacement.js")("/", "/static/css/5.css");
	}
}

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "/static/media/404_lines.svg";

/***/ })

});
//# sourceMappingURL=5.js.map