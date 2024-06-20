"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _dec12, _dec13, _dec14, _dec15, _dec16, _class2, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _dec17, _dec18, _dec19, _class3, _descriptor14, _descriptor15, _descriptor16, _dec20, _dec21, _dec22, _class4, _descriptor17, _descriptor18;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var _require2 = require('./common'),
  Asset = _require2.Asset,
  BuildingType = _require2.BuildingType;
var Business = (_dec = Type(function () {
  return BusinessAccount;
}), _dec2 = Expose(), _dec3 = Expose(), _dec4 = Expose(), _dec5 = Type(function () {
  return BusinessBuilding;
}), _dec6 = Expose(), _dec7 = Expose(), _dec8 = Expose(), _dec9 = Expose(), _dec10 = Expose(), _dec11 = Expose(), (_class = /*#__PURE__*/function () {
  function Business() {
    _initializerDefineProperty(this, "account", _descriptor, this);
    _initializerDefineProperty(this, "account_id", _descriptor2, this);
    _initializerDefineProperty(this, "building_ids", _descriptor3, this);
    _initializerDefineProperty(this, "buildings", _descriptor4, this);
    _initializerDefineProperty(this, "contract_ids", _descriptor5, this);
    _initializerDefineProperty(this, "id", _descriptor6, this);
    _initializerDefineProperty(this, "name", _descriptor7, this);
    _initializerDefineProperty(this, "owner_id", _descriptor8, this);
    _initializerDefineProperty(this, "transport_ids", _descriptor9, this);
  }
  Business.modelValidate = function modelValidate(data) {
    return plainToClass(Business, data);
  };
  return Business;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "account", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "account_id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "building_ids", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "buildings", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "contract_ids", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "id", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "owner_id", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "transport_ids", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var BusinessAccount = (_dec12 = Expose(), _dec13 = Expose(), _dec14 = Expose(), _dec15 = Type(function () {
  return BusinessAccountAsset;
}), _dec16 = Expose(), (_class2 = function BusinessAccount() {
  _initializerDefineProperty(this, "id", _descriptor10, this);
  _initializerDefineProperty(this, "name", _descriptor11, this);
  _initializerDefineProperty(this, "owner_id", _descriptor12, this);
  _initializerDefineProperty(this, "assets", _descriptor13, this);
}, (_descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "owner_id", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "assets", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var BusinessAccountAsset = (_dec17 = Expose(), _dec18 = Expose(), _dec19 = Expose(), (_class3 = function BusinessAccountAsset() {
  _initializerDefineProperty(this, "balance", _descriptor14, this);
  _initializerDefineProperty(this, "reserved", _descriptor15, this);
  _initializerDefineProperty(this, "unit_cost", _descriptor16, this);
}, (_descriptor14 = _applyDecoratedDescriptor(_class3.prototype, "balance", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class3.prototype, "reserved", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class3.prototype, "unit_cost", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var BusinessBuilding = (_dec20 = Expose(), _dec21 = Type(function () {
  return BuildingType;
}), _dec22 = Expose(), (_class4 = function BusinessBuilding() {
  _initializerDefineProperty(this, "id", _descriptor17, this);
  _initializerDefineProperty(this, "type", _descriptor18, this);
}, (_descriptor17 = _applyDecoratedDescriptor(_class4.prototype, "id", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class4.prototype, "type", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
module.exports = {
  Business: Business,
  BusinessAccount: BusinessAccount,
  BusinessAccountAsset: BusinessAccountAsset,
  BusinessBuilding: BusinessBuilding
};