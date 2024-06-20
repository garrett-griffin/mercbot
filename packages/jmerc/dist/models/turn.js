"use strict";

var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var _require = require('class-transformer'),
  Expose = _require.Expose,
  plainToInstance = _require.plainToInstance;

/**
 * @typedef {Object} Turn
 * @property {number} turn
 * @property {string} [month]
 * @property {number} [year]
 */
var Turn = (_dec = Expose(), _dec2 = Expose(), _dec3 = Expose(), (_class = /*#__PURE__*/function () {
  function Turn() {
    _initializerDefineProperty(this, "turn", _descriptor, this);
    _initializerDefineProperty(this, "month", _descriptor2, this);
    _initializerDefineProperty(this, "year", _descriptor3, this);
  }
  /**
   * @param {Object} data
   * @returns {Turn}
   */
  Turn.modelValidate = function modelValidate(data) {
    try {
      return /** @type {Turn} */plainToInstance(Turn, data);
    } catch (errors) {
      throw new Error('Validation failed: ' + errors);
    }
  };
  return Turn;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "turn", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "month", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "year", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
module.exports = Turn;