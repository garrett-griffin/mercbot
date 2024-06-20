"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var BaseAPI = require('./baseAPI');
var _require = require('../models/towns'),
  Town = _require.Town,
  TownData = _require.TownData,
  TownMarket = _require.TownMarket,
  TownMarketItemDetails = _require.TownMarketItemDetails;
var _require2 = require('../models/common'),
  Item = _require2.Item,
  ItemTrade = _require2.ItemTrade,
  ItemTradeResult = _require2.ItemTradeResult;
var _require3 = require('../utils/errors'),
  BuySellOrderFailedException = _require3.BuySellOrderFailedException;
var _require4 = require('../utils/conversion'),
  convertFloatsToStrings = _require4.convertFloatsToStrings;
var TownsAPI = /*#__PURE__*/function (_BaseAPI) {
  function TownsAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }
  _inheritsLoose(TownsAPI, _BaseAPI);
  TownsAPI.rootUrl = function rootUrl() {
    return 'api/towns';
  };
  var _proto = TownsAPI.prototype;
  _proto.initCache = /*#__PURE__*/function () {
    var _initCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function initCache() {
      return _initCache.apply(this, arguments);
    }
    return initCache;
  }()
  /**
   * Get a list of all towns in the game.
   * @returns {Promise<Town[]>} A list of all towns in the game.
   */
  ;
  _proto.getAll =
  /*#__PURE__*/
  function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _BaseAPI.prototype.get.call(this, TownsAPI.rootUrl());
          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.map(function (townData) {
              return Town.modelValidate(townData);
            }));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw new Error("Failed to fetch towns: " + _context2.t0.message);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[0, 7]]);
    }));
    function getAll() {
      return _getAll.apply(this, arguments);
    }
    return getAll;
  }()
  /**
   * Get data for a town.
   * @param {number} id - The ID of the town.
   * @returns {Promise<Town>} The data for the town.
   */
  ;
  _proto.getTown =
  /*#__PURE__*/
  function () {
    var _getTown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _BaseAPI.prototype.get.call(this, TownsAPI.rootUrl() + "/" + id);
          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", Town.modelValidate(response));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw new Error("Failed to fetch town data for ID " + id + ": " + _context3.t0.message);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this, [[0, 7]]);
    }));
    function getTown(_x) {
      return _getTown.apply(this, arguments);
    }
    return getTown;
  }()
  /**
   * Get market data for a town.
   * @param {number} id - The ID of the town.
   * @returns {Promise<TownMarket>} The market data for the town.
   */
  ;
  _proto.getMarketData =
  /*#__PURE__*/
  function () {
    var _getMarketData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _BaseAPI.prototype.get.call(this, TownsAPI.rootUrl() + "/" + id + "/marketdata");
          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", TownMarket.modelValidate(response));
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            throw new Error("Failed to fetch market data for town ID " + id + ": " + _context4.t0.message);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this, [[0, 7]]);
    }));
    function getMarketData(_x2) {
      return _getMarketData.apply(this, arguments);
    }
    return getMarketData;
  }()
  /**
   * Get the market overview for an item in a town.
   * @param {number} townId - The ID of the town.
   * @param {Item} item - The item to get the overview for.
   * @returns {Promise<TownMarketItemDetails>} The market overview for the town.
   */
  ;
  _proto.getMarketItem =
  /*#__PURE__*/
  function () {
    var _getMarketItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(townId, item) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _BaseAPI.prototype.get.call(this, TownsAPI.rootUrl() + "/" + townId + "/markets/" + item.value);
          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", TownMarketItemDetails.modelValidate(response));
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            throw new Error("Failed to fetch market item data for town ID " + townId + " and item " + item.name + ": " + _context5.t0.message);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this, [[0, 7]]);
    }));
    function getMarketItem(_x3, _x4) {
      return _getMarketItem.apply(this, arguments);
    }
    return getMarketItem;
  }() // /**
  //  * Send a buy order to a town.
  //  * @param {Item} item - The item to buy.
  //  * @param {number} id - The ID of the town.
  //  * @param {number} expected_balance - The expected balance after the purchase.
  //  * @param {string} operation - The operation to use for the purchase.
  //  * @param {number} price - The price of the item.
  //  * @param {number} volume - The volume of the item to buy.
  //  * @returns {Promise<ItemTradeResult>} The result of the purchase.
  //  * @throws {BuySellOrderFailedException} If the order failed to send.
  //  */
  // async sendBuyOrder(item, id, expected_balance, operation, price, volume) {
  //     return await this._sendOrder(item, id, expected_balance, operation, price, volume, "bid");
  // }
  //
  // /**
  //  * Send a sell order to a town.
  //  * @param {Item} item - The item to sell.
  //  * @param {number} id - The ID of the town.
  //  * @param {number} expected_balance - The expected balance after the sale.
  //  * @param {string} operation - The operation to use for the sale.
  //  * @param {number} price - The price of the item.
  //  * @param {number} volume - The volume of the item to sell.
  //  * @returns {Promise<ItemTradeResult>} The result of the sale.
  //  * @throws {BuySellOrderFailedException} If the order failed to send.
  //  */
  // async sendSellOrder(item, id, expected_balance, operation, price, volume) {
  //     return await this._sendOrder(item, id, expected_balance, operation, price, volume, "ask");
  // }
  //
  // /**
  //  * Send a buy or sell order to a town.
  //  * @param {Item} item - The item to buy or sell.
  //  * @param {number} id - The ID of the town.
  //  * @param {number} expected_balance - The expected balance after the trade.
  //  * @param {string} operation - The operation to use for the trade.
  //  * @param {number} price - The price of the item.
  //  * @param {number} volume - The volume of the item to trade.
  //  * @param {string} direction - The direction of the trade.
  //  * @returns {Promise<ItemTradeResult>} The result of the trade.
  //  * @throws {BuySellOrderFailedException} If the order failed to send.
  //  */
  // async _sendOrder(item, id, expected_balance, operation, price, volume, direction) {
  //     const trade = new ItemTrade();
  //     trade.direction = direction;
  //     trade.expected_balance = expected_balance;
  //     trade.operation = operation;
  //     trade.price = price;
  //     trade.volume = volume;
  //
  //     const json = convertFloatsToStrings(trade);
  //     try {
  //         const response = await this.client.post(`${TownsAPI.rootUrl()}/${id}/markets/${item.value}/orders`, json);
  //         if (response.status === 200) {
  //             return ItemTradeResult.modelValidate(response.data);
  //         } else {
  //             throw new BuySellOrderFailedException(`Failed to send ${direction} order: ${response.data}`);
  //         }
  //     } catch (error) {
  //         throw new BuySellOrderFailedException(`Failed to send ${direction} order: ${error.message}`);
  //     }
  // }
  ;
  return TownsAPI;
}(BaseAPI);
module.exports = TownsAPI;