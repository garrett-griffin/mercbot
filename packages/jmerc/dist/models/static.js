"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec5, _dec6, _dec7, _dec8, _class2, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec9, _dec10, _dec11, _dec12, _class3, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _dec13, _dec14, _dec15, _class4, _descriptor13, _descriptor14, _descriptor15;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var BuildingType = (_dec = Expose(), _dec2 = Expose(), _dec3 = Expose(), _dec4 = Expose(), (_class = /*#__PURE__*/function () {
  function BuildingType() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "name", _descriptor2, this);
    _initializerDefineProperty(this, "description", _descriptor3, this);
    _initializerDefineProperty(this, "category", _descriptor4, this);
  }
  // Add other properties as needed
  BuildingType.modelValidate = function modelValidate(data) {
    return plainToClass(BuildingType, data);
  };
  return BuildingType;
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
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "category", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var ItemClass = (_dec5 = Expose(), _dec6 = Expose(), _dec7 = Expose(), _dec8 = Expose(), (_class2 = /*#__PURE__*/function () {
  function ItemClass() {
    _initializerDefineProperty(this, "id", _descriptor5, this);
    _initializerDefineProperty(this, "name", _descriptor6, this);
    _initializerDefineProperty(this, "description", _descriptor7, this);
    _initializerDefineProperty(this, "category", _descriptor8, this);
  }
  // Add other properties as needed
  ItemClass.modelValidate = function modelValidate(data) {
    return plainToClass(ItemClass, data);
  };
  return ItemClass;
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
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var RecipeClass = (_dec9 = Expose(), _dec10 = Expose(), _dec11 = Expose(), _dec12 = Expose(), (_class3 = /*#__PURE__*/function () {
  function RecipeClass() {
    _initializerDefineProperty(this, "id", _descriptor9, this);
    _initializerDefineProperty(this, "name", _descriptor10, this);
    _initializerDefineProperty(this, "inputs", _descriptor11, this);
    _initializerDefineProperty(this, "outputs", _descriptor12, this);
  }
  // Add other properties as needed
  RecipeClass.modelValidate = function modelValidate(data) {
    return plainToClass(RecipeClass, data);
  };
  return RecipeClass;
}(), (_descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "id", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "name", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "inputs", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "outputs", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var TransportType = (_dec13 = Expose(), _dec14 = Expose(), _dec15 = Expose(), (_class4 = /*#__PURE__*/function () {
  function TransportType() {
    _initializerDefineProperty(this, "id", _descriptor13, this);
    _initializerDefineProperty(this, "name", _descriptor14, this);
    _initializerDefineProperty(this, "capacity", _descriptor15, this);
  }
  // Add other properties as needed
  TransportType.modelValidate = function modelValidate(data) {
    return plainToClass(TransportType, data);
  };
  return TransportType;
}(), (_descriptor13 = _applyDecoratedDescriptor(_class4.prototype, "id", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class4.prototype, "name", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class4.prototype, "capacity", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
module.exports = {
  BuildingType: BuildingType,
  ItemClass: ItemClass,
  RecipeClass: RecipeClass,
  TransportType: TransportType
};