webpackJsonp([1],{

/***/ 110:
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(33));

var _inherits2 = _interopRequireDefault(__webpack_require__(16));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(0));

var d3 = _interopRequireWildcard(__webpack_require__(36));

__webpack_require__(888);

var _selector_arrow = _interopRequireDefault(__webpack_require__(889));

var _close_button = _interopRequireDefault(__webpack_require__(890));

var _decoration_circles = _interopRequireDefault(__webpack_require__(891));

var _form_decoration_line = _interopRequireDefault(__webpack_require__(892));

var _serviceUtils = __webpack_require__(81);

var _config = __webpack_require__(63);

var _reactGoogleRecaptcha = _interopRequireDefault(__webpack_require__(893));

var _reactRedux = __webpack_require__(26);

var _SEO = _interopRequireDefault(__webpack_require__(35));

var _Header = _interopRequireDefault(__webpack_require__(34));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  captcha: null,
  isSubscribed: false,
  mailData: {
    email: '',
    firstName: '',
    secondName: '',
    companyName: '',
    phone: '',
    position: '',
    city: '',
    mailSubject: '',
    message: '',
    attachment: ''
  },
  agreement: false,
  reasonsBoxVisibility: false,
  citiesBoxVisibility: false,
  isSending: false
};

var recaptchaRef = _react["default"].createRef();

var Form =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Form, _Component);

  function Form(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Form);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Form).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "goBack", function () {
      _this.props.history.goBack();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sendingAnimationStart", function () {
      var that = (0, _assertThisInitialized2["default"])(_this);
      d3.select('.form_sending_box').style('display', 'flex');
      d3.select('.d_erorr_circle').style('display', 'block');
      d3.select('.d_error_text_loading').style('display', 'block');
      d3.select('.form_section').transition().duration(300).ease(d3.easeLinear).style('filter', 'blur(5px)').style('-webkit-filter', 'blur(5px)');
      var totalLength = d3.select('.d_erorr_circle').node().getTotalLength();
      that.setState({
        isSending: true
      }, function () {
        d3.select('.d_erorr_circle').call(that.sendingMail, totalLength, 0, that);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      _this.setState({
        mailData: _objectSpread({}, _this.state.mailData, (0, _defineProperty2["default"])({}, event.target.name, event.target.value))
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCitySelect", function (event) {
      _this.setState({
        mailData: _objectSpread({}, _this.state.mailData, {
          city: event.target.textContent
        })
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleReasonSelect", function (event) {
      _this.setState({
        mailData: _objectSpread({}, _this.state.mailData, {
          mailSubject: event.target.textContent
        })
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCaptcha", function (res) {
      _this.setState({
        captcha: res
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isFormValid", function (captcha, agreement, mailData) {
      var mailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var formErrorMessage = document.getElementById('form_error_msg');

      if (mailData.email === '') {
        if (!_this.props.lang) formErrorMessage.textContent = 'Введіть e-mail.';else formErrorMessage.textContent = 'Введите e-mail.';
        document.getElementById('email_error_point').style = 'display: block';
        return false;
      } else if (!mailRe.test(mailData.email)) {
        if (!_this.props.lang) formErrorMessage.textContent = 'E-mail введено некоректно.';else formErrorMessage.textContent = 'E-mail введен некорректно.';
        document.getElementById('email_error_point').style = 'display: block';
        return false;
      } else if (mailData.firstName === '') {
        if (!_this.props.lang) formErrorMessage.textContent = 'Введіть ім\'я.';else formErrorMessage.textContent = 'Введите имя.';
        document.getElementById('first_name_error_point').style = 'display: block';
        return false;
      } else if (mailData.secondName === '') {
        if (!_this.props.lang) formErrorMessage.textContent = 'Введіть прізвище.';else formErrorMessage.textContent = 'Введите фамилию.';
        document.getElementById('second_name_error_point').style = 'display: block';
        return false;
      } else if (mailData.companyName === '') {
        if (!_this.props.lang) formErrorMessage.textContent = 'Введіть назву компанії.';else formErrorMessage.textContent = 'Введите название компании.';
        document.getElementById('company_name_error_point').style = 'display: block';
        return false;
      } else if (!captcha) {
        if (!_this.props.lang) formErrorMessage.textContent = 'Підтвердіть, що Ви не робот.';else formErrorMessage.textContent = 'Подтвердите, что Вы не робот.';
        return false;
      } else if (!agreement) {
        if (!_this.props.lang) formErrorMessage.textContent = 'Необхідне погодження.';else formErrorMessage.textContent = 'Необходимо соглашение.';
        return false;
      }

      return true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uncheckButtons", function () {
      if (_this.state.agreement) _this.checkAgreement();
      if (_this.state.isSubscribed) _this.checkDistribution();
      d3.select('.form_select_reason_box').node().innerHTML = '';
      d3.select('.form_select_city_box').node().innerHTML = '';
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetForm", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = document.getElementsByClassName('form_error_point')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pointNode = _step.value;
          pointNode.style = 'display: none';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.uncheckButtons();

      _this.setState(initialState);

      recaptchaRef.current.reset();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = document.getElementsByClassName('form_error_point')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var pointNode = _step2.value;
          pointNode.style = 'display: none';
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (!_this.isFormValid(_this.state.captcha, _this.state.agreement, _this.state.mailData)) {
        _this.showSubmitError();

        return;
      }

      if (_this.state.agreement && _this.state.captcha) {
        var requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            captcha: _this.state.captcha,
            isSubscribed: _this.state.isSubscribed,
            mailData: _this.state.mailData
          })
        };
        var sendStatusEl = document.getElementById('send_status');

        _this.sendingAnimationStart();

        return fetch("".concat(_config.apiUrl, "/send-form"), requestOptions).then(function (res) {
          return res.json();
        }).then(function (status) {
          console.log(status);
          sendStatusEl.textContent = !_this.props.lang ? 'Ваше повідомлення відправлено!' : 'Ваше сообщение отправлено!';

          _this.resetForm();
        })["catch"](function (err) {
          console.log(err);
          sendStatusEl.textContent = !_this.props.lang ? 'Сталася помилка при відправці.' : 'Произошла ошибка при отправлении';

          _this.setState({
            isSending: false
          });

          (0, _serviceUtils.handleError)(err);
        });
      }
    });
    _this.state = {
      captcha: null,
      isSubscribed: false,
      mailData: {
        email: '',
        firstName: '',
        secondName: '',
        companyName: '',
        phone: '',
        position: '',
        city: '',
        mailSubject: '',
        message: ''
      },
      agreement: false,
      reasonsBoxVisibility: false,
      citiesBoxVisibility: false,
      isSending: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.preSets();
    }
  }, {
    key: "preSets",
    value: function preSets() {
      var that = this;
      that.setCaptchaSize();
      window.addEventListener('resize', function () {
        that.setCaptchaSize();
      });
      d3.select('.d_error_text_success').style('opacity', '0');
      d3.selectAll('.form_check_flag').style('opacity', '0').style('transform', 'scale(1.5)');
      d3.select('.form_submit_error').style('display', 'none').style('opacity', '0');
      d3.select('.form_check_box_agreement').on('click', that.checkAgreement.bind(this)).on('mouseover', that.mouseOverAgreement.bind(this)).on('mouseleave', that.mouseLeaveAgreement.bind(this));
      d3.select('.form_check_box_distribution').on('click', that.checkDistribution.bind(this)).on('mouseover', that.mouseOverDistribution.bind(this)).on('mouseleave', that.mouseLeaveDistribution.bind(this));
      d3.selectAll('.selector_box ul').style('max-height', '0px');
      d3.select('.form_reason_selector').on('click', that.checkReasonsBox.bind(this));
      d3.select('.form_city_selector').on('click', that.checkCitiesBox.bind(this));
      d3.selectAll('.form_reasons_box li').on('click', function () {
        d3.select(this).call(that.setReasonValue, 'reason');
        that.checkReasonsBox();
      });
      d3.selectAll('.form_cities_box li').on('click', function () {
        d3.select(this).call(that.setReasonValue, 'city');
        that.checkCitiesBox();
      });
    }
  }, {
    key: "setCaptchaSize",
    value: function setCaptchaSize() {
      var window_width = window.innerWidth;
      d3.select('.rc-anchor-normal').style('width', "".concat(window_width > 1200 ? '100%' : '77%'));
    }
  }, {
    key: "sendingMail",
    value: function sendingMail(e, start, end, that) {
      if (that.state.isSending) {
        e.transition().duration(1000).ease(d3.easeLinear).attr("stroke-dasharray", "".concat(start, " ").concat(start)).attr("stroke-dashoffset", start).transition().duration(2000).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on('end', function () {
          d3.select(this).call(that.sendingMail, start, end, that);
        });
      } else {
        d3.select('.d_erorr_circle').style('display', 'none');
        d3.select('.d_error_text_loading').style('display', 'none');
        d3.select('.d_error_text_success').transition().duration(300).ease(d3.easeLinear).style('opacity', '1').on('end', function () {
          d3.timeout(function () {
            d3.select('.d_error_text_success').transition().duration(500).ease(d3.easeLinear).style('opacity', '0').on('end', function () {
              d3.select('.form_sending_box').style('display', 'none');
              d3.select('.form_section').transition().duration(300).ease(d3.easeLinear).style('filter', 'unset').style('-webkit-filter', 'unset');
            });
          }, 2000);
        });
      }
    }
  }, {
    key: "showSubmitError",
    value: function showSubmitError() {
      /* SUBMIT ERROR  */
      d3.select('.form_submit_error').style('display', 'flex').transition().duration(300).ease(d3.easeLinear).style('opacity', '1');
      d3.timeout(function () {
        d3.select('.form_submit_error').transition().duration(300).ease(d3.easeLinear).style('opacity', '0').on('end', function () {
          d3.select(this).style('display', 'none');
        });
      }, 2000);
    }
  }, {
    key: "setReasonValue",
    value: function setReasonValue(e, type) {
      var selectedValue = e.node().innerHTML;
      d3.select("".concat('reason' === type ? '.form_select_reason_box' : '.form_select_city_box')).node().innerHTML = selectedValue;
    }
  }, {
    key: "checkReasonsBox",
    value: function checkReasonsBox() {
      var that = this;
      d3.select('.form_reasons_box').transition().duration(300).ease(d3.easeLinear).style('max-height', "".concat(that.state.reasonsBoxVisibility ? 0 : 150, "px"));
      this.setState({
        reasonsBoxVisibility: !this.state.reasonsBoxVisibility
      });
    }
  }, {
    key: "checkCitiesBox",
    value: function checkCitiesBox() {
      var that = this;
      d3.select('.form_cities_box').transition().duration(300).ease(d3.easeLinear).style('max-height', "".concat(that.state.citiesBoxVisibility ? 0 : 150, "px"));
      this.setState({
        citiesBoxVisibility: !this.state.citiesBoxVisibility
      });
    }
  }, {
    key: "mouseOverAgreement",
    value: function mouseOverAgreement() {
      var that = this;
      d3.select('.form_check_box_agreement .form_check_flag').style('opacity', "".concat(that.state.agreement ? 1 : 0.5));
    }
  }, {
    key: "mouseLeaveAgreement",
    value: function mouseLeaveAgreement() {
      var that = this;
      d3.select('.form_check_box_agreement .form_check_flag').style('opacity', "".concat(that.state.agreement ? 1 : 0));
    }
  }, {
    key: "checkAgreement",
    value: function checkAgreement() {
      var that = this;
      d3.select('.form_check_box_agreement .form_check_flag').transition().duration(100).ease(d3.easeLinear).style('opacity', "".concat(that.state.agreement ? 0 : 1)).style('transform', "".concat(that.state.agreement ? 'scale(1.5)' : 'scale(1)'));
      this.setState({
        agreement: !this.state.agreement
      });
    }
  }, {
    key: "mouseOverDistribution",
    value: function mouseOverDistribution() {
      var that = this;
      d3.select('.form_check_box_distribution .form_check_flag').style('opacity', "".concat(that.state.isSubscribed ? 1 : 0.5));
    }
  }, {
    key: "mouseLeaveDistribution",
    value: function mouseLeaveDistribution() {
      var that = this;
      d3.select('.form_check_box_distribution .form_check_flag').style('opacity', "".concat(that.state.isSubscribed ? 1 : 0));
    }
  }, {
    key: "checkDistribution",
    value: function checkDistribution() {
      var that = this;
      d3.select('.form_check_box_distribution .form_check_flag').transition().duration(100).ease(d3.easeLinear).style('opacity', "".concat(that.state.isSubscribed ? 0 : 1)).style('transform', "".concat(that.state.isSubscribed ? 'scale(1.5)' : 'scale(1)'));
      this.setState({
        isSubscribed: !this.state.isSubscribed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var lang = !this.props.location.pathname.includes("/ua");
      return _react["default"].createElement("div", {
        className: "form"
      }, _react["default"].createElement(_SEO["default"], {
        title: "Форма | SunTown",
        description: "заполните форму и мы свяжемся с вами",
        url: "https://suntown-ukraine.com/form"
      }), _react["default"].createElement(_Header["default"], this.props), _react["default"].createElement("div", {
        className: "form_sending_box"
      }, _react["default"].createElement("svg", {
        className: "d_error_circle_box",
        viewBox: "0 0 250 250"
      }, _react["default"].createElement("path", {
        d: "M240.5,108.5",
        transform: "translate(-115 -78)"
      }), _react["default"].createElement("path", {
        className: "d_erorr_circle",
        stroke: "#86B82A",
        fill: "transparent",
        strokeWidth: "30",
        transform: "translate(-115 -78)",
        d: "M334.5,203.5a94.46,94.46,0,1,1,0-1"
      }), _react["default"].createElement("text", {
        className: "d_error_text_loading",
        x: "24%",
        y: "52.5%"
      }, "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430..."), _react["default"].createElement("text", {
        id: "send_status",
        className: "d_error_text_success",
        x: "-75%",
        y: "52.5%"
      }, "\u0412\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!"))), _react["default"].createElement("section", {
        className: "form_section"
      }, _react["default"].createElement("div", {
        className: "container form_container"
      }, _react["default"].createElement("div", {
        className: "form_box"
      }, _react["default"].createElement("h2", null, lang ? 'Свяжитесь с нами' : 'Зв\'яжіться з Нами'), _react["default"].createElement("div", {
        className: "form_top_right_decoration_box"
      }, _react["default"].createElement("span", null), _react["default"].createElement("img", {
        className: "form_close_button",
        src: _close_button["default"],
        onClick: this.goBack,
        alt: ""
      })), _react["default"].createElement("img", {
        src: _decoration_circles["default"],
        className: "form_bottom_left_decoration_circles",
        alt: ""
      }), _react["default"].createElement("img", {
        src: _form_decoration_line["default"],
        className: "form_decoration_line",
        alt: ""
      }), lang ? _react["default"].createElement("p", {
        className: "form_description"
      }, "\u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0434\u044B \u0412\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C") : _react["default"].createElement("p", {
        className: "form_description"
      }, "\u042F\u043A\u0449\u043E \u0443 \u0412\u0430\u0441 \u0454 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0447\u0438 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457, \u043C\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u0440\u0430\u0434\u0456 \u0412\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438"), _react["default"].createElement("div", {
        className: "form_inputs_container"
      }, _react["default"].createElement("div", {
        className: "form_inputs_column form_column_3"
      }, _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "mail"
      }, lang ? 'Электронный адрес*' : 'Електронна адреса*'), _react["default"].createElement("input", {
        type: "email",
        id: "mail",
        name: "email",
        value: this.state.mailData.email,
        onChange: this.handleChange
      }), _react["default"].createElement("span", {
        className: "form_error_point",
        id: "email_error_point",
        style: {
          display: 'none'
        }
      })), _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "firstname"
      }, lang ? 'Имя*' : 'Ім\'я*'), _react["default"].createElement("input", {
        type: "text",
        id: "firstname",
        name: "firstName",
        value: this.state.mailData.firstName,
        onChange: this.handleChange
      }), _react["default"].createElement("span", {
        className: "form_error_point",
        id: "first_name_error_point",
        style: {
          display: 'none'
        }
      })), _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlor: "lastname"
      }, lang ? 'Фамилия*' : 'Прізвище*'), _react["default"].createElement("input", {
        type: "text",
        id: "lastname",
        name: "secondName",
        value: this.state.mailData.secondName,
        onChange: this.handleChange
      }), _react["default"].createElement("span", {
        className: "form_error_point",
        id: "second_name_error_point",
        style: {
          display: 'none'
        }
      })), _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "company_name"
      }, lang ? 'Название Вашей компании*' : 'Назва вашої компанії*'), _react["default"].createElement("input", {
        type: "text",
        id: "company_name",
        name: "companyName",
        value: this.state.mailData.companyName,
        onChange: this.handleChange
      }), _react["default"].createElement("span", {
        className: "form_error_point",
        id: "company_name_error_point",
        style: {
          display: 'none'
        }
      })), _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "telephone"
      }, lang ? 'Контактный номер' : 'Контактний номер'), _react["default"].createElement("input", {
        type: "tel",
        id: "telephone",
        name: "phone",
        value: this.state.mailData.phone,
        onChange: this.handleChange
      }))), _react["default"].createElement("div", {
        className: "form_inputs_column form_column_3"
      }, _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "position"
      }, lang ? 'Должность' : 'Посада'), _react["default"].createElement("input", {
        id: "position",
        name: "position",
        value: this.state.mailData.position,
        onChange: this.handleChange
      })), _react["default"].createElement("div", {
        className: "form_input_box selector_box"
      }, _react["default"].createElement("label", null, lang ? 'Выберите Ваш город' : 'Оберіть ваше місто'), _react["default"].createElement("div", {
        className: "form_city_selector form_selector_line"
      }, _react["default"].createElement("span", {
        className: "form_select_city_box"
      }), _react["default"].createElement("img", {
        src: _selector_arrow["default"],
        alt: ""
      })), _react["default"].createElement("ul", {
        className: "form_cities_box form_selection_box"
      }, _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0412\u0438\u043D\u043D\u0438\u0446\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0412\u0438\u043D\u043D\u0438\u0446\u0430"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0412\u043E\u043B\u044B\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041B\u0443\u0446\u043A"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0414\u043D\u0435\u043F\u0440\u043E\u043F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0414\u043D\u0435\u043F\u0440 (\u0431\u044B\u0432\u0448. \u0414\u043D\u0435\u043F\u0440\u043E\u043F\u0435\u0442\u0440\u043E\u0432\u0441\u043A)"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0414\u043E\u043D\u0435\u0446\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0414\u043E\u043D\u0435\u0446\u043A"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0416\u0438\u0442\u043E\u043C\u0438\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0416\u0438\u0442\u043E\u043C\u0438\u0440"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0417\u0430\u043A\u0430\u0440\u043F\u0430\u0442\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0423\u0436\u0433\u043E\u0440\u043E\u0434"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0417\u0430\u043F\u043E\u0440\u043E\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0417\u0430\u043F\u043E\u0440\u043E\u0436\u044C\u0435"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0418\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0418\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u043E\u0432\u0441\u043A"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041A\u0438\u0435\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041A\u0438\u0435\u0432"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041A\u0438\u0440\u043E\u0432\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u043A\u0438\u0439 (\u0431\u044B\u0432\u0448. \u041A\u0438\u0440\u043E\u0432\u043E\u0433\u0440\u0430\u0434)"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041B\u0443\u0433\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041B\u0443\u0433\u0430\u043D\u0441\u043A"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041B\u044C\u0432\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041B\u044C\u0432\u043E\u0432"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041E\u0434\u0435\u0441\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041E\u0434\u0435\u0441\u0441\u0430"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u041F\u043E\u043B\u0442\u0430\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041F\u043E\u043B\u0442\u0430\u0432\u0430"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0420\u043E\u0432\u043D\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0420\u043E\u0432\u043D\u043E"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0421\u0443\u043C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0421\u0443\u043C\u044B"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0422\u0435\u0440\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0422\u0435\u0440\u043D\u043E\u043F\u043E\u043B\u044C"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0425\u0430\u0440\u044C\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0425\u0430\u0440\u044C\u043A\u043E\u0432"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0425\u0435\u0440\u0441\u043E\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0425\u0435\u0440\u0441\u043E\u043D"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u043A\u0438\u0439"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0427\u0435\u0440\u043A\u0430\u0441\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0427\u0435\u0440\u043A\u0430\u0441\u0441\u044B"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0427\u0435\u0440\u043D\u0438\u0433\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0427\u0435\u0440\u043D\u0438\u0433\u043E\u0432"), _react["default"].createElement("li", {
        onClick: this.handleCitySelect
      }, "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u0446\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0427\u0435\u0440\u043D\u043E\u0432\u0446\u044B"))), _react["default"].createElement("div", {
        className: "captcha_box"
      }, "  ", _react["default"].createElement("br", null), _react["default"].createElement(_reactGoogleRecaptcha["default"], {
        ref: recaptchaRef,
        sitekey: _config.captchaSiteKey,
        onChange: this.handleCaptcha
      }))), _react["default"].createElement("div", {
        className: "form_inputs_column form_column_4"
      }, _react["default"].createElement("div", {
        className: "form_input_box selector_box"
      }, _react["default"].createElement("label", null, lang ? 'По какому поводу обращаетесь' : 'З приводу чого звертаєтесь'), _react["default"].createElement("div", {
        className: "form_reason_selector form_selector_line"
      }, _react["default"].createElement("span", {
        className: "form_select_reason_box"
      }), _react["default"].createElement("img", {
        src: _selector_arrow["default"],
        alt: ""
      })), _react["default"].createElement("ul", {
        className: "form_reasons_box form_selection_box"
      }, _react["default"].createElement("li", {
        onClick: this.handleReasonSelect
      }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 sales-\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u043C"), _react["default"].createElement("li", {
        onClick: this.handleReasonSelect
      }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B (\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E)"), _react["default"].createElement("li", {
        onClick: this.handleReasonSelect
      }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 (\u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0442\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443)"), _react["default"].createElement("li", {
        onClick: this.handleReasonSelect
      }, "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C (\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u0442\u0432\u043E)"), _react["default"].createElement("li", {
        onClick: this.handleReasonSelect
      }, "\u0414\u0440\u0443\u0433\u043E\u0435"))), _react["default"].createElement("div", {
        className: "form_input_box"
      }, _react["default"].createElement("label", {
        htmlFor: "message"
      }, lang ? 'Введите Ваше сообщение' : 'Введіть ваше повідомлення...'), _react["default"].createElement("textarea", {
        id: "message",
        name: "message",
        value: this.state.mailData.message,
        onChange: this.handleChange
      })), _react["default"].createElement("div", {
        className: "form_agreement_box"
      }, _react["default"].createElement("div", {
        className: "form_check_box form_check_box_agreement"
      }, _react["default"].createElement("div", {
        className: "form_check_flag"
      })), _react["default"].createElement("label", null, lang ? 'Вы согласны с использованием Ваших персональных данных в соответствии с условиями документа?' : 'Ви погоджуєтесь з використанням ваших персональних данних згідно з умовами', " ", _react["default"].createElement("a", {
        href: "#"
      }, "\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0443"), " ?")), _react["default"].createElement("div", {
        className: "form_agreement_box"
      }, _react["default"].createElement("div", {
        className: "form_check_box form_check_box_distribution"
      }, _react["default"].createElement("div", {
        className: "form_check_flag"
      })), _react["default"].createElement("label", null, lang ? 'Хочу быть в курсе последних событий' : 'Хочу бути в курсі останніх новин.'))))), _react["default"].createElement("div", {
        className: "form_submit_button",
        onClick: this.handleSubmit
      }, _react["default"].createElement("div", {
        className: "form_submit_error"
      }, _react["default"].createElement("p", {
        id: "form_error_msg"
      }, lang ? 'Вы ввели некорректные данные' : 'Ви ввели некоректні данні')), _react["default"].createElement("span", null, lang ? 'Отправить' : 'Відправити')))));
    }
  }]);
  return Form;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    lang: state.lang
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Form);

exports["default"] = _default;

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReCAPTCHA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var ReCAPTCHA =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReCAPTCHA, _React$Component);

  function ReCAPTCHA() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReCAPTCHA.prototype;

  _proto.getValue = function getValue() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this._widgetId);
    }

    return null;
  };

  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }

    return null;
  };

  _proto.execute = function execute() {
    var grecaptcha = this.props.grecaptcha;

    if (grecaptcha && this._widgetId !== undefined) {
      return grecaptcha.execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };

  _proto.reset = function reset() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      this.props.grecaptcha.reset(this._widgetId);
    }
  };

  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };

  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) this.props.onErrored();
  };

  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) this.props.onChange(token);
  };

  _proto.explicitRender = function explicitRender() {
    if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = this.props.grecaptcha.render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge
      });
      this.captcha.appendChild(wrapper);
    }

    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this._widgetId !== undefined) {
      this.delayOfCaptchaIframeRemoving();
      this.reset();
    }
  };

  _proto.delayOfCaptchaIframeRemoving = function delayOfCaptchaIframeRemoving() {
    var temporaryNode = document.createElement("div");
    document.body.appendChild(temporaryNode);
    temporaryNode.style.display = "none"; // move of the recaptcha to a temporary node

    while (this.captcha.firstChild) {
      temporaryNode.appendChild(this.captcha.firstChild);
    } // delete the temporary node after reset will be done


    setTimeout(function () {
      document.body.removeChild(temporaryNode);
    }, 5000);
  };

  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };

  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.

    /* eslint-disable no-unused-vars */
    var _this$props = this.props,
        sitekey = _this$props.sitekey,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        type = _this$props.type,
        tabindex = _this$props.tabindex,
        onExpired = _this$props.onExpired,
        onErrored = _this$props.onErrored,
        size = _this$props.size,
        stoken = _this$props.stoken,
        grecaptcha = _this$props.grecaptcha,
        badge = _this$props.badge,
        hl = _this$props.hl,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]);
    /* eslint-enable no-unused-vars */


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };

  return ReCAPTCHA;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  grecaptcha: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["dark", "light"]),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["image", "audio"]),
  tabindex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onExpired: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onErrored: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["compact", "normal", "invisible"]),
  stoken: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  hl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  badge: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["bottomright", "bottomleft", "inline"])
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
if (false) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1572077603660
		require("../../../node_modules/extract-css-chunks-webpack-plugin/hotModuleReplacement.js")("/", "/static/css/1.css");
	}
}

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC44NTciIGhlaWdodD0iMTUuMzk1IiB2aWV3Qm94PSIwIDAgMTAuODU3IDE1LjM5NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NDAuOTk1IC00NDkuMTA2KSI+PHBhdGggZD0iTTE4NzYuNS03NDdsNC42NjctMy40LDUuMTkxLDMuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNSAxMjAwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xODc2LjUtNzQ3bDQuNjY3LTMuNCw1LjE5MSwzLjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MjcuODQ4IC0yODYuMzkyKSByb3RhdGUoMTgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "/static/media/close_button.svg";

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzguNzUyIiBoZWlnaHQ9IjEyMy41NDciIHZpZXdCb3g9IjAgMCAxMzguNzUyIDEyMy41NDciPgogIDxnIGlkPSJHcm91cF80MjM3IiBkYXRhLW5hbWU9Ikdyb3VwIDQyMzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MC4zNzcgLTkwMy4yMjcpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNzUiIGRhdGEtbmFtZT0iRWxsaXBzZSA3NSIgY3g9IjQ2IiBjeT0iNDYiIHI9IjQ2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45NjYsIDAuMjU5LCAtMC4yNTksIC0wLjk2NiwgMTgzLjA1NCwgMTAwMi45NjIpIiBmaWxsPSIjODZiODJhIi8+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzc0IiBkYXRhLW5hbWU9IkVsbGlwc2UgNzQiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuOTY2LCAwLjI1OSwgLTAuMjU5LCAtMC45NjYsIDIwOS4xMjksIDkzOCkiIGZpbGw9IiM4NmI4MmEiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNzYiIGRhdGEtbmFtZT0iRWxsaXBzZSA3NiIgY3g9IjkiIGN5PSI5IiByPSI5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45NjYsIDAuMjU5LCAtMC4yNTksIC0wLjk2NiwgMTYwLjEwNiwgOTIwLjYzNikiIGZpbGw9IiM4NmI4MmEiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDcxLjQ0IiBoZWlnaHQ9Ijg1OS44OTIiIHZpZXdCb3g9IjAgMCAxNDcxLjQ0IDg1OS44OTIiPjxwYXRoIGQ9Ik0xMTI1LjY5MS0xMTM1LjkyNXYxMDAuNDQ3aDU5NC44NzZWLTk3MS4zaDkzLjY1OHY5NS40NjRoNzc2LjkwNnY1OTYuODA2SDE4NTQuNDEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyMi42OTEgMTEzNS45MjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM4NWI3MjgiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA2Ii8+PC9zdmc+"

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recaptcha_wrapper__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recaptcha__ = __webpack_require__(882);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReCAPTCHA", function() { return __WEBPACK_IMPORTED_MODULE_1__recaptcha__["a"]; });


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__recaptcha_wrapper__["a" /* default */]);


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recaptcha__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_async_script__ = __webpack_require__(895);


var callbackName = "onloadcallback";
var globalName = "grecaptcha";

function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}

function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_async_script__["a" /* default */])(getURL, {
  callbackName: callbackName,
  globalName: globalName
})(__WEBPACK_IMPORTED_MODULE_0__recaptcha__["a" /* default */]));

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeAsyncScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;
function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      var _proto = AsyncScriptLoader.prototype;

      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }

        return this.__scriptLoaderID;
      };

      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];

        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }

        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }

        delete window[options.callbackName];
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already


        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue


          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };

          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */


        var observers = {};

        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };

        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;

        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }

              observer(mapEntry);
              return true;
            });
          }
        };

        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;

        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");

          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry


        var mapEntry = SCRIPT_MAP[scriptURL];

        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];

          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props,
            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,
            forwardedRef = _this$props.forwardedRef,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }

        childProps.ref = forwardedRef;
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = Object(__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"])(function (props, ref) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
    };
    return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(ForwardedComponent, WrappedComponent);
  };
}

/***/ })

});
//# sourceMappingURL=1.js.map