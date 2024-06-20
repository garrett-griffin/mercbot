"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class2, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _dec32, _dec33, _dec34, _dec35, _class3, _descriptor22, _descriptor23, _descriptor24, _dec36, _dec37, _dec38, _dec39, _class4, _descriptor25, _descriptor26;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var _require2 = require('./common'),
  DeliveryCost = _require2.DeliveryCost,
  Location = _require2.Location,
  Producer = _require2.Producer,
  Inventory = _require2.Inventory,
  BuildingType = _require2.BuildingType,
  BuildingUpgradeType = _require2.BuildingUpgradeType,
  InventoryFlow = _require2.InventoryFlow,
  Operation = _require2.Operation;
var Building = (_dec = Expose(), _dec2 = Type(function () {
  return BuildingConstruction;
}), _dec3 = Expose(), _dec4 = Type(function () {
  return DeliveryCost;
}), _dec5 = Expose(), _dec6 = Expose(), _dec7 = Type(function () {
  return Location;
}), _dec8 = Expose(), _dec9 = Expose(), _dec10 = Expose(), _dec11 = Type(function () {
  return Producer;
}), _dec12 = Expose(), _dec13 = Expose(), _dec14 = Expose(), _dec15 = Type(function () {
  return BuildingStorage;
}), _dec16 = Expose(), _dec17 = Type(function () {
  return Location;
}), _dec18 = Expose(), _dec19 = Expose(), _dec20 = Type(function () {
  return BuildingType;
}), _dec21 = Expose(), _dec22 = Type(function () {
  return BuildingUpgradeType;
}), _dec23 = Expose(), (_class = /*#__PURE__*/function () {
  function Building() {
    _initializerDefineProperty(this, "capacity", _descriptor, this);
    _initializerDefineProperty(this, "construction", _descriptor2, this);
    _initializerDefineProperty(this, "delivery_cost", _descriptor3, this);
    _initializerDefineProperty(this, "id", _descriptor4, this);
    _initializerDefineProperty(this, "land", _descriptor5, this);
    _initializerDefineProperty(this, "name", _descriptor6, this);
    _initializerDefineProperty(this, "owner_id", _descriptor7, this);
    _initializerDefineProperty(this, "producer", _descriptor8, this);
    _initializerDefineProperty(this, "provider_id", _descriptor9, this);
    _initializerDefineProperty(this, "size", _descriptor10, this);
    _initializerDefineProperty(this, "storage", _descriptor11, this);
    _initializerDefineProperty(this, "sublocation", _descriptor12, this);
    _initializerDefineProperty(this, "town_id", _descriptor13, this);
    _initializerDefineProperty(this, "type", _descriptor14, this);
    _initializerDefineProperty(this, "upgrades", _descriptor15, this);
  }
  Building.modelValidate = function modelValidate(data) {
    return plainToClass(Building, data);
  };
  return Building;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "capacity", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "construction", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "delivery_cost", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "id", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "land", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "owner_id", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "producer", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "provider_id", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "size", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "sublocation", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "town_id", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "upgrades", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var BuildingConstruction = (_dec24 = Type(function () {
  return Inventory;
}), _dec25 = Expose(), _dec26 = Expose(), _dec27 = Expose(), _dec28 = Expose(), _dec29 = Expose(), _dec30 = Type(function () {
  return BuildingUpgradeType;
}), _dec31 = Expose(), (_class2 = function BuildingConstruction() {
  _initializerDefineProperty(this, "inventory", _descriptor16, this);
  _initializerDefineProperty(this, "progress", _descriptor17, this);
  _initializerDefineProperty(this, "reference", _descriptor18, this);
  _initializerDefineProperty(this, "stage", _descriptor19, this);
  _initializerDefineProperty(this, "time", _descriptor20, this);
  _initializerDefineProperty(this, "upgrade_type", _descriptor21, this);
}, (_descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "inventory", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "reference", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "stage", [_dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "upgrade_type", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var BuildingStorage = (_dec32 = Type(function () {
  return Inventory;
}), _dec33 = Expose(), _dec34 = Expose(), _dec35 = Expose(), (_class3 = function BuildingStorage() {
  _initializerDefineProperty(this, "inventory", _descriptor22, this);
  _initializerDefineProperty(this, "operations", _descriptor23, this);
  _initializerDefineProperty(this, "reference", _descriptor24, this);
}, (_descriptor22 = _applyDecoratedDescriptor(_class3.prototype, "inventory", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class3.prototype, "operations", [_dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class3.prototype, "reference", [_dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var BuildingOperation = (_dec36 = Type(function () {
  return InventoryFlow;
}), _dec37 = Expose(), _dec38 = Type(function () {
  return Operation;
}), _dec39 = Expose(), (_class4 = function BuildingOperation() {
  _initializerDefineProperty(this, "total_flow", _descriptor25, this);
  _initializerDefineProperty(this, "operations", _descriptor26, this);
}, (_descriptor25 = _applyDecoratedDescriptor(_class4.prototype, "total_flow", [_dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class4.prototype, "operations", [_dec38, _dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
module.exports = {
  Building: Building,
  BuildingConstruction: BuildingConstruction,
  BuildingStorage: BuildingStorage,
  BuildingOperation: BuildingOperation
};