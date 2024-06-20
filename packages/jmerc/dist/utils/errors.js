"use strict";

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var TurnInProgressException = /*#__PURE__*/function (_Error) {
  function TurnInProgressException(message) {
    var _this;
    _this = _Error.call(this, message) || this;
    _this.name = 'TurnInProgressException';
    return _this;
  }
  _inheritsLoose(TurnInProgressException, _Error);
  return TurnInProgressException;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var BuySellOrderFailedException = /*#__PURE__*/function (_Error2) {
  function BuySellOrderFailedException(message) {
    var _this2;
    _this2 = _Error2.call(this, message) || this;
    _this2.name = 'BuySellOrderFailedException';
    return _this2;
  }
  _inheritsLoose(BuySellOrderFailedException, _Error2);
  return BuySellOrderFailedException;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var SetManagerFailedException = /*#__PURE__*/function (_Error3) {
  function SetManagerFailedException(message) {
    var _this3;
    _this3 = _Error3.call(this, message) || this;
    _this3.name = 'SetManagerFailedException';
    return _this3;
  }
  _inheritsLoose(SetManagerFailedException, _Error3);
  return SetManagerFailedException;
}( /*#__PURE__*/_wrapNativeSuper(Error));
module.exports = {
  TurnInProgressException: TurnInProgressException,
  BuySellOrderFailedException: BuySellOrderFailedException,
  SetManagerFailedException: SetManagerFailedException
};