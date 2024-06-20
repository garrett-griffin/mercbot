"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec10, _dec11, _class3, _descriptor9, _descriptor10, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class4, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class5, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class6, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _dec33, _dec34, _class7, _descriptor31, _descriptor32, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class8, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _class9, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _class10, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _dec65, _dec66, _dec67, _class11, _descriptor61, _descriptor62, _descriptor63, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _class12, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _dec79, _dec80, _dec81, _dec82, _dec83, _class13, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _dec84, _dec85, _dec86, _class14, _descriptor77, _descriptor78, _descriptor79, _dec87, _dec88, _class15, _descriptor80, _descriptor81;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var Structure = (_dec = Expose(), _dec2 = Expose(), _dec3 = Expose(), _dec4 = Expose(), (_class = function Structure() {
  _initializerDefineProperty(this, "id", _descriptor, this);
  _initializerDefineProperty(this, "type", _descriptor2, this);
  _initializerDefineProperty(this, "resource", _descriptor3, this);
  _initializerDefineProperty(this, "tags", _descriptor4, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "resource", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tags", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var Tile = (_dec5 = Expose(), _dec6 = Expose(), _dec7 = Type(function () {
  return Structure;
}), _dec8 = Expose(), _dec9 = Expose(), (_class2 = function Tile() {
  _initializerDefineProperty(this, "id", _descriptor5, this);
  _initializerDefineProperty(this, "owner_id", _descriptor6, this);
  _initializerDefineProperty(this, "structure", _descriptor7, this);
  _initializerDefineProperty(this, "ask_price", _descriptor8, this);
}, (_descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "owner_id", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "structure", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ask_price", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var Location = (_dec10 = Expose(), _dec11 = Expose(), (_class3 = /*#__PURE__*/function () {
  function Location() {
    _initializerDefineProperty(this, "x", _descriptor9, this);
    _initializerDefineProperty(this, "y", _descriptor10, this);
  }
  Location.modelValidate = function modelValidate(data) {
    return plainToClass(Location, data);
  };
  return Location;
}(), (_descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "x", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "y", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var Inventory = (_dec12 = Type(function () {
  return InventoryAccount;
}), _dec13 = Expose(), _dec14 = Expose(), _dec15 = Expose(), _dec16 = Expose(), _dec17 = Expose(), (_class4 = /*#__PURE__*/function () {
  function Inventory() {
    _initializerDefineProperty(this, "account", _descriptor11, this);
    _initializerDefineProperty(this, "capacity", _descriptor12, this);
    _initializerDefineProperty(this, "managers", _descriptor13, this);
    _initializerDefineProperty(this, "previous_flows", _descriptor14, this);
    _initializerDefineProperty(this, "reserved", _descriptor15, this);
  }
  Inventory.modelValidate = function modelValidate(data) {
    return plainToClass(Inventory, data);
  };
  return _createClass(Inventory, [{
    key: "items",
    get: function get() {
      return this.account.assets;
    }
  }]);
}(), (_descriptor11 = _applyDecoratedDescriptor(_class4.prototype, "account", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class4.prototype, "capacity", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class4.prototype, "managers", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class4.prototype, "previous_flows", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class4.prototype, "reserved", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
var InventoryAccount = (_dec18 = Expose(), _dec19 = Expose(), _dec20 = Expose(), _dec21 = Expose(), _dec22 = Expose(), _dec23 = Expose(), (_class5 = /*#__PURE__*/function () {
  function InventoryAccount() {
    _initializerDefineProperty(this, "assets", _descriptor16, this);
    _initializerDefineProperty(this, "id", _descriptor17, this);
    _initializerDefineProperty(this, "master_id", _descriptor18, this);
    _initializerDefineProperty(this, "name", _descriptor19, this);
    _initializerDefineProperty(this, "owner_id", _descriptor20, this);
    _initializerDefineProperty(this, "sponsor_id", _descriptor21, this);
  }
  InventoryAccount.modelValidate = function modelValidate(data) {
    return plainToClass(InventoryAccount, data);
  };
  return InventoryAccount;
}(), (_descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "assets", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "id", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "master_id", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "name", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "owner_id", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class5.prototype, "sponsor_id", [_dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5));
var InventoryAccountAsset = (_dec24 = Expose(), _dec25 = Expose(), _dec26 = Expose(), _dec27 = Expose(), _dec28 = Expose(), _dec29 = Expose(), _dec30 = Expose(), _dec31 = Expose(), _dec32 = Expose(), (_class6 = /*#__PURE__*/function () {
  function InventoryAccountAsset() {
    _initializerDefineProperty(this, "balance", _descriptor22, this);
    _initializerDefineProperty(this, "capacity", _descriptor23, this);
    _initializerDefineProperty(this, "purchase", _descriptor24, this);
    _initializerDefineProperty(this, "purchase_price", _descriptor25, this);
    _initializerDefineProperty(this, "reserved", _descriptor26, this);
    _initializerDefineProperty(this, "reserved_capacity", _descriptor27, this);
    _initializerDefineProperty(this, "sale", _descriptor28, this);
    _initializerDefineProperty(this, "sale_price", _descriptor29, this);
    _initializerDefineProperty(this, "unit_cost", _descriptor30, this);
  }
  InventoryAccountAsset.modelValidate = function modelValidate(data) {
    return plainToClass(InventoryAccountAsset, data);
  };
  return _createClass(InventoryAccountAsset, [{
    key: "purchased",
    get: function get() {
      return this.purchase !== null;
    }
  }, {
    key: "sold",
    get: function get() {
      return this.sale !== null;
    }
  }, {
    key: "totalPurchase",
    get: function get() {
      return this.purchase * this.purchase_price;
    }
  }, {
    key: "totalSale",
    get: function get() {
      return this.sale * this.sale_price;
    }
  }, {
    key: "totalValue",
    get: function get() {
      return this.balance * this.unit_cost;
    }
  }]);
}(), (_descriptor22 = _applyDecoratedDescriptor(_class6.prototype, "balance", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class6.prototype, "capacity", [_dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class6.prototype, "purchase", [_dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class6.prototype, "purchase_price", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class6.prototype, "reserved", [_dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class6.prototype, "reserved_capacity", [_dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor28 = _applyDecoratedDescriptor(_class6.prototype, "sale", [_dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class6.prototype, "sale_price", [_dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor30 = _applyDecoratedDescriptor(_class6.prototype, "unit_cost", [_dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class6));
var DeliveryCost = (_dec33 = Expose(), _dec34 = Expose(), (_class7 = /*#__PURE__*/function () {
  function DeliveryCost() {
    _initializerDefineProperty(this, "land_distance", _descriptor31, this);
    _initializerDefineProperty(this, "ferry_fee", _descriptor32, this);
  }
  DeliveryCost.modelValidate = function modelValidate(data) {
    return plainToClass(DeliveryCost, data);
  };
  return DeliveryCost;
}(), (_descriptor31 = _applyDecoratedDescriptor(_class7.prototype, "land_distance", [_dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor32 = _applyDecoratedDescriptor(_class7.prototype, "ferry_fee", [_dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class7));
var InventoryManager = (_dec35 = Expose(), _dec36 = Expose(), _dec37 = Expose(), _dec38 = Expose(), _dec39 = Expose(), _dec40 = Expose(), (_class8 = /*#__PURE__*/function () {
  function InventoryManager() {
    _initializerDefineProperty(this, "buy_price", _descriptor33, this);
    _initializerDefineProperty(this, "buy_volume", _descriptor34, this);
    _initializerDefineProperty(this, "capacity", _descriptor35, this);
    _initializerDefineProperty(this, "max_holding", _descriptor36, this);
    _initializerDefineProperty(this, "sell_price", _descriptor37, this);
    _initializerDefineProperty(this, "sell_volume", _descriptor38, this);
  }
  var _proto = InventoryManager.prototype;
  _proto.modelDump = function modelDump() {
    return this;
  };
  InventoryManager.modelValidate = function modelValidate(data) {
    return plainToClass(InventoryManager, data);
  };
  return _createClass(InventoryManager, [{
    key: "buying",
    get: function get() {
      return this.buy_price !== null && this.buy_volume !== null;
    }
  }, {
    key: "maxBuyPrice",
    get: function get() {
      return this.buy_price * this.buy_volume;
    }
  }, {
    key: "maxSellPrice",
    get: function get() {
      return this.sell_price * this.sell_volume;
    }
  }, {
    key: "selling",
    get: function get() {
      return this.sell_price !== null && this.sell_volume !== null;
    }
  }]);
}(), (_descriptor33 = _applyDecoratedDescriptor(_class8.prototype, "buy_price", [_dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class8.prototype, "buy_volume", [_dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor35 = _applyDecoratedDescriptor(_class8.prototype, "capacity", [_dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor36 = _applyDecoratedDescriptor(_class8.prototype, "max_holding", [_dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor37 = _applyDecoratedDescriptor(_class8.prototype, "sell_price", [_dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor38 = _applyDecoratedDescriptor(_class8.prototype, "sell_volume", [_dec40], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class8));
var InventoryFlow = (_dec41 = Expose(), _dec42 = Expose(), _dec43 = Expose(), _dec44 = Expose(), _dec45 = Expose(), _dec46 = Expose(), _dec47 = Expose(), _dec48 = Expose(), _dec49 = Expose(), _dec50 = Expose(), _dec51 = Expose(), _dec52 = Expose(), (_class9 = /*#__PURE__*/function () {
  function InventoryFlow() {
    _initializerDefineProperty(this, "consumption", _descriptor39, this);
    _initializerDefineProperty(this, "expiration", _descriptor40, this);
    _initializerDefineProperty(this, "export", _descriptor41, this);
    _initializerDefineProperty(this, "imported", _descriptor42, this);
    _initializerDefineProperty(this, "production", _descriptor43, this);
    _initializerDefineProperty(this, "production_cost", _descriptor44, this);
    _initializerDefineProperty(this, "purchase", _descriptor45, this);
    _initializerDefineProperty(this, "purchase_cost", _descriptor46, this);
    _initializerDefineProperty(this, "resident", _descriptor47, this);
    _initializerDefineProperty(this, "sale", _descriptor48, this);
    _initializerDefineProperty(this, "sale_value", _descriptor49, this);
    _initializerDefineProperty(this, "shortfall", _descriptor50, this);
  }
  InventoryFlow.modelValidate = function modelValidate(data) {
    return plainToClass(InventoryFlow, data);
  };
  return InventoryFlow;
}(), (_descriptor39 = _applyDecoratedDescriptor(_class9.prototype, "consumption", [_dec41], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class9.prototype, "expiration", [_dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class9.prototype, "export", [_dec43], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class9.prototype, "imported", [_dec44], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor43 = _applyDecoratedDescriptor(_class9.prototype, "production", [_dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class9.prototype, "production_cost", [_dec46], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class9.prototype, "purchase", [_dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor46 = _applyDecoratedDescriptor(_class9.prototype, "purchase_cost", [_dec48], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class9.prototype, "resident", [_dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor48 = _applyDecoratedDescriptor(_class9.prototype, "sale", [_dec50], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor49 = _applyDecoratedDescriptor(_class9.prototype, "sale_value", [_dec51], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class9.prototype, "shortfall", [_dec52], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0.0;
  }
})), _class9));
var Operation = (_dec53 = Expose(), _dec54 = Expose(), _dec55 = Expose(), _dec56 = Expose(), _dec57 = Type(function () {
  return Recipe;
}), _dec58 = Expose(), _dec59 = Expose(), _dec60 = Expose(), _dec61 = Expose(), _dec62 = Type(function () {
  return DeliveryCost;
}), _dec63 = Expose(), _dec64 = Expose(), (_class10 = /*#__PURE__*/function () {
  function Operation() {
    _initializerDefineProperty(this, "target", _descriptor51, this);
    _initializerDefineProperty(this, "production", _descriptor52, this);
    _initializerDefineProperty(this, "provision", _descriptor53, this);
    _initializerDefineProperty(this, "reference", _descriptor54, this);
    _initializerDefineProperty(this, "recipe", _descriptor55, this);
    _initializerDefineProperty(this, "volume", _descriptor56, this);
    _initializerDefineProperty(this, "tax_rate", _descriptor57, this);
    _initializerDefineProperty(this, "tax", _descriptor58, this);
    _initializerDefineProperty(this, "delivery_cost", _descriptor59, this);
    _initializerDefineProperty(this, "flows", _descriptor60, this);
  }
  Operation.modelValidate = function modelValidate(data) {
    return plainToClass(Operation, data);
  };
  return _createClass(Operation, [{
    key: "surplus",
    get: function get() {
      return this.production - this.target;
    }
  }, {
    key: "shortfall",
    get: function get() {
      return this.target - this.production;
    }
  }]);
}(), (_descriptor51 = _applyDecoratedDescriptor(_class10.prototype, "target", [_dec53], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor52 = _applyDecoratedDescriptor(_class10.prototype, "production", [_dec54], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor53 = _applyDecoratedDescriptor(_class10.prototype, "provision", [_dec55], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor54 = _applyDecoratedDescriptor(_class10.prototype, "reference", [_dec56], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor55 = _applyDecoratedDescriptor(_class10.prototype, "recipe", [_dec57, _dec58], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor56 = _applyDecoratedDescriptor(_class10.prototype, "volume", [_dec59], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor57 = _applyDecoratedDescriptor(_class10.prototype, "tax_rate", [_dec60], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor58 = _applyDecoratedDescriptor(_class10.prototype, "tax", [_dec61], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor59 = _applyDecoratedDescriptor(_class10.prototype, "delivery_cost", [_dec62, _dec63], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor60 = _applyDecoratedDescriptor(_class10.prototype, "flows", [_dec64], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class10));
var Path = (_dec65 = Expose(), _dec66 = Expose(), _dec67 = Expose(), (_class11 = /*#__PURE__*/function () {
  function Path() {
    _initializerDefineProperty(this, "x", _descriptor61, this);
    _initializerDefineProperty(this, "y", _descriptor62, this);
    _initializerDefineProperty(this, "c", _descriptor63, this);
  }
  Path.modelValidate = function modelValidate(data) {
    return plainToClass(Path, data);
  };
  return Path;
}(), (_descriptor61 = _applyDecoratedDescriptor(_class11.prototype, "x", [_dec65], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor62 = _applyDecoratedDescriptor(_class11.prototype, "y", [_dec66], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor63 = _applyDecoratedDescriptor(_class11.prototype, "c", [_dec67], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class11));
var Producer = (_dec68 = Type(function () {
  return Inventory;
}), _dec69 = Expose(), _dec70 = Expose(), _dec71 = Expose(), _dec72 = Type(function () {
  return Operation;
}), _dec73 = Expose(), _dec74 = Expose(), _dec75 = Type(function () {
  return Recipe;
}), _dec76 = Expose(), _dec77 = Expose(), _dec78 = Expose(), (_class12 = /*#__PURE__*/function () {
  function Producer() {
    _initializerDefineProperty(this, "inventory", _descriptor64, this);
    _initializerDefineProperty(this, "limited", _descriptor65, this);
    _initializerDefineProperty(this, "manager", _descriptor66, this);
    _initializerDefineProperty(this, "previous_operation", _descriptor67, this);
    _initializerDefineProperty(this, "provider_id", _descriptor68, this);
    _initializerDefineProperty(this, "recipe", _descriptor69, this);
    _initializerDefineProperty(this, "reference", _descriptor70, this);
    _initializerDefineProperty(this, "target", _descriptor71, this);
  }
  Producer.modelValidate = function modelValidate(data) {
    return plainToClass(Producer, data);
  };
  return Producer;
}(), (_descriptor64 = _applyDecoratedDescriptor(_class12.prototype, "inventory", [_dec68, _dec69], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor65 = _applyDecoratedDescriptor(_class12.prototype, "limited", [_dec70], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor66 = _applyDecoratedDescriptor(_class12.prototype, "manager", [_dec71], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor67 = _applyDecoratedDescriptor(_class12.prototype, "previous_operation", [_dec72, _dec73], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor68 = _applyDecoratedDescriptor(_class12.prototype, "provider_id", [_dec74], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor69 = _applyDecoratedDescriptor(_class12.prototype, "recipe", [_dec75, _dec76], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor70 = _applyDecoratedDescriptor(_class12.prototype, "reference", [_dec77], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor71 = _applyDecoratedDescriptor(_class12.prototype, "target", [_dec78], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class12));
var ItemTrade = (_dec79 = Expose(), _dec80 = Expose(), _dec81 = Expose(), _dec82 = Expose(), _dec83 = Expose(), (_class13 = /*#__PURE__*/function () {
  function ItemTrade() {
    _initializerDefineProperty(this, "direction", _descriptor72, this);
    _initializerDefineProperty(this, "expected_balance", _descriptor73, this);
    _initializerDefineProperty(this, "operation", _descriptor74, this);
    _initializerDefineProperty(this, "price", _descriptor75, this);
    _initializerDefineProperty(this, "volume", _descriptor76, this);
  }
  ItemTrade.modelValidate = function modelValidate(data) {
    return plainToClass(ItemTrade, data);
  };
  return ItemTrade;
}(), (_descriptor72 = _applyDecoratedDescriptor(_class13.prototype, "direction", [_dec79], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor73 = _applyDecoratedDescriptor(_class13.prototype, "expected_balance", [_dec80], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor74 = _applyDecoratedDescriptor(_class13.prototype, "operation", [_dec81], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor75 = _applyDecoratedDescriptor(_class13.prototype, "price", [_dec82], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor76 = _applyDecoratedDescriptor(_class13.prototype, "volume", [_dec83], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class13));
var ItemTradeResult = (_dec84 = Expose(), _dec85 = Expose(), _dec86 = Expose({
  name: '_embedded'
}), (_class14 = /*#__PURE__*/function () {
  function ItemTradeResult() {
    _initializerDefineProperty(this, "settlements", _descriptor77, this);
    _initializerDefineProperty(this, "order_id", _descriptor78, this);
    _initializerDefineProperty(this, "embedded", _descriptor79, this);
  }
  ItemTradeResult.modelValidate = function modelValidate(data) {
    return plainToClass(ItemTradeResult, data);
  };
  return ItemTradeResult;
}(), (_descriptor77 = _applyDecoratedDescriptor(_class14.prototype, "settlements", [_dec84], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor78 = _applyDecoratedDescriptor(_class14.prototype, "order_id", [_dec85], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor79 = _applyDecoratedDescriptor(_class14.prototype, "embedded", [_dec86], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
})), _class14));
var ItemTradeSettlement = (_dec87 = Expose(), _dec88 = Expose(), (_class15 = /*#__PURE__*/function () {
  function ItemTradeSettlement() {
    _initializerDefineProperty(this, "volume", _descriptor80, this);
    _initializerDefineProperty(this, "price", _descriptor81, this);
  }
  ItemTradeSettlement.modelValidate = function modelValidate(data) {
    return plainToClass(ItemTradeSettlement, data);
  };
  return ItemTradeSettlement;
}(), (_descriptor80 = _applyDecoratedDescriptor(_class15.prototype, "volume", [_dec87], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor81 = _applyDecoratedDescriptor(_class15.prototype, "price", [_dec88], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class15));
var BuildingType = function BuildingType() {};
BuildingType.Apothecary = "apothecary";
BuildingType.Bakery = "bakery";
var BuildingUpgradeType = function BuildingUpgradeType() {};
BuildingUpgradeType.Armsrack = "armsrack";
BuildingUpgradeType.Beehives = "beehives";
BuildingUpgradeType.Bellows = "bellows";
BuildingUpgradeType.ButtonCast = "button cast";
BuildingUpgradeType.Cowshed = "cowshed";
BuildingUpgradeType.Crane = "crane";
BuildingUpgradeType.CraneLift = "crane lift";
BuildingUpgradeType.CuringChamber = "curing chamber";
BuildingUpgradeType.CuttingTable = "cutting table";
BuildingUpgradeType.Fermentory = "fermentory";
BuildingUpgradeType.Grindstone = "grindstone";
BuildingUpgradeType.GroovedBedstone = "grooved bedstone";
BuildingUpgradeType.GuardBooth = "guard booth";
BuildingUpgradeType.HoppingVessels = "hopping vessels";
BuildingUpgradeType.LimeKiln = "lime kiln";
BuildingUpgradeType.LimingPots = "liming pots";
BuildingUpgradeType.MaltMill = "malt mill";
BuildingUpgradeType.MaltSieve = "malt sieve";
BuildingUpgradeType.ManurePit = "manure pit";
BuildingUpgradeType.PloughHouse = "plough house";
BuildingUpgradeType.SkinningTable = "skinning table";
BuildingUpgradeType.SpinningWheel = "spinning wheel";
BuildingUpgradeType.SteelAnvil = "steel anvil";
BuildingUpgradeType.StoneOven = "stone oven";
BuildingUpgradeType.StonecuttersHut = "stonecutter's hut";
BuildingUpgradeType.TileMoulds = "tile moulds";
BuildingUpgradeType.Toolshed = "toolshed";
BuildingUpgradeType.Transmission = "transmission";
BuildingUpgradeType.TreadleLoom = "treadle loom";
BuildingUpgradeType.UpholstryBench = "upholstry bench";
BuildingUpgradeType.Warehouse = "warehouse";
BuildingUpgradeType.Weaponsrack = "weaponsrack";
var Item = function Item() {};
Item.Alembics = "alembics";
Item.Arms = "arms";
Item.Axes = "axes";
Item.Beer = "beer";
Item.Belts = "belts";
Item.Blades = "blades";
Item.Bread = "bread";
Item.Bricks = "bricks";
Item.Butter = "butter";
Item.Candles = "candles";
Item.Carting = "carting";
Item.Casks = "casks";
Item.Cattle = "cattle";
Item.Charcoal = "charcoal";
Item.Cheese = "cheese";
Item.Clay = "clay";
Item.Cloth = "cloth";
Item.Coats = "coats";
Item.Cog = "cog";
Item.Cookware = "cookware";
Item.CopperIngots = "copper ingots";
Item.CopperOre = "copper ore";
Item.CuredFish = "cured fish";
Item.CuredMeat = "cured meat";
Item.Donations = "donations";
Item.Dye = "dye";
Item.DyedCloth = "dyed cloth";
Item.Firewood = "firewood";
Item.Fish = "fish";
Item.FlaxFibres = "flax fibres";
Item.FlaxPlants = "flax plants";
Item.Flour = "flour";
Item.Furniture = "furniture";
Item.Garments = "garments";
Item.Glass = "glass";
Item.Glassware = "glassware";
Item.GoldBars = "gold bars";
Item.GoldOre = "gold ore";
Item.Grain = "grain";
Item.Grindstones = "grindstones";
Item.Ham = "ham";
Item.Handcart = "handcart";
Item.Harnesses = "harnesses";
Item.Herbs = "herbs";
Item.Hides = "hides";
Item.Honey = "honey";
Item.HopBeer = "hop beer";
Item.Hulk = "hulk";
Item.IronOre = "iron ore";
Item.Jewellery = "jewellery";
Item.Labour = "labour";
Item.LeadBars = "lead bars";
Item.LeadOre = "lead ore";
Item.Leather = "leather";
Item.LightArmor = "light armor";
Item.Limestone = "limestone";
Item.Lodging = "lodging";
Item.Lumber = "lumber";
Item.Malt = "malt";
Item.Manure = "manure";
Item.Meat = "meat";
Item.Medicine = "medicine";
Item.Milk = "milk";
Item.Money = "money";
Item.Mouldboards = "mouldboards";
Item.Nails = "nails";
Item.Nets = "nets";
Item.OxPower = "ox power";
Item.Pasties = "pasties";
Item.Pickaxes = "pickaxes";
Item.Pies = "pies";
Item.Ploughs = "ploughs";
Item.Protection = "protection";
Item.Resin = "resin";
Item.Rope = "rope";
Item.Sails = "sails";
Item.Salt = "salt";
Item.Scythes = "scythes";
Item.SilverBars = "silver bars";
Item.SlakedLime = "slaked lime";
Item.Snekkja = "snekkja";
Item.Spirits = "spirits";
Item.SteelIngots = "steel ingots";
Item.Stockfish = "stockfish";
Item.Swords = "swords";
Item.Tar = "tar";
Item.Thread = "thread";
Item.Tiles = "tiles";
Item.Timber = "timber";
Item.Tools = "tools";
Item.Tumbrel = "tumbrel";
Item.Wax = "wax";
Item.Wheels = "wheels";
Item.Windows = "windows";
Item.Wine = "wine";
Item.Wool = "wool";
Item.WroughtIron = "wrought iron";
Item.Yarn = "yarn";
var Asset = function Asset() {};
Asset.Cog = "cog";
Asset.Handcart = "handcart";
Asset.Money = "money";
Asset.Snekkja = "snekkja";
Asset.Tumbrel = "tumbrel";
var Climate = function Climate() {};
Climate.Cold = "cold";
Climate.Warm = "warm";
var ItemType = function ItemType() {};
ItemType.Commodity = "commodity";
ItemType.Service = "service";
ItemType.Special = "special";
var Recipe = function Recipe() {};
Recipe.BakeBread1 = "bake bread 1";
Recipe.BakeBread2 = "bake bread 2";
Recipe.BakePasties1 = "bake pasties 1";
Recipe.BakePasties2 = "bake pasties 2";
Recipe.BakePies1 = "bake pies 1";
Recipe.BindGarments1 = "bind garments 1";
Recipe.BindGarments2 = "bind garments 2";
Recipe.BlowGlassware1 = "blow glassware 1";
Recipe.BlowGlassware2 = "blow glassware 2";
Recipe.BoilDye1 = "boil dye 1";
Recipe.BoilDye2 = "boil dye 2";
Recipe.BorderPatrol1 = "border patrol 1";
Recipe.BorderPatrol2 = "border patrol 2";
Recipe.BreedCattle1a = "breed cattle 1a";
Recipe.BreedCattle1b = "breed cattle 1b";
Recipe.BreedCattle2a = "breed cattle 2a";
Recipe.BreedCattle2b = "breed cattle 2b";
Recipe.BrewBeer1 = "brew beer 1";
Recipe.BrewBeer2 = "brew beer 2";
Recipe.BrewBeer3 = "brew beer 3";
Recipe.BrewBeer4 = "brew beer 4";
Recipe.BrewHopBeer1 = "brew hop beer 1";
Recipe.BrewHopBeer2 = "brew hop beer 2";
Recipe.BuildCog1 = "build cog 1";
Recipe.BuildCog2 = "build cog 2";
Recipe.BuildHandcart1 = "build handcart 1";
Recipe.BuildHandcart2 = "build handcart 2";
Recipe.BuildHulk1 = "build hulk 1";
Recipe.BuildSnekkja1 = "build snekkja 1";
Recipe.BuildSnekkja2 = "build snekkja 2";
Recipe.BuildTumbrel1 = "build tumbrel 1";
Recipe.BurnBricks1 = "burn bricks 1";
Recipe.BurnCharcoal1 = "burn charcoal 1";
Recipe.BurnCharcoal2 = "burn charcoal 2";
Recipe.BurnCharcoal3 = "burn charcoal 3";
Recipe.BurnCharcoal4 = "burn charcoal 4";
Recipe.BurnCookware1 = "burn cookware 1";
Recipe.BurnCookware2 = "burn cookware 2";
Recipe.BurnGlass1 = "burn glass 1";
Recipe.BurnLime1 = "burn lime 1";
Recipe.BurnTar1 = "burn tar 1";
Recipe.BurnTar2 = "burn tar 2";
Recipe.BurnTiles1 = "burn tiles 1";
Recipe.BurnTiles2 = "burn tiles 2";
Recipe.ButcherCattle1a = "butcher cattle 1a";
Recipe.ButcherCattle1b = "butcher cattle 1b";
Recipe.ButcherCattle2 = "butcher cattle 2";
Recipe.Carting1 = "carting 1";
Recipe.Carting2 = "carting 2";
Recipe.ChurnButter1 = "churn butter 1";
Recipe.ChurnButter2 = "churn butter 2";
Recipe.CogOperations = "cog operations";
Recipe.CraftArms1 = "craft arms 1";
Recipe.CraftBelts1 = "craft belts 1";
Recipe.CraftBelts2 = "craft belts 2";
Recipe.CraftBelts3 = "craft belts 3";
Recipe.CraftBelts4 = "craft belts 4";
Recipe.CraftCookware1 = "craft cookware 1";
Recipe.CraftFurniture1 = "craft furniture 1";
Recipe.CraftFurniture2 = "craft furniture 2";
Recipe.CraftFurniture3 = "craft furniture 3";
Recipe.CraftFurniture4 = "craft furniture 4";
Recipe.CraftPloughs1 = "craft ploughs 1";
Recipe.CraftPloughs2 = "craft ploughs 2";
Recipe.CraftPloughs3 = "craft ploughs 3";
Recipe.CraftScythes1 = "craft scythes 1";
Recipe.CraftScythes2 = "craft scythes 2";
Recipe.CraftTools1 = "craft tools 1";
Recipe.CraftTools2 = "craft tools 2";
Recipe.CraftWheels1 = "craft wheels 1";
Recipe.CraftWheels2 = "craft wheels 2";
Recipe.CraftWheels3 = "craft wheels 3";
Recipe.CutBricks1 = "cut bricks 1";
Recipe.CutGrindstones1 = "cut grindstones 1";
Recipe.DeliveryDuty1 = "delivery duty 1";
Recipe.DeliveryDuty2 = "delivery duty 2";
Recipe.DigClay1 = "dig clay 1";
Recipe.DigClay2 = "dig clay 2";
Recipe.DistillSpirits1 = "distill spirits 1";
Recipe.DistillSpirits2 = "distill spirits 2";
Recipe.DryFish1 = "dry fish 1";
Recipe.DryFish2 = "dry fish 2";
Recipe.DryStockfish1 = "dry stockfish 1";
Recipe.DryStockfish2 = "dry stockfish 2";
Recipe.DyeCloth1 = "dye cloth 1";
Recipe.DyeCloth2 = "dye cloth 2";
Recipe.ExtractStone1 = "extract stone 1";
Recipe.ExtractStone2 = "extract stone 2";
Recipe.ExtractStone3 = "extract stone 3";
Recipe.Fishing1 = "fishing 1";
Recipe.Fishing2a = "fishing 2a";
Recipe.Fishing2b = "fishing 2b";
Recipe.Fishing3 = "fishing 3";
Recipe.ForgeArms1 = "forge arms 1";
Recipe.ForgeArms2 = "forge arms 2";
Recipe.ForgeArms2b = "forge arms 2b";
Recipe.ForgeAxes1 = "forge axes 1";
Recipe.ForgeAxes1b = "forge axes 1b";
Recipe.ForgeAxes2 = "forge axes 2";
Recipe.ForgeAxes2b = "forge axes 2b";
Recipe.ForgeBlades1 = "forge blades 1";
Recipe.ForgeBlades1b = "forge blades 1b";
Recipe.ForgeBlades2 = "forge blades 2";
Recipe.ForgeBlades2b = "forge blades 2b";
Recipe.ForgeMouldboards1 = "forge mouldboards 1";
Recipe.ForgePickaxes1 = "forge pickaxes 1";
Recipe.ForgePickaxes1b = "forge pickaxes 1b";
Recipe.ForgePickaxes2 = "forge pickaxes 2";
Recipe.ForgePickaxes2b = "forge pickaxes 2b";
Recipe.ForgeSwords1 = "forge swords 1";
Recipe.ForgeSwords1b = "forge swords 1b";
Recipe.ForgeSwords2 = "forge swords 2";
Recipe.ForgeSwords2b = "forge swords 2b";
Recipe.ForgeTools1 = "forge tools 1";
Recipe.ForgeTools2 = "forge tools 2";
Recipe.ForgeTools3 = "forge tools 3";
Recipe.GatherFirewood1 = "gather firewood 1";
Recipe.GatherFirewood2 = "gather firewood 2";
Recipe.GatherResin1 = "gather resin 1";
Recipe.GatherResin2 = "gather resin 2";
Recipe.GrainPayment = "grain payment";
Recipe.GrowFlax1 = "grow flax 1";
Recipe.GrowFlax2 = "grow flax 2";
Recipe.GrowFlax3 = "grow flax 3";
Recipe.GrowFlax4a = "grow flax 4a";
Recipe.GrowFlax4b = "grow flax 4b";
Recipe.GrowGrain1 = "grow grain 1";
Recipe.GrowGrain2 = "grow grain 2";
Recipe.GrowGrain3a = "grow grain 3a";
Recipe.GrowGrain3b = "grow grain 3b";
Recipe.GrowGrain4a = "grow grain 4a";
Recipe.GrowGrain4b = "grow grain 4b";
Recipe.GrowHerbs1 = "grow herbs 1";
Recipe.GrowHerbs2 = "grow herbs 2";
Recipe.HammerNails1 = "hammer nails 1";
Recipe.HandcartOperations = "handcart operations";
Recipe.HarnessOx1 = "harness ox 1";
Recipe.HarnessOx2a = "harness ox 2a";
Recipe.HarnessOx2b = "harness ox 2b";
Recipe.HarnessOx3a = "harness ox 3a";
Recipe.HarnessOx3b = "harness ox 3b";
Recipe.HarnessOx4a = "harness ox 4a";
Recipe.HarnessOx4b = "harness ox 4b";
Recipe.HerdSheep1 = "herd sheep 1";
Recipe.HerdSheep2 = "herd sheep 2";
Recipe.HoldBanquet1a = "hold banquet 1a";
Recipe.HoldBanquet1b = "hold banquet 1b";
Recipe.HoldBanquet2a = "hold banquet 2a";
Recipe.HoldBanquet2b = "hold banquet 2b";
Recipe.HoldBanquet2c = "hold banquet 2c";
Recipe.HoldBanquet3a = "hold banquet 3a";
Recipe.HoldBanquet3b = "hold banquet 3b";
Recipe.HoldBanquet3c = "hold banquet 3c";
Recipe.HoldBanquet4a = "hold banquet 4a";
Recipe.HoldBanquet4b = "hold banquet 4b";
Recipe.HoldFeast1 = "hold feast 1";
Recipe.HoldFeast2 = "hold feast 2";
Recipe.HoldFeast3 = "hold feast 3";
Recipe.HoldMass1 = "hold mass 1";
Recipe.HoldMass2 = "hold mass 2";
Recipe.HoldMass3 = "hold mass 3";
Recipe.HoldPrayer1 = "hold prayer 1";
Recipe.HoldPrayer2 = "hold prayer 2";
Recipe.HoldPrayer3 = "hold prayer 3";
Recipe.HoldSermon1 = "hold sermon 1";
Recipe.HoldSermon2a = "hold sermon 2a";
Recipe.HoldSermon2b = "hold sermon 2b";
Recipe.HoldSermon3a = "hold sermon 3a";
Recipe.HoldSermon3b = "hold sermon 3b";
Recipe.Hunting1 = "hunting 1";
Recipe.Hunting2 = "hunting 2";
Recipe.Hunting3 = "hunting 3";
Recipe.Hunting4 = "hunting 4";
Recipe.Hunting5 = "hunting 5";
Recipe.KeepBees1 = "keep bees 1";
Recipe.KnightDuty1 = "knight duty 1";
Recipe.KnightDuty2 = "knight duty 2";
Recipe.KnightDuty3 = "knight duty 3";
Recipe.KnightDuty4 = "knight duty 4";
Recipe.KnitGarments1 = "knit garments 1";
Recipe.KnitGarments2 = "knit garments 2";
Recipe.LetCottages1 = "let cottages 1";
Recipe.LetCottages2 = "let cottages 2";
Recipe.Logging1 = "logging 1";
Recipe.Logging2 = "logging 2";
Recipe.Logging3 = "logging 3";
Recipe.Maintain1 = "maintain 1";
Recipe.MakeAlembics1 = "make alembics 1";
Recipe.MakeAlembics2 = "make alembics 2";
Recipe.MakeBricks1 = "make bricks 1";
Recipe.MakeBricks2 = "make bricks 2";
Recipe.MakeCandles1 = "make candles 1";
Recipe.MakeCandles2 = "make candles 2";
Recipe.MakeCasks1 = "make casks 1";
Recipe.MakeCasks2 = "make casks 2";
Recipe.MakeCheese1 = "make cheese 1";
Recipe.MakeCheese2 = "make cheese 2";
Recipe.MakeCheese3 = "make cheese 3";
Recipe.MakeCheese4 = "make cheese 4";
Recipe.MakeCheese5 = "make cheese 5";
Recipe.MakeHarnesses1 = "make harnesses 1";
Recipe.MakeHarnesses2 = "make harnesses 2";
Recipe.MakeHarnesses2b = "make harnesses 2b";
Recipe.MakeJewellery1 = "make jewellery 1";
Recipe.MakeJewellery2 = "make jewellery 2";
Recipe.MakeLeatherArmor1 = "make leather armor 1";
Recipe.MakeMedicine1 = "make medicine 1";
Recipe.MakeMedicine2 = "make medicine 2";
Recipe.MakeNets1 = "make nets 1";
Recipe.MakeNets2 = "make nets 2";
Recipe.MakeNets3 = "make nets 3";
Recipe.MakeRope1 = "make rope 1";
Recipe.MakeWindows1 = "make windows 1";
Recipe.MakeWine1 = "make wine 1";
Recipe.MakeWine2 = "make wine 2";
Recipe.MakeWine3 = "make wine 3";
Recipe.Malting1 = "malting 1";
Recipe.Malting2 = "malting 2";
Recipe.Milling1 = "milling 1";
Recipe.Milling2 = "milling 2";
Recipe.Milling3 = "milling 3";
Recipe.MineCopper1 = "mine copper 1";
Recipe.MineCopper2 = "mine copper 2";
Recipe.MineCopper3 = "mine copper 3";
Recipe.MineCopper4 = "mine copper 4";
Recipe.MineGold1 = "mine gold 1";
Recipe.MineGold1b = "mine gold 1b";
Recipe.MineGold2 = "mine gold 2";
Recipe.MineGold2b = "mine gold 2b";
Recipe.MineIron1 = "mine iron 1";
Recipe.MineIron2 = "mine iron 2";
Recipe.MineIron3 = "mine iron 3";
Recipe.MineIron4 = "mine iron 4";
Recipe.MineLead1 = "mine lead 1";
Recipe.MineLead2 = "mine lead 2";
Recipe.MineLead2b = "mine lead 2b";
Recipe.MineLead3 = "mine lead 3";
Recipe.MineLead3b = "mine lead 3b";
Recipe.MineSalt1 = "mine salt 1";
Recipe.MineSalt2 = "mine salt 2";
Recipe.MineSalt3 = "mine salt 3";
Recipe.MintCopperCoins1 = "mint copper coins 1";
Recipe.MintCopperCoins2 = "mint copper coins 2";
Recipe.MintGoldCoins1 = "mint gold coins 1";
Recipe.MintGoldCoins2 = "mint gold coins 2";
Recipe.MintSilverCoins1 = "mint silver coins 1";
Recipe.MintSilverCoins2 = "mint silver coins 2";
Recipe.Patrol1 = "patrol 1";
Recipe.Patrol2a = "patrol 2a";
Recipe.Patrol2b = "patrol 2b";
Recipe.Patrol3a = "patrol 3a";
Recipe.Patrol3b = "patrol 3b";
Recipe.RefineSteel1 = "refine steel 1";
Recipe.RefineSteel1b = "refine steel 1b";
Recipe.RefineSteel2 = "refine steel 2";
Recipe.RefineSteel2b = "refine steel 2b";
Recipe.Retting1 = "retting 1";
Recipe.Retting2 = "retting 2";
Recipe.SaltingFish1 = "salting fish 1";
Recipe.SaltingFish2 = "salting fish 2";
Recipe.SaltingMeat1 = "salting meat 1";
Recipe.SaltingMeat2 = "salting meat 2";
Recipe.Sawing1 = "sawing 1";
Recipe.Sawing2 = "sawing 2";
Recipe.Sawing3 = "sawing 3";
Recipe.Sawing4 = "sawing 4";
Recipe.Service1 = "service 1";
Recipe.Service2 = "service 2";
Recipe.Service3 = "service 3";
Recipe.Service4 = "service 4";
Recipe.SewCoats1a = "sew coats 1a";
Recipe.SewCoats1b = "sew coats 1b";
Recipe.SewCoats2a = "sew coats 2a";
Recipe.SewCoats2b = "sew coats 2b";
Recipe.SewGambeson1 = "sew gambeson 1";
Recipe.SewGarments1 = "sew garments 1";
Recipe.SewGarments2a = "sew garments 2a";
Recipe.SewGarments2b = "sew garments 2b";
Recipe.SewGarments3a = "sew garments 3a";
Recipe.SewGarments3b = "sew garments 3b";
Recipe.SewGarments4a = "sew garments 4a";
Recipe.SewGarments4b = "sew garments 4b";
Recipe.SewSails1 = "sew sails 1";
Recipe.SewSails2 = "sew sails 2";
Recipe.ShearSheep1 = "shear sheep 1";
Recipe.ShearSheep2 = "shear sheep 2";
Recipe.ShearSheep3 = "shear sheep 3";
Recipe.SmeltCopper1 = "smelt copper 1";
Recipe.SmeltCopper2 = "smelt copper 2";
Recipe.SmeltGold1 = "smelt gold 1";
Recipe.SmeltGold2 = "smelt gold 2";
Recipe.SmeltIron1 = "smelt iron 1";
Recipe.SmeltIron2 = "smelt iron 2";
Recipe.SmeltLead1 = "smelt lead 1";
Recipe.SmeltLead2a = "smelt lead 2a";
Recipe.SmeltLead2b = "smelt lead 2b";
Recipe.SmokingFish1 = "smoking fish 1";
Recipe.SmokingFish2 = "smoking fish 2";
Recipe.SmokingHam1 = "smoking ham 1";
Recipe.SmokingHam2 = "smoking ham 2";
Recipe.SmokingMeat1 = "smoking meat 1";
Recipe.SmokingMeat2 = "smoking meat 2";
Recipe.SnekkjaOperations = "snekkja operations";
Recipe.SpinThread1 = "spin thread 1";
Recipe.SpinThread2 = "spin thread 2";
Recipe.SpinYarn1 = "spin yarn 1";
Recipe.SpinYarn2 = "spin yarn 2";
Recipe.SplitTimber1 = "split timber 1";
Recipe.SplitTimber2 = "split timber 2";
Recipe.TanHides1 = "tan hides 1";
Recipe.TanHides2 = "tan hides 2";
Recipe.TrapFish1 = "trap fish 1";
Recipe.TrapFish2 = "trap fish 2";
Recipe.TrapFish3 = "trap fish 3";
Recipe.Trapping1 = "trapping 1";
Recipe.Trapping2 = "trapping 2";
Recipe.TumbrelOperations = "tumbrel operations";
Recipe.WeaveCloth1 = "weave cloth 1";
Recipe.WeaveCloth2a = "weave cloth 2a";
Recipe.WeaveCloth2b = "weave cloth 2b";
Recipe.WeaveCloth3a = "weave cloth 3a";
Recipe.WeaveCloth3b = "weave cloth 3b";
Recipe.WeaveCloth4a = "weave cloth 4a";
Recipe.WeaveCloth4b = "weave cloth 4b";
Recipe.YokeOx1a = "yoke ox 1a";
Recipe.YokeOx1b = "yoke ox 1b";
Recipe.YokeOx2a = "yoke ox 2a";
Recipe.YokeOx2b = "yoke ox 2b";
Recipe.YokeOx3 = "yoke ox 3";
Recipe.YokeOx3manure = "yoke ox 3 (manure)";
var Skill = function Skill() {};
Skill.Crafting = "crafting";
Skill.Forging = "forging";
Skill.Maritime = "maritime";
Skill.Mercantile = "mercantile";
Skill.Nutrition = "nutrition";
Skill.Textile = "textile";
Skill.Weaponry = "weaponry";
var SkillLevel = function SkillLevel() {};
SkillLevel.Novice = 99;
SkillLevel.Worker = 599;
SkillLevel.Journeyman = 2699;
SkillLevel.Master = 9999;
var TransportType = function TransportType() {};
TransportType.Cog = "cog";
TransportType.Handcart = "handcart";
TransportType.Hulk = "hulk";
TransportType.Snekkja = "snekkja";
TransportType.Tumbrel = "tumbrel";
module.exports = {
  Location: Location,
  Inventory: Inventory,
  InventoryAccount: InventoryAccount,
  InventoryAccountAsset: InventoryAccountAsset,
  DeliveryCost: DeliveryCost,
  InventoryManager: InventoryManager,
  Producer: Producer,
  InventoryFlow: InventoryFlow,
  Operation: Operation,
  Path: Path,
  ItemTrade: ItemTrade,
  ItemTradeResult: ItemTradeResult,
  ItemTradeSettlement: ItemTradeSettlement,
  BuildingType: BuildingType,
  BuildingUpgradeType: BuildingUpgradeType,
  Item: Item,
  Asset: Asset,
  Climate: Climate,
  ItemType: ItemType,
  Recipe: Recipe,
  Skill: Skill,
  SkillLevel: SkillLevel,
  TransportType: TransportType
};