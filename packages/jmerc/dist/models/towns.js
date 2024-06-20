"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec19, _dec20, _dec21, _class2, _descriptor16, _descriptor17, _descriptor18, _dec22, _dec23, _class3, _descriptor19, _descriptor20, _dec24, _dec25, _dec26, _dec27, _class4, _descriptor21, _descriptor22, _descriptor23, _descriptor24;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  Type = _require.Type,
  plainToClass = _require.plainToClass;
var _require2 = require("./common"),
  Location = _require2.Location,
  Tile = _require2.Tile;
var Town = (_dec = Expose(), _dec2 = Expose(), _dec3 = Type(function () {
  return Location;
}), _dec4 = Expose(), _dec5 = Expose(), _dec6 = Expose(), _dec7 = Expose(), _dec8 = Expose(), _dec9 = Type(function () {
  return Tile;
}), _dec10 = Expose(), _dec11 = Expose(), _dec12 = Expose(), _dec13 = Expose(), _dec14 = Expose(), _dec15 = Expose(), _dec16 = Expose(), _dec17 = Expose(), _dec18 = Expose(), (_class = /*#__PURE__*/function () {
  function Town() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "name", _descriptor2, this);
    _initializerDefineProperty(this, "location", _descriptor3, this);
    _initializerDefineProperty(this, "region", _descriptor4, this);
    _initializerDefineProperty(this, "capital", _descriptor5, this);
    _initializerDefineProperty(this, "center_ids", _descriptor6, this);
    _initializerDefineProperty(this, "outposts", _descriptor7, this);
    _initializerDefineProperty(this, "domain", _descriptor8, this);
    _initializerDefineProperty(this, "household_ids", _descriptor9, this);
    _initializerDefineProperty(this, "commoners", _descriptor10, this);
    _initializerDefineProperty(this, "government", _descriptor11, this);
    _initializerDefineProperty(this, "church", _descriptor12, this);
    _initializerDefineProperty(this, "navigation_zones", _descriptor13, this);
    _initializerDefineProperty(this, "special_markets", _descriptor14, this);
    _initializerDefineProperty(this, "culture", _descriptor15, this);
  }
  Town.modelValidate = function modelValidate(data) {
    return plainToClass(Town, data);
  };
  return _createClass(Town, [{
    key: "domain",
    set: function set(domainObject) {
      this._domain = Object.entries(domainObject).map(function (_ref) {
        var id = _ref[0],
          tileData = _ref[1];
        var tile = plainToClass(Tile, _extends({
          id: id
        }, tileData));
        tile.id = id;
        return tile;
      });
    }
  }]);
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
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "location", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "region", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "capital", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "center_ids", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "outposts", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "domain", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "household_ids", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "commoners", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "government", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "church", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "navigation_zones", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "special_markets", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "culture", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "domain", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "domain"), _class.prototype)), _class));
var TownData = (_dec19 = Expose(), _dec20 = Expose(), _dec21 = Expose(), (_class2 = /*#__PURE__*/function () {
  function TownData() {
    _initializerDefineProperty(this, "id", _descriptor16, this);
    _initializerDefineProperty(this, "population", _descriptor17, this);
    _initializerDefineProperty(this, "economy", _descriptor18, this);
  }
  // Add other properties as needed
  TownData.modelValidate = function modelValidate(data) {
    return plainToClass(TownData, data);
  };
  return TownData;
}(), (_descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "population", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "economy", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var TownMarket = (_dec22 = Expose(), _dec23 = Expose(), (_class3 = /*#__PURE__*/function () {
  function TownMarket() {
    _initializerDefineProperty(this, "id", _descriptor19, this);
    _initializerDefineProperty(this, "items", _descriptor20, this);
  }
  // Add other properties as needed
  TownMarket.modelValidate = function modelValidate(data) {
    return plainToClass(TownMarket, data);
  };
  return TownMarket;
}(), (_descriptor19 = _applyDecoratedDescriptor(_class3.prototype, "id", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class3.prototype, "items", [_dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var TownMarketItemDetails = (_dec24 = Expose(), _dec25 = Expose(), _dec26 = Expose(), _dec27 = Expose(), (_class4 = /*#__PURE__*/function () {
  function TownMarketItemDetails() {
    _initializerDefineProperty(this, "id", _descriptor21, this);
    _initializerDefineProperty(this, "name", _descriptor22, this);
    _initializerDefineProperty(this, "price", _descriptor23, this);
    _initializerDefineProperty(this, "volume", _descriptor24, this);
  }
  // Add other properties as needed
  TownMarketItemDetails.modelValidate = function modelValidate(data) {
    return plainToClass(TownMarketItemDetails, data);
  };
  return TownMarketItemDetails;
}(), (_descriptor21 = _applyDecoratedDescriptor(_class4.prototype, "id", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class4.prototype, "name", [_dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class4.prototype, "price", [_dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class4.prototype, "volume", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
module.exports = {
  Town: Town,
  TownData: TownData,
  TownMarket: TownMarket,
  TownMarketItemDetails: TownMarketItemDetails
};