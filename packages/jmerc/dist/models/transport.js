"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec5, _dec6, _dec7, _class2, _descriptor5, _descriptor6, _descriptor7;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var Transport = (_dec = Expose(), _dec2 = Expose(), _dec3 = Expose(), _dec4 = Expose(), (_class = /*#__PURE__*/function () {
  function Transport() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "name", _descriptor2, this);
    _initializerDefineProperty(this, "type", _descriptor3, this);
    _initializerDefineProperty(this, "capacity", _descriptor4, this);
  }
  // Add other properties as needed
  Transport.modelValidate = function modelValidate(data) {
    return plainToClass(Transport, data);
  };
  return Transport;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "capacity", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var TransportRoute = (_dec5 = Expose(), _dec6 = Expose(), _dec7 = Expose(), (_class2 = /*#__PURE__*/function () {
  function TransportRoute() {
    _initializerDefineProperty(this, "id", _descriptor5, this);
    _initializerDefineProperty(this, "name", _descriptor6, this);
    _initializerDefineProperty(this, "stops", _descriptor7, this);
  }
  // Add other properties as needed
  TransportRoute.modelValidate = function modelValidate(data) {
    return plainToClass(TransportRoute, data);
  };
  return TransportRoute;
}(), (_descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stops", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
module.exports = {
  Transport: Transport,
  TransportRoute: TransportRoute
};