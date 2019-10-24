webpackJsonp([6],{

/***/ 320:
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(33));

var _inherits2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(50);

var _reactRedux = __webpack_require__(26);

var _redux = __webpack_require__(51);

var _authActions = __webpack_require__(897);

__webpack_require__(885);

var _logo = _interopRequireDefault(__webpack_require__(172));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var login = _authActions.authActions.login;

var Login =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Login, _Component);

  function Login(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Login);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Login).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function () {
      var _this$state$userData = _this.state.userData,
          username = _this$state$userData.login_username,
          password = _this$state$userData.login_password;

      _this.props.login({
        username: username,
        password: password
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showPassword", function (e) {
      e.preventDefault();

      _this.setState({
        password: !_this.state.password
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        userData: _objectSpread({}, _this.state.userData, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      }));
    });
    _this.state = {
      userData: {
        login_username: "",
        login_password: ""
      },
      showPassword: false,
      error: "",
      redirectToRef: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Login, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.auth.errorMessage) {
        this.setState(_objectSpread({}, this.state, {
          error: nextProps.auth.errorMessage.message
        }));
      } else if (nextProps.auth.isAuthenticated) {
        this.setState({
          redirectToRef: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.redirectToRef) {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/admin"
        });
      }

      return _react["default"].createElement("div", {
        className: "admin_login"
      }, _react["default"].createElement("form", null, this.state.error && _react["default"].createElement("h1", null, this.state.error), _react["default"].createElement("div", {
        className: "admin_login_logo_box"
      }, _react["default"].createElement("img", {
        src: _logo["default"]
      })), _react["default"].createElement("input", {
        type: "text",
        id: "login_username",
        value: this.state.userData.login_username,
        onChange: this.onChange
      }), _react["default"].createElement("input", {
        type: !this.state.password ? "password" : "text",
        id: "login_password",
        value: this.state.userData.login_password,
        onChange: this.onChange
      }), _react["default"].createElement("button", {
        className: "admin_login_action_button admin_login_show_pass",
        onClick: this.showPassword
      }, "Show Password")), _react["default"].createElement("button", {
        className: "admin_login_action_button admin_login_button",
        onClick: this.onSubmit
      }, "Login"));
    }
  }]);
  return Login;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    login: login
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

exports["default"] = _default;

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authActions = void 0;

var _types = __webpack_require__(27);

var _auth = __webpack_require__(882);

var authActions = {
  login: login
};
exports.authActions = authActions;

function login(userData) {
  return function (dispatch) {
    dispatch(request());

    _auth.authServices.login(userData).then(function (data) {
      dispatch(success(data.user));
    }, function (error) {
      dispatch(failure(error));
    });

    function request() {
      return {
        type: _types.types.LOGIN_REQUEST
      };
    }

    function success(user) {
      return {
        type: _types.types.LOGIN_SUCCESS,
        user: user
      };
    }

    function failure(error) {
      return {
        type: _types.types.LOGIN_FAILURE,
        error: error
      };
    }
  };
} // function checkToken(userData) {
//   return dispatch => {
//     authServices.login(userData)
//       .catch(error => {
//         dispatch(failure(error))
//       })
//     function failure(error){ return { type: types.LOGIN_FAILURE, error }}
//   }
// }
// function logout(){
//   return dispatch => 
// }

/***/ })

});
//# sourceMappingURL=6.js.map