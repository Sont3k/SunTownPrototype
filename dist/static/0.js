webpackJsonp([0],{

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authServices = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(64));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(65));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(897));

var _config = __webpack_require__(63);

var _serviceUtils = __webpack_require__(81);

var _localStorage = _interopRequireDefault(__webpack_require__(172));

var _nodeFetch = _interopRequireDefault(__webpack_require__(82));

var authServices = {
  login: login,
  checkToken: checkToken
};
exports.authServices = authServices;

function login(userData) {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  };
  return (0, _nodeFetch["default"])("".concat(_config.apiUrl, "/login"), requestOptions).then(_serviceUtils.handleResponse).then(function (user) {
    var token = user.token,
        userData = (0, _objectWithoutProperties2["default"])(user, ["token"]);

    _localStorage["default"].set("token", token);

    return userData;
  });
}

function checkToken() {
  return _checkToken.apply(this, arguments);
}

function _checkToken() {
  _checkToken = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var headers, requestOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceUtils.authHeader)();

          case 2:
            headers = _context.sent;
            requestOptions = {
              method: "GET",
              headers: headers
            };
            return _context.abrupt("return", (0, _nodeFetch["default"])("".concat(_config.apiUrl, "/checkToken"), requestOptions).then(function (res) {
              if (!res.ok) {
                console.log(res.ok);
                return Promise.reject(new Error());
              } else {
                return;
              }
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkToken.apply(this, arguments);
}

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
if (false) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1572077603695
		require("../../../node_modules/extract-css-chunks-webpack-plugin/hotModuleReplacement.js")("/", "/static/css/0.css");
	}
}

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
if (false) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1572077603682
		require("../../../node_modules/extract-css-chunks-webpack-plugin/hotModuleReplacement.js")("/", "/static/css/0.css");
	}
}

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(898);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ })

});
//# sourceMappingURL=0.js.map