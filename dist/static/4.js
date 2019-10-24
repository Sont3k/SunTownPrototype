webpackJsonp([4],{

/***/ 321:
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

var _Admin = _interopRequireDefault(__webpack_require__(900));

var _AdminGallery = _interopRequireDefault(__webpack_require__(903));

var _AdminHeader = _interopRequireDefault(__webpack_require__(906));

var _AdminMail = _interopRequireDefault(__webpack_require__(907));

var _AdminPartners = _interopRequireDefault(__webpack_require__(908));

var _SeoPanel = _interopRequireDefault(__webpack_require__(909));

var _EquinoxRights = _interopRequireDefault(__webpack_require__(910));

var AdminContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AdminContainer, _Component);

  function AdminContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdminContainer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminContainer).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changePage", function (page) {
      _this.setState({
        page: page
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changePannel", function () {
      switch (_this.state.page) {
        case "admin":
          return _react["default"].createElement(_Admin["default"], null);

        case "admin-gallery":
          return _react["default"].createElement(_AdminGallery["default"], null);

        case "admin-partners":
          return _react["default"].createElement(_AdminPartners["default"], null);

        case "admin-seo":
          return _react["default"].createElement(_SeoPanel["default"], null);

        case "admin-mail":
          return _react["default"].createElement(_AdminMail["default"], null);

        default:
          return;
      }
    });
    _this.state = {
      page: "admin"
    };
    return _this;
  }

  (0, _createClass2["default"])(AdminContainer, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_AdminHeader["default"], {
        routing: this.changePage,
        currentPage: this.state.page
      }), this.changePannel(), _react["default"].createElement(_EquinoxRights["default"], null));
    }
  }]);
  return AdminContainer;
}(_react.Component);

exports["default"] = AdminContainer;

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=144)}([function(t,e,n){!function(e,n){t.exports=function(){"use strict";function t(t,e){e&&(t.prototype=Object.create(e.prototype)),t.prototype.constructor=t}function e(t){return o(t)?t:T(t)}function n(t){return u(t)?t:D(t)}function r(t){return a(t)?t:O(t)}function i(t){return o(t)&&!s(t)?t:C(t)}function o(t){return!(!t||!t[cn])}function u(t){return!(!t||!t[ln])}function a(t){return!(!t||!t[fn])}function s(t){return u(t)||a(t)}function c(t){return!(!t||!t[pn])}function l(t){return t.value=!1,t}function f(t){t&&(t.value=!0)}function p(){}function h(t,e){e=e||0;for(var n=Math.max(0,t.length-e),r=new Array(n),i=0;i<n;i++)r[i]=t[i+e];return r}function d(t){return void 0===t.size&&(t.size=t.__iterate(g)),t.size}function y(t,e){if("number"!=typeof e){var n=e>>>0;if(""+n!==e||4294967295===n)return NaN;e=n}return e<0?d(t)+e:e}function g(){return!0}function v(t,e,n){return(0===t||void 0!==n&&t<=-n)&&(void 0===e||void 0!==n&&e>=n)}function _(t,e){return S(t,e,0)}function m(t,e){return S(t,e,e)}function S(t,e,n){return void 0===t?n:t<0?Math.max(0,e+t):void 0===e?t:Math.min(e,t)}function b(t){this.next=t}function w(t,e,n,r){var i=0===t?e:1===t?n:[e,n];return r?r.value=i:r={value:i,done:!1},r}function M(){return{value:void 0,done:!0}}function E(t){return!!I(t)}function x(t){return t&&"function"==typeof t.next}function k(t){var e=I(t);return e&&e.call(t)}function I(t){var e=t&&(wn&&t[wn]||t[Mn]);if("function"==typeof e)return e}function L(t){return t&&"number"==typeof t.length}function T(t){return null===t||void 0===t?R():o(t)?t.toSeq():U(t)}function D(t){return null===t||void 0===t?R().toKeyedSeq():o(t)?u(t)?t.toSeq():t.fromEntrySeq():K(t)}function O(t){return null===t||void 0===t?R():o(t)?u(t)?t.entrySeq():t.toIndexedSeq():P(t)}function C(t){return(null===t||void 0===t?R():o(t)?u(t)?t.entrySeq():t:P(t)).toSetSeq()}function N(t){this._array=t,this.size=t.length}function j(t){var e=Object.keys(t);this._object=t,this._keys=e,this.size=e.length}function A(t){this._iterable=t,this.size=t.length||t.size}function z(t){this._iterator=t,this._iteratorCache=[]}function B(t){return!(!t||!t[xn])}function R(){return kn||(kn=new N([]))}function K(t){var e=Array.isArray(t)?new N(t).fromEntrySeq():x(t)?new z(t).fromEntrySeq():E(t)?new A(t).fromEntrySeq():"object"==typeof t?new j(t):void 0;if(!e)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+t);return e}function P(t){var e=F(t);if(!e)throw new TypeError("Expected Array or iterable object of values: "+t);return e}function U(t){var e=F(t)||"object"==typeof t&&new j(t);if(!e)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+t);return e}function F(t){return L(t)?new N(t):x(t)?new z(t):E(t)?new A(t):void 0}function Y(t,e,n,r){var i=t._cache;if(i){for(var o=i.length-1,u=0;u<=o;u++){var a=i[n?o-u:u];if(!1===e(a[1],r?a[0]:u,t))return u+1}return u}return t.__iterateUncached(e,n)}function q(t,e,n,r){var i=t._cache;if(i){var o=i.length-1,u=0;return new b(function(){var t=i[n?o-u:u];return u++>o?M():w(e,r?t[0]:u-1,t[1])})}return t.__iteratorUncached(e,n)}function H(t,e){return e?W(e,t,"",{"":t}):Q(t)}function W(t,e,n,r){return Array.isArray(e)?t.call(r,n,O(e).map(function(n,r){return W(t,n,r,e)})):G(e)?t.call(r,n,D(e).map(function(n,r){return W(t,n,r,e)})):e}function Q(t){return Array.isArray(t)?O(t).map(Q).toList():G(t)?D(t).map(Q).toMap():t}function G(t){return t&&(t.constructor===Object||void 0===t.constructor)}function V(t,e){if(t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1;if("function"==typeof t.valueOf&&"function"==typeof e.valueOf){if(t=t.valueOf(),e=e.valueOf(),t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1}return!("function"!=typeof t.equals||"function"!=typeof e.equals||!t.equals(e))}function J(t,e){if(t===e)return!0;if(!o(e)||void 0!==t.size&&void 0!==e.size&&t.size!==e.size||void 0!==t.__hash&&void 0!==e.__hash&&t.__hash!==e.__hash||u(t)!==u(e)||a(t)!==a(e)||c(t)!==c(e))return!1;if(0===t.size&&0===e.size)return!0;var n=!s(t);if(c(t)){var r=t.entries();return e.every(function(t,e){var i=r.next().value;return i&&V(i[1],t)&&(n||V(i[0],e))})&&r.next().done}var i=!1;if(void 0===t.size)if(void 0===e.size)"function"==typeof t.cacheResult&&t.cacheResult();else{i=!0;var l=t;t=e,e=l}var f=!0,p=e.__iterate(function(e,r){if(n?!t.has(e):i?!V(e,t.get(r,gn)):!V(t.get(r,gn),e))return f=!1,!1});return f&&t.size===p}function Z(t,e){if(!(this instanceof Z))return new Z(t,e);if(this._value=t,this.size=void 0===e?1/0:Math.max(0,e),0===this.size){if(In)return In;In=this}}function X(t,e){if(!t)throw new Error(e)}function $(t,e,n){if(!(this instanceof $))return new $(t,e,n);if(X(0!==n,"Cannot step a Range by 0"),t=t||0,void 0===e&&(e=1/0),n=void 0===n?1:Math.abs(n),e<t&&(n=-n),this._start=t,this._end=e,this._step=n,this.size=Math.max(0,Math.ceil((e-t)/n-1)+1),0===this.size){if(Ln)return Ln;Ln=this}}function tt(){throw TypeError("Abstract")}function et(){}function nt(){}function rt(){}function it(t){return t>>>1&1073741824|3221225471&t}function ot(t){if(!1===t||null===t||void 0===t)return 0;if("function"==typeof t.valueOf&&(!1===(t=t.valueOf())||null===t||void 0===t))return 0;if(!0===t)return 1;var e=typeof t;if("number"===e){var n=0|t;for(n!==t&&(n^=4294967295*t);t>4294967295;)t/=4294967295,n^=t;return it(n)}if("string"===e)return t.length>zn?ut(t):at(t);if("function"==typeof t.hashCode)return t.hashCode();if("object"===e)return st(t);if("function"==typeof t.toString)return at(t.toString());throw new Error("Value type "+e+" cannot be hashed.")}function ut(t){var e=Kn[t];return void 0===e&&(e=at(t),Rn===Bn&&(Rn=0,Kn={}),Rn++,Kn[t]=e),e}function at(t){for(var e=0,n=0;n<t.length;n++)e=31*e+t.charCodeAt(n)|0;return it(e)}function st(t){var e;if(Nn&&void 0!==(e=Tn.get(t)))return e;if(void 0!==(e=t[An]))return e;if(!Cn){if(void 0!==(e=t.propertyIsEnumerable&&t.propertyIsEnumerable[An]))return e;if(void 0!==(e=ct(t)))return e}if(e=++jn,1073741824&jn&&(jn=0),Nn)Tn.set(t,e);else{if(void 0!==On&&!1===On(t))throw new Error("Non-extensible objects are not allowed as keys.");if(Cn)Object.defineProperty(t,An,{enumerable:!1,configurable:!1,writable:!1,value:e});else if(void 0!==t.propertyIsEnumerable&&t.propertyIsEnumerable===t.constructor.prototype.propertyIsEnumerable)t.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},t.propertyIsEnumerable[An]=e;else{if(void 0===t.nodeType)throw new Error("Unable to set a non-enumerable property on object.");t[An]=e}}return e}function ct(t){if(t&&t.nodeType>0)switch(t.nodeType){case 1:return t.uniqueID;case 9:return t.documentElement&&t.documentElement.uniqueID}}function lt(t){X(t!==1/0,"Cannot perform this action with an infinite size.")}function ft(t){return null===t||void 0===t?wt():pt(t)&&!c(t)?t:wt().withMutations(function(e){var r=n(t);lt(r.size),r.forEach(function(t,n){return e.set(n,t)})})}function pt(t){return!(!t||!t[Pn])}function ht(t,e){this.ownerID=t,this.entries=e}function dt(t,e,n){this.ownerID=t,this.bitmap=e,this.nodes=n}function yt(t,e,n){this.ownerID=t,this.count=e,this.nodes=n}function gt(t,e,n){this.ownerID=t,this.keyHash=e,this.entries=n}function vt(t,e,n){this.ownerID=t,this.keyHash=e,this.entry=n}function _t(t,e,n){this._type=e,this._reverse=n,this._stack=t._root&&St(t._root)}function mt(t,e){return w(t,e[0],e[1])}function St(t,e){return{node:t,index:0,__prev:e}}function bt(t,e,n,r){var i=Object.create(Un);return i.size=t,i._root=e,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function wt(){return Fn||(Fn=bt(0))}function Mt(t,e,n){var r,i;if(t._root){var o=l(vn),u=l(_n);if(r=Et(t._root,t.__ownerID,0,void 0,e,n,o,u),!u.value)return t;i=t.size+(o.value?n===gn?-1:1:0)}else{if(n===gn)return t;i=1,r=new ht(t.__ownerID,[[e,n]])}return t.__ownerID?(t.size=i,t._root=r,t.__hash=void 0,t.__altered=!0,t):r?bt(i,r):wt()}function Et(t,e,n,r,i,o,u,a){return t?t.update(e,n,r,i,o,u,a):o===gn?t:(f(a),f(u),new vt(e,r,[i,o]))}function xt(t){return t.constructor===vt||t.constructor===gt}function kt(t,e,n,r,i){if(t.keyHash===r)return new gt(e,r,[t.entry,i]);var o,u=(0===n?t.keyHash:t.keyHash>>>n)&yn,a=(0===n?r:r>>>n)&yn;return new dt(e,1<<u|1<<a,u===a?[kt(t,e,n+hn,r,i)]:(o=new vt(e,r,i),u<a?[t,o]:[o,t]))}function It(t,e,n,r){t||(t=new p);for(var i=new vt(t,ot(n),[n,r]),o=0;o<e.length;o++){var u=e[o];i=i.update(t,0,void 0,u[0],u[1])}return i}function Lt(t,e,n,r){for(var i=0,o=0,u=new Array(n),a=0,s=1,c=e.length;a<c;a++,s<<=1){var l=e[a];void 0!==l&&a!==r&&(i|=s,u[o++]=l)}return new dt(t,i,u)}function Tt(t,e,n,r,i){for(var o=0,u=new Array(dn),a=0;0!==n;a++,n>>>=1)u[a]=1&n?e[o++]:void 0;return u[r]=i,new yt(t,o+1,u)}function Dt(t,e,r){for(var i=[],u=0;u<r.length;u++){var a=r[u],s=n(a);o(a)||(s=s.map(function(t){return H(t)})),i.push(s)}return Nt(t,e,i)}function Ot(t,e,n){return t&&t.mergeDeep&&o(e)?t.mergeDeep(e):V(t,e)?t:e}function Ct(t){return function(e,n,r){if(e&&e.mergeDeepWith&&o(n))return e.mergeDeepWith(t,n);var i=t(e,n,r);return V(e,i)?e:i}}function Nt(t,e,n){return n=n.filter(function(t){return 0!==t.size}),0===n.length?t:0!==t.size||t.__ownerID||1!==n.length?t.withMutations(function(t){for(var r=e?function(n,r){t.update(r,gn,function(t){return t===gn?n:e(t,n,r)})}:function(e,n){t.set(n,e)},i=0;i<n.length;i++)n[i].forEach(r)}):t.constructor(n[0])}function jt(t,e,n,r){var i=t===gn,o=e.next();if(o.done){var u=i?n:t,a=r(u);return a===u?t:a}X(i||t&&t.set,"invalid keyPath");var s=o.value,c=i?gn:t.get(s,gn),l=jt(c,e,n,r);return l===c?t:l===gn?t.remove(s):(i?wt():t).set(s,l)}function At(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,127&(t+=t>>16)}function zt(t,e,n,r){var i=r?t:h(t);return i[e]=n,i}function Bt(t,e,n,r){var i=t.length+1;if(r&&e+1===i)return t[e]=n,t;for(var o=new Array(i),u=0,a=0;a<i;a++)a===e?(o[a]=n,u=-1):o[a]=t[a+u];return o}function Rt(t,e,n){var r=t.length-1;if(n&&e===r)return t.pop(),t;for(var i=new Array(r),o=0,u=0;u<r;u++)u===e&&(o=1),i[u]=t[u+o];return i}function Kt(t){var e=qt();if(null===t||void 0===t)return e;if(Pt(t))return t;var n=r(t),i=n.size;return 0===i?e:(lt(i),i>0&&i<dn?Yt(0,i,hn,null,new Ut(n.toArray())):e.withMutations(function(t){t.setSize(i),n.forEach(function(e,n){return t.set(n,e)})}))}function Pt(t){return!(!t||!t[Wn])}function Ut(t,e){this.array=t,this.ownerID=e}function Ft(t,e){function n(t,e,n){return 0===e?r(t,n):i(t,e,n)}function r(t,n){var r=n===a?s&&s.array:t&&t.array,i=n>o?0:o-n,c=u-n;return c>dn&&(c=dn),function(){if(i===c)return Vn;var t=e?--c:i++;return r&&r[t]}}function i(t,r,i){var a,s=t&&t.array,c=i>o?0:o-i>>r,l=1+(u-i>>r);return l>dn&&(l=dn),function(){for(;;){if(a){var t=a();if(t!==Vn)return t;a=null}if(c===l)return Vn;var o=e?--l:c++;a=n(s&&s[o],r-hn,i+(o<<r))}}}var o=t._origin,u=t._capacity,a=Zt(u),s=t._tail;return n(t._root,t._level,0)}function Yt(t,e,n,r,i,o,u){var a=Object.create(Qn);return a.size=e-t,a._origin=t,a._capacity=e,a._level=n,a._root=r,a._tail=i,a.__ownerID=o,a.__hash=u,a.__altered=!1,a}function qt(){return Gn||(Gn=Yt(0,0,hn))}function Ht(t,e,n){if((e=y(t,e))!==e)return t;if(e>=t.size||e<0)return t.withMutations(function(t){e<0?Vt(t,e).set(0,n):Vt(t,0,e+1).set(e,n)});e+=t._origin;var r=t._tail,i=t._root,o=l(_n);return e>=Zt(t._capacity)?r=Wt(r,t.__ownerID,0,e,n,o):i=Wt(i,t.__ownerID,t._level,e,n,o),o.value?t.__ownerID?(t._root=i,t._tail=r,t.__hash=void 0,t.__altered=!0,t):Yt(t._origin,t._capacity,t._level,i,r):t}function Wt(t,e,n,r,i,o){var u=r>>>n&yn,a=t&&u<t.array.length;if(!a&&void 0===i)return t;var s;if(n>0){var c=t&&t.array[u],l=Wt(c,e,n-hn,r,i,o);return l===c?t:(s=Qt(t,e),s.array[u]=l,s)}return a&&t.array[u]===i?t:(f(o),s=Qt(t,e),void 0===i&&u===s.array.length-1?s.array.pop():s.array[u]=i,s)}function Qt(t,e){return e&&t&&e===t.ownerID?t:new Ut(t?t.array.slice():[],e)}function Gt(t,e){if(e>=Zt(t._capacity))return t._tail;if(e<1<<t._level+hn){for(var n=t._root,r=t._level;n&&r>0;)n=n.array[e>>>r&yn],r-=hn;return n}}function Vt(t,e,n){void 0!==e&&(e|=0),void 0!==n&&(n|=0);var r=t.__ownerID||new p,i=t._origin,o=t._capacity,u=i+e,a=void 0===n?o:n<0?o+n:i+n;if(u===i&&a===o)return t;if(u>=a)return t.clear();for(var s=t._level,c=t._root,l=0;u+l<0;)c=new Ut(c&&c.array.length?[void 0,c]:[],r),s+=hn,l+=1<<s;l&&(u+=l,i+=l,a+=l,o+=l);for(var f=Zt(o),h=Zt(a);h>=1<<s+hn;)c=new Ut(c&&c.array.length?[c]:[],r),s+=hn;var d=t._tail,y=h<f?Gt(t,a-1):h>f?new Ut([],r):d;if(d&&h>f&&u<o&&d.array.length){c=Qt(c,r);for(var g=c,v=s;v>hn;v-=hn){var _=f>>>v&yn;g=g.array[_]=Qt(g.array[_],r)}g.array[f>>>hn&yn]=d}if(a<o&&(y=y&&y.removeAfter(r,0,a)),u>=h)u-=h,a-=h,s=hn,c=null,y=y&&y.removeBefore(r,0,u);else if(u>i||h<f){for(l=0;c;){var m=u>>>s&yn;if(m!==h>>>s&yn)break;m&&(l+=(1<<s)*m),s-=hn,c=c.array[m]}c&&u>i&&(c=c.removeBefore(r,s,u-l)),c&&h<f&&(c=c.removeAfter(r,s,h-l)),l&&(u-=l,a-=l)}return t.__ownerID?(t.size=a-u,t._origin=u,t._capacity=a,t._level=s,t._root=c,t._tail=y,t.__hash=void 0,t.__altered=!0,t):Yt(u,a,s,c,y)}function Jt(t,e,n){for(var i=[],u=0,a=0;a<n.length;a++){var s=n[a],c=r(s);c.size>u&&(u=c.size),o(s)||(c=c.map(function(t){return H(t)})),i.push(c)}return u>t.size&&(t=t.setSize(u)),Nt(t,e,i)}function Zt(t){return t<dn?0:t-1>>>hn<<hn}function Xt(t){return null===t||void 0===t?ee():$t(t)?t:ee().withMutations(function(e){var r=n(t);lt(r.size),r.forEach(function(t,n){return e.set(n,t)})})}function $t(t){return pt(t)&&c(t)}function te(t,e,n,r){var i=Object.create(Xt.prototype);return i.size=t?t.size:0,i._map=t,i._list=e,i.__ownerID=n,i.__hash=r,i}function ee(){return Jn||(Jn=te(wt(),qt()))}function ne(t,e,n){var r,i,o=t._map,u=t._list,a=o.get(e),s=void 0!==a;if(n===gn){if(!s)return t;u.size>=dn&&u.size>=2*o.size?(i=u.filter(function(t,e){return void 0!==t&&a!==e}),r=i.toKeyedSeq().map(function(t){return t[0]}).flip().toMap(),t.__ownerID&&(r.__ownerID=i.__ownerID=t.__ownerID)):(r=o.remove(e),i=a===u.size-1?u.pop():u.set(a,void 0))}else if(s){if(n===u.get(a)[1])return t;r=o,i=u.set(a,[e,n])}else r=o.set(e,u.size),i=u.set(u.size,[e,n]);return t.__ownerID?(t.size=r.size,t._map=r,t._list=i,t.__hash=void 0,t):te(r,i)}function re(t,e){this._iter=t,this._useKeys=e,this.size=t.size}function ie(t){this._iter=t,this.size=t.size}function oe(t){this._iter=t,this.size=t.size}function ue(t){this._iter=t,this.size=t.size}function ae(t){var e=Le(t);return e._iter=t,e.size=t.size,e.flip=function(){return t},e.reverse=function(){var e=t.reverse.apply(this);return e.flip=function(){return t.reverse()},e},e.has=function(e){return t.includes(e)},e.includes=function(e){return t.has(e)},e.cacheResult=Te,e.__iterateUncached=function(e,n){var r=this;return t.__iterate(function(t,n){return!1!==e(n,t,r)},n)},e.__iteratorUncached=function(e,n){if(e===bn){var r=t.__iterator(e,n);return new b(function(){var t=r.next();if(!t.done){var e=t.value[0];t.value[0]=t.value[1],t.value[1]=e}return t})}return t.__iterator(e===Sn?mn:Sn,n)},e}function se(t,e,n){var r=Le(t);return r.size=t.size,r.has=function(e){return t.has(e)},r.get=function(r,i){var o=t.get(r,gn);return o===gn?i:e.call(n,o,r,t)},r.__iterateUncached=function(r,i){var o=this;return t.__iterate(function(t,i,u){return!1!==r(e.call(n,t,i,u),i,o)},i)},r.__iteratorUncached=function(r,i){var o=t.__iterator(bn,i);return new b(function(){var i=o.next();if(i.done)return i;var u=i.value,a=u[0];return w(r,a,e.call(n,u[1],a,t),i)})},r}function ce(t,e){var n=Le(t);return n._iter=t,n.size=t.size,n.reverse=function(){return t},t.flip&&(n.flip=function(){var e=ae(t);return e.reverse=function(){return t.flip()},e}),n.get=function(n,r){return t.get(e?n:-1-n,r)},n.has=function(n){return t.has(e?n:-1-n)},n.includes=function(e){return t.includes(e)},n.cacheResult=Te,n.__iterate=function(e,n){var r=this;return t.__iterate(function(t,n){return e(t,n,r)},!n)},n.__iterator=function(e,n){return t.__iterator(e,!n)},n}function le(t,e,n,r){var i=Le(t);return r&&(i.has=function(r){var i=t.get(r,gn);return i!==gn&&!!e.call(n,i,r,t)},i.get=function(r,i){var o=t.get(r,gn);return o!==gn&&e.call(n,o,r,t)?o:i}),i.__iterateUncached=function(i,o){var u=this,a=0;return t.__iterate(function(t,o,s){if(e.call(n,t,o,s))return a++,i(t,r?o:a-1,u)},o),a},i.__iteratorUncached=function(i,o){var u=t.__iterator(bn,o),a=0;return new b(function(){for(;;){var o=u.next();if(o.done)return o;var s=o.value,c=s[0],l=s[1];if(e.call(n,l,c,t))return w(i,r?c:a++,l,o)}})},i}function fe(t,e,n){var r=ft().asMutable();return t.__iterate(function(i,o){r.update(e.call(n,i,o,t),0,function(t){return t+1})}),r.asImmutable()}function pe(t,e,n){var r=u(t),i=(c(t)?Xt():ft()).asMutable();t.__iterate(function(o,u){i.update(e.call(n,o,u,t),function(t){return t=t||[],t.push(r?[u,o]:o),t})});var o=Ie(t);return i.map(function(e){return Ee(t,o(e))})}function he(t,e,n,r){var i=t.size;if(void 0!==e&&(e|=0),void 0!==n&&(n|=0),v(e,n,i))return t;var o=_(e,i),u=m(n,i);if(o!==o||u!==u)return he(t.toSeq().cacheResult(),e,n,r);var a,s=u-o;s===s&&(a=s<0?0:s);var c=Le(t);return c.size=0===a?a:t.size&&a||void 0,!r&&B(t)&&a>=0&&(c.get=function(e,n){return e=y(this,e),e>=0&&e<a?t.get(e+o,n):n}),c.__iterateUncached=function(e,n){var i=this;if(0===a)return 0;if(n)return this.cacheResult().__iterate(e,n);var u=0,s=!0,c=0;return t.__iterate(function(t,n){if(!s||!(s=u++<o))return c++,!1!==e(t,r?n:c-1,i)&&c!==a}),c},c.__iteratorUncached=function(e,n){if(0!==a&&n)return this.cacheResult().__iterator(e,n);var i=0!==a&&t.__iterator(e,n),u=0,s=0;return new b(function(){for(;u++<o;)i.next();if(++s>a)return M();var t=i.next();return r||e===Sn?t:e===mn?w(e,s-1,void 0,t):w(e,s-1,t.value[1],t)})},c}function de(t,e,n){var r=Le(t);return r.__iterateUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterate(r,i);var u=0;return t.__iterate(function(t,i,a){return e.call(n,t,i,a)&&++u&&r(t,i,o)}),u},r.__iteratorUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterator(r,i);var u=t.__iterator(bn,i),a=!0;return new b(function(){if(!a)return M();var t=u.next();if(t.done)return t;var i=t.value,s=i[0],c=i[1];return e.call(n,c,s,o)?r===bn?t:w(r,s,c,t):(a=!1,M())})},r}function ye(t,e,n,r){var i=Le(t);return i.__iterateUncached=function(i,o){var u=this;if(o)return this.cacheResult().__iterate(i,o);var a=!0,s=0;return t.__iterate(function(t,o,c){if(!a||!(a=e.call(n,t,o,c)))return s++,i(t,r?o:s-1,u)}),s},i.__iteratorUncached=function(i,o){var u=this;if(o)return this.cacheResult().__iterator(i,o);var a=t.__iterator(bn,o),s=!0,c=0;return new b(function(){var t,o,l;do{if(t=a.next(),t.done)return r||i===Sn?t:i===mn?w(i,c++,void 0,t):w(i,c++,t.value[1],t);var f=t.value;o=f[0],l=f[1],s&&(s=e.call(n,l,o,u))}while(s);return i===bn?t:w(i,o,l,t)})},i}function ge(t,e){var r=u(t),i=[t].concat(e).map(function(t){return o(t)?r&&(t=n(t)):t=r?K(t):P(Array.isArray(t)?t:[t]),t}).filter(function(t){return 0!==t.size});if(0===i.length)return t;if(1===i.length){var s=i[0];if(s===t||r&&u(s)||a(t)&&a(s))return s}var c=new N(i);return r?c=c.toKeyedSeq():a(t)||(c=c.toSetSeq()),c=c.flatten(!0),c.size=i.reduce(function(t,e){if(void 0!==t){var n=e.size;if(void 0!==n)return t+n}},0),c}function ve(t,e,n){var r=Le(t);return r.__iterateUncached=function(r,i){function u(t,c){var l=this;t.__iterate(function(t,i){return(!e||c<e)&&o(t)?u(t,c+1):!1===r(t,n?i:a++,l)&&(s=!0),!s},i)}var a=0,s=!1;return u(t,0),a},r.__iteratorUncached=function(r,i){var u=t.__iterator(r,i),a=[],s=0;return new b(function(){for(;u;){var t=u.next();if(!1===t.done){var c=t.value;if(r===bn&&(c=c[1]),e&&!(a.length<e)||!o(c))return n?t:w(r,s++,c,t);a.push(u),u=c.__iterator(r,i)}else u=a.pop()}return M()})},r}function _e(t,e,n){var r=Ie(t);return t.toSeq().map(function(i,o){return r(e.call(n,i,o,t))}).flatten(!0)}function me(t,e){var n=Le(t);return n.size=t.size&&2*t.size-1,n.__iterateUncached=function(n,r){var i=this,o=0;return t.__iterate(function(t,r){return(!o||!1!==n(e,o++,i))&&!1!==n(t,o++,i)},r),o},n.__iteratorUncached=function(n,r){var i,o=t.__iterator(Sn,r),u=0;return new b(function(){return(!i||u%2)&&(i=o.next(),i.done)?i:u%2?w(n,u++,e):w(n,u++,i.value,i)})},n}function Se(t,e,n){e||(e=De);var r=u(t),i=0,o=t.toSeq().map(function(e,r){return[r,e,i++,n?n(e,r,t):e]}).toArray();return o.sort(function(t,n){return e(t[3],n[3])||t[2]-n[2]}).forEach(r?function(t,e){o[e].length=2}:function(t,e){o[e]=t[1]}),r?D(o):a(t)?O(o):C(o)}function be(t,e,n){if(e||(e=De),n){var r=t.toSeq().map(function(e,r){return[e,n(e,r,t)]}).reduce(function(t,n){return we(e,t[1],n[1])?n:t});return r&&r[0]}return t.reduce(function(t,n){return we(e,t,n)?n:t})}function we(t,e,n){var r=t(n,e);return 0===r&&n!==e&&(void 0===n||null===n||n!==n)||r>0}function Me(t,n,r){var i=Le(t);return i.size=new N(r).map(function(t){return t.size}).min(),i.__iterate=function(t,e){for(var n,r=this.__iterator(Sn,e),i=0;!(n=r.next()).done&&!1!==t(n.value,i++,this););return i},i.__iteratorUncached=function(t,i){var o=r.map(function(t){return t=e(t),k(i?t.reverse():t)}),u=0,a=!1;return new b(function(){var e;return a||(e=o.map(function(t){return t.next()}),a=e.some(function(t){return t.done})),a?M():w(t,u++,n.apply(null,e.map(function(t){return t.value})))})},i}function Ee(t,e){return B(t)?e:t.constructor(e)}function xe(t){if(t!==Object(t))throw new TypeError("Expected [K, V] tuple: "+t)}function ke(t){return lt(t.size),d(t)}function Ie(t){return u(t)?n:a(t)?r:i}function Le(t){return Object.create((u(t)?D:a(t)?O:C).prototype)}function Te(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):T.prototype.cacheResult.call(this)}function De(t,e){return t>e?1:t<e?-1:0}function Oe(t){var n=k(t);if(!n){if(!L(t))throw new TypeError("Expected iterable or array-like: "+t);n=k(e(t))}return n}function Ce(t,e){var n,r=function(o){if(o instanceof r)return o;if(!(this instanceof r))return new r(o);if(!n){n=!0;var u=Object.keys(t);Ae(i,u),i.size=u.length,i._name=e,i._keys=u,i._defaultValues=t}this._map=ft(o)},i=r.prototype=Object.create(Zn);return i.constructor=r,r}function Ne(t,e,n){var r=Object.create(Object.getPrototypeOf(t));return r._map=e,r.__ownerID=n,r}function je(t){return t._name||t.constructor.name||"Record"}function Ae(t,e){try{e.forEach(ze.bind(void 0,t))}catch(t){}}function ze(t,e){Object.defineProperty(t,e,{get:function(){return this.get(e)},set:function(t){X(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}function Be(t){return null===t||void 0===t?Ue():Re(t)&&!c(t)?t:Ue().withMutations(function(e){var n=i(t);lt(n.size),n.forEach(function(t){return e.add(t)})})}function Re(t){return!(!t||!t[Xn])}function Ke(t,e){return t.__ownerID?(t.size=e.size,t._map=e,t):e===t._map?t:0===e.size?t.__empty():t.__make(e)}function Pe(t,e){var n=Object.create($n);return n.size=t?t.size:0,n._map=t,n.__ownerID=e,n}function Ue(){return tr||(tr=Pe(wt()))}function Fe(t){return null===t||void 0===t?He():Ye(t)?t:He().withMutations(function(e){var n=i(t);lt(n.size),n.forEach(function(t){return e.add(t)})})}function Ye(t){return Re(t)&&c(t)}function qe(t,e){var n=Object.create(er);return n.size=t?t.size:0,n._map=t,n.__ownerID=e,n}function He(){return nr||(nr=qe(ee()))}function We(t){return null===t||void 0===t?Ve():Qe(t)?t:Ve().unshiftAll(t)}function Qe(t){return!(!t||!t[rr])}function Ge(t,e,n,r){var i=Object.create(ir);return i.size=t,i._head=e,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function Ve(){return or||(or=Ge(0))}function Je(t,e){var n=function(n){t.prototype[n]=e[n]};return Object.keys(e).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach(n),t}function Ze(t,e){return e}function Xe(t,e){return[e,t]}function $e(t){return function(){return!t.apply(this,arguments)}}function tn(t){return function(){return-t.apply(this,arguments)}}function en(t){return"string"==typeof t?JSON.stringify(t):t}function nn(){return h(arguments)}function rn(t,e){return t<e?1:t>e?-1:0}function on(t){if(t.size===1/0)return 0;var e=c(t),n=u(t),r=e?1:0;return un(t.__iterate(n?e?function(t,e){r=31*r+an(ot(t),ot(e))|0}:function(t,e){r=r+an(ot(t),ot(e))|0}:e?function(t){r=31*r+ot(t)|0}:function(t){r=r+ot(t)|0}),r)}function un(t,e){return e=Dn(e,3432918353),e=Dn(e<<15|e>>>-15,461845907),e=Dn(e<<13|e>>>-13,5),e=(e+3864292196|0)^t,e=Dn(e^e>>>16,2246822507),e=Dn(e^e>>>13,3266489909),e=it(e^e>>>16)}function an(t,e){return t^e+2654435769+(t<<6)+(t>>2)|0}var sn=Array.prototype.slice;t(n,e),t(r,e),t(i,e),e.isIterable=o,e.isKeyed=u,e.isIndexed=a,e.isAssociative=s,e.isOrdered=c,e.Keyed=n,e.Indexed=r,e.Set=i;var cn="@@__IMMUTABLE_ITERABLE__@@",ln="@@__IMMUTABLE_KEYED__@@",fn="@@__IMMUTABLE_INDEXED__@@",pn="@@__IMMUTABLE_ORDERED__@@",hn=5,dn=1<<hn,yn=dn-1,gn={},vn={value:!1},_n={value:!1},mn=0,Sn=1,bn=2,wn="function"==typeof Symbol&&Symbol.iterator,Mn="@@iterator",En=wn||Mn;b.prototype.toString=function(){return"[Iterator]"},b.KEYS=mn,b.VALUES=Sn,b.ENTRIES=bn,b.prototype.inspect=b.prototype.toSource=function(){return this.toString()},b.prototype[En]=function(){return this},t(T,e),T.of=function(){return T(arguments)},T.prototype.toSeq=function(){return this},T.prototype.toString=function(){return this.__toString("Seq {","}")},T.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},T.prototype.__iterate=function(t,e){return Y(this,t,e,!0)},T.prototype.__iterator=function(t,e){return q(this,t,e,!0)},t(D,T),D.prototype.toKeyedSeq=function(){return this},t(O,T),O.of=function(){return O(arguments)},O.prototype.toIndexedSeq=function(){return this},O.prototype.toString=function(){return this.__toString("Seq [","]")},O.prototype.__iterate=function(t,e){return Y(this,t,e,!1)},O.prototype.__iterator=function(t,e){return q(this,t,e,!1)},t(C,T),C.of=function(){return C(arguments)},C.prototype.toSetSeq=function(){return this},T.isSeq=B,T.Keyed=D,T.Set=C,T.Indexed=O;var xn="@@__IMMUTABLE_SEQ__@@";T.prototype[xn]=!0,t(N,O),N.prototype.get=function(t,e){return this.has(t)?this._array[y(this,t)]:e},N.prototype.__iterate=function(t,e){for(var n=this._array,r=n.length-1,i=0;i<=r;i++)if(!1===t(n[e?r-i:i],i,this))return i+1;return i},N.prototype.__iterator=function(t,e){var n=this._array,r=n.length-1,i=0;return new b(function(){return i>r?M():w(t,i,n[e?r-i++:i++])})},t(j,D),j.prototype.get=function(t,e){return void 0===e||this.has(t)?this._object[t]:e},j.prototype.has=function(t){return this._object.hasOwnProperty(t)},j.prototype.__iterate=function(t,e){for(var n=this._object,r=this._keys,i=r.length-1,o=0;o<=i;o++){var u=r[e?i-o:o];if(!1===t(n[u],u,this))return o+1}return o},j.prototype.__iterator=function(t,e){var n=this._object,r=this._keys,i=r.length-1,o=0;return new b(function(){var u=r[e?i-o:o];return o++>i?M():w(t,u,n[u])})},j.prototype[pn]=!0,t(A,O),A.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);var n=this._iterable,r=k(n),i=0;if(x(r))for(var o;!(o=r.next()).done&&!1!==t(o.value,i++,this););return i},A.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var n=this._iterable,r=k(n);if(!x(r))return new b(M);var i=0;return new b(function(){var e=r.next();return e.done?e:w(t,i++,e.value)})},t(z,O),z.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);for(var n=this._iterator,r=this._iteratorCache,i=0;i<r.length;)if(!1===t(r[i],i++,this))return i;for(var o;!(o=n.next()).done;){var u=o.value;if(r[i]=u,!1===t(u,i++,this))break}return i},z.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var n=this._iterator,r=this._iteratorCache,i=0;return new b(function(){if(i>=r.length){var e=n.next();if(e.done)return e;r[i]=e.value}return w(t,i,r[i++])})};var kn;t(Z,O),Z.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},Z.prototype.get=function(t,e){return this.has(t)?this._value:e},Z.prototype.includes=function(t){return V(this._value,t)},Z.prototype.slice=function(t,e){var n=this.size;return v(t,e,n)?this:new Z(this._value,m(e,n)-_(t,n))},Z.prototype.reverse=function(){return this},Z.prototype.indexOf=function(t){return V(this._value,t)?0:-1},Z.prototype.lastIndexOf=function(t){return V(this._value,t)?this.size:-1},Z.prototype.__iterate=function(t,e){for(var n=0;n<this.size;n++)if(!1===t(this._value,n,this))return n+1;return n},Z.prototype.__iterator=function(t,e){var n=this,r=0;return new b(function(){return r<n.size?w(t,r++,n._value):M()})},Z.prototype.equals=function(t){return t instanceof Z?V(this._value,t._value):J(t)};var In;t($,O),$.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},$.prototype.get=function(t,e){return this.has(t)?this._start+y(this,t)*this._step:e},$.prototype.includes=function(t){var e=(t-this._start)/this._step;return e>=0&&e<this.size&&e===Math.floor(e)},$.prototype.slice=function(t,e){return v(t,e,this.size)?this:(t=_(t,this.size),e=m(e,this.size),e<=t?new $(0,0):new $(this.get(t,this._end),this.get(e,this._end),this._step))},$.prototype.indexOf=function(t){var e=t-this._start;if(e%this._step==0){var n=e/this._step;if(n>=0&&n<this.size)return n}return-1},$.prototype.lastIndexOf=function(t){return this.indexOf(t)},$.prototype.__iterate=function(t,e){for(var n=this.size-1,r=this._step,i=e?this._start+n*r:this._start,o=0;o<=n;o++){if(!1===t(i,o,this))return o+1;i+=e?-r:r}return o},$.prototype.__iterator=function(t,e){var n=this.size-1,r=this._step,i=e?this._start+n*r:this._start,o=0;return new b(function(){var u=i;return i+=e?-r:r,o>n?M():w(t,o++,u)})},$.prototype.equals=function(t){return t instanceof $?this._start===t._start&&this._end===t._end&&this._step===t._step:J(this,t)};var Ln;t(tt,e),t(et,tt),t(nt,tt),t(rt,tt),tt.Keyed=et,tt.Indexed=nt,tt.Set=rt;var Tn,Dn="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(t,e){t|=0,e|=0;var n=65535&t,r=65535&e;return n*r+((t>>>16)*r+n*(e>>>16)<<16>>>0)|0},On=Object.isExtensible,Cn=function(){try{return Object.defineProperty({},"@",{}),!0}catch(t){return!1}}(),Nn="function"==typeof WeakMap;Nn&&(Tn=new WeakMap);var jn=0,An="__immutablehash__";"function"==typeof Symbol&&(An=Symbol(An));var zn=16,Bn=255,Rn=0,Kn={};t(ft,et),ft.prototype.toString=function(){return this.__toString("Map {","}")},ft.prototype.get=function(t,e){return this._root?this._root.get(0,void 0,t,e):e},ft.prototype.set=function(t,e){return Mt(this,t,e)},ft.prototype.setIn=function(t,e){return this.updateIn(t,gn,function(){return e})},ft.prototype.remove=function(t){return Mt(this,t,gn)},ft.prototype.deleteIn=function(t){return this.updateIn(t,function(){return gn})},ft.prototype.update=function(t,e,n){return 1===arguments.length?t(this):this.updateIn([t],e,n)},ft.prototype.updateIn=function(t,e,n){n||(n=e,e=void 0);var r=jt(this,Oe(t),e,n);return r===gn?void 0:r},ft.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):wt()},ft.prototype.merge=function(){return Dt(this,void 0,arguments)},ft.prototype.mergeWith=function(t){return Dt(this,t,sn.call(arguments,1))},ft.prototype.mergeIn=function(t){var e=sn.call(arguments,1);return this.updateIn(t,wt(),function(t){return"function"==typeof t.merge?t.merge.apply(t,e):e[e.length-1]})},ft.prototype.mergeDeep=function(){return Dt(this,Ot,arguments)},ft.prototype.mergeDeepWith=function(t){var e=sn.call(arguments,1);return Dt(this,Ct(t),e)},ft.prototype.mergeDeepIn=function(t){var e=sn.call(arguments,1);return this.updateIn(t,wt(),function(t){return"function"==typeof t.mergeDeep?t.mergeDeep.apply(t,e):e[e.length-1]})},ft.prototype.sort=function(t){return Xt(Se(this,t))},ft.prototype.sortBy=function(t,e){return Xt(Se(this,e,t))},ft.prototype.withMutations=function(t){var e=this.asMutable();return t(e),e.wasAltered()?e.__ensureOwner(this.__ownerID):this},ft.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new p)},ft.prototype.asImmutable=function(){return this.__ensureOwner()},ft.prototype.wasAltered=function(){return this.__altered},ft.prototype.__iterator=function(t,e){return new _t(this,t,e)},ft.prototype.__iterate=function(t,e){var n=this,r=0;return this._root&&this._root.iterate(function(e){return r++,t(e[1],e[0],n)},e),r},ft.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?bt(this.size,this._root,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},ft.isMap=pt;var Pn="@@__IMMUTABLE_MAP__@@",Un=ft.prototype;Un[Pn]=!0,Un.delete=Un.remove,Un.removeIn=Un.deleteIn,ht.prototype.get=function(t,e,n,r){for(var i=this.entries,o=0,u=i.length;o<u;o++)if(V(n,i[o][0]))return i[o][1];return r},ht.prototype.update=function(t,e,n,r,i,o,u){for(var a=i===gn,s=this.entries,c=0,l=s.length;c<l&&!V(r,s[c][0]);c++);var p=c<l;if(p?s[c][1]===i:a)return this;if(f(u),(a||!p)&&f(o),!a||1!==s.length){if(!p&&!a&&s.length>=Yn)return It(t,s,r,i);var d=t&&t===this.ownerID,y=d?s:h(s);return p?a?c===l-1?y.pop():y[c]=y.pop():y[c]=[r,i]:y.push([r,i]),d?(this.entries=y,this):new ht(t,y)}},dt.prototype.get=function(t,e,n,r){void 0===e&&(e=ot(n));var i=1<<((0===t?e:e>>>t)&yn),o=this.bitmap;return 0==(o&i)?r:this.nodes[At(o&i-1)].get(t+hn,e,n,r)},dt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=(0===e?n:n>>>e)&yn,s=1<<a,c=this.bitmap,l=0!=(c&s);if(!l&&i===gn)return this;var f=At(c&s-1),p=this.nodes,h=l?p[f]:void 0,d=Et(h,t,e+hn,n,r,i,o,u);if(d===h)return this;if(!l&&d&&p.length>=qn)return Tt(t,p,c,a,d);if(l&&!d&&2===p.length&&xt(p[1^f]))return p[1^f];if(l&&d&&1===p.length&&xt(d))return d;var y=t&&t===this.ownerID,g=l?d?c:c^s:c|s,v=l?d?zt(p,f,d,y):Rt(p,f,y):Bt(p,f,d,y);return y?(this.bitmap=g,this.nodes=v,this):new dt(t,g,v)},yt.prototype.get=function(t,e,n,r){void 0===e&&(e=ot(n));var i=(0===t?e:e>>>t)&yn,o=this.nodes[i];return o?o.get(t+hn,e,n,r):r},yt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=(0===e?n:n>>>e)&yn,s=i===gn,c=this.nodes,l=c[a];if(s&&!l)return this;var f=Et(l,t,e+hn,n,r,i,o,u);if(f===l)return this;var p=this.count;if(l){if(!f&&--p<Hn)return Lt(t,c,p,a)}else p++;var h=t&&t===this.ownerID,d=zt(c,a,f,h);return h?(this.count=p,this.nodes=d,this):new yt(t,p,d)},gt.prototype.get=function(t,e,n,r){for(var i=this.entries,o=0,u=i.length;o<u;o++)if(V(n,i[o][0]))return i[o][1];return r},gt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=i===gn;if(n!==this.keyHash)return a?this:(f(u),f(o),kt(this,t,e,n,[r,i]));for(var s=this.entries,c=0,l=s.length;c<l&&!V(r,s[c][0]);c++);var p=c<l;if(p?s[c][1]===i:a)return this;if(f(u),(a||!p)&&f(o),a&&2===l)return new vt(t,this.keyHash,s[1^c]);var d=t&&t===this.ownerID,y=d?s:h(s);return p?a?c===l-1?y.pop():y[c]=y.pop():y[c]=[r,i]:y.push([r,i]),d?(this.entries=y,this):new gt(t,this.keyHash,y)},vt.prototype.get=function(t,e,n,r){return V(n,this.entry[0])?this.entry[1]:r},vt.prototype.update=function(t,e,n,r,i,o,u){var a=i===gn,s=V(r,this.entry[0]);return(s?i===this.entry[1]:a)?this:(f(u),a?void f(o):s?t&&t===this.ownerID?(this.entry[1]=i,this):new vt(t,this.keyHash,[r,i]):(f(o),kt(this,t,e,ot(r),[r,i])))},ht.prototype.iterate=gt.prototype.iterate=function(t,e){for(var n=this.entries,r=0,i=n.length-1;r<=i;r++)if(!1===t(n[e?i-r:r]))return!1},dt.prototype.iterate=yt.prototype.iterate=function(t,e){for(var n=this.nodes,r=0,i=n.length-1;r<=i;r++){var o=n[e?i-r:r];if(o&&!1===o.iterate(t,e))return!1}},vt.prototype.iterate=function(t,e){return t(this.entry)},t(_t,b),_t.prototype.next=function(){for(var t=this._type,e=this._stack;e;){var n,r=e.node,i=e.index++;if(r.entry){if(0===i)return mt(t,r.entry)}else if(r.entries){if(n=r.entries.length-1,i<=n)return mt(t,r.entries[this._reverse?n-i:i])}else if(n=r.nodes.length-1,i<=n){var o=r.nodes[this._reverse?n-i:i];if(o){if(o.entry)return mt(t,o.entry);e=this._stack=St(o,e)}continue}e=this._stack=this._stack.__prev}return M()};var Fn,Yn=dn/4,qn=dn/2,Hn=dn/4;t(Kt,nt),Kt.of=function(){return this(arguments)},Kt.prototype.toString=function(){return this.__toString("List [","]")},Kt.prototype.get=function(t,e){if((t=y(this,t))>=0&&t<this.size){t+=this._origin;var n=Gt(this,t);return n&&n.array[t&yn]}return e},Kt.prototype.set=function(t,e){return Ht(this,t,e)},Kt.prototype.remove=function(t){return this.has(t)?0===t?this.shift():t===this.size-1?this.pop():this.splice(t,1):this},Kt.prototype.insert=function(t,e){return this.splice(t,0,e)},Kt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=hn,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):qt()},Kt.prototype.push=function(){var t=arguments,e=this.size;return this.withMutations(function(n){Vt(n,0,e+t.length);for(var r=0;r<t.length;r++)n.set(e+r,t[r])})},Kt.prototype.pop=function(){return Vt(this,0,-1)},Kt.prototype.unshift=function(){var t=arguments;return this.withMutations(function(e){Vt(e,-t.length);for(var n=0;n<t.length;n++)e.set(n,t[n])})},Kt.prototype.shift=function(){return Vt(this,1)},Kt.prototype.merge=function(){return Jt(this,void 0,arguments)},Kt.prototype.mergeWith=function(t){return Jt(this,t,sn.call(arguments,1))},Kt.prototype.mergeDeep=function(){return Jt(this,Ot,arguments)},Kt.prototype.mergeDeepWith=function(t){var e=sn.call(arguments,1);return Jt(this,Ct(t),e)},Kt.prototype.setSize=function(t){return Vt(this,0,t)},Kt.prototype.slice=function(t,e){var n=this.size;return v(t,e,n)?this:Vt(this,_(t,n),m(e,n))},Kt.prototype.__iterator=function(t,e){var n=0,r=Ft(this,e);return new b(function(){var e=r();return e===Vn?M():w(t,n++,e)})},Kt.prototype.__iterate=function(t,e){for(var n,r=0,i=Ft(this,e);(n=i())!==Vn&&!1!==t(n,r++,this););return r},Kt.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Yt(this._origin,this._capacity,this._level,this._root,this._tail,t,this.__hash):(this.__ownerID=t,this)},Kt.isList=Pt;var Wn="@@__IMMUTABLE_LIST__@@",Qn=Kt.prototype;Qn[Wn]=!0,Qn.delete=Qn.remove,Qn.setIn=Un.setIn,Qn.deleteIn=Qn.removeIn=Un.removeIn,Qn.update=Un.update,Qn.updateIn=Un.updateIn,Qn.mergeIn=Un.mergeIn,Qn.mergeDeepIn=Un.mergeDeepIn,Qn.withMutations=Un.withMutations,Qn.asMutable=Un.asMutable,Qn.asImmutable=Un.asImmutable,Qn.wasAltered=Un.wasAltered,Ut.prototype.removeBefore=function(t,e,n){if(n===e?1<<e:0===this.array.length)return this;var r=n>>>e&yn;if(r>=this.array.length)return new Ut([],t);var i,o=0===r;if(e>0){var u=this.array[r];if((i=u&&u.removeBefore(t,e-hn,n))===u&&o)return this}if(o&&!i)return this;var a=Qt(this,t);if(!o)for(var s=0;s<r;s++)a.array[s]=void 0;return i&&(a.array[r]=i),a},Ut.prototype.removeAfter=function(t,e,n){if(n===(e?1<<e:0)||0===this.array.length)return this;var r=n-1>>>e&yn;if(r>=this.array.length)return this;var i;if(e>0){var o=this.array[r];if((i=o&&o.removeAfter(t,e-hn,n))===o&&r===this.array.length-1)return this}var u=Qt(this,t);return u.array.splice(r+1),i&&(u.array[r]=i),u};var Gn,Vn={};t(Xt,ft),Xt.of=function(){return this(arguments)},Xt.prototype.toString=function(){return this.__toString("OrderedMap {","}")},Xt.prototype.get=function(t,e){var n=this._map.get(t);return void 0!==n?this._list.get(n)[1]:e},Xt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):ee()},Xt.prototype.set=function(t,e){return ne(this,t,e)},Xt.prototype.remove=function(t){return ne(this,t,gn)},Xt.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},Xt.prototype.__iterate=function(t,e){var n=this;return this._list.__iterate(function(e){return e&&t(e[1],e[0],n)},e)},Xt.prototype.__iterator=function(t,e){return this._list.fromEntrySeq().__iterator(t,e)},Xt.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t),n=this._list.__ensureOwner(t);return t?te(e,n,t,this.__hash):(this.__ownerID=t,this._map=e,this._list=n,this)},Xt.isOrderedMap=$t,Xt.prototype[pn]=!0,Xt.prototype.delete=Xt.prototype.remove;var Jn;t(re,D),re.prototype.get=function(t,e){return this._iter.get(t,e)},re.prototype.has=function(t){return this._iter.has(t)},re.prototype.valueSeq=function(){return this._iter.valueSeq()},re.prototype.reverse=function(){var t=this,e=ce(this,!0);return this._useKeys||(e.valueSeq=function(){return t._iter.toSeq().reverse()}),e},re.prototype.map=function(t,e){var n=this,r=se(this,t,e);return this._useKeys||(r.valueSeq=function(){return n._iter.toSeq().map(t,e)}),r},re.prototype.__iterate=function(t,e){var n,r=this;return this._iter.__iterate(this._useKeys?function(e,n){return t(e,n,r)}:(n=e?ke(this):0,function(i){return t(i,e?--n:n++,r)}),e)},re.prototype.__iterator=function(t,e){if(this._useKeys)return this._iter.__iterator(t,e);var n=this._iter.__iterator(Sn,e),r=e?ke(this):0;return new b(function(){var i=n.next();return i.done?i:w(t,e?--r:r++,i.value,i)})},re.prototype[pn]=!0,t(ie,O),ie.prototype.includes=function(t){return this._iter.includes(t)},ie.prototype.__iterate=function(t,e){var n=this,r=0;return this._iter.__iterate(function(e){return t(e,r++,n)},e)},ie.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e),r=0;return new b(function(){var e=n.next();return e.done?e:w(t,r++,e.value,e)})},t(oe,C),oe.prototype.has=function(t){return this._iter.includes(t)},oe.prototype.__iterate=function(t,e){var n=this;return this._iter.__iterate(function(e){return t(e,e,n)},e)},oe.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e);return new b(function(){var e=n.next();return e.done?e:w(t,e.value,e.value,e)})},t(ue,D),ue.prototype.entrySeq=function(){return this._iter.toSeq()},ue.prototype.__iterate=function(t,e){var n=this;return this._iter.__iterate(function(e){if(e){xe(e);var r=o(e);return t(r?e.get(1):e[1],r?e.get(0):e[0],n)}},e)},ue.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e);return new b(function(){for(;;){var e=n.next();if(e.done)return e;var r=e.value;if(r){xe(r);var i=o(r);return w(t,i?r.get(0):r[0],i?r.get(1):r[1],e)}}})},ie.prototype.cacheResult=re.prototype.cacheResult=oe.prototype.cacheResult=ue.prototype.cacheResult=Te,t(Ce,et),Ce.prototype.toString=function(){return this.__toString(je(this)+" {","}")},Ce.prototype.has=function(t){return this._defaultValues.hasOwnProperty(t)},Ce.prototype.get=function(t,e){if(!this.has(t))return e;var n=this._defaultValues[t];return this._map?this._map.get(t,n):n},Ce.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var t=this.constructor;return t._empty||(t._empty=Ne(this,wt()))},Ce.prototype.set=function(t,e){if(!this.has(t))throw new Error('Cannot set unknown key "'+t+'" on '+je(this));var n=this._map&&this._map.set(t,e);return this.__ownerID||n===this._map?this:Ne(this,n)},Ce.prototype.remove=function(t){if(!this.has(t))return this;var e=this._map&&this._map.remove(t);return this.__ownerID||e===this._map?this:Ne(this,e)},Ce.prototype.wasAltered=function(){return this._map.wasAltered()},Ce.prototype.__iterator=function(t,e){var r=this;return n(this._defaultValues).map(function(t,e){return r.get(e)}).__iterator(t,e)},Ce.prototype.__iterate=function(t,e){var r=this;return n(this._defaultValues).map(function(t,e){return r.get(e)}).__iterate(t,e)},Ce.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?Ne(this,e,t):(this.__ownerID=t,this._map=e,this)};var Zn=Ce.prototype;Zn.delete=Zn.remove,Zn.deleteIn=Zn.removeIn=Un.removeIn,Zn.merge=Un.merge,Zn.mergeWith=Un.mergeWith,Zn.mergeIn=Un.mergeIn,Zn.mergeDeep=Un.mergeDeep,Zn.mergeDeepWith=Un.mergeDeepWith,Zn.mergeDeepIn=Un.mergeDeepIn,Zn.setIn=Un.setIn,Zn.update=Un.update,Zn.updateIn=Un.updateIn,Zn.withMutations=Un.withMutations,Zn.asMutable=Un.asMutable,Zn.asImmutable=Un.asImmutable,t(Be,rt),Be.of=function(){return this(arguments)},Be.fromKeys=function(t){return this(n(t).keySeq())},Be.prototype.toString=function(){return this.__toString("Set {","}")},Be.prototype.has=function(t){return this._map.has(t)},Be.prototype.add=function(t){return Ke(this,this._map.set(t,!0))},Be.prototype.remove=function(t){return Ke(this,this._map.remove(t))},Be.prototype.clear=function(){return Ke(this,this._map.clear())},Be.prototype.union=function(){var t=sn.call(arguments,0);return t=t.filter(function(t){return 0!==t.size}),0===t.length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations(function(e){for(var n=0;n<t.length;n++)i(t[n]).forEach(function(t){return e.add(t)})}):this.constructor(t[0])},Be.prototype.intersect=function(){var t=sn.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(n){e.forEach(function(e){t.every(function(t){return t.includes(e)})||n.remove(e)})})},Be.prototype.subtract=function(){var t=sn.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(n){e.forEach(function(e){t.some(function(t){return t.includes(e)})&&n.remove(e)})})},Be.prototype.merge=function(){return this.union.apply(this,arguments)},Be.prototype.mergeWith=function(t){var e=sn.call(arguments,1);return this.union.apply(this,e)},Be.prototype.sort=function(t){return Fe(Se(this,t))},Be.prototype.sortBy=function(t,e){return Fe(Se(this,e,t))},Be.prototype.wasAltered=function(){return this._map.wasAltered()},Be.prototype.__iterate=function(t,e){var n=this;return this._map.__iterate(function(e,r){return t(r,r,n)},e)},Be.prototype.__iterator=function(t,e){return this._map.map(function(t,e){return e}).__iterator(t,e)},Be.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t);return t?this.__make(e,t):(this.__ownerID=t,this._map=e,this)},Be.isSet=Re;var Xn="@@__IMMUTABLE_SET__@@",$n=Be.prototype;$n[Xn]=!0,$n.delete=$n.remove,$n.mergeDeep=$n.merge,$n.mergeDeepWith=$n.mergeWith,$n.withMutations=Un.withMutations,$n.asMutable=Un.asMutable,$n.asImmutable=Un.asImmutable,$n.__empty=Ue,$n.__make=Pe;var tr;t(Fe,Be),Fe.of=function(){return this(arguments)},Fe.fromKeys=function(t){return this(n(t).keySeq())},Fe.prototype.toString=function(){return this.__toString("OrderedSet {","}")},Fe.isOrderedSet=Ye;var er=Fe.prototype;er[pn]=!0,er.__empty=He,er.__make=qe;var nr;t(We,nt),We.of=function(){return this(arguments)},We.prototype.toString=function(){return this.__toString("Stack [","]")},We.prototype.get=function(t,e){var n=this._head;for(t=y(this,t);n&&t--;)n=n.next;return n?n.value:e},We.prototype.peek=function(){return this._head&&this._head.value},We.prototype.push=function(){if(0===arguments.length)return this;for(var t=this.size+arguments.length,e=this._head,n=arguments.length-1;n>=0;n--)e={value:arguments[n],next:e};return this.__ownerID?(this.size=t,this._head=e,this.__hash=void 0,this.__altered=!0,this):Ge(t,e)},We.prototype.pushAll=function(t){if(t=r(t),0===t.size)return this;lt(t.size);var e=this.size,n=this._head;return t.reverse().forEach(function(t){e++,n={value:t,next:n}}),this.__ownerID?(this.size=e,this._head=n,this.__hash=void 0,this.__altered=!0,this):Ge(e,n)},We.prototype.pop=function(){return this.slice(1)},We.prototype.unshift=function(){return this.push.apply(this,arguments)},We.prototype.unshiftAll=function(t){return this.pushAll(t)},We.prototype.shift=function(){return this.pop.apply(this,arguments)},We.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Ve()},We.prototype.slice=function(t,e){if(v(t,e,this.size))return this;var n=_(t,this.size);if(m(e,this.size)!==this.size)return nt.prototype.slice.call(this,t,e);for(var r=this.size-n,i=this._head;n--;)i=i.next;return this.__ownerID?(this.size=r,this._head=i,this.__hash=void 0,this.__altered=!0,this):Ge(r,i)},We.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Ge(this.size,this._head,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},We.prototype.__iterate=function(t,e){if(e)return this.reverse().__iterate(t);for(var n=0,r=this._head;r&&!1!==t(r.value,n++,this);)r=r.next;return n},We.prototype.__iterator=function(t,e){if(e)return this.reverse().__iterator(t);var n=0,r=this._head;return new b(function(){if(r){var e=r.value;return r=r.next,w(t,n++,e)}return M()})},We.isStack=Qe;var rr="@@__IMMUTABLE_STACK__@@",ir=We.prototype;ir[rr]=!0,ir.withMutations=Un.withMutations,ir.asMutable=Un.asMutable,ir.asImmutable=Un.asImmutable,ir.wasAltered=Un.wasAltered;var or;e.Iterator=b,Je(e,{toArray:function(){lt(this.size);var t=new Array(this.size||0);return this.valueSeq().__iterate(function(e,n){t[n]=e}),t},toIndexedSeq:function(){return new ie(this)},toJS:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJS?t.toJS():t}).__toJS()},toJSON:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJSON?t.toJSON():t}).__toJS()},toKeyedSeq:function(){return new re(this,!0)},toMap:function(){return ft(this.toKeyedSeq())},toObject:function(){lt(this.size);var t={};return this.__iterate(function(e,n){t[n]=e}),t},toOrderedMap:function(){return Xt(this.toKeyedSeq())},toOrderedSet:function(){return Fe(u(this)?this.valueSeq():this)},toSet:function(){return Be(u(this)?this.valueSeq():this)},toSetSeq:function(){return new oe(this)},toSeq:function(){return a(this)?this.toIndexedSeq():u(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return We(u(this)?this.valueSeq():this)},toList:function(){return Kt(u(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(t,e){return 0===this.size?t+e:t+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+e},concat:function(){return Ee(this,ge(this,sn.call(arguments,0)))},includes:function(t){return this.some(function(e){return V(e,t)})},entries:function(){return this.__iterator(bn)},every:function(t,e){lt(this.size);var n=!0;return this.__iterate(function(r,i,o){if(!t.call(e,r,i,o))return n=!1,!1}),n},filter:function(t,e){return Ee(this,le(this,t,e,!0))},find:function(t,e,n){var r=this.findEntry(t,e);return r?r[1]:n},findEntry:function(t,e){var n;return this.__iterate(function(r,i,o){if(t.call(e,r,i,o))return n=[i,r],!1}),n},findLastEntry:function(t,e){return this.toSeq().reverse().findEntry(t,e)},forEach:function(t,e){return lt(this.size),this.__iterate(e?t.bind(e):t)},join:function(t){lt(this.size),t=void 0!==t?""+t:",";var e="",n=!0;return this.__iterate(function(r){n?n=!1:e+=t,e+=null!==r&&void 0!==r?r.toString():""}),e},keys:function(){return this.__iterator(mn)},map:function(t,e){return Ee(this,se(this,t,e))},reduce:function(t,e,n){lt(this.size);var r,i;return arguments.length<2?i=!0:r=e,this.__iterate(function(e,o,u){i?(i=!1,r=e):r=t.call(n,r,e,o,u)}),r},reduceRight:function(t,e,n){var r=this.toKeyedSeq().reverse();return r.reduce.apply(r,arguments)},reverse:function(){return Ee(this,ce(this,!0))},slice:function(t,e){return Ee(this,he(this,t,e,!0))},some:function(t,e){return!this.every($e(t),e)},sort:function(t){return Ee(this,Se(this,t))},values:function(){return this.__iterator(Sn)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some(function(){return!0})},count:function(t,e){return d(t?this.toSeq().filter(t,e):this)},countBy:function(t,e){return fe(this,t,e)},equals:function(t){return J(this,t)},entrySeq:function(){var t=this;if(t._cache)return new N(t._cache);var e=t.toSeq().map(Xe).toIndexedSeq();return e.fromEntrySeq=function(){return t.toSeq()},e},filterNot:function(t,e){return this.filter($e(t),e)},findLast:function(t,e,n){return this.toKeyedSeq().reverse().find(t,e,n)},first:function(){return this.find(g)},flatMap:function(t,e){return Ee(this,_e(this,t,e))},flatten:function(t){return Ee(this,ve(this,t,!0))},fromEntrySeq:function(){return new ue(this)},get:function(t,e){return this.find(function(e,n){return V(n,t)},void 0,e)},getIn:function(t,e){for(var n,r=this,i=Oe(t);!(n=i.next()).done;){var o=n.value;if((r=r&&r.get?r.get(o,gn):gn)===gn)return e}return r},groupBy:function(t,e){return pe(this,t,e)},has:function(t){return this.get(t,gn)!==gn},hasIn:function(t){return this.getIn(t,gn)!==gn},isSubset:function(t){return t="function"==typeof t.includes?t:e(t),this.every(function(e){return t.includes(e)})},isSuperset:function(t){return t="function"==typeof t.isSubset?t:e(t),t.isSubset(this)},keySeq:function(){return this.toSeq().map(Ze).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},max:function(t){return be(this,t)},maxBy:function(t,e){return be(this,e,t)},min:function(t){return be(this,t?tn(t):rn)},minBy:function(t,e){return be(this,e?tn(e):rn,t)},rest:function(){return this.slice(1)},skip:function(t){return this.slice(Math.max(0,t))},skipLast:function(t){return Ee(this,this.toSeq().reverse().skip(t).reverse())},skipWhile:function(t,e){return Ee(this,ye(this,t,e,!0))},skipUntil:function(t,e){return this.skipWhile($e(t),e)},sortBy:function(t,e){return Ee(this,Se(this,e,t))},take:function(t){return this.slice(0,Math.max(0,t))},takeLast:function(t){return Ee(this,this.toSeq().reverse().take(t).reverse())},takeWhile:function(t,e){return Ee(this,de(this,t,e))},takeUntil:function(t,e){return this.takeWhile($e(t),e)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=on(this))}});var ur=e.prototype;ur[cn]=!0,ur[En]=ur.values,ur.__toJS=ur.toArray,ur.__toStringMapper=en,ur.inspect=ur.toSource=function(){return this.toString()},ur.chain=ur.flatMap,ur.contains=ur.includes,function(){try{Object.defineProperty(ur,"length",{get:function(){if(!e.noLengthWarning){var t;try{throw new Error}catch(e){t=e.stack}if(-1===t.indexOf("_wrapObject"))return console&&console.warn&&console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. "+t),this.size}}})}catch(t){}}(),Je(n,{flip:function(){return Ee(this,ae(this))},findKey:function(t,e){var n=this.findEntry(t,e);return n&&n[0]},findLastKey:function(t,e){return this.toSeq().reverse().findKey(t,e)},keyOf:function(t){return this.findKey(function(e){return V(e,t)})},lastKeyOf:function(t){return this.findLastKey(function(e){return V(e,t)})},mapEntries:function(t,e){var n=this,r=0;return Ee(this,this.toSeq().map(function(i,o){return t.call(e,[o,i],r++,n)}).fromEntrySeq())},mapKeys:function(t,e){var n=this;return Ee(this,this.toSeq().flip().map(function(r,i){return t.call(e,r,i,n)}).flip())}});var ar=n.prototype;return ar[ln]=!0,ar[En]=ur.entries,ar.__toJS=ur.toObject,ar.__toStringMapper=function(t,e){return JSON.stringify(e)+": "+en(t)},Je(r,{toKeyedSeq:function(){return new re(this,!1)},filter:function(t,e){return Ee(this,le(this,t,e,!1))},findIndex:function(t,e){var n=this.findEntry(t,e);return n?n[0]:-1},indexOf:function(t){var e=this.toKeyedSeq().keyOf(t);return void 0===e?-1:e},lastIndexOf:function(t){var e=this.toKeyedSeq().reverse().keyOf(t);return void 0===e?-1:e},reverse:function(){return Ee(this,ce(this,!1))},slice:function(t,e){return Ee(this,he(this,t,e,!1))},splice:function(t,e){var n=arguments.length;if(e=Math.max(0|e,0),0===n||2===n&&!e)return this;t=_(t,t<0?this.count():this.size);var r=this.slice(0,t);return Ee(this,1===n?r:r.concat(h(arguments,2),this.slice(t+e)))},findLastIndex:function(t,e){var n=this.toKeyedSeq().findLastKey(t,e);return void 0===n?-1:n},first:function(){return this.get(0)},flatten:function(t){return Ee(this,ve(this,t,!1))},get:function(t,e){return t=y(this,t),t<0||this.size===1/0||void 0!==this.size&&t>this.size?e:this.find(function(e,n){return n===t},void 0,e)},has:function(t){return(t=y(this,t))>=0&&(void 0!==this.size?this.size===1/0||t<this.size:-1!==this.indexOf(t))},interpose:function(t){return Ee(this,me(this,t))},interleave:function(){var t=[this].concat(h(arguments)),e=Me(this.toSeq(),O.of,t),n=e.flatten(!0);return e.size&&(n.size=e.size*t.length),Ee(this,n)},last:function(){return this.get(-1)},skipWhile:function(t,e){return Ee(this,ye(this,t,e,!1))},zip:function(){return Ee(this,Me(this,nn,[this].concat(h(arguments))))},zipWith:function(t){var e=h(arguments);return e[0]=this,Ee(this,Me(this,t,e))}}),r.prototype[fn]=!0,r.prototype[pn]=!0,Je(i,{get:function(t,e){return this.has(t)?t:e},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}}),i.prototype.has=ur.includes,Je(D,n.prototype),Je(O,r.prototype),Je(C,i.prototype),Je(et,n.prototype),Je(nt,r.prototype),Je(rt,i.prototype),{Iterable:e,Seq:T,Collection:tt,Map:ft,OrderedMap:Xt,List:Kt,Stack:We,Set:Be,OrderedSet:Fe,Record:Ce,Range:$,Repeat:Z,is:V,fromJS:H}}()}()},function(t,e,n){"use strict";function r(t,e,n,r,o,u,a,s){if(i(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,u,a,s],f=0;c=new Error(e.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var i=function(t){};t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n){return E.set(t,{selection:e,forceSelection:n,nativelyRenderedContent:null,inlineStyleOverride:null})}function o(t,e){return t.getBlockMap().map(function(n){return d.generate(t,n,e)}).toOrderedMap()}function u(t,e,n,r){var i=t.getCurrentContent().set("entityMap",n),o=i.getBlockMap();return t.getImmutable().get("treeMap").merge(e.toSeq().filter(function(t,e){return t!==o.get(e)}).map(function(t){return d.generate(i,t,r)}))}function a(t,e,n,r,i){return n.merge(e.toSeq().filter(function(e){return r.getDecorations(e,t)!==i.getDecorations(e,t)}).map(function(e){return d.generate(t,e,r)}))}function s(t,e){return e!==t.getLastChangeType()||"insert-characters"!==e&&"backspace-character"!==e&&"delete-character"!==e}function c(t,e){var n=e.getStartKey(),r=e.getStartOffset(),i=t.getBlockForKey(n);return r>0?i.getInlineStyleAt(r-1):i.getLength()?i.getInlineStyleAt(0):f(t,n)}function l(t,e){var n=e.getStartKey(),r=e.getStartOffset(),i=t.getBlockForKey(n);return r<i.getLength()?i.getInlineStyleAt(r):r>0?i.getInlineStyleAt(r-1):f(t,n)}function f(t,e){var n=t.getBlockMap().reverse().skipUntil(function(t,n){return n===e}).skip(1).skipUntil(function(t,e){return t.getLength()}).first();return n?n.getInlineStyleAt(n.getLength()-1):m()}var p=n(9),h=p||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=n(114),y=n(82),g=n(190),v=n(0),_=n(43),m=v.OrderedSet,S=v.Record,b=v.Stack,w={allowUndo:!0,currentContent:null,decorator:null,directionMap:null,forceSelection:!1,inCompositionMode:!1,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:b(),selection:null,treeMap:null,undoStack:b()},M=S(w),E=function(){function t(e){r(this,t),this._immutable=e}return t.createEmpty=function(e){return t.createWithContent(y.createFromText(""),e)},t.createWithContent=function(e,n){var r=e.getBlockMap().first().getKey();return t.create({currentContent:e,undoStack:b(),redoStack:b(),decorator:n||null,selection:_.createEmpty(r)})},t.create=function(e){var n=e.currentContent,r=e.decorator,i=h({},e,{treeMap:o(n,r),directionMap:g.getDirectionMap(n)});return new t(new M(i))},t.set=function(e,n){return new t(e.getImmutable().withMutations(function(t){var r=t.get("decorator"),i=r;null===n.decorator?i=null:n.decorator&&(i=n.decorator);var s=n.currentContent||e.getCurrentContent();if(i!==r){var c,l=t.get("treeMap");return c=i&&r?a(s,s.getBlockMap(),l,i,r):o(s,i),void t.merge({decorator:i,treeMap:c,nativelyRenderedContent:null})}s!==e.getCurrentContent()&&t.set("treeMap",u(e,s.getBlockMap(),s.getEntityMap(),i)),t.merge(n)}))},t.prototype.toJS=function(){return this.getImmutable().toJS()},t.prototype.getAllowUndo=function(){return this.getImmutable().get("allowUndo")},t.prototype.getCurrentContent=function(){return this.getImmutable().get("currentContent")},t.prototype.getUndoStack=function(){return this.getImmutable().get("undoStack")},t.prototype.getRedoStack=function(){return this.getImmutable().get("redoStack")},t.prototype.getSelection=function(){return this.getImmutable().get("selection")},t.prototype.getDecorator=function(){return this.getImmutable().get("decorator")},t.prototype.isInCompositionMode=function(){return this.getImmutable().get("inCompositionMode")},t.prototype.mustForceSelection=function(){return this.getImmutable().get("forceSelection")},t.prototype.getNativelyRenderedContent=function(){return this.getImmutable().get("nativelyRenderedContent")},t.prototype.getLastChangeType=function(){return this.getImmutable().get("lastChangeType")},t.prototype.getInlineStyleOverride=function(){return this.getImmutable().get("inlineStyleOverride")},t.setInlineStyleOverride=function(e,n){return t.set(e,{inlineStyleOverride:n})},t.prototype.getCurrentInlineStyle=function(){var t=this.getInlineStyleOverride();if(null!=t)return t;var e=this.getCurrentContent(),n=this.getSelection();return n.isCollapsed()?c(e,n):l(e,n)},t.prototype.getBlockTree=function(t){return this.getImmutable().getIn(["treeMap",t])},t.prototype.isSelectionAtStartOfContent=function(){var t=this.getCurrentContent().getBlockMap().first().getKey();return this.getSelection().hasEdgeWithin(t,0,0)},t.prototype.isSelectionAtEndOfContent=function(){var t=this.getCurrentContent(),e=t.getBlockMap(),n=e.last(),r=n.getLength();return this.getSelection().hasEdgeWithin(n.getKey(),r,r)},t.prototype.getDirectionMap=function(){return this.getImmutable().get("directionMap")},t.acceptSelection=function(t,e){return i(t,e,!1)},t.forceSelection=function(t,e){return e.getHasFocus()||(e=e.set("hasFocus",!0)),i(t,e,!0)},t.moveSelectionToEnd=function(e){var n=e.getCurrentContent(),r=n.getLastBlock(),i=r.getKey(),o=r.getLength();return t.acceptSelection(e,new _({anchorKey:i,anchorOffset:o,focusKey:i,focusOffset:o,isBackward:!1}))},t.moveFocusToEnd=function(e){var n=t.moveSelectionToEnd(e);return t.forceSelection(n,n.getSelection())},t.push=function(e,n,r){if(e.getCurrentContent()===n)return e;var i="insert-characters"!==r,o=g.getDirectionMap(n,e.getDirectionMap());if(!e.getAllowUndo())return t.set(e,{currentContent:n,directionMap:o,lastChangeType:r,selection:n.getSelectionAfter(),forceSelection:i,inlineStyleOverride:null});var u=e.getSelection(),a=e.getCurrentContent(),c=e.getUndoStack(),l=n;u!==a.getSelectionAfter()||s(e,r)?(c=c.push(a),l=l.set("selectionBefore",u)):"insert-characters"!==r&&"backspace-character"!==r&&"delete-character"!==r||(l=l.set("selectionBefore",a.getSelectionBefore()));var f=e.getInlineStyleOverride();-1===["adjust-depth","change-block-type","split-block"].indexOf(r)&&(f=null);var p={currentContent:l,directionMap:o,undoStack:c,redoStack:b(),lastChangeType:r,selection:n.getSelectionAfter(),forceSelection:i,inlineStyleOverride:f};return t.set(e,p)},t.undo=function(e){if(!e.getAllowUndo())return e;var n=e.getUndoStack(),r=n.peek();if(!r)return e;var i=e.getCurrentContent(),o=g.getDirectionMap(r,e.getDirectionMap());return t.set(e,{currentContent:r,directionMap:o,undoStack:n.shift(),redoStack:e.getRedoStack().push(i),forceSelection:!0,inlineStyleOverride:null,lastChangeType:"undo",nativelyRenderedContent:null,selection:i.getSelectionBefore()})},t.redo=function(e){if(!e.getAllowUndo())return e;var n=e.getRedoStack(),r=n.peek();if(!r)return e;var i=e.getCurrentContent(),o=g.getDirectionMap(r,e.getDirectionMap());return t.set(e,{currentContent:r,directionMap:o,undoStack:e.getUndoStack().push(i),redoStack:n.shift(),forceSelection:!0,inlineStyleOverride:null,lastChangeType:"redo",nativelyRenderedContent:null,selection:r.getSelectionAfter()})},t.prototype.getImmutable=function(){return this._immutable},t}();t.exports=E},function(t,e){t.exports=__webpack_require__(0)},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";var r=n(7),i=n(179),o=n(31),u=n(0),a=n(180),s=n(182),c=n(60),l=n(185),f=n(186),p=n(1),h=n(187),d=n(111),y=n(188),g=n(189),v=u.OrderedSet,_={replaceText:function(t,e,n,i,o){var u=d(t,e),a=y(u,e),s=r.create({style:i||v(),entity:o||null});return f(a,a.getSelectionAfter(),n,s)},insertText:function(t,e,n,r,i){return e.isCollapsed()||p(!1),_.replaceText(t,e,n,r,i)},moveText:function(t,e,n){var r=c(t,e),i=_.removeRange(t,e,"backward");return _.replaceWithFragment(i,n,r)},replaceWithFragment:function(t,e,n){var r=d(t,e),i=y(r,e);return l(i,i.getSelectionAfter(),n)},removeRange:function(t,e,n){var r=void 0,i=void 0,u=void 0,a=void 0;e.getIsBackward()&&(e=e.merge({anchorKey:e.getFocusKey(),anchorOffset:e.getFocusOffset(),focusKey:e.getAnchorKey(),focusOffset:e.getAnchorOffset(),isBackward:!1})),r=e.getAnchorKey(),i=e.getFocusKey(),u=t.getBlockForKey(r),a=t.getBlockForKey(i);var c=e.getStartOffset(),l=e.getEndOffset(),f=u.getEntityAt(c),p=a.getEntityAt(l-1);if(r===i&&f&&f===p){var h=s(t.getEntityMap(),u,a,e,n);return y(t,h)}var g=e;o.draft_segmented_entities_behavior&&(g=s(t.getEntityMap(),u,a,e,n));var v=d(t,g);return y(v,g)},splitBlock:function(t,e){var n=d(t,e),r=y(n,e);return g(r,r.getSelectionAfter())},applyInlineStyle:function(t,e,n){return i.add(t,e,n)},removeInlineStyle:function(t,e,n){return i.remove(t,e,n)},setBlockType:function(t,e,n){return h(t,e,function(t){return t.merge({type:n,depth:0})})},setBlockData:function(t,e,n){return h(t,e,function(t){return t.merge({data:n})})},mergeBlockData:function(t,e,n){return h(t,e,function(t){return t.merge({data:t.getData().merge(n)})})},applyEntity:function(t,e,n){var r=d(t,e);return a(r,e,n)}};t.exports=_},function(t,e,n){var r=n(72)("wks"),i=n(54),o=n(14).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(0),a=u.Map,s=u.OrderedSet,c=u.Record,l=s(),f={style:l,entity:null},p=c(f),h=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.getStyle=function(){return this.get("style")},e.prototype.getEntity=function(){return this.get("entity")},e.prototype.hasStyle=function(t){return this.getStyle().includes(t)},e.applyStyle=function(t,n){var r=t.set("style",t.getStyle().add(n));return e.create(r)},e.removeStyle=function(t,n){var r=t.set("style",t.getStyle().remove(n));return e.create(r)},e.applyEntity=function(t,n){var r=t.getEntity()===n?t:t.set("entity",n);return e.create(r)},e.create=function(t){if(!t)return d;var n={style:l,entity:null},r=a(n).merge(t),i=y.get(r);if(i)return i;var o=new e(r);return y=y.set(r,o),o},e}(p),d=new h,y=a([[a(f),d]]);h.EMPTY=d,t.exports=h},function(t,e,n){var r=n(14),i=n(4),o=n(34),u=n(29),a=function(t,e,n){var s,c,l,f=t&a.F,p=t&a.G,h=t&a.S,d=t&a.P,y=t&a.B,g=t&a.W,v=p?i:i[e]||(i[e]={}),_=v.prototype,m=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(c=!f&&m&&void 0!==m[s])&&s in v||(l=c?m[s]:n[s],v[s]=p&&"function"!=typeof m[s]?n[s]:y&&c?o(l,r):g&&m[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((v.virtual||(v.virtual={}))[s]=l,t&a.R&&_&&!_[s]&&u(_,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,s=r(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)o.call(n,l)&&(s[l]=n[l]);if(i){a=i(n);for(var f=0;f<a.length;f++)u.call(n,a[f])&&(s[a[f]]=n[a[f]])}}return s}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(7),a=n(0),s=n(49),c=a.List,l=a.Map,f=a.OrderedSet,p=a.Record,h=a.Repeat,d=f(),y={parent:null,characterList:c(),data:l(),depth:0,key:"",text:"",type:"unstyled",children:c(),prevSibling:null,nextSibling:null},g=function(t,e){return t.getStyle()===e.getStyle()},v=function(t,e){return t.getEntity()===e.getEntity()},_=function(t){if(!t)return t;var e=t.characterList,n=t.text;return n&&!e&&(t.characterList=c(h(u.EMPTY,n.length))),t},m=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return r(this,e),i(this,t.call(this,_(n)))}return o(e,t),e.prototype.getKey=function(){return this.get("key")},e.prototype.getType=function(){return this.get("type")},e.prototype.getText=function(){return this.get("text")},e.prototype.getCharacterList=function(){return this.get("characterList")},e.prototype.getLength=function(){return this.getText().length},e.prototype.getDepth=function(){return this.get("depth")},e.prototype.getData=function(){return this.get("data")},e.prototype.getInlineStyleAt=function(t){var e=this.getCharacterList().get(t);return e?e.getStyle():d},e.prototype.getEntityAt=function(t){var e=this.getCharacterList().get(t);return e?e.getEntity():null},e.prototype.getChildKeys=function(){return this.get("children")},e.prototype.getParentKey=function(){return this.get("parent")},e.prototype.getPrevSiblingKey=function(){return this.get("prevSibling")},e.prototype.getNextSiblingKey=function(){return this.get("nextSibling")},e.prototype.findStyleRanges=function(t,e){s(this.getCharacterList(),g,t,e)},e.prototype.findEntityRanges=function(t,e){s(this.getCharacterList(),v,t,e)},e}(p(y));t.exports=m},function(t,e,n){var r=n(30),i=n(99),o=n(66),u=Object.defineProperty;e.f=n(15)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";var r=n(177),i=n(48),o=n(7),u=n(193),a=n(37),s=n(82),c=n(85),l=n(117),f=n(194),p=n(119),h=n(61),d=n(5),y=n(115),g=n(2),v=n(64),_=n(133),m=n(43),S=n(257),b=n(131),w=n(260),M=n(25),E=n(92),x=n(265),k={Editor:f,EditorBlock:p,EditorState:g,CompositeDecorator:u,Entity:h,EntityInstance:y,BlockMapBuilder:i,CharacterMetadata:o,ContentBlock:a,ContentState:s,SelectionState:m,AtomicBlockUtils:r,KeyBindingUtil:v,Modifier:d,RichUtils:_,DefaultDraftBlockRenderMap:c,DefaultDraftInlineStyle:l,convertFromHTML:b,convertFromRaw:w,convertToRaw:S,genKey:M,getDefaultKeyBinding:E,getVisibleSelectionRect:x};t.exports=k},function(t,e,n){"use strict";var r=function(t){if(null!=t)return t;throw new Error("Got unexpected null or undefined")};t.exports=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(35)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(102),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t,e,n,r){if(t===n)return!0;if(!n.startsWith(t))return!1;var i=n.slice(t.length);return!!e&&(i=r?r(i):i,u.contains(i,e))}function i(t){return"Windows"===o.platformName?t.replace(/^\s*NT/,""):t}var o=n(200),u=n(203),a=n(204),s=n(205),c={isBrowser:function(t){return r(o.browserName,o.browserFullVersion,t)},isBrowserArchitecture:function(t){return r(o.browserArchitecture,null,t)},isDevice:function(t){return r(o.deviceName,null,t)},isEngine:function(t){return r(o.engineName,o.engineVersion,t)},isPlatform:function(t){return r(o.platformName,o.platformFullVersion,t,i)},isPlatformArchitecture:function(t){return r(o.platformArchitecture,null,t)}};t.exports=a(c,s)},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],e))}else{for(var u=[],o=0;o<r.parts.length;o++)u.push(l(r.parts[o],e));d[r.id]={id:r.id,refs:1,parts:u}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],u=e.base?o[0]+e.base:o[0],a=o[1],s=o[2],c=o[3],l={css:a,media:s,sourceMap:c};r[u]?r[u].parts.push(l):n.push(r[u]={id:u,parts:[l]})}return n}function o(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function s(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=_++;n=v||(v=a(e)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(e),r=h.bind(null,n,e),i=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=p.bind(null,n),i=function(){u(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=S(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var u=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}var d={},y=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),v=null,_=0,m=[],S=n(294);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],u=0;u<n.length;u++){var a=n[u],s=d[a.id];s.refs--,o.push(s)}t&&r(i(t,e),e);for(var u=0;u<o.length;u++){var s=o[u];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(97),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(152),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(75),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(170),o=r(i),u=n(174),a=r(u),s=n(75),c=r(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(){for(var t=void 0;void 0===t||i.hasOwnProperty(t)||!isNaN(+t);)t=Math.floor(Math.random()*o).toString(32);return i[t]=!0,t}var i={},o=Math.pow(2,24);t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r,i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var u in r)o.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}var o={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=n:(r=[],void 0!==(i=function(){return n}.apply(e,r))&&(t.exports=i))}()},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var u=t[i];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e,n){var r=n(11),i=n(45);t.exports=n(15)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){"use strict";var r=n(178);t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(267);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}),Object.defineProperty(e,"Constants",{enumerable:!0,get:function(){return r(i).default}});var o=n(268);Object.defineProperty(e,"getEntityRanges",{enumerable:!0,get:function(){return r(o).default}});var u=n(94);Object.defineProperty(e,"getSelectedBlocks",{enumerable:!0,get:function(){return r(u).default}});var a=n(269);Object.defineProperty(e,"selectionContainsEntity",{enumerable:!0,get:function(){return r(a).default}});var s=n(270);Object.defineProperty(e,"callModifierForSelectedBlocks",{enumerable:!0,get:function(){return r(s).default}})},function(t,e,n){"use strict";function r(t){return!0===u[t]}function i(t){return"function"==typeof t}function o(t,e){null==e&&(e=Object.getPrototypeOf(t));for(var n=Object.getOwnPropertyNames(e),o=n,u=Array.isArray(o),a=0,o=u?o:o[Symbol.iterator]();;){var s;if(u){if(a>=o.length)break;s=o[a++]}else{if(a=o.next(),a.done)break;s=a.value}var c=s;i(e[c])&&!r(c)&&(t[c]=e[c].bind(t))}}e.__esModule=!0,e.default=o;var u={getChildContext:!0,render:!0,componentWillMount:!0,componentDidMount:!0,componentWillReceiveProps:!0,shouldComponentUpdate:!0,componentWillUpdate:!0,componentDidUpdate:!0,componentWillUnmount:!0}},function(t,e,n){var r=n(98);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){return t.getStyle()===e.getStyle()}function a(t,e){return t.getEntity()===e.getEntity()}var s=n(7),c=n(0),l=n(49),f=c.List,p=c.Map,h=c.OrderedSet,d=c.Record,y=c.Repeat,g=h(),v={key:"",type:"unstyled",text:"",characterList:f(),depth:0,data:p()},_=d(v),m=function(t){if(!t)return t;var e=t.characterList,n=t.text;return n&&!e&&(t.characterList=f(y(s.EMPTY,n.length))),t},S=function(t){function e(n){return r(this,e),i(this,t.call(this,m(n)))}return o(e,t),e.prototype.getKey=function(){return this.get("key")},e.prototype.getType=function(){return this.get("type")},e.prototype.getText=function(){return this.get("text")},e.prototype.getCharacterList=function(){return this.get("characterList")},e.prototype.getLength=function(){return this.getText().length},e.prototype.getDepth=function(){return this.get("depth")},e.prototype.getData=function(){return this.get("data")},e.prototype.getInlineStyleAt=function(t){var e=this.getCharacterList().get(t);return e?e.getStyle():g},e.prototype.getEntityAt=function(t){var e=this.getCharacterList().get(t);return e?e.getEntity():null},e.prototype.findStyleRanges=function(t,e){l(this.getCharacterList(),u,t,e)},e.prototype.findEntityRanges=function(t,e){l(this.getCharacterList(),a,t,e)},e}(_);t.exports=S},function(t,e){t.exports=__webpack_require__(108)},function(t,e,n){"use strict";function r(t){return p<=t&&t<=y}function i(t,e){if(0<=e&&e<t.length||f(!1),e+1===t.length)return!1;var n=t.charCodeAt(e),r=t.charCodeAt(e+1);return p<=n&&n<=h&&d<=r&&r<=y}function o(t){return g.test(t)}function u(t,e){return 1+r(t.charCodeAt(e))}function a(t){if(!o(t))return t.length;for(var e=0,n=0;n<t.length;n+=u(t,n))e++;return e}function s(t,e,n){if(e=e||0,n=void 0===n?1/0:n||0,!o(t))return t.substr(e,n);var r=t.length;if(r<=0||e>r||n<=0)return"";var i=0;if(e>0){for(;e>0&&i<r;e--)i+=u(t,i);if(i>=r)return""}else if(e<0){for(i=r;e<0&&0<i;e++)i-=u(t,i-1);i<0&&(i=0)}var a=r;if(n<r)for(a=i;n>0&&a<r;n--)a+=u(t,a);return t.substring(i,a)}function c(t,e,n){e=e||0,n=void 0===n?1/0:n||0,e<0&&(e=0),n<0&&(n=0);var r=Math.abs(n-e);return e=e<n?e:n,s(t,e,r)}function l(t){for(var e=[],n=0;n<t.length;n+=u(t,n))e.push(t.codePointAt(n));return e}var f=n(1),p=55296,h=56319,d=56320,y=57343,g=/[\uD800-\uDFFF]/,v={getCodePoints:l,getUTF16Length:u,hasSurrogateUnit:o,isCodeUnitInSurrogateRange:r,isSurrogatePair:i,strlen:a,substring:c,substr:s};t.exports=v},function(t,e,n){var r=n(67),i=n(69);t.exports=function(t){return r(i(t))}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},function(t,e){t.exports={}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(0),a=u.Record,s={anchorKey:"",anchorOffset:0,focusKey:"",focusOffset:0,isBackward:!1,hasFocus:!1},c=a(s),l=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.serialize=function(){return"Anchor: "+this.getAnchorKey()+":"+this.getAnchorOffset()+", Focus: "+this.getFocusKey()+":"+this.getFocusOffset()+", Is Backward: "+String(this.getIsBackward())+", Has Focus: "+String(this.getHasFocus())},e.prototype.getAnchorKey=function(){return this.get("anchorKey")},e.prototype.getAnchorOffset=function(){return this.get("anchorOffset")},e.prototype.getFocusKey=function(){return this.get("focusKey")},e.prototype.getFocusOffset=function(){return this.get("focusOffset")},e.prototype.getIsBackward=function(){return this.get("isBackward")},e.prototype.getHasFocus=function(){return this.get("hasFocus")},e.prototype.hasEdgeWithin=function(t,e,n){var r=this.getAnchorKey(),i=this.getFocusKey();if(r===i&&r===t){var o=this.getStartOffset();return e<=this.getEndOffset()&&o<=n}if(t!==r&&t!==i)return!1;var u=t===r?this.getAnchorOffset():this.getFocusOffset();return e<=u&&n>=u},e.prototype.isCollapsed=function(){return this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset()},e.prototype.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey()},e.prototype.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset()},e.prototype.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey()},e.prototype.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset()},e.createEmpty=function(t){return new e({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0,isBackward:!1,hasFocus:!1})},e}(c);t.exports=l},function(t,e,n){"use strict";function r(t){return"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}).map(i).join(" "):Array.prototype.map.call(arguments,i).join(" ")}function i(t){return t.replace(/\//g,"-")}t.exports=r},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(69);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(157)(!0);n(76)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(0),i=r.OrderedMap,o={createFromArray:function(t){return i(t.map(function(t){return[t.getKey(),t]}))}};t.exports=o},function(t,e,n){"use strict";function r(t,e,n,r){if(t.size){var i=0;t.reduce(function(t,o,u){return e(t,o)||(n(t)&&r(i,u),i=u),o}),n(t.last())&&r(i,t.count())}}t.exports=r},function(t,e,n){"use strict";function r(t){return"handled"===t||!0===t}t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=t.getSelection(),o=t.getCurrentContent(),u=r;if(r.isCollapsed()){if("forward"===n){if(t.isSelectionAtEndOfContent())return o}else if(t.isSelectionAtStartOfContent())return o;if((u=e(t))===r)return o}return i.removeRange(o,u,n)}var i=n(5);t.exports=r},function(t,e,n){var r=n(101),i=n(73);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(70),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";e.__esModule=!0;var r=n(102),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(30),i=n(159),o=n(73),u=n(71)("IE_PROTO"),a=function(){},s=function(){var t,e=n(100)("iframe"),r=o.length;for(e.style.display="none",n(160).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[o[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=s(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(11).f,i=n(36),o=n(6)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){n(161);for(var r=n(14),i=n(29),o=n(42),u=n(6)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<a.length;s++){var c=a[s],l=r[c],f=l&&l.prototype;f&&!f[u]&&i(f,u,c),o[c]=o.Array}},function(t,e,n){"use strict";var r=n(110),i=n(111),o=function(t,e){var n=e.getStartKey(),o=e.getStartOffset(),u=e.getEndKey(),a=e.getEndOffset(),s=i(t,e),c=s.getBlockMap(),l=c.keySeq(),f=l.indexOf(n),p=l.indexOf(u)+1;return r(c.slice(f,p).map(function(t,e){var r=t.getText(),i=t.getCharacterList();return n===u?t.merge({text:r.slice(o,a),characterList:i.slice(o,a)}):e===n?t.merge({text:r.slice(o),characterList:i.slice(o)}):e===u?t.merge({text:r.slice(0,a),characterList:i.slice(0,a)}):t}))};t.exports=o},function(t,e,n){"use strict";function r(t,e){console.warn("WARNING: "+t+' will be deprecated soon!\nPlease use "'+e+'" instead.')}var i=n(9),o=i||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(115),a=n(0),s=n(1),c=a.Map,l=c(),f=0,p={getLastCreatedEntityKey:function(){return r("DraftEntity.getLastCreatedEntityKey","contentState.getLastCreatedEntityKey"),p.__getLastCreatedEntityKey()},create:function(t,e,n){return r("DraftEntity.create","contentState.createEntity"),p.__create(t,e,n)},add:function(t){return r("DraftEntity.add","contentState.addEntity"),p.__add(t)},get:function(t){return r("DraftEntity.get","contentState.getEntity"),p.__get(t)},mergeData:function(t,e){return r("DraftEntity.mergeData","contentState.mergeEntityData"),p.__mergeData(t,e)},replaceData:function(t,e){return r("DraftEntity.replaceData","contentState.replaceEntityData"),p.__replaceData(t,e)},__getLastCreatedEntityKey:function(){return""+f},__create:function(t,e,n){return p.__add(new u({type:t,mutability:e,data:n||{}}))},__add:function(t){var e=""+ ++f;return l=l.set(e,t),e},__get:function(t){var e=l.get(t);return e||s(!1),e},__mergeData:function(t,e){var n=p.__get(t),r=o({},n.getData(),e),i=n.set("data",r);return l=l.set(t,i),i},__replaceData:function(t,e){var n=p.__get(t),r=n.set("data",e);return l=l.set(t,r),r}};t.exports=p},function(t,e,n){"use strict";t.exports={BACKSPACE:8,TAB:9,RETURN:13,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,COMMA:188,PERIOD:190,A:65,Z:90,ZERO:48,NUMPAD_0:96,NUMPAD_9:105}},function(t,e,n){"use strict";var r={encode:function(t,e,n){return t+"-"+e+"-"+n},decode:function(t){var e=t.split("-"),n=e[0],r=e[1],i=e[2];return{blockKey:n,decoratorKey:parseInt(r,10),leafKey:parseInt(i,10)}}};t.exports=r},function(t,e,n){"use strict";var r=n(18),i=r.isPlatform("Mac OS X"),o={isCtrlKeyCommand:function(t){return!!t.ctrlKey&&!t.altKey},isOptionKeyCommand:function(t){return i&&t.altKey},hasCommandModifier:function(t){return i?!!t.metaKey&&!t.altKey:o.isCtrlKeyCommand(t)}};t.exports=o},function(t,e,n){var r=n(34),i=n(136),o=n(137),u=n(30),a=n(53),s=n(95),c={},l={},e=t.exports=function(t,e,n,f,p){var h,d,y,g,v=p?function(){return t}:s(t),_=r(n,f,e?2:1),m=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(o(v)){for(h=a(t.length);h>m;m++)if((g=e?_(u(d=t[m])[0],d[1]):_(t[m]))===c||g===l)return g}else for(y=v.call(t);!(d=y.next()).done;)if((g=i(y,_,d.value,e))===c||g===l)return g};e.BREAK=c,e.RETURN=l},function(t,e,n){var r=n(20);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(68);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(72)("keys"),i=n(54);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(14),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(155),o=r(i),u=n(163),a=r(u),s="function"==typeof a.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===s(o.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){"use strict";var r=n(77),i=n(8),o=n(104),u=n(29),a=n(36),s=n(42),c=n(158),l=n(58),f=n(103),p=n(6)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,g,v,_){c(n,e,y);var m,S,b,w=function(t){if(!h&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",E="values"==g,x=!1,k=t.prototype,I=k[p]||k["@@iterator"]||g&&k[g],L=!h&&I||w(g),T=g?E?w("entries"):L:void 0,D="Array"==e?k.entries||I:I;if(D&&(b=f(D.call(new t)))!==Object.prototype&&b.next&&(l(b,M,!0),r||a(b,p)||u(b,p,d)),E&&I&&"values"!==I.name&&(x=!0,L=function(){return I.call(this)}),r&&!_||!h&&!x&&k[p]||u(k,p,L),s[e]=L,s[M]=d,g)if(m={values:E?L:w("values"),keys:v?L:w("keys"),entries:T},_)for(S in m)S in k||o(k,S,m[S]);else i(i.P+i.F*(h||x),e,m);return m}},function(t,e){t.exports=!0},function(t,e,n){e.f=n(6)},function(t,e,n){var r=n(54)("meta"),i=n(20),o=n(36),u=n(11).f,a=0,s=Object.isExtensible||function(){return!0},c=!n(35)(function(){return s(Object.preventExtensions({}))}),l=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[r].i},p=function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[r].w},h=function(t){return c&&d.NEED&&s(t)&&!o(t,r)&&l(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(14),i=n(4),o=n(77),u=n(78),a=n(11).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){"use strict";function r(t){return function(){return t}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},t.exports=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(48),a=n(7),s=n(37),c=n(10),l=n(61),f=n(31),p=n(0),h=n(43),d=n(25),y=n(83),g=p.List,v=p.Record,_=p.Repeat,m=f.draft_tree_data_support,S={entityMap:null,blockMap:null,selectionBefore:null,selectionAfter:null},b=m?c:s,w=v(S),M=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.getEntityMap=function(){return l},e.prototype.getBlockMap=function(){return this.get("blockMap")},e.prototype.getSelectionBefore=function(){return this.get("selectionBefore")},e.prototype.getSelectionAfter=function(){return this.get("selectionAfter")},e.prototype.getBlockForKey=function(t){return this.getBlockMap().get(t)},e.prototype.getKeyBefore=function(t){return this.getBlockMap().reverse().keySeq().skipUntil(function(e){return e===t}).skip(1).first()},e.prototype.getKeyAfter=function(t){return this.getBlockMap().keySeq().skipUntil(function(e){return e===t}).skip(1).first()},e.prototype.getBlockAfter=function(t){return this.getBlockMap().skipUntil(function(e,n){return n===t}).skip(1).first()},e.prototype.getBlockBefore=function(t){return this.getBlockMap().reverse().skipUntil(function(e,n){return n===t}).skip(1).first()},e.prototype.getBlocksAsArray=function(){return this.getBlockMap().toArray()},e.prototype.getFirstBlock=function(){return this.getBlockMap().first()},e.prototype.getLastBlock=function(){return this.getBlockMap().last()},e.prototype.getPlainText=function(t){return this.getBlockMap().map(function(t){return t?t.getText():""}).join(t||"\n")},e.prototype.getLastCreatedEntityKey=function(){return l.__getLastCreatedEntityKey()},e.prototype.hasText=function(){var t=this.getBlockMap();return t.size>1||t.first().getLength()>0},e.prototype.createEntity=function(t,e,n){return l.__create(t,e,n),this},e.prototype.mergeEntityData=function(t,e){return l.__mergeData(t,e),this},e.prototype.replaceEntityData=function(t,e){return l.__replaceData(t,e),this},e.prototype.addEntity=function(t){return l.__add(t),this},e.prototype.getEntity=function(t){return l.__get(t)},e.createFromBlockArray=function(t,n){var r=Array.isArray(t)?t:t.contentBlocks,i=u.createFromArray(r),o=i.isEmpty()?new h:h.createEmpty(i.first().getKey());return new e({blockMap:i,entityMap:n||l,selectionBefore:o,selectionAfter:o})},e.createFromText=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/\r\n?|\n/g,r=t.split(n),i=r.map(function(t){return t=y(t),new b({key:d(),text:t,type:"unstyled",characterList:g(_(a.EMPTY,t.length))})});return e.createFromBlockArray(i)},e}(w);t.exports=M},function(t,e,n){"use strict";function r(t){return t.replace(i,"")}var i=new RegExp("\r","g");t.exports=r},function(t,e,n){"use strict";function r(t){return t===l||t===f}function i(t){return r(t)||c(!1),t===l?"ltr":"rtl"}function o(t,e){return r(t)||c(!1),r(e)||c(!1),t===e?null:i(t)}function u(t){p=t}function a(){u(l)}function s(){return p||this.initGlobalDir(),p||c(!1),p}var c=n(1),l="LTR",f="RTL",p=null,h={NEUTRAL:"NEUTRAL",LTR:l,RTL:f,isStrong:r,getHTMLDir:i,getHTMLDirIfDifferent:o,setGlobalDir:u,initGlobalDir:a,getGlobalDir:s};t.exports=h},function(t,e,n){"use strict";var r=n(0),i=r.Map,o=n(3),u=n(44),a=o.createElement("ul",{className:u("public/DraftStyleDefault/ul")}),s=o.createElement("ol",{className:u("public/DraftStyleDefault/ol")}),c=o.createElement("pre",{className:u("public/DraftStyleDefault/pre")}),l=i({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:a},"ordered-list-item":{element:"li",wrapper:s},blockquote:{element:"blockquote"},atomic:{element:"figure"},"code-block":{element:"pre",wrapper:c},unstyled:{element:"div",aliasedElements:["p"]}});t.exports=l},function(t,e,n){"use strict";function r(t,e){var n;if(e.isCollapsed()){var r=e.getAnchorKey(),o=e.getAnchorOffset();return o>0?(n=t.getBlockForKey(r).getEntityAt(o-1),n!==t.getBlockForKey(r).getEntityAt(o)?null:i(t.getEntityMap(),n)):null}var u=e.getStartKey(),a=e.getStartOffset(),s=t.getBlockForKey(u);return n=a===s.getLength()?null:s.getEntityAt(a),i(t.getEntityMap(),n)}function i(t,e){return e&&"MUTABLE"===t.__get(e).getMutability()?e:null}t.exports=r},function(t,e,n){"use strict";function r(t,e){return!(!t||!e)&&(t===e||!i(t)&&(i(e)?r(t,e.parentNode):"contains"in t?t.contains(e):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(e))))}var i=n(208);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=o.get(t,e);return"auto"===n||"scroll"===n}var i=n(210),o={get:i,getScrollParent:function(t){if(!t)return null;for(var e=t.ownerDocument;t&&t!==e.body;){if(r(t,"overflow")||r(t,"overflowY")||r(t,"overflowX"))return t;t=t.parentNode}return e.defaultView||e.parentWindow}};t.exports=o},function(t,e,n){"use strict";function r(t){var e=i(t.ownerDocument||t.document);t.Window&&t instanceof t.Window&&(t=e);var n=o(t),r=t===e?t.ownerDocument.documentElement:t,u=t.scrollWidth-r.clientWidth,a=t.scrollHeight-r.clientHeight;return n.x=Math.max(0,Math.min(n.x,u)),n.y=Math.max(0,Math.min(n.y,a)),n}var i=n(215),o=n(216);t.exports=r},function(t,e,n){"use strict";function r(t){for(var e=t;e&&e!==document.documentElement;){var n=i(e);if(null!=n)return n;e=e.parentNode}return null}var i=n(123);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=t.getSelection(),r=t.getCurrentContent(),i=n.getStartKey(),o=n.getStartOffset(),u=i,a=0;if(e>o){var s=r.getKeyBefore(i);null==s?u=i:(u=s,a=r.getBlockForKey(s).getText().length)}else a=o-e;return n.merge({focusKey:u,focusOffset:a,isBackward:!0})}t.exports=r},function(t,e,n){"use strict";function r(t){return f&&t.altKey||y(t)}function i(t){return d(t)?t.shiftKey?"redo":"undo":null}function o(t){return p&&t.shiftKey?null:r(t)?"delete-word":"delete"}function u(t){return d(t)&&f?"backspace-to-start-of-line":r(t)?"backspace-word":"backspace"}function a(t){switch(t.keyCode){case 66:return d(t)?"bold":null;case 68:return y(t)?"delete":null;case 72:return y(t)?"backspace":null;case 73:return d(t)?"italic":null;case 74:return d(t)?"code":null;case 75:return!p&&y(t)?"secondary-cut":null;case 77:case 79:return y(t)?"split-block":null;case 84:return f&&y(t)?"transpose-characters":null;case 85:return d(t)?"underline":null;case 87:return f&&y(t)?"backspace-word":null;case 89:return y(t)?p?"redo":"secondary-paste":null;case 90:return i(t)||null;case c.RETURN:return"split-block";case c.DELETE:return o(t);case c.BACKSPACE:return u(t);case c.LEFT:return h&&d(t)?"move-selection-to-start-of-block":null;case c.RIGHT:return h&&d(t)?"move-selection-to-end-of-block":null;default:return null}}var s=n(64),c=n(62),l=n(18),f=l.isPlatform("Mac OS X"),p=l.isPlatform("Windows"),h=f&&l.isBrowser("Firefox < 29"),d=s.hasCommandModifier,y=s.isCtrlKeyCommand;t.exports=a},function(t,e,n){!function(e,n){t.exports=function(){"use strict";function t(t,e){e&&(t.prototype=Object.create(e.prototype)),t.prototype.constructor=t}function e(t){return o(t)?t:T(t)}function n(t){return u(t)?t:D(t)}function r(t){return a(t)?t:O(t)}function i(t){return o(t)&&!s(t)?t:C(t)}function o(t){return!(!t||!t[cn])}function u(t){return!(!t||!t[ln])}function a(t){return!(!t||!t[fn])}function s(t){return u(t)||a(t)}function c(t){return!(!t||!t[pn])}function l(t){return t.value=!1,t}function f(t){t&&(t.value=!0)}function p(){}function h(t,e){e=e||0;for(var n=Math.max(0,t.length-e),r=new Array(n),i=0;i<n;i++)r[i]=t[i+e];return r}function d(t){return void 0===t.size&&(t.size=t.__iterate(g)),t.size}function y(t,e){if("number"!=typeof e){var n=e>>>0;if(""+n!==e||4294967295===n)return NaN;e=n}return e<0?d(t)+e:e}function g(){return!0}function v(t,e,n){return(0===t||void 0!==n&&t<=-n)&&(void 0===e||void 0!==n&&e>=n)}function _(t,e){return S(t,e,0)}function m(t,e){return S(t,e,e)}function S(t,e,n){return void 0===t?n:t<0?Math.max(0,e+t):void 0===e?t:Math.min(e,t)}function b(t){this.next=t}function w(t,e,n,r){var i=0===t?e:1===t?n:[e,n];return r?r.value=i:r={value:i,done:!1},r}function M(){return{value:void 0,done:!0}}function E(t){return!!I(t)}function x(t){return t&&"function"==typeof t.next}function k(t){var e=I(t);return e&&e.call(t)}function I(t){var e=t&&(wn&&t[wn]||t[Mn]);if("function"==typeof e)return e}function L(t){return t&&"number"==typeof t.length}function T(t){return null===t||void 0===t?R():o(t)?t.toSeq():U(t)}function D(t){return null===t||void 0===t?R().toKeyedSeq():o(t)?u(t)?t.toSeq():t.fromEntrySeq():K(t)}function O(t){return null===t||void 0===t?R():o(t)?u(t)?t.entrySeq():t.toIndexedSeq():P(t)}function C(t){return(null===t||void 0===t?R():o(t)?u(t)?t.entrySeq():t:P(t)).toSetSeq()}function N(t){this._array=t,this.size=t.length}function j(t){var e=Object.keys(t);this._object=t,this._keys=e,this.size=e.length}function A(t){this._iterable=t,this.size=t.length||t.size}function z(t){this._iterator=t,this._iteratorCache=[]}function B(t){return!(!t||!t[xn])}function R(){return kn||(kn=new N([]))}function K(t){var e=Array.isArray(t)?new N(t).fromEntrySeq():x(t)?new z(t).fromEntrySeq():E(t)?new A(t).fromEntrySeq():"object"==typeof t?new j(t):void 0;if(!e)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+t);return e}function P(t){var e=F(t);if(!e)throw new TypeError("Expected Array or iterable object of values: "+t);return e}function U(t){var e=F(t)||"object"==typeof t&&new j(t);if(!e)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+t);return e}function F(t){return L(t)?new N(t):x(t)?new z(t):E(t)?new A(t):void 0}function Y(t,e,n,r){var i=t._cache;if(i){for(var o=i.length-1,u=0;u<=o;u++){var a=i[n?o-u:u];if(!1===e(a[1],r?a[0]:u,t))return u+1}return u}return t.__iterateUncached(e,n)}function q(t,e,n,r){var i=t._cache;if(i){var o=i.length-1,u=0;return new b(function(){var t=i[n?o-u:u];return u++>o?M():w(e,r?t[0]:u-1,t[1])})}return t.__iteratorUncached(e,n)}function H(t,e){return e?W(e,t,"",{"":t}):Q(t)}function W(t,e,n,r){return Array.isArray(e)?t.call(r,n,O(e).map(function(n,r){return W(t,n,r,e)})):G(e)?t.call(r,n,D(e).map(function(n,r){return W(t,n,r,e)})):e}function Q(t){return Array.isArray(t)?O(t).map(Q).toList():G(t)?D(t).map(Q).toMap():t}function G(t){return t&&(t.constructor===Object||void 0===t.constructor)}function V(t,e){if(t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1;if("function"==typeof t.valueOf&&"function"==typeof e.valueOf){if(t=t.valueOf(),e=e.valueOf(),t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1}return!("function"!=typeof t.equals||"function"!=typeof e.equals||!t.equals(e))}function J(t,e){if(t===e)return!0;if(!o(e)||void 0!==t.size&&void 0!==e.size&&t.size!==e.size||void 0!==t.__hash&&void 0!==e.__hash&&t.__hash!==e.__hash||u(t)!==u(e)||a(t)!==a(e)||c(t)!==c(e))return!1;if(0===t.size&&0===e.size)return!0;var n=!s(t);if(c(t)){var r=t.entries();return e.every(function(t,e){var i=r.next().value;return i&&V(i[1],t)&&(n||V(i[0],e))})&&r.next().done}var i=!1;if(void 0===t.size)if(void 0===e.size)"function"==typeof t.cacheResult&&t.cacheResult();else{i=!0;var l=t;t=e,e=l}var f=!0,p=e.__iterate(function(e,r){if(n?!t.has(e):i?!V(e,t.get(r,gn)):!V(t.get(r,gn),e))return f=!1,!1});return f&&t.size===p}function Z(t,e){if(!(this instanceof Z))return new Z(t,e);if(this._value=t,this.size=void 0===e?1/0:Math.max(0,e),0===this.size){if(In)return In;In=this}}function X(t,e){if(!t)throw new Error(e)}function $(t,e,n){if(!(this instanceof $))return new $(t,e,n);if(X(0!==n,"Cannot step a Range by 0"),t=t||0,void 0===e&&(e=1/0),n=void 0===n?1:Math.abs(n),e<t&&(n=-n),this._start=t,this._end=e,this._step=n,this.size=Math.max(0,Math.ceil((e-t)/n-1)+1),0===this.size){if(Ln)return Ln;Ln=this}}function tt(){throw TypeError("Abstract")}function et(){}function nt(){}function rt(){}function it(t){return t>>>1&1073741824|3221225471&t}function ot(t){if(!1===t||null===t||void 0===t)return 0;if("function"==typeof t.valueOf&&(!1===(t=t.valueOf())||null===t||void 0===t))return 0;if(!0===t)return 1;var e=typeof t;if("number"===e){if(t!==t||t===1/0)return 0;var n=0|t;for(n!==t&&(n^=4294967295*t);t>4294967295;)t/=4294967295,n^=t;return it(n)}if("string"===e)return t.length>zn?ut(t):at(t);if("function"==typeof t.hashCode)return t.hashCode();if("object"===e)return st(t);if("function"==typeof t.toString)return at(t.toString());throw new Error("Value type "+e+" cannot be hashed.")}function ut(t){var e=Kn[t];return void 0===e&&(e=at(t),Rn===Bn&&(Rn=0,Kn={}),Rn++,Kn[t]=e),e}function at(t){for(var e=0,n=0;n<t.length;n++)e=31*e+t.charCodeAt(n)|0;return it(e)}function st(t){var e;if(Nn&&void 0!==(e=Tn.get(t)))return e;if(void 0!==(e=t[An]))return e;if(!Cn){if(void 0!==(e=t.propertyIsEnumerable&&t.propertyIsEnumerable[An]))return e;if(void 0!==(e=ct(t)))return e}if(e=++jn,1073741824&jn&&(jn=0),Nn)Tn.set(t,e);else{if(void 0!==On&&!1===On(t))throw new Error("Non-extensible objects are not allowed as keys.");if(Cn)Object.defineProperty(t,An,{enumerable:!1,configurable:!1,writable:!1,value:e});else if(void 0!==t.propertyIsEnumerable&&t.propertyIsEnumerable===t.constructor.prototype.propertyIsEnumerable)t.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},t.propertyIsEnumerable[An]=e;else{if(void 0===t.nodeType)throw new Error("Unable to set a non-enumerable property on object.");t[An]=e}}return e}function ct(t){if(t&&t.nodeType>0)switch(t.nodeType){case 1:return t.uniqueID;case 9:return t.documentElement&&t.documentElement.uniqueID}}function lt(t){X(t!==1/0,"Cannot perform this action with an infinite size.")}function ft(t){return null===t||void 0===t?wt():pt(t)&&!c(t)?t:wt().withMutations(function(e){var r=n(t);lt(r.size),r.forEach(function(t,n){return e.set(n,t)})})}function pt(t){return!(!t||!t[Pn])}function ht(t,e){this.ownerID=t,this.entries=e}function dt(t,e,n){this.ownerID=t,this.bitmap=e,this.nodes=n}function yt(t,e,n){this.ownerID=t,this.count=e,this.nodes=n}function gt(t,e,n){this.ownerID=t,this.keyHash=e,this.entries=n}function vt(t,e,n){this.ownerID=t,this.keyHash=e,this.entry=n}function _t(t,e,n){this._type=e,this._reverse=n,this._stack=t._root&&St(t._root)}function mt(t,e){return w(t,e[0],e[1])}function St(t,e){return{node:t,index:0,__prev:e}}function bt(t,e,n,r){var i=Object.create(Un);return i.size=t,i._root=e,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function wt(){return Fn||(Fn=bt(0))}function Mt(t,e,n){var r,i;if(t._root){var o=l(vn),u=l(_n);if(r=Et(t._root,t.__ownerID,0,void 0,e,n,o,u),!u.value)return t;i=t.size+(o.value?n===gn?-1:1:0)}else{if(n===gn)return t;i=1,r=new ht(t.__ownerID,[[e,n]])}return t.__ownerID?(t.size=i,t._root=r,t.__hash=void 0,t.__altered=!0,t):r?bt(i,r):wt()}function Et(t,e,n,r,i,o,u,a){return t?t.update(e,n,r,i,o,u,a):o===gn?t:(f(a),f(u),new vt(e,r,[i,o]))}function xt(t){return t.constructor===vt||t.constructor===gt}function kt(t,e,n,r,i){if(t.keyHash===r)return new gt(e,r,[t.entry,i]);var o,u=(0===n?t.keyHash:t.keyHash>>>n)&yn,a=(0===n?r:r>>>n)&yn;return new dt(e,1<<u|1<<a,u===a?[kt(t,e,n+hn,r,i)]:(o=new vt(e,r,i),u<a?[t,o]:[o,t]))}function It(t,e,n,r){t||(t=new p);for(var i=new vt(t,ot(n),[n,r]),o=0;o<e.length;o++){var u=e[o];i=i.update(t,0,void 0,u[0],u[1])}return i}function Lt(t,e,n,r){for(var i=0,o=0,u=new Array(n),a=0,s=1,c=e.length;a<c;a++,s<<=1){var l=e[a];void 0!==l&&a!==r&&(i|=s,u[o++]=l)}return new dt(t,i,u)}function Tt(t,e,n,r,i){for(var o=0,u=new Array(dn),a=0;0!==n;a++,n>>>=1)u[a]=1&n?e[o++]:void 0;return u[r]=i,new yt(t,o+1,u)}function Dt(t,e,r){for(var i=[],u=0;u<r.length;u++){var a=r[u],s=n(a);o(a)||(s=s.map(function(t){return H(t)})),i.push(s)}return Nt(t,e,i)}function Ot(t,e,n){return t&&t.mergeDeep&&o(e)?t.mergeDeep(e):V(t,e)?t:e}function Ct(t){return function(e,n,r){if(e&&e.mergeDeepWith&&o(n))return e.mergeDeepWith(t,n);var i=t(e,n,r);return V(e,i)?e:i}}function Nt(t,e,n){return n=n.filter(function(t){return 0!==t.size}),0===n.length?t:0!==t.size||t.__ownerID||1!==n.length?t.withMutations(function(t){for(var r=e?function(n,r){t.update(r,gn,function(t){return t===gn?n:e(t,n,r)})}:function(e,n){t.set(n,e)},i=0;i<n.length;i++)n[i].forEach(r)}):t.constructor(n[0])}function jt(t,e,n,r){var i=t===gn,o=e.next();if(o.done){var u=i?n:t,a=r(u);return a===u?t:a}X(i||t&&t.set,"invalid keyPath");var s=o.value,c=i?gn:t.get(s,gn),l=jt(c,e,n,r);return l===c?t:l===gn?t.remove(s):(i?wt():t).set(s,l)}function At(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,127&(t+=t>>16)}function zt(t,e,n,r){var i=r?t:h(t);return i[e]=n,i}function Bt(t,e,n,r){var i=t.length+1;if(r&&e+1===i)return t[e]=n,t;for(var o=new Array(i),u=0,a=0;a<i;a++)a===e?(o[a]=n,u=-1):o[a]=t[a+u];return o}function Rt(t,e,n){var r=t.length-1;if(n&&e===r)return t.pop(),t;for(var i=new Array(r),o=0,u=0;u<r;u++)u===e&&(o=1),i[u]=t[u+o];return i}function Kt(t){var e=qt();if(null===t||void 0===t)return e;if(Pt(t))return t;var n=r(t),i=n.size;return 0===i?e:(lt(i),i>0&&i<dn?Yt(0,i,hn,null,new Ut(n.toArray())):e.withMutations(function(t){t.setSize(i),n.forEach(function(e,n){return t.set(n,e)})}))}function Pt(t){return!(!t||!t[Wn])}function Ut(t,e){this.array=t,this.ownerID=e}function Ft(t,e){function n(t,e,n){return 0===e?r(t,n):i(t,e,n)}function r(t,n){var r=n===a?s&&s.array:t&&t.array,i=n>o?0:o-n,c=u-n;return c>dn&&(c=dn),function(){if(i===c)return Vn;var t=e?--c:i++;return r&&r[t]}}function i(t,r,i){var a,s=t&&t.array,c=i>o?0:o-i>>r,l=1+(u-i>>r);return l>dn&&(l=dn),function(){for(;;){if(a){var t=a();if(t!==Vn)return t;a=null}if(c===l)return Vn;var o=e?--l:c++;a=n(s&&s[o],r-hn,i+(o<<r))}}}var o=t._origin,u=t._capacity,a=Zt(u),s=t._tail;return n(t._root,t._level,0)}function Yt(t,e,n,r,i,o,u){var a=Object.create(Qn);return a.size=e-t,a._origin=t,a._capacity=e,a._level=n,a._root=r,a._tail=i,a.__ownerID=o,a.__hash=u,a.__altered=!1,a}function qt(){return Gn||(Gn=Yt(0,0,hn))}function Ht(t,e,n){if((e=y(t,e))!==e)return t;if(e>=t.size||e<0)return t.withMutations(function(t){e<0?Vt(t,e).set(0,n):Vt(t,0,e+1).set(e,n)});e+=t._origin;var r=t._tail,i=t._root,o=l(_n);return e>=Zt(t._capacity)?r=Wt(r,t.__ownerID,0,e,n,o):i=Wt(i,t.__ownerID,t._level,e,n,o),o.value?t.__ownerID?(t._root=i,t._tail=r,t.__hash=void 0,t.__altered=!0,t):Yt(t._origin,t._capacity,t._level,i,r):t}function Wt(t,e,n,r,i,o){var u=r>>>n&yn,a=t&&u<t.array.length;if(!a&&void 0===i)return t;var s;if(n>0){var c=t&&t.array[u],l=Wt(c,e,n-hn,r,i,o);return l===c?t:(s=Qt(t,e),s.array[u]=l,s)}return a&&t.array[u]===i?t:(f(o),s=Qt(t,e),void 0===i&&u===s.array.length-1?s.array.pop():s.array[u]=i,s)}function Qt(t,e){return e&&t&&e===t.ownerID?t:new Ut(t?t.array.slice():[],e)}function Gt(t,e){if(e>=Zt(t._capacity))return t._tail;if(e<1<<t._level+hn){for(var n=t._root,r=t._level;n&&r>0;)n=n.array[e>>>r&yn],r-=hn;return n}}function Vt(t,e,n){void 0!==e&&(e|=0),void 0!==n&&(n|=0);var r=t.__ownerID||new p,i=t._origin,o=t._capacity,u=i+e,a=void 0===n?o:n<0?o+n:i+n;if(u===i&&a===o)return t;if(u>=a)return t.clear();for(var s=t._level,c=t._root,l=0;u+l<0;)c=new Ut(c&&c.array.length?[void 0,c]:[],r),s+=hn,l+=1<<s;l&&(u+=l,i+=l,a+=l,o+=l);for(var f=Zt(o),h=Zt(a);h>=1<<s+hn;)c=new Ut(c&&c.array.length?[c]:[],r),s+=hn;var d=t._tail,y=h<f?Gt(t,a-1):h>f?new Ut([],r):d;if(d&&h>f&&u<o&&d.array.length){c=Qt(c,r);for(var g=c,v=s;v>hn;v-=hn){var _=f>>>v&yn;g=g.array[_]=Qt(g.array[_],r)}g.array[f>>>hn&yn]=d}if(a<o&&(y=y&&y.removeAfter(r,0,a)),u>=h)u-=h,a-=h,s=hn,c=null,y=y&&y.removeBefore(r,0,u);else if(u>i||h<f){for(l=0;c;){var m=u>>>s&yn;if(m!==h>>>s&yn)break;m&&(l+=(1<<s)*m),s-=hn,c=c.array[m]}c&&u>i&&(c=c.removeBefore(r,s,u-l)),c&&h<f&&(c=c.removeAfter(r,s,h-l)),l&&(u-=l,a-=l)}return t.__ownerID?(t.size=a-u,t._origin=u,t._capacity=a,t._level=s,t._root=c,t._tail=y,t.__hash=void 0,t.__altered=!0,t):Yt(u,a,s,c,y)}function Jt(t,e,n){for(var i=[],u=0,a=0;a<n.length;a++){var s=n[a],c=r(s);c.size>u&&(u=c.size),o(s)||(c=c.map(function(t){return H(t)})),i.push(c)}return u>t.size&&(t=t.setSize(u)),Nt(t,e,i)}function Zt(t){return t<dn?0:t-1>>>hn<<hn}function Xt(t){return null===t||void 0===t?ee():$t(t)?t:ee().withMutations(function(e){var r=n(t);lt(r.size),r.forEach(function(t,n){return e.set(n,t)})})}function $t(t){return pt(t)&&c(t)}function te(t,e,n,r){var i=Object.create(Xt.prototype);return i.size=t?t.size:0,i._map=t,i._list=e,i.__ownerID=n,i.__hash=r,i}function ee(){return Jn||(Jn=te(wt(),qt()))}function ne(t,e,n){var r,i,o=t._map,u=t._list,a=o.get(e),s=void 0!==a;if(n===gn){if(!s)return t;u.size>=dn&&u.size>=2*o.size?(i=u.filter(function(t,e){return void 0!==t&&a!==e}),r=i.toKeyedSeq().map(function(t){return t[0]}).flip().toMap(),t.__ownerID&&(r.__ownerID=i.__ownerID=t.__ownerID)):(r=o.remove(e),i=a===u.size-1?u.pop():u.set(a,void 0))}else if(s){if(n===u.get(a)[1])return t;r=o,i=u.set(a,[e,n])}else r=o.set(e,u.size),i=u.set(u.size,[e,n]);return t.__ownerID?(t.size=r.size,t._map=r,t._list=i,t.__hash=void 0,t):te(r,i)}function re(t,e){this._iter=t,this._useKeys=e,this.size=t.size}function ie(t){this._iter=t,this.size=t.size}function oe(t){this._iter=t,this.size=t.size}function ue(t){this._iter=t,this.size=t.size}function ae(t){var e=Le(t);return e._iter=t,e.size=t.size,e.flip=function(){return t},e.reverse=function(){var e=t.reverse.apply(this);return e.flip=function(){return t.reverse()},e},e.has=function(e){return t.includes(e)},e.includes=function(e){return t.has(e)},e.cacheResult=Te,e.__iterateUncached=function(e,n){var r=this;return t.__iterate(function(t,n){return!1!==e(n,t,r)},n)},e.__iteratorUncached=function(e,n){if(e===bn){var r=t.__iterator(e,n);return new b(function(){var t=r.next();if(!t.done){var e=t.value[0];t.value[0]=t.value[1],t.value[1]=e}return t})}return t.__iterator(e===Sn?mn:Sn,n)},e}function se(t,e,n){var r=Le(t);return r.size=t.size,r.has=function(e){return t.has(e)},r.get=function(r,i){var o=t.get(r,gn);return o===gn?i:e.call(n,o,r,t)},r.__iterateUncached=function(r,i){var o=this;return t.__iterate(function(t,i,u){return!1!==r(e.call(n,t,i,u),i,o)},i)},r.__iteratorUncached=function(r,i){var o=t.__iterator(bn,i);return new b(function(){var i=o.next();if(i.done)return i;var u=i.value,a=u[0];return w(r,a,e.call(n,u[1],a,t),i)})},r}function ce(t,e){var n=Le(t);return n._iter=t,n.size=t.size,n.reverse=function(){return t},t.flip&&(n.flip=function(){var e=ae(t);return e.reverse=function(){return t.flip()},e}),n.get=function(n,r){return t.get(e?n:-1-n,r)},n.has=function(n){return t.has(e?n:-1-n)},n.includes=function(e){return t.includes(e)},n.cacheResult=Te,n.__iterate=function(e,n){var r=this;return t.__iterate(function(t,n){return e(t,n,r)},!n)},n.__iterator=function(e,n){return t.__iterator(e,!n)},n}function le(t,e,n,r){var i=Le(t);return r&&(i.has=function(r){var i=t.get(r,gn);return i!==gn&&!!e.call(n,i,r,t)},i.get=function(r,i){var o=t.get(r,gn);return o!==gn&&e.call(n,o,r,t)?o:i}),i.__iterateUncached=function(i,o){var u=this,a=0;return t.__iterate(function(t,o,s){if(e.call(n,t,o,s))return a++,i(t,r?o:a-1,u)},o),a},i.__iteratorUncached=function(i,o){var u=t.__iterator(bn,o),a=0;return new b(function(){for(;;){var o=u.next();if(o.done)return o;var s=o.value,c=s[0],l=s[1];if(e.call(n,l,c,t))return w(i,r?c:a++,l,o)}})},i}function fe(t,e,n){var r=ft().asMutable();return t.__iterate(function(i,o){r.update(e.call(n,i,o,t),0,function(t){return t+1})}),r.asImmutable()}function pe(t,e,n){var r=u(t),i=(c(t)?Xt():ft()).asMutable();t.__iterate(function(o,u){i.update(e.call(n,o,u,t),function(t){return t=t||[],t.push(r?[u,o]:o),t})});var o=Ie(t);return i.map(function(e){return Ee(t,o(e))})}function he(t,e,n,r){var i=t.size;if(void 0!==e&&(e|=0),void 0!==n&&(n===1/0?n=i:n|=0),v(e,n,i))return t;var o=_(e,i),u=m(n,i);if(o!==o||u!==u)return he(t.toSeq().cacheResult(),e,n,r);var a,s=u-o;s===s&&(a=s<0?0:s);var c=Le(t);return c.size=0===a?a:t.size&&a||void 0,!r&&B(t)&&a>=0&&(c.get=function(e,n){return e=y(this,e),e>=0&&e<a?t.get(e+o,n):n}),c.__iterateUncached=function(e,n){var i=this;if(0===a)return 0;if(n)return this.cacheResult().__iterate(e,n);var u=0,s=!0,c=0;return t.__iterate(function(t,n){if(!s||!(s=u++<o))return c++,!1!==e(t,r?n:c-1,i)&&c!==a}),c},c.__iteratorUncached=function(e,n){if(0!==a&&n)return this.cacheResult().__iterator(e,n);var i=0!==a&&t.__iterator(e,n),u=0,s=0;return new b(function(){for(;u++<o;)i.next();if(++s>a)return M();var t=i.next();return r||e===Sn?t:e===mn?w(e,s-1,void 0,t):w(e,s-1,t.value[1],t)})},c}function de(t,e,n){var r=Le(t);return r.__iterateUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterate(r,i);var u=0;return t.__iterate(function(t,i,a){return e.call(n,t,i,a)&&++u&&r(t,i,o)}),u},r.__iteratorUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterator(r,i);var u=t.__iterator(bn,i),a=!0;return new b(function(){if(!a)return M();var t=u.next();if(t.done)return t;var i=t.value,s=i[0],c=i[1];return e.call(n,c,s,o)?r===bn?t:w(r,s,c,t):(a=!1,M())})},r}function ye(t,e,n,r){var i=Le(t);return i.__iterateUncached=function(i,o){var u=this;if(o)return this.cacheResult().__iterate(i,o);var a=!0,s=0;return t.__iterate(function(t,o,c){if(!a||!(a=e.call(n,t,o,c)))return s++,i(t,r?o:s-1,u)}),s},i.__iteratorUncached=function(i,o){var u=this;if(o)return this.cacheResult().__iterator(i,o);var a=t.__iterator(bn,o),s=!0,c=0;return new b(function(){var t,o,l;do{if(t=a.next(),t.done)return r||i===Sn?t:i===mn?w(i,c++,void 0,t):w(i,c++,t.value[1],t);var f=t.value;o=f[0],l=f[1],s&&(s=e.call(n,l,o,u))}while(s);return i===bn?t:w(i,o,l,t)})},i}function ge(t,e){var r=u(t),i=[t].concat(e).map(function(t){return o(t)?r&&(t=n(t)):t=r?K(t):P(Array.isArray(t)?t:[t]),t}).filter(function(t){return 0!==t.size});if(0===i.length)return t;if(1===i.length){var s=i[0];if(s===t||r&&u(s)||a(t)&&a(s))return s}var c=new N(i);return r?c=c.toKeyedSeq():a(t)||(c=c.toSetSeq()),c=c.flatten(!0),c.size=i.reduce(function(t,e){if(void 0!==t){var n=e.size;if(void 0!==n)return t+n}},0),c}function ve(t,e,n){var r=Le(t);return r.__iterateUncached=function(r,i){function u(t,c){var l=this;t.__iterate(function(t,i){return(!e||c<e)&&o(t)?u(t,c+1):!1===r(t,n?i:a++,l)&&(s=!0),!s},i)}var a=0,s=!1;return u(t,0),a},r.__iteratorUncached=function(r,i){var u=t.__iterator(r,i),a=[],s=0;return new b(function(){for(;u;){var t=u.next();if(!1===t.done){var c=t.value;if(r===bn&&(c=c[1]),e&&!(a.length<e)||!o(c))return n?t:w(r,s++,c,t);a.push(u),u=c.__iterator(r,i)}else u=a.pop()}return M()})},r}function _e(t,e,n){var r=Ie(t);return t.toSeq().map(function(i,o){return r(e.call(n,i,o,t))}).flatten(!0)}function me(t,e){var n=Le(t);return n.size=t.size&&2*t.size-1,n.__iterateUncached=function(n,r){var i=this,o=0;return t.__iterate(function(t,r){return(!o||!1!==n(e,o++,i))&&!1!==n(t,o++,i)},r),o},n.__iteratorUncached=function(n,r){var i,o=t.__iterator(Sn,r),u=0;return new b(function(){return(!i||u%2)&&(i=o.next(),i.done)?i:u%2?w(n,u++,e):w(n,u++,i.value,i)})},n}function Se(t,e,n){e||(e=De);var r=u(t),i=0,o=t.toSeq().map(function(e,r){return[r,e,i++,n?n(e,r,t):e]}).toArray();return o.sort(function(t,n){return e(t[3],n[3])||t[2]-n[2]}).forEach(r?function(t,e){o[e].length=2}:function(t,e){o[e]=t[1]}),r?D(o):a(t)?O(o):C(o)}function be(t,e,n){if(e||(e=De),n){var r=t.toSeq().map(function(e,r){return[e,n(e,r,t)]}).reduce(function(t,n){return we(e,t[1],n[1])?n:t});return r&&r[0]}return t.reduce(function(t,n){return we(e,t,n)?n:t})}function we(t,e,n){var r=t(n,e);return 0===r&&n!==e&&(void 0===n||null===n||n!==n)||r>0}function Me(t,n,r){var i=Le(t);return i.size=new N(r).map(function(t){return t.size}).min(),i.__iterate=function(t,e){for(var n,r=this.__iterator(Sn,e),i=0;!(n=r.next()).done&&!1!==t(n.value,i++,this););return i},i.__iteratorUncached=function(t,i){var o=r.map(function(t){return t=e(t),k(i?t.reverse():t)}),u=0,a=!1;return new b(function(){var e;return a||(e=o.map(function(t){return t.next()}),a=e.some(function(t){return t.done})),a?M():w(t,u++,n.apply(null,e.map(function(t){return t.value})))})},i}function Ee(t,e){return B(t)?e:t.constructor(e)}function xe(t){if(t!==Object(t))throw new TypeError("Expected [K, V] tuple: "+t)}function ke(t){return lt(t.size),d(t)}function Ie(t){return u(t)?n:a(t)?r:i}function Le(t){return Object.create((u(t)?D:a(t)?O:C).prototype)}function Te(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):T.prototype.cacheResult.call(this)}function De(t,e){return t>e?1:t<e?-1:0}function Oe(t){var n=k(t);if(!n){if(!L(t))throw new TypeError("Expected iterable or array-like: "+t);n=k(e(t))}return n}function Ce(t,e){var n,r=function(o){if(o instanceof r)return o;if(!(this instanceof r))return new r(o);if(!n){n=!0;var u=Object.keys(t);Ae(i,u),i.size=u.length,i._name=e,i._keys=u,i._defaultValues=t}this._map=ft(o)},i=r.prototype=Object.create(Zn);return i.constructor=r,r}function Ne(t,e,n){var r=Object.create(Object.getPrototypeOf(t));return r._map=e,r.__ownerID=n,r}function je(t){return t._name||t.constructor.name||"Record"}function Ae(t,e){try{e.forEach(ze.bind(void 0,t))}catch(t){}}function ze(t,e){Object.defineProperty(t,e,{get:function(){return this.get(e)},set:function(t){X(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}function Be(t){return null===t||void 0===t?Ue():Re(t)&&!c(t)?t:Ue().withMutations(function(e){var n=i(t);lt(n.size),n.forEach(function(t){return e.add(t)})})}function Re(t){return!(!t||!t[Xn])}function Ke(t,e){return t.__ownerID?(t.size=e.size,t._map=e,t):e===t._map?t:0===e.size?t.__empty():t.__make(e)}function Pe(t,e){var n=Object.create($n);return n.size=t?t.size:0,n._map=t,n.__ownerID=e,n}function Ue(){return tr||(tr=Pe(wt()))}function Fe(t){return null===t||void 0===t?He():Ye(t)?t:He().withMutations(function(e){var n=i(t);lt(n.size),n.forEach(function(t){return e.add(t)})})}function Ye(t){return Re(t)&&c(t)}function qe(t,e){var n=Object.create(er);return n.size=t?t.size:0,n._map=t,n.__ownerID=e,n}function He(){return nr||(nr=qe(ee()))}function We(t){return null===t||void 0===t?Ve():Qe(t)?t:Ve().unshiftAll(t)}function Qe(t){return!(!t||!t[rr])}function Ge(t,e,n,r){var i=Object.create(ir);return i.size=t,i._head=e,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function Ve(){return or||(or=Ge(0))}function Je(t,e){var n=function(n){t.prototype[n]=e[n]};return Object.keys(e).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach(n),t}function Ze(t,e){return e}function Xe(t,e){return[e,t]}function $e(t){return function(){return!t.apply(this,arguments)}}function tn(t){return function(){return-t.apply(this,arguments)}}function en(t){return"string"==typeof t?JSON.stringify(t):String(t)}function nn(){return h(arguments)}function rn(t,e){return t<e?1:t>e?-1:0}function on(t){if(t.size===1/0)return 0;var e=c(t),n=u(t),r=e?1:0;return un(t.__iterate(n?e?function(t,e){r=31*r+an(ot(t),ot(e))|0}:function(t,e){r=r+an(ot(t),ot(e))|0}:e?function(t){r=31*r+ot(t)|0}:function(t){r=r+ot(t)|0}),r)}function un(t,e){return e=Dn(e,3432918353),e=Dn(e<<15|e>>>-15,461845907),e=Dn(e<<13|e>>>-13,5),e=(e+3864292196|0)^t,e=Dn(e^e>>>16,2246822507),e=Dn(e^e>>>13,3266489909),e=it(e^e>>>16)}function an(t,e){return t^e+2654435769+(t<<6)+(t>>2)|0}var sn=Array.prototype.slice;t(n,e),t(r,e),t(i,e),e.isIterable=o,e.isKeyed=u,e.isIndexed=a,e.isAssociative=s,e.isOrdered=c,e.Keyed=n,e.Indexed=r,e.Set=i;var cn="@@__IMMUTABLE_ITERABLE__@@",ln="@@__IMMUTABLE_KEYED__@@",fn="@@__IMMUTABLE_INDEXED__@@",pn="@@__IMMUTABLE_ORDERED__@@",hn=5,dn=1<<hn,yn=dn-1,gn={},vn={value:!1},_n={value:!1},mn=0,Sn=1,bn=2,wn="function"==typeof Symbol&&Symbol.iterator,Mn="@@iterator",En=wn||Mn;b.prototype.toString=function(){return"[Iterator]"},b.KEYS=mn,b.VALUES=Sn,b.ENTRIES=bn,b.prototype.inspect=b.prototype.toSource=function(){return this.toString()},b.prototype[En]=function(){return this},t(T,e),T.of=function(){return T(arguments)},T.prototype.toSeq=function(){return this},T.prototype.toString=function(){return this.__toString("Seq {","}")},T.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},T.prototype.__iterate=function(t,e){return Y(this,t,e,!0)},T.prototype.__iterator=function(t,e){return q(this,t,e,!0)},t(D,T),D.prototype.toKeyedSeq=function(){return this},t(O,T),O.of=function(){return O(arguments)},O.prototype.toIndexedSeq=function(){return this},O.prototype.toString=function(){return this.__toString("Seq [","]")},O.prototype.__iterate=function(t,e){return Y(this,t,e,!1)},O.prototype.__iterator=function(t,e){return q(this,t,e,!1)},t(C,T),C.of=function(){return C(arguments)},C.prototype.toSetSeq=function(){return this},T.isSeq=B,T.Keyed=D,T.Set=C,T.Indexed=O;var xn="@@__IMMUTABLE_SEQ__@@";T.prototype[xn]=!0,t(N,O),N.prototype.get=function(t,e){return this.has(t)?this._array[y(this,t)]:e},N.prototype.__iterate=function(t,e){for(var n=this._array,r=n.length-1,i=0;i<=r;i++)if(!1===t(n[e?r-i:i],i,this))return i+1;return i},N.prototype.__iterator=function(t,e){var n=this._array,r=n.length-1,i=0;return new b(function(){return i>r?M():w(t,i,n[e?r-i++:i++])})},t(j,D),j.prototype.get=function(t,e){return void 0===e||this.has(t)?this._object[t]:e},j.prototype.has=function(t){return this._object.hasOwnProperty(t)},j.prototype.__iterate=function(t,e){for(var n=this._object,r=this._keys,i=r.length-1,o=0;o<=i;o++){var u=r[e?i-o:o];if(!1===t(n[u],u,this))return o+1}return o},j.prototype.__iterator=function(t,e){var n=this._object,r=this._keys,i=r.length-1,o=0;return new b(function(){var u=r[e?i-o:o];return o++>i?M():w(t,u,n[u])})},j.prototype[pn]=!0,t(A,O),A.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);var n=this._iterable,r=k(n),i=0;if(x(r))for(var o;!(o=r.next()).done&&!1!==t(o.value,i++,this););return i},A.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var n=this._iterable,r=k(n);if(!x(r))return new b(M);var i=0;return new b(function(){var e=r.next();return e.done?e:w(t,i++,e.value)})},t(z,O),z.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);for(var n=this._iterator,r=this._iteratorCache,i=0;i<r.length;)if(!1===t(r[i],i++,this))return i;for(var o;!(o=n.next()).done;){var u=o.value;if(r[i]=u,!1===t(u,i++,this))break}return i},z.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var n=this._iterator,r=this._iteratorCache,i=0;return new b(function(){if(i>=r.length){var e=n.next();if(e.done)return e;r[i]=e.value}return w(t,i,r[i++])})};var kn;t(Z,O),Z.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},Z.prototype.get=function(t,e){return this.has(t)?this._value:e},Z.prototype.includes=function(t){return V(this._value,t)},Z.prototype.slice=function(t,e){var n=this.size;return v(t,e,n)?this:new Z(this._value,m(e,n)-_(t,n))},Z.prototype.reverse=function(){return this},Z.prototype.indexOf=function(t){return V(this._value,t)?0:-1},Z.prototype.lastIndexOf=function(t){return V(this._value,t)?this.size:-1},Z.prototype.__iterate=function(t,e){for(var n=0;n<this.size;n++)if(!1===t(this._value,n,this))return n+1;return n},Z.prototype.__iterator=function(t,e){var n=this,r=0;return new b(function(){return r<n.size?w(t,r++,n._value):M()})},Z.prototype.equals=function(t){return t instanceof Z?V(this._value,t._value):J(t)};var In;t($,O),$.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},$.prototype.get=function(t,e){return this.has(t)?this._start+y(this,t)*this._step:e},$.prototype.includes=function(t){var e=(t-this._start)/this._step;return e>=0&&e<this.size&&e===Math.floor(e)},$.prototype.slice=function(t,e){return v(t,e,this.size)?this:(t=_(t,this.size),e=m(e,this.size),e<=t?new $(0,0):new $(this.get(t,this._end),this.get(e,this._end),this._step))},$.prototype.indexOf=function(t){var e=t-this._start;if(e%this._step==0){var n=e/this._step;if(n>=0&&n<this.size)return n}return-1},$.prototype.lastIndexOf=function(t){return this.indexOf(t)},$.prototype.__iterate=function(t,e){for(var n=this.size-1,r=this._step,i=e?this._start+n*r:this._start,o=0;o<=n;o++){if(!1===t(i,o,this))return o+1;i+=e?-r:r}return o},$.prototype.__iterator=function(t,e){var n=this.size-1,r=this._step,i=e?this._start+n*r:this._start,o=0;return new b(function(){var u=i;return i+=e?-r:r,o>n?M():w(t,o++,u)})},$.prototype.equals=function(t){return t instanceof $?this._start===t._start&&this._end===t._end&&this._step===t._step:J(this,t)};var Ln;t(tt,e),t(et,tt),t(nt,tt),t(rt,tt),tt.Keyed=et,tt.Indexed=nt,tt.Set=rt;var Tn,Dn="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(t,e){t|=0,e|=0;var n=65535&t,r=65535&e;return n*r+((t>>>16)*r+n*(e>>>16)<<16>>>0)|0},On=Object.isExtensible,Cn=function(){try{return Object.defineProperty({},"@",{}),!0}catch(t){return!1}}(),Nn="function"==typeof WeakMap;Nn&&(Tn=new WeakMap);var jn=0,An="__immutablehash__";"function"==typeof Symbol&&(An=Symbol(An));var zn=16,Bn=255,Rn=0,Kn={};t(ft,et),ft.of=function(){var t=sn.call(arguments,0);return wt().withMutations(function(e){for(var n=0;n<t.length;n+=2){if(n+1>=t.length)throw new Error("Missing value for key: "+t[n]);e.set(t[n],t[n+1])}})},ft.prototype.toString=function(){return this.__toString("Map {","}")},ft.prototype.get=function(t,e){return this._root?this._root.get(0,void 0,t,e):e},ft.prototype.set=function(t,e){return Mt(this,t,e)},ft.prototype.setIn=function(t,e){return this.updateIn(t,gn,function(){return e})},ft.prototype.remove=function(t){return Mt(this,t,gn)},ft.prototype.deleteIn=function(t){return this.updateIn(t,function(){return gn})},ft.prototype.update=function(t,e,n){return 1===arguments.length?t(this):this.updateIn([t],e,n)},ft.prototype.updateIn=function(t,e,n){n||(n=e,e=void 0);var r=jt(this,Oe(t),e,n);return r===gn?void 0:r},ft.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):wt()},ft.prototype.merge=function(){return Dt(this,void 0,arguments)},ft.prototype.mergeWith=function(t){return Dt(this,t,sn.call(arguments,1))},ft.prototype.mergeIn=function(t){var e=sn.call(arguments,1);return this.updateIn(t,wt(),function(t){return"function"==typeof t.merge?t.merge.apply(t,e):e[e.length-1]})},ft.prototype.mergeDeep=function(){return Dt(this,Ot,arguments)},ft.prototype.mergeDeepWith=function(t){var e=sn.call(arguments,1);return Dt(this,Ct(t),e)},ft.prototype.mergeDeepIn=function(t){var e=sn.call(arguments,1);return this.updateIn(t,wt(),function(t){return"function"==typeof t.mergeDeep?t.mergeDeep.apply(t,e):e[e.length-1]})},ft.prototype.sort=function(t){return Xt(Se(this,t))},ft.prototype.sortBy=function(t,e){return Xt(Se(this,e,t))},ft.prototype.withMutations=function(t){var e=this.asMutable();return t(e),e.wasAltered()?e.__ensureOwner(this.__ownerID):this},ft.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new p)},ft.prototype.asImmutable=function(){return this.__ensureOwner()},ft.prototype.wasAltered=function(){return this.__altered},ft.prototype.__iterator=function(t,e){return new _t(this,t,e)},ft.prototype.__iterate=function(t,e){var n=this,r=0;return this._root&&this._root.iterate(function(e){return r++,t(e[1],e[0],n)},e),r},ft.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?bt(this.size,this._root,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},ft.isMap=pt;var Pn="@@__IMMUTABLE_MAP__@@",Un=ft.prototype;Un[Pn]=!0,Un.delete=Un.remove,Un.removeIn=Un.deleteIn,ht.prototype.get=function(t,e,n,r){for(var i=this.entries,o=0,u=i.length;o<u;o++)if(V(n,i[o][0]))return i[o][1];return r},ht.prototype.update=function(t,e,n,r,i,o,u){for(var a=i===gn,s=this.entries,c=0,l=s.length;c<l&&!V(r,s[c][0]);c++);var p=c<l;if(p?s[c][1]===i:a)return this;if(f(u),(a||!p)&&f(o),!a||1!==s.length){if(!p&&!a&&s.length>=Yn)return It(t,s,r,i);var d=t&&t===this.ownerID,y=d?s:h(s);return p?a?c===l-1?y.pop():y[c]=y.pop():y[c]=[r,i]:y.push([r,i]),d?(this.entries=y,this):new ht(t,y)}},dt.prototype.get=function(t,e,n,r){void 0===e&&(e=ot(n));var i=1<<((0===t?e:e>>>t)&yn),o=this.bitmap;return 0==(o&i)?r:this.nodes[At(o&i-1)].get(t+hn,e,n,r)},dt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=(0===e?n:n>>>e)&yn,s=1<<a,c=this.bitmap,l=0!=(c&s);if(!l&&i===gn)return this;var f=At(c&s-1),p=this.nodes,h=l?p[f]:void 0,d=Et(h,t,e+hn,n,r,i,o,u);if(d===h)return this;if(!l&&d&&p.length>=qn)return Tt(t,p,c,a,d);if(l&&!d&&2===p.length&&xt(p[1^f]))return p[1^f];if(l&&d&&1===p.length&&xt(d))return d;var y=t&&t===this.ownerID,g=l?d?c:c^s:c|s,v=l?d?zt(p,f,d,y):Rt(p,f,y):Bt(p,f,d,y);return y?(this.bitmap=g,this.nodes=v,this):new dt(t,g,v)},yt.prototype.get=function(t,e,n,r){void 0===e&&(e=ot(n));var i=(0===t?e:e>>>t)&yn,o=this.nodes[i];return o?o.get(t+hn,e,n,r):r},yt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=(0===e?n:n>>>e)&yn,s=i===gn,c=this.nodes,l=c[a];if(s&&!l)return this;var f=Et(l,t,e+hn,n,r,i,o,u);if(f===l)return this;var p=this.count;if(l){if(!f&&--p<Hn)return Lt(t,c,p,a)}else p++;var h=t&&t===this.ownerID,d=zt(c,a,f,h);return h?(this.count=p,this.nodes=d,this):new yt(t,p,d)},gt.prototype.get=function(t,e,n,r){for(var i=this.entries,o=0,u=i.length;o<u;o++)if(V(n,i[o][0]))return i[o][1];return r},gt.prototype.update=function(t,e,n,r,i,o,u){void 0===n&&(n=ot(r));var a=i===gn;if(n!==this.keyHash)return a?this:(f(u),f(o),kt(this,t,e,n,[r,i]));for(var s=this.entries,c=0,l=s.length;c<l&&!V(r,s[c][0]);c++);var p=c<l;if(p?s[c][1]===i:a)return this;if(f(u),(a||!p)&&f(o),a&&2===l)return new vt(t,this.keyHash,s[1^c]);var d=t&&t===this.ownerID,y=d?s:h(s);return p?a?c===l-1?y.pop():y[c]=y.pop():y[c]=[r,i]:y.push([r,i]),d?(this.entries=y,this):new gt(t,this.keyHash,y)},vt.prototype.get=function(t,e,n,r){return V(n,this.entry[0])?this.entry[1]:r},vt.prototype.update=function(t,e,n,r,i,o,u){var a=i===gn,s=V(r,this.entry[0]);return(s?i===this.entry[1]:a)?this:(f(u),a?void f(o):s?t&&t===this.ownerID?(this.entry[1]=i,this):new vt(t,this.keyHash,[r,i]):(f(o),kt(this,t,e,ot(r),[r,i])))},ht.prototype.iterate=gt.prototype.iterate=function(t,e){for(var n=this.entries,r=0,i=n.length-1;r<=i;r++)if(!1===t(n[e?i-r:r]))return!1},dt.prototype.iterate=yt.prototype.iterate=function(t,e){for(var n=this.nodes,r=0,i=n.length-1;r<=i;r++){var o=n[e?i-r:r];if(o&&!1===o.iterate(t,e))return!1}},vt.prototype.iterate=function(t,e){return t(this.entry)},t(_t,b),_t.prototype.next=function(){for(var t=this._type,e=this._stack;e;){var n,r=e.node,i=e.index++;if(r.entry){if(0===i)return mt(t,r.entry)}else if(r.entries){if(n=r.entries.length-1,i<=n)return mt(t,r.entries[this._reverse?n-i:i])}else if(n=r.nodes.length-1,i<=n){var o=r.nodes[this._reverse?n-i:i];if(o){if(o.entry)return mt(t,o.entry);e=this._stack=St(o,e)}continue}e=this._stack=this._stack.__prev}return M()};var Fn,Yn=dn/4,qn=dn/2,Hn=dn/4;t(Kt,nt),Kt.of=function(){return this(arguments)},Kt.prototype.toString=function(){return this.__toString("List [","]")},Kt.prototype.get=function(t,e){if((t=y(this,t))>=0&&t<this.size){t+=this._origin;var n=Gt(this,t);return n&&n.array[t&yn]}return e},Kt.prototype.set=function(t,e){return Ht(this,t,e)},Kt.prototype.remove=function(t){return this.has(t)?0===t?this.shift():t===this.size-1?this.pop():this.splice(t,1):this},Kt.prototype.insert=function(t,e){return this.splice(t,0,e)},Kt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=hn,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):qt()},Kt.prototype.push=function(){var t=arguments,e=this.size;return this.withMutations(function(n){Vt(n,0,e+t.length);for(var r=0;r<t.length;r++)n.set(e+r,t[r])})},Kt.prototype.pop=function(){return Vt(this,0,-1)},Kt.prototype.unshift=function(){var t=arguments;return this.withMutations(function(e){Vt(e,-t.length);for(var n=0;n<t.length;n++)e.set(n,t[n])})},Kt.prototype.shift=function(){return Vt(this,1)},Kt.prototype.merge=function(){return Jt(this,void 0,arguments)},Kt.prototype.mergeWith=function(t){return Jt(this,t,sn.call(arguments,1))},Kt.prototype.mergeDeep=function(){return Jt(this,Ot,arguments)},Kt.prototype.mergeDeepWith=function(t){var e=sn.call(arguments,1);return Jt(this,Ct(t),e)},Kt.prototype.setSize=function(t){return Vt(this,0,t)},Kt.prototype.slice=function(t,e){var n=this.size;return v(t,e,n)?this:Vt(this,_(t,n),m(e,n))},Kt.prototype.__iterator=function(t,e){var n=0,r=Ft(this,e);return new b(function(){var e=r();return e===Vn?M():w(t,n++,e)})},Kt.prototype.__iterate=function(t,e){for(var n,r=0,i=Ft(this,e);(n=i())!==Vn&&!1!==t(n,r++,this););return r},Kt.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Yt(this._origin,this._capacity,this._level,this._root,this._tail,t,this.__hash):(this.__ownerID=t,this)},Kt.isList=Pt;var Wn="@@__IMMUTABLE_LIST__@@",Qn=Kt.prototype;Qn[Wn]=!0,Qn.delete=Qn.remove,Qn.setIn=Un.setIn,Qn.deleteIn=Qn.removeIn=Un.removeIn,Qn.update=Un.update,Qn.updateIn=Un.updateIn,Qn.mergeIn=Un.mergeIn,Qn.mergeDeepIn=Un.mergeDeepIn,Qn.withMutations=Un.withMutations,Qn.asMutable=Un.asMutable,Qn.asImmutable=Un.asImmutable,Qn.wasAltered=Un.wasAltered,Ut.prototype.removeBefore=function(t,e,n){if(n===e?1<<e:0===this.array.length)return this;var r=n>>>e&yn;if(r>=this.array.length)return new Ut([],t);var i,o=0===r;if(e>0){var u=this.array[r];if((i=u&&u.removeBefore(t,e-hn,n))===u&&o)return this}if(o&&!i)return this;var a=Qt(this,t);if(!o)for(var s=0;s<r;s++)a.array[s]=void 0;return i&&(a.array[r]=i),a},Ut.prototype.removeAfter=function(t,e,n){if(n===(e?1<<e:0)||0===this.array.length)return this;var r=n-1>>>e&yn;if(r>=this.array.length)return this;var i;if(e>0){var o=this.array[r];if((i=o&&o.removeAfter(t,e-hn,n))===o&&r===this.array.length-1)return this}var u=Qt(this,t);return u.array.splice(r+1),i&&(u.array[r]=i),u};var Gn,Vn={};t(Xt,ft),Xt.of=function(){return this(arguments)},Xt.prototype.toString=function(){return this.__toString("OrderedMap {","}")},Xt.prototype.get=function(t,e){var n=this._map.get(t);return void 0!==n?this._list.get(n)[1]:e},Xt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):ee()},Xt.prototype.set=function(t,e){return ne(this,t,e)},Xt.prototype.remove=function(t){return ne(this,t,gn)},Xt.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},Xt.prototype.__iterate=function(t,e){var n=this;return this._list.__iterate(function(e){return e&&t(e[1],e[0],n)},e)},Xt.prototype.__iterator=function(t,e){return this._list.fromEntrySeq().__iterator(t,e)},Xt.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t),n=this._list.__ensureOwner(t);return t?te(e,n,t,this.__hash):(this.__ownerID=t,this._map=e,this._list=n,this)},Xt.isOrderedMap=$t,Xt.prototype[pn]=!0,Xt.prototype.delete=Xt.prototype.remove;var Jn;t(re,D),re.prototype.get=function(t,e){return this._iter.get(t,e)},re.prototype.has=function(t){return this._iter.has(t)},re.prototype.valueSeq=function(){return this._iter.valueSeq()},re.prototype.reverse=function(){var t=this,e=ce(this,!0);return this._useKeys||(e.valueSeq=function(){return t._iter.toSeq().reverse()}),e},re.prototype.map=function(t,e){var n=this,r=se(this,t,e);return this._useKeys||(r.valueSeq=function(){return n._iter.toSeq().map(t,e)}),r},re.prototype.__iterate=function(t,e){var n,r=this;return this._iter.__iterate(this._useKeys?function(e,n){return t(e,n,r)}:(n=e?ke(this):0,function(i){return t(i,e?--n:n++,r)}),e)},re.prototype.__iterator=function(t,e){if(this._useKeys)return this._iter.__iterator(t,e);var n=this._iter.__iterator(Sn,e),r=e?ke(this):0;return new b(function(){var i=n.next();return i.done?i:w(t,e?--r:r++,i.value,i)})},re.prototype[pn]=!0,t(ie,O),ie.prototype.includes=function(t){return this._iter.includes(t)},ie.prototype.__iterate=function(t,e){var n=this,r=0;return this._iter.__iterate(function(e){return t(e,r++,n)},e)},ie.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e),r=0;return new b(function(){var e=n.next();return e.done?e:w(t,r++,e.value,e)})},t(oe,C),oe.prototype.has=function(t){return this._iter.includes(t)},oe.prototype.__iterate=function(t,e){var n=this;return this._iter.__iterate(function(e){return t(e,e,n)},e)},oe.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e);return new b(function(){var e=n.next();return e.done?e:w(t,e.value,e.value,e)})},t(ue,D),ue.prototype.entrySeq=function(){return this._iter.toSeq()},ue.prototype.__iterate=function(t,e){var n=this;return this._iter.__iterate(function(e){if(e){xe(e);var r=o(e);return t(r?e.get(1):e[1],r?e.get(0):e[0],n)}},e)},ue.prototype.__iterator=function(t,e){var n=this._iter.__iterator(Sn,e);return new b(function(){for(;;){var e=n.next();if(e.done)return e;var r=e.value;if(r){xe(r);var i=o(r);return w(t,i?r.get(0):r[0],i?r.get(1):r[1],e)}}})},ie.prototype.cacheResult=re.prototype.cacheResult=oe.prototype.cacheResult=ue.prototype.cacheResult=Te,t(Ce,et),Ce.prototype.toString=function(){return this.__toString(je(this)+" {","}")},Ce.prototype.has=function(t){return this._defaultValues.hasOwnProperty(t)},Ce.prototype.get=function(t,e){if(!this.has(t))return e;var n=this._defaultValues[t];return this._map?this._map.get(t,n):n},Ce.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var t=this.constructor;return t._empty||(t._empty=Ne(this,wt()))},Ce.prototype.set=function(t,e){if(!this.has(t))throw new Error('Cannot set unknown key "'+t+'" on '+je(this));if(this._map&&!this._map.has(t)&&e===this._defaultValues[t])return this;var n=this._map&&this._map.set(t,e);return this.__ownerID||n===this._map?this:Ne(this,n)},Ce.prototype.remove=function(t){if(!this.has(t))return this;var e=this._map&&this._map.remove(t);return this.__ownerID||e===this._map?this:Ne(this,e)},Ce.prototype.wasAltered=function(){return this._map.wasAltered()},Ce.prototype.__iterator=function(t,e){var r=this;return n(this._defaultValues).map(function(t,e){return r.get(e)}).__iterator(t,e)},Ce.prototype.__iterate=function(t,e){var r=this;return n(this._defaultValues).map(function(t,e){return r.get(e)}).__iterate(t,e)},Ce.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?Ne(this,e,t):(this.__ownerID=t,this._map=e,this)};var Zn=Ce.prototype;Zn.delete=Zn.remove,Zn.deleteIn=Zn.removeIn=Un.removeIn,Zn.merge=Un.merge,Zn.mergeWith=Un.mergeWith,Zn.mergeIn=Un.mergeIn,Zn.mergeDeep=Un.mergeDeep,Zn.mergeDeepWith=Un.mergeDeepWith,Zn.mergeDeepIn=Un.mergeDeepIn,Zn.setIn=Un.setIn,Zn.update=Un.update,Zn.updateIn=Un.updateIn,Zn.withMutations=Un.withMutations,Zn.asMutable=Un.asMutable,Zn.asImmutable=Un.asImmutable,t(Be,rt),Be.of=function(){return this(arguments)},Be.fromKeys=function(t){return this(n(t).keySeq())},Be.prototype.toString=function(){return this.__toString("Set {","}")},Be.prototype.has=function(t){return this._map.has(t)},Be.prototype.add=function(t){return Ke(this,this._map.set(t,!0))},Be.prototype.remove=function(t){return Ke(this,this._map.remove(t))},Be.prototype.clear=function(){return Ke(this,this._map.clear())},Be.prototype.union=function(){var t=sn.call(arguments,0);return t=t.filter(function(t){return 0!==t.size}),0===t.length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations(function(e){for(var n=0;n<t.length;n++)i(t[n]).forEach(function(t){return e.add(t)})}):this.constructor(t[0])},Be.prototype.intersect=function(){var t=sn.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(n){e.forEach(function(e){t.every(function(t){return t.includes(e)})||n.remove(e)})})},Be.prototype.subtract=function(){var t=sn.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(n){e.forEach(function(e){t.some(function(t){return t.includes(e)})&&n.remove(e)})})},Be.prototype.merge=function(){return this.union.apply(this,arguments)},Be.prototype.mergeWith=function(t){var e=sn.call(arguments,1);return this.union.apply(this,e)},Be.prototype.sort=function(t){return Fe(Se(this,t))},Be.prototype.sortBy=function(t,e){return Fe(Se(this,e,t))},Be.prototype.wasAltered=function(){return this._map.wasAltered()},Be.prototype.__iterate=function(t,e){var n=this;return this._map.__iterate(function(e,r){return t(r,r,n)},e)},Be.prototype.__iterator=function(t,e){return this._map.map(function(t,e){return e}).__iterator(t,e)},Be.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t);return t?this.__make(e,t):(this.__ownerID=t,this._map=e,this)},Be.isSet=Re;var Xn="@@__IMMUTABLE_SET__@@",$n=Be.prototype;$n[Xn]=!0,$n.delete=$n.remove,$n.mergeDeep=$n.merge,$n.mergeDeepWith=$n.mergeWith,$n.withMutations=Un.withMutations,$n.asMutable=Un.asMutable,$n.asImmutable=Un.asImmutable,$n.__empty=Ue,$n.__make=Pe;var tr;t(Fe,Be),Fe.of=function(){return this(arguments)},Fe.fromKeys=function(t){return this(n(t).keySeq())},Fe.prototype.toString=function(){return this.__toString("OrderedSet {","}")},Fe.isOrderedSet=Ye;var er=Fe.prototype;er[pn]=!0,er.__empty=He,er.__make=qe;var nr;t(We,nt),We.of=function(){return this(arguments)},We.prototype.toString=function(){return this.__toString("Stack [","]")},We.prototype.get=function(t,e){var n=this._head;for(t=y(this,t);n&&t--;)n=n.next;return n?n.value:e},We.prototype.peek=function(){return this._head&&this._head.value},We.prototype.push=function(){if(0===arguments.length)return this;for(var t=this.size+arguments.length,e=this._head,n=arguments.length-1;n>=0;n--)e={value:arguments[n],next:e};return this.__ownerID?(this.size=t,this._head=e,this.__hash=void 0,this.__altered=!0,this):Ge(t,e)},We.prototype.pushAll=function(t){if(t=r(t),0===t.size)return this;lt(t.size);var e=this.size,n=this._head;return t.reverse().forEach(function(t){e++,n={value:t,next:n}}),this.__ownerID?(this.size=e,this._head=n,this.__hash=void 0,this.__altered=!0,this):Ge(e,n)},We.prototype.pop=function(){return this.slice(1)},We.prototype.unshift=function(){return this.push.apply(this,arguments)},We.prototype.unshiftAll=function(t){return this.pushAll(t)},We.prototype.shift=function(){return this.pop.apply(this,arguments)},We.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Ve()},We.prototype.slice=function(t,e){if(v(t,e,this.size))return this;var n=_(t,this.size);if(m(e,this.size)!==this.size)return nt.prototype.slice.call(this,t,e);for(var r=this.size-n,i=this._head;n--;)i=i.next;return this.__ownerID?(this.size=r,this._head=i,this.__hash=void 0,this.__altered=!0,this):Ge(r,i)},We.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Ge(this.size,this._head,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},We.prototype.__iterate=function(t,e){if(e)return this.reverse().__iterate(t);for(var n=0,r=this._head;r&&!1!==t(r.value,n++,this);)r=r.next;return n},We.prototype.__iterator=function(t,e){if(e)return this.reverse().__iterator(t);var n=0,r=this._head;return new b(function(){if(r){var e=r.value;return r=r.next,w(t,n++,e)}return M()})},We.isStack=Qe;var rr="@@__IMMUTABLE_STACK__@@",ir=We.prototype;ir[rr]=!0,ir.withMutations=Un.withMutations,ir.asMutable=Un.asMutable,ir.asImmutable=Un.asImmutable,ir.wasAltered=Un.wasAltered;var or;e.Iterator=b,Je(e,{toArray:function(){lt(this.size);var t=new Array(this.size||0);return this.valueSeq().__iterate(function(e,n){t[n]=e}),t},toIndexedSeq:function(){return new ie(this)},toJS:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJS?t.toJS():t}).__toJS()},toJSON:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJSON?t.toJSON():t}).__toJS()},toKeyedSeq:function(){return new re(this,!0)},toMap:function(){return ft(this.toKeyedSeq())},toObject:function(){lt(this.size);var t={};return this.__iterate(function(e,n){t[n]=e}),t},toOrderedMap:function(){return Xt(this.toKeyedSeq())},toOrderedSet:function(){return Fe(u(this)?this.valueSeq():this)},toSet:function(){return Be(u(this)?this.valueSeq():this)},toSetSeq:function(){return new oe(this)},toSeq:function(){return a(this)?this.toIndexedSeq():u(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return We(u(this)?this.valueSeq():this)},toList:function(){return Kt(u(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(t,e){return 0===this.size?t+e:t+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+e},concat:function(){return Ee(this,ge(this,sn.call(arguments,0)))},includes:function(t){return this.some(function(e){return V(e,t)})},entries:function(){return this.__iterator(bn)},every:function(t,e){lt(this.size);var n=!0;return this.__iterate(function(r,i,o){if(!t.call(e,r,i,o))return n=!1,!1}),n},filter:function(t,e){return Ee(this,le(this,t,e,!0))},find:function(t,e,n){var r=this.findEntry(t,e);return r?r[1]:n},forEach:function(t,e){return lt(this.size),this.__iterate(e?t.bind(e):t)},join:function(t){lt(this.size),t=void 0!==t?""+t:",";var e="",n=!0;return this.__iterate(function(r){n?n=!1:e+=t,e+=null!==r&&void 0!==r?r.toString():""}),e},keys:function(){return this.__iterator(mn)},map:function(t,e){return Ee(this,se(this,t,e))},reduce:function(t,e,n){lt(this.size);var r,i;return arguments.length<2?i=!0:r=e,this.__iterate(function(e,o,u){i?(i=!1,r=e):r=t.call(n,r,e,o,u)}),r},reduceRight:function(t,e,n){var r=this.toKeyedSeq().reverse();return r.reduce.apply(r,arguments)},reverse:function(){return Ee(this,ce(this,!0))},slice:function(t,e){return Ee(this,he(this,t,e,!0))},some:function(t,e){return!this.every($e(t),e)},sort:function(t){return Ee(this,Se(this,t))},values:function(){return this.__iterator(Sn)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some(function(){return!0})},count:function(t,e){return d(t?this.toSeq().filter(t,e):this)},countBy:function(t,e){return fe(this,t,e)},equals:function(t){return J(this,t)},entrySeq:function(){var t=this;if(t._cache)return new N(t._cache);var e=t.toSeq().map(Xe).toIndexedSeq();return e.fromEntrySeq=function(){return t.toSeq()},e},filterNot:function(t,e){return this.filter($e(t),e)},findEntry:function(t,e,n){var r=n;return this.__iterate(function(n,i,o){if(t.call(e,n,i,o))return r=[i,n],!1}),r},findKey:function(t,e){var n=this.findEntry(t,e);return n&&n[0]},findLast:function(t,e,n){return this.toKeyedSeq().reverse().find(t,e,n)},findLastEntry:function(t,e,n){return this.toKeyedSeq().reverse().findEntry(t,e,n)},findLastKey:function(t,e){return this.toKeyedSeq().reverse().findKey(t,e)},first:function(){return this.find(g)},flatMap:function(t,e){return Ee(this,_e(this,t,e))},flatten:function(t){return Ee(this,ve(this,t,!0))},fromEntrySeq:function(){return new ue(this)},get:function(t,e){return this.find(function(e,n){return V(n,t)},void 0,e)},getIn:function(t,e){for(var n,r=this,i=Oe(t);!(n=i.next()).done;){var o=n.value;if((r=r&&r.get?r.get(o,gn):gn)===gn)return e}return r},groupBy:function(t,e){return pe(this,t,e)},has:function(t){return this.get(t,gn)!==gn},hasIn:function(t){return this.getIn(t,gn)!==gn},isSubset:function(t){return t="function"==typeof t.includes?t:e(t),this.every(function(e){return t.includes(e)})},isSuperset:function(t){return t="function"==typeof t.isSubset?t:e(t),t.isSubset(this)},keyOf:function(t){return this.findKey(function(e){return V(e,t)})},keySeq:function(){return this.toSeq().map(Ze).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(t){return this.toKeyedSeq().reverse().keyOf(t)},max:function(t){return be(this,t)},maxBy:function(t,e){return be(this,e,t)},min:function(t){return be(this,t?tn(t):rn)},minBy:function(t,e){return be(this,e?tn(e):rn,t)},rest:function(){return this.slice(1)},skip:function(t){return this.slice(Math.max(0,t))},skipLast:function(t){return Ee(this,this.toSeq().reverse().skip(t).reverse())},skipWhile:function(t,e){return Ee(this,ye(this,t,e,!0))},skipUntil:function(t,e){return this.skipWhile($e(t),e)},sortBy:function(t,e){return Ee(this,Se(this,e,t))},take:function(t){return this.slice(0,Math.max(0,t))},takeLast:function(t){return Ee(this,this.toSeq().reverse().take(t).reverse())},takeWhile:function(t,e){return Ee(this,de(this,t,e))},takeUntil:function(t,e){return this.takeWhile($e(t),e)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=on(this))}});var ur=e.prototype;ur[cn]=!0,ur[En]=ur.values,ur.__toJS=ur.toArray,ur.__toStringMapper=en,ur.inspect=ur.toSource=function(){return this.toString()},ur.chain=ur.flatMap,ur.contains=ur.includes,Je(n,{flip:function(){return Ee(this,ae(this))},mapEntries:function(t,e){var n=this,r=0;return Ee(this,this.toSeq().map(function(i,o){return t.call(e,[o,i],r++,n)}).fromEntrySeq())},mapKeys:function(t,e){var n=this;return Ee(this,this.toSeq().flip().map(function(r,i){return t.call(e,r,i,n)}).flip())}});var ar=n.prototype;return ar[ln]=!0,ar[En]=ur.entries,ar.__toJS=ur.toObject,ar.__toStringMapper=function(t,e){return JSON.stringify(e)+": "+en(t)},Je(r,{toKeyedSeq:function(){return new re(this,!1)},filter:function(t,e){return Ee(this,le(this,t,e,!1))},findIndex:function(t,e){var n=this.findEntry(t,e);return n?n[0]:-1},indexOf:function(t){var e=this.keyOf(t);return void 0===e?-1:e},lastIndexOf:function(t){var e=this.lastKeyOf(t);return void 0===e?-1:e},reverse:function(){return Ee(this,ce(this,!1))},slice:function(t,e){return Ee(this,he(this,t,e,!1))},splice:function(t,e){var n=arguments.length;if(e=Math.max(0|e,0),0===n||2===n&&!e)return this;t=_(t,t<0?this.count():this.size);var r=this.slice(0,t);return Ee(this,1===n?r:r.concat(h(arguments,2),this.slice(t+e)))},findLastIndex:function(t,e){var n=this.findLastEntry(t,e);return n?n[0]:-1},first:function(){return this.get(0)},flatten:function(t){return Ee(this,ve(this,t,!1))},get:function(t,e){return t=y(this,t),t<0||this.size===1/0||void 0!==this.size&&t>this.size?e:this.find(function(e,n){return n===t},void 0,e)},has:function(t){return(t=y(this,t))>=0&&(void 0!==this.size?this.size===1/0||t<this.size:-1!==this.indexOf(t))},interpose:function(t){return Ee(this,me(this,t))},interleave:function(){var t=[this].concat(h(arguments)),e=Me(this.toSeq(),O.of,t),n=e.flatten(!0);return e.size&&(n.size=e.size*t.length),Ee(this,n)},keySeq:function(){return $(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(t,e){return Ee(this,ye(this,t,e,!1))},zip:function(){return Ee(this,Me(this,nn,[this].concat(h(arguments))))},zipWith:function(t){var e=h(arguments);return e[0]=this,Ee(this,Me(this,t,e))}}),r.prototype[fn]=!0,r.prototype[pn]=!0,Je(i,{get:function(t,e){return this.has(t)?t:e},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}}),i.prototype.has=ur.includes,i.prototype.contains=i.prototype.includes,Je(D,n.prototype),Je(O,r.prototype),Je(C,i.prototype),Je(et,n.prototype),Je(nt,r.prototype),Je(rt,i.prototype),{Iterable:e,Seq:T,Collection:tt,Map:ft,OrderedMap:Xt,List:Kt,Stack:We,Set:Be,OrderedSet:Fe,Record:Ce,Range:$,Repeat:Z,is:V,fromJS:H}}()}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r=e===n,i=t.getBlockForKey(e);if(!i)return[];var o=[i];if(!r)for(var u=e;u!==n;){var a=t.getBlockAfter(u);if(!a){o=[];break}o.push(a),u=a.getKey()}return o}},function(t,e,n){var r=n(96),i=n(6)("iterator"),o=n(42);t.exports=n(4).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(68),i=n(6)("toStringTag"),o="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){t.exports={default:n(145),__esModule:!0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(15)&&!n(35)(function(){return 7!=Object.defineProperty(n(100)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(20),i=n(14).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(36),i=n(40),o=n(148)(!1),u=n(71)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){t.exports={default:n(150),__esModule:!0}},function(t,e,n){var r=n(36),i=n(46),o=n(71)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){t.exports=n(29)},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(68);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(101),i=n(73).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(55),i=n(45),o=n(40),u=n(66),a=n(36),s=n(99),c=Object.getOwnPropertyDescriptor;e.f=n(15)?c:function(t,e){if(t=o(t),e=u(e,!0),s)try{return c(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){"use strict";var r=n(10),i=n(0),o=n(25),u=i.OrderedMap,a=function(t){var e={},n=void 0;return u(t.withMutations(function(t){t.forEach(function(r,i){var u=r.getKey(),a=r.getNextSiblingKey(),s=r.getPrevSiblingKey(),c=r.getChildKeys(),l=r.getParentKey(),f=o();if(e[u]=f,a&&(t.get(a)?t.setIn([a,"prevSibling"],f):t.setIn([u,"nextSibling"],null)),s&&(t.get(s)?t.setIn([s,"nextSibling"],f):t.setIn([u,"prevSibling"],null)),l&&t.get(l)){var p=t.get(l),h=p.getChildKeys();t.setIn([l,"children"],h.set(h.indexOf(r.getKey()),f))}else t.setIn([u,"parent"],null),n&&(t.setIn([n.getKey(),"nextSibling"],f),t.setIn([u,"prevSibling"],e[n.getKey()])),n=t.get(u);c.forEach(function(e){t.get(e)?t.setIn([e,"parent"],f):t.setIn([u,"children"],r.getChildKeys().filter(function(t){return t!==e}))})})}).toArray().map(function(t){return[e[t.getKey()],t.set("key",e[t.getKey()])]}))},s=function(t){return u(t.toArray().map(function(t){var e=o();return[e,t.set("key",e)]}))},c=function(t){return t.first()instanceof r?a(t):s(t)};t.exports=c},function(t,e,n){"use strict";function r(t,e){var n=t.getBlockMap(),r=t.getEntityMap(),i={},u=e.getStartKey(),a=e.getStartOffset(),s=n.get(u),c=o(r,s,a);c!==s&&(i[u]=c);var l=e.getEndKey(),f=e.getEndOffset(),p=n.get(l);u===l&&(p=c);var h=o(r,p,f);return h!==p&&(i[l]=h),Object.keys(i).length?t.merge({blockMap:n.merge(i),selectionAfter:e}):t.set("selectionAfter",e)}function i(t,e,n){var r;return a(t,function(t,e){return t.getEntity()===e.getEntity()},function(t){return t.getEntity()===e},function(t,e){t<=n&&e>=n&&(r={start:t,end:e})}),"object"!=typeof r&&s(!1),r}function o(t,e,n){var r=e.getCharacterList(),o=n>0?r.get(n-1):void 0,a=n<r.count()?r.get(n):void 0,s=o?o.getEntity():void 0,c=a?a.getEntity():void 0;if(c&&c===s&&"MUTABLE"!==t.__get(c).getMutability()){for(var l,f=i(r,c,n),p=f.start,h=f.end;p<h;)l=r.get(p),r=r.set(p,u.applyEntity(l,null)),p++;return e.set("characterList",r)}return e}var u=n(7),a=n(49),s=n(1);t.exports=r},function(t,e,n){"use strict";function r(t,e,n){if(n===t.count())e.forEach(function(e){t=t.push(e)});else if(0===n)e.reverse().forEach(function(e){t=t.unshift(e)});else{var r=t.slice(0,n),i=t.slice(n);t=r.concat(e,i).toList()}return t}t.exports=r},function(t,e,n){"use strict";var r=n(10),i=function(t,e){if(!(t instanceof r))return null;var n=t.getNextSiblingKey();if(n)return n;var i=t.getParentKey();if(!i)return null;for(var o=e.get(i);o&&!o.getNextSiblingKey();){var u=o.getParentKey();o=u?e.get(u):null}return o?o.getNextSiblingKey():null};t.exports=i},function(t,e,n){"use strict";function r(t,e){var n=[],r=t.map(function(t){return t.getStyle()}).toList();return a(r,i,f,function(t,r){n.push(new h({start:t+e,end:r+e}))}),s(n)}function i(t,e){return t===e}var o=n(0),u=n(81),a=n(49),s=o.List,c=o.Repeat,l=o.Record,f=u.thatReturnsTrue,p={start:null,end:null},h=l(p),d={start:null,end:null,decoratorKey:null,leaves:null},y=l(d),g={generate:function(t,e,n){var o=e.getLength();if(!o)return s.of(new y({start:0,end:0,decoratorKey:null,leaves:s.of(new h({start:0,end:0}))}));var u=[],l=n?n.getDecorations(e,t):s(c(null,o)),p=e.getCharacterList();return a(l,i,f,function(t,e){u.push(new y({start:t,end:e,decoratorKey:l.get(t),leaves:r(p.slice(t,e).toList(),t)}))}),s(u)},getFingerprint:function(t){return t.map(function(t){var e=t.get("decoratorKey");return(null!==e?e+"."+(t.get("end")-t.get("start")):"")+"."+t.get("leaves").size}).join("-")}};t.exports=g},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(0),a=u.Record,s=a({type:"TOKEN",mutability:"IMMUTABLE",data:Object}),c=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.getType=function(){return this.get("type")},e.prototype.getMutability=function(){return this.get("mutability")},e.prototype.getData=function(){return this.get("data")},e}(s);t.exports=c},function(t,e,n){"use strict";function r(t){var e=p.exec(t);return null==e?null:e[0]}function i(t){var e=r(t);return null==e?c.NEUTRAL:h.exec(e)?c.RTL:c.LTR}function o(t,e){if(e=e||c.NEUTRAL,!t.length)return e;var n=i(t);return n===c.NEUTRAL?e:n}function u(t,e){return e||(e=c.getGlobalDir()),c.isStrong(e)||l(!1),o(t,e)}function a(t,e){return u(t,e)===c.LTR}function s(t,e){return u(t,e)===c.RTL}var c=n(84),l=n(1),f={L:"A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",R:"֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",AL:"؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾"},p=new RegExp("["+f.L+f.R+f.AL+"]"),h=new RegExp("["+f.R+f.AL+"]"),d={firstStrongChar:r,firstStrongCharDir:i,resolveBlockDir:o,getDirection:u,isDirectionLTR:a,isDirectionRTL:s};t.exports=d},function(t,e,n){"use strict";t.exports={BOLD:{fontWeight:"bold"},CODE:{fontFamily:"monospace",wordWrap:"break-word"},ITALIC:{fontStyle:"italic"},STRIKETHROUGH:{textDecoration:"line-through"},UNDERLINE:{textDecoration:"underline"}}},function(t,e,n){"use strict";function r(t){var e=t.getSelection(),n=e.getAnchorKey(),r=t.getBlockTree(n),i=e.getStartOffset(),o=!1;return r.some(function(t){return i===t.get("start")?(o=!0,!0):i<t.get("end")&&t.get("leaves").some(function(t){var e=t.get("start");return i===e&&(o=!0,!0)})}),o}t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(9),a=u||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=n(198),c=n(63),l=n(3),f=n(38),p=n(121),h=n(88),d=n(116),y=n(84),g=n(44),v=n(213),_=n(89),m=n(217),S=n(1),b=n(13),w=function(t,e){return t.getAnchorKey()===e||t.getFocusKey()===e},M=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.shouldComponentUpdate=function(t){return this.props.block!==t.block||this.props.tree!==t.tree||this.props.direction!==t.direction||w(t.selection,t.block.getKey())&&t.forceSelection},e.prototype.componentDidMount=function(){var t=this.props.selection,e=t.getEndKey();if(t.getHasFocus()&&e===this.props.block.getKey()){var n=f.findDOMNode(this),r=h.getScrollParent(n),i=_(r),o=void 0;if(r===window){var u=v(n);(o=u.y+u.height-m().height)>0&&window.scrollTo(i.x,i.y+o+10)}else n instanceof HTMLElement||S(!1),(o=n.offsetHeight+n.offsetTop-(r.offsetHeight+i.y))>0&&p.setTop(r,p.getTop(r)+o+10)}},e.prototype._renderChildren=function(){var t=this,e=this.props.block,n=e.getKey(),r=e.getText(),i=this.props.tree.size-1,o=w(this.props.selection,n);return this.props.tree.map(function(u,f){var p=u.get("leaves"),h=p.size-1,g=p.map(function(u,a){var p=c.encode(n,f,a),d=u.get("start"),y=u.get("end");return l.createElement(s,{key:p,offsetKey:p,block:e,start:d,selection:o?t.props.selection:null,forceSelection:t.props.forceSelection,text:r.slice(d,y),styleSet:e.getInlineStyleAt(d),customStyleMap:t.props.customStyleMap,customStyleFn:t.props.customStyleFn,isLast:f===i&&a===h})}).toArray(),v=u.get("decoratorKey");if(null==v)return g;if(!t.props.decorator)return g;var _=b(t.props.decorator),m=_.getComponentForKey(v);if(!m)return g;var S=_.getPropsForKey(v),w=c.encode(n,f,0),M=r.slice(p.first().get("start"),p.last().get("end")),E=y.getHTMLDirIfDifferent(d.getDirection(M),t.props.direction);return l.createElement(m,a({},S,{contentState:t.props.contentState,decoratedText:M,dir:E,key:w,entityKey:e.getEntityAt(u.get("start")),offsetKey:w}),g)}).toArray()},e.prototype.render=function(){var t=this.props,e=t.direction,n=t.offsetKey,r=g({"public/DraftStyleDefault/block":!0,"public/DraftStyleDefault/ltr":"LTR"===e,"public/DraftStyleDefault/rtl":"RTL"===e});return l.createElement("div",{"data-offset-key":n,className:r},this._renderChildren())},e}(l.Component);t.exports=M},function(t,e,n){"use strict";function r(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}t.exports=r},function(t,e,n){"use strict";function r(t,e){return!!e&&(t===e.documentElement||t===e.body)}var i={getTop:function(t){var e=t.ownerDocument;return r(t,e)?e.body.scrollTop||e.documentElement.scrollTop:t.scrollTop},setTop:function(t,e){var n=t.ownerDocument;r(t,n)?n.body.scrollTop=n.documentElement.scrollTop=e:t.scrollTop=e},getLeft:function(t){var e=t.ownerDocument;return r(t,e)?e.body.scrollLeft||e.documentElement.scrollLeft:t.scrollLeft},setLeft:function(t,e){var n=t.ownerDocument;r(t,n)?n.body.scrollLeft=n.documentElement.scrollLeft=e:t.scrollLeft=e}};t.exports=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){if("file"==t.kind)return t.getAsFile()}var o=n(220),u=n(221),a=n(81),s=new RegExp("\r\n","g"),c={"text/rtf":1,"text/html":1},l=function(){function t(e){r(this,t),this.data=e,this.types=e.types?u(e.types):[]}return t.prototype.isRichText=function(){return!(!this.getHTML()||!this.getText())||!this.isImage()&&this.types.some(function(t){return c[t]})},t.prototype.getText=function(){var t;return this.data.getData&&(this.types.length?-1!=this.types.indexOf("text/plain")&&(t=this.data.getData("text/plain")):t=this.data.getData("Text")),t?t.replace(s,"\n"):null},t.prototype.getHTML=function(){if(this.data.getData){if(!this.types.length)return this.data.getData("Text");if(-1!=this.types.indexOf("text/html"))return this.data.getData("text/html")}},t.prototype.isLink=function(){return this.types.some(function(t){return-1!=t.indexOf("Url")||-1!=t.indexOf("text/uri-list")||t.indexOf("text/x-moz-url")})},t.prototype.getLink=function(){return this.data.getData?-1!=this.types.indexOf("text/x-moz-url")?this.data.getData("text/x-moz-url").split("\n")[0]:-1!=this.types.indexOf("text/uri-list")?this.data.getData("text/uri-list"):this.data.getData("url"):null},t.prototype.isImage=function(){if(this.types.some(function(t){return-1!=t.indexOf("application/x-moz-file")}))return!0;for(var t=this.getFiles(),e=0;e<t.length;e++){var n=t[e].type;if(!o.isImage(n))return!1}return!0},t.prototype.getCount=function(){return this.data.hasOwnProperty("items")?this.data.items.length:this.data.hasOwnProperty("mozItemCount")?this.data.mozItemCount:this.data.files?this.data.files.length:null},t.prototype.getFiles=function(){return this.data.items?Array.prototype.slice.call(this.data.items).map(i).filter(a.thatReturnsArgument):this.data.files?Array.prototype.slice.call(this.data.files):[]},t.prototype.hasFiles=function(){return this.getFiles().length>0},t}();t.exports=l},function(t,e,n){"use strict";function r(t){if(t instanceof Element){var e=t.getAttribute("data-offset-key");if(e)return e;for(var n=0;n<t.childNodes.length;n++){var i=r(t.childNodes[n]);if(i)return i}}return null}t.exports=r},function(t,e,n){"use strict";(function(e){function r(t,e){var n=0,r=[];t.forEach(function(o){i(o,function(i){n++,i&&r.push(i.slice(0,s)),n==t.length&&e(r.join("\r"))})})}function i(t,n){if(!e.FileReader||t.type&&!(t.type in a))return void n("");if(""===t.type){var r="";return u.test(t.name)&&(r=t.name.replace(u,"")),void n(r)}var i=new FileReader;i.onload=function(){var t=i.result;"string"!=typeof t&&o(!1),n(t)},i.onerror=function(){n("")},i.readAsText(t)}var o=n(1),u=/\.textClipping$/,a={"text/plain":!0,"text/html":!0,"text/rtf":!0},s=5e3;t.exports=r}).call(e,n(26))},function(t,e,n){"use strict";function r(t,e,n,r,u){var a=o(t.getSelection()),s=i.decode(e),c=s.blockKey,l=t.getBlockTree(c).getIn([s.decoratorKey,"leaves",s.leafKey]),f=i.decode(r),p=f.blockKey,h=t.getBlockTree(p).getIn([f.decoratorKey,"leaves",f.leafKey]),d=l.get("start"),y=h.get("start"),g=l?d+n:null,v=h?y+u:null;if(a.getAnchorKey()===c&&a.getAnchorOffset()===g&&a.getFocusKey()===p&&a.getFocusOffset()===v)return a;var _=!1;if(c===p){var m=l.get("end"),S=h.get("end");_=y===d&&S===m?u<n:y<d}else _=t.getCurrentContent().getBlockMap().keySeq().skipUntil(function(t){return t===c||t===p}).first()===p;return a.merge({anchorKey:c,anchorOffset:g,focusKey:p,focusOffset:v,isBackward:_})}var i=n(63),o=n(13);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.getSelection();return e.isCollapsed()?null:i(t.getCurrentContent(),e)}var i=n(60);t.exports=r},function(t,e,n){"use strict";function r(t){for(var e=t.cloneRange(),n=[],r=t.endContainer;null!=r;r=r.parentNode){var i=r===t.commonAncestorContainer;i?e.setStart(t.startContainer,t.startOffset):e.setStart(e.endContainer,0);var u=Array.from(e.getClientRects());if(n.push(u),i){var a;return n.reverse(),(a=[]).concat.apply(a,n)}e.setEndBefore(r)}o(!1)}var i=n(18),o=n(1),u=i.isBrowser("Chrome"),a=u?r:function(t){return Array.from(t.getClientRects())};t.exports=a},function(t,e,n){"use strict";function r(t,e,n,r,i,o){var a=n.nodeType===Node.TEXT_NODE,c=i.nodeType===Node.TEXT_NODE;if(a&&c)return{selectionState:l(t,p(s(n)),r,p(s(i)),o),needsRecovery:!1};var f=null,h=null,d=!0;return a?(f={key:p(s(n)),offset:r},h=u(e,i,o)):c?(h={key:p(s(i)),offset:o},f=u(e,n,r)):(f=u(e,n,r),h=u(e,i,o),n===i&&r===o&&(d=!!n.firstChild&&"BR"!==n.firstChild.nodeName)),{selectionState:l(t,f.key,f.offset,h.key,h.offset),needsRecovery:d}}function i(t){for(;t.firstChild&&(t.firstChild instanceof Element&&"true"===t.firstChild.getAttribute("data-blocks")||c(t.firstChild));)t=t.firstChild;return t}function o(t){for(;t.lastChild&&(t.lastChild instanceof Element&&"true"===t.lastChild.getAttribute("data-blocks")||c(t.lastChild));)t=t.lastChild;return t}function u(t,e,n){var r=e,u=s(r);if(null!=u||t&&(t===r||t.firstChild===r)||f(!1),t===r&&(r=r.firstChild,r instanceof Element&&"true"===r.getAttribute("data-contents")||f(!1),n>0&&(n=r.childNodes.length)),0===n){var l=null;if(null!=u)l=u;else{var h=i(r);l=p(c(h))}return{key:l,offset:0}}var d=r.childNodes[n-1],y=null,g=null;if(c(d)){var v=o(d);y=p(c(v)),g=a(v)}else y=p(u),g=a(d);return{key:y,offset:g}}function a(t){var e=t.textContent;return"\n"===e?0:e.length}var s=n(90),c=n(123),l=n(125),f=n(1),p=n(13);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=e?l.exec(t):s.exec(t);return n?n[0]:t}var i=n(240),o=i.getPunctuation(),u="\\s|(?![_])"+o,a="^(?:"+u+")*(?:['‘’]|(?!"+u+").)*(?:(?!"+u+").)",s=new RegExp(a),c="(?:(?!"+u+").)(?:['‘’]|(?!"+u+").)*(?:"+u+")*$",l=new RegExp(c),f={getBackward:function(t){return r(t,!0)},getForward:function(t){return r(t,!1)}};t.exports=f},function(t,e,n){"use strict";function r(t,e){var n,r=t.getSelection(),i=r.getStartKey(),o=r.getStartOffset(),u=t.getCurrentContent(),a=i;return e>u.getBlockForKey(i).getText().length-o?(a=u.getKeyAfter(i),n=0):n=o+e,r.merge({focusKey:a,focusOffset:n})}t.exports=r},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i,o=u||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(9),a=n(7),s=n(37),c=n(10),l=n(85),f=n(61),p=n(31),h=n(0),d=n(0),y=d.Set,g=n(251),v=n(44),_=n(25),m=n(132),S=n(1),b=n(83),w=p.draft_tree_data_support,M=h.List,E=h.OrderedSet,x=new RegExp("\r","g"),k=new RegExp("\n","g"),I=new RegExp("&nbsp;","g"),L=new RegExp("&#13;?","g"),T=new RegExp("&#8203;?","g"),D=["bold","bolder","500","600","700","800","900"],O=["light","lighter","100","200","300","400"],C={b:"BOLD",code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",i:"ITALIC",s:"STRIKETHROUGH",strike:"STRIKETHROUGH",strong:"BOLD",u:"UNDERLINE"},N=(i={},r(i,v("public/DraftStyleDefault/depth0"),0),r(i,v("public/DraftStyleDefault/depth1"),1),r(i,v("public/DraftStyleDefault/depth2"),2),r(i,v("public/DraftStyleDefault/depth3"),3),r(i,v("public/DraftStyleDefault/depth4"),4),i),j=["className","href","rel","target","title"],A=["alt","className","height","src","width"],z=void 0,B={text:"",inlines:[],entities:[],blocks:[]},R={children:M(),depth:0,key:"",type:""},K=function(t,e){return"li"===t?"ol"===e?"ordered-list-item":"unordered-list-item":null},P=function(t){var e=t.get("unstyled").element,n=y([]);return t.forEach(function(t){t.aliasedElements&&t.aliasedElements.forEach(function(t){n=n.add(t)}),n=n.add(t.element)}),n.filter(function(t){return t&&t!==e}).toArray().sort()},U=function(t,e,n){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(i)return i}return null},F=function(t,e,n){var r=n.filter(function(e){return e.element===t||e.wrapper===t||e.aliasedElements&&e.aliasedElements.some(function(e){return e===t})}).keySeq().toSet().toArray().sort();switch(r.length){case 0:return"unstyled";case 1:return r[0];default:return U(t,e,[K])||"unstyled"}},Y=function(t,e,n){var r=C[t];if(r)n=n.add(r).toOrderedSet();else if(e instanceof HTMLElement){var i=e;n=n.withMutations(function(t){var e=i.style.fontWeight,n=i.style.fontStyle,r=i.style.textDecoration;D.indexOf(e)>=0?t.add("BOLD"):O.indexOf(e)>=0&&t.remove("BOLD"),"italic"===n?t.add("ITALIC"):"normal"===n&&t.remove("ITALIC"),"underline"===r&&t.add("UNDERLINE"),"line-through"===r&&t.add("STRIKETHROUGH"),"none"===r&&(t.remove("UNDERLINE"),t.remove("STRIKETHROUGH"))}).toOrderedSet()}return n},q=function(t,e,n){var r=t.text.slice(-1),i=e.text.slice(0,1);if("\r"!==r||"\r"!==i||n||(t.text=t.text.slice(0,-1),t.inlines.pop(),t.entities.pop(),t.blocks.pop()),"\r"===r){if(" "===e.text||"\n"===e.text)return t;" "!==i&&"\n"!==i||(e.text=e.text.slice(1),e.inlines.shift(),e.entities.shift())}return{text:t.text+e.text,inlines:t.inlines.concat(e.inlines),entities:t.entities.concat(e.entities),blocks:t.blocks.concat(e.blocks)}},H=function(t,e){return e.some(function(e){return-1!==t.indexOf("<"+e)})},W=function(t){t instanceof HTMLAnchorElement||S(!1);var e=t.protocol;return"http:"===e||"https:"===e||"mailto:"===e},Q=function(t){var e=new Array(1);return t&&(e[0]=t),o({},B,{text:" ",inlines:[E()],entities:e})},G=function(){return o({},B,{text:"\n",inlines:[E()],entities:new Array(1)})},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o({},R,t)},J=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{text:"\r",inlines:[E()],entities:new Array(1),blocks:[V({parent:n,key:_(),type:t,depth:Math.max(0,Math.min(4,e))})]}},Z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object.keys(N).some(function(n){t.classList.contains(n)&&(e=N[n])}),e},X=function t(e,n,r,i,u,a,s,c,l,p){var h=z,d=n.nodeName.toLowerCase(),y=e,v="unstyled",_=!1,m=u&&F(u,i,c),S=o({},B),b=null,M=void 0;if("#text"===d){var E=n.textContent,x=E.trim();if(i&&""===x&&n.parentElement){var I=n.parentElement.nodeName.toLowerCase();if("ol"===I||"ul"===I)return{chunk:o({},B),entityMap:e}}return""===x&&"pre"!==u?{chunk:Q(l),entityMap:e}:("pre"!==u&&(E=E.replace(k," ")),z=d,{chunk:{text:E,inlines:Array(E.length).fill(r),entities:Array(E.length).fill(l),blocks:[]},entityMap:e})}if(z=d,"br"===d)return"br"!==h||u&&"unstyled"!==m?{chunk:G(),entityMap:e}:{chunk:J("unstyled",s,p),entityMap:e};if("img"===d&&n instanceof HTMLImageElement&&n.attributes.getNamedItem("src")&&n.attributes.getNamedItem("src").value){var L=n,T={};A.forEach(function(t){var e=L.getAttribute(t);e&&(T[t]=e)}),n.textContent="📷",l=f.__create("IMAGE","MUTABLE",T||{})}r=Y(d,n,r),"ul"!==d&&"ol"!==d||(i&&(s+=1),i=d),!w&&"li"===d&&n instanceof HTMLElement&&(s=Z(n,s));var D=F(d,i,c),O=i&&"li"===u&&"li"===d,C=(!u||w)&&-1!==a.indexOf(d);(O||C)&&(S=J(D,s,p),M=S.blocks[0].key,u=d,_=!w),O&&(v="ul"===i?"unordered-list-item":"ordered-list-item");var N=n.firstChild;null!=N&&(d=N.nodeName.toLowerCase());for(var R=null;N;){N instanceof HTMLAnchorElement&&N.href&&W(N)?function(){var t=N,e={};j.forEach(function(n){var r=t.getAttribute(n);r&&(e[n]=r)}),e.url=new g(t.href).toString(),R=f.__create("LINK","MUTABLE",e||{})}():R=void 0;var K=t(y,N,r,i,u,a,s,c,R||l,w?M:null),P=K.chunk,U=K.entityMap;b=P,y=U,S=q(S,b,w);var H=N.nextSibling;!p&&H&&a.indexOf(d)>=0&&u&&(S=q(S,G())),H&&(d=H.nodeName.toLowerCase()),N=H}return _&&(S=q(S,J(v,s,p))),{chunk:S,entityMap:y}},$=function(t,e,n,r){t=t.trim().replace(x,"").replace(I," ").replace(L,"").replace(T,"");var i=P(n),u=e(t);if(!u)return null;z=null;var a=H(t,i)?i:["div"],s=X(r,u,E(),"ul",null,a,-1,n),c=s.chunk,l=s.entityMap;return 0===c.text.indexOf("\r")&&(c={text:c.text.slice(1),inlines:c.inlines.slice(1),entities:c.entities.slice(1),blocks:c.blocks}),"\r"===c.text.slice(-1)&&(c.text=c.text.slice(0,-1),c.inlines=c.inlines.slice(0,-1),c.entities=c.entities.slice(0,-1),c.blocks.pop()),0===c.blocks.length&&c.blocks.push(o({},B,{type:"unstyled",depth:0})),c.text.split("\r").length===c.blocks.length+1&&c.blocks.unshift({type:"unstyled",depth:0}),{chunk:c,entityMap:l}},tt=function(t){if(!t||!t.text||!Array.isArray(t.blocks))return null;var e={cacheRef:{},contentBlocks:[]},n=0,r=t.blocks,i=t.inlines,o=t.entities,u=w?c:s;return t.text.split("\r").reduce(function(t,e,s){e=b(e);var l=r[s],f=n+e.length,p=i.slice(n,f),h=o.slice(n,f),d=M(p.map(function(t,e){var n={style:t,entity:null};return h[e]&&(n.entity=h[e]),a.create(n)}));n=f+1;var y=l.depth,g=l.type,v=l.parent,m=l.key||_(),S=null;if(v){var w=t.cacheRef[v],E=t.contentBlocks[w];if(E.getChildKeys().isEmpty()&&E.getText()){var x=E.getCharacterList(),k=E.getText();S=_();var I=new c({key:S,text:k,characterList:x,parent:v,nextSibling:m});t.contentBlocks.push(I),E=E.withMutations(function(t){t.set("characterList",M()).set("text","").set("children",E.children.push(I.getKey()))})}t.contentBlocks[w]=E.set("children",E.children.push(m))}var L=new u({key:m,parent:v,type:g,depth:y,text:e,characterList:d,prevSibling:S||(0===s||r[s-1].parent!==v?null:r[s-1].key),nextSibling:s===r.length-1||r[s+1].parent!==v?null:r[s+1].key});return t.contentBlocks.push(L),t.cacheRef[L.key]=s,t},e).contentBlocks},et=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,r=$(t,e,n,f);if(null==r)return null;var i=r.chunk,o=r.entityMap;return{contentBlocks:tt(i),entityMap:o}};t.exports=et},function(t,e,n){"use strict";function r(t){var e,n=null;return!u&&document.implementation&&document.implementation.createHTMLDocument&&(e=document.implementation.createHTMLDocument("foo"),e.documentElement||o(!1),e.documentElement.innerHTML=t,n=e.getElementsByTagName("body")[0]),n}var i=n(18),o=n(1),u=i.isBrowser("IE <= 9");t.exports=r},function(t,e,n){"use strict";var r=n(5),i=n(2),o=(n(43),n(252)),u=n(13),a={currentBlockContainsLink:function(t){var e=t.getSelection(),n=t.getCurrentContent(),r=n.getEntityMap();return n.getBlockForKey(e.getAnchorKey()).getCharacterList().slice(e.getStartOffset(),e.getEndOffset()).some(function(t){var e=t.getEntity();return!!e&&"LINK"===r.__get(e).getType()})},getCurrentBlockType:function(t){var e=t.getSelection();return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType()},getDataObjectForLinkURL:function(t){return{url:t.toString()}},handleKeyCommand:function(t,e){switch(e){case"bold":return a.toggleInlineStyle(t,"BOLD");case"italic":return a.toggleInlineStyle(t,"ITALIC");case"underline":return a.toggleInlineStyle(t,"UNDERLINE");case"code":return a.toggleCode(t);case"backspace":case"backspace-word":case"backspace-to-start-of-line":return a.onBackspace(t);case"delete":case"delete-word":case"delete-to-end-of-block":return a.onDelete(t);default:return null}},insertSoftNewline:function(t){var e=r.insertText(t.getCurrentContent(),t.getSelection(),"\n",t.getCurrentInlineStyle(),null),n=i.push(t,e,"insert-characters");return i.forceSelection(n,e.getSelectionAfter())},onBackspace:function(t){var e=t.getSelection();if(!e.isCollapsed()||e.getAnchorOffset()||e.getFocusOffset())return null;var n=t.getCurrentContent(),r=e.getStartKey(),o=n.getBlockBefore(r);if(o&&"atomic"===o.getType()){var u=n.getBlockMap().delete(o.getKey()),s=n.merge({blockMap:u,selectionAfter:e});if(s!==n)return i.push(t,s,"remove-range")}var c=a.tryToRemoveBlockStyle(t);return c?i.push(t,c,"change-block-type"):null},onDelete:function(t){var e=t.getSelection();if(!e.isCollapsed())return null;var n=t.getCurrentContent(),o=e.getStartKey(),u=n.getBlockForKey(o),a=u.getLength();if(e.getStartOffset()<a)return null;var s=n.getBlockAfter(o);if(!s||"atomic"!==s.getType())return null;var c=e.merge({focusKey:s.getKey(),focusOffset:s.getLength()}),l=r.removeRange(n,c,"forward");return l!==n?i.push(t,l,"remove-range"):null},onTab:function(t,e,n){var r=e.getSelection(),u=r.getAnchorKey();if(u!==r.getFocusKey())return e;var a=e.getCurrentContent(),s=a.getBlockForKey(u),c=s.getType();if("unordered-list-item"!==c&&"ordered-list-item"!==c)return e;t.preventDefault();var l=a.getBlockBefore(u);if(!l)return e;var f=l.getType();if("unordered-list-item"!==f&&"ordered-list-item"!==f)return e;var p=s.getDepth();if(!t.shiftKey&&p===n)return e;n=Math.min(l.getDepth()+1,n);var h=o(a,r,t.shiftKey?-1:1,n);return i.push(e,h,"adjust-depth")},toggleBlockType:function(t,e){var n=t.getSelection(),o=n.getStartKey(),a=n.getEndKey(),s=t.getCurrentContent(),c=n;if(o!==a&&0===n.getEndOffset()){var l=u(s.getBlockBefore(a));a=l.getKey(),c=c.merge({anchorKey:o,anchorOffset:n.getStartOffset(),focusKey:a,focusOffset:l.getLength(),isBackward:!1})}if(s.getBlockMap().skipWhile(function(t,e){return e!==o}).reverse().skipWhile(function(t,e){return e!==a}).some(function(t){return"atomic"===t.getType()}))return t;var f=s.getBlockForKey(o).getType()===e?"unstyled":e;return i.push(t,r.setBlockType(s,c,f),"change-block-type")},toggleCode:function(t){var e=t.getSelection(),n=e.getAnchorKey(),r=e.getFocusKey();return e.isCollapsed()||n!==r?a.toggleBlockType(t,"code-block"):a.toggleInlineStyle(t,"CODE")},toggleInlineStyle:function(t,e){var n=t.getSelection(),o=t.getCurrentInlineStyle();if(n.isCollapsed())return i.setInlineStyleOverride(t,o.has(e)?o.remove(e):o.add(e));var u,a=t.getCurrentContent();return u=o.has(e)?r.removeInlineStyle(a,n,e):r.applyInlineStyle(a,n,e),i.push(t,u,"change-inline-style")},toggleLink:function(t,e,n){var o=r.applyEntity(t.getCurrentContent(),e,n);return i.push(t,o,"apply-entity")},tryToRemoveBlockStyle:function(t){var e=t.getSelection(),n=e.getAnchorOffset();if(e.isCollapsed()&&0===n){var i=e.getAnchorKey(),o=t.getCurrentContent(),u=o.getBlockForKey(i),a=o.getFirstBlock();if(u.getLength()>0&&u!==a)return null;var s=u.getType(),c=o.getBlockBefore(i);if("code-block"===s&&c&&"code-block"===c.getType()&&0!==c.getLength())return null;if("unstyled"!==s)return r.setBlockType(o,e,"unstyled")}return null}};t.exports=a},function(t,e,n){"use strict";var r={stringify:function(t){return"_"+String(t)},unstringify:function(t){return t.slice(1)}};t.exports=r},function(t,e,n){t.exports={default:n(272),__esModule:!0}},function(t,e,n){var r=n(30);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(42),i=n(6)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(29);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(20);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(323);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(325);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})})},function(t,e,n){"use strict";function r(t){this.tokens=[],this.tokens.links={},this.options=l({},t||p),this.rules=h.normal,this.options.gfm&&(this.rules=h.gfm)}function i(t,e){if(this.options=l({},e||p),this.links=t,this.rules=d.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=d.breaks:this.rules=d.gfm:this.options.pedantic&&(this.rules=d.pedantic)}function o(t){this.options=t||{}}function u(t){this.tokens=[],this.token=null,this.options=l({},t||p),this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(t,e){return t=t.source,e=e||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),t=t.replace(r,i),n):new RegExp(t,e)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(142),c=Object.prototype.hasOwnProperty,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)c.call(n,r)&&(t[r]=n[r])}return t},f=function(){};f.exec=f;var p={gfm:!0,breaks:!1,pedantic:!1,smartLists:!1,silent:!1,langPrefix:"lang-",renderer:new o,xhtml:!1},h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:f,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:f,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=a(h.item,"gm")(/bull/g,h.bullet)(),h.list=a(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=a(h.blockquote)("def",h.def)(),h.paragraph=a(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("def",h.def)(),h.normal=l({},h),h.gfm=l({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=a(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),r.rules=h,r.parse=function(t,e){return new r(e).parse(t)},r.prototype.parse=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},r.prototype.token=function(t,e,n){var r,i,o,u,a,s,c,l,f;for(t=t.replace(/^ +$/gm,"");t;)if((o=this.rules.newline.exec(t))&&(t=t.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(t))t=t.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]});else if(o=this.rules.heading.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(o=this.rules.lheading.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,e,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(t)){for(t=t.substring(o[0].length),u=o[2],this.tokens.push({type:"list_start",ordered:u.length>1}),o=o[0].match(this.rules.item),r=!1,f=o.length,l=0;l<f;l++)s=o[l],c=s.length,s=s.replace(/^ *([*+-]|\d+\.) +/,""),~s.indexOf("\n ")&&(c-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&l!==f-1&&(a=h.bullet.exec(o[l+1])[0],u===a||u.length>1&&a.length>1||(t=o.slice(l+1).join("\n")+t,l=f-1)),i=r||/\n\n(?!\s*$)/.test(s),l!==f-1&&(r="\n"===s.charAt(s.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(s,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(!n&&e&&(o=this.rules.def.exec(t)))t=t.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(e&&(o=this.rules.paragraph.exec(t)))t=t.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var d={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:f,ins:f,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};d._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,d._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,d.link=a(d.link)("inside",d._inside)("href",d._href)(),d.reflink=a(d.reflink)("inside",d._inside)(),d.normal=l({},d),d.pedantic=l({},d.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),d.gfm=l({},d.normal,{escape:a(d.escape)("])","~|])")(),del:/^~~(?=\S)([\s\S]*?\S)~~/,ins:/^\+\+(?=\S)([\s\S]*?\S)\+\+/,text:a(d.text)("]|","~+]|")()}),d.breaks=l({},d.gfm,{br:a(d.br)("{2,}","*")(),text:a(d.gfm.text)("{2,}","*")()}),i.rules=d,i.parse=function(t,e,n){return new i(e,n).parse(t)},i.prototype.parse=function(t){for(var e,n,r=new s.FragmentNode;t;)if(n=this.rules.escape.exec(t))t=t.substring(n[0].length),r.appendChild(new s.TextNode(n[1]));else if(n=this.rules.link.exec(t))t=t.substring(n[0].length),this.inLink=!0,r.appendChild(this.outputLink(n,{href:n[2],title:n[3]})),this.inLink=!1;else if((n=this.rules.reflink.exec(t))||(n=this.rules.nolink.exec(t))){if(t=t.substring(n[0].length),e=(n[2]||n[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){r.appendChild(new s.TextNode(n[0].charAt(0))),t=n[0].substring(1)+t;continue}this.inLink=!0,r.appendChild(this.outputLink(n,e)),this.inLink=!1}else if(n=this.rules.strong.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.strong(this.parse(n[2]||n[1])));else if(n=this.rules.em.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.em(this.parse(n[2]||n[1])));else if(n=this.rules.code.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.codespan(n[2]));else if(n=this.rules.br.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.br());else if(n=this.rules.del.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.del(this.parse(n[1])));else if(n=this.rules.ins.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.ins(this.parse(n[1])));else if(n=this.rules.text.exec(t))t=t.substring(n[0].length),r.appendChild(this.renderer.text(new s.TextNode(n[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return r},i.prototype.outputLink=function(t,e){var n=e.href,r=e.title;return"!"!==t[0].charAt(0)?this.renderer.link(n,r,this.parse(t[1])):this.renderer.image(n,r,t[1])},o.prototype.code=function(t,e){var n=[];e&&n.push({name:"class",value:this.options.langPrefix+e});var r=new s.ElementNode("code",n,[t]);return new s.ElementNode("pre",[],[r])},o.prototype.blockquote=function(t){return new s.ElementNode("blockquote",[],[t])},o.prototype.heading=function(t,e){return new s.ElementNode("h"+e,[],[t])},o.prototype.hr=function(){return new s.ElementNode("hr",[],s.SELF_CLOSING)},o.prototype.list=function(t,e){return new s.ElementNode(e?"ol":"ul",[],[t])},o.prototype.listitem=function(t){return new s.ElementNode("li",[],[t])},o.prototype.paragraph=function(t){return new s.ElementNode("p",[],[t])},o.prototype.strong=function(t){return new s.ElementNode("strong",[],[t])},o.prototype.em=function(t){return new s.ElementNode("em",[],[t])},o.prototype.codespan=function(t){return new s.ElementNode("code",[],[new s.TextNode(t)])},o.prototype.br=function(){return new s.ElementNode("br",[],s.SELF_CLOSING)},o.prototype.del=function(t){return new s.ElementNode("del",[],[t])},o.prototype.ins=function(t){return new s.ElementNode("ins",[],[t])},o.prototype.link=function(t,e,n){var r=[{name:"href",value:t}];return e&&r.push({name:"title",value:e}),new s.ElementNode("a",r,[n])},o.prototype.image=function(t,e,n){var r=[{name:"src",value:t}];return e&&r.push({name:"title",value:e}),n&&r.push({name:"alt",value:n}),new s.ElementNode("img",r,s.SELF_CLOSING)},o.prototype.text=function(t){return t},u.parse=function(t,e,n){return new u(e,n).parse(t)},u.prototype.parse=function(t){this.inline=new i(t.links,this.options,this.renderer),this.tokens=t.slice().reverse();for(var e=new s.FragmentNode;this.next();)e.appendChild(this.tok());return e},u.prototype.next=function(){return this.token=this.tokens.pop()},u.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},u.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.parse(t)},u.prototype.tok=function(){switch(this.token.type){case"space":return new s.TextNode("");case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.parse(this.token.text),this.token.depth);case"code":return this.renderer.code(this.token.text,this.token.lang);case"blockquote_start":for(var t=new s.FragmentNode;"blockquote_end"!==this.next().type;)t.appendChild(this.tok());return this.renderer.blockquote(t);case"list_start":for(var e=new s.FragmentNode,n=this.token.ordered;"list_end"!==this.next().type;)e.appendChild(this.tok());return this.renderer.list(e,n);case"list_item_start":for(var r=new s.FragmentNode;"list_item_end"!==this.next().type;)r.appendChild("text"===this.token.type?this.parseText():this.tok());return this.renderer.listitem(r);case"loose_item_start":for(var i=new s.FragmentNode;"list_item_end"!==this.next().type;)i.appendChild(this.tok());return this.renderer.listitem(i);case"paragraph":return this.renderer.paragraph(this.inline.parse(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var y={parse:function(t,e){e=l({},p,e);try{var n=u.parse(r.parse(t,e),e)}catch(t){if(!e.silent)throw t;n=new s.FragmentNode([new s.ElementNode("p",[],[new s.TextNode("An error occured:")]),new s.ElementNode("pre",[],[new s.TextNode(t.message)])])}return e.getAST?new s.ElementNode("body",[],[n]):n.toString(this.options.xhtml)}};e.default=y},function(t,e,n){"use strict";function r(t,e,n){var r=t.getCurrentContent(),i=r.getBlockForKey(e);if(i.getDepth()===n)return t;var o=i.set("depth",n),u=r.merge({blockMap:r.getBlockMap().set(e,o)});return F.EditorState.push(t,u,"adjust-depth")}function i(t,e,n){var r=t.getCurrentContent(),i=r.getBlockForKey(e);if(i.getType()===n)return t;var o=i.set("type",n),u=r.merge({blockMap:r.getBlockMap().set(e,o)});return F.EditorState.push(t,u,"change-block-type")}function o(t){var e=t.getCurrentContent(),n=e.getBlockMap(),r=t.getSelection();if(r.isCollapsed())return new H.OrderedMap;var i=r.getStartKey(),o=r.getEndKey();return i===o?new H.OrderedMap({startKey:e.getBlockForKey(i)}):n.takeUntil(function(t,e){return e===o}).skipUntil(function(t,e){return e===i})}function u(t,e,n){var r=t.getCurrentContent(),i=r.getBlockMap(),o=i.get(e),u=i.toSeq().takeUntil(function(t){return t===o}),a=i.toSeq().skipUntil(function(t){return t===o}).rest(),s=Object(F.genKey)(),c=new F.ContentBlock({key:s,type:n,text:"",characterList:o.getCharacterList().slice(0,0),depth:0}),l=u.concat([[e,o],[s,c]],a).toOrderedMap(),f=t.getSelection(),p=r.merge({blockMap:l,selectionBefore:f,selectionAfter:f.merge({anchorKey:s,anchorOffset:0,focusKey:s,focusOffset:0,isBackward:!1})});return F.EditorState.push(t,p,"split-block")}function a(t){var e=t.getType();return e===W.BLOCK_TYPE.UNORDERED_LIST_ITEM||e===W.BLOCK_TYPE.ORDERED_LIST_ITEM}function s(t){var e=lt()(t.className,_t.a.root);return U.a.createElement("div",I()({},t,{className:e}))}function c(t){var e=lt()(t.className,kt.a.root);return U.a.createElement("div",I()({},t,{className:e}))}function l(t,e){var n=t.getEntityAt(e);if(null==n)return null;for(var r=e;r>0&&t.getEntityAt(r-1)===n;)r-=1;for(var i=r,o=t.getLength();i<o&&t.getEntityAt(i+1)===n;)i+=1;return{entityKey:n,blockKey:t.getKey(),startOffset:r,endOffset:i+1}}function f(t){var e=t.getSelection(),n=e.getStartKey(),r=t.getCurrentContent().getBlockForKey(n),i=e.getStartOffset();if(e.isCollapsed())return l(r,0===i?i:i-1);if(n!==e.getEndKey())return null;for(var o=e.getEndOffset(),u=r.getEntityAt(i),a=i;a<o;a++){var s=r.getEntityAt(a);if(null==s||s!==u)return null}return{entityKey:u,blockKey:r.getKey(),startOffset:i,endOffset:o}}function p(t,e,n,r){var i=t.getCurrentContent(),o=i.getBlockMap(),u=o.get(e),a=u.getCharacterList(),s=a.map(function(t,e){return e>=n&&e<r?F.CharacterMetadata.applyEntity(t,null):t}),c=u.set("characterList",s),l=o.set(e,c),f=i.set("blockMap",l);return F.EditorState.push(t,f,"apply-entity")}function h(t,e,n){var r=t.getCurrentContent();switch(e){case"html":return Object(Ht.stateToHTML)(r,n);case"markdown":return Object(Qt.stateToMarkdown)(r);case"raw":return qt()(Object(F.convertToRaw)(r));default:throw new Error("Format not supported: "+e)}}function d(t,e,n){switch(e){case"html":return Object(Wt.stateFromHTML)(t,n);case"markdown":return Object(Gt.stateFromMarkdown)(t,n);case"raw":return Object(F.convertFromRaw)(JSON.parse(t));default:throw new Error("Format not supported: "+e)}}function y(t){var e=t.contentState.getEntity(t.entityKey).getData(),n=e.url;return U.a.createElement("a",{href:n},t.children)}function g(t,e,n){t.findEntityRanges(function(t){var e=t.getEntity();if(null!=e){var r=n?n.getEntity(e):null;return null!=r&&r.getType()===W.ENTITY_TYPE.LINK}return!1},e)}function v(t,e,n){t.findEntityRanges(function(t){var e=t.getEntity();if(null!=e){var r=n?n.getEntity(e):null;return null!=r&&r.getType()===W.ENTITY_TYPE.IMAGE}return!1},e)}function _(t,e){return function(n){if(e){var r=e(n);if(null!=r)return r}return t(n)}}function m(t){var e=ae.a.block;switch(t.getType()){case"unstyled":return lt()(e,ae.a.paragraph);case"blockquote":return lt()(e,ae.a.blockquote);case"code-block":return lt()(e,ae.a.codeBlock);default:return e}}function S(){return Jt.createEmpty(le)}function b(t,e,n){return Jt.createFromString(t,e,le,n)}Object.defineProperty(e,"__esModule",{value:!0});var w=n(97),M=n.n(w),E=n(56),x=n.n(E),k=n(21),I=n.n(k),L=n(41),T=n.n(L),D=n(22),O=n.n(D),C=n(16),N=n.n(C),j=n(17),A=n.n(j),z=n(23),B=n.n(z),R=n(24),K=n.n(R),P=n(3),U=n.n(P),F=n(12),Y=n(92),q=n.n(Y),H=n(93),W=n(32),Q=n(271),G=n.n(Q),V=n(135),J=n.n(V),Z=n(276),X=n.n(Z),$=n(75),tt=n.n($),et=n(64),nt=n(38),rt=n.n(nt),it=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Strikethrough",style:"STRIKETHROUGH"},{label:"Monospace",style:"CODE"},{label:"Underline",style:"UNDERLINE"}],ot=[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"},{label:"Code Block",style:"code-block"}],ut=[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}],at={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","LINK_BUTTONS","IMAGE_BUTTON","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:it,BLOCK_TYPE_DROPDOWN:ot,BLOCK_TYPE_BUTTONS:ut},st=at,ct=n(27),lt=n.n(ct),ft=n(33),pt=n.n(ft),ht=n(292),dt=n.n(ht),yt=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t}return K()(e,t),A()(e,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.isDisabled,r=t.focusOnClick,i=t.formSubmit,o=T()(t,["className","isDisabled","focusOnClick","formSubmit"]);e=lt()(e,dt.a.root);var u=!1===r?this._onMouseDownPreventDefault:t.onMouseDown,a=i?"submit":"button";return U.a.createElement("button",I()({type:a},o,{onMouseDown:u,className:e,disabled:n}),t.children)}},{key:"_onMouseDownPreventDefault",value:function(t){t.preventDefault();var e=this.props.onMouseDown;null!=e&&e(t)}}]),e}(P.Component),gt=yt,vt=n(295),_t=n.n(vt),mt=n(297),St=n.n(mt),bt=function(t){function e(){return N()(this,e),B()(this,(e.__proto__||O()(e)).apply(this,arguments))}return K()(e,t),A()(e,[{key:"render",value:function(){var t,e=this.props,n=e.className,r=e.iconName,i=e.label,o=e.children,u=e.isActive,a=T()(e,["className","iconName","label","children","isActive"]);return n=lt()(n,(t={},x()(t,St.a.root,!0),x()(t,St.a.isActive,u),t)),U.a.createElement(s,null,U.a.createElement(gt,I()({},a,{title:i,className:n}),U.a.createElement("span",{className:St.a["icon-"+r]})),o)}}]),e}(P.Component),wt=bt,Mt=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t}return K()(e,t),A()(e,[{key:"render",value:function(){var t=this.props,e=t.style,n=(t.onToggle,T()(t,["style","onToggle"])),r=e.toLowerCase();return U.a.createElement(wt,I()({},n,{iconName:r,onClick:this._onClick,focusOnClick:!1}))}},{key:"_onClick",value:function(){this.props.onToggle(this.props.style)}}]),e}(P.Component),Et=Mt,xt=n(299),kt=n.n(xt),It=n(301),Lt=n.n(It),Tt=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t}return K()(e,t),A()(e,[{key:"componentDidMount",value:function(){document.addEventListener("click",this._onDocumentClick),document.addEventListener("keydown",this._onDocumentKeydown),this._inputRef&&this._inputRef.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this._onDocumentClick),document.removeEventListener("keydown",this._onDocumentKeydown)}},{key:"render",value:function(){var t=this.props,e=lt()(t.className,Lt.a.root);return U.a.createElement("div",{className:e},U.a.createElement("div",{className:Lt.a.inner},U.a.createElement("input",{ref:this._setInputRef,type:"text",placeholder:"https://example.com/",className:Lt.a.input,onKeyPress:this._onInputKeyPress}),U.a.createElement(c,{className:Lt.a.buttonGroup},U.a.createElement(wt,{label:"Cancel",iconName:"cancel",onClick:t.onCancel}),U.a.createElement(wt,{label:"Submit",iconName:"accept",onClick:this._onSubmit}))))}},{key:"_setInputRef",value:function(t){this._inputRef=t}},{key:"_onInputKeyPress",value:function(t){13===t.which&&(t.preventDefault(),this._onSubmit())}},{key:"_onSubmit",value:function(){var t=this._inputRef?this._inputRef.value:"";this.props.onSubmit(t)}},{key:"_onDocumentClick",value:function(t){rt.a.findDOMNode(this).contains(t.target)||this.props.onCancel(t)}},{key:"_onDocumentKeydown",value:function(t){27===t.keyCode&&this.props.onCancel()}}]),e}(P.Component),Dt=Tt,Ot=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t}return K()(e,t),A()(e,[{key:"render",value:function(){var t=this.props,e=t.onTogglePopover,n=(t.showPopover,T()(t,["onTogglePopover","showPopover"]));return U.a.createElement(wt,I()({},n,{onClick:e}),this._renderPopover())}},{key:"_renderPopover",value:function(){return this.props.showPopover?U.a.createElement(Dt,{onSubmit:this._onSubmit,onCancel:this._hidePopover}):null}},{key:"_onSubmit",value:function(){var t;(t=this.props).onSubmit.apply(t,arguments)}},{key:"_hidePopover",value:function(){if(this.props.showPopover){var t;(t=this.props).onTogglePopover.apply(t,arguments)}}}]),e}(P.Component),Ct=Ot,Nt=n(303),jt=n.n(Nt),At=n(310),zt=n.n(At),Bt=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t}return K()(e,t),A()(e,[{key:"render",value:function(){var t=this.props,e=t.choices,n=t.selectedKey,r=t.className,i=T()(t,["choices","selectedKey","className"]);r=lt()(r,zt.a.root);var o=null==n?null:e.get(n),u=o&&o.label||"";return U.a.createElement("span",{className:r,title:u},U.a.createElement("select",I()({},i,{value:n,onChange:this._onChange}),this._renderChoices()),U.a.createElement("span",{className:zt.a.value},u))}},{key:"_onChange",value:function(t){var e=t.target.value;this.props.onChange(e)}},{key:"_renderChoices",value:function(){var t=this.props.choices;return J()(t.entries()).map(function(t){var e=jt()(t,2),n=e[0],r=e[1],i=r.label,o=r.className;return U.a.createElement("option",{key:n,value:n,className:o},i)})}}]),e}(P.Component),Rt=Bt,Kt=n(312),Pt=n.n(Kt),Ut=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return pt()(t),t.state={showLinkInput:!1,showImageInput:!1,customControlState:{}},t}return K()(e,t),A()(e,[{key:"componentWillMount",value:function(){this.props.keyEmitter.on("keypress",this._onKeypress)}},{key:"componentWillUnmount",value:function(){this.props.keyEmitter.removeListener("keypress",this._onKeypress)}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.toolbarConfig,i=e.rootStyle;null==r&&(r=st);var o=r.display||st.display,u=o.map(function(e){switch(e){case"INLINE_STYLE_BUTTONS":return t._renderInlineStyleButtons(e,r);case"BLOCK_TYPE_DROPDOWN":return t._renderBlockTypeDropdown(e,r);case"LINK_BUTTONS":return t._renderLinkButtons(e,r);case"IMAGE_BUTTON":return t._renderImageButton(e,r);case"BLOCK_TYPE_BUTTONS":return t._renderBlockTypeButtons(e,r);case"HISTORY_BUTTONS":return t._renderUndoRedo(e,r)}});return U.a.createElement("div",{className:lt()(Pt.a.root,n),style:i},u,this._renderCustomControls())}},{key:"_renderCustomControls",value:function(){var t=this,e=this.props,n=e.customControls,r=e.editorState;if(null!=n)return n.map(function(e){switch(void 0===e?"undefined":tt()(e)){case"function":return e(t._setCustomControlState,t._getCustomControlState,r);default:return e}})}},{key:"_setCustomControlState",value:function(t,e){this.setState(function(n){var r=n.customControlState;return{customControlState:I()({},r,x()({},t,e))}})}},{key:"_getCustomControlState",value:function(t){return this.state.customControlState[t]}},{key:"_renderBlockTypeDropdown",value:function(t,e){var n=this._getCurrentBlockType(),r=new X.a((e.BLOCK_TYPE_DROPDOWN||[]).map(function(t){return[t.style,{label:t.label,className:t.className}]}));return r.has(n)||(n=J()(r.keys())[0]),U.a.createElement(c,{key:t},U.a.createElement(Rt,I()({},e.extraProps,{choices:r,selectedKey:n,onChange:this._selectBlockType})))}},{key:"_renderBlockTypeButtons",value:function(t,e){var n=this,r=this._getCurrentBlockType(),i=(e.BLOCK_TYPE_BUTTONS||[]).map(function(t,i){return U.a.createElement(Et,I()({},e.extraProps,{key:String(i),isActive:t.style===r,label:t.label,onToggle:n._toggleBlockType,style:t.style,className:t.className}))});return U.a.createElement(c,{key:t},i)}},{key:"_renderInlineStyleButtons",value:function(t,e){var n=this,r=this.props.editorState,i=r.getCurrentInlineStyle(),o=(e.INLINE_STYLE_BUTTONS||[]).map(function(t,r){return U.a.createElement(Et,I()({},e.extraProps,{key:String(r),isActive:i.has(t.style),label:t.label,onToggle:n._toggleInlineStyle,style:t.style,className:t.className}))});return U.a.createElement(c,{key:t},o)}},{key:"_renderLinkButtons",value:function(t,e){var n=this.props.editorState,r=n.getSelection(),i=this._getEntityAtCursor(),o=!r.isCollapsed(),u=null!=i&&i.type===W.ENTITY_TYPE.LINK,a=o||u;return U.a.createElement(c,{key:t},U.a.createElement(Ct,{label:"Link",iconName:"link",isDisabled:!a,showPopover:this.state.showLinkInput,onTogglePopover:this._toggleShowLinkInput,onSubmit:this._setLink}),U.a.createElement(wt,I()({},e.extraProps,{label:"Remove Link",iconName:"remove-link",isDisabled:!u,onClick:this._removeLink,focusOnClick:!1})))}},{key:"_renderImageButton",value:function(t){return U.a.createElement(c,{key:t},U.a.createElement(Ct,{label:"Image",iconName:"image",showPopover:this.state.showImageInput,onTogglePopover:this._toggleShowImageInput,onSubmit:this._setImage}))}},{key:"_renderUndoRedo",value:function(t,e){var n=this.props.editorState,r=0!==n.getUndoStack().size,i=0!==n.getRedoStack().size;return U.a.createElement(c,{key:t},U.a.createElement(wt,I()({},e.extraProps,{label:"Undo",iconName:"undo",isDisabled:!r,onClick:this._undo,focusOnClick:!1})),U.a.createElement(wt,I()({},e.extraProps,{label:"Redo",iconName:"redo",isDisabled:!i,onClick:this._redo,focusOnClick:!1})))}},{key:"_onKeypress",value:function(t,e){Object(et.hasCommandModifier)(t)&&75===t.keyCode&&(this.props.editorState.getSelection().isCollapsed()||(this.setState({showLinkInput:!0}),e.wasHandled=!0))}},{key:"_toggleShowLinkInput",value:function(t){var e=this.state.showLinkInput;if(e){var n=!0;if(t&&"click"===t.type){var r=rt.a.findDOMNode(this).parentNode,i=document,o=i.activeElement;null==o||o===document.body||r.contains(o)||(n=!1)}n&&this.props.focusEditor()}this.setState({showLinkInput:!e})}},{key:"_toggleShowImageInput",value:function(t){var e=this.state.showImageInput;if(e){var n=!0;if(t&&"click"===t.type){var r=rt.a.findDOMNode(this).parentNode,i=document,o=i.activeElement;null==o||o===document.body||r.contains(o)||(n=!1)}n&&this.props.focusEditor()}this.setState({showImageInput:!e})}},{key:"_setImage",value:function(t){var e=this.props.editorState,n=e.getCurrentContent(),r=e.getSelection();n=n.createEntity(W.ENTITY_TYPE.IMAGE,"IMMUTABLE",{src:t});var i=n.getLastCreatedEntityKey(),o=F.Modifier.insertText(n,r," ",null,i);this.setState({showImageInput:!1}),this.props.onChange(F.EditorState.push(e,o)),this._focusEditor()}},{key:"_setLink",value:function(t){var e=this.props.editorState,n=e.getCurrentContent(),r=e.getSelection();n=n.createEntity(W.ENTITY_TYPE.LINK,"MUTABLE",{url:t});var i=n.getLastCreatedEntityKey(),o=F.EditorState.push(e,n);this.setState({showLinkInput:!1}),this.props.onChange(F.RichUtils.toggleLink(o,r,i)),this._focusEditor()}},{key:"_removeLink",value:function(){var t=this.props.editorState,e=f(t);if(null!=e){var n=e.blockKey,r=e.startOffset,i=e.endOffset;this.props.onChange(p(t,n,r,i))}}},{key:"_getEntityAtCursor",value:function(){var t=this.props.editorState,e=t.getCurrentContent(),n=f(t);return null==n?null:e.getEntity(n.entityKey)}},{key:"_getCurrentBlockType",value:function(){var t=this.props.editorState,e=t.getSelection();return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType()}},{key:"_selectBlockType",value:function(){this._toggleBlockType.apply(this,arguments),this._focusEditor()}},{key:"_toggleBlockType",value:function(t){this.props.onChange(F.RichUtils.toggleBlockType(this.props.editorState,t))}},{key:"_toggleInlineStyle",value:function(t){this.props.onChange(F.RichUtils.toggleInlineStyle(this.props.editorState,t))}},{key:"_undo",value:function(){var t=this.props.editorState;this.props.onChange(F.EditorState.undo(t))}},{key:"_redo",value:function(){var t=this.props.editorState;this.props.onChange(F.EditorState.redo(t))}},{key:"_focusEditor",value:function(){var t=this;setTimeout(function(){t.props.focusEditor()},50)}}]),e}(P.Component),Ft=Ut,Yt=n(314),qt=n.n(Yt),Ht=n(316),Wt=n(321),Qt=n(328),Gt=n(330),Vt=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};N()(this,t),this._cache=n,this._editorState=e}return A()(t,[{key:"getEditorState",value:function(){return this._editorState}},{key:"setEditorState",value:function(e){return this._editorState===e?this:new t(e)}},{key:"toString",value:function(t,e){var n=this._cache[t];return null!=n?n:this._cache[t]=h(this.getEditorState(),t,e)}},{key:"setContentFromString",value:function(e,n,r){return new t(F.EditorState.push(this._editorState,d(e,n,r),"secondary-paste"),x()({},n,e))}}],[{key:"createEmpty",value:function(e){return new t(F.EditorState.createEmpty(e))}},{key:"createFromState",value:function(e){return new t(e)}},{key:"createFromString",value:function(e,n,r,i){var o=d(e,n,i);return new t(F.EditorState.createWithContent(o,r),x()({},n,e))}}]),t}(),Jt=Vt,Zt={strategy:g,component:y},Xt=n(332),$t=n.n(Xt),te=function(t){function e(t){N()(this,e);var n=B()(this,(e.__proto__||O()(e)).call(this,t));pt()(n);var r=t.contentState.getEntity(t.entityKey),i=r.getData(),o=i.width,u=i.height;return n.state={width:o,height:u},n}return K()(e,t),A()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.state,n=e.width,r=e.height,i=this.props.contentState.getEntity(this.props.entityKey),o=new Image,u=i.getData(),a=u.src;o.src=a,o.onload=function(){null!=n&&null!=r||(t.setState({width:o.width,height:o.height}),F.Entity.mergeData(t.props.entityKey,{width:o.width,height:o.height,originalWidth:o.width,originalHeight:o.height}))}}},{key:"render",value:function(){var t=this.state,e=t.width,n=t.height,r=this.props.className,i=this.props.contentState.getEntity(this.props.entityKey),o=i.getData(),u=o.src;r=lt()(r,$t.a.root);var a={verticalAlign:"bottom",backgroundImage:'url("'+u+'")',backgroundSize:e+"px "+n+"px",lineHeight:n+"px",fontSize:n+"px",width:e,height:n,letterSpacing:e};return U.a.createElement("span",{className:r,style:a,onClick:this._onClick},this.props.children)}},{key:"_onClick",value:function(){console.log("image clicked")}},{key:"_handleResize",value:function(t,e){var n=e.size,r=n.width,i=n.height;this.setState({width:r,height:i}),F.Entity.mergeData(this.props.entityKey,{width:r,height:i})}}]),e}(P.Component),ee=te,ne={strategy:v,component:ee},re=_,ie=n(334),oe=n.n(ie),ue=(n(335),n(337)),ae=n.n(ue);n.d(e,"decorator",function(){return le}),n.d(e,"createEmptyValue",function(){return S}),n.d(e,"createValueFromString",function(){return b}),n.d(e,"EditorValue",function(){return Jt}),n.d(e,"ButtonGroup",function(){return c}),n.d(e,"Button",function(){return gt}),n.d(e,"Dropdown",function(){return Rt});var se={CODE:{backgroundColor:"#f3f3f3",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}},ce=function(t){function e(){N()(this,e);var t=B()(this,(e.__proto__||O()(e)).apply(this,arguments));return t._keyEmitter=new oe.a,pt()(t),t}return K()(e,t),A()(e,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this._focus()}},{key:"render",value:function(){var t,e=this.props,n=e.value,r=e.className,i=e.toolbarClassName,o=e.editorClassName,u=e.placeholder,a=e.customStyleMap,s=e.readOnly,c=e.disabled,l=e.toolbarConfig,f=e.blockStyleFn,p=e.customControls,h=e.keyBindingFn,d=e.rootStyle,y=e.toolbarStyle,g=e.editorStyle,v=T()(e,["value","className","toolbarClassName","editorClassName","placeholder","customStyleMap","readOnly","disabled","toolbarConfig","blockStyleFn","customControls","keyBindingFn","rootStyle","toolbarStyle","editorStyle"]),_=n.getEditorState();a=a?I()({},se,a):se;var S=lt()((t={},x()(t,ae.a.editor,!0),x()(t,ae.a.hidePlaceholder,this._shouldHidePlaceholder()),t),o);null==s&&(s=c);var b=void 0;return s||(b=U.a.createElement(Ft,{rootStyle:y,className:i,keyEmitter:this._keyEmitter,editorState:_,onChange:this._onChange,focusEditor:this._focus,toolbarConfig:l,customControls:p})),U.a.createElement("div",{className:lt()(ae.a.root,r),style:d},b,U.a.createElement("div",{className:S,style:g},U.a.createElement(F.Editor,I()({},v,{blockStyleFn:re(m,f),customStyleMap:a,editorState:_,handleReturn:this._handleReturn,keyBindingFn:h||this._customKeyHandler,handleKeyCommand:this._handleKeyCommand,onTab:this._onTab,onChange:this._onChange,placeholder:u,ref:"editor",spellCheck:!0,readOnly:s}))))}},{key:"_shouldHidePlaceholder",value:function(){var t=this.props.value.getEditorState(),e=t.getCurrentContent();return!e.hasText()&&"unstyled"!==e.getBlockMap().first().getType()}},{key:"_handleReturn",value:function(t){var e=this.props.handleReturn;return!!(null!=e&&e(t)||this._handleReturnSoftNewline(t)||this._handleReturnEmptyListItem()||this._handleReturnSpecialBlock())}},{key:"_handleReturnSoftNewline",value:function(t){var e=this.props.value.getEditorState();if(G()(t)){var n=e.getSelection();if(n.isCollapsed())this._onChange(F.RichUtils.insertSoftNewline(e));else{var r=e.getCurrentContent(),i=F.Modifier.removeRange(r,n,"forward"),o=i.getSelectionAfter(),u=i.getBlockForKey(o.getStartKey());i=F.Modifier.insertText(i,o,"\n",u.getInlineStyleAt(o.getStartOffset()),null),this._onChange(F.EditorState.push(e,i,"insert-fragment"))}return!0}return!1}},{key:"_handleReturnEmptyListItem",value:function(){var t=this.props.value.getEditorState(),e=t.getSelection();if(e.isCollapsed()){var n=t.getCurrentContent(),o=e.getStartKey(),u=n.getBlockForKey(o);if(a(u)&&0===u.getLength()){var s=u.getDepth(),c=0===s?i(t,o,W.BLOCK_TYPE.UNSTYLED):r(t,o,s-1);return this._onChange(c),!0}}return!1}},{key:"_handleReturnSpecialBlock",value:function(){var t=this.props.value.getEditorState(),e=t.getSelection();if(e.isCollapsed()){var n=t.getCurrentContent(),r=e.getStartKey(),i=n.getBlockForKey(r);if(!a(i)&&i.getType()!==W.BLOCK_TYPE.UNSTYLED&&i.getLength()===e.getStartOffset()){var o=u(t,r,W.BLOCK_TYPE.UNSTYLED);return this._onChange(o),!0}}return!1}},{key:"_onTab",value:function(t){var e=this.props.value.getEditorState(),n=F.RichUtils.onTab(t,e,2);n!==e&&this._onChange(n)}},{key:"_customKeyHandler",value:function(t){var e={};return this._keyEmitter.emit("keypress",t,e),e.wasHandled?null:q()(t)}},{key:"_handleKeyCommand",value:function(t){var e=this.props.value.getEditorState(),n=F.RichUtils.handleKeyCommand(e,t);return!!n&&(this._onChange(n),!0)}},{key:"_onChange",value:function(t){var e=this.props,n=e.onChange,r=e.value;if(null!=n){var i=r.setEditorState(t),o=i.getEditorState();this._handleInlineImageSelection(o),n(i)}}},{key:"_handleInlineImageSelection",value:function(t){var e=t.getSelection(),n=o(t),r=function(t,e){var n=t.getEntityAt(e);F.Entity.mergeData(n,{selected:!0})},i=function(t){return t>0&&t<n.size-1},u=function(t,n){return 0===n&&t>e.getStartOffset()},a=function(t,r){return r===n.size-1&&t<e.getEndOffset()};n.toIndexedSeq().forEach(function(t,e){ne.strategy(t,function(n){(u(n,e)||i(e)||a(n,e))&&r(t,n)})})}},{key:"_focus",value:function(){this.refs.editor.focus()}}]),e}(P.Component),le=(e.default=ce,new F.CompositeDecorator([Zt,ne]));M()(ce,{EditorValue:Jt,decorator:le,createEmptyValue:S,createValueFromString:b,ButtonGroup:c,Button:gt,Dropdown:Rt})},function(t,e,n){n(146),t.exports=n(4).Object.assign},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(147)})},function(t,e,n){"use strict";var r=n(52),i=n(74),o=n(55),u=n(46),a=n(67),s=Object.assign;t.exports=!s||n(35)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=u(t),s=arguments.length,c=1,l=i.f,f=o.f;s>c;)for(var p,h=a(arguments[c++]),d=l?r(h).concat(l(h)):r(h),y=d.length,g=0;y>g;)f.call(h,p=d[g++])&&(n[p]=h[p]);return n}:s},function(t,e,n){var r=n(40),i=n(53),o=n(149);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=i(s.length),l=o(u,c);if(t&&n!=n){for(;c>l;)if((a=s[l++])!=a)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(70),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){n(151);var r=n(4).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(8);r(r.S+r.F*!n(15),"Object",{defineProperty:n(11).f})},function(t,e,n){n(153),t.exports=n(4).Object.getPrototypeOf},function(t,e,n){var r=n(46),i=n(103);n(154)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(8),i=n(4),o=n(35);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports={default:n(156),__esModule:!0}},function(t,e,n){n(47),n(59),t.exports=n(78).f("iterator")},function(t,e,n){var r=n(70),i=n(69);t.exports=function(t){return function(e,n){var o,u,a=String(i(e)),s=r(n),c=a.length;return s<0||s>=c?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):o:t?a.slice(s,s+2):u-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(57),i=n(45),o=n(58),u={};n(29)(u,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(11),i=n(30),o=n(52);t.exports=n(15)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(14).document;t.exports=r&&r.documentElement},function(t,e,n){"use strict";var r=n(162),i=n(105),o=n(42),u=n(40);t.exports=n(76)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e,n){t.exports={default:n(164),__esModule:!0}},function(t,e,n){n(165),n(109),n(168),n(169),t.exports=n(4).Symbol},function(t,e,n){"use strict";var r=n(14),i=n(36),o=n(15),u=n(8),a=n(104),s=n(79).KEY,c=n(35),l=n(72),f=n(58),p=n(54),h=n(6),d=n(78),y=n(80),g=n(166),v=n(106),_=n(30),m=n(20),S=n(40),b=n(66),w=n(45),M=n(57),E=n(167),x=n(108),k=n(11),I=n(52),L=x.f,T=k.f,D=E.f,O=r.Symbol,C=r.JSON,N=C&&C.stringify,j=h("_hidden"),A=h("toPrimitive"),z={}.propertyIsEnumerable,B=l("symbol-registry"),R=l("symbols"),K=l("op-symbols"),P=Object.prototype,U="function"==typeof O,F=r.QObject,Y=!F||!F.prototype||!F.prototype.findChild,q=o&&c(function(){return 7!=M(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=L(P,e);r&&delete P[e],T(t,e,n),r&&t!==P&&T(P,e,r)}:T,H=function(t){var e=R[t]=M(O.prototype);return e._k=t,e},W=U&&"symbol"==typeof O.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof O},Q=function(t,e,n){return t===P&&Q(K,e,n),_(t),e=b(e,!0),_(n),i(R,e)?(n.enumerable?(i(t,j)&&t[j][e]&&(t[j][e]=!1),n=M(n,{enumerable:w(0,!1)})):(i(t,j)||T(t,j,w(1,{})),t[j][e]=!0),q(t,e,n)):T(t,e,n)},G=function(t,e){_(t);for(var n,r=g(e=S(e)),i=0,o=r.length;o>i;)Q(t,n=r[i++],e[n]);return t},V=function(t,e){return void 0===e?M(t):G(M(t),e)},J=function(t){var e=z.call(this,t=b(t,!0));return!(this===P&&i(R,t)&&!i(K,t))&&(!(e||!i(this,t)||!i(R,t)||i(this,j)&&this[j][t])||e)},Z=function(t,e){if(t=S(t),e=b(e,!0),t!==P||!i(R,e)||i(K,e)){var n=L(t,e);return!n||!i(R,e)||i(t,j)&&t[j][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=D(S(t)),r=[],o=0;n.length>o;)i(R,e=n[o++])||e==j||e==s||r.push(e);return r},$=function(t){for(var e,n=t===P,r=D(n?K:S(t)),o=[],u=0;r.length>u;)!i(R,e=r[u++])||n&&!i(P,e)||o.push(R[e]);return o};U||(O=function(){if(this instanceof O)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===P&&e.call(K,n),i(this,j)&&i(this[j],t)&&(this[j][t]=!1),q(this,t,w(1,n))};return o&&Y&&q(P,t,{configurable:!0,set:e}),H(t)},a(O.prototype,"toString",function(){return this._k}),x.f=Z,k.f=Q,n(107).f=E.f=X,n(55).f=J,n(74).f=$,o&&!n(77)&&a(P,"propertyIsEnumerable",J,!0),d.f=function(t){return H(h(t))}),u(u.G+u.W+u.F*!U,{Symbol:O});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var nt=I(h.store),rt=0;nt.length>rt;)y(nt[rt++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=O(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),u(u.S+u.F*!U,"Object",{create:V,defineProperty:Q,defineProperties:G,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:$}),C&&u(u.S+u.F*(!U||c(function(){var t=O();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!W(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,N.apply(C,r)}}),O.prototype[A]||n(29)(O.prototype,A,O.prototype.valueOf),f(O,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){var r=n(52),i=n(74),o=n(55);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,a=n(t),s=o.f,c=0;a.length>c;)s.call(t,u=a[c++])&&e.push(u);return e}},function(t,e,n){var r=n(40),i=n(107).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?a(t):i(r(t))}},function(t,e,n){n(80)("asyncIterator")},function(t,e,n){n(80)("observable")},function(t,e,n){t.exports={default:n(171),__esModule:!0}},function(t,e,n){n(172),t.exports=n(4).Object.setPrototypeOf},function(t,e,n){var r=n(8);r(r.S,"Object",{setPrototypeOf:n(173).set})},function(t,e,n){var r=n(20),i=n(30),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(34)(Function.call,n(108).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){t.exports={default:n(175),__esModule:!0}},function(t,e,n){n(176);var r=n(4).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(8);r(r.S,"Object",{create:n(57)})},function(t,e,n){"use strict";var r=n(9),i=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(48),u=n(7),a=n(37),s=n(10),c=n(31),l=n(5),f=n(2),p=n(0),h=(n(43),n(25)),d=n(192),y=c.draft_tree_data_support,g=y?s:a,v=p.List,_=p.Repeat,m={insertAtomicBlock:function(t,e,n){var r=t.getCurrentContent(),a=t.getSelection(),s=l.removeRange(r,a,"backward"),c=s.getSelectionAfter(),p=l.splitBlock(s,c),d=p.getSelectionAfter(),m=l.setBlockType(p,d,"atomic"),S=u.create({entity:e}),b={key:h(),type:"atomic",text:n,characterList:v(_(S,n.length))},w={key:h(),type:"unstyled"};y&&(b=i({},b,{nextSibling:w.key}),w=i({},w,{prevSibling:b.key}));var M=[new g(b),new g(w)],E=o.createFromArray(M),x=l.replaceWithFragment(m,d,E),k=x.merge({selectionBefore:a,selectionAfter:x.getSelectionAfter().set("hasFocus",!0)});return f.push(t,k,"insert-fragment")},moveAtomicBlock:function(t,e,n,r){var i=t.getCurrentContent(),o=t.getSelection(),u=void 0;if("before"===r||"after"===r){var a=i.getBlockForKey("before"===r?n.getStartKey():n.getEndKey());u=d(i,e,a,r)}else{var s=l.removeRange(i,n,"backward"),c=s.getSelectionAfter(),p=s.getBlockForKey(c.getFocusKey());if(0===c.getStartOffset())u=d(s,e,p,"before");else if(c.getEndOffset()===p.getLength())u=d(s,e,p,"after");else{var h=l.splitBlock(s,c),y=h.getSelectionAfter(),g=h.getBlockForKey(y.getFocusKey());u=d(h,e,g,"before")}}var v=u.merge({selectionBefore:o,selectionAfter:u.getSelectionAfter().set("hasFocus",!0)});return f.push(t,v,"move-block")}};t.exports=m},function(t,e,n){"use strict";var r={draft_killswitch_allow_nontextnodes:!1,draft_segmented_entities_behavior:!1,draft_handlebeforeinput_composed_text:!1,draft_tree_data_support:!1};t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r){var o=t.getBlockMap(),a=e.getStartKey(),s=e.getStartOffset(),c=e.getEndKey(),l=e.getEndOffset(),f=o.skipUntil(function(t,e){return e===a}).takeUntil(function(t,e){return e===c}).concat(u([[c,o.get(c)]])).map(function(t,e){var o,u;a===c?(o=s,u=l):(o=e===a?s:0,u=e===c?l:t.getLength());for(var f,p=t.getCharacterList();o<u;)f=p.get(o),p=p.set(o,r?i.applyStyle(f,n):i.removeStyle(f,n)),o++;return t.set("characterList",p)});return t.merge({blockMap:o.merge(f),selectionBefore:e,selectionAfter:e})}var i=n(7),o=n(0),u=o.Map,a={add:function(t,e,n){return r(t,e,n,!0)},remove:function(t,e,n){return r(t,e,n,!1)}};t.exports=a},function(t,e,n){"use strict";function r(t,e,n){var r=t.getBlockMap(),u=e.getStartKey(),a=e.getStartOffset(),s=e.getEndKey(),c=e.getEndOffset(),l=r.skipUntil(function(t,e){return e===u}).takeUntil(function(t,e){return e===s}).toOrderedMap().merge(i.OrderedMap([[s,r.get(s)]])).map(function(t,e){var r=e===u?a:0,i=e===s?c:t.getLength();return o(t,r,i,n)});return t.merge({blockMap:r.merge(l),selectionBefore:e,selectionAfter:e})}var i=n(0),o=n(181);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r){for(var o=t.getCharacterList();e<n;)o=o.set(e,i.applyEntity(o.get(e),r)),e++;return t.set("characterList",o)}var i=n(7);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,o){var u=r.getStartOffset(),a=r.getEndOffset(),s=e.getEntityAt(u),c=n.getEntityAt(a-1);if(!s&&!c)return r;var l=r;if(s&&s===c)l=i(t,e,l,o,s,!0,!0);else if(s&&c){var f=i(t,e,l,o,s,!1,!0),p=i(t,n,l,o,c,!1,!1);l=l.merge({anchorOffset:f.getAnchorOffset(),focusOffset:p.getFocusOffset(),isBackward:!1})}else if(s){var h=i(t,e,l,o,s,!1,!0);l=l.merge({anchorOffset:h.getStartOffset(),isBackward:!1})}else if(c){var d=i(t,n,l,o,c,!1,!1);l=l.merge({focusOffset:d.getEndOffset(),isBackward:!1})}return l}function i(t,e,n,r,i,s,c){var l=n.getStartOffset(),f=n.getEndOffset(),p=t.__get(i),h=p.getMutability(),d=c?l:f;if("MUTABLE"===h)return n;var y=u(e,i).filter(function(t){return d<=t.end&&d>=t.start});1!=y.length&&a(!1);var g=y[0];if("IMMUTABLE"===h)return n.merge({anchorOffset:g.start,focusOffset:g.end,isBackward:!1});s||(c?f=g.end:l=g.start);var v=o.getRemovalRange(l,f,e.getText().slice(g.start,g.end),g.start,r);return n.merge({anchorOffset:v.start,focusOffset:v.end,isBackward:!1})}var o=n(183),u=n(184),a=n(1);t.exports=r},function(t,e,n){"use strict";var r={getRemovalRange:function(t,e,n,r,i){var o=n.split(" ");o=o.map(function(t,e){if("forward"===i){if(e>0)return" "+t}else if(e<o.length-1)return t+" ";return t});for(var u,a,s=r,c=null,l=null,f=0;f<o.length;f++){if(a=o[f],u=s+a.length,t<u&&s<e)null!==c?l=u:(c=s,l=u);else if(null!==c)break;s=u}var p=r+n.length,h=c===r,d=l===p;return(!h&&d||h&&!d)&&("forward"===i?l!==p&&l++:c!==r&&c--),{start:c,end:l}}};t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=[];return t.findEntityRanges(function(t){return t.getEntity()===e},function(t,e){n.push({start:t,end:e})}),n.length||i(!1),n}var i=n(1);t.exports=r},function(t,e,n){"use strict";var r=n(48),i=n(10),o=n(0),u=n(112),a=n(1),s=n(110),c=o.List,l=function(t,e,n,r,i,o){var a=n.get(i),s=a.getText(),c=a.getCharacterList(),l=i,f=o+r.getText().length,p=a.merge({text:s.slice(0,o)+r.getText()+s.slice(o),characterList:u(c,r.getCharacterList(),o),data:r.getData()});return t.merge({blockMap:n.set(i,p),selectionBefore:e,selectionAfter:e.merge({anchorKey:l,anchorOffset:f,focusKey:l,focusOffset:f,isBackward:!1})})},f=function(t,e,n){var r=t.getText(),i=t.getCharacterList(),o=r.slice(0,e),u=i.slice(0,e),a=n.first();return t.merge({text:o+a.getText(),characterList:u.concat(a.getCharacterList()),type:o?t.getType():a.getType(),data:a.getData()})},p=function(t,e,n){var r=t.getText(),i=t.getCharacterList(),o=r.length,u=r.slice(e,o),a=i.slice(e,o),s=n.last();return s.merge({text:s.getText()+u,characterList:s.getCharacterList().concat(a),data:s.getData()})},h=function(t,e){var n=t.getKey(),r=t,i=[];for(e.get(n)&&i.push(n);r&&r.getNextSiblingKey();){var o=r.getNextSiblingKey();if(!o)break;i.push(o),r=e.get(o)}return i},d=function(t,e,n,r){return t.withMutations(function(e){var i=n.getKey(),o=r.getKey(),u=n.getNextSiblingKey(),a=n.getParentKey(),s=h(r,t),l=s[s.length-1];if(e.get(o)?(e.setIn([i,"nextSibling"],o),e.setIn([o,"prevSibling"],i)):(e.setIn([i,"nextSibling"],r.getNextSiblingKey()),e.setIn([r.getNextSiblingKey(),"prevSibling"],i)),e.setIn([l,"nextSibling"],u),u&&e.setIn([u,"prevSibling"],l),s.forEach(function(t){return e.setIn([t,"parent"],a)}),a){var f=t.get(a),p=f.getChildKeys(),d=p.indexOf(i),y=d+1,g=p.toArray();g.splice.apply(g,[y,0].concat(s)),e.setIn([a,"children"],c(g))}})},y=function(t,e,n,o,u,a){var s=n.first()instanceof i,c=[],l=o.size,h=n.get(u),y=o.first(),g=o.last(),v=g.getLength(),_=g.getKey(),m=s&&(!h.getChildKeys().isEmpty()||!y.getChildKeys().isEmpty());n.forEach(function(t,e){if(e!==u)return void c.push(t);m?c.push(t):c.push(f(t,a,o)),o.slice(m?0:1,l-1).forEach(function(t){return c.push(t)}),c.push(p(t,a,o))});var S=r.createFromArray(c);return s&&(S=d(S,0,h,y)),t.merge({blockMap:S,selectionBefore:e,selectionAfter:e.merge({anchorKey:_,anchorOffset:v,focusKey:_,focusOffset:v,isBackward:!1})})},g=function(t,e,n){e.isCollapsed()||a(!1);var r=t.getBlockMap(),o=s(n),u=e.getStartKey(),c=e.getStartOffset(),f=r.get(u);return f instanceof i&&(f.getChildKeys().isEmpty()||a(!1)),1===o.size?l(t,e,r,o.first(),u,c):y(t,e,r,o,u,c)};t.exports=g},function(t,e,n){"use strict";function r(t,e,n,r){e.isCollapsed()||u(!1);var i=n.length;if(!i)return t;var s=t.getBlockMap(),c=e.getStartKey(),l=e.getStartOffset(),f=s.get(c),p=f.getText(),h=f.merge({text:p.slice(0,l)+n+p.slice(l,f.getLength()),characterList:o(f.getCharacterList(),a(r,i).toList(),l)}),d=l+i;return t.merge({blockMap:s.set(c,h),selectionAfter:e.merge({anchorOffset:d,focusOffset:d})})}var i=n(0),o=n(112),u=n(1),a=i.Repeat;t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=e.getStartKey(),i=e.getEndKey(),u=t.getBlockMap(),a=u.toSeq().skipUntil(function(t,e){return e===r}).takeUntil(function(t,e){return e===i}).concat(o([[i,u.get(i)]])).map(n);return t.merge({blockMap:u.merge(a),selectionBefore:e,selectionAfter:e})}var i=n(0),o=i.Map;t.exports=r},function(t,e,n){"use strict";var r=n(10),i=n(0),o=n(113),u=(i.List,i.Map),a=function(t,e,n){if(t){var r=e.get(t);r&&e.set(t,n(r))}},s=function(t,e){var n=[];if(!t)return n;for(var r=e.get(t);r&&r.getParentKey();){var i=r.getParentKey();i&&n.push(i),r=i?e.get(i):null}return n},c=function(t,e){var n=[];if(!t)return n;for(var r=o(t,e);r&&e.get(r);){var i=e.get(r);n.push(r),r=i.getParentKey()?o(i,e):null}return n},l=function(t,e,n){if(!t)return null;for(var r=n.get(t.getKey()).getNextSiblingKey();r&&!e.get(r);)r=n.get(r).getNextSiblingKey()||null;return r},f=function(t,e,n){if(!t)return null;for(var r=n.get(t.getKey()).getPrevSiblingKey();r&&!e.get(r);)r=n.get(r).getPrevSiblingKey()||null;return r},p=function(t,e,n,r){return t.withMutations(function(t){a(e.getKey(),t,function(n){return n.merge({nextSibling:l(e,t,r),prevSibling:f(e,t,r)})}),a(n.getKey(),t,function(e){return e.merge({nextSibling:l(n,t,r),prevSibling:f(n,t,r)})}),s(e.getKey(),r).forEach(function(e){return a(e,t,function(e){return e.merge({children:e.getChildKeys().filter(function(e){return t.get(e)}),nextSibling:l(e,t,r),prevSibling:f(e,t,r)})})}),a(e.getNextSiblingKey(),t,function(t){return t.merge({prevSibling:e.getPrevSiblingKey()})}),a(e.getPrevSiblingKey(),t,function(n){return n.merge({nextSibling:l(e,t,r)})}),a(n.getNextSiblingKey(),t,function(e){return e.merge({prevSibling:f(n,t,r)})}),a(n.getPrevSiblingKey(),t,function(t){return t.merge({nextSibling:n.getNextSiblingKey()})}),s(n.getKey(),r).forEach(function(e){a(e,t,function(e){return e.merge({children:e.getChildKeys().filter(function(e){return t.get(e)}),nextSibling:l(e,t,r),prevSibling:f(e,t,r)})})}),c(n,r).forEach(function(e){return a(e,t,function(e){return e.merge({nextSibling:l(e,t,r),prevSibling:f(e,t,r)})})})})},h=function(t,e){if(e.isCollapsed())return t;var n=t.getBlockMap(),i=e.getStartKey(),a=e.getStartOffset(),c=e.getEndKey(),l=e.getEndOffset(),f=n.get(i),h=n.get(c),y=f instanceof r,g=[];if(y){var v=h.getChildKeys(),_=s(c,n);h.getNextSiblingKey()&&(g=g.concat(_)),v.isEmpty()||(g=g.concat(_.concat([c]))),g=g.concat(s(o(h,n),n))}var m=void 0;m=f===h?d(f.getCharacterList(),a,l):f.getCharacterList().slice(0,a).concat(h.getCharacterList().slice(l));var S=f.merge({text:f.getText().slice(0,a)+h.getText().slice(l),characterList:m}),b=n.toSeq().skipUntil(function(t,e){return e===i}).takeUntil(function(t,e){return e===c}).filter(function(t,e){return-1===g.indexOf(e)}).concat(u([[c,null]])).map(function(t,e){return e===i?S:null}),w=n.merge(b).filter(function(t){return!!t});return y&&(w=p(w,f,h,n)),t.merge({blockMap:w,selectionBefore:e,selectionAfter:e.merge({anchorKey:i,anchorOffset:a,focusKey:i,focusOffset:a,isBackward:!1})})},d=function(t,e,n){if(0===e)for(;e<n;)t=t.shift(),e++;else if(n===t.count())for(;n>e;)t=t.pop(),n--;else{var r=t.slice(0,e),i=t.slice(n);t=r.concat(i).toList()}return t};t.exports=h},function(t,e,n){"use strict";var r=n(10),i=n(0),o=n(25),u=n(1),a=i.List,s=i.Map,c=function(t,e,n){if(t){var r=e.get(t);r&&e.set(t,n(r))}},l=function(t,e,n){return t.withMutations(function(t){var r=e.getKey(),i=n.getKey();c(e.getParentKey(),t,function(t){var e=t.getChildKeys(),n=e.indexOf(r)+1,o=e.toArray();return o.splice(n,0,i),t.merge({children:a(o)})}),c(e.getNextSiblingKey(),t,function(t){return t.merge({prevSibling:i})}),c(r,t,function(t){return t.merge({nextSibling:i})}),c(i,t,function(t){return t.merge({prevSibling:r})})})},f=function(t,e){e.isCollapsed()||u(!1);var n=e.getAnchorKey(),i=e.getAnchorOffset(),a=t.getBlockMap(),c=a.get(n),f=c.getText(),p=c.getCharacterList(),h=o(),d=c instanceof r,y=c.merge({text:f.slice(0,i),characterList:p.slice(0,i)}),g=y.merge({key:h,text:f.slice(i),characterList:p.slice(i),data:s()}),v=a.toSeq().takeUntil(function(t){return t===c}),_=a.toSeq().skipUntil(function(t){return t===c}).rest(),m=v.concat([[n,y],[h,g]],_).toOrderedMap();return d&&(c.getChildKeys().isEmpty()||u(!1),m=l(m,y,g)),t.merge({blockMap:m,selectionBefore:e,selectionAfter:e.merge({anchorKey:h,anchorOffset:0,focusKey:h,focusOffset:0,isBackward:!1})})};t.exports=f},function(t,e,n){"use strict";var r,i=n(0),o=n(191),u=n(13),a=i.OrderedMap,s={getDirectionMap:function(t,e){r?r.reset():r=new o;var n=t.getBlockMap(),s=n.valueSeq().map(function(t){return u(r).getDirection(t.getText())}),c=a(n.keySeq().zip(s));return null!=e&&i.is(e,c)?e:c}};t.exports=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(116),o=n(84),u=n(1),a=function(){function t(e){r(this,t),e?o.isStrong(e)||u(!1):e=o.getGlobalDir(),this._defaultDir=e,this.reset()}return t.prototype.reset=function(){this._lastDir=this._defaultDir},t.prototype.getDirection=function(t){return this._lastDir=i.getDirection(t,this._lastDir),this._lastDir},t}();t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(0),o=n(113),u=n(1),a=i.OrderedMap,s=i.List,c=function(t,e,n){if(t){var r=e.get(t);r&&e.set(t,n(r))}},l=function(t,e,n,r,i){if(!i)return t;var o="after"===r,u=e.getKey(),a=n.getKey(),l=e.getParentKey(),f=e.getNextSiblingKey(),p=e.getPrevSiblingKey(),h=n.getParentKey(),d=o?n.getNextSiblingKey():a,y=o?a:n.getPrevSiblingKey();return t.withMutations(function(t){c(l,t,function(t){var e=t.getChildKeys();return t.merge({children:e.delete(e.indexOf(u))})}),c(p,t,function(t){return t.merge({nextSibling:f})}),c(f,t,function(t){return t.merge({prevSibling:p})}),c(d,t,function(t){return t.merge({prevSibling:u})}),c(y,t,function(t){return t.merge({nextSibling:u})}),c(h,t,function(t){var e=t.getChildKeys(),n=e.indexOf(a),r=o?n+1:0!==n?n-1:0,i=e.toArray();return i.splice(r,0,u),t.merge({children:s(i)})}),c(u,t,function(t){return t.merge({nextSibling:d,prevSibling:y,parent:h})})})},f=function(t,e,n,i){"replace"===i&&u(!1);var s=n.getKey(),c=e.getKey();c===s&&u(!1);var f=t.getBlockMap(),p=e instanceof r,h=[e],d=f.delete(c);p&&(h=[],d=f.withMutations(function(t){var n=e.getNextSiblingKey(),r=o(e,t);t.toSeq().skipUntil(function(t){return t.getKey()===c}).takeWhile(function(t){var e=t.getKey(),i=e===c,o=n&&e!==n,u=!n&&t.getParentKey()&&(!r||e!==r);return!!(i||o||u)}).forEach(function(e){h.push(e),t.delete(e.getKey())})}));var y=d.toSeq().takeUntil(function(t){return t===n}),g=d.toSeq().skipUntil(function(t){return t===n}).skip(1),v=h.map(function(t){return[t.getKey(),t]}),_=a();if("before"===i){var m=t.getBlockBefore(s);m&&m.getKey()===e.getKey()&&u(!1),_=y.concat([].concat(v,[[s,n]]),g).toOrderedMap()}else if("after"===i){var S=t.getBlockAfter(s);S&&S.getKey()===c&&u(!1),_=y.concat([[s,n]].concat(v),g).toOrderedMap()}return t.merge({blockMap:l(_,e,n,i,p),selectionBefore:t.getSelectionAfter(),selectionAfter:t.getSelectionAfter().merge({anchorKey:c,focusKey:c})})};t.exports=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n){for(var r=e;r<n;r++)if(null!=t[r])return!1;return!0}function o(t,e,n,r){for(var i=e;i<n;i++)t[i]=r}var u=n(0),a=u.List,s=function(){function t(e){r(this,t),this._decorators=e.slice()}return t.prototype.getDecorations=function(t,e){var n=Array(t.getText().length).fill(null);return this._decorators.forEach(function(r,u){var a=0;(0,r.strategy)(t,function(t,e){i(n,t,e)&&(o(n,t,e,u+"."+a),a++)},e)}),a(n)},t.prototype.getComponentForKey=function(t){var e=parseInt(t.split(".")[0],10);return this._decorators[e].component},t.prototype.getPropsForKey=function(t){var e=parseInt(t.split(".")[0],10);return this._decorators[e].props},t}();t.exports=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(9),a=u||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=n(85),c=n(117),l=n(195),f=n(196),p=n(219),h=n(222),d=n(256),y=n(2),g=n(3),v=n(38),_=n(121),m=n(88),S=n(18),b=n(44),w=n(81),M=n(25),E=n(92),x=n(89),k=n(1),I=n(13),L=S.isBrowser("IE"),T=!L,D={edit:h,composite:l,drag:p,cut:null,render:null},O=function(t){function e(n){r(this,e);var o=i(this,t.call(this,n));return o.focus=function(t){var e=o.props.editorState,n=e.getSelection().getHasFocus(),r=v.findDOMNode(o.editor);if(r){var i=m.getScrollParent(r),u=t||x(i),a=u.x,s=u.y;r instanceof HTMLElement||k(!1),r.focus(),i===window?window.scrollTo(a,s):_.setTop(i,s),n||o.update(y.forceSelection(e,e.getSelection()))}},o.blur=function(){var t=v.findDOMNode(o.editor);t instanceof HTMLElement||k(!1),t.blur()},o.setMode=function(t){o._handler=D[t]},o.exitCurrentMode=function(){o.setMode("edit")},o.restoreEditorDOM=function(t){o.setState({contentsKey:o.state.contentsKey+1},function(){o.focus(t)})},o.setClipboard=function(t){o._clipboard=t},o.getClipboard=function(){return o._clipboard},o.update=function(t){o._latestEditorState=t,o.props.onChange(t)},o.onDragEnter=function(){o._dragCount++},o.onDragLeave=function(){0==--o._dragCount&&o.exitCurrentMode()},o._blockSelectEvents=!1,o._clipboard=null,o._handler=null,o._dragCount=0,o._editorKey=n.editorKey||M(),o._placeholderAccessibilityID="placeholder-"+o._editorKey,o._latestEditorState=n.editorState,o._latestCommittedEditorState=n.editorState,o._onBeforeInput=o._buildHandler("onBeforeInput"),o._onBlur=o._buildHandler("onBlur"),o._onCharacterData=o._buildHandler("onCharacterData"),o._onCompositionEnd=o._buildHandler("onCompositionEnd"),o._onCompositionStart=o._buildHandler("onCompositionStart"),o._onCopy=o._buildHandler("onCopy"),o._onCut=o._buildHandler("onCut"),o._onDragEnd=o._buildHandler("onDragEnd"),o._onDragOver=o._buildHandler("onDragOver"),o._onDragStart=o._buildHandler("onDragStart"),o._onDrop=o._buildHandler("onDrop"),o._onInput=o._buildHandler("onInput"),o._onFocus=o._buildHandler("onFocus"),o._onKeyDown=o._buildHandler("onKeyDown"),o._onKeyPress=o._buildHandler("onKeyPress"),o._onKeyUp=o._buildHandler("onKeyUp"),o._onMouseDown=o._buildHandler("onMouseDown"),o._onMouseUp=o._buildHandler("onMouseUp"),o._onPaste=o._buildHandler("onPaste"),o._onSelect=o._buildHandler("onSelect"),o.getEditorKey=function(){return o._editorKey},o.state={contentsKey:0},o}return o(e,t),e.prototype._buildHandler=function(t){var e=this;return function(n){if(!e.props.readOnly){var r=e._handler&&e._handler[t];r&&r(e,n)}}},e.prototype._showPlaceholder=function(){return!!this.props.placeholder&&!this.props.editorState.isInCompositionMode()&&!this.props.editorState.getCurrentContent().hasText()},e.prototype._renderPlaceholder=function(){if(this._showPlaceholder()){var t={text:I(this.props.placeholder),editorState:this.props.editorState,textAlignment:this.props.textAlignment,accessibilityID:this._placeholderAccessibilityID};return g.createElement(d,t)}return null},e.prototype.render=function(){var t=this,e=this.props,n=e.blockRenderMap,r=e.blockRendererFn,i=e.blockStyleFn,o=e.customStyleFn,u=e.customStyleMap,s=e.editorState,l=e.readOnly,p=e.textAlignment,h=e.textDirectionality,d=b({"DraftEditor/root":!0,"DraftEditor/alignLeft":"left"===p,"DraftEditor/alignRight":"right"===p,"DraftEditor/alignCenter":"center"===p}),y={outline:"none",userSelect:"text",WebkitUserSelect:"text",whiteSpace:"pre-wrap",wordWrap:"break-word"},v=this.props.role||"textbox",_="combobox"===v?!!this.props.ariaExpanded:null,m={blockRenderMap:n,blockRendererFn:r,blockStyleFn:i,customStyleMap:a({},c,u),customStyleFn:o,editorKey:this._editorKey,editorState:s,key:"contents"+this.state.contentsKey,textDirectionality:h};return g.createElement("div",{className:d},this._renderPlaceholder(),g.createElement("div",{className:b("DraftEditor/editorContainer"),ref:function(e){return t.editorContainer=e}},g.createElement("div",{"aria-activedescendant":l?null:this.props.ariaActiveDescendantID,"aria-autocomplete":l?null:this.props.ariaAutoComplete,"aria-controls":l?null:this.props.ariaControls,"aria-describedby":this.props.ariaDescribedBy||this._placeholderAccessibilityID,"aria-expanded":l?null:_,"aria-label":this.props.ariaLabel,"aria-labelledby":this.props.ariaLabelledBy,"aria-multiline":this.props.ariaMultiline,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:b({notranslate:!l,"public/DraftEditor/content":!0}),contentEditable:!l,"data-testid":this.props.webDriverTestID,onBeforeInput:this._onBeforeInput,onBlur:this._onBlur,onCompositionEnd:this._onCompositionEnd,onCompositionStart:this._onCompositionStart,onCopy:this._onCopy,onCut:this._onCut,onDragEnd:this._onDragEnd,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this._onDragOver,onDragStart:this._onDragStart,onDrop:this._onDrop,onFocus:this._onFocus,onInput:this._onInput,onKeyDown:this._onKeyDown,onKeyPress:this._onKeyPress,onKeyUp:this._onKeyUp,onMouseUp:this._onMouseUp,onPaste:this._onPaste,onSelect:this._onSelect,ref:function(e){return t.editor=e},role:l?null:v,spellCheck:T&&this.props.spellCheck,style:y,suppressContentEditableWarning:!0,tabIndex:this.props.tabIndex},g.createElement(f,m))))},e.prototype.componentDidMount=function(){this.setMode("edit"),L&&document.execCommand("AutoUrlDetect",!1,!1)},e.prototype.componentWillUpdate=function(t){this._blockSelectEvents=!0,this._latestEditorState=t.editorState},e.prototype.componentDidUpdate=function(){this._blockSelectEvents=!1,this._latestCommittedEditorState=this.props.editorState},e}(g.Component);O.defaultProps={blockRenderMap:s,blockRendererFn:w.thatReturnsNull,blockStyleFn:w.thatReturns(""),keyBindingFn:E,readOnly:!1,spellCheck:!1,stripPastedStyles:!1},t.exports=O},function(t,e,n){"use strict";var r=n(31),i=n(5),o=n(2),u=n(62),a=n(86),s=n(50),c=n(118),l=!1,f=!1,p="",h={onBeforeInput:function(t,e){p=(p||"")+e.data},onCompositionStart:function(t){f=!0},onCompositionEnd:function(t){l=!1,f=!1,setTimeout(function(){l||h.resolveComposition(t)},20)},onKeyDown:function(t,e){if(!f)return h.resolveComposition(t),void t._onKeyDown(e);e.which!==u.RIGHT&&e.which!==u.LEFT||e.preventDefault()},onKeyPress:function(t,e){e.which===u.RETURN&&e.preventDefault()},resolveComposition:function(t){if(!f){l=!0;var e=p;p="";var n=o.set(t._latestEditorState,{inCompositionMode:!1}),u=n.getCurrentInlineStyle(),h=a(n.getCurrentContent(),n.getSelection()),d=!e||c(n)||u.size>0||null!==h;if(d&&t.restoreEditorDOM(),t.exitCurrentMode(),e){if(r.draft_handlebeforeinput_composed_text&&t.props.handleBeforeInput&&s(t.props.handleBeforeInput(e,n)))return;var y=i.replaceText(n.getCurrentContent(),n.getSelection(),e,u,h);return void t.update(o.push(n,y,"insert-characters"))}d&&t.update(o.set(n,{nativelyRenderedContent:null,forceSelection:!0}))}}};t.exports=h},function(t,e,n){"use strict";var r=n(197);t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(9),a=u||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=n(119),c=n(63),l=(n(2),n(3)),f=n(44),p=n(218),h=n(13),d=function(t,e,n,r){return f({"public/DraftStyleDefault/unorderedListItem":"unordered-list-item"===t,"public/DraftStyleDefault/orderedListItem":"ordered-list-item"===t,"public/DraftStyleDefault/reset":n,"public/DraftStyleDefault/depth0":0===e,"public/DraftStyleDefault/depth1":1===e,"public/DraftStyleDefault/depth2":2===e,"public/DraftStyleDefault/depth3":3===e,"public/DraftStyleDefault/depth4":4===e,"public/DraftStyleDefault/listLTR":"LTR"===r,"public/DraftStyleDefault/listRTL":"RTL"===r})},y=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.shouldComponentUpdate=function(t){var e=this.props.editorState,n=t.editorState;if(e.getDirectionMap()!==n.getDirectionMap())return!0;if(e.getSelection().getHasFocus()!==n.getSelection().getHasFocus())return!0;var r=n.getNativelyRenderedContent(),i=e.isInCompositionMode(),o=n.isInCompositionMode();if(e===n||null!==r&&n.getCurrentContent()===r||i&&o)return!1;var u=e.getCurrentContent(),a=n.getCurrentContent(),s=e.getDecorator(),c=n.getDecorator();return i!==o||u!==a||s!==c||n.mustForceSelection()},e.prototype.render=function(){for(var t=this.props,e=t.blockRenderMap,n=t.blockRendererFn,r=t.blockStyleFn,i=t.customStyleMap,o=t.customStyleFn,u=t.editorState,f=t.editorKey,y=t.textDirectionality,g=u.getCurrentContent(),v=u.getSelection(),_=u.mustForceSelection(),m=u.getDecorator(),S=h(u.getDirectionMap()),b=g.getBlocksAsArray(),w=[],M=null,E=null,x=0;x<b.length;x++){var k=b[x],I=k.getKey(),L=k.getType(),T=n(k),D=void 0,O=void 0,C=void 0;T&&(D=T.component,O=T.props,C=T.editable);var N=y||S.get(I),j=c.encode(I,0,0),A={contentState:g,block:k,blockProps:O,blockStyleFn:r,customStyleMap:i,customStyleFn:o,decorator:m,direction:N,forceSelection:_,key:I,offsetKey:j,selection:v,tree:u.getBlockTree(I)},z=e.get(L)||e.get("unstyled"),B=z.wrapper,R=z.element||e.get("unstyled").element,K=k.getDepth(),P="";r&&(P=r(k)),"li"===R&&(P=p(P,d(L,K,E!==B||null===M||K>M,N)));var U=D||s,F={className:P,"data-block":!0,"data-editor":f,"data-offset-key":j,key:I};void 0!==C&&(F=a({},F,{contentEditable:C,suppressContentEditableWarning:!0}));var Y=l.createElement(R,F,l.createElement(U,A));w.push({block:Y,wrapperTemplate:B,key:I,offsetKey:j}),M=B?k.getDepth():null,E=B}for(var q=[],H=0;H<w.length;){var W=w[H];if(W.wrapperTemplate){var Q=[];do{Q.push(w[H].block),H++}while(H<w.length&&w[H].wrapperTemplate===W.wrapperTemplate);var G=l.cloneElement(W.wrapperTemplate,{key:W.key+"-wrap","data-offset-key":W.offsetKey},Q);q.push(G)}else q.push(W.block),H++}return l.createElement("div",{"data-contents":"true"},q)},e}(l.Component);t.exports=y},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(9),a=n(199),s=n(3),c=n(38),l=n(1),f=n(206),p=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype._setSelection=function(){var t=this.props.selection;if(null!=t&&t.getHasFocus()){var e=this.props,n=e.block,r=e.start,i=e.text,o=n.getKey(),u=r+i.length;if(t.hasEdgeWithin(o,r,u)){var a=c.findDOMNode(this);a||l(!1);var s=a.firstChild;s||l(!1);var p=void 0;s.nodeType===Node.TEXT_NODE?p=s:"BR"===s.tagName?p=a:(p=s.firstChild)||l(!1),f(t,p,o,r,u)}}},e.prototype.shouldComponentUpdate=function(t){var e=c.findDOMNode(this.leaf);return e||l(!1),e.textContent!==t.text||t.styleSet!==this.props.styleSet||t.forceSelection},e.prototype.componentDidUpdate=function(){this._setSelection()},e.prototype.componentDidMount=function(){this._setSelection()},e.prototype.render=function(){var t=this,e=this.props.block,n=this.props.text;n.endsWith("\n")&&this.props.isLast&&(n+="\n");var r=this.props,i=r.customStyleMap,o=r.customStyleFn,c=r.offsetKey,l=r.styleSet,f=l.reduce(function(t,e){var n={},r=i[e];return void 0!==r&&t.textDecoration!==r.textDecoration&&(n.textDecoration=[t.textDecoration,r.textDecoration].join(" ").trim()),u(t,r,n)},{});if(o){var p=o(l,e);f=u(f,p)}return s.createElement("span",{"data-offset-key":c,ref:function(e){return t.leaf=e},style:f},s.createElement(a,null,n))},e}(s.Component);t.exports=p},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return f?"\n"===t.textContent:"BR"===t.tagName}var a=n(3),s=n(38),c=n(18),l=n(1),f=c.isBrowser("IE <= 11"),p=f?a.createElement("span",{key:"A","data-text":"true"},"\n"):a.createElement("br",{key:"A","data-text":"true"}),h=f?a.createElement("span",{key:"B","data-text":"true"},"\n"):a.createElement("br",{key:"B","data-text":"true"}),d=function(t){function e(n){r(this,e);var o=i(this,t.call(this,n));return o._forceFlag=!1,o}return o(e,t),e.prototype.shouldComponentUpdate=function(t){var e=s.findDOMNode(this),n=""===t.children;return e instanceof Element||l(!1),n?!u(e):e.textContent!==t.children},e.prototype.componentDidMount=function(){this._forceFlag=!this._forceFlag},e.prototype.componentDidUpdate=function(){this._forceFlag=!this._forceFlag},e.prototype.render=function(){return""===this.props.children?this._forceFlag?p:h:a.createElement("span",{key:this._forceFlag?"A":"B","data-text":"true"},this.props.children)},e}(a.Component);t.exports=d},function(t,e,n){"use strict";var r=n(201),i="Unknown",o={"Mac OS":"Mac OS X"},u=new r,a=u.getResult(),s=function(t){if(!t)return{major:"",minor:""};var e=t.split(".");return{major:e[0],minor:e[1]}}(a.browser.version),c={browserArchitecture:a.cpu.architecture||i,browserFullVersion:a.browser.version||i,browserMinorVersion:s.minor||i,browserName:a.browser.name||i,browserVersion:a.browser.major||i,deviceName:a.device.model||i,engineName:a.engine.name||i,engineVersion:a.engine.version||i,platformArchitecture:a.cpu.architecture||i,platformName:function(t){return o[t]||t}(a.os.name)||i,platformVersion:a.os.version||i,platformFullVersion:a.os.version||i};t.exports=c},function(t,e,n){var r;!function(i,o){"use strict";var u="model",a="name",s="type",c="vendor",l="version",f="mobile",p="tablet",h={extend:function(t,e){var n={};for(var r in t)e[r]&&e[r].length%2==0?n[r]=e[r].concat(t[r]):n[r]=t[r];return n},has:function(t,e){return"string"==typeof t&&-1!==e.toLowerCase().indexOf(t.toLowerCase())},lowerize:function(t){return t.toLowerCase()},major:function(t){return"string"==typeof t?t.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},d={rgx:function(t,e){for(var n,r,i,o,u,a,s=0;s<e.length&&!u;){var c=e[s],l=e[s+1];for(n=r=0;n<c.length&&!u;)if(u=c[n++].exec(t))for(i=0;i<l.length;i++)a=u[++r],o=l[i],"object"==typeof o&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;s+=2}},str:function(t,e){for(var n in e)if("object"==typeof e[n]&&e[n].length>0){for(var r=0;r<e[n].length;r++)if(h.has(e[n][r],t))return"?"===n?void 0:n}else if(h.has(e[n],t))return"?"===n?void 0:n;return t}},y={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},g={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,l],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],l],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],l],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[a,l],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],l],[/(edge)\/((\d+)?[\w\.]+)/i],[a,l],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],l],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],l],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],l],[/(QQ)\/([\d\.]+)/i],[a,l],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,l],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[l,[a,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],l],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],l],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[l,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,l],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],l],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],l],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],l],[/fxios\/([\w\.-]+)/i],[l,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[l,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[l,d.str,y.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],l],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",h.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",h.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",h.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[u,c,[s,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[u,[c,"Apple"],[s,p]],[/(apple\s{0,1}tv)/i],[[u,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,u,[s,p]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[u,[c,"Amazon"],[s,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[u,d.str,y.device.amazon.model],[c,"Amazon"],[s,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[u,c,[s,f]],[/\((ip[honed|\s\w*]+);/i],[u,[c,"Apple"],[s,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,u,[s,f]],[/\(bb10;\s(\w+)/i],[u,[c,"BlackBerry"],[s,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[u,[c,"Asus"],[s,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[u,"Xperia Tablet"],[s,p]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[u,[c,"Sony"],[s,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,u,[s,"console"]],[/android.+;\s(shield)\sbuild/i],[u,[c,"Nvidia"],[s,"console"]],[/(playstation\s[34portablevi]+)/i],[u,[c,"Sony"],[s,"console"]],[/(sprint\s(\w+))/i],[[c,d.str,y.device.sprint.vendor],[u,d.str,y.device.sprint.model],[s,f]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[c,u,[s,p]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[c,[u,/_/g," "],[s,f]],[/(nexus\s9)/i],[u,[c,"HTC"],[s,p]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[u,[c,"Huawei"],[s,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,u,[s,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[u,[c,"Microsoft"],[s,"console"]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[c,"Microsoft"],[s,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[u,[c,"Motorola"],[s,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[c,"Motorola"],[s,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,h.trim],[u,h.trim],[s,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[c,"Samsung"],[s,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[u,[c,"Sharp"],[s,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],u,[s,p]],[/smart-tv.+(samsung)/i],[c,[s,"smarttv"],u],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[c,"Samsung"],u,[s,f]],[/sie-(\w+)*/i],[u,[c,"Siemens"],[s,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[c,"Nokia"],u,[s,f]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[u,[c,"Acer"],[s,p]],[/android.+([vl]k\-?\d{3})\s+build/i],[u,[c,"LG"],[s,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],u,[s,p]],[/(lg) netcast\.tv/i],[c,u,[s,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[u,[c,"LG"],[s,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[u,[c,"Lenovo"],[s,p]],[/linux;.+((jolla));/i],[c,u,[s,f]],[/((pebble))app\/[\d\.]+\s/i],[c,u,[s,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,u,[s,f]],[/crkey/i],[[u,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[u,[c,"Google"],[s,"wearable"]],[/android.+;\s(pixel c)\s/i],[u,[c,"Google"],[s,p]],[/android.+;\s(pixel xl|pixel)\s/i],[u,[c,"Google"],[s,f]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[u,/_/g," "],[c,"Xiaomi"],[s,f]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[u,/_/g," "],[c,"Xiaomi"],[s,p]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[u,[c,"Meizu"],[s,p]],[/android.+a000(1)\s+build/i],[u,[c,"OnePlus"],[s,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[u,[c,"RCA"],[s,p]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[u,[c,"Dell"],[s,p]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[u,[c,"Verizon"],[s,p]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],u,[s,p]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[u,[c,"NuVision"],[s,p]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[c,"ZTE"],u,[s,p]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[u,[c,"Swiss"],[s,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[u,[c,"Swiss"],[s,p]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[u,[c,"Zeki"],[s,p]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[c,"Dragon Touch"],u,[s,p]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[u,[c,"Insignia"],[s,p]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[u,[c,"NextBook"],[s,p]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],u,[s,f]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[c,"LvTel"],u,[s,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[u,[c,"Envizen"],[s,p]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[c,u,[s,p]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[u,[c,"MachSpeed"],[s,p]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,u,[s,p]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[u,[c,"Rotor"],[s,p]],[/android.+(KS(.+))\s+build/i],[u,[c,"Amazon"],[s,p]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[c,u,[s,p]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[s,h.lowerize],c,u],[/(android.+)[;\/].+build/i],[u,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,l],[/rv\:([\w\.]+).*(gecko)/i],[l,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[l,d.str,y.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[l,d.str,y.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],l],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[a,l],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[a,"Symbian"],l],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],l],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[a,l],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],l],[/(sunos)\s?([\w\.]+\d)*/i],[[a,"Solaris"],l],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[a,l],[/(haiku)\s(\w+)/i],[a,l],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[l,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[a,l]]},v=function(t,e){if("object"==typeof t&&(e=t,t=void 0),!(this instanceof v))return new v(t,e).getResult();var n=t||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),r=e?h.extend(g,e):g;return this.getBrowser=function(){var t={name:void 0,version:void 0};return d.rgx.call(t,n,r.browser),t.major=h.major(t.version),t},this.getCPU=function(){var t={architecture:void 0};return d.rgx.call(t,n,r.cpu),t},this.getDevice=function(){var t={vendor:void 0,model:void 0,type:void 0};return d.rgx.call(t,n,r.device),t},this.getEngine=function(){var t={name:void 0,version:void 0};return d.rgx.call(t,n,r.engine),t},this.getOS=function(){var t={name:void 0,version:void 0};return d.rgx.call(t,n,r.os),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(t){return n=t,this},this};v.VERSION="0.7.17",v.BROWSER={NAME:a,MAJOR:"major",VERSION:l},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:u,VENDOR:c,TYPE:s,CONSOLE:"console",MOBILE:f,SMARTTV:"smarttv",TABLET:p,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:l},v.OS={NAME:a,VERSION:l},void 0!==e?(void 0!==t&&t.exports&&(e=t.exports=v),e.UAParser=v):n(202)?void 0!==(r=function(){return v}.call(e,n,e,t))&&(t.exports=r):i&&(i.UAParser=v);var _=i&&(i.jQuery||i.Zepto);if(void 0!==_){var m=new v;_.ua=m.getResult(),_.ua.get=function(){return m.getUA()},_.ua.set=function(t){m.setUA(t);var e=m.getResult();for(var n in e)_.ua[n]=e[n]}}}("object"==typeof window?window:this)},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,n){"use strict";function r(t,e){var n=t.split(w);return n.length>1?n.some(function(t){return k.contains(t,e)}):(t=n[0].trim(),i(t,e))}function i(t,e){var n=t.split(M);if(n.length>0&&n.length<=2||S(!1),1===n.length)return o(n[0],e);var r=n[0],i=n[1];return d(r)&&d(i)||S(!1),o(">="+r,e)&&o("<="+i,e)}function o(t,e){if(""===(t=t.trim()))return!0;var n=e.split(b),r=p(t),i=r.modifier,o=r.rangeComponents;switch(i){case"<":return u(n,o);case"<=":return a(n,o);case">=":return c(n,o);case">":return l(n,o);case"~":case"~>":return f(n,o);default:return s(n,o)}}function u(t,e){return-1===m(t,e)}function a(t,e){var n=m(t,e);return-1===n||0===n}function s(t,e){return 0===m(t,e)}function c(t,e){var n=m(t,e);return 1===n||0===n}function l(t,e){return 1===m(t,e)}function f(t,e){var n=e.slice(),r=e.slice();r.length>1&&r.pop();var i=r.length-1,o=parseInt(r[i],10);return h(o)&&(r[i]=o+1+""),c(t,n)&&u(t,r)}function p(t){var e=t.split(b),n=e[0].match(E);return n||S(!1),{modifier:n[1],rangeComponents:[n[2]].concat(e.slice(1))}}function h(t){return!isNaN(t)&&isFinite(t)}function d(t){return!p(t).modifier}function y(t,e){for(var n=t.length;n<e;n++)t[n]="0"}function g(t,e){t=t.slice(),e=e.slice(),y(t,e.length);for(var n=0;n<e.length;n++){var r=e[n].match(/^[x*]$/i);if(r&&(e[n]=t[n]="0","*"===r[0]&&n===e.length-1))for(var i=n;i<t.length;i++)t[i]="0"}return y(e,t.length),[t,e]}function v(t,e){var n=t.match(x)[1],r=e.match(x)[1],i=parseInt(n,10),o=parseInt(r,10);return h(i)&&h(o)&&i!==o?_(i,o):_(t,e)}function _(t,e){return typeof t!=typeof e&&S(!1),t>e?1:t<e?-1:0}function m(t,e){for(var n=g(t,e),r=n[0],i=n[1],o=0;o<i.length;o++){var u=v(r[o],i[o]);if(u)return u}return 0}var S=n(1),b=/\./,w=/\|\|/,M=/\s+\-\s+/,E=/^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,x=/^(\d*)(.*)/,k={contains:function(t,e){return r(t.trim(),e.trim())}};t.exports=k},function(t,e,n){"use strict";function r(t,e,n){if(!t)return null;var r={};for(var o in t)i.call(t,o)&&(r[o]=e.call(n,t[o],o,t));return r}var i=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t){var e={};return function(n){return e.hasOwnProperty(n)||(e[n]=t.call(this,n)),e[n]}}t.exports=r},function(t,e,n){"use strict";(function(e){function r(t,e){if(!t)return"[empty]";var n=i(t,e);return n.nodeType===Node.TEXT_NODE?n.textContent:(n instanceof Element||h(!1),n.outerHTML)}function i(t,e){var n=void 0!==e?e(t):[];if(t.nodeType===Node.TEXT_NODE){var r=t.textContent.length;return document.createTextNode("[text "+r+(n.length?" | "+n.join(", "):"")+"]")}var o=t.cloneNode();1===o.nodeType&&n.length&&o.setAttribute("data-labels",n.join(", "));for(var u=t.childNodes,a=0;a<u.length;a++)o.appendChild(i(u[a],e));return o}function o(t,e){for(var n=t;n;){if(n instanceof Element&&n.hasAttribute("contenteditable"))return r(n,e);n=n.parentNode}return"Could not find contentEditable parent of node"}function u(t){return null===t.nodeValue?t.childNodes.length:t.nodeValue.length}function a(t,n,r,i,o){if(f(document.documentElement,n)){var u=e.getSelection(),a=t.getAnchorKey(),l=t.getAnchorOffset(),p=t.getFocusKey(),h=t.getFocusOffset(),d=t.getIsBackward();if(!u.extend&&d){var y=a,g=l;a=p,l=h,p=y,h=g,d=!1}var v=a===r&&i<=l&&o>=l,_=p===r&&i<=h&&o>=h;if(v&&_)return u.removeAllRanges(),c(u,n,l-i,t),void s(u,n,h-i,t);if(d){if(_&&(u.removeAllRanges(),c(u,n,h-i,t)),v){var m=u.focusNode,S=u.focusOffset;u.removeAllRanges(),c(u,n,l-i,t),s(u,m,S,t)}}else v&&(u.removeAllRanges(),c(u,n,l-i,t)),_&&s(u,n,h-i,t)}}function s(t,e,n,r){var i=p();if(t.extend&&f(i,e)){n>u(e)&&l.logSelectionStateFailure({anonymizedDom:o(e),extraParams:JSON.stringify({offset:n}),selectionState:JSON.stringify(r.toJS())});var a=e===t.focusNode;try{t.extend(e,n)}catch(u){throw l.logSelectionStateFailure({anonymizedDom:o(e,function(e){var n=[];return e===i&&n.push("active element"),e===t.anchorNode&&n.push("selection anchor node"),e===t.focusNode&&n.push("selection focus node"),n}),extraParams:JSON.stringify({activeElementName:i?i.nodeName:null,nodeIsFocus:e===t.focusNode,nodeWasFocus:a,selectionRangeCount:t.rangeCount,selectionAnchorNodeName:t.anchorNode?t.anchorNode.nodeName:null,selectionAnchorOffset:t.anchorOffset,selectionFocusNodeName:t.focusNode?t.focusNode.nodeName:null,selectionFocusOffset:t.focusOffset,message:u?""+u:null,offset:n},null,2),selectionState:JSON.stringify(r.toJS(),null,2)}),u}}else{var s=t.getRangeAt(0);s.setEnd(e,n),t.addRange(s.cloneRange())}}function c(t,e,n,r){var i=document.createRange();n>u(e)&&l.logSelectionStateFailure({anonymizedDom:o(e),extraParams:JSON.stringify({offset:n}),selectionState:JSON.stringify(r.toJS())}),i.setStart(e,n),t.addRange(i)}var l=n(207),f=n(87),p=n(120),h=n(1);t.exports=a}).call(e,n(26))},function(t,e,n){"use strict";t.exports={logSelectionStateFailure:function(){return null}}},function(t,e,n){"use strict";function r(t){return i(t)&&3==t.nodeType}var i=n(209);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t?t.ownerDocument||t:document,n=e.defaultView||window;return!(!t||!("function"==typeof n.Node?t instanceof n.Node:"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName))}t.exports=r},function(t,e,n){"use strict";function r(t){return null==t?t:String(t)}function i(t,e){var n=void 0;if(window.getComputedStyle&&(n=window.getComputedStyle(t,null)))return r(n.getPropertyValue(u(e)));if(document.defaultView&&document.defaultView.getComputedStyle){if(n=document.defaultView.getComputedStyle(t,null))return r(n.getPropertyValue(u(e)));if("display"===e)return"none"}return r(t.currentStyle?"float"===e?t.currentStyle.cssFloat||t.currentStyle.styleFloat:t.currentStyle[o(e)]:t.style&&t.style[o(e)])}var o=n(211),u=n(212);t.exports=i},function(t,e,n){"use strict";function r(t){return t.replace(i,function(t,e){return e.toUpperCase()})}var i=/-(.)/g;t.exports=r},function(t,e,n){"use strict";function r(t){return t.replace(i,"-$1").toLowerCase()}var i=/([A-Z])/g;t.exports=r},function(t,e,n){"use strict";function r(t){var e=i(t);return{x:e.left,y:e.top,width:e.right-e.left,height:e.bottom-e.top}}var i=n(214);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.ownerDocument.documentElement;if(!("getBoundingClientRect"in t&&i(e,t)))return{left:0,right:0,top:0,bottom:0};var n=t.getBoundingClientRect();return{left:Math.round(n.left)-e.clientLeft,right:Math.round(n.right)-e.clientLeft,top:Math.round(n.top)-e.clientTop,bottom:Math.round(n.bottom)-e.clientTop}}var i=n(87);t.exports=r},function(t,e,n){"use strict";function r(t){return t=t||document,t.scrollingElement?t.scrollingElement:i||"CSS1Compat"!==t.compatMode?t.body:t.documentElement}var i="undefined"!=typeof navigator&&navigator.userAgent.indexOf("AppleWebKit")>-1;t.exports=r},function(t,e,n){"use strict";function r(t){return t.Window&&t instanceof t.Window?{x:t.pageXOffset||t.document.documentElement.scrollLeft,y:t.pageYOffset||t.document.documentElement.scrollTop}:{x:t.scrollLeft,y:t.scrollTop}}t.exports=r},function(t,e,n){"use strict";function r(){var t=void 0;return document.documentElement&&(t=document.documentElement.clientWidth),!t&&document.body&&(t=document.body.clientWidth),t||0}function i(){var t=void 0;return document.documentElement&&(t=document.documentElement.clientHeight),!t&&document.body&&(t=document.body.clientHeight),t||0}function o(){return{width:window.innerWidth||r(),height:window.innerHeight||i()}}o.withoutScrollbars=function(){return{width:r(),height:i()}},t.exports=o},function(t,e,n){"use strict";function r(t){t||(t="");var e=void 0,n=arguments.length;if(n>1)for(var r=1;r<n;r++)(e=arguments[r])&&(t=(t?t+" ":"")+e);return t}t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=null,r=null;if("function"==typeof document.caretRangeFromPoint){var i=document.caretRangeFromPoint(t.x,t.y);n=i.startContainer,r=i.startOffset}else{if(!t.rangeParent)return null;n=t.rangeParent,r=t.rangeOffset}n=h(n),r=h(r);var o=h(c(n));return f(e,o,r,o,r)}function i(t,e){var n=a.moveText(t.getCurrentContent(),t.getSelection(),e);return s.push(t,n,"insert-fragment")}function o(t,e,n){var r=a.insertText(t.getCurrentContent(),e,n,t.getCurrentInlineStyle());return s.push(t,r,"insert-fragment")}var u=n(122),a=n(5),s=n(2),c=n(90),l=n(124),f=n(125),p=n(50),h=n(13),d={onDragEnd:function(t){t.exitCurrentMode()},onDrop:function(t,e){var n=new u(e.nativeEvent.dataTransfer),a=t._latestEditorState,s=r(e.nativeEvent,a);if(e.preventDefault(),t.exitCurrentMode(),null!=s){var c=n.getFiles();if(c.length>0){if(t.props.handleDroppedFiles&&p(t.props.handleDroppedFiles(s,c)))return;return void l(c,function(e){e&&t.update(o(a,s,e))})}var f=t._internalDrag?"internal":"external";if(!t.props.handleDrop||!p(t.props.handleDrop(s,n,f)))return t._internalDrag?void t.update(i(a,s)):void t.update(o(a,s,n.getText()))}}};t.exports=d},function(t,e,n){"use strict";function r(t){return t.split("/")}var i={isImage:function(t){return"image"===r(t)[0]},isJpeg:function(t){var e=r(t);return i.isImage(t)&&("jpeg"===e[1]||"pjpeg"===e[1])}};t.exports=i},function(t,e,n){"use strict";function r(t){var e=t.length;if((Array.isArray(t)||"object"!=typeof t&&"function"!=typeof t)&&u(!1),"number"!=typeof e&&u(!1),0===e||e-1 in t||u(!1),"function"==typeof t.callee&&u(!1),t.hasOwnProperty)try{return Array.prototype.slice.call(t)}catch(t){}for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}function i(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"length"in t&&!("setInterval"in t)&&"number"!=typeof t.nodeType&&(Array.isArray(t)||"callee"in t||"item"in t)}function o(t){return i(t)?Array.isArray(t)?t.slice():r(t):[t]}var u=n(1);t.exports=o},function(t,e,n){"use strict";var r=n(223),i=n(227),o=n(228),u=n(229),a=n(230),s=n(231),c=n(232),l=n(233),f=n(234),p=n(235),h=n(249),d=n(254),y={onBeforeInput:r,onBlur:i,onCompositionStart:o,onCopy:u,onCut:a,onDragOver:s,onDragStart:c,onFocus:l,onInput:f,onKeyDown:p,onPaste:h,onSelect:d};t.exports=y},function(t,e,n){"use strict";(function(e){function r(t){return v&&(t==y||t==g)}function i(t,e,n,r){var i=a.replaceText(t.getCurrentContent(),t.getSelection(),e,n,r);return s.push(t,i,"insert-characters")}function o(t,n){void 0!==t._pendingStateFromBeforeInput&&(t.update(t._pendingStateFromBeforeInput),t._pendingStateFromBeforeInput=void 0);var o=t._latestEditorState,a=n.data;if(a){if(t.props.handleBeforeInput&&f(t.props.handleBeforeInput(a,o)))return void n.preventDefault();var c=o.getSelection(),y=c.getStartOffset(),g=c.getEndOffset(),v=c.getAnchorKey();if(!c.isCollapsed())return n.preventDefault(),void(a===o.getCurrentContent().getPlainText().slice(y,g)?t.update(s.forceSelection(o,c.merge({focusOffset:g}))):t.update(i(o,a,o.getCurrentInlineStyle(),l(o.getCurrentContent(),o.getSelection()))));var _=i(o,a,o.getCurrentInlineStyle(),l(o.getCurrentContent(),o.getSelection())),m=!1;if(m||(m=p(t._latestCommittedEditorState)),!m){var S=e.getSelection();if(S.anchorNode&&S.anchorNode.nodeType===Node.TEXT_NODE){var b=S.anchorNode.parentNode;m="SPAN"===b.nodeName&&b.firstChild.nodeType===Node.TEXT_NODE&&-1!==b.firstChild.nodeValue.indexOf("\t")}}if(m||(m=u.getFingerprint(o.getBlockTree(v))!==u.getFingerprint(_.getBlockTree(v))),m||(m=r(a)),m||(m=h(_.getDirectionMap()).get(v)!==h(o.getDirectionMap()).get(v)),m)return n.preventDefault(),void t.update(_);_=s.set(_,{nativelyRenderedContent:_.getCurrentContent()}),t._pendingStateFromBeforeInput=_,d(function(){void 0!==t._pendingStateFromBeforeInput&&(t.update(t._pendingStateFromBeforeInput),t._pendingStateFromBeforeInput=void 0)})}}var u=n(114),a=n(5),s=n(2),c=n(18),l=n(86),f=n(50),p=n(118),h=n(13),d=n(224),y="'",g="/",v=c.isBrowser("Firefox");t.exports=o}).call(e,n(26))},function(t,e,n){"use strict";(function(e){n(225),t.exports=e.setImmediate}).call(e,n(26))},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return c[s]=r,a(s),s++}function i(t){delete c[t]}function o(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function u(t){if(l)setTimeout(u,0,t);else{var e=c[t];if(e){l=!0;try{o(e)}finally{i(t),l=!1}}}}if(!t.setImmediate){var a,s=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?function(){a=function(t){e.nextTick(function(){u(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&u(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){u(t.data)},a=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;a=function(e){var n=f.createElement("script");n.onreadystatechange=function(){u(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){a=function(t){setTimeout(u,0,t)}}(),p.setImmediate=r,p.clearImmediate=i}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(26),n(226))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function u(){y&&h&&(y=!1,h.length?d=h.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=i(u);y=!0;for(var e=d.length;e;){for(h=d,d=[];++g<e;)h&&h[g].run();g=-1,e=d.length}h=null,y=!1,o(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var h,d=[],y=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new s(t,e)),1!==d.length||y||i(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";(function(e){function r(t,n){if(u()===document.body){var r=e.getSelection(),a=t.editor;1===r.rangeCount&&o(a,r.anchorNode)&&o(a,r.focusNode)&&r.removeAllRanges()}var s=t._latestEditorState,c=s.getSelection();if(c.getHasFocus()){var l=c.set("hasFocus",!1);t.props.onBlur&&t.props.onBlur(n),t.update(i.acceptSelection(s,l))}}var i=n(2),o=n(87),u=n(120);t.exports=r}).call(e,n(26))},function(t,e,n){"use strict";function r(t,e){t.setMode("composite"),t.update(i.set(t._latestEditorState,{inCompositionMode:!0})),t._onCompositionStart(e)}var i=n(2);t.exports=r},function(t,e,n){"use strict";function r(t,e){if(t._latestEditorState.getSelection().isCollapsed())return void e.preventDefault();t.setClipboard(i(t._latestEditorState))}var i=n(126);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=t._latestEditorState,r=n.getSelection(),o=e.target,u=void 0;if(r.isCollapsed())return void e.preventDefault();o instanceof Node&&(u=c(a.getScrollParent(o)));var l=s(n);t.setClipboard(l),t.setMode("cut"),setTimeout(function(){t.restoreEditorDOM(u),t.exitCurrentMode(),t.update(i(n))},0)}function i(t){var e=o.removeRange(t.getCurrentContent(),t.getSelection(),"forward");return u.push(t,e,"remove-range")}var o=n(5),u=n(2),a=n(88),s=n(126),c=n(89);t.exports=r},function(t,e,n){"use strict";function r(t,e){t._internalDrag=!1,t.setMode("drag"),e.preventDefault()}t.exports=r},function(t,e,n){"use strict";function r(t){t._internalDrag=!0,t.setMode("drag")}t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=t._latestEditorState,r=n.getSelection();if(!r.getHasFocus()){var u=r.set("hasFocus",!0);t.props.onFocus&&t.props.onFocus(e),o.isBrowser("Chrome < 60.0.3081.0")?t.update(i.forceSelection(n,u)):t.update(i.acceptSelection(n,u))}}var i=n(2),o=n(18);t.exports=r},function(t,e,n){"use strict";(function(e){function r(t){void 0!==t._pendingStateFromBeforeInput&&(t.update(t._pendingStateFromBeforeInput),t._pendingStateFromBeforeInput=void 0);var n=e.getSelection(),r=n.anchorNode,s=n.isCollapsed,h=r.nodeType!==Node.TEXT_NODE,d=r.nodeType!==Node.TEXT_NODE&&r.nodeType!==Node.ELEMENT_NODE;if(i.draft_killswitch_allow_nontextnodes){if(h)return}else if(d)return;if(r.nodeType===Node.TEXT_NODE&&(null!==r.previousSibling||null!==r.nextSibling)){var y=r.parentNode;r.nodeValue=y.textContent;for(var g=y.firstChild;null!==g;g=g.nextSibling)g!==r&&y.removeChild(g)}var v=r.textContent,_=t._latestEditorState,m=l(c(r)),S=u.decode(m),b=S.blockKey,w=S.decoratorKey,M=S.leafKey,E=_.getBlockTree(b).getIn([w,"leaves",M]),x=E.start,k=E.end,I=_.getCurrentContent(),L=I.getBlockForKey(b),T=L.getText().slice(x,k);if(v.endsWith(p)&&(v=v.slice(0,-1)),v!==T){var D,O,C,N,j=_.getSelection(),A=j.merge({anchorOffset:x,focusOffset:k,isBackward:!1}),z=L.getEntityAt(x),B=z&&I.getEntity(z),R=B&&B.getMutability(),K="MUTABLE"===R,P=K?"spellcheck-change":"apply-entity",U=o.replaceText(I,A,v,L.getInlineStyleAt(x),K?L.getEntityAt(x):null);if(f)D=n.anchorOffset,O=n.focusOffset,C=x+Math.min(D,O),N=C+Math.abs(D-O),D=C,O=N;else{var F=v.length-T.length;C=j.getStartOffset(),N=j.getEndOffset(),D=s?N+F:C,O=N+F}var Y=U.merge({selectionBefore:I.getSelectionAfter(),selectionAfter:j.merge({anchorOffset:D,focusOffset:O})});t.update(a.push(_,Y,P))}}var i=n(31),o=n(5),u=n(63),a=n(2),s=n(18),c=n(90),l=n(13),f=s.isEngine("Gecko"),p="\n\n";t.exports=r}).call(e,n(26))},function(t,e,n){"use strict";function r(t,e){switch(t){case"redo":return u.redo(e);case"delete":return m(e);case"delete-word":return d(e);case"backspace":return _(e);case"backspace-word":return h(e);case"backspace-to-start-of-line":return p(e);case"split-block":return y(e);case"transpose-characters":return S(e);case"move-selection-to-start-of-block":return v(e);case"move-selection-to-end-of-block":return g(e);case"secondary-cut":return c.cut(e);case"secondary-paste":return c.paste(e);default:return e}}function i(t,e){var n=e.which,i=t._latestEditorState;switch(n){case s.RETURN:if(e.preventDefault(),t.props.handleReturn&&f(t.props.handleReturn(e,i)))return;break;case s.ESC:return e.preventDefault(),void(t.props.onEscape&&t.props.onEscape(e));case s.TAB:return void(t.props.onTab&&t.props.onTab(e));case s.UP:return void(t.props.onUpArrow&&t.props.onUpArrow(e));case s.RIGHT:return void(t.props.onRightArrow&&t.props.onRightArrow(e));case s.DOWN:return void(t.props.onDownArrow&&t.props.onDownArrow(e));case s.LEFT:return void(t.props.onLeftArrow&&t.props.onLeftArrow(e));case s.SPACE:if(M&&w(e)){e.preventDefault();var a=o.replaceText(i.getCurrentContent(),i.getSelection()," ");return void t.update(u.push(i,a,"insert-characters"))}}var c=t.props.keyBindingFn(e);if(c){if("undo"===c)return void b(e,i,t.update);if(e.preventDefault(),!t.props.handleKeyCommand||!f(t.props.handleKeyCommand(c,i))){var l=r(c,i);l!==i&&t.update(l)}}}var o=n(5),u=n(2),a=n(64),s=n(62),c=n(236),l=n(18),f=n(50),p=n(237),h=n(239),d=n(241),y=n(242),g=n(243),v=n(244),_=n(245),m=n(246),S=n(247),b=n(248),w=a.isOptionKeyCommand,M=l.isBrowser("Chrome");t.exports=i},function(t,e,n){"use strict";var r=n(5),i=n(2),o=n(60),u=n(13),a=null,s={cut:function(t){var e=t.getCurrentContent(),n=t.getSelection(),s=null;if(n.isCollapsed()){var c=n.getAnchorKey(),l=e.getBlockForKey(c).getLength();if(l===n.getAnchorOffset())return t;s=n.set("focusOffset",l)}else s=n;s=u(s),a=o(e,s);var f=r.removeRange(e,s,"forward");return f===e?t:i.push(t,f,"remove-range")},paste:function(t){if(!a)return t;var e=r.replaceWithFragment(t.getCurrentContent(),t.getSelection(),a);return i.push(t,e,"insert-fragment")}};t.exports=s},function(t,e,n){"use strict";(function(e){function r(t){var n=s(t,function(t){var n=t.getSelection();if(n.isCollapsed()&&0===n.getAnchorOffset())return a(t,1);var r=e.getSelection(),i=r.getRangeAt(0);return i=o(i),u(t,null,i.endContainer,i.endOffset,i.startContainer,i.startOffset).selectionState},"backward");return n===t.getCurrentContent()?t:i.push(t,n,"remove-range")}var i=n(2),o=n(238),u=n(128),a=n(91),s=n(51);t.exports=r}).call(e,n(26))},function(t,e,n){"use strict";function r(t){var e=getComputedStyle(t),n=document.createElement("div");n.style.fontFamily=e.fontFamily,n.style.fontSize=e.fontSize,n.style.fontStyle=e.fontStyle,n.style.fontWeight=e.fontWeight,n.style.lineHeight=e.lineHeight,n.style.position="absolute",n.textContent="M";var r=document.body;r||c(!1),r.appendChild(n);var i=n.getBoundingClientRect();return r.removeChild(n),i.height}function i(t,e){for(var n=1/0,r=1/0,i=-1/0,o=-1/0,u=0;u<t.length;u++){var a=t[u];0!==a.width&&1!==a.width&&(n=Math.min(n,a.top),r=Math.min(r,a.bottom),i=Math.max(i,a.top),o=Math.max(o,a.bottom))}return i<=r&&i-n<e&&o-r<e}function o(t){switch(t.nodeType){case Node.DOCUMENT_TYPE_NODE:return 0;case Node.TEXT_NODE:case Node.PROCESSING_INSTRUCTION_NODE:case Node.COMMENT_NODE:return t.length;default:return t.childNodes.length}}function u(t){t.collapsed||c(!1),t=t.cloneRange();var e=t.startContainer;1!==e.nodeType&&(e=e.parentNode);var n=r(e),u=t.endContainer,l=t.endOffset;for(t.setStart(t.startContainer,0);i(s(t),n)&&(u=t.startContainer,l=t.startOffset,u.parentNode||c(!1),t.setStartBefore(u),1!==u.nodeType||"inline"===getComputedStyle(u).display););for(var f=u,p=l-1;;){for(var h=f.nodeValue,d=p;d>=0;d--)if(!(null!=h&&d>0&&a.isSurrogatePair(h,d-1))){if(t.setStart(f,d),!i(s(t),n))break;u=f,l=d}if(-1===d||0===f.childNodes.length)break;f=f.childNodes[d],p=o(f)}return t.setStart(u,l),t}var a=n(39),s=n(127),c=n(1);t.exports=u},function(t,e,n){"use strict";function r(t){var e=a(t,function(t){var e=t.getSelection(),n=e.getStartOffset();if(0===n)return u(t,1);var r=e.getStartKey(),o=t.getCurrentContent(),a=o.getBlockForKey(r).getText().slice(0,n),s=i.getBackward(a);return u(t,s.length||1)},"backward");return e===t.getCurrentContent()?t:o.push(t,e,"remove-range")}var i=n(129),o=n(2),u=n(91),a=n(51);t.exports=r},function(t,e,n){"use strict";t.exports={getPunctuation:function(){return"[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]"}}},function(t,e,n){"use strict";function r(t){var e=a(t,function(t){var e=t.getSelection(),n=e.getStartOffset(),r=e.getStartKey(),o=t.getCurrentContent(),a=o.getBlockForKey(r).getText().slice(n),s=i.getForward(a);return u(t,s.length||1)},"forward");return e===t.getCurrentContent()?t:o.push(t,e,"remove-range")}var i=n(129),o=n(2),u=n(130),a=n(51);t.exports=r},function(t,e,n){"use strict";function r(t){var e=i.splitBlock(t.getCurrentContent(),t.getSelection());return o.push(t,e,"split-block")}var i=n(5),o=n(2);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.getSelection(),n=e.getEndKey(),r=t.getCurrentContent(),o=r.getBlockForKey(n).getLength();return i.set(t,{selection:e.merge({anchorKey:n,anchorOffset:o,focusKey:n,focusOffset:o,isBackward:!1}),forceSelection:!0})}var i=n(2);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.getSelection(),n=e.getStartKey();return i.set(t,{selection:e.merge({anchorKey:n,anchorOffset:0,focusKey:n,focusOffset:0,isBackward:!1}),forceSelection:!0})}var i=n(2);t.exports=r},function(t,e,n){"use strict";function r(t){var e=a(t,function(t){var e=t.getSelection(),n=t.getCurrentContent(),r=e.getAnchorKey(),i=e.getAnchorOffset(),a=n.getBlockForKey(r).getText()[i-1];return u(t,a?o.getUTF16Length(a,0):1)},"backward");if(e===t.getCurrentContent())return t;var n=t.getSelection();return i.push(t,e.set("selectionBefore",n),n.isCollapsed()?"backspace-character":"remove-range")}var i=n(2),o=n(39),u=n(91),a=n(51);t.exports=r},function(t,e,n){"use strict";function r(t){var e=a(t,function(t){var e=t.getSelection(),n=t.getCurrentContent(),r=e.getAnchorKey(),i=e.getAnchorOffset(),a=n.getBlockForKey(r).getText()[i];return u(t,a?o.getUTF16Length(a,0):1)},"forward");if(e===t.getCurrentContent())return t;var n=t.getSelection();return i.push(t,e.set("selectionBefore",n),n.isCollapsed()?"delete-character":"remove-range")}var i=n(2),o=n(39),u=n(130),a=n(51);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.getSelection();if(!e.isCollapsed())return t;var n=e.getAnchorOffset();if(0===n)return t;var r=e.getAnchorKey(),a=t.getCurrentContent(),s=a.getBlockForKey(r),c=s.getLength();if(c<=1)return t;var l,f;n===c?(l=e.set("anchorOffset",n-1),f=e):(l=e.set("focusOffset",n+1),f=l.set("anchorOffset",n+1));var p=u(a,l),h=i.removeRange(a,l,"backward"),d=h.getSelectionAfter(),y=d.getAnchorOffset()-1,g=d.merge({anchorOffset:y,focusOffset:y}),v=i.replaceWithFragment(h,g,p),_=o.push(t,v,"insert-fragment");return o.acceptSelection(_,f)}var i=n(5),o=n(2),u=n(60);t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=i.undo(e);if("spellcheck-change"===e.getLastChangeType()){var o=r.getCurrentContent();return void n(i.set(r,{nativelyRenderedContent:o}))}if(t.preventDefault(),!e.getNativelyRenderedContent())return void n(r);n(i.set(e,{nativelyRenderedContent:null})),setTimeout(function(){n(r)},0)}var i=n(2);t.exports=r},function(t,e,n){"use strict";function r(t,e){e.preventDefault();var n=new s(e.clipboardData);if(!n.isRichText()){var r=n.getFiles(),v=n.getText();if(r.length>0){if(t.props.handlePastedFiles&&y(t.props.handlePastedFiles(r)))return;return void d(r,function(e){if(e=e||v){var n=t._latestEditorState,r=g(e),i=a.create({style:n.getCurrentInlineStyle(),entity:h(n.getCurrentContent(),n.getSelection())}),o=p.getCurrentBlockType(n),s=l.processText(r,i,o),d=u.createFromArray(s),y=c.replaceWithFragment(n.getCurrentContent(),n.getSelection(),d);t.update(f.push(n,y,"insert-fragment"))}})}}var _=[],m=n.getText(),S=n.getHTML(),b=t._latestEditorState;if(!t.props.handlePastedText||!y(t.props.handlePastedText(m,S,b))){if(m&&(_=g(m)),!t.props.stripPastedStyles){var w=t.getClipboard();if(n.isRichText()&&w){if(-1!==S.indexOf(t.getEditorKey())||1===_.length&&1===w.size&&w.first().getText()===m)return void t.update(i(t._latestEditorState,w))}else if(w&&n.types.includes("com.apple.webarchive")&&!n.types.includes("text/html")&&o(_,w))return void t.update(i(t._latestEditorState,w));if(S){var M=l.processHTML(S,t.props.blockRenderMap);if(M){var E=M.contentBlocks,x=M.entityMap;if(E){var k=u.createFromArray(E);return void t.update(i(t._latestEditorState,k,x))}}}t.setClipboard(null)}if(_.length){var I=a.create({style:b.getCurrentInlineStyle(),entity:h(b.getCurrentContent(),b.getSelection())}),L=p.getCurrentBlockType(b),T=l.processText(_,I,L),D=u.createFromArray(T);t.update(i(t._latestEditorState,D))}}}function i(t,e,n){var r=c.replaceWithFragment(t.getCurrentContent(),t.getSelection(),e);return f.push(t,r.set("entityMap",n),"insert-fragment")}function o(t,e){return t.length===e.size&&e.valueSeq().every(function(e,n){return e.getText()===t[n]})}var u=n(48),a=n(7),s=n(122),c=n(5),l=n(250),f=n(2),p=n(133),h=n(86),d=n(124),y=n(50),g=n(253);t.exports=r},function(t,e,n){"use strict";var r=n(9),i=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=(n(7),n(37)),u=n(10),a=n(31),s=n(0),c=n(131),l=n(25),f=n(132),p=n(83),h=s.List,d=s.Repeat,y=a.draft_tree_data_support,g=y?u:o,v={processHTML:function(t,e){return c(t,f,e)},processText:function(t,e,n){return t.reduce(function(t,r,o){r=p(r);var u=l(),a={key:u,type:n,text:r,characterList:h(d(e,r.length))};if(y&&0!==o){var s=o-1,c=t[s]=t[s].merge({nextSibling:u});a=i({},a,{prevSibling:c.getKey()})}return t.push(new g(a)),t},[])}};t.exports=v},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(e){r(this,t),this._uri=e}return t.prototype.toString=function(){return this._uri},t}();t.exports=i},function(t,e,n){"use strict";function r(t,e,n,r){var i=e.getStartKey(),o=e.getEndKey(),u=t.getBlockMap(),a=u.toSeq().skipUntil(function(t,e){return e===i}).takeUntil(function(t,e){return e===o}).concat([[o,u.get(o)]]).map(function(t){var e=t.getDepth()+n;return e=Math.max(0,Math.min(e,r)),t.set("depth",e)});return u=u.merge(a),t.merge({blockMap:u,selectionBefore:e,selectionAfter:e})}t.exports=r},function(t,e,n){"use strict";function r(t){return t.split(i)}var i=/\r\n?|\n/g;t.exports=r},function(t,e,n){"use strict";function r(t){if(!t._blockSelectEvents&&t._latestEditorState===t.props.editorState){var e=t.props.editorState,n=o.findDOMNode(t.editorContainer);n||a(!1),n.firstChild instanceof HTMLElement||a(!1);var r=u(e,n.firstChild),s=r.selectionState;s!==e.getSelection()&&(e=r.needsRecovery?i.forceSelection(e,s):i.acceptSelection(e,s),t.update(e))}}var i=n(2),o=n(38),u=n(255),a=n(1);t.exports=r},function(t,e,n){"use strict";(function(e){function r(t,n){var r=e.getSelection();return 0===r.rangeCount?{selectionState:t.getSelection().set("hasFocus",!1),needsRecovery:!1}:i(t,n,r.anchorNode,r.anchorOffset,r.focusNode,r.focusOffset)}var i=n(128);t.exports=r}).call(e,n(26))},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(3),a=n(44),s=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.shouldComponentUpdate=function(t){return this.props.text!==t.text||this.props.editorState.getSelection().getHasFocus()!==t.editorState.getSelection().getHasFocus()},e.prototype.render=function(){var t=this.props.editorState.getSelection().getHasFocus(),e=a({"public/DraftEditorPlaceholder/root":!0,"public/DraftEditorPlaceholder/hasFocus":t}),n={whiteSpace:"pre-wrap"};return u.createElement("div",{className:e},u.createElement("div",{className:a("public/DraftEditorPlaceholder/inner"),id:this.props.accessibilityID,style:n},this.props.text))},e}(u.Component);t.exports=s},function(t,e,n){"use strict";var r=n(9),i=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(37),u=n(10),a=n(134),s=n(258),c=n(259),l=n(1),f=function(t,e){return{key:t.getKey(),text:t.getText(),type:t.getType(),depth:t.getDepth(),inlineStyleRanges:c(t),entityRanges:s(t,e),data:t.getData().toObject()}},p=function(t,e,n,r){if(t instanceof o)return void n.push(f(t,e));t instanceof u||l(!1);var a=t.getParentKey(),s=r[t.getKey()]=i({},f(t,e),{children:[]});if(a)return void r[a].children.push(s);n.push(s)},h=function(t,e){var n=e.entityMap,r=[],i={},o={},u=0;return t.getBlockMap().forEach(function(t){t.findEntityRanges(function(t){return null!==t.getEntity()},function(e){var r=t.getEntityAt(e),i=a.stringify(r);o[i]||(o[i]=r,n[i]=""+u,u++)}),p(t,n,r,i)}),{blocks:r,entityMap:n}},d=function(t,e){var n=e.blocks,r=e.entityMap,i={};return Object.keys(r).forEach(function(e,n){var r=t.getEntity(a.unstringify(e));i[n]={type:r.getType(),mutability:r.getMutability(),data:r.getData()}}),{blocks:n,entityMap:i}},y=function(t){var e={entityMap:{},blocks:[]};return e=h(t,e),e=d(t,e)};t.exports=y},function(t,e,n){"use strict";function r(t,e){var n=[];return t.findEntityRanges(function(t){return!!t.getEntity()},function(r,o){var a=t.getText(),s=t.getEntityAt(r);n.push({offset:u(a.slice(0,r)),length:u(a.slice(r,o)),key:Number(e[i.stringify(s)])})}),n}var i=n(134),o=n(39),u=o.strlen;t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=[],i=e.map(function(t){return t.has(n)}).toList();return u(i,a,s,function(e,i){var u=t.getText();r.push({offset:o.strlen(u.slice(0,e)),length:o.strlen(u.slice(e,i)),style:n})}),r}function i(t){var e=t.getCharacterList().map(function(t){return t.getStyle()}).toList(),n=e.flatten().toSet().map(function(n){return r(t,e,n)});return Array.prototype.concat.apply(c,n.toJS())}var o=n(39),u=n(49),a=function(t,e){return t===e},s=function(t){return!!t},c=[];t.exports=i},function(t,e,n){"use strict";var r=n(9),i=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(37),u=n(10),a=n(82),s=n(61),c=n(31),l=n(261),f=n(0),p=n(43),h=n(262),d=n(263),y=n(264),g=n(25),v=n(1),_=c.draft_tree_data_support,m=f.List,S=f.Map,b=f.OrderedMap,w=function(t,e){var n=t.key,r=t.type,i=t.data;return{text:t.text,depth:t.depth||0,type:r||"unstyled",key:n||g(),data:S(i),characterList:M(t,e)}},M=function(t,e){var n=t.text,r=t.entityRanges,o=t.inlineStyleRanges,u=r||[];return h(y(n,o||[]),d(n,u.filter(function(t){return e.hasOwnProperty(t.key)}).map(function(t){return i({},t,{key:e[t.key]})})))},E=function(t){return i({},t,{key:t.key||g()})},x=function(t,e,n){var r=e.map(function(t){return i({},t,{parentRef:n})});return t.concat(r.reverse())},k=function(t,e){return t.map(E).reduce(function(n,r,o){Array.isArray(r.children)||v(!1);var a=r.children.map(E),s=new u(i({},w(r,e),{prevSibling:0===o?null:t[o-1].key,nextSibling:o===t.length-1?null:t[o+1].key,children:m(a.map(function(t){return t.key}))}));n=n.set(s.getKey(),s);for(var c=x([],a,s);c.length>0;){var l=c.pop(),f=l.parentRef,p=f.getChildKeys(),h=p.indexOf(l.key),d=Array.isArray(l.children);if(!d){d||v(!1);break}var y=l.children.map(E),g=new u(i({},w(l,e),{parent:f.getKey(),children:m(y.map(function(t){return t.key})),prevSibling:0===h?null:p.get(h-1),nextSibling:h===p.size-1?null:p.get(h+1)}));n=n.set(g.getKey(),g),c=x(c,y,g)}return n},b())},I=function(t,e){return b(t.map(function(t){var n=new o(w(t,e));return[n.getKey(),n]}))},L=function(t,e){var n=Array.isArray(t.blocks[0].children),r=_&&!n?l.fromRawStateToRawTreeState(t).blocks:t.blocks;return _?k(r,e):I(n?l.fromRawTreeStateToRawState(t).blocks:r,e)},T=function(t){var e=t.entityMap,n={};return Object.keys(e).forEach(function(t){var r=e[t],i=r.type,o=r.mutability,u=r.data;n[t]=s.__create(i,o,u||{})}),n},D=function(t){Array.isArray(t.blocks)||v(!1);var e=T(t),n=L(t,e),r=n.isEmpty()?new p:p.createEmpty(n.first().getKey());return new a({blockMap:n,entityMap:e,selectionBefore:r,selectionAfter:r})};t.exports=D},function(t,e,n){"use strict";var r=n(9),i=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(1),u=function(t,e){for(var n=[].concat(t).reverse();n.length;){var r=n.pop();e(r);var i=r.children;Array.isArray(i)||o(!1),n=n.concat([].concat(i.reverse()))}},a=function(t){if(!t||!t.type)return!1;var e=t.type;return"unordered-list-item"===e||"ordered-list-item"===e},s=function(t){Array.isArray(t.children)&&(t.children=t.children.map(function(e){return e.type===t.type?i({},e,{depth:(t.depth||0)+1}):e}))},c={fromRawTreeStateToRawState:function(t){var e=t.blocks,n=[];return Array.isArray(e)||o(!1),Array.isArray(e)&&e.length?(u(e,function(t){var e=i({},t);a(t)&&(e.depth=e.depth||0,s(t)),delete e.children,n.push(e)}),t.blocks=n,i({},t,{blocks:n})):t},fromRawStateToRawTreeState:function(t){var e={},n=[];return t.blocks.forEach(function(t){var r=a(t),u=t.depth||0,s=i({},t,{children:[]});if(!r)return e={},void n.push(s);if(e[u]=s,u>0){var c=e[u-1];return c||o(!1),void c.children.push(s)}n.push(s)}),i({},t,{blocks:n})}};t.exports=c},function(t,e,n){"use strict";function r(t,e){var n=t.map(function(t,n){var r=e[n];return i.create({style:t,entity:r})});return u(n)}var i=n(7),o=n(0),u=o.List;t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=Array(t.length).fill(null);return e&&e.forEach(function(e){for(var r=o(t,0,e.offset).length,i=r+o(t,e.offset,e.length).length,u=r;u<i;u++)n[u]=e.key}),n}var i=n(39),o=i.substr;t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=Array(t.length).fill(s);return e&&e.forEach(function(e){for(var r=a(t,0,e.offset).length,i=r+a(t,e.offset,e.length).length;r<i;)n[r]=n[r].add(e.style),r++}),n}var i=n(0),o=i.OrderedSet,u=n(39),a=u.substr,s=o();t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.getSelection();if(!e.rangeCount)return null;var n=e.getRangeAt(0),r=i(n),o=r.top,u=r.right,a=r.bottom,s=r.left;return 0===o&&0===u&&0===a&&0===s?null:r}var i=n(266);t.exports=r},function(t,e,n){"use strict";function r(t){var e=i(t),n=0,r=0,o=0,u=0;if(e.length){if(e.length>1&&0===e[0].width){var a=e[1];n=a.top,r=a.right,o=a.bottom,u=a.left}else{var s=e[0];n=s.top,r=s.right,o=s.bottom,u=s.left}for(var c=1;c<e.length;c++){var l=e[c];0!==l.height&&0!==l.width&&(n=Math.min(n,l.top),r=Math.max(r,l.right),o=Math.max(o,l.bottom),u=Math.min(u,l.left))}}return{top:n,right:r,bottom:o,left:u,width:r-u,height:o-n}}var i=n(127);t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.BLOCK_TYPE={UNSTYLED:"unstyled",HEADER_ONE:"header-one",HEADER_TWO:"header-two",HEADER_THREE:"header-three",HEADER_FOUR:"header-four",HEADER_FIVE:"header-five",HEADER_SIX:"header-six",UNORDERED_LIST_ITEM:"unordered-list-item",ORDERED_LIST_ITEM:"ordered-list-item",BLOCKQUOTE:"blockquote",PULLQUOTE:"pullquote",CODE:"code-block",ATOMIC:"atomic"},i=e.ENTITY_TYPE={LINK:"LINK",IMAGE:"IMAGE"},o=e.INLINE_STYLE={BOLD:"BOLD",CODE:"CODE",ITALIC:"ITALIC",STRIKETHROUGH:"STRIKETHROUGH",UNDERLINE:"UNDERLINE"};e.default={BLOCK_TYPE:r,ENTITY_TYPE:i,INLINE_STYLE:o}},function(t,e,n){"use strict";function r(t,e){for(var n=null,r=null,o=[],u=0,a=0,s=t.length;a<s;a++){r=n;var c=e.get(a);n=c?c.getEntity():null,a>0&&n!==r&&(o.push([r,i(t.slice(u,a),e.slice(u,a))]),u=a)}return o.push([n,i(t.slice(u),e.slice(u))]),o}function i(t,e){for(var n=u,r=u,i=[],a=0,s=0,c=t.length;s<c;s++){r=n;var l=e.get(s);n=l?l.getStyle():u,s>0&&!(0,o.is)(n,r)&&(i.push([t.slice(a,s),r]),a=s)}return i.push([t.slice(a),n]),i}Object.defineProperty(e,"__esModule",{value:!0}),e.EMPTY_SET=void 0,e.default=r;var o=n(93),u=e.EMPTY_SET=new o.OrderedSet},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(94),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(e,n){var r=e.getCurrentContent(),o=n||e.getSelection(),u=o.getStartKey(),a=o.getEndKey(),s=o.getStartOffset(),c=o.getEndOffset(),l=u===a,f=(0,i.default)(r,u,a),p=!1,h=s+1,d=c-1;return f.forEach(function(e){t(e,function(t,n){if(!p){var r=e.getKey();l&&(n<h||t>d)||r===u&&n<h||r===a&&t>d||(p=!0)}},r)}),p}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),i=n(94),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e){for(var n=arguments.length,i=Array(n>2?n-2:0),u=2;u<n;u++)i[u-2]=arguments[u];var a=t.getCurrentContent(),s=t.getSelection(),c=s.getStartKey(),l=s.getEndKey(),f=s.getStartOffset(),p=s.getEndOffset(),h=c===l,d=(0,o.default)(a,c,l),y=t;return d.forEach(function(t){var n=t.getKey(),o=f,u=p;n===c?(o=f,u=h?p:t.getText().length):n===l?(o=h?f:0,u=p):(o=0,u=t.getText().length);var a=new r.SelectionState({anchorKey:n,anchorOffset:o,focusKey:n,focusOffset:u});y=e.apply(void 0,[y,a].concat(i))}),r.EditorState.forceSelection(y,s)}},function(t,e,n){"use strict";function r(t){return t.which===i.RETURN&&(t.getModifierState("Shift")||t.getModifierState("Alt")||t.getModifierState("Control"))}var i=n(62);t.exports=r},function(t,e,n){n(47),n(273),t.exports=n(4).Array.from},function(t,e,n){"use strict";var r=n(34),i=n(8),o=n(46),u=n(136),a=n(137),s=n(53),c=n(274),l=n(95);i(i.S+i.F*!n(275)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,p=o(t),h="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,g=void 0!==y,v=0,_=l(p);if(g&&(y=r(y,d>2?arguments[2]:void 0,2)),void 0==_||h==Array&&a(_))for(e=s(p.length),n=new h(e);e>v;v++)c(n,v,g?y(p[v],v):p[v]);else for(f=_.call(p),n=new h;!(i=f.next()).done;v++)c(n,v,g?u(f,y,[i.value,v],!0):i.value);return n.length=v,n}})},function(t,e,n){"use strict";var r=n(11),i=n(45);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(6)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},t(o)}catch(t){}return n}},function(t,e,n){t.exports={default:n(277),__esModule:!0}},function(t,e,n){n(109),n(47),n(59),n(278),n(285),n(288),n(290),t.exports=n(4).Map},function(t,e,n){"use strict";var r=n(279),i=n(140);t.exports=n(281)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(11).f,i=n(57),o=n(138),u=n(34),a=n(139),s=n(65),c=n(76),l=n(105),f=n(280),p=n(15),h=n(79).fastKey,d=n(140),y=p?"_s":"size",g=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var l=t(function(t,r){a(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[y]=0,void 0!=r&&s(r,n,t[c],t)});return o(l.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var n=d(this,e),r=g(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[y]--}return!!r},forEach:function(t){d(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(d(this,e),t)}}),p&&r(l.prototype,"size",{get:function(){return d(this,e)[y]}}),l},def:function(t,e,n){var r,i,o=g(t,e);return o?o.v=n:(t._l=o={i:i=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[y]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,e,n){c(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?l(0,n.k):"values"==e?l(0,n.v):l(0,[n.k,n.v]):(t._t=void 0,l(1))},n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var r=n(14),i=n(4),o=n(11),u=n(15),a=n(6)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];u&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(14),i=n(8),o=n(79),u=n(35),a=n(29),s=n(138),c=n(65),l=n(139),f=n(20),p=n(58),h=n(11).f,d=n(282)(0),y=n(15);t.exports=function(t,e,n,g,v,_){var m=r[t],S=m,b=v?"set":"add",w=S&&S.prototype,M={};return y&&"function"==typeof S&&(_||w.forEach&&!u(function(){(new S).entries().next()}))?(S=e(function(e,n){l(e,S,t,"_c"),e._c=new m,void 0!=n&&c(n,v,e[b],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in w&&(!_||"clear"!=t)&&a(S.prototype,t,function(n,r){if(l(this,S,t),!e&&_&&!f(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,r);return e?this:i})}),_||h(S.prototype,"size",{get:function(){return this._c.size}})):(S=g.getConstructor(e,t,v,b),s(S.prototype,n),o.NEED=!0),p(S,t),M[t]=S,i(i.G+i.W+i.F,M),_||g.setStrong(S,t,v),S}},function(t,e,n){var r=n(34),i=n(67),o=n(46),u=n(53),a=n(283);t.exports=function(t,e){var n=1==t,s=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=e||a;return function(e,a,d){for(var y,g,v=o(e),_=i(v),m=r(a,d,3),S=u(_.length),b=0,w=n?h(e,S):s?h(e,0):void 0;S>b;b++)if((p||b in _)&&(y=_[b],g=m(y,b,v),t))if(n)w[b]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return b;case 2:w.push(y)}else if(l)return!1;return f?-1:c||l?l:w}}},function(t,e,n){var r=n(284);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(20),i=n(106),o=n(6)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(8);r(r.P+r.R,"Map",{toJSON:n(286)("Map")})},function(t,e,n){var r=n(96),i=n(287);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){var r=n(65);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e,n){n(289)("Map")},function(t,e,n){"use strict";var r=n(8);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){n(291)("Map")},function(t,e,n){"use strict";var r=n(8),i=n(98),o=n(34),u=n(65);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,a,s=arguments[1];return i(this),e=void 0!==s,e&&i(s),void 0==t?new this:(n=[],e?(r=0,a=o(s,arguments[2],2),u(t,!1,function(t){n.push(a(t,r++))})):u(t,!1,n.push,n),new this(n))}})}},function(t,e,n){var r=n(293);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".Button__root___1gz0c{display:inline-block;margin:0 5px 0 0;padding:3px 8px;height:30px;line-height:22px;box-sizing:border-box;background:none #fdfdfd;background:linear-gradient(180deg,#fdfdfd 0,#f6f7f8);border:1px solid #999;border-radius:2px;color:#333;text-decoration:none;font-size:inherit;font-family:inherit;cursor:pointer;white-space:nowrap}.Button__root___1gz0c:disabled{cursor:not-allowed;background:none transparent}.Button__root___1gz0c:disabled>*{opacity:.5}",""]),e.locals={root:"Button__root___1gz0c"}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,n){var r=n(296);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".ButtonWrap__root___1EO_R{display:inline-block;position:relative;z-index:10}",""]),e.locals={root:"ButtonWrap__root___1EO_R"}},function(t,e,n){var r=n(298);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,'.IconButton__root___3tqZW{padding-left:3px;padding-right:3px}.IconButton__icon___3YgOS{display:inline-block;width:22px;height:22px;background-position:50%;background-repeat:no-repeat;background-size:18px}.IconButton__isActive___2Ey8p{background:none #d8d8d8}.IconButton__icon-undo___EQSRP{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuODU2IDI0YzIuNjY1LTQuODMgMy4xMTUtMTIuMTk1LTcuMzU2LTExLjk1VjE4bC05LTkgOS05djUuODJDMjMuMDM4IDUuNDk1IDI0LjQzNSAxNi44OSAxNy44NTYgMjR6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-redo___30MVz{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNSA1LjgyVjBsOSA5LTkgOXYtNS45NUMzLjAzIDExLjgwNiAzLjQ3OCAxOS4xNyA2LjE0NCAyNC0uNDM2IDE2Ljg5Ljk2MiA1LjQ5NCAxMy41IDUuODJ6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-unordered-list-item___Pvkrr{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgMy4zNDRIMTR2MS4zMTNINC42NTZWMy4zNDR6bTAgNS4zMTJWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bS0yLTEuNTNxLjM3NSAwIC42NC4yNXQuMjY3LjYyNC0uMjY2LjYyNS0uNjQuMjUtLjYyNi0uMjVUMS43OCAxMnQuMjUtLjYyNS42MjYtLjI1em0wLTguMTI2cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDR0LjI5Ny0uNzIuNzAzLS4yOHptMCA0cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDh0LjI5Ny0uNzIuNzAzLS4yOHoiLz48L3N2Zz4=")}.IconButton__icon-ordered-list-item___2rzD0{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgOC42NTZWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bTAtOS4zMTJIMTR2MS4zMTNINC42NTZWMy4zNDR6bS0zLjMxMiA0di0uNjg4aDJ2LjYyNWwtMS4yMiAxLjM3NmgxLjIydi42ODhoLTJWOC43MmwxLjE4OC0xLjM3NkgxLjM0NHptLjY1Ni0ydi0yaC0uNjU2di0uNjg4aDEuMzEzdjIuNjg4SDJ6bS0uNjU2IDZ2LS42ODhoMnYyLjY4OGgtMnYtLjY4OGgxLjMxM3YtLjMxM0gydi0uNjg4aC42NTd2LS4zMTNIMS4zNDR6Ii8+PC9zdmc+")}.IconButton__icon-blockquote___17VSX{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOS4zNDQgMTEuMzQ0bDEuMzEzLTIuNjg4aC0ydi00aDR2NGwtMS4zMTMgMi42ODhoLTJ6bS01LjM0NCAwbDEuMzQ0LTIuNjg4aC0ydi00aDR2NEw2IDExLjM0NEg0eiIvPjwvc3ZnPg==")}.IconButton__icon-bold___2zl9t{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOSAxMC4zNDRxLjQzOCAwIC43Mi0uMjk3dC4yOC0uNzAzLS4yOC0uNzAzVDkgOC4zNDVINi42NTZ2Mkg5em0tMi4zNDQtNnYyaDJxLjQwNiAwIC43MDMtLjI5N3QuMjk2LS43MDMtLjI5Ny0uNzAzLS43MDQtLjI5NmgtMnptMy43NSAyLjg0NHExLjQzOC42NTYgMS40MzggMi4yOCAwIDEuMDY0LS43MDMgMS43OThUOS4zNzYgMTJoLTQuNzJWMi42NTZoNC4xOXExLjEyNCAwIDEuODkuNzh0Ljc2NiAxLjkwNy0xLjA5MyAxLjg0NHoiLz48L3N2Zz4=")}.IconButton__icon-italic___2hHzc{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNi42NTYgMi42NTZIMTJ2MmgtMS44NzVMNy44NzUgMTBoMS40N3YySDR2LTJoMS44NzVsMi4yNS01LjM0NGgtMS40N3YtMnoiLz48L3N2Zz4=")}.IconButton__icon-underline___2EmZJ{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMy4zNDQgMTIuNjU2aDkuMzEzVjE0SDMuMzQ0di0xLjM0NHpNOCAxMS4zNDRxLTEuNjU2IDAtMi44MjgtMS4xNzJUNCA3LjM0NFYyaDEuNjU2djUuMzQ0cTAgLjk3LjY4OCAxLjY0VDggOS42NTh0MS42NTYtLjY3Mi42ODgtMS42NFYySDEydjUuMzQ0UTEyIDkgMTAuODI4IDEwLjE3MlQ4IDExLjM0NHoiLz48L3N2Zz4=")}.IconButton__icon-strikethrough___QtE2X{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNTcgMTJxLjE5IDAgLjMxLjEydC4xMi4zMXYuODU2cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTJILjQzcS0uMTg4IDAtLjMwOC0uMTJUMCAxMy4yODZ2LS44NTdxMC0uMTkuMTItLjMxVC40MjggMTJIMjMuNTd6bS0xNy4xLS44NTdxLS4zNzYtLjQ3LS42ODQtMS4wNy0uNjQzLTEuMy0uNjQzLTIuNTIgMC0yLjQyMyAxLjc5NS00LjEzNyAxLjc4LTEuNyA1LjI2My0xLjcuNjcgMCAyLjIzOC4yNTMuODg0LjE2IDIuMzcuNjQyLjEzNS41MS4yODIgMS41OC4xODggMS42NDcuMTg4IDIuNDUgMCAuMjQyLS4wNjcuNjA0bC0uMTYuMDQtMS4xMjUtLjA4LS4xODgtLjAyN3EtLjY3LTEuOTk3LTEuMzgtMi43NDctMS4xNzgtMS4yMi0yLjgxMi0xLjIyLTEuNTI3IDAtMi40MzguNzktLjg5Ny43NzgtLjg5NyAxLjk1NiAwIC45NzcuODg0IDEuODc0dDMuNzM3IDEuNzI4cS45MjUuMjY4IDIuMzE4Ljg4NC43NzcuMzc1IDEuMjcyLjY5Nkg2LjQ3em02Ljc5IDMuNDI4aDUuNTAzcS4wOTQuNTIzLjA5NCAxLjIzMyAwIDEuNDg3LS41NSAyLjg0LS4zMDcuNzM2LS45NSAxLjM5Mi0uNDk2LjQ3LTEuNDYgMS4wODUtMS4wNy42NDMtMi4wNS44ODQtMS4wNy4yOC0yLjcxOC4yOC0xLjUyOCAwLTIuNjEzLS4zMDdsLTEuODc1LS41MzZxLS43NjMtLjIxMy0uOTY0LS4zNzQtLjEwNy0uMTA3LS4xMDctLjI5NXYtLjE3M3EwLTEuNDQ2LS4wMjYtMi4wOS0uMDEzLS40IDAtLjkxbC4wMjctLjQ5NnYtLjU4OGwxLjM2Ny0uMDI3cS4yLjQ1NS40MDIuOTV0LjMuNzUuMTY3LjM2M3EuNDcuNzYzIDEuMDcgMS4yNi41NzcuNDggMS40MDcuNzYyLjc5LjI5NSAxLjc2OC4yOTUuODU3IDAgMS44NjItLjM2MiAxLjAzLS4zNDggMS42MzQtMS4xNTIuNjMtLjgxNi42My0xLjcyNyAwLTEuMTI1LTEuMDg2LTIuMTAzLS40NTUtLjM4OC0xLjgzNS0uOTV6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-code___3F1pe{background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE2IDExNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDE0Ij48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMi40NjQgMjguNDhjMCAyLjg5NS4zNDQgNS45MDUuODA2IDkuMDIuMzQyIDMuMDEuNjkgNi4wMi42OSA4LjkxNyAwIDMuNTYyLS45MTcgNy43OS04Ljk1NSA3LjkxMnY3LjIzNmM4LjAzNi4xMTUgOC45NTYgNC42NzIgOC45NTYgNy45MTIgMCAyLjg4Ni0uMzQ4IDUuNzgzLS42OSA4Ljc4Ny0uNDYyIDMuMDEzLS44MDYgNi4xMzQtLjgwNiA4LjkyIDAgMTEuMjM4IDcuMTA2IDE1LjI1MiAxNy4wODcgMTUuMjUyaDMuMzJ2LTcuOTEyaC0yLjA2MmMtNS43MjYgMC04LjAyNS0zLjIzMy04LjAyNS04Ljc5NiAwLTIuMjM2LjM0NC00LjU3LjgwNi03LjAyMy4yMjctMi40MzguNjg0LTUuMTIuNjg0LTguMTIuMTE1LTcuNzkyLTMuMzItMTEuMjUzLTkuMTc0LTEyLjU4NnYtLjIyNWM1Ljg1NC0xLjMzMiA5LjI5My00LjY3NiA5LjE3LTEyLjQ3IDAtMi44OTUtLjQ1Ny01LjU2NS0uNjg0LTguMDI0LS40NjItMi40NC0uODA3LTQuNzc3LS44MDctNy4wMTIgMC01LjQ1IDIuMDU4LTguNjg4IDguMDI0LTguNjg4aDIuMDY2di04LjAxNGgtMy4zMmMtMTAuMjA1LS4wMDMtMTcuMDg2IDQuNDQ0LTE3LjA4NiAxNC45MTV6TTkyLjA2IDQ2LjQxN2MwLTIuODkzLjQ1My01LjkwMy44MDMtOC45MTguMzQzLTMuMTE0Ljc5Ny02LjEyLjc5Ny05LjAyIDAtMTAuNDctNi44NzUtMTQuOTE3LTE3LjA4LTE0LjkxN2gtMy4zMjd2OC4wMTdoMi4wNmM1Ljg1Mi4xMTQgNy45MSAzLjIzMyA3LjkxIDguNjg4IDAgMi4yMy0uMzQyIDQuNTY1LS42ODUgNy4wMTItLjM1IDIuNDU1LS42OTIgNS4xMjYtLjY5MiA4LjAyNC0uMTA1IDcuNzk3IDMuMzI3IDExLjEzNiA5LjA1NiAxMi40N3YuMjIyYy01LjcyIDEuMzMzLTkuMTYgNC43OTYtOS4wNTYgMTIuNTg3IDAgMyAuMzQyIDUuNjg2LjY5MiA4LjEyLjM0MyAyLjQ1NS42ODYgNC43OS42ODYgNy4wMjUgMCA1LjU1NC0yLjE4IDguNjgtNy45MTIgOC43ODhoLTIuMDZ2Ny45MTJoMy4zMjVjOS45NzUgMCAxNy4wNzYtNC4wMSAxNy4wNzYtMTUuMjUgMC0yLjc4My0uNDU0LTUuOS0uNzk2LTguOTE0LS4zNDctMy4wMS0uODA1LTUuOS0uODA1LTguNzk1IDAtMy4yMzMgMS4wMzUtNy43OSA4Ljk0My03LjkxM1Y1NC4zMmMtNy45MDQtLjExMi04LjkzNS00LjM0LTguOTM1LTcuOTAzeiIvPjwvZz48L3N2Zz4=")}.IconButton__icon-link___2umEl{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNMTkuNSAxNi4yODZxMC0uNTM2LS4zNzUtLjkxbC0yLjc4Ni0yLjc4N3EtLjM3Ni0uMzc2LS45MTItLjM3Ni0uNTYzIDAtLjk2NC40M2wuMjU0LjI0N3EuMjE0LjIwOC4yODguMjl0LjIuMjUzLjE3NS4zNDIuMDQ4LjM2OHEwIC41MzYtLjM3NS45MXQtLjkxLjM3NnEtLjIwMiAwLS4zNy0uMDQ4dC0uMzQtLjE3NC0uMjU1LS4yLS4yODgtLjI5LS4yNDgtLjI1M3EtLjQ0Mi40MTUtLjQ0Mi45NzggMCAuNTM2LjM3NS45MWwyLjc2IDIuNzczcS4zNi4zNjIuOTEuMzYyLjUzNiAwIC45MS0uMzQ4bDEuOTctMS45NTVxLjM3NS0uMzc1LjM3NS0uODk3em0tOS40MTUtOS40NDJxMC0uNTM2LS4zNzUtLjkxTDYuOTUgMy4xNnEtLjM3NC0uMzc0LS45MS0uMzc0LS41MjIgMC0uOTEuMzYyTDMuMTYgNS4xMDNxLS4zNzUuMzc1LS4zNzUuODk3IDAgLjUzNi4zNzUuOTFsMi43ODYgMi43ODdxLjM2Mi4zNjIuOTEuMzYyLjU2NCAwIC45NjUtLjQxNmwtLjI1My0uMjQ4cS0uMjEzLS4yMDgtLjI4OC0uMjg4dC0uMjAyLS4yNTQtLjE3NC0uMzQyLS4wNDctLjM2OHEwLS41MzYuMzc1LS45MXQuOTEtLjM3NnEuMjAyIDAgLjM3LjA0N3QuMzQuMTc0LjI1NS4yLjI4OC4yODguMjQ4LjI1NHEuNDQyLS40MTUuNDQyLS45Nzh6bTExLjk4NiA5LjQ0MnEwIDEuNjA3LTEuMTM3IDIuNzJsLTEuOTcgMS45NTRxLTEuMTEgMS4xMTItMi43MTggMS4xMTItMS42MiAwLTIuNzMyLTEuMTM4bC0yLjc2LTIuNzcycS0xLjExLTEuMTEyLTEuMTEtMi43MiAwLTEuNjQ2IDEuMTc4LTIuNzk4bC0xLjE3OC0xLjE4cS0xLjE1MiAxLjE4LTIuNzg2IDEuMTgtMS42MDcgMC0yLjczMi0xLjEyNUwxLjMzOCA4LjczMlEuMjEzIDcuNjA4LjIxMyA2VDEuMzUgMy4yODNsMS45Ny0xLjk1NVE0LjQzMi4yMTUgNi4wNC4yMTVxMS42MiAwIDIuNzMgMS4xMzhsMi43NiAyLjc3MnExLjExMiAxLjExMiAxLjExMiAyLjcyIDAgMS42NDYtMS4xOCAyLjc5OGwxLjE4IDEuMThxMS4xNTItMS4xOCAyLjc4Ni0xLjE4IDEuNjA3IDAgMi43MzIgMS4xMjVsMi43ODYgMi43ODZxMS4xMjUgMS4xMjUgMS4xMjUgMi43MzJ6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-remove-link___j61pw{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNNS44OCAxNy4wMjJsLTMuNDMgMy40M3EtLjEzNC4xMi0uMzA4LjEyLS4xNiAwLS4zMDgtLjEyLS4xMi0uMTM1LS4xMi0uMzF0LjEyLS4zMDdsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMxLjEycS4xMi4xMzUuMTIuMzF0LS4xMi4zMDd6bTIuMjYzLjU1djQuMjg1cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTItLjMwNy0uMTItLjEyLS4zMDhWMTcuNTdxMC0uMTg3LjEyLS4zMDd0LjMwOC0uMTIuMzA4LjEyLjEyLjMwOHptLTMtM3EwIC4xODctLjEyLjMwN3QtLjMxLjEySC40M3EtLjE4OCAwLS4zMDgtLjEyVDAgMTQuNTd0LjEyLS4zMDcuMzA4LS4xMmg0LjI4NnEuMTg4IDAgLjMwOC4xMnQuMTIuMzA4em0xNi45MjggMS43MTRxMCAxLjYwNy0xLjEzNyAyLjcybC0xLjk3IDEuOTU0cS0xLjExIDEuMTEyLTIuNzE4IDEuMTEyLTEuNjIgMC0yLjczMi0xLjEzOEw5LjA0IDE2LjQ0N3EtLjI4LS4yOC0uNTYzLS43NWwzLjItLjI0IDMuNjU3IDMuNjdxLjM2Mi4zNi45MS4zNjd0LjkxMi0uMzU1bDEuOTctMS45NTZxLjM3NC0uMzc1LjM3NC0uODk3IDAtLjUzNi0uMzc1LS45MWwtMy42Ny0zLjY4NC4yNC0zLjJxLjQ3LjI4Ljc1LjU2Mmw0LjUgNC41cTEuMTI2IDEuMTUyIDEuMTI2IDIuNzMyek0xMy44MSA2LjU5bC0zLjIuMjRMNi45NSAzLjE2cS0uMzc0LS4zNzUtLjkxLS4zNzUtLjUyMiAwLS45MS4zNjJMMy4xNiA1LjEwMnEtLjM3NS4zNzUtLjM3NS44OTcgMCAuNTM1LjM3NS45MWwzLjY3IDMuNjctLjI0IDMuMjE0cS0uNDctLjI4LS43NS0uNTYzbC00LjUtNC41US4yMTMgNy41OC4yMTMgNnEwLTEuNjA4IDEuMTM4LTIuNzJsMS45Ny0xLjk1NVE0LjQzLjIxMyA2LjA0LjIxM3ExLjYyIDAgMi43MzIgMS4xMzhsNC40NzMgNC40ODhxLjI4LjI4LjU2My43NXptOC40NzggMS4xMjRxMCAuMTg4LS4xMi4zMDh0LS4zMS4xMmgtNC4yODVxLS4xODcgMC0uMzA3LS4xMnQtLjEyLS4zMDguMTItLjMwOC4zMDgtLjEyaDQuMjg3cS4xODggMCAuMzA4LjEydC4xMi4zMDh6TTE1IC40M3Y0LjI4NXEwIC4xODgtLjEyLjMwOHQtLjMxLjEyLS4zMDctLjEyLS4xMi0uMzA4Vi40M3EwLS4xOS4xMi0uMzFUMTQuNTcgMHQuMzEuMTIuMTIuMzF6bTUuNDUgMi4wMmwtMy40MjggMy40M3EtLjE0Ny4xMi0uMzA4LjEydC0uMzA4LS4xMnEtLjEyLS4xMzQtLjEyLS4zMDh0LjEyLS4zMDhsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMwOC4xMnEuMTIyLjEzNS4xMjIuMzF0LS4xMi4zMDd6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-image___1gW7U{background-image:url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTMzLjMzMyA1MzMuMzM0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MzMuMzMzIDUzMy4zMzQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDY2LjY2NywxMDBoLTQwMHYzMzMuMzMzaDQwMFYxMDB6IE01MzMuMzMzLDMzLjMzM0w1MzMuMzMzLDMzLjMzM1Y1MDBIMFYzMy4zMzNINTMzLjMzM3ogTTQzMy4zMzMsNDAwSDEwMHYtNjYuNjY3ICAgbDEwMC0xNjYuNjY3bDEzNi45NzksMTY2LjY2N2w5Ni4zNTQtNjYuNjY2VjMwMFY0MDB6IE0zMzMuMzMzLDE4My4zMzNjMCwyNy42MTQsMjIuMzg2LDUwLDUwLDUwczUwLTIyLjM4Niw1MC01MHMtMjIuMzg2LTUwLTUwLTUwICAgUzMzMy4zMzMsMTU1LjcxOSwzMzMuMzMzLDE4My4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");background-size:14px}.IconButton__icon-cancel___fx4TT{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNzggMTkuMjhMMTYuNSAxMmw3LjI4LTcuMjhhLjc0OC43NDggMCAwIDAgMC0xLjA2TDIwLjM0LjIxOGEuNzUuNzUgMCAwIDAtMS4wNi0uMDAyTDEyIDcuNDk4IDQuNzE3LjIyYS43NDguNzQ4IDAgMCAwLTEuMDYgMEwuMjE3IDMuNjZhLjc1Ljc1IDAgMCAwIDAgMS4wNkw3LjQ5NyAxMmwtNy4yOCA3LjI4YS43NDguNzQ4IDAgMCAwIDAgMS4wNmwzLjQ0IDMuNDRhLjc1Ljc1IDAgMCAwIDEuMDYuMDAybDcuMjgtNy4yOCA3LjI4MiA3LjI4Yy4wNzguMDc4LjE3LjEzNS4yNjguMTcuMjY3LjEuNTguMDQ0Ljc5My0uMTdsMy40NC0zLjQ0YS43NS43NSAwIDAgMCAwLTEuMDZ6Ii8+PC9zdmc+");background-size:13px}.IconButton__icon-accept___2D6M9{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjUgM0w5IDE0LjI1IDMuNzUgOSAwIDEyLjc1bDkgOSAxNS0xNXoiLz48L3N2Zz4=");background-size:13px}',""]),e.locals={root:"IconButton__root___3tqZW",icon:"IconButton__icon___3YgOS",isActive:"IconButton__isActive___2Ey8p","icon-undo":"IconButton__icon-undo___EQSRP IconButton__icon___3YgOS","icon-redo":"IconButton__icon-redo___30MVz IconButton__icon___3YgOS","icon-unordered-list-item":"IconButton__icon-unordered-list-item___Pvkrr IconButton__icon___3YgOS","icon-ordered-list-item":"IconButton__icon-ordered-list-item___2rzD0 IconButton__icon___3YgOS","icon-blockquote":"IconButton__icon-blockquote___17VSX IconButton__icon___3YgOS","icon-bold":"IconButton__icon-bold___2zl9t IconButton__icon___3YgOS","icon-italic":"IconButton__icon-italic___2hHzc IconButton__icon___3YgOS","icon-underline":"IconButton__icon-underline___2EmZJ IconButton__icon___3YgOS","icon-strikethrough":"IconButton__icon-strikethrough___QtE2X IconButton__icon___3YgOS","icon-code":"IconButton__icon-code___3F1pe IconButton__icon___3YgOS","icon-link":"IconButton__icon-link___2umEl IconButton__icon___3YgOS","icon-remove-link":"IconButton__icon-remove-link___j61pw IconButton__icon___3YgOS","icon-image":"IconButton__icon-image___1gW7U IconButton__icon___3YgOS","icon-cancel":"IconButton__icon-cancel___fx4TT IconButton__icon___3YgOS","icon-accept":"IconButton__icon-accept___2D6M9 IconButton__icon___3YgOS"}},function(t,e,n){var r=n(300);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".ButtonGroup__root___3lEAn{display:inline-block;vertical-align:top;margin:0 5px 5px 0;white-space:nowrap}.ButtonGroup__root___3lEAn:last-child{margin-right:0}.ButtonGroup__root___3lEAn>div>button{margin-right:0;border-radius:0}.ButtonGroup__root___3lEAn>div>button:focus{position:relative;z-index:1}.ButtonGroup__root___3lEAn>div:first-child>button{border-top-left-radius:2px;border-bottom-left-radius:2px}.ButtonGroup__root___3lEAn>div+div>button{border-left-width:0}.ButtonGroup__root___3lEAn>div:last-child>button{border-top-right-radius:2px;border-bottom-right-radius:2px}",""]),e.locals={root:"ButtonGroup__root___3lEAn"}},function(t,e,n){var r=n(302);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,'.InputPopover__root___3Hpj9{position:absolute;top:calc(100% + 5px);left:0;width:260px;background:none #fdfdfd;background:linear-gradient(180deg,#fdfdfd 0,#f6f7f8);border:1px solid #999;border-radius:2px;box-sizing:border-box;padding:4px}.InputPopover__root___3Hpj9:before{top:-10px;border:5px solid transparent;border-bottom-color:#999}.InputPopover__root___3Hpj9:after,.InputPopover__root___3Hpj9:before{content:"";display:block;position:absolute;width:0;height:0;left:10px}.InputPopover__root___3Hpj9:after{top:-9px;border:5px solid transparent;border-bottom-color:#fdfdfd}.InputPopover__inner___32V5P{display:flex}.InputPopover__input___264Za{display:block;flex:1 0 auto;height:30px;background:none #fff;border:1px solid #999;border-radius:2px;box-sizing:border-box;padding:2px 6px;font-family:inherit;font-size:inherit;line-height:24px}.InputPopover__inner___32V5P .InputPopover__buttonGroup___2c3Sl{flex:0 1 auto;margin-left:4px;margin-bottom:0}',""]),e.locals={root:"InputPopover__root___3Hpj9",inner:"InputPopover__inner___32V5P",input:"InputPopover__input___264Za",buttonGroup:"InputPopover__buttonGroup___2c3Sl"}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(304),o=r(i),u=n(307),a=r(u);e.default=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,s=(0,a.default)(t);!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,o.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(305),__esModule:!0}},function(t,e,n){n(59),n(47),t.exports=n(306)},function(t,e,n){var r=n(96),i=n(6)("iterator"),o=n(42);t.exports=n(4).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},function(t,e,n){t.exports={default:n(308),__esModule:!0}},function(t,e,n){n(59),n(47),t.exports=n(309)},function(t,e,n){var r=n(30),i=n(95);t.exports=n(4).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(311);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,'.Dropdown__root___3ALmx{display:inline-block;position:relative;line-height:22px;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.Dropdown__root___3ALmx select{position:relative;z-index:2;display:inline-block;box-sizing:border-box;height:30px;line-height:inherit;font-family:inherit;font-size:inherit;color:inherit;margin:0;padding:0;border:4px solid transparent;border-right-width:10px;border-left-width:5px;background:none transparent;opacity:0;cursor:pointer}.Dropdown__root___3ALmx .Dropdown__value___34Py9{display:block;position:absolute;z-index:1;left:0;top:0;right:0;bottom:0;line-height:23px;border:1px solid #999;border-radius:2px;padding:3px;padding-right:33px;padding-left:12px;white-space:nowrap;text-overflow:ellipsis}.Dropdown__root___3ALmx .Dropdown__value___34Py9:after,.Dropdown__root___3ALmx .Dropdown__value___34Py9:before{display:block;content:"";position:absolute;top:50%;right:10px;width:0;height:0;border:4px solid transparent}.Dropdown__root___3ALmx .Dropdown__value___34Py9:before{margin-top:-10px;border-bottom-color:#555}.Dropdown__root___3ALmx .Dropdown__value___34Py9:after{margin-top:1px;border-top-color:#555}.Dropdown__root___3ALmx select:focus+.Dropdown__value___34Py9{border-color:#66afe9}@media screen and (-webkit-min-device-pixel-ratio:0){.Dropdown__root___3ALmx select{opacity:1;color:inherit;-webkit-appearance:none;border-left-width:12px;border-right-width:35px}.Dropdown__root___3ALmx select+.Dropdown__value___34Py9{color:transparent}.Dropdown__root___3ALmx select:focus+.Dropdown__value___34Py9{border-color:#999}}',""]),e.locals={root:"Dropdown__root___3ALmx",value:"Dropdown__value___34Py9"}},function(t,e,n){var r=n(313);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".EditorToolbar__root___3_Aqz{font-family:Helvetica,sans-serif;font-size:14px;margin:0 10px;padding:10px 0 5px;border-bottom:1px solid #ddd;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),e.locals={root:"EditorToolbar__root___3_Aqz"}},function(t,e,n){t.exports={default:n(315),__esModule:!0}},function(t,e,n){var r=n(4),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(317);Object.defineProperty(e,"stateToHTML",{enumerable:!0,get:function(){return r(i).default}})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){switch(t){case x.BLOCK_TYPE.HEADER_ONE:return["h1"];case x.BLOCK_TYPE.HEADER_TWO:return["h2"];case x.BLOCK_TYPE.HEADER_THREE:return["h3"];case x.BLOCK_TYPE.HEADER_FOUR:return["h4"];case x.BLOCK_TYPE.HEADER_FIVE:return["h5"];case x.BLOCK_TYPE.HEADER_SIX:return["h6"];case x.BLOCK_TYPE.UNORDERED_LIST_ITEM:case x.BLOCK_TYPE.ORDERED_LIST_ITEM:return["li"];case x.BLOCK_TYPE.BLOCKQUOTE:return["blockquote"];case x.BLOCK_TYPE.CODE:return["pre","code"];case x.BLOCK_TYPE.ATOMIC:return["figure"];default:return[e||"p"]}}function a(t){switch(t){case x.BLOCK_TYPE.UNORDERED_LIST_ITEM:return"ul";case x.BLOCK_TYPE.ORDERED_LIST_ITEM:return"ol";default:return null}}function s(t){if(null==t)return"";var e=[],n=!0,r=!1,i=void 0;try{for(var o,u=Object.keys(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var a=o.value,s=t[a];null!=s&&e.push(" "+a+'="'+f(s+"")+'"')}}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}return e.join("")}function c(t){switch(t){case x.BLOCK_TYPE.UNORDERED_LIST_ITEM:case x.BLOCK_TYPE.ORDERED_LIST_ITEM:return!0;default:return!1}}function l(t){return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;").split("\n").join(C+"\n")}function f(t){return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function p(t,e){return new R(t,e).generate()}Object.defineProperty(e,"__esModule",{value:!0});var h,d,y,g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=p;var m=n(318),S=r(m),b=n(319),w=r(b),M=n(320),E=r(M),x=n(32),k=x.INLINE_STYLE.BOLD,I=x.INLINE_STYLE.CODE,L=x.INLINE_STYLE.ITALIC,T=x.INLINE_STYLE.STRIKETHROUGH,D=x.INLINE_STYLE.UNDERLINE,O="  ",C="<br>",N=/^data-([a-z0-9-]+)$/,j=(h={},o(h,k,{element:"strong"}),o(h,I,{element:"code"}),o(h,L,{element:"em"}),o(h,T,{element:"del"}),o(h,D,{element:"u"}),h),A=[k,L,D,T,I],z=(d={},o(d,x.ENTITY_TYPE.LINK,{url:"href",href:"href",rel:"rel",target:"target",title:"title",className:"class"}),o(d,x.ENTITY_TYPE.IMAGE,{src:"src",height:"height",width:"width",alt:"alt",className:"class"}),d),B=(y={},o(y,x.ENTITY_TYPE.LINK,function(t,e){var n=z.hasOwnProperty(t)?z[t]:{},r=e.getData(),i={},o=!0,u=!1,a=void 0;try{for(var s,c=Object.keys(r)[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var l=s.value,f=r[l];n.hasOwnProperty(l)?i[n[l]]=f:N.test(l)&&(i[l]=f)}}catch(t){u=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(u)throw a}}return i}),o(y,x.ENTITY_TYPE.IMAGE,function(t,e){var n=z.hasOwnProperty(t)?z[t]:{},r=e.getData(),i={},o=!0,u=!1,a=void 0;try{for(var s,c=Object.keys(r)[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var l=s.value,f=r[l];n.hasOwnProperty(l)?i[n[l]]=f:N.test(l)&&(i[l]=f)}}catch(t){u=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(u)throw a}}return i}),y),R=function(){function t(e,n){i(this,t),null==n&&(n={}),this.contentState=e,this.options=n;var r=(0,S.default)(n.inlineStyles,[j,A]),o=v(r,2),u=o[0],a=o[1];this.inlineStyles=u,this.styleOrder=a}return _(t,[{key:"generate",value:function(){for(this.output=[],this.blocks=this.contentState.getBlocksAsArray(),this.totalBlocks=this.blocks.length,this.currentBlock=0,this.indentLevel=0,this.wrapperTag=null;this.currentBlock<this.totalBlocks;)this.processBlock();return this.closeWrapperTag(),this.output.join("").trim()}},{key:"processBlock",value:function(){var t=this.options,e=t.blockRenderers,n=t.defaultBlockTag,r=this.blocks[this.currentBlock],i=r.getType(),o=a(i);this.wrapperTag!==o&&(this.wrapperTag&&this.closeWrapperTag(),o&&this.openWrapperTag(o)),this.indent();var u=null!=e&&e.hasOwnProperty(i)?e[i]:null,s=u?u(r):null;if(null!=s)return this.output.push(s),this.output.push("\n"),void(this.currentBlock+=1);this.writeStartTag(r,n),this.output.push(this.renderBlockContent(r));var l=this.getNextBlock();if(c(i)&&l&&l.getDepth()===r.getDepth()+1){this.output.push("\n");var f=this.wrapperTag;this.wrapperTag=null,this.indentLevel+=1,this.currentBlock+=1,this.processBlocksAtDepth(l.getDepth()),this.wrapperTag=f,this.indentLevel-=1,this.indent()}else this.currentBlock+=1;this.writeEndTag(r,n)}},{key:"processBlocksAtDepth",value:function(t){for(var e=this.blocks[this.currentBlock];e&&e.getDepth()===t;)this.processBlock(),e=this.blocks[this.currentBlock];this.closeWrapperTag()}},{key:"getNextBlock",value:function(){return this.blocks[this.currentBlock+1]}},{key:"writeStartTag",value:function(t,e){var n=u(t.getType(),e),r=void 0;if(this.options.blockStyleFn){var i=this.options.blockStyleFn(t)||{},o=i.attributes,a=i.style;if(o=(0,w.default)(o),null!=a){var c=(0,E.default)(a);o=null==o?{style:c}:g({},o,{style:c})}r=s(o)}else r="";var l=!0,f=!1,p=void 0;try{for(var h,d=n[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var y=h.value;this.output.push("<"+y+r+">")}}catch(t){f=!0,p=t}finally{try{!l&&d.return&&d.return()}finally{if(f)throw p}}}},{key:"writeEndTag",value:function(t,e){var n=u(t.getType(),e);if(1===n.length)this.output.push("</"+n[0]+">\n");else{var r=[],i=!0,o=!1,a=void 0;try{for(var s,c=n[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;r.unshift("</"+l+">")}}catch(t){o=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw a}}this.output.push(r.join("")+"\n")}}},{key:"openWrapperTag",value:function(t){this.wrapperTag=t,this.indent(),this.output.push("<"+t+">\n"),this.indentLevel+=1}},{key:"closeWrapperTag",value:function(){var t=this.wrapperTag;t&&(this.indentLevel-=1,this.indent(),this.output.push("</"+t+">\n"),this.wrapperTag=null)}},{key:"indent",value:function(){this.output.push(O.repeat(this.indentLevel))}},{key:"renderBlockContent",value:function(t){var e=this,n=t.getType(),r=t.getText();if(""===r)return C;r=this.preserveWhitespace(r);var i=t.getCharacterList();return(0,x.getEntityRanges)(r,i).map(function(t){var r=v(t,2),i=r[0],o=r[1],u=o.map(function(t){var r=v(t,2),i=r[0],o=r[1],u=l(i),a=!0,c=!1,f=void 0;try{for(var p,h=e.styleOrder[Symbol.iterator]();!(a=(p=h.next()).done);a=!0){var d=p.value;if((d!==I||n!==x.BLOCK_TYPE.CODE)&&o.has(d)){var y=e.inlineStyles[d],_=y.element,m=y.attributes,S=y.style;if(null==_&&(_="span"),m=(0,w.default)(m),null!=S){var b=(0,E.default)(S);m=null==m?{style:b}:g({},m,{style:b})}u="<"+_+s(m)+">"+u+"</"+_+">"}}}catch(t){c=!0,f=t}finally{try{!a&&h.return&&h.return()}finally{if(c)throw f}}return u}).join(""),a=i?e.contentState.getEntity(i):null,c=null==a?null:a.getType().toUpperCase(),f=void 0;if(null!=a&&e.options.entityStyleFn&&(f=e.options.entityStyleFn(a))){var p=f,h=p.element,d=p.attributes,y=p.style;if(null==h&&(h="span"),d=(0,w.default)(d),null!=y){var _=(0,E.default)(y);d=null==d?{style:_}:g({},d,{style:_})}return"<"+h+s(d)+">"+u+"</"+h+">"}return null!=c&&c===x.ENTITY_TYPE.LINK?"<a"+s(B.hasOwnProperty(c)?B[c](c,a):null)+">"+u+"</a>":null!=c&&c===x.ENTITY_TYPE.IMAGE?"<img"+s(B.hasOwnProperty(c)?B[c](c,a):null)+"/>":u}).join("")}},{key:"preserveWhitespace",value:function(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)" "!==t[r]||0!==r&&r!==e-1&&" "!==t[r-1]?n[r]=t[r]:n[r]=" ";return n.join("")}}]),t}()},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(null==t)return e;var n=u(e,2),i=n[0],a=n[1],s=o({},i),c=[].concat(r(a)),l=!0,f=!1,p=void 0;try{for(var h,d=Object.keys(t)[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var y=h.value;if(i.hasOwnProperty(y)){var g=i[y];s[y]=o({},g,t[y])}else s[y]=t[y],c.push(y)}}catch(t){f=!0,p=t}finally{try{!l&&d.return&&d.return()}finally{if(f)throw p}}return[s,c]}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=i},function(t,e,n){"use strict";function r(t){if(null==t)return t;var e={},n=!1,r=!0,o=!1,u=void 0;try{for(var a,s=Object.keys(t)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value,l=c;i.hasOwnProperty(c)&&(l=i[c],n=!0),e[l]=t[c]}}catch(t){o=!0,u=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw u}}return n?e:t}Object.defineProperty(e,"__esModule",{value:!0});var i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};e.default=r},function(t,e,n){"use strict";function r(t){return t.replace(s,"-$1").toLowerCase().replace(u,"-$1-")}function i(t,e){var n=void 0;return"string"==typeof e?n=a.test(e):(n=!0,e=String(e)),n&&"0"!==e&&!0!==c[t]?e+"px":e}function o(t){return Object.keys(t).map(function(e){var n=i(e,t[e]);return r(e)+": "+n}).join("; ")}Object.defineProperty(e,"__esModule",{value:!0});var u=/^(moz|ms|o|webkit)-/,a=/^\d+$/,s=/([A-Z])/g,c={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(322);Object.defineProperty(e,"stateFromHTML",{enumerable:!0,get:function(){return r(i).default}})},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){var n=e||{},i=n.parser,u=r(n,["parser"]);null==i&&(i=a.default);var s=i(t);return(0,o.stateFromElement)(s,u)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(141),u=n(327),a=function(t){return t&&t.__esModule?t:{default:t}}(u)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return"\n"===t.charAt(0)&&(t=t.slice(1),e=e.slice(1)),{text:t,characterMeta:e}}function o(t,e){for(;" "===t.charAt(0);)t=t.slice(1),e=e.slice(1);return{text:t,characterMeta:e}}function u(t,e){for(;" "===t.slice(-1);)t=t.slice(0,-1),e=e.slice(0,-1);return{text:t,characterMeta:e}}function a(t,e){t=t.replace(/[ \t\n]/g," ");var n=o(t,e);t=n.text,e=n.characterMeta;var r=u(t,e);t=r.text,e=r.characterMeta;for(var i=t.length;i--;)" "===t.charAt(i)&&" "===t.charAt(i-1)&&(t=t.slice(0,i)+t.slice(i+1),e=e.slice(0,i).concat(e.slice(i+1)));var a=(0,y.default)({text:t,characterMeta:e},E+" ",E);t=a.text,e=a.characterMeta;var s=(0,y.default)({text:t,characterMeta:e}," "+E,E);return t=s.text,e=s.characterMeta,{text:t,characterMeta:e}}function s(t){switch(t){case _.BLOCK_TYPE.UNORDERED_LIST_ITEM:case _.BLOCK_TYPE.ORDERED_LIST_ITEM:return!0;default:return!1}}function c(t){var e="",n=(0,v.Seq)();return t.forEach(function(t){e+=t.text,n=n.concat(t.characterMeta)}),{text:e,characterMeta:n}}function l(t,e,n){switch(e){case"b":case"strong":return t.add(_.INLINE_STYLE.BOLD);case"i":case"em":return t.add(_.INLINE_STYLE.ITALIC);case"u":case"ins":return t.add(_.INLINE_STYLE.UNDERLINE);case"code":return t.add(_.INLINE_STYLE.CODE);case"s":case"del":return t.add(_.INLINE_STYLE.STRIKETHROUGH);default:return n&&n[e]?t.add(n[e]):t}}function f(t){return t!==_.BLOCK_TYPE.UNSTYLED}function p(t,e){return new T(e).process(t)}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.stateFromElement=p;var d=n(324),y=function(t){return t&&t.__esModule?t:{default:t}}(d),g=n(12),v=n(93),_=n(32),m=n(142),S=n(326),b=(0,v.OrderedSet)(),w=new g.ContentBlock({key:(0,g.genKey)(),text:"",type:_.BLOCK_TYPE.UNSTYLED,characterList:(0,v.List)(),depth:0}),M=/(\r\n|\r|\n)/g,E="\r",x=/^data-([a-z0-9-]+)$/,k={a:{href:"url",rel:"rel",target:"target",title:"title"},img:{src:"src",alt:"alt"}},I=function(t,e){var n={};if(k.hasOwnProperty(t))for(var r=k[t],i=0;i<e.attributes.length;i++){var o=e.attributes[i],u=o.name,a=o.value;if(null!=a)if(r.hasOwnProperty(u)){var s=r[u];n[s]=a}else x.test(u)&&(n[u]=a)}return n},L={a:function(t,e,n){var r=I(e,n);if(null!=r.url)return t.createEntity(_.ENTITY_TYPE.LINK,r)},img:function(t,e,n){var r=I(e,n);if(null!=r.src)return t.createEntity(_.ENTITY_TYPE.IMAGE,r)}},T=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.inlineCreators={Style:function(t){return{type:"STYLE",style:t}},Entity:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MUTABLE";return{type:"ENTITY",entityKey:e.createEntity(t,n,r)}}},this.options=n,this.contentStateForEntities=g.ContentState.createFromBlockArray([]),this.blockStack=[],this.blockList=[],this.depth=0}return h(t,[{key:"process",value:function(t){this.processBlockElement(t);var e=[];return this.blockList.forEach(function(t){var n=c(t.textFragments),r=n.text,o=n.characterMeta,u=!1;if(r===E&&(u=!0,r=""),"pre"===t.tagName){var s=i(r,o);r=s.text,o=s.characterMeta}else{var l=a(r,o);r=l.text,o=l.characterMeta}r=r.split(E).join("\n"),(r.length||u)&&e.push(new g.ContentBlock({key:(0,g.genKey)(),text:r,type:t.type,characterList:o.toList(),depth:t.depth,data:t.data?(0,v.Map)(t.data):(0,v.Map)()}))}),e.length||(e=[w]),g.ContentState.createFromBlockArray(e,this.contentStateForEntities.getEntityMap())}},{key:"getBlockTypeFromTagName",value:function(t){var e=this.options.blockTypes;if(e&&e[t])return e[t];switch(t){case"li":return"ol"===this.blockStack.slice(-1)[0].tagName?_.BLOCK_TYPE.ORDERED_LIST_ITEM:_.BLOCK_TYPE.UNORDERED_LIST_ITEM;case"blockquote":return _.BLOCK_TYPE.BLOCKQUOTE;case"h1":return _.BLOCK_TYPE.HEADER_ONE;case"h2":return _.BLOCK_TYPE.HEADER_TWO;case"h3":return _.BLOCK_TYPE.HEADER_THREE;case"h4":return _.BLOCK_TYPE.HEADER_FOUR;case"h5":return _.BLOCK_TYPE.HEADER_FIVE;case"h6":return _.BLOCK_TYPE.HEADER_SIX;case"pre":return _.BLOCK_TYPE.CODE;case"figure":return _.BLOCK_TYPE.ATOMIC;default:return _.BLOCK_TYPE.UNSTYLED}}},{key:"processBlockElement",value:function(t){if(t){var e=this.options.customBlockFn,n=t.nodeName.toLowerCase(),r=void 0,i=void 0;if(e){var o=e(t);null!=o&&(r=o.type,i=o.data)}var u=!0;null==r&&(u=!1,r=this.getBlockTypeFromTagName(n));var a=s(r),c=!S.SPECIAL_ELEMENTS.hasOwnProperty(n);if(!u&&!f(r)){var l=this.blockStack.slice(-1)[0];l&&(r=l.type)}var p={tagName:n,textFragments:[],type:r,styleStack:[b],entityStack:[null],depth:a?this.depth:0,data:i};c&&(this.blockList.push(p),a&&(this.depth+=1)),this.blockStack.push(p),null!=t.childNodes&&Array.from(t.childNodes).forEach(this.processNode,this),this.blockStack.pop(),c&&a&&(this.depth-=1)}}},{key:"processInlineElement",value:function(t){var e=t.nodeName.toLowerCase();if("br"===e)return void this.processText(E);var n=this.blockStack.slice(-1)[0],r=n.styleStack.slice(-1)[0],i=n.entityStack.slice(-1)[0],o=this.options.customInlineFn,u=o?o(t,this.inlineCreators):null;if(null!=u)switch(u.type){case"STYLE":r=r.add(u.style);break;case"ENTITY":i=u.entityKey}else r=l(r,e,this.options.elementStyles),L.hasOwnProperty(e)&&(i=L[e](this,e,t)||i);n.styleStack.push(r),n.entityStack.push(i),null!=t.childNodes&&Array.from(t.childNodes).forEach(this.processNode,this),S.SELF_CLOSING_ELEMENTS.hasOwnProperty(e)&&this.processText(" "),n.entityStack.pop(),n.styleStack.pop()}},{key:"processTextNode",value:function(t){var e=t.nodeValue;e=e.replace(M,"\n"),e=e.split("​").join(E),this.processText(e)}},{key:"processText",value:function(t){var e=this.blockStack.slice(-1)[0],n=e.styleStack.slice(-1)[0],r=e.entityStack.slice(-1)[0],i=g.CharacterMetadata.create({style:n,entity:r}),o=(0,v.Repeat)(i,t.length);e.textFragments.push({text:t,characterMeta:o})}},{key:"processNode",value:function(t){if(t.nodeType===m.NODE_TYPE_ELEMENT){var e=t,n=e.nodeName.toLowerCase();S.INLINE_ELEMENTS.hasOwnProperty(n)?this.processInlineElement(e):this.processBlockElement(e)}else t.nodeType===m.NODE_TYPE_TEXT&&this.processTextNode(t)}},{key:"createEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MUTABLE";return this.contentStateForEntities=this.contentStateForEntities.createEntity(t,n,e),this.contentStateForEntities.getLastCreatedEntityKey()}}]),t}();e.default=p},function(t,e,n){"use strict";function r(t,e,n){for(var r=t.text,o=t.characterMeta,u=e.length,a=n.length,s=[],c=o.slice(0,0),l=0,f=r.indexOf(e);-1!==f;)s.push(r.slice(l,f)+n),c=c.concat(o.slice(l,f),i(o.slice(f,f+1),a)),l=f+u,f=r.indexOf(e,l);return s.push(r.slice(l)),c=c.concat(o.slice(l)),{text:s.join(""),characterMeta:c}}function i(t,e){for(var n=t.slice(0,0);e-- >0;)n=n.concat(t);return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=[],f=e.NODE_TYPE_ELEMENT=1,p=e.NODE_TYPE_TEXT=3,h=e.NODE_TYPE_FRAGMENT=11,d=e.SELF_CLOSING={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},y=e.Node=function t(){u(this,t)};e.TextNode=function(t){function e(t){u(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.nodeType=p,n.nodeName="#text",n.nodeValue=t,n}return o(e,t),c(e,[{key:"toString",value:function(){return a(this.nodeValue)}}]),e}(y),e.ElementNode=function(t){function e(t,n,r){u(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));null==n&&(n=l);var a=!0===d[t];return o.nodeType=f,o._name=t.toLowerCase(),o.attributes=n,o._attrMap=new Map(n.map(function(t){return[t.name,t]})),o.nodeName=t.toUpperCase(),o.childNodes=[],o._isSelfClosing=a,!a&&r&&r.forEach(o.appendChild,o),o}return o(e,t),c(e,[{key:"appendChild",value:function(t){if(t.nodeType===h){if(null!=t.childNodes){var e,n=t.childNodes;(e=this.childNodes).push.apply(e,r(n))}}else this.childNodes.push(t)}},{key:"getAttribute",value:function(t){var e=this._attrMap.get(t);if(e)return e.value}},{key:"toString",value:function(t){var e=[],n=!0,r=!1,i=void 0;try{for(var o,u=this.attributes[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var a=o.value,c=a.name,l=a.value;e.push(c+(l?'="'+s(l)+'"':""))}}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}var f=e.length?" "+e.join(" "):"";if(this._isSelfClosing)return"<"+this._name+f+(t?"/>":">");var p=this.childNodes.map(function(e){return e.toString(t)}).join("");return"<"+this._name+f+">"+p+"</"+this._name+">"}},{key:"tagName",get:function(){return this.nodeName}},{key:"className",get:function(){return this.getAttribute("class")||""}}]),e}(y),e.FragmentNode=function(t){function e(t){u(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.nodeType=h,n.childNodes=[],t&&t.forEach(n.appendChild,n),n}return o(e,t),c(e,[{key:"appendChild",value:function(t){if(t.nodeType===h){if(null!=t.childNodes){var e,n=t.childNodes;(e=this.childNodes).push.apply(e,r(n))}}else this.childNodes.push(t)}},{key:"toString",value:function(t){return this.childNodes.map(function(e){return e.toString(t)}).join("")}}]),e}(y)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INLINE_ELEMENTS={a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,var:1,video:1,wbr:1,acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1},e.SPECIAL_ELEMENTS={area:1,base:1,br:1,col:1,colgroup:1,command:1,dl:1,embed:1,head:1,hgroup:1,hr:1,iframe:1,img:1,input:1,keygen:1,link:1,meta:1,ol:1,optgroup:1,option:1,param:1,script:1,select:1,source:1,style:1,table:1,tbody:1,textarea:1,tfoot:1,thead:1,title:1,tr:1,track:1,ul:1,wbr:1,basefont:1,dialog:1,dir:1,isindex:1},e.SELF_CLOSING_ELEMENTS={img:1}},function(t,e,n){"use strict";function r(t){var e=void 0;return"undefined"!=typeof DOMParser?e=(new DOMParser).parseFromString(t,"text/html"):(e=document.implementation.createHTMLDocument(""),e.documentElement&&(e.documentElement.innerHTML=t)),e.body||e.createElement("body")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(329);Object.defineProperty(e,"stateToMarkdown",{enumerable:!0,get:function(){return r(i).default}})},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){switch(t){case f.BLOCK_TYPE.UNORDERED_LIST_ITEM:case f.BLOCK_TYPE.ORDERED_LIST_ITEM:return!0;default:return!1}}function o(t){return t.replace(/[*_`]/g,"\\$&")}function u(t){return t.replace(/\)/g,"%29")}function a(t){return t.replace(/"/g,'\\"')}function s(t){return new v(t).generate()}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=s;var f=n(32),p=f.INLINE_STYLE.BOLD,h=f.INLINE_STYLE.CODE,d=f.INLINE_STYLE.ITALIC,y=f.INLINE_STYLE.STRIKETHROUGH,g=f.INLINE_STYLE.UNDERLINE,v=function(){function t(e){r(this,t),this.contentState=e}return l(t,[{key:"generate",value:function(){for(this.output=[],this.blocks=this.contentState.getBlockMap().toArray(),this.totalBlocks=this.blocks.length,this.currentBlock=0,this.listItemCounts={};this.currentBlock<this.totalBlocks;)this.processBlock();return this.output.join("")}},{key:"processBlock",value:function(){var t=this.blocks[this.currentBlock],e=t.getType();switch(e){case f.BLOCK_TYPE.HEADER_ONE:this.insertLineBreaks(1),this.output.push("# "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.HEADER_TWO:this.insertLineBreaks(1),this.output.push("## "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.HEADER_THREE:this.insertLineBreaks(1),this.output.push("### "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.HEADER_FOUR:this.insertLineBreaks(1),this.output.push("#### "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.HEADER_FIVE:this.insertLineBreaks(1),this.output.push("##### "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.HEADER_SIX:this.insertLineBreaks(1),this.output.push("###### "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.UNORDERED_LIST_ITEM:var n=t.getDepth(),r=this.getLastBlock(),o=r?r.getType():null,u=r&&i(o)?r.getDepth():null;o!==e&&u!==n-1&&(this.insertLineBreaks(1),o===f.BLOCK_TYPE.ORDERED_LIST_ITEM&&this.insertLineBreaks(1));var a=" ".repeat(4*t.depth);this.output.push(a+"- "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.ORDERED_LIST_ITEM:var s=t.getDepth(),c=this.getLastBlock(),l=c?c.getType():null,p=c&&i(l)?c.getDepth():null;l!==e&&p!==s-1&&(this.insertLineBreaks(1),l===f.BLOCK_TYPE.UNORDERED_LIST_ITEM&&this.insertLineBreaks(1));var h=" ".repeat(4*s),d=this.getListItemCount(t)%10;this.output.push(h+(d+". ")+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.BLOCKQUOTE:this.insertLineBreaks(1),this.output.push(" > "+this.renderBlockContent(t)+"\n");break;case f.BLOCK_TYPE.CODE:this.insertLineBreaks(1),this.output.push("    "+this.renderBlockContent(t)+"\n");break;default:this.insertLineBreaks(1),this.output.push(this.renderBlockContent(t)+"\n")}this.currentBlock+=1}},{key:"getLastBlock",value:function(){return this.blocks[this.currentBlock-1]}},{key:"getNextBlock",value:function(){return this.blocks[this.currentBlock+1]}},{key:"getListItemCount",value:function(t){for(var e=t.getType(),n=t.getDepth(),r=this.currentBlock-1,o=this.blocks[r];o&&i(o.getType())&&o.getDepth()>n;)r-=1,o=this.blocks[r];return o&&o.getType()===e&&o.getDepth()===n||(this.listItemCounts[n]=0),this.listItemCounts[n]=this.listItemCounts[n]+1}},{key:"insertLineBreaks",value:function(){this.currentBlock>0&&this.output.push("\n")}},{key:"renderBlockContent",value:function(t){var e=this.contentState,n=t.getType(),r=t.getText();if(""===r)return"​";var i=t.getCharacterList();return(0,f.getEntityRanges)(r,i).map(function(t){var r=c(t,2),i=r[0],s=r[1],l=s.map(function(t){var e=c(t,2),r=e[0],i=e[1];if(!r)return"";var u=o(r);return i.has(p)&&(u="**"+u+"**"),i.has(g)&&(u="++"+u+"++"),i.has(d)&&(u="_"+u+"_"),i.has(y)&&(u="~~"+u+"~~"),i.has(h)&&(u=n===f.BLOCK_TYPE.CODE?u:"`"+u+"`"),u}).join(""),v=i?e.getEntity(i):null;if(null!=v&&v.getType()===f.ENTITY_TYPE.LINK){var _=v.getData(),m=_.url||"",S=_.title?' "'+a(_.title)+'"':"";return"["+l+"]("+u(m)+S+")"}if(null!=v&&v.getType()===f.ENTITY_TYPE.IMAGE){var b=v.getData(),w=b.src||"";return"!["+(b.alt?' "'+a(b.alt)+'"':"")+"]("+u(w)+")"}return l}).join("")}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(331);Object.defineProperty(e,"stateFromMarkdown",{enumerable:!0,get:function(){return r(i).default}});var o=n(143);Object.defineProperty(e,"MarkdownParser",{enumerable:!0,get:function(){return r(o).default}})},function(t,e,n){"use strict";function r(t,e){var n=o.default.parse(t,{getAST:!0});return(0,u.stateFromElement)(n,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(143),o=function(t){return t&&t.__esModule?t:{default:t}}(i),u=n(141)},function(t,e,n){var r=n(333);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".ImageSpan__root___RoAqL{background-repeat:no-repeat;display:inline-block;overflow:hidden;cursor:pointer}.ImageSpan__resize___1Hx5M{border:1px dashed #78a300;position:relative;max-width:100%;display:inline-block;line-height:0;top:-1px;left:-1px}.ImageSpan__resizeHandle___18rou{cursor:nwse-resize;position:absolute;z-index:2;line-height:1;bottom:-4px;right:-5px;border:1px solid #fff;background-color:#78a300;width:8px;height:8px}",""]),e.locals={root:"ImageSpan__root___RoAqL",resize:"ImageSpan__resize___1Hx5M",resizeHandle:"ImageSpan__resizeHandle___18rou"}},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function u(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,i,a,s,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var l=new Error('Uncaught, unspecified "error" event. ('+e+")");throw l.context=e,l}if(n=this._events[t],u(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),c=n.slice(),i=c.length,s=0;s<i;s++)c[s].apply(this,a);return!0},n.prototype.addListener=function(t,e){var i;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(i=u(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,i,u,a;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],u=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(a=u;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){var r=n(336);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e){t.exports='/**\n * We inherit the height of the container by default\n */\n\n.DraftEditor-root,\n.DraftEditor-editorContainer,\n.public-DraftEditor-content {\n  height: inherit;\n  text-align: initial;\n}\n\n.DraftEditor-root {\n  position: relative;\n}\n\n/**\n * Zero-opacity background used to allow focus in IE. Otherwise, clicks\n * fall through to the placeholder.\n */\n\n.DraftEditor-editorContainer {\n  background-color: rgba(255, 255, 255, 0);\n  /* Repair mysterious missing Safari cursor */\n  border: 1px solid transparent;\n  position: relative;\n  z-index: 1;\n}\n\n.public-DraftEditor-content {\n  outline: none;\n  white-space: pre-wrap;\n}\n\n.public-DraftEditor-block {\n  position: relative;\n}\n\n.DraftEditor-alignLeft .public-DraftEditor-block {\n  text-align: left;\n}\n\n.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n  left: 0;\n  text-align: left;\n}\n\n.DraftEditor-alignCenter .public-DraftEditor-block {\n  text-align: center;\n}\n\n.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n}\n\n.DraftEditor-alignRight .public-DraftEditor-block {\n  text-align: right;\n}\n\n.DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n  right: 0;\n  text-align: right;\n}\n/**\n * @providesModule DraftEditorPlaceholder\n */\n\n.public-DraftEditorPlaceholder-root {\n  color: #9197a3;\n  position: absolute;\n  z-index: 0;\n}\n\n.public-DraftEditorPlaceholder-hasFocus {\n  color: #bdc1c9;\n}\n\n.DraftEditorPlaceholder-hidden {\n  display: none;\n}\n/**\n * @providesModule DraftStyleDefault\n */\n\n.public-DraftStyleDefault-block {\n  position: relative;\n  white-space: pre-wrap;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-ltr {\n  direction: ltr;\n  text-align: left;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-rtl {\n  direction: rtl;\n  text-align: right;\n}\n\n/**\n * These rules provide appropriate text direction for counter pseudo-elements.\n */\n\n/* @noflip */\n\n.public-DraftStyleDefault-listLTR {\n  direction: ltr;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-listRTL {\n  direction: rtl;\n}\n\n/**\n * Default spacing for list container elements. Override with CSS as needed.\n */\n\n.public-DraftStyleDefault-ul,\n.public-DraftStyleDefault-ol {\n  margin: 16px 0;\n  padding: 0;\n}\n\n/**\n * Default counters and styles are provided for five levels of nesting.\n * If you require nesting beyond that level, you should use your own CSS\n * classes to do so. If you care about handling RTL languages, the rules you\n * create should look a lot like these.\n */\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\n  margin-left: 1.5em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\n  margin-right: 1.5em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\n  margin-left: 3em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\n  margin-right: 3em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\n  margin-left: 4.5em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\n  margin-right: 4.5em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\n  margin-left: 6em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\n  margin-right: 6em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\n  margin-left: 7.5em;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\n  margin-right: 7.5em;\n}\n\n/**\n * Only use `square` list-style after the first two levels.\n */\n\n.public-DraftStyleDefault-unorderedListItem {\n  list-style-type: square;\n  position: relative;\n}\n\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\n  list-style-type: disc;\n}\n\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\n  list-style-type: circle;\n}\n\n/**\n * Ordered list item counters are managed with CSS, since all list nesting is\n * purely visual.\n */\n\n.public-DraftStyleDefault-orderedListItem {\n  list-style-type: none;\n  position: relative;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\n  left: -36px;\n  position: absolute;\n  text-align: right;\n  width: 30px;\n}\n\n/* @noflip */\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\n  position: absolute;\n  right: -36px;\n  text-align: left;\n  width: 30px;\n}\n\n/**\n * Counters are reset in JavaScript. If you need different counter styles,\n * override these rules. If you need more nesting, create your own rules to\n * do so.\n */\n\n.public-DraftStyleDefault-orderedListItem:before {\n  content: counter(ol0) ". ";\n  counter-increment: ol0;\n}\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\n  content: counter(ol1) ". ";\n  counter-increment: ol1;\n}\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\n  content: counter(ol2) ". ";\n  counter-increment: ol2;\n}\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\n  content: counter(ol3) ". ";\n  counter-increment: ol3;\n}\n\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\n  content: counter(ol4) ". ";\n  counter-increment: ol4;\n}\n\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\n  counter-reset: ol0;\n}\n\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\n  counter-reset: ol1;\n}\n\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\n  counter-reset: ol2;\n}\n\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\n  counter-reset: ol3;\n}\n\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\n  counter-reset: ol4;\n}\n'},function(t,e,n){var r=n(338);"string"==typeof r&&(r=[[t.i,r,""]]);var i={sourceMap:!0};i.transform=void 0,n(19)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".RichTextEditor__root___2QXK-{background:#fff;border:1px solid #ddd;border-radius:3px;font-family:Georgia,serif;font-size:14px}.RichTextEditor__editor___1QqIU{cursor:text;font-size:16px}.RichTextEditor__editor___1QqIU .public-DraftEditor-content,.RichTextEditor__editor___1QqIU .public-DraftEditorPlaceholder-root{margin:0;padding:9px}.RichTextEditor__editor___1QqIU .public-DraftEditor-content{overflow:auto}.RichTextEditor__hidePlaceholder___3WLid .public-DraftEditorPlaceholder-root{display:none}.RichTextEditor__editor___1QqIU .RichTextEditor__paragraph___3NTf9,.RichTextEditor__editor___1QqIU pre{margin:14px 0}.RichTextEditor__editor___1QqIU .RichTextEditor__codeBlock____KD4Q{background-color:#f3f3f3;font-family:Inconsolata,Menlo,Consolas,monospace;font-size:16px;margin:14px 0;padding:20px}.RichTextEditor__editor___1QqIU .RichTextEditor__codeBlock____KD4Q span[style]{padding:0!important}.RichTextEditor__editor___1QqIU .RichTextEditor__blockquote___1vCYl{border-left:5px solid #eee;color:#666;font-family:Hoefler Text,Georgia,serif;font-style:italic;margin:16px 0;padding:10px 20px}.RichTextEditor__editor___1QqIU .RichTextEditor__block___2Vs_D:first-child,.RichTextEditor__editor___1QqIU ol:first-child,.RichTextEditor__editor___1QqIU pre:first-child,.RichTextEditor__editor___1QqIU ul:first-child{margin-top:0}.RichTextEditor__editor___1QqIU .RichTextEditor__block___2Vs_D:last-child,.RichTextEditor__editor___1QqIU ol:last-child,.RichTextEditor__editor___1QqIU pre:last-child,.RichTextEditor__editor___1QqIU ul:last-child{margin-bottom:0}",""]),e.locals={root:"RichTextEditor__root___2QXK-",editor:"RichTextEditor__editor___1QqIU",hidePlaceholder:"RichTextEditor__hidePlaceholder___3WLid",paragraph:"RichTextEditor__paragraph___3NTf9",codeBlock:"RichTextEditor__codeBlock____KD4Q",blockquote:"RichTextEditor__blockquote___1vCYl",block:"RichTextEditor__block___2Vs_D"}}]);

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(902)(module)))

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [{
    label: 'Bold',
    style: 'BOLD',
    className: 'custom-css-class'
  }, {
    label: 'Italic',
    style: 'ITALIC',
    className: 'custom-css-class'
  }, {
    label: 'Underline',
    style: 'UNDERLINE',
    className: 'custom-css-class'
  }],
  BLOCK_TYPE_DROPDOWN: [{
    label: 'Normal',
    style: 'unstyled',
    className: 'custom-css-class'
  }, {
    label: 'Heading Large',
    style: 'header-one',
    className: 'custom-css-class'
  }, {
    label: 'Heading Medium',
    style: 'header-two',
    className: 'custom-css-class'
  }, {
    label: 'Heading Small',
    style: 'header-three',
    className: 'custom-css-class'
  }],
  BLOCK_TYPE_BUTTONS: [{
    label: 'UL',
    style: 'unordered-list-item',
    className: 'custom-css-class'
  }, {
    label: 'OL',
    style: 'ordered-list-item',
    className: 'custom-css-class'
  }]
};

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(63));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(64));

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

var _actions = __webpack_require__(174);

var _auth = __webpack_require__(882);

var _localStorage = _interopRequireDefault(__webpack_require__(171));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RichTextEditor;
var DatetimeInput;

if (true) {
  RichTextEditor = __webpack_require__(886)["default"];

  var _require = __webpack_require__(901),
      DatetimeInput = _require.DatetimeInput;
}

var moment = __webpack_require__(887);

var checkToken = _auth.authServices.checkToken;
var addArticle = _actions.userActions.addArticle;
var getArticles = _actions.userActions.getArticles;
var editArticle = _actions.userActions.editArticle;
var deleteArticle = _actions.userActions.deleteArticle;

var toolbarConfig = __webpack_require__(888);

var initialState = {
  post: {
    admin_title: '',
    admin_description: '',
    admin_date: '',
    mainImage: {},
    admin_url: '',
    admin_content: RichTextEditor ? RichTextEditor.createEmptyValue() : null
  },
  postRu: {
    admin_title: '',
    admin_description: '',
    admin_content: RichTextEditor ? RichTextEditor.createEmptyValue() : null
  },
  isRu: false,
  selectedPost: false,
  selectedPostId: '',
  emptyFields: false,
  wrongUrlFormat: false,
  uploaded: false,
  notUnique: false,
  isAuthed: true,
  file: 'Файл не выбран'
};

var Admin =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Admin, _Component);

  function Admin(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Admin);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Admin).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setError", function (err) {
      _this.setState(_objectSpread({}, _this.state, {
        errors: err
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      !_this.state.isRu ? _this.setState(_objectSpread({}, _this.state, {
        post: _objectSpread({}, _this.state.post, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      })) : _this.setState(_objectSpread({}, _this.state, {
        postRu: _objectSpread({}, _this.state.postRu, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      }), function () {
        return console.log(_this.state.postRu);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_filterEditorContent", function () {
      var editorData = _this.state.post.admin_content.toString('html').trim();

      var filteredData = editorData.replace(/<p>/g, '').replace(/<br>/g, '').replace(/<\/p>/g, '').trim();
      return filteredData.length;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "appendRu", function () {
      _this.setState({
        notUnique: false,
        wrongUrlFormat: false,
        emptyFields: false
      });

      var formData = new FormData();

      for (var i in _this.state.postRu) {
        if (i !== 'admin_content') {
          if (_this.state.postRu[i].length < 1) {
            _this.setState(_objectSpread({}, _this.state, {
              emptyFields: true
            }));

            return;
          }

          var formatedData = i.split('_')[1] + 'Ru';
          formData.append(formatedData, _this.state.postRu[i].trim());
        } else {
          if (_this._filterEditorContent() < 1) {
            _this.setState(_objectSpread({}, _this.state, {
              emptyFields: true
            }));

            return;
          }

          formData.append('contentRu', _this.state.postRu[i].toString('html').trim());
        }
      }

      formData.append('hasRu', true);

      _this.setState(_objectSpread({}, _this.state, {
        emptyFields: false
      }));

      return formData;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "appendFormData", function () {
      var ru = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var asFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        notUnique: false,
        wrongUrlFormat: false,
        emptyFields: false
      });

      var formData = new FormData();
      var lang = _this.state.post;

      for (var i in lang) {
        if (lang[i].length < 1) {
          _this.setState(_objectSpread({}, _this.state, {
            emptyFields: true
          }));

          return;
        }

        if (i === 'admin_url') {
          if (!/^[a-zA-Z0-9_-]*$/.test(lang[i])) {
            _this.setState({
              wrongUrlFormat: true
            });

            return;
          }
        }

        if (i !== 'admin_content' && i !== 'mainImage') {
          var formatedData = i.split('_')[1];

          if (i === 'admin_date') {
            formData.append(formatedData, lang[i].toString());
          } else {
            formData.append(formatedData, lang[i].trim());
          }
        } else if (i !== 'mainImage') {
          if (_this._filterEditorContent() < 1) {
            _this.setState(_objectSpread({}, _this.state, {
              emptyFields: true
            }));

            return;
          }

          formData.append('content', lang[i].toString('html').trim());
        }
      }

      if (asFormData) return formData;
      var data = {};
      formData.forEach(function (value, key) {
        return data[key] = value;
      });

      _this.setState(_objectSpread({}, _this.state, {
        emptyFields: false
      }));

      return data;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEditorChange", function (admin_content) {
      !_this.state.isRu ? _this.setState(_objectSpread({}, _this.state, {
        post: _objectSpread({}, _this.state.post, {
          admin_content: admin_content
        })
      })) : _this.setState(_objectSpread({}, _this.state, {
        postRu: _objectSpread({}, _this.state.postRu, {
          admin_content: admin_content
        })
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectArticle", function (e) {
      _this.props.getSelectedArticle(e.target.value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unselectArticle", function (e) {
      if (e) e.preventDefault();

      _this.props.unselectArticle();

      _this.setState(initialState);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function () {
      if (_localStorage["default"].get('token') !== null) {
        var formData = _this.appendFormData();

        var mainImage = _this.state.post.mainImage;

        if (!mainImage) {
          _this.setState({
            emptyFields: true
          });
        }

        if (mainImage && formData) {
          formData.append('mainImage', JSON.stringify(mainImage));

          _this.props.addArticle(formData);
        }
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmitRu", function () {
      if (_localStorage["default"].get('token') !== null) {
        var formData = _this.appendRu();

        if (formData) {
          _this.props.editArticle(_this.props.article.selectedArticle._id, formData);
        }
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEdit", function () {
      if (_localStorage["default"].get('token') !== null) {
        var formData = _this.appendFormData();

        if (formData) {
          var mainImage = _this.state.post.mainImage;

          if (mainImage) {
            formData.append('mainImage', JSON.stringify(mainImage));
          }

          _this.props.editArticle(_this.props.article.selectedArticle._id, formData);
        }
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDelete", function () {
      if (_localStorage["default"].get('token') !== null) {
        _this.props.deleteArticle(_this.props.article.selectedArticle._id);

        _this.setState(initialState);
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeLang", function (e) {
      return _this.setState({
        isRu: e.target.value === 'true' ? true : false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showPreview",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var file, files;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = document.getElementById(id);
                files = file.files;

                if (!files[0]) {
                  _context.next = 15;
                  break;
                }

                _context.t0 = _this;
                _context.t1 = _objectSpread;
                _context.t2 = {};
                _context.t3 = _this.state.post;
                _context.next = 9;
                return _this.readFile(files[0]);

              case 9:
                _context.t4 = _context.sent;
                _context.t5 = {
                  src: _context.t4,
                  alt: '',
                  title: ''
                };
                _context.t6 = {
                  mainImage: _context.t5
                };
                _context.t7 = (0, _context.t1)(_context.t2, _context.t3, _context.t6);
                _context.t8 = {
                  post: _context.t7
                };

                _context.t0.setState.call(_context.t0, _context.t8);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "readFile", function (file) {
      return new Promise(function (res, rej) {
        var reader = new FileReader();

        reader.onload = function () {
          res(reader.result);
        };

        reader.readAsDataURL(file);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeImgProps", function (e, type) {
      return _this.setState({
        post: _objectSpread({}, _this.state.post, {
          mainImage: _objectSpread({}, _this.state.post.mainImage, (0, _defineProperty2["default"])({}, type, e.target.value))
        })
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getFiles", function (e) {
      var file = document.getElementById('admin_image');

      _this.showPreview('admin_image');

      if (file) {
        _this.setState({
          file: 'Файл выбран'
        });
      }
    });
    _this.state = initialState;
    return _this;
  }

  (0, _createClass2["default"])(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      checkToken()["catch"](function (err) {
        _this2.setState({
          isAuthed: false
        });

        return;
      });
      this.props.getArticles();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      checkToken()["catch"](function (err) {
        _this3.setState({
          isAuthed: false
        });

        return;
      });

      if (!nextProps.auth.isAuthenticated) {
        this.setState({
          isAuthed: false
        });
        return;
      }

      if (nextProps.article.error) {
        if (this.state.selectedPostId) {
          if (this.state.selectedPostId === nextProps.article.selectedArticle._id) {
            this.setState(_objectSpread({}, this.state, {
              notUnique: true,
              emptyFields: false
            }));
            return;
          }
        } else if (nextProps.article.uploadingArticle) {
          this.setState(_objectSpread({}, this.state, {
            notUnique: true,
            emptyFields: false
          }));
          return;
        }
      } else if (!nextProps.article.error && !nextProps.article.uploadingArticle) {
        this.setState(_objectSpread({}, initialState, {
          notUnique: false,
          emptyFields: false
        }));
      }

      if (!nextProps.article.error && nextProps.article.selectedArticle && nextProps.article.editedArticle && !nextProps.article.edititngArticle) {
        this.unselectArticle();
      }

      if (nextProps.article.selectedArticle) {
        // if(nextProps.article.selectedArticle.hasRu){
        var _nextProps$article$se = nextProps.article.selectedArticle,
            titleRu = _nextProps$article$se.titleRu,
            descriptionRu = _nextProps$article$se.descriptionRu,
            contentRu = _nextProps$article$se.contentRu; // 

        var _nextProps$article$se2 = nextProps.article.selectedArticle,
            admin_title = _nextProps$article$se2.title,
            admin_description = _nextProps$article$se2.description,
            admin_date = _nextProps$article$se2.date,
            admin_url = _nextProps$article$se2.url,
            mainImage = _nextProps$article$se2.mainImage,
            admin_content = _nextProps$article$se2.content;
        this.setState(_objectSpread({}, this.state, {
          post: {
            admin_title: admin_title,
            admin_description: admin_description,
            admin_date: moment(admin_date),
            admin_url: admin_url,
            mainImage: mainImage,
            admin_content: RichTextEditor ? RichTextEditor.createValueFromString(admin_content, 'html') : null
          },
          postRu: {
            admin_title: titleRu ? titleRu : '',
            admin_description: descriptionRu ? descriptionRu : '',
            admin_content: contentRu ? RichTextEditor ? RichTextEditor.createValueFromString(contentRu, 'html') : null : RichTextEditor ? RichTextEditor.createEmptyValue() : null
          },
          isRu: false,
          selectedPost: true,
          selectedPostId: nextProps.article.selectedArticle._id,
          emptyFields: false,
          notUnique: false
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.isAuthed) {
        var article = this.props.article;
        return _react["default"].createElement("div", {
          className: "admin"
        }, article.loadedArticle ? _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("select", {
          className: "admin_select",
          id: "admin_select",
          onChange: this.selectArticle
        }, _react["default"].createElement("option", {
          id: "default_select",
          disabled: true,
          selected: this.state.selectedPost ? false : true
        }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E"), article.articles.map(function (article) {
          return _react["default"].createElement("option", {
            value: article._id,
            key: article._id
          }, article.title);
        }))) : _react["default"].createElement("h2", null, "Loading"), article.selectedArticle && _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("select", {
          id: "admin_language_select",
          onChange: this.onChangeLang
        }, _react["default"].createElement("option", {
          value: false,
          selected: !this.state.isRu
        }, "UA"), _react["default"].createElement("option", {
          value: true,
          selected: this.state.isRu
        }, "RU"))), _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.unselectArticle
        }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), this.state.emptyFields && _react["default"].createElement("h2", {
          style: {
            color: 'red'
          }
        }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F"), this.state.wrongUrlFormat && _react["default"].createElement("h2", {
          style: {
            color: 'red'
          }
        }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u043A\u0440\u043E\u043C\u0435 '-, _' \u0438\u043B\u0438 \u043D\u0435 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B"), this.state.notUnique && !this.state.emptyFields && _react["default"].createElement("h2", {
          style: {
            color: 'red'
          }
        }, _react["default"].createElement("ul", null, article.error.split(',').map(function (err) {
          return _react["default"].createElement("li", null, _react["default"].createElement("h3", {
            style: {
              color: 'red'
            }
          }, err));
        }))), _react["default"].createElement("form", {
          action: ""
        }, _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438(title)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_title",
          value: this.state.isRu ? this.state.postRu.admin_title : this.state.post.admin_title,
          onChange: this.onChange
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435(description)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          value: this.state.isRu ? this.state.postRu.admin_description : this.state.post.admin_description,
          id: "admin_description",
          onChange: this.onChange
        })), this.state.isRu ? null : _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "Url"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          value: this.state.post.admin_url,
          id: "admin_url",
          onChange: this.onChange
        })), this.state.post.mainImage.src && _react["default"].createElement("div", null, _react["default"].createElement("img", {
          src: this.state.post.mainImage.src,
          style: {
            width: '50px',
            height: '50px'
          }
        }), _react["default"].createElement("br", null), _react["default"].createElement("label", null, "Alt"), _react["default"].createElement("br", null), _react["default"].createElement("input", {
          type: "text",
          value: this.state.post.mainImage.alt,
          onChange: function onChange(e) {
            return _this4.changeImgProps(e, 'alt');
          }
        }), _react["default"].createElement("br", null), _react["default"].createElement("label", null, "Title"), _react["default"].createElement("br", null), _react["default"].createElement("input", {
          type: "text",
          value: this.state.post.mainImage.title,
          onChange: function onChange(e) {
            return _this4.changeImgProps(e, 'title');
          }
        })), this.state.isRu ? null : _react["default"].createElement("label", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), _react["default"].createElement("span", {
          className: "admin_custom_file_selector"
        }, this.state.file), _react["default"].createElement("input", {
          className: "admin_file_selector",
          type: "file",
          value: this.state.post.admin_image,
          id: "admin_image",
          accept: "image/*",
          onChange: this.getFiles
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0422\u0435\u043A\u0441\u0442(content)"), RichTextEditor ? _react["default"].createElement(RichTextEditor, {
          className: "admin_text_aditor",
          value: this.state.isRu ? this.state.postRu.admin_content : this.state.post.admin_content,
          onChange: this.onEditorChange,
          toolbarConfig: toolbarConfig
        }) : null), !this.state.isRu && _react["default"].createElement("div", {
          className: "admin_input_line admin_date_box"
        }, _react["default"].createElement("h2", null, "\u0414\u0430\u0442\u0430"), _react["default"].createElement("div", {
          className: "admin_datetime_input"
        }, DatetimeInput ? _react["default"].createElement(DatetimeInput, {
          datetime: this.state.post.admin_date,
          placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
          onChange: function onChange(date) {
            return _this4.setState({
              post: _objectSpread({}, _this4.state.post, {
                admin_date: date
              })
            }, function () {
              return console.log(_this4.state.post.admin_date);
            });
          }
        }) : null))), _react["default"].createElement("div", {
          className: "admin_action_box"
        }, this.props.article.selectedArticle ? _react["default"].createElement("div", {
          className: "admin_action_box"
        }, _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.state.isRu ? this.onSubmitRu : this.onEdit
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onDelete
        }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onSubmit
        }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"), _react["default"].createElement("button", {
          className: "action_button",
          onClick: function onClick() {
            return _this4.props.logout();
          }
        }, "\u0412\u044B\u0439\u0442\u0438")));
      } else {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/login"
        });
      }
    }
  }]);
  return Admin;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    article: state.articles,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addArticle: addArticle,
    getArticles: getArticles,
    editArticle: editArticle,
    deleteArticle: deleteArticle,
    checkToken: checkToken,
    getSelectedArticle: function getSelectedArticle(id) {
      return dispatch({
        id: id,
        type: 'GET_SELECTED_ARTICLE'
      });
    },
    unselectArticle: function unselectArticle() {
      return dispatch({
        type: 'UNSELECT_ARTCILE'
      });
    },
    logout: function logout() {
      return function (dispatch) {
        dispatch({
          type: 'LOGOUT_REQUEST'
        });

        _localStorage["default"].remove('token');

        dispatch({
          type: 'LOGOUT_SUCCESS'
        });
      };
    }
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Admin);

exports["default"] = _default;

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(887));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["DatetimeInputs"] = factory(require("react"), require("moment"));
	else
		root["DatetimeInputs"] = factory(root["React"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatetimeInput = undefined;

var _datetimeInputComponent = __webpack_require__(1);

var _datetimeInputComponent2 = _interopRequireDefault(_datetimeInputComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DatetimeInput = _datetimeInputComponent2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _datetimeInput = __webpack_require__(4);

var _datetimeInput2 = _interopRequireDefault(_datetimeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatetimeInput = function (_React$Component) {
  _inherits(DatetimeInput, _React$Component);

  function DatetimeInput(props) {
    _classCallCheck(this, DatetimeInput);

    var _this = _possibleConstructorReturn(this, (DatetimeInput.__proto__ || Object.getPrototypeOf(DatetimeInput)).call(this, props));

    _this.current = (0, _moment2.default)();

    var datetime = null;
    if (!!_this.props.datetime) {
      if (!_this.props.datetime._isAMomentObject) {
        datetime = _this.props.datetime.clone();
      } else {
        datetime = (0, _moment2.default)(_this.props.datetime);
      }
    }

    _this.state = {
      active: false,
      warning: false,
      calendar: null,
      datetime: datetime
    };

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  _createClass(DatetimeInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.state.active && !this.wrapper.contains(event.target)) {
        this.setState({ active: false }, this.props.onClose);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this2 = this;

      this.setState({
        active: false,
        datetime: null,
        calendar: null
      }, function () {
        return _this2.props.onChange();
      });
    }
  }, {
    key: 'updateCalendar',
    value: function updateCalendar(calendar) {
      this.setState({ calendar: calendar });
    }
  }, {
    key: 'checkBounds',
    value: function checkBounds(datetime) {
      return (!this.props.minDate || datetime > this.props.minDate) && (!this.props.maxDate || datetime < this.props.maxDate);
    }
  }, {
    key: 'update',
    value: function update(datetime) {
      var _this3 = this;

      if (!!this.state.calendar) {
        this.updateCalendar(datetime.clone());
      }

      if (this.checkBounds(datetime)) {
        this.setState({ datetime: datetime }, function () {
          return _this3.props.onChange(datetime);
        });
      } else {
        this.setState({ warning: true }, function () {
          setTimeout(function () {
            _this3.setState({ warning: false });
          }, 250);
        });
      }
    }
  }, {
    key: 'handleOnWheel',
    value: function handleOnWheel(event, upCallback, downCallback) {
      event = event.originalEvent || event;
      var delta = event.wheelDelta || event.deltaY * -1 || 0;
      if (delta < 0) {
        this.props.naturalScroll ? upCallback() : downCallback();
      }
      if (delta > 0) {
        this.props.naturalScroll ? downCallback() : upCallback();
      }
    }
  }, {
    key: 'closeEditPopover',
    value: function closeEditPopover() {
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'toggleEditPopover',
    value: function toggleEditPopover() {
      this.setState({
        active: !this.state.active,
        datetime: this.state.datetime || (0, _moment2.default)()
      });
    }
  }, {
    key: 'toggleCalendar',
    value: function toggleCalendar() {
      if (!!this.state.calendar) {
        this.setState({
          calendar: null
        });
      } else {
        this.setState({
          calendar: this.state.datetime.clone() || (0, _moment2.default)()
        });
      }
    }
  }, {
    key: 'renderDate',
    value: function renderDate() {
      if (this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.date },
          this.props.datetime.format(this.props.dateFormat)
        );
      }
    }
  }, {
    key: 'renderTime',
    value: function renderTime() {
      if (this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.time },
          this.props.datetime.format(this.props.timeFormat)
        );
      }
    }
  }, {
    key: 'renderPlaceholder',
    value: function renderPlaceholder() {
      if (!this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.placeholder },
          this.props.placeholder
        );
      }
    }
  }, {
    key: 'renderCalendarHeader',
    value: function renderCalendarHeader() {
      var _this4 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.calendarHeader,
          onWheel: function onWheel(event) {
            return _this4.handleOnWheel(event, function () {
              return _this4.updateCalendar(_this4.state.calendar.add(1, 'month'));
            }, function () {
              return _this4.updateCalendar(_this4.state.calendar.subtract(1, 'month'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowLeft,
          onClick: function onClick() {
            return _this4.updateCalendar(_this4.state.calendar.subtract(1, 'month'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.calendar.format('YYYY') === this.current.format('YYYY') ? this.state.calendar.format('MMMM') : this.state.calendar.format('MMMM YYYY')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowRight,
          onClick: function onClick() {
            return _this4.updateCalendar(_this4.state.calendar.add(1, 'month'));
          } })
      );
    }
  }, {
    key: 'renderWeekdays',
    value: function renderWeekdays() {
      var _this5 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.weekdays },
        [0, 1, 2, 3, 4, 5, 6].map(function (dayIndex) {
          var date = _this5.state.calendar.clone();
          return React.createElement(
            'span',
            { className: _datetimeInput2.default.weekday },
            date.startOf('week').add(dayIndex, 'days').format('ddd')
          );
        })
      );
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks() {
      var _this6 = this;

      var weekNumberEnd = this.state.calendar.clone().endOf('month').week();
      var weekNumberStart = this.state.calendar.clone().startOf('month').week();
      var numWeeks = Math.abs(weekNumberEnd - weekNumberStart + 1);

      return [0, 1, 2, 3, 4, 5].slice(0, numWeeks).map(function (weekIndex) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.week },
          [0, 1, 2, 3, 4, 5, 6].map(function (dayIndex) {
            var date = _this6.state.calendar.clone().startOf('month').add(weekIndex, 'weeks').weekday(dayIndex).startOf('day');

            var dateStyles = _datetimeInput2.default.date;
            if (date.clone().isSame(_this6.current.clone().startOf('day'))) {
              dateStyles += ' ' + _datetimeInput2.default.current;
            }
            if (date.clone().isSame(_this6.state.datetime.clone().startOf('day'))) {
              dateStyles += ' ' + _datetimeInput2.default.active;
            }
            if (date.clone().month() !== _this6.state.calendar.month()) {
              dateStyles += ' ' + _datetimeInput2.default.inactive;
            }

            var dateFormat = date.format('YYYY-MM-DD');
            var timeFormat = _this6.state.datetime.format('HH:mm:ssZ');
            var datetime = (0, _moment2.default)(dateFormat + 'T' + timeFormat);

            return React.createElement(
              'span',
              { className: dateStyles,
                onClick: function onClick() {
                  return _this6.update(datetime);
                } },
              date.date()
            );
          })
        );
      });
    }
  }, {
    key: 'renderCalendarBody',
    value: function renderCalendarBody() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.calendarBody },
        this.renderWeekdays(),
        this.renderWeeks()
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      if (!!this.state.calendar) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.calendar },
          this.renderCalendarHeader(),
          this.renderCalendarBody()
        );
      }
    }
  }, {
    key: 'renderHours',
    value: function renderHours() {
      var _this7 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerHours,
          onWheel: function onWheel(event) {
            return _this7.handleOnWheel(event, function () {
              return _this7.update(_this7.state.datetime.clone().add(1, 'hours'));
            }, function () {
              return _this7.update(_this7.state.datetime.clone().subtract(1, 'hours'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this7.update(_this7.state.datetime.clone().add(1, 'hours'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('HH')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this7.update(_this7.state.datetime.clone().subtract(1, 'hours'));
          } })
      );
    }
  }, {
    key: 'renderMinutes',
    value: function renderMinutes() {
      var _this8 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerMinutes,
          onWheel: function onWheel(event) {
            return _this8.handleOnWheel(event, function () {
              return _this8.update(_this8.state.datetime.clone().add(1, 'minutes'));
            }, function () {
              return _this8.update(_this8.state.datetime.clone().subtract(1, 'minutes'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this8.update(_this8.state.datetime.clone().add(1, 'minutes'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('mm')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this8.update(_this8.state.datetime.clone().subtract(1, 'minutes'));
          } })
      );
    }
  }, {
    key: 'renderSeconds',
    value: function renderSeconds() {
      var _this9 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerSeconds,
          onWheel: function onWheel(event) {
            return _this9.handleOnWheel(event, function () {
              return _this9.update(_this9.state.datetime.clone().add(1, 'seconds'));
            }, function () {
              return _this9.update(_this9.state.datetime.clone().subtract(1, 'seconds'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this9.update(_this9.state.datetime.clone().add(1, 'seconds'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('ss')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this9.update(_this9.state.datetime.clone().subtract(1, 'seconds'));
          } })
      );
    }
  }, {
    key: 'renderTimer',
    value: function renderTimer() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timer },
        this.renderHours(),
        React.createElement(
          'div',
          { className: _datetimeInput2.default.timerDivider },
          ':'
        ),
        this.renderMinutes(),
        React.createElement(
          'div',
          { className: _datetimeInput2.default.timerDivider },
          ':'
        ),
        this.renderSeconds()
      );
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      if (this.props.allowClear && !!this.state.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.clearButton },
          React.createElement(
            'div',
            { onClick: this.clear.bind(this) },
            'Clear'
          )
        );
      }
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.closeButton },
        React.createElement(
          'div',
          { onClick: this.closeEditPopover.bind(this) },
          'Close'
        )
      );
    }
  }, {
    key: 'renderDisplay',
    value: function renderDisplay() {
      if (!!this.props.customDisplay) {
        return React.cloneElement(this.props.customDisplay, {
          onClick: this.toggleEditPopover.bind(this),
          datetime: this.props.datetime,
          warning: this.state.warning,
          active: this.state.active
        });
      } else {
        var displayClassNames = _datetimeInput2.default.display + '\n        ' + (this.state.active ? _datetimeInput2.default.active : '') + '\n        ' + (this.state.warning ? _datetimeInput2.default.warning : '') + '\n      ';
        return React.createElement(
          'div',
          { className: displayClassNames,
            onClick: this.toggleEditPopover.bind(this) },
          this.renderDate(),
          this.renderTime(),
          this.renderPlaceholder()
        );
      }
    }
  }, {
    key: 'renderEditPopover',
    value: function renderEditPopover() {
      if (this.state.active) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.editPopover },
          React.createElement(
            'div',
            { className: _datetimeInput2.default.header,
              onClick: this.toggleCalendar.bind(this) },
            this.state.datetime.format(this.props.dateFormat)
          ),
          this.renderCalendar(),
          this.renderTimer(),
          this.renderClearButton(),
          this.renderCloseButton()
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.datetimeInput,
          ref: function ref(node) {
            _this10.wrapper = node;
          } },
        this.renderDisplay(),
        this.renderEditPopover()
      );
    }
  }]);

  return DatetimeInput;
}(React.Component);

DatetimeInput.defaultProps = {
  datetime: undefined,
  dateFormat: 'DD MMMM YYYY',
  timeFormat: 'HH : mm : ss',
  placeholder: 'Set datetime',
  onChange: undefined,
  onClose: undefined,
  allowClear: false,
  customDisplay: undefined,
  minDate: undefined,
  maxDate: undefined,
  naturalScroll: true
};

exports.default = DatetimeInput;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./datetime-input.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./datetime-input.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Datetime input styles\n */\n.datetime-input__datetimeInput___E_LKs {\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-size: 14px;\n  font-family: sans-serif;\n  text-decoration: none;\n  text-align: center;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n\n\n/**\n * Display datetime object\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 4em;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu:hover {\n  background-color: #ddd;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm {\n  background-color: rgba(255, 54, 46, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm:hover {\n  background-color: rgba(255, 54, 46, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__date___JuBJT {\n  color: #777;\n  font-size: 1em;\n  line-height: 2em;\n  display: block;\n  overflow: hidden;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__time___2lOBx {\n  font-size: 1.5em;\n  line-height: 1.25em;\n  display: block;\n  overflow: hidden;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__placeholder___1nw_d {\n  font-size: 1.5em;\n  line-height: 3em;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n\n/**\n * Edit datetime popover\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 {\n  position: absolute;\n  z-index: 5;\n  top: 4.5em;\n  width: 100%;\n  min-width: 350px;\n  height: auto;\n  padding: 0;\n  background-color: #efefef;\n  border-radius: 0;\n  border: 1px solid #aaa;\n  box-sizing: border-box;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl- {\n  width: 100%;\n  color: #777;\n  font-size: 1.5em;\n  line-height: 2em;\n  cursor: pointer;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #efefef;\n  width: 1em;\n  height: 1em;\n  top: -0.5em;\n  left: 10%;\n  z-index: 2;\n  border-color: #aaa;\n  border-style: solid;\n  border-width: 1px 1px 0 0;\n  box-sizing: border-box;\n  transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-:hover::before {\n  background-color: #ddd;\n}\n\n\n/**\n * Calendar\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF {\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  width: 100%;\n  font-size: 1.5em;\n  line-height: 2em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr {\n  display: inline-block;\n  color: #ddd;\n  cursor: pointer;\n  line-height: 1.5em;\n  font-size: 1.5em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy {\n  position: absolute;\n  left: 0;\n  width: 2em;\n  height: 100%;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy::before {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  left: 25%;\n  border-right: 0.75em solid #ddd;\n  border-top: 0.5em solid transparent;\n  border-bottom: 0.5em solid transparent;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy:hover::before {\n  border-right-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A {\n  position: absolute;\n  right: 0;\n  width: 2em;\n  height: 100%;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A::before {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  right: 25%;\n  border-left: 0.75em solid #ddd;\n  border-top: 0.5em solid transparent;\n  border-bottom: 0.5em solid transparent;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A:hover::before {\n  border-left-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 {\n  padding: 0.5em 0;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs {\n  cursor: default;\n  display: flex;\n  justify-content: space-between;\n  color: #777;\n  font-size: 1em;\n  line-height: 2em;\n  text-transform: uppercase;\n  padding: 0 1em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs .datetime-input__weekday___22PUD {\n  display: inline-block;\n  width: 5em;\n  height: 2.5em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs .datetime-input__weekday___22PUD {\n  display: inline-block;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp {\n  display: flex;\n  justify-content: space-between;\n  color: #777;\n  font-size: 1.25em;\n  line-height: 2.65em;\n  letter-spacing: 1px;\n  padding: 0.5em 1em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT {\n  display: inline-block;\n  cursor: pointer;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__current___1wlcl {\n  color: #555;\n  font-weight: 900;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT:not(.datetime-input__active___35Py3):hover {\n  background-color: #ddd;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__inactive___12SrF.datetime-input__active___35Py3 {\n  color: #efefef;\n  background-color: rgba(255, 69, 0, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__inactive___12SrF {\n  color: #aaa;\n}\n\n\n/**\n * Timer\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo {\n  cursor: default;\n  width: 3em;\n  display: inline-block;\n  font-size: 3em;\n  line-height: 1.5em;\n  position: relative;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr {\n  position: relative;\n  color: #ddd;\n  cursor: pointer;\n  height: 1em;\n  margin: 0 0.5em;\n  line-height: 1em;\n  font-size: 0.75em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 35%;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-bottom: 0.5em solid #ddd;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before {\n  border-bottom-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 35%;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-top: 0.5em solid #ddd;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before {\n  border-top-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerDivider___5u9y8 {\n  font-size: 3em;\n  line-height: 3em;\n  -webkit-animation-name: datetime-input__blinker___3tc5B;\n  -webkit-animation-duration: 5s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: datetime-input__blinker___3tc5B;\n  -moz-animation-duration: 5s;\n  -moz-animation-timing-function: linear;\n  -moz-animation-iteration-count: infinite;\n  animation-name: datetime-input__blinker___3tc5B;\n  animation-duration: 5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n@-moz-keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n@-webkit-keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n@keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n\n/**\n * Clear button\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm {\n  position: absolute;\n  z-index: 5;\n  bottom: -2.5em;\n  right: -1px;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #aaa;\n  border-right: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n  color: #777;\n  width: 25%;\n  height: auto;\n  font-size: 1.5em;\n  line-height: 2em;\n  box-sizing: border-box;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm::before {\n  content: \"\";\n  position: absolute;\n  left: -0.5em;\n  top: -1px;\n  width: 1em;\n  height: 2em;\n  background: #efefef;\n  border-top: 1px solid #aaa;\n  border-left: 1px solid #aaa;\n  transition: background 0.25s ease-out;\n  transform: skewX(25deg);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm:hover::before {\n  background: #ddd;\n}\n\n\n/**\n * Close button\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7 {\n  position: absolute;\n  z-index: 5;\n  left: -1px;\n  bottom: -2.5em;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #aaa;\n  border-left: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n  color: #777;\n  width: 25%;\n  height: auto;\n  margin-top: 10px;\n  font-size: 1.5em;\n  line-height: 2em;\n  box-sizing: border-box;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7::before {\n  content: \"\";\n  position: absolute;\n  right: -0.5em;\n  top: -1px;\n  width: 1em;\n  height: 2em;\n  background: #efefef;\n  border-top: 1px solid #aaa;\n  border-right: 1px solid #aaa;\n  transition: background 0.25s ease-out;\n  transform: skewX(-26deg);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7:hover::before {\n  background: #ddd;\n}\n", ""]);

// exports
exports.locals = {
	"datetimeInput": "datetime-input__datetimeInput___E_LKs",
	"display": "datetime-input__display___10kTu",
	"active": "datetime-input__active___35Py3",
	"warning": "datetime-input__warning___LN8Vm",
	"date": "datetime-input__date___JuBJT",
	"time": "datetime-input__time___2lOBx",
	"placeholder": "datetime-input__placeholder___1nw_d",
	"editPopover": "datetime-input__editPopover___1bQE2",
	"header": "datetime-input__header___6zUl-",
	"calendar": "datetime-input__calendar___2_R7X",
	"calendarHeader": "datetime-input__calendarHeader___zF4vF",
	"arrow": "datetime-input__arrow___3rVXr",
	"arrowLeft": "datetime-input__arrowLeft___2QdVy",
	"arrowRight": "datetime-input__arrowRight___3t92A",
	"calendarBody": "datetime-input__calendarBody___1ADj2",
	"weekdays": "datetime-input__weekdays___36Mhs",
	"weekday": "datetime-input__weekday___22PUD",
	"week": "datetime-input__week___3lfOp",
	"current": "datetime-input__current___1wlcl",
	"inactive": "datetime-input__inactive___12SrF",
	"timer": "datetime-input__timer___1BCUZ",
	"timerHours": "datetime-input__timerHours___304MH",
	"timerMinutes": "datetime-input__timerMinutes___3iZOD",
	"timerSeconds": "datetime-input__timerSeconds___5IRMo",
	"arrowUp": "datetime-input__arrowUp___10W_B",
	"arrowDown": "datetime-input__arrowDown___3WUDf",
	"timerDivider": "datetime-input__timerDivider___5u9y8",
	"blinker": "datetime-input__blinker___3tc5B",
	"clearButton": "datetime-input__clearButton___1F9Zm",
	"closeButton": "datetime-input__closeButton___1BwV7"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=datetime-inputs.js.map

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 903:
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

var _reactRedux = __webpack_require__(26);

var _redux = __webpack_require__(51);

var _galleryActions = __webpack_require__(317);

var _GalleryImageContainer = _interopRequireDefault(__webpack_require__(904));

__webpack_require__(885);

var _auth = __webpack_require__(882);

var _reactRouterDom = __webpack_require__(50);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addGalleryPost = _galleryActions.galleryActions.addGalleryPost;
var getGalleryPosts = _galleryActions.galleryActions.getGalleryPosts;
var editGalleryPost = _galleryActions.galleryActions.editGalleryPost;
var deleteGalleryPost = _galleryActions.galleryActions.deleteGalleryPost;
var checkToken = _auth.authServices.checkToken;
var initialState = {
  galleryData: {
    admin_gallery_description: '',
    admin_gallery_imageAlt: '',
    admin_gallery_imageTitle: ''
  },
  galleryDataRu: {
    admin_gallery_description: ''
  },
  emptyFields: false,
  selectedPost: '',
  isAuthed: true,
  file: 'Файл не выбран',
  video: 'Файл не выбран',
  isRu: false
};

var AdminGallery =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AdminGallery, _Component);

  function AdminGallery(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdminGallery);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminGallery).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectPost", function (id) {
      _this.props.getSelectedGalleryPost(id);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unselectPost", function () {
      _this.props.unselectGalleryPost();

      _this.setState(initialState);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_mapStateToForm", function () {
      var formData = new FormData();
      var gallery = _this.state.galleryData;

      for (var i in gallery) {
        if (gallery[i].length < 1) {
          _this.setState({
            emptyFields: true
          });

          return;
        }

        formData.append(i.split('_').pop(), gallery[i]);
      }

      return formData;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function () {
      _this.setState({
        emptyFields: false,
        notUnique: false
      });

      var formData = _this._mapStateToForm();

      var image = document.getElementById('admin_gallery_image').files[0];

      if (image && formData) {
        formData.append('image', image);

        _this.props.addGalleryPost(formData);

        _this.setState({
          emptyFields: false
        });
      } else {
        _this.setState({
          emptyFields: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      !_this.state.isRu ? _this.setState(_objectSpread({}, _this.state, {
        galleryData: _objectSpread({}, _this.state.galleryData, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      })) : _this.setState(_objectSpread({}, _this.state, {
        galleryDataRu: _objectSpread({}, _this.state.galleryDataRu, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getFiles", function (e) {
      var file = document.getElementById(e.target.id).files;

      if (file.length > 0) {
        _this.setState({
          file: 'Файл выбран'
        });

        return;
      }

      _this.setState({
        file: 'Файл не выбран'
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getVideo", function (e) {
      var file = document.getElementById(e.target.id).files;

      if (file.length > 0) {
        _this.setState({
          video: 'Файл выбран'
        });

        return;
      }

      _this.setState({
        video: 'Файл не выбран'
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEdit", function () {
      if (_this.state.isRu) {
        var _formData = new FormData();

        if (_this.state.galleryDataRu.admin_gallery_description.length < 1) {
          _this.setState({
            emptyFields: true
          });

          return;
        } else {
          _formData.append('descriptionRu', _this.state.galleryDataRu.admin_gallery_description);

          _formData.append('hasRu', true);

          _this.props.editGalleryPost(_this.props.gallery.selectedGalleryPost._id, _formData);

          return;
        }
      }

      var formData = _this._mapStateToForm();

      if (!formData) {
        _this.setState({
          emptyFields: true
        });

        return;
      } else {
        if (formData) {
          var image = document.getElementById('admin_gallery_image').files[0];

          if (image) {
            formData.append('image', image);
          }

          _this.props.editGalleryPost(_this.props.gallery.selectedGalleryPost._id, formData);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDelete", function () {
      _this.props.deleteGalleryPost(_this.props.gallery.selectedGalleryPost._id);

      _this.setState(initialState);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeLang", function (e) {
      return _this.setState({
        isRu: e.target.value === 'true' ? true : false
      });
    });
    _this.state = initialState;
    return _this;
  }

  (0, _createClass2["default"])(AdminGallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      checkToken()["catch"](function (err) {
        _this2.setState({
          isAuthed: false
        });

        return;
      });
      this.props.getGalleryPosts();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      checkToken()["catch"](function (err) {
        _this3.setState({
          isAuthed: false
        });

        return;
      });

      if (nextProps.gallery.editingGalleryPostError || nextProps.gallery.error) {
        this.setState(_objectSpread({}, this.state, {
          notUnique: true
        }));
        return;
      } else if (!nextProps.gallery.error && !nextProps.gallery.editingGalleryPostError && !nextProps.gallery.uploadingGalleryPost && !nextProps.gallery.selectedGalleryPost) {
        this.setState(_objectSpread({}, initialState, {
          notUnique: false,
          emptyFields: false
        }));
      }

      if (!nextProps.gallery.error && nextProps.gallery.selectedGalleryPost && nextProps.gallery.editedGallery && !nextProps.gallery.editingGalleryPost) {
        this.unselectPost();
      }

      if (nextProps.gallery.selectedGalleryPost) {
        var selected = nextProps.gallery.selectedGalleryPost;
        this.setState(_objectSpread({}, this.state, {
          galleryData: {
            admin_gallery_description: selected.description,
            admin_gallery_imageAlt: selected.imageAlt,
            admin_gallery_imageTitle: selected.imageTitle
          },
          galleryDataRu: {
            admin_gallery_description: selected.descriptionRu ? selected.descriptionRu : ''
          },
          selectedPost: selected._id,
          emptyFields: false,
          notUnique: false
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.isAuthed) {
        return _react["default"].createElement("div", {
          className: "admin"
        }, _react["default"].createElement("div", {
          className: "admin_photo_box"
        }, this.props.gallery.galleryPosts && this.props.gallery.galleryPosts.length > 0 && _react["default"].createElement(_GalleryImageContainer["default"], {
          galleryImages: this.props.gallery.galleryPosts,
          selectPost: this.selectPost,
          selectedPost: this.state.selectedPost
        })), this.props.gallery.selectedGalleryPost && _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("select", {
          id: "admin_language_select",
          onChange: this.onChangeLang
        }, _react["default"].createElement("option", {
          value: false,
          selected: !this.state.isRu
        }, "UA"), _react["default"].createElement("option", {
          value: true,
          selected: this.state.isRu
        }, "RU"))), _react["default"].createElement("button", {
          className: "action_button",
          onClick: function onClick() {
            return _this4.unselectPost();
          }
        }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), this.props.gallery.uploadingGalleryPost ? _react["default"].createElement("h2", null, "Loading post ...") : null, this.state.emptyFields ? _react["default"].createElement("h2", {
          style: {
            color: 'red'
          }
        }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F") : null, this.props.gallery.error ? _react["default"].createElement("ul", null, this.props.gallery.error.message.split(',').map(function (err) {
          return _react["default"].createElement("li", null, _react["default"].createElement("h3", {
            style: {
              color: 'red'
            }
          }, err));
        })) : null // this.state.notUnique && <h2 style={{color: 'red'}}>{this.props.gallery.error || this.props.gallery.editingGalleryPostError}</h2>
        , _react["default"].createElement("form", null, _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435(description)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_gallery_description",
          value: this.state.isRu ? this.state.galleryDataRu.admin_gallery_description : this.state.galleryData.admin_gallery_description,
          onChange: this.onChange
        })), !this.state.isRu ? _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0410\u043B\u044C\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F(imageAlt)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_gallery_imageAlt",
          value: this.state.galleryData.admin_gallery_imageAlt,
          onChange: this.onChange
        })) : null, !this.state.isRu ? _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0422\u0430\u0439\u0442\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F(imageTitle)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_gallery_imageTitle",
          value: this.state.galleryData.admin_gallery_imageTitle,
          onChange: this.onChange
        })) : null, !this.state.isRu ? _react["default"].createElement("label", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0424\u0430\u0439\u043B"), _react["default"].createElement("span", {
          className: "admin_custom_file_selector"
        }, this.state.file), _react["default"].createElement("input", {
          className: "admin_file_selector",
          type: "file",
          accept: "image/*, video/mp4",
          id: "admin_gallery_image",
          onChange: this.getFiles
        })) : null), this.props.gallery.selectedGalleryPost ? _react["default"].createElement("div", null, _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onEdit
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onDelete
        }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onSubmit
        }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"));
      } else {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/login"
        });
      }
    }
  }]);
  return AdminGallery;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addGalleryPost: addGalleryPost,
    getGalleryPosts: getGalleryPosts,
    editGalleryPost: editGalleryPost,
    deleteGalleryPost: deleteGalleryPost,
    getSelectedGalleryPost: function getSelectedGalleryPost(id) {
      return dispatch({
        id: id,
        type: 'GET_SELECTED_GALLERY_POST'
      });
    },
    unselectGalleryPost: function unselectGalleryPost() {
      return dispatch({
        type: 'UNSELECT_GALLERY_POST'
      });
    }
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminGallery);

exports["default"] = _default;

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GalleryImageContainer;

var _react = _interopRequireDefault(__webpack_require__(0));

var _GalleryImage = _interopRequireDefault(__webpack_require__(905));

function GalleryImageContainer(props) {
  return _react["default"].createElement("div", null, props.galleryImages.map(function (post) {
    return _react["default"].createElement(_GalleryImage["default"], {
      data: post,
      selectPost: props.selectPost,
      selectedPost: props.selectedPost,
      key: post._id
    });
  }));
}

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GalleryImage;

var _react = _interopRequireDefault(__webpack_require__(0));

var _config = __webpack_require__(62);

function GalleryImage(props) {
  var id = props.data._id;
  return _react["default"].createElement("div", {
    style: {
      display: 'inline-block',
      border: props.selectedPost === id ? '1px solid blue' : null
    },
    onClick: function onClick() {
      return props.selectPost(id);
    }
  }, _react["default"].createElement("img", {
    style: {
      width: '250px',
      height: 'auto'
    },
    src: "".concat(_config.fileUrl).concat(props.data.image),
    alt: "gallery post"
  }));
}

/***/ }),

/***/ 906:
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

var _logo = _interopRequireDefault(__webpack_require__(172));

var AdminHeader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AdminHeader, _Component);

  function AdminHeader() {
    (0, _classCallCheck2["default"])(this, AdminHeader);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminHeader).apply(this, arguments));
  }

  (0, _createClass2["default"])(AdminHeader, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react["default"].createElement("div", {
        className: "admin_header_box"
      }, _react["default"].createElement("div", {
        className: "admin_logo_box"
      }, _react["default"].createElement("img", {
        src: _logo["default"]
      })), _react["default"].createElement("ul", {
        className: "admin_header_list"
      }, _react["default"].createElement("li", null, _react["default"].createElement("button", {
        className: "admin_header_button",
        style: {
          boxShadow: "0px 0px 4px ".concat(this.props.currentPage === 'admin-gallery' ? 'blue' : 'black')
        },
        onClick: function onClick() {
          return _this.props.routing('admin-gallery');
        }
      }, "Gallery")), _react["default"].createElement("li", null, _react["default"].createElement("button", {
        className: "admin_header_button",
        style: {
          boxShadow: "0px 0px 4px ".concat(this.props.currentPage === 'admin' ? 'blue' : 'black')
        },
        onClick: function onClick() {
          return _this.props.routing('admin');
        }
      }, "News")), _react["default"].createElement("li", null, _react["default"].createElement("button", {
        className: "admin_header_button",
        style: {
          boxShadow: "0px 0px 4px ".concat(this.props.currentPage === 'admin-seo' ? 'blue' : 'black')
        },
        onClick: function onClick() {
          return _this.props.routing('admin-seo');
        }
      }, "Seo")), _react["default"].createElement("li", null, _react["default"].createElement("button", {
        className: "admin_header_button",
        style: {
          boxShadow: "0px 0px 4px ".concat(this.props.currentPage === 'admin-partners' ? 'blue' : 'black')
        },
        onClick: function onClick() {
          return _this.props.routing('admin-partners');
        }
      }, "Partners")), _react["default"].createElement("li", null, _react["default"].createElement("button", {
        className: "admin_header_button",
        style: {
          boxShadow: "0px 0px 4px ".concat(this.props.currentPage === 'admin-mail' ? 'blue' : 'black')
        },
        onClick: function onClick() {
          return _this.props.routing('admin-mail');
        }
      }, "Mail"))));
    }
  }]);
  return AdminHeader;
}(_react.Component);

exports["default"] = AdminHeader;

/***/ }),

/***/ 907:
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

var _config = __webpack_require__(62);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AdminMail =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AdminMail, _Component);

  function AdminMail(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdminMail);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminMail).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, (0, _defineProperty2["default"])({}, e.target.id, e.target.value)));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function (e) {
      e.preventDefault(); // const formData = new FormData();
      // formData.append('subEmail', this.state.email)
      // formData.append('subName', this.state.subName)

      fetch("".concat(_config.apiUrl, "/subscribeMail"), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(_this.state)
      }).then(function (e) {
        return _this.setState({
          subEmail: '',
          subName: '',
          success: true
        });
      });
    });
    _this.state = {
      subEmail: '',
      subName: '',
      deletionDate: null,
      success: false
    };
    return _this;
  }

  (0, _createClass2["default"])(AdminMail, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "admin"
      }, _react["default"].createElement("form", {
        action: "",
        onSubmit: this.onSubmit
      }, this.state.success && _react["default"].createElement("div", {
        style: {
          color: 'green'
        }
      }, _react["default"].createElement("h1", null, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!")), _react["default"].createElement("div", {
        className: "admin_input_line"
      }, _react["default"].createElement("h2", null, "Email"), _react["default"].createElement("input", {
        className: "admin_gallary_input",
        type: "email",
        id: "subEmail",
        required: true,
        value: this.state.subEmail,
        onChange: this.onChange
      })), _react["default"].createElement("div", {
        className: "admin_input_line"
      }, _react["default"].createElement("h2", null, "\u0418\u043C\u044F"), _react["default"].createElement("input", {
        className: "admin_gallary_input",
        type: "text",
        id: "subName",
        required: true,
        value: this.state.subName,
        onChange: this.onChange
      })), _react["default"].createElement("button", {
        className: "action_button"
      }, "Click")));
    }
  }]);
  return AdminMail;
}(_react.Component);

exports["default"] = AdminMail;

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(63));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(52));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(64));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(15));

var _createClass2 = _interopRequireDefault(__webpack_require__(16));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(17));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(18));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(33));

var _inherits2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRedux = __webpack_require__(26);

var _redux = __webpack_require__(51);

var _partnersActions = __webpack_require__(318);

var _reactRouterDom = __webpack_require__(50);

var _auth = __webpack_require__(882);

var _localStorage = _interopRequireDefault(__webpack_require__(171));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addPartner = _partnersActions.partnersActions.addPartner;
var getPartners = _partnersActions.partnersActions.getPartners;
var deletePartner = _partnersActions.partnersActions.deletePartner;
var editPartner = _partnersActions.partnersActions.editPartner;

var toolbarConfig = __webpack_require__(888);

var checkToken = _auth.authServices.checkToken;
var RichTextEditor;

if (true) {
  RichTextEditor = __webpack_require__(886)["default"];
}

var initialState = {
  post: {
    admin_partners_company: '',
    admin_partners_description: RichTextEditor ? RichTextEditor.createEmptyValue() : "",
    admin_partners_url: '',
    admin_partners_videoName: ''
  },
  postRu: {
    admin_partners_company: '',
    admin_partners_description: RichTextEditor ? RichTextEditor.createEmptyValue() : "",
    admin_partners_videoName: ''
  },
  images: {
    mainImage: {
      src: '',
      alt: '',
      title: ''
    },
    additionalImages: []
  },
  isRu: false,
  isAuthed: true,
  errors: '',
  edditing: false,
  selectedPartner: '',
  successMessage: '',
  admin_partners_mainImage: 'Файл не выбран',
  admin_partners_additionalImages: 'Файлы не выбраны',
  admin_partners_video: 'Файл не выбран',
  hasVideo: true
};

var AdminPartners =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AdminPartners, _Component);

  function AdminPartners(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdminPartners);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminPartners).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setError", function (err) {
      _this.setState(_objectSpread({}, _this.state, {
        errors: err
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_filterEditorContent", function () {
      var editorData = _this.state.post.admin_partners_description.toString('html').trim();

      var filteredData = editorData.replace(/<p>/g, '').replace(/<br>/g, '').replace(/<\/p>/g, '').trim();
      return filteredData.length;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEdit", function () {
      var formData = _this.appendFormData();

      if (formData) {
        var mainImage = _this.state.images.mainImage;
        var additionalImages = _this.state.images.additionalImages;

        if (additionalImages.length > 9999999) {
          _this.setState({
            errors: 'Ошибка: Допускается не больше 16 фото'
          });

          return;
        }

        if (additionalImages.length < 6) {
          _this.setState({
            errors: 'Ошибка: Допускается не меньше 6 фото'
          });

          return;
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = additionalImages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var file = _step.value;
            formData.append('additionalImages', JSON.stringify(file));
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

        formData.append('mainImage', JSON.stringify(mainImage));

        _this.props.editPartner(_this.state.selectedPartner, formData);
      } else return;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEditorChange", function (admin_partners_description) {
      !_this.state.isRu ? _this.setState(_objectSpread({}, _this.state, {
        post: _objectSpread({}, _this.state.post, {
          admin_partners_description: admin_partners_description
        })
      })) : _this.setState(_objectSpread({}, _this.state, {
        postRu: _objectSpread({}, _this.state.postRu, {
          admin_partners_description: admin_partners_description
        })
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      !_this.state.isRu ? _this.setState(_objectSpread({}, _this.state, {
        post: _objectSpread({}, _this.state.post, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      })) : _this.setState(_objectSpread({}, _this.state, {
        postRu: _objectSpread({}, _this.state.postRu, (0, _defineProperty2["default"])({}, e.target.id, e.target.value))
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectPartner", function (e) {
      var partner = _this.props.partners.partners.filter(function (partner) {
        return partner._id === e.target.value;
      })[0];

      var postRu = {};

      if (partner.hasRu) {
        postRu = {
          admin_partners_company: partner.companyRu ? partner.companyRu : '',
          admin_partners_description: RichTextEditor ? RichTextEditor.createValueFromString(partner.descriptionRu, 'html') : "",
          admin_partners_videoName: partner.videoNameRu ? partner.videoNameRu : ''
        };
      }

      _this.setState(_objectSpread({}, _this.state, {
        post: {
          admin_partners_company: partner.company,
          admin_partners_description: RichTextEditor ? RichTextEditor.createValueFromString(partner.descriptionRu, 'html') : "",
          admin_partners_url: partner.url,
          admin_partners_videoName: partner.videoName
        },
        images: {
          mainImage: partner.mainImage,
          additionalImages: partner.additionalImages
        },
        postRu: _objectSpread({}, postRu, {
          admin_partners_description: partner.hasRu ? RichTextEditor ? RichTextEditor.createValueFromString(partner.descriptionRu, 'html') : "" : RichTextEditor ? RichTextEditor.createEmptyValue() : ""
        }),
        isRu: false,
        edditing: true,
        selectedPartner: partner._id,
        hasVideo: partner.video ? true : false
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "appendFormData", function () {
      var asFormData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.setState({
        errors: ''
      });

      var formData = new FormData();

      for (var i in _this.state.post) {
        if (i !== 'admin_partners_description' && i !== 'admin_partners_videoName') {
          if (_this.state.post[i].length < 1) {
            _this.setState({
              errors: 'Ошибка: Заполните все поля'
            });

            return;
          }

          var formatedData = i.split('_')[2];
          formData.append(formatedData, _this.state.post[i].trim());
        } else if (i === 'admin_partners_videoName') {
          // if(this.state.hasVideo && this.state.post[i] < 1){
          //   this.setState({errors: 'Ошибка: Заполните все поля' })
          //   return
          // } else {
          formData.append('videoNameRu', _this.state.postRu[i]); // }
        } else {
          if (_this._filterEditorContent() < 1) {
            _this.setError('Ошибка: заполните поле "описание"');

            return;
          }

          formData.append('description', _this.state.post[i].toString('html').trim());
        }
      }

      if (asFormData) return formData;
      var data = {};
      formData.forEach(function (value, key) {
        return data[key] = value;
      });
      return data;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmitRu", function (e) {
      e.preventDefault();

      if (_localStorage["default"].get('token') !== null) {
        var formData = _this.appendRu();

        if (formData) {
          _this.props.editPartner(_this.state.selectedPartner, formData);
        }

        return;
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "appendRu", function () {
      _this.setState({
        errors: ''
      });

      var formData = new FormData();

      for (var i in _this.state.postRu) {
        if (i !== 'admin_partners_description' && i !== 'admin_partners_videoName') {
          if (_this.state.postRu[i].length < 1) {
            _this.setState({
              errors: 'Ошибка: Заполните все поля'
            });

            return;
          }

          var formatedData = i.split('_')[2] + 'Ru';
          formData.append(formatedData, _this.state.postRu[i].trim());
        } else if (i === 'admin_partners_videoName') {
          // if(this.state.hasVideo && this.state.postRu[i] < 1){
          //   this.setState({errors: 'Ошибка: Заполните все поля' })
          //   return
          // } else {
          formData.append('videoNameRu', _this.state.postRu[i]); // }
        } else {
          if (_this._filterEditorContent() < 1) {
            _this.setState({
              errors: 'Ошибка: Заполните все поля'
            });

            return;
          }

          formData.append('descriptionRu', _this.state.postRu[i].toString('html').trim());
        }
      }

      formData.append('hasRu', true);

      _this.setState(_objectSpread({}, _this.state, {
        errors: ''
      }));

      return formData;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();

      if (_localStorage["default"].get('token') !== null) {
        var formData = _this.appendFormData();

        if (!formData) return;
        var mainImage = _this.state.images.mainImage;
        var additionalImages = _this.state.images.additionalImages;

        if (additionalImages.length > 99999) {
          _this.setState({
            errors: 'Ошибка: Допускается не больше 16 фото'
          });

          return;
        }

        if (additionalImages.length < 6) {
          _this.setState({
            errors: 'Ошибка: Допускается не меньше 6 фото'
          });

          return;
        } // formData.append('additionalImages', additionalImages);


        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = additionalImages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var file = _step2.value;
            formData.append('additionalImages', JSON.stringify(file));
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

        var video = document.getElementById('admin_partners_video').files[0];
        formData.append('mainImage', JSON.stringify(mainImage));
        formData.append('video', video);

        _this.props.addPartner(formData);
      } else {
        _this.setState({
          isAuthed: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDelete", function () {
      _this.props.deletePartner(_this.state.selectedPartner);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "readFile", function (file) {
      return new Promise(function (res, rej) {
        var reader = new FileReader();

        reader.onload = function () {
          res(reader.result);
        };

        reader.readAsDataURL(file);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showPreview",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id, multiple) {
        var file, files, preview;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = document.getElementById(id);
                files = file.files;
                preview = document.getElementById(id + '_preview');

                if (!(files[0] && !multiple)) {
                  _context2.next = 16;
                  break;
                }

                _context2.t0 = _this;
                _context2.t1 = _objectSpread;
                _context2.t2 = {};
                _context2.t3 = _this.state.images;
                _context2.next = 10;
                return _this.readFile(files[0]);

              case 10:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  src: _context2.t4,
                  alt: '',
                  title: ''
                };
                _context2.t6 = {
                  mainImage: _context2.t5
                };
                _context2.t7 = (0, _context2.t1)(_context2.t2, _context2.t3, _context2.t6);
                _context2.t8 = {
                  images: _context2.t7
                };

                _context2.t0.setState.call(_context2.t0, _context2.t8);

              case 16:
                if (multiple) {
                  Promise.all((0, _toConsumableArray2["default"])(files).map(
                  /*#__PURE__*/
                  function () {
                    var _ref2 = (0, _asyncToGenerator2["default"])(
                    /*#__PURE__*/
                    _regenerator["default"].mark(function _callee(file) {
                      return _regenerator["default"].wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return _this.readFile(file);

                            case 2:
                              _context.t0 = _context.sent;
                              return _context.abrupt("return", {
                                src: _context.t0,
                                alt: '',
                                title: ''
                              });

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }())).then(function (res) {
                    _this.setState({
                      images: _objectSpread({}, _this.state.images, {
                        additionalImages: res
                      })
                    });
                  });
                }

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeMainImgProps", function (e, type) {
      _this.setState({
        images: _objectSpread({}, _this.state.images, {
          mainImage: _objectSpread({}, _this.state.images.mainImage, (0, _defineProperty2["default"])({}, type, e.target.value))
        })
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeImgProps", function (e, index, type) {
      _this.setState({
        images: _objectSpread({}, _this.state.images, {
          additionalImages: _this.state.images.additionalImages.map(function (file, i) {
            return i === index ? _objectSpread({}, file, (0, _defineProperty2["default"])({}, type, e.target.value)) : file;
          })
        })
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getFiles", function (e) {
      var id = e.target.id;
      var file = document.getElementById(id);
      var multiple = file.multiple;

      _this.showPreview(id, multiple);

      var files = file.files;

      if (files.length > 0) {
        if (multiple) {
          _this.setState({
            admin_partners_additionalImages: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439: ".concat(files.length, " ")
          });
        } else {
          _this.setState((0, _defineProperty2["default"])({}, e.target.id, "\u0424\u0430\u0439\u043B \u0432\u044B\u0431\u0440\u0430\u043D"));
        }
      } else {
        _this.setState((0, _defineProperty2["default"])({}, e.target.id, 'Файл не выбран'));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeLang", function (e) {
      return _this.setState({
        isRu: e.target.value === 'true' ? true : false
      });
    });
    _this.state = initialState;
    return _this;
  }

  (0, _createClass2["default"])(AdminPartners, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);

      if (!nextProps.partners.isLoading) {
        if (!nextProps.partners.error) {
          this.setState(initialState);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      checkToken()["catch"](function (err) {
        _this2.setState({
          isAuthed: false
        });

        return;
      });
      this.props.getPartners();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.isAuthed) {
        var partners = this.props.partners;
        return _react["default"].createElement("div", {
          className: "admin_partners"
        }, partners.error ? _react["default"].createElement("ul", null, partners.error.message.split(',').map(function (err) {
          return _react["default"].createElement("li", null, _react["default"].createElement("h3", {
            style: {
              color: 'red'
            }
          }, err));
        })) : _react["default"].createElement("h3", {
          style: {
            color: 'green'
          }
        }, this.state.successMessage), this.state.errors ? _react["default"].createElement("h3", {
          style: {
            color: 'red'
          }
        }, this.state.errors) : null, _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("select", {
          className: "admin_select",
          id: "admin_select",
          onChange: this.selectPartner
        }, _react["default"].createElement("option", {
          id: "default_select",
          disabled: true,
          selected: this.state.selectedPartner ? false : true
        }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E"), partners.partners && partners.partners.map(function (partner) {
          return _react["default"].createElement("option", {
            value: partner._id,
            key: partner._id
          }, partner.company);
        }))), this.state.selectedPartner && _react["default"].createElement("label", {
          style: {
            height: '50px',
            position: 'absolute',
            top: '5vw'
          },
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("select", {
          style: {
            height: '50px'
          },
          id: "admin_language_select",
          onChange: this.onChangeLang
        }, _react["default"].createElement("option", {
          value: false,
          selected: !this.state.isRu
        }, "UA"), _react["default"].createElement("option", {
          value: true,
          selected: this.state.isRu
        }, "RU"))), _react["default"].createElement("button", {
          className: "action_button",
          type: "button",
          onClick: function onClick() {
            return _this3.setState(initialState);
          }
        }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), _react["default"].createElement("form", {
          onSubmit: this.onSubmit
        }, _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438(Company)"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_partners_company",
          required: true,
          value: this.state.isRu ? this.state.postRu.admin_partners_company : this.state.post.admin_partners_company,
          onChange: this.onChange
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h3", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435(Description)"), RichTextEditor ? _react["default"].createElement(RichTextEditor, {
          className: "admin_text_aditor",
          value: this.state.isRu ? this.state.postRu.admin_partners_description : this.state.post.admin_partners_description,
          onChange: this.onEditorChange,
          toolbarConfig: toolbarConfig
        }) : null), this.state.isRu ? null : _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "Url"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_partners_url",
          required: true,
          value: this.state.post.admin_partners_url,
          onChange: this.onChange
        })), this.state.images.mainImage && _react["default"].createElement("div", null, _react["default"].createElement("img", {
          src: this.state.images.mainImage.src,
          style: {
            width: '50px',
            height: '50px'
          }
        }), _react["default"].createElement("br", null), _react["default"].createElement("label", null, "Alt"), _react["default"].createElement("br", null), _react["default"].createElement("input", {
          type: "text",
          value: this.state.images.mainImage.alt,
          onChange: function onChange(e) {
            return _this3.onChangeMainImgProps(e, 'alt');
          }
        }), _react["default"].createElement("br", null), _react["default"].createElement("label", null, "Title"), _react["default"].createElement("br", null), _react["default"].createElement("input", {
          type: "text",
          value: this.state.images.mainImage.title,
          onChange: function onChange(e) {
            return _this3.onChangeMainImgProps(e, 'title');
          }
        })), this.state.isRu ? null : _react["default"].createElement("label", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), _react["default"].createElement("span", {
          className: "admin_custom_file_selector"
        }, this.state.admin_partners_mainImage), _react["default"].createElement("input", {
          className: "admin_file_selector",
          type: "file",
          accept: "image/*",
          id: "admin_partners_mainImage",
          onChange: this.getFiles,
          required: true
        })), this.state.images.additionalImages && this.state.images.additionalImages.map(function (file, i) {
          return _react["default"].createElement("div", {
            style: {
              display: 'inline-block',
              overflowX: 'scroll'
            }
          }, _react["default"].createElement("img", {
            src: file.src,
            style: {
              width: '75px',
              height: '75px'
            }
          }), " ", _react["default"].createElement("br", null), _react["default"].createElement("input", {
            type: "text",
            value: _this3.state.images.additionalImages[i].alt,
            onChange: function onChange(e) {
              return _this3.onChangeImgProps(e, i, 'alt');
            }
          }), _react["default"].createElement("br", null), _react["default"].createElement("input", {
            type: "text",
            value: _this3.state.images.additionalImages[i].title,
            onChange: function onChange(e) {
              return _this3.onChangeImgProps(e, i, 'title');
            }
          }), _react["default"].createElement("br", null));
        }), this.state.isRu ? null : _react["default"].createElement("label", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"), _react["default"].createElement("span", {
          className: "admin_custom_file_selector"
        }, this.state.admin_partners_additionalImages), _react["default"].createElement("input", {
          className: "admin_file_selector",
          type: "file",
          accept: "image/*",
          id: "admin_partners_additionalImages",
          onChange: this.getFiles,
          multiple: true,
          required: true
        })), this.state.isRu || this.state.selectedPartner ? null : _react["default"].createElement("label", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u0412\u0438\u0434\u0435\u043E"), _react["default"].createElement("span", {
          className: "admin_custom_file_selector"
        }, this.state.admin_partners_video), _react["default"].createElement("input", {
          className: "admin_file_selector",
          type: "file",
          accept: "video/mp4",
          id: "admin_partners_video",
          onChange: this.getFiles
        })), this.state.hasVideo ? _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E"), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          id: "admin_partners_videoName",
          value: this.state.isRu ? this.state.postRu.admin_partners_videoName : this.state.post.admin_partners_videoName,
          onChange: this.onChange
        })) : null, _react["default"].createElement("div", {
          className: "admin_action_box"
        }, !this.state.edditing, !this.state.edditing && !this.props.partners.isLoading && _react["default"].createElement("button", {
          className: "action_button",
          type: "submit"
        }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))), _react["default"].createElement("div", {
          className: "admin_action_box"
        }, this.state.edditing && this.state.isRu && _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onSubmitRu
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), this.state.selectedPartner && !this.state.isRu && _react["default"].createElement("button", {
          className: "action_button",
          onClick: this.onEdit
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), this.state.edditing && _react["default"].createElement("button", {
          className: "action_button",
          type: "button",
          onClick: this.onDelete
        }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
      } else {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/login"
        });
      }
    }
  }]);
  return AdminPartners;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    partners: state.partners
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addPartner: addPartner,
    getPartners: getPartners,
    deletePartner: deletePartner,
    editPartner: editPartner
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminPartners);

exports["default"] = _default;

/***/ }),

/***/ 909:
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

var _reactRedux = __webpack_require__(26);

var _redux = __webpack_require__(51);

var _seoActions = __webpack_require__(40);

var _auth = __webpack_require__(882);

var _reactRouterDom = __webpack_require__(50);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var checkToken = _auth.authServices.checkToken;
var getSeoPages = _seoActions.seoActions.getSeoPages;
var editSeoPage = _seoActions.seoActions.editSeoPage;
var initialState = {
  seoData: {
    title: '',
    description: '',
    pageType: 'website',
    keywords: '',
    titleRu: '',
    descriptionRu: '',
    keywordsRu: ''
  },
  selectedPageId: '',
  isAuthed: true
};

var SeoPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SeoPanel, _Component);

  function SeoPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SeoPanel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SeoPanel).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkAuthorization", function () {
      checkToken()["catch"](function (err) {
        _this.setState({
          isAuthed: false
        });

        return;
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePageSelect", function (event) {
      var seoPages = _this.props.getResult && _this.props.getResult.result || null;
      var selectedItem = seoPages.find(function (page) {
        return page._id === event.target.value;
      });

      if (selectedItem) {
        _this.setState({
          selectedPageId: event.target.value,
          seoData: {
            title: selectedItem.title,
            description: selectedItem.description,
            pageType: selectedItem.pageType,
            keywords: selectedItem.keywords,
            titleRu: selectedItem.titleRu || '',
            descriptionRu: selectedItem.descriptionRu || '',
            keywordsRu: selectedItem.keywordsRu || ''
          }
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
      event.target.options[0].style = "display: none";
      document.getElementById('status_message').style = "display: none";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      _this.setState({
        seoData: _objectSpread({}, _this.state.seoData, (0, _defineProperty2["default"])({}, event.target.name, event.target.value))
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      document.getElementById('status_message').style = "display: block";

      _this.props.editSeoPage(_this.state.selectedPageId, _this.state.seoData).then(function () {
        return _this.props.getSeoPages();
      });
    });
    _this.state = initialState;
    return _this;
  }

  (0, _createClass2["default"])(SeoPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkAuthorization();
      this.props.getSeoPages();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.checkAuthorization();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isAuthed) {
        var seoPages = this.props.getResult && this.props.getResult.result || null;
        var pagesOptions;

        if (seoPages) {
          pagesOptions = seoPages.map(function (seoPage) {
            return _react["default"].createElement("option", {
              key: seoPage._id,
              value: seoPage._id
            }, "/", seoPage.url, " : ", seoPage.title);
          });
        }

        return _react["default"].createElement("div", {
          className: "admin_seo"
        }, _react["default"].createElement("h1", null, "SEO-\u043F\u0430\u043D\u0435\u043B\u044C"), _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:"), _react["default"].createElement("select", {
          className: "admin_select",
          value: this.state.selectedPageId,
          onChange: this.handlePageSelect,
          onClick: this.handleClick
        }, _react["default"].createElement("option", {
          value: "",
          id: "pages_placeholder",
          disabled: true
        }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443..."), pagesOptions)), _react["default"].createElement("form", {
          onSubmit: this.handleSubmit
        }, _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (title): "), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          name: "title",
          value: this.state.seoData.title,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (description): "), _react["default"].createElement("textarea", {
          className: "admin_seo_description",
          name: "description",
          value: this.state.seoData.description,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (keywords): "), _react["default"].createElement("textarea", {
          className: "admin_seo_description",
          name: "keywords",
          value: this.state.seoData.keywords,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (RU) (titleRu): "), _react["default"].createElement("input", {
          className: "admin_gallary_input",
          type: "text",
          name: "titleRu",
          value: this.state.seoData.titleRu,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (RU) (descriptionRu): "), _react["default"].createElement("textarea", {
          className: "admin_seo_description",
          name: "descriptionRu",
          value: this.state.seoData.descriptionRu,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("div", {
          className: "admin_input_line"
        }, _react["default"].createElement("h2", null, "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (RU) (keywordsRu): "), _react["default"].createElement("textarea", {
          className: "admin_seo_description",
          name: "keywordsRu",
          value: this.state.seoData.keywordsRu,
          onChange: this.handleChange,
          required: true
        })), _react["default"].createElement("label", {
          className: "admin_seo_page_selector"
        }, _react["default"].createElement("h2", null, "\u0422\u0438\u043F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (og:type): "), _react["default"].createElement("select", {
          className: "admin_select",
          name: "pageType",
          value: this.state.seoData.pageType,
          onChange: this.handleChange
        }, _react["default"].createElement("option", {
          value: "website"
        }, "website"), _react["default"].createElement("option", {
          value: "article"
        }, "article"))), _react["default"].createElement("div", {
          className: "admin_action_box"
        }, _react["default"].createElement("button", {
          className: "action_button",
          type: "submit"
        }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))), _react["default"].createElement("p", {
          id: "status_message"
        }, _react["default"].createElement("b", {
          style: {
            color: this.props.editResult && this.props.editResult.success ? "green" : "red"
          }
        }, this.props.editResult && this.props.editResult.message)));
      } else {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/login"
        });
      }
    }
  }]);
  return SeoPanel;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    getResult: state.seo.getSeoResult,
    editResult: state.seo.editResult
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getSeoPages: getSeoPages,
    editSeoPage: editSeoPage
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SeoPanel);

exports["default"] = _default;

/***/ }),

/***/ 910:
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

var _equinox_logo = _interopRequireDefault(__webpack_require__(911));

var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(_default, _Component);

  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "admin_equinox_rights"
      }, _react["default"].createElement("p", null, "\u0420\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u044E Equinox"), _react["default"].createElement("img", {
        src: _equinox_logo["default"]
      }));
    }
  }]);
  return _default;
}(_react.Component);

exports["default"] = _default;

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "/static/media/equinox_logo.png";

/***/ })

});
//# sourceMappingURL=4.js.map