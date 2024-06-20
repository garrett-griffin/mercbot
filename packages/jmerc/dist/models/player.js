"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _dec17, _dec18, _class2, _descriptor14, _descriptor15, _dec19, _dec20, _dec21, _dec22, _dec23, _class3, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _dec24, _dec25, _dec26, _dec27, _class4, _descriptor20, _descriptor21, _descriptor22, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _class5, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _dec43, _dec44, _class6, _descriptor37, _descriptor38, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _class7, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  plainToInstance = _require.plainToInstance,
  Expose = _require.Expose,
  Type = _require.Type;
var _require2 = require('./common'),
  Skill = _require2.Skill,
  Inventory = _require2.Inventory;
var Household = (_dec = Expose(), _dec2 = Expose(), _dec3 = Expose(), _dec4 = Expose(), _dec5 = Expose(), _dec6 = Expose(), _dec7 = Expose(), _dec8 = Expose(), _dec9 = Type(function () {
  return PrestigeImpact;
}), _dec10 = Expose(), _dec11 = Type(function () {
  return Worker;
}), _dec12 = Expose(), _dec13 = Expose(), _dec14 = Expose(), _dec15 = Type(function () {
  return Sustenance;
}), _dec16 = Expose(), (_class = function Household() {
  _initializerDefineProperty(this, "id", _descriptor, this);
  _initializerDefineProperty(this, "name", _descriptor2, this);
  _initializerDefineProperty(this, "town_id", _descriptor3, this);
  _initializerDefineProperty(this, "portrait", _descriptor4, this);
  _initializerDefineProperty(this, "gender", _descriptor5, this);
  _initializerDefineProperty(this, "account_id", _descriptor6, this);
  _initializerDefineProperty(this, "business_ids", _descriptor7, this);
  _initializerDefineProperty(this, "prestige", _descriptor8, this);
  _initializerDefineProperty(this, "prestige_impacts", _descriptor9, this);
  _initializerDefineProperty(this, "workers", _descriptor10, this);
  _initializerDefineProperty(this, "operations", _descriptor11, this);
  _initializerDefineProperty(this, "caps", _descriptor12, this);
  _initializerDefineProperty(this, "sustenance", _descriptor13, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "town_id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "portrait", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "gender", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "account_id", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "business_ids", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "prestige", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "prestige_impacts", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "workers", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "operations", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "caps", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "sustenance", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var PrestigeImpact = (_dec17 = Expose(), _dec18 = Expose(), (_class2 = function PrestigeImpact() {
  _initializerDefineProperty(this, "factor", _descriptor14, this);
  _initializerDefineProperty(this, "impact", _descriptor15, this);
}, (_descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "factor", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "impact", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2));
var Worker = (_dec19 = Expose(), _dec20 = Expose(), _dec21 = Expose(), _dec22 = Type(function () {
  return Skill;
}), _dec23 = Expose(), (_class3 = function Worker() {
  _initializerDefineProperty(this, "assignment", _descriptor16, this);
  _initializerDefineProperty(this, "capacity", _descriptor17, this);
  _initializerDefineProperty(this, "name", _descriptor18, this);
  _initializerDefineProperty(this, "skills", _descriptor19, this);
}, (_descriptor16 = _applyDecoratedDescriptor(_class3.prototype, "assignment", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class3.prototype, "capacity", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class3.prototype, "name", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class3.prototype, "skills", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
var Sustenance = (_dec24 = Expose(), _dec25 = Type(function () {
  return Inventory;
}), _dec26 = Expose(), _dec27 = Expose(), (_class4 = function Sustenance() {
  _initializerDefineProperty(this, "reference", _descriptor20, this);
  _initializerDefineProperty(this, "inventory", _descriptor21, this);
  _initializerDefineProperty(this, "provider_id", _descriptor22, this);
}, (_descriptor20 = _applyDecoratedDescriptor(_class4.prototype, "reference", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class4.prototype, "inventory", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class4.prototype, "provider_id", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class4));
var Settings = (_dec28 = Expose(), _dec29 = Type(function () {
  return NotificationSettings;
}), _dec30 = Expose(), _dec31 = Expose(), _dec32 = Expose(), _dec33 = Expose(), _dec34 = Expose(), _dec35 = Expose(), _dec36 = Expose(), _dec37 = Expose(), _dec38 = Expose(), _dec39 = Expose(), _dec40 = Expose(), _dec41 = Expose(), _dec42 = Expose(), (_class5 = function Settings() {
  _initializerDefineProperty(this, "sound_volume", _descriptor23, this);
  _initializerDefineProperty(this, "notifications", _descriptor24, this);
  _initializerDefineProperty(this, "commoners_splash", _descriptor25, this);
  _initializerDefineProperty(this, "construction_splash", _descriptor26, this);
  _initializerDefineProperty(this, "land_purchase_splash", _descriptor27, this);
  _initializerDefineProperty(this, "operations_splash", _descriptor28, this);
  _initializerDefineProperty(this, "production_splash", _descriptor29, this);
  _initializerDefineProperty(this, "recipes_splash", _descriptor30, this);
  _initializerDefineProperty(this, "sustenance_splash", _descriptor31, this);
  _initializerDefineProperty(this, "trading_splash", _descriptor32, this);
  _initializerDefineProperty(this, "trade_config_splash", _descriptor33, this);
  _initializerDefineProperty(this, "welcome_splash", _descriptor34, this);
  _initializerDefineProperty(this, "first_building_splash", _descriptor35, this);
  _initializerDefineProperty(this, "warehouse_splash", _descriptor36, this);
}, (_descriptor23 = _applyDecoratedDescriptor(_class5.prototype, "sound_volume", [_dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class5.prototype, "notifications", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class5.prototype, "commoners_splash", [_dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class5.prototype, "construction_splash", [_dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class5.prototype, "land_purchase_splash", [_dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor28 = _applyDecoratedDescriptor(_class5.prototype, "operations_splash", [_dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class5.prototype, "production_splash", [_dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor30 = _applyDecoratedDescriptor(_class5.prototype, "recipes_splash", [_dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor31 = _applyDecoratedDescriptor(_class5.prototype, "sustenance_splash", [_dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor32 = _applyDecoratedDescriptor(_class5.prototype, "trading_splash", [_dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor33 = _applyDecoratedDescriptor(_class5.prototype, "trade_config_splash", [_dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class5.prototype, "welcome_splash", [_dec40], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor35 = _applyDecoratedDescriptor(_class5.prototype, "first_building_splash", [_dec41], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor36 = _applyDecoratedDescriptor(_class5.prototype, "warehouse_splash", [_dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5));
var NotificationSettings = (_dec43 = Expose(), _dec44 = Expose(), (_class6 = function NotificationSettings() {
  _initializerDefineProperty(this, "discord", _descriptor37, this);
  _initializerDefineProperty(this, "mutes", _descriptor38, this);
}, (_descriptor37 = _applyDecoratedDescriptor(_class6.prototype, "discord", [_dec43], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor38 = _applyDecoratedDescriptor(_class6.prototype, "mutes", [_dec44], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class6));
var Player = (_dec45 = Expose(), _dec46 = Type(function () {
  return Household;
}), _dec47 = Expose(), _dec48 = Expose(), _dec49 = Type(function () {
  return Settings;
}), _dec50 = Expose(), _dec51 = Expose(), (_class7 = /*#__PURE__*/function () {
  function Player() {
    _initializerDefineProperty(this, "username", _descriptor39, this);
    _initializerDefineProperty(this, "household", _descriptor40, this);
    _initializerDefineProperty(this, "discord_id", _descriptor41, this);
    _initializerDefineProperty(this, "settings", _descriptor42, this);
    _initializerDefineProperty(this, "active", _descriptor43, this);
  }
  Player.modelValidate = function modelValidate(data) {
    return plainToInstance(Player, data);
  };
  return Player;
}(), (_descriptor39 = _applyDecoratedDescriptor(_class7.prototype, "username", [_dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor40 = _applyDecoratedDescriptor(_class7.prototype, "household", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor41 = _applyDecoratedDescriptor(_class7.prototype, "discord_id", [_dec48], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class7.prototype, "settings", [_dec49, _dec50], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor43 = _applyDecoratedDescriptor(_class7.prototype, "active", [_dec51], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class7));
module.exports = {
  Player: Player,
  Household: Household,
  PrestigeImpact: PrestigeImpact,
  Worker: Worker,
  Sustenance: Sustenance,
  Settings: Settings,
  NotificationSettings: NotificationSettings
};