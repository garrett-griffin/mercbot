var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  Client: () => Client,
  default: () => client_default
});
module.exports = __toCommonJS(client_exports);
var import_axios2 = __toESM(require("axios"));

// src/api/api-routes.ts
var rootUrl = "https://play.mercatorio.io/";
var apiUrl = rootUrl + "api/";
var staticUrl = rootUrl + "static/js/";
var apiRoutes = {
  buildings: `buildings/:id`,
  buildingOperations: `buildings/:id/operations`,
  buildingSetManager: `buildings/:id/storage/inventory/:item`,
  business: `businesses/:id`,
  marketData: `towns/:id/marketdata`,
  marketItem: `towns/:id/markets/:item`,
  orders: `towns/:id/markets/:item/orders`,
  player: `player`,
  producer: `buildings/:id/producer`,
  regions: `map/regions`,
  towns: `towns`,
  townData: `towns/:id/data`,
  transports: `transports/:id`,
  transportManager: `transports/:id/route/inventory/item`,
  turn: `clock`
  // Add more routes here
};

// src/api/baseAPI.ts
var BaseAPI = class {
  client;
  endpoint;
  /**
   * Creates an instance of BaseAPI.
   * @param client - The client to use for making requests.
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Makes a GET request.
   * @param endpoint - The API endpoint.
   * @param id - The id of the object to get.
   * @param item - The name of the item to get.
   * @returns The response data.
   */
  async get({ endpoint, id, item } = {}) {
    let url = this.endpoint;
    if (endpoint) {
      url = endpoint;
    }
    if (id) {
      url.replace(":id", id.toString());
    }
    if (item) {
      url.replace(":item", item);
    }
    return this.client.get(url);
  }
  /**
   * Makes a POST request.
   * @param endpoint - The API endpoint.
   * @param id - The id of the object to get.
   * @param item - The name of the item to get.
   * @param data - The data to send.
   * @returns The response data.
   */
  async post({ endpoint, id, item, data } = {}) {
    let url = this.endpoint;
    if (endpoint) {
      url = endpoint;
    }
    if (id) {
      url.replace(":id", id.toString());
    }
    if (item) {
      url.replace(":item", item);
    }
    return this.client.post(url, data);
  }
  /**
   * Makes a PUT request.
   * @param endpoint - The API endpoint.
   * @param data - The data to send.
   * @returns The response data.
   */
  async put({ endpoint, id, item, data } = {}) {
    let url = this.endpoint;
    if (endpoint) {
      url = endpoint;
    }
    if (id) {
      url.replace(":id", id.toString());
    }
    if (item) {
      url.replace(":item", item);
    }
    return this.client.put(url, data);
  }
  /**
   * Makes a PATCH request.
   * @param endpoint - The API endpoint.
   * @param data - The data to send.
   * @returns The response data.
   */
  async patch({ endpoint, id, item, data } = {}) {
    let url = this.endpoint;
    if (endpoint) {
      url = endpoint;
    }
    if (id) {
      url.replace(":id", id.toString());
    }
    if (item) {
      url.replace(":item", item);
    }
    return this.client.patch(url, data);
  }
};
var baseAPI_default = BaseAPI;

// src/models/baseModel.ts
var BaseModel = class {
  static schema;
  static async validate(data) {
    try {
      return await this.schema.parse(data);
    } catch (errors) {
      throw new Error("Validation failed: " + errors);
    }
  }
};

// src/schema/TurnSchema.ts
var import_zod = require("zod");
var TurnSchema = import_zod.z.object({
  turn: import_zod.z.number(),
  month: import_zod.z.string().optional(),
  year: import_zod.z.number().optional()
});

// src/models/turn.ts
var Turn = class extends BaseModel {
  static schema = TurnSchema;
  turn;
  month;
  year;
};

// src/api/turns.ts
var TurnsAPI = class extends baseAPI_default {
  endpoint = apiRoutes.turn;
  /**
   * Get the current turn data.
   * @returns The current turn data.
   */
  async get() {
    try {
      const response = await super.get();
      return Turn.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch turn data: ${error.message}`);
    }
  }
};
var turns_default = TurnsAPI;

// src/schema/PlayerSchema.ts
var import_zod15 = require("zod");

// src/schema/HouseholdSchema.ts
var import_zod12 = require("zod");

// src/schema/PrestigeImpactSchema.ts
var import_zod2 = require("zod");
var PrestigeImpactSchema = import_zod2.z.object({
  factor: import_zod2.z.string(),
  impact: import_zod2.z.number()
});

// src/schema/WorkerSchema.ts
var import_zod4 = require("zod");

// src/schema/enums/SkillEnumSchema.ts
var import_zod3 = require("zod");
var SkillEnumSchema = import_zod3.z.enum([
  "crafting",
  "forging",
  "maritime",
  "mercantile",
  "nutrition",
  "textile",
  "weaponry"
]);

// src/schema/WorkerSchema.ts
var WorkerSchema = import_zod4.z.object({
  assignment: import_zod4.z.string(),
  capacity: import_zod4.z.number(),
  name: import_zod4.z.string(),
  skills: import_zod4.z.record(SkillEnumSchema, import_zod4.z.number())
  // Using z.record to define a dictionary with Skill as key and float as value
});

// src/schema/SustenanceSchema.ts
var import_zod11 = require("zod");

// src/schema/InventorySchema.ts
var import_zod10 = require("zod");

// src/schema/enums/ItemEnumSchema.ts
var import_zod5 = require("zod");
var ItemEnumSchema = import_zod5.z.enum([
  "alembics",
  "arms",
  "axes",
  "beer",
  "belts",
  "blades",
  "bread",
  "bricks",
  "butter",
  "candles",
  "carting",
  "casks",
  "cattle",
  "charcoal",
  "cheese",
  "clay",
  "cloth",
  "coats",
  "cog",
  "cookware",
  "copper ingots",
  "copper ore",
  "cured fish",
  "cured meat",
  "donations",
  "dye",
  "dyed cloth",
  "firewood",
  "fish",
  "flax fibres",
  "flax plants",
  "flour",
  "furniture",
  "garments",
  "glass",
  "glassware",
  "gold bars",
  "gold ore",
  "grain",
  "grindstones",
  "ham",
  "handcart",
  "harnesses",
  "herbs",
  "hides",
  "honey",
  "hop beer",
  "hulk",
  "iron ore",
  "jewellery",
  "labour",
  "lead bars",
  "lead ore",
  "leather",
  "light armor",
  "limestone",
  "lodging",
  "lumber",
  "malt",
  "manure",
  "meat",
  "medicine",
  "milk",
  "money",
  "mouldboards",
  "nails",
  "nets",
  "ox power",
  "pasties",
  "pickaxes",
  "pies",
  "ploughs",
  "protection",
  "resin",
  "rope",
  "sails",
  "salt",
  "scythes",
  "silver bars",
  "slaked lime",
  "snekkja",
  "spirits",
  "steel ingots",
  "stockfish",
  "swords",
  "tar",
  "thread",
  "tiles",
  "timber",
  "tools",
  "tumbrel",
  "wax",
  "wheels",
  "windows",
  "wine",
  "wool",
  "wrought iron",
  "yarn"
]);

// src/schema/AccountSchema.ts
var import_zod7 = require("zod");

// src/schema/AccountAssetSchema.ts
var import_zod6 = require("zod");
var AccountAssetSchema = import_zod6.z.object({
  balance: import_zod6.z.number(),
  capacity: import_zod6.z.number().optional(),
  purchase: import_zod6.z.number().optional(),
  purchase_price: import_zod6.z.number().optional(),
  reserved: import_zod6.z.number(),
  reserved_capacity: import_zod6.z.number().optional(),
  sale: import_zod6.z.number().optional(),
  sale_price: import_zod6.z.number().optional(),
  unit_cost: import_zod6.z.number().optional()
});

// src/schema/AccountSchema.ts
var AccountSchema = import_zod7.z.object({
  assets: import_zod7.z.map(ItemEnumSchema, AccountAssetSchema),
  id: import_zod7.z.string(),
  master_id: import_zod7.z.string().optional(),
  name: import_zod7.z.string().optional(),
  owner_id: import_zod7.z.number(),
  sponsor_id: import_zod7.z.string().optional()
});

// src/schema/ManagerSchema.ts
var import_zod8 = require("zod");
var ManagerSchema = import_zod8.z.object({
  buy_price: import_zod8.z.number().optional(),
  buy_volume: import_zod8.z.number().optional(),
  capacity: import_zod8.z.number().optional(),
  max_holding: import_zod8.z.number().optional(),
  sell_price: import_zod8.z.number().optional(),
  sell_volume: import_zod8.z.number().optional()
});

// src/schema/FlowSchema.ts
var import_zod9 = require("zod");
var FlowSchema = import_zod9.z.object({
  consumption: import_zod9.z.number().optional().default(0),
  expiration: import_zod9.z.number().optional().default(0),
  export: import_zod9.z.number().optional(),
  imported: import_zod9.z.number().optional().nullable().default(null).describe("import"),
  production: import_zod9.z.number().optional().default(0),
  production_cost: import_zod9.z.number().optional().default(0),
  purchase: import_zod9.z.number().optional(),
  purchase_cost: import_zod9.z.number().optional().default(0),
  resident: import_zod9.z.number().optional(),
  sale: import_zod9.z.number().optional(),
  sale_value: import_zod9.z.number().optional().default(0),
  shortfall: import_zod9.z.number().optional().default(0)
});

// src/schema/InventorySchema.ts
var InventorySchema = import_zod10.z.object({
  account: AccountSchema,
  capacity: import_zod10.z.number(),
  managers: import_zod10.z.map(ItemEnumSchema, ManagerSchema).optional(),
  previous_flows: import_zod10.z.record(ItemEnumSchema, FlowSchema).optional().default({}),
  reserved: import_zod10.z.number().optional()
});

// src/schema/SustenanceSchema.ts
var SustenanceSchema = import_zod11.z.object({
  reference: import_zod11.z.string(),
  inventory: InventorySchema,
  provider_id: import_zod11.z.string().optional()
});

// src/schema/HouseholdSchema.ts
var HouseholdSchema = import_zod12.z.object({
  id: import_zod12.z.string(),
  name: import_zod12.z.string(),
  town_id: import_zod12.z.number(),
  portrait: import_zod12.z.string(),
  gender: import_zod12.z.string(),
  account_id: import_zod12.z.string(),
  business_ids: import_zod12.z.array(import_zod12.z.string()),
  prestige: import_zod12.z.number(),
  prestige_impacts: import_zod12.z.array(PrestigeImpactSchema).optional(),
  workers: import_zod12.z.array(WorkerSchema),
  operations: import_zod12.z.array(import_zod12.z.string()),
  caps: import_zod12.z.record(import_zod12.z.string(), import_zod12.z.number()),
  sustenance: SustenanceSchema
});

// src/schema/SettingsSchema.ts
var import_zod14 = require("zod");

// src/schema/NotificationSettingsSchema.ts
var import_zod13 = require("zod");
var NotificationSettingsSchema = import_zod13.z.object({
  discord: import_zod13.z.boolean(),
  mutes: import_zod13.z.array(import_zod13.z.string()).optional().default([])
});

// src/schema/SettingsSchema.ts
var SettingsSchema = import_zod14.z.object({
  sound_volume: import_zod14.z.number(),
  notifications: NotificationSettingsSchema,
  commoners_splash: import_zod14.z.boolean(),
  construction_splash: import_zod14.z.boolean(),
  land_purchase_splash: import_zod14.z.boolean(),
  operations_splash: import_zod14.z.boolean(),
  production_splash: import_zod14.z.boolean(),
  recipes_splash: import_zod14.z.boolean(),
  sustenance_splash: import_zod14.z.boolean(),
  trading_splash: import_zod14.z.boolean(),
  trade_config_splash: import_zod14.z.boolean(),
  welcome_splash: import_zod14.z.boolean(),
  first_building_splash: import_zod14.z.boolean(),
  warehouse_splash: import_zod14.z.boolean()
});

// src/schema/PlayerSchema.ts
var PlayerSchema = import_zod15.z.object({
  username: import_zod15.z.string(),
  household: HouseholdSchema,
  discord_id: import_zod15.z.string().optional(),
  settings: SettingsSchema,
  active: import_zod15.z.boolean()
});

// src/models/player.ts
var Player = class extends BaseModel {
  static schema = PlayerSchema;
  username;
  household;
  discord_id;
  settings;
  active;
};

// src/api/players.ts
var PlayersAPI = class extends baseAPI_default {
  endpoint = apiRoutes.player;
  async get() {
    try {
      const response = await super.get();
      return Player.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch player data: ${error.message}`);
    }
  }
};
var players_default = PlayersAPI;

// src/schema/TownSchema.ts
var import_zod17 = require("zod");

// src/schema/LocationSchema.ts
var import_zod16 = require("zod");
var LocationSchema = import_zod16.z.object({
  x: import_zod16.z.number(),
  y: import_zod16.z.number()
});

// src/schema/TownSchema.ts
var TownSchema = import_zod17.z.object({
  id: import_zod17.z.number(),
  name: import_zod17.z.string(),
  location: LocationSchema,
  region: import_zod17.z.number(),
  capital: import_zod17.z.boolean().default(false)
});

// src/schema/TownDataSchema.ts
var import_zod28 = require("zod");

// src/schema/TileSchema.ts
var import_zod20 = require("zod");

// src/schema/StructureSchema.ts
var import_zod19 = require("zod");

// src/schema/enums/BuildingTypeEnumSchema.ts
var import_zod18 = require("zod");
var BuildingTypeEnumSchema = import_zod18.z.enum([
  "apothecary",
  "bakery",
  "bloomery",
  "boardinghouse",
  "brewery",
  "brickworks",
  "butchery",
  "carpentry",
  "cartshed",
  "cathedral",
  "center",
  "ceramic kiln",
  "chandlery",
  "chapel",
  "charcoal hut",
  "charcoal kiln",
  "church",
  "clay pit",
  "copper mine",
  "coppersmith",
  "cottage",
  "dairy",
  "dye boiler",
  "dyeworks",
  "farmstead",
  "fisher",
  "fishing shack",
  "flax farm",
  "foundry",
  "glass blower",
  "glass house",
  "gold mine",
  "grain farm",
  "guardhouse",
  "herb garden",
  "hjell",
  "household",
  "hunting lodge",
  "iron mine",
  "jeweller",
  "lead mine",
  "leatherworks",
  "logging camp",
  "markethall",
  "malthouse",
  "mansion",
  "mint",
  "net maker",
  "outpost",
  "park",
  "pasture",
  "quarry",
  "retting pit",
  "ropewalk",
  "sail loft",
  "saltery",
  "salt mine",
  "sawmill",
  "sewing shop",
  "shipyard",
  "smithy",
  "smokery",
  "spinnery",
  "stable",
  "storehouse",
  "square",
  "tannery",
  "tar kiln",
  "toolworks",
  "townhall",
  "townhouse",
  "townroad",
  "vignoble",
  "warehouse",
  "weavery",
  "windmill"
]);

// src/schema/StructureSchema.ts
var StructureSchema = import_zod19.z.object({
  id: import_zod19.z.string(),
  type: BuildingTypeEnumSchema,
  tags: import_zod19.z.array(import_zod19.z.string()).optional()
});

// src/schema/TileSchema.ts
var TileSchema = import_zod20.z.object({
  owner_id: import_zod20.z.string().optional(),
  structure: StructureSchema.optional(),
  ask_price: import_zod20.z.string().optional()
});

// src/schema/CommonersSchema.ts
var import_zod23 = require("zod");

// src/schema/TownDemandCategorySchema.ts
var import_zod22 = require("zod");

// src/schema/TownDemandSchema.ts
var import_zod21 = require("zod");
var TownDemandSchema = import_zod21.z.object({
  product: ItemEnumSchema,
  bonus: import_zod21.z.number().default(0),
  desire: import_zod21.z.number().default(0),
  request: import_zod21.z.number().default(0),
  result: import_zod21.z.number().default(0)
});

// src/schema/TownDemandCategorySchema.ts
var TownDemandCategorySchema = import_zod22.z.object({
  name: import_zod22.z.string(),
  products: import_zod22.z.array(TownDemandSchema)
});

// src/schema/CommonersSchema.ts
var CommonersSchema = import_zod23.z.object({
  account_id: import_zod23.z.string(),
  count: import_zod23.z.number(),
  migration: import_zod23.z.number(),
  sustenance: import_zod23.z.array(TownDemandCategorySchema)
});

// src/schema/TownGovernmentSchema.ts
var import_zod25 = require("zod");

// src/schema/TownGovernmentTaxesSchema.ts
var import_zod24 = require("zod");
var TownGovernmentTaxesSchema = import_zod24.z.object({
  land_tax: import_zod24.z.number().optional().default(0),
  structure_tax: import_zod24.z.number().optional().default(0),
  ferry_fees: import_zod24.z.number().optional().default(0)
});

// src/schema/TownGovernmentSchema.ts
var TownGovernmentSchema = import_zod25.z.object({
  account_id: import_zod25.z.string(),
  demands: import_zod25.z.array(TownDemandSchema),
  taxes_collected: TownGovernmentTaxesSchema
});

// src/schema/TownChurchSchema.ts
var import_zod26 = require("zod");
var TownChurchSchema = import_zod26.z.object({
  project_ids: import_zod26.z.array(import_zod26.z.string()).optional()
});

// src/schema/TownCultureSchema.ts
var import_zod27 = require("zod");
var TownCultureSchema = import_zod27.z.object({
  special_market_pressure: import_zod27.z.record(import_zod27.z.number(), import_zod27.z.number()).optional()
});

// src/schema/TownDataSchema.ts
var TownDataSchema = import_zod28.z.object({
  id: import_zod28.z.string(),
  name: import_zod28.z.string(),
  location: LocationSchema,
  region: import_zod28.z.number(),
  center_ids: import_zod28.z.array(import_zod28.z.number()),
  domain: import_zod28.z.record(import_zod28.z.string(), TileSchema),
  household_ids: import_zod28.z.array(import_zod28.z.string()),
  commoners: CommonersSchema,
  government: TownGovernmentSchema,
  church: TownChurchSchema,
  navigation_zones: import_zod28.z.record(import_zod28.z.number(), import_zod28.z.number()),
  culture: TownCultureSchema
});

// src/models/town.ts
var Town = class extends BaseModel {
  static schema = TownSchema;
  id;
  name;
  location;
  region;
  capital;
};
var TownData = class extends BaseModel {
  static schema = TownDataSchema;
  id;
  name;
  location;
  region;
  center_ids;
  domain;
  household_ids;
  commoners;
  government;
  church;
  navigation_zones;
  culture;
};

// src/schema/MarketSchema.ts
var import_zod30 = require("zod");

// src/schema/MarketItemSchema.ts
var import_zod29 = require("zod");
var MarketItemSchema = import_zod29.z.object({
  price: import_zod29.z.number().optional().default(0),
  last_price: import_zod29.z.number().optional().default(0),
  average_price: import_zod29.z.number().optional().default(0),
  moving_average: import_zod29.z.number().optional().default(0),
  highest_bid: import_zod29.z.number().optional().default(0),
  lowest_ask: import_zod29.z.number().optional().default(0),
  volume: import_zod29.z.number(),
  volume_prev_12: import_zod29.z.number().optional().default(0),
  bid_volume_10: import_zod29.z.number().optional().default(0),
  ask_volume_10: import_zod29.z.number().optional().default(0)
});

// src/schema/MarketSchema.ts
var MarketSchema = import_zod30.z.object({
  markets: import_zod30.z.record(ItemEnumSchema, MarketItemSchema),
  ts: import_zod30.z.number().describe("_ts")
});

// src/schema/MarketItemDetailsSchema.ts
var import_zod32 = require("zod");

// src/schema/ItemOrderSchema.ts
var import_zod31 = require("zod");
var ItemOrderSchema = import_zod31.z.object({
  volume: import_zod31.z.number(),
  price: import_zod31.z.number()
});

// src/schema/MarketItemDetailsSchema.ts
var MarketItemDetailsSchema = import_zod32.z.object({
  id: import_zod32.z.number(),
  product: ItemEnumSchema,
  asset: ItemEnumSchema,
  currency: import_zod32.z.string(),
  bids: import_zod32.z.array(ItemOrderSchema),
  asks: import_zod32.z.array(ItemOrderSchema),
  data: MarketItemSchema
});

// src/models/market.ts
var Market = class extends BaseModel {
  static schema = MarketSchema;
  markets;
  ts;
};
var MarketItemDetails = class extends BaseModel {
  static schema = MarketItemDetailsSchema;
  id;
  product;
  asset;
  currency;
  bids;
  asks;
  data;
};

// src/schema/ItemTradeSchema.ts
var import_zod33 = require("zod");
var ItemTradeSchema = import_zod33.z.object({
  direction: import_zod33.z.string(),
  expected_balance: import_zod33.z.number(),
  operation: import_zod33.z.string(),
  price: import_zod33.z.number(),
  volume: import_zod33.z.number()
});

// src/schema/ItemTradeResultSchema.ts
var import_zod35 = require("zod");

// src/schema/ItemTradeSettlementSchema.ts
var import_zod34 = require("zod");
var ItemTradeSettlementSchema = import_zod34.z.object({
  volume: import_zod34.z.number(),
  price: import_zod34.z.number()
});

// src/schema/ItemTradeResultSchema.ts
var ItemTradeResultSchema = import_zod35.z.object({
  settlements: import_zod35.z.array(ItemTradeSettlementSchema).optional(),
  order_id: import_zod35.z.number().optional(),
  embedded: import_zod35.z.record(import_zod35.z.string(), import_zod35.z.any()).optional().default({})
});

// src/models/itemTrade.ts
var ItemTrade = class extends BaseModel {
  direction;
  expectedBalance;
  operation;
  price;
  volume;
  constructor(direction, expectedBalance, operation, price, volume) {
    super();
    this.direction = direction;
    this.expectedBalance = expectedBalance;
    this.operation = operation;
    this.price = price;
    this.volume = volume;
  }
  static schema = ItemTradeSchema;
};
var ItemTradeResult = class extends BaseModel {
  static schema = ItemTradeResultSchema;
  settlements;
  order_id;
  embedded;
};

// src/utils/conversion.ts
function convertFloatsToStrings(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const convertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      convertedObj[key] = convertFloatsToStrings(value);
    } else if (typeof value === "number" && !Number.isInteger(value)) {
      convertedObj[key] = value.toString();
    } else {
      convertedObj[key] = value;
    }
  }
  return convertedObj;
}

// src/utils/errors.ts
var BuySellOrderFailedException = class extends Error {
  constructor(message) {
    super(message);
    this.name = "BuySellOrderFailedException";
  }
};
var SetManagerFailedException = class extends Error {
  constructor(message) {
    super(message);
    this.name = "SetManagerFailedException";
  }
};

// src/api/towns.ts
var TownsAPI = class extends baseAPI_default {
  endpoint = apiRoutes.towns;
  /**
   * Get a list of all towns in the game.
   * @returns A list of all towns in the game.
   */
  async getAll() {
    try {
      const response = await super.get();
      return response.map((townData) => Town.validate(townData));
    } catch (error) {
      throw new Error(`Failed to fetch towns: ${error.message}`);
    }
  }
  /**
   * Get data for a town.
   * @param id - The ID of the town.
   * @returns The data for the town.
   */
  async get({ id } = {}) {
    try {
      const response = await super.get({ endpoint: apiRoutes.townData, id });
      return TownData.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch town data for ID ${id}: ${error.message}`);
    }
  }
  /**
   * Get data for a town.
   * @param id - The ID of the town.
   * @returns The data for the town.
   */
  async getTown(id) {
    return await this.get({ id });
  }
  /**
   * Get data for a town.
   * @param id - The ID of the town.
   * @returns The data for the town.
   */
  async getTownData(id) {
    return await this.get({ id });
  }
  /**
   * Get market data for a town.
   * @param id - The ID of the town.
   * @returns The market data for the town.
   */
  async getMarketData(id) {
    try {
      const response = await super.get({ endpoint: apiRoutes.marketData, id });
      return Market.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch market data for town ID ${id}: ${error.message}`);
    }
  }
  /**
   * Get the market overview for an item in a town.
   * @param townId - The ID of the town.
   * @param item - The item to get the overview for.
   * @returns The market overview for the town.
   */
  async getMarketItem(townId, item) {
    try {
      const response = await super.get({ endpoint: apiRoutes.marketItem, id: townId, item });
      return MarketItemDetails.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch market item data for town ID ${townId} and item ${item}: ${error.message}`);
    }
  }
  async sendBuyOrder(item, id, expectedBalance, operation, price, volume) {
    return await this._sendOrder(
      item,
      id,
      expectedBalance,
      operation,
      price,
      volume,
      "bid"
    );
  }
  async sendSellOrder(item, id, expectedBalance, operation, price, volume) {
    return await this._sendOrder(
      item,
      id,
      expectedBalance,
      operation,
      price,
      volume,
      "ask"
    );
  }
  async _sendOrder(item, id, expectedBalance, operation, price, volume, direction) {
    const trade = new ItemTrade(
      direction,
      expectedBalance,
      operation,
      price,
      volume
    );
    const json = convertFloatsToStrings(trade);
    const response = await super.post({ endpoint: apiRoutes.orders, id, item, data: json });
    if (response.status == 200) {
      return ItemTradeResult.validate(response);
    } else {
      throw new BuySellOrderFailedException(
        `Failed to send ${direction} order: ${response.statusText}`
      );
    }
  }
};
var towns_default = TownsAPI;

// src/schema/BuildingSchema.ts
var import_zod43 = require("zod");

// src/schema/BuildingConstructionSchema.ts
var import_zod36 = require("zod");
var BuildingConstructionSchema = import_zod36.z.object({
  range: import_zod36.z.number().optional(),
  size: import_zod36.z.number().optional(),
  discount: import_zod36.z.number().optional(),
  time: import_zod36.z.number(),
  materials: import_zod36.z.record(ItemEnumSchema, import_zod36.z.number())
});

// src/schema/DeliveryCostSchema.ts
var import_zod37 = require("zod");
var DeliveryCostSchema = import_zod37.z.object({
  land_distance: import_zod37.z.number(),
  ferry_fee: import_zod37.z.number().optional()
});

// src/schema/ProducerSchema.ts
var import_zod40 = require("zod");

// src/schema/OperationSchema.ts
var import_zod39 = require("zod");

// src/schema/enums/RecipeEnumSchema.ts
var import_zod38 = require("zod");
var RecipeEnumSchema = import_zod38.z.enum([
  "bake bread 1",
  "bake bread 2",
  "bake pasties 1",
  "bake pasties 2",
  "bake pies 1",
  "bind garments 1",
  "bind garments 2",
  "blow glassware 1",
  "blow glassware 2",
  "boil dye 1",
  "boil dye 2",
  "border patrol 1",
  "border patrol 2",
  "breed cattle 1a",
  "breed cattle 1b",
  "breed cattle 2a",
  "breed cattle 2b",
  "brew beer 1",
  "brew beer 2",
  "brew beer 3",
  "brew beer 4",
  "brew hop beer 1",
  "brew hop beer 2",
  "build cog 1",
  "build cog 2",
  "build handcart 1",
  "build handcart 2",
  "build hulk 1",
  "build snekkja 1",
  "build snekkja 2",
  "build tumbrel 1",
  "burn bricks 1",
  "burn charcoal 1",
  "burn charcoal 2",
  "burn charcoal 3",
  "burn charcoal 4",
  "burn cookware 1",
  "burn cookware 2",
  "burn glass 1",
  "burn lime 1",
  "burn tar 1",
  "burn tar 2",
  "burn tiles 1",
  "burn tiles 2",
  "butcher cattle 1a",
  "butcher cattle 1b",
  "butcher cattle 2",
  "carting 1",
  "carting 2",
  "churn butter 1",
  "churn butter 2",
  "cog operations",
  "craft arms 1",
  "craft belts 1",
  "craft belts 2",
  "craft belts 3",
  "craft belts 4",
  "craft cookware 1",
  "craft furniture 1",
  "craft furniture 2",
  "craft furniture 3",
  "craft furniture 4",
  "craft ploughs 1",
  "craft ploughs 2",
  "craft ploughs 3",
  "craft scythes 1",
  "craft scythes 2",
  "craft tools 1",
  "craft tools 2",
  "craft wheels 1",
  "craft wheels 2",
  "craft wheels 3",
  "cut bricks 1",
  "cut grindstones 1",
  "delivery duty 1",
  "delivery duty 2",
  "dig clay 1",
  "dig clay 2",
  "distill spirits 1",
  "distill spirits 2",
  "dry fish 1",
  "dry fish 2",
  "dry stockfish 1",
  "dry stockfish 2",
  "dye cloth 1",
  "dye cloth 2",
  "extract stone 1",
  "extract stone 2",
  "extract stone 3",
  "fishing 1",
  "fishing 2a",
  "fishing 2b",
  "fishing 3",
  "forge arms 1",
  "forge arms 2",
  "forge arms 2b",
  "forge axes 1",
  "forge axes 1b",
  "forge axes 2",
  "forge axes 2b",
  "forge blades 1",
  "forge blades 1b",
  "forge blades 2",
  "forge blades 2b",
  "forge mouldboards 1",
  "forge pickaxes 1",
  "forge pickaxes 1b",
  "forge pickaxes 2",
  "forge pickaxes 2b",
  "forge swords 1",
  "forge swords 1b",
  "forge swords 2",
  "forge swords 2b",
  "forge tools 1",
  "forge tools 2",
  "forge tools 3",
  "gather firewood 1",
  "gather firewood 2",
  "gather resin 1",
  "gather resin 2",
  "grain payment",
  "grow flax 1",
  "grow flax 2",
  "grow flax 3",
  "grow flax 4a",
  "grow flax 4b",
  "grow grain 1",
  "grow grain 2",
  "grow grain 3a",
  "grow grain 3b",
  "grow grain 4a",
  "grow grain 4b",
  "grow herbs 1",
  "grow herbs 2",
  "hammer nails 1",
  "handcart operations",
  "harness ox 1",
  "harness ox 2a",
  "harness ox 2b",
  "harness ox 3a",
  "harness ox 3b",
  "harness ox 4a",
  "harness ox 4b",
  "herd sheep 1",
  "herd sheep 2",
  "hold banquet 1a",
  "hold banquet 1b",
  "hold banquet 2a",
  "hold banquet 2b",
  "hold banquet 2c",
  "hold banquet 3a",
  "hold banquet 3b",
  "hold banquet 3c",
  "hold banquet 4a",
  "hold banquet 4b",
  "hold feast 1",
  "hold feast 2",
  "hold feast 3",
  "hold mass 1",
  "hold mass 2",
  "hold mass 3",
  "hold prayer 1",
  "hold prayer 2",
  "hold prayer 3",
  "hold sermon 1",
  "hold sermon 2a",
  "hold sermon 2b",
  "hold sermon 3a",
  "hold sermon 3b",
  "hulk operations",
  "hunting 1",
  "hunting 2",
  "hunting 3",
  "hunting 4",
  "hunting 5",
  "keep bees 1",
  "knight duty 1",
  "knight duty 2",
  "knight duty 3",
  "knight duty 4",
  "knit garments 1",
  "knit garments 2",
  "let cottages 1",
  "let cottages 2",
  "logging 1",
  "logging 2",
  "logging 3",
  "maintain 1",
  "make alembics 1",
  "make alembics 2",
  "make bricks 1",
  "make bricks 2",
  "make candles 1",
  "make candles 2",
  "make casks 1",
  "make casks 2",
  "make cheese 1",
  "make cheese 2",
  "make cheese 3",
  "make cheese 4",
  "make cheese 5",
  "make harnesses 1",
  "make harnesses 2",
  "make harnesses 2b",
  "make jewellery 1",
  "make jewellery 2",
  "make leather armor 1",
  "make medicine 1",
  "make medicine 2",
  "make nets 1",
  "make nets 2",
  "make nets 3",
  "make rope 1",
  "make windows 1",
  "make wine 1",
  "make wine 2",
  "make wine 3",
  "malting 1",
  "malting 2",
  "milling 1",
  "milling 2",
  "milling 3",
  "mine copper 1",
  "mine copper 2",
  "mine copper 3",
  "mine copper 4",
  "mine copper 5",
  "mine gold 1",
  "mine gold 1b",
  "mine gold 2",
  "mine gold 2b",
  "mine gold 3",
  "mine iron 1",
  "mine iron 2",
  "mine iron 3",
  "mine iron 4",
  "mine iron 5",
  "mine lead 1",
  "mine lead 2",
  "mine lead 2b",
  "mine lead 3",
  "mine lead 3b",
  "mine lead 4",
  "mine salt 1",
  "mine salt 2",
  "mine salt 3",
  "mint copper coins 1",
  "mint copper coins 2",
  "mint copper coins 3",
  "mint gold coins 1",
  "mint gold coins 2",
  "mint gold coins 3",
  "mint leather coins 1",
  "mint silver coins 1",
  "mint silver coins 2",
  "mint silver coins 3",
  "mint steel coins 1",
  "patrol 1",
  "patrol 2a",
  "patrol 2b",
  "patrol 3a",
  "patrol 3b",
  "refine steel 1",
  "refine steel 1b",
  "refine steel 2",
  "refine steel 2b",
  "retting 1",
  "retting 2",
  "salting fish 1",
  "salting fish 2",
  "salting meat 1",
  "salting meat 2",
  "sawing 1",
  "sawing 2",
  "sawing 3",
  "sawing 4",
  "service 1",
  "service 2",
  "service 3",
  "service 4",
  "sew coats 1a",
  "sew coats 1b",
  "sew coats 2a",
  "sew coats 2b",
  "sew gambeson 1",
  "sew garments 1",
  "sew garments 2a",
  "sew garments 2b",
  "sew garments 3a",
  "sew garments 3b",
  "sew garments 4a",
  "sew garments 4b",
  "sew sails 1",
  "sew sails 2",
  "shear sheep 1",
  "shear sheep 2",
  "shear sheep 3",
  "smelt copper 1",
  "smelt copper 2",
  "smelt gold 1",
  "smelt gold 2",
  "smelt iron 1",
  "smelt iron 2",
  "smelt lead 1",
  "smelt lead 2a",
  "smelt lead 2b",
  "smelt lead 3 (silver)",
  "smoking fish 1",
  "smoking fish 2",
  "smoking ham 1",
  "smoking ham 2",
  "smoking meat 1",
  "smoking meat 2",
  "snekkja operations",
  "spin thread 1",
  "spin thread 2",
  "spin yarn 1",
  "spin yarn 2",
  "split timber 1",
  "split timber 2",
  "tan hides 1",
  "tan hides 2",
  "trap fish 1",
  "trap fish 2",
  "trap fish 3",
  "trapping 1",
  "trapping 2",
  "tumbrel operations",
  "weave cloth 1",
  "weave cloth 2a",
  "weave cloth 2b",
  "weave cloth 3a",
  "weave cloth 3b",
  "weave cloth 4a",
  "weave cloth 4b",
  "yoke ox 1a",
  "yoke ox 1b",
  "yoke ox 2a",
  "yoke ox 2b",
  "yoke ox 3",
  "yoke ox 3 (manure)"
]);

// src/schema/OperationSchema.ts
var OperationSchema = import_zod39.z.object({
  target: import_zod39.z.number(),
  production: import_zod39.z.number().optional(),
  provision: import_zod39.z.number().optional(),
  reference: import_zod39.z.string().optional(),
  recipe: RecipeEnumSchema.optional(),
  volume: import_zod39.z.number().optional(),
  tax_rate: import_zod39.z.number().optional(),
  tax: import_zod39.z.number().optional(),
  delivery_cost: DeliveryCostSchema.optional(),
  flows: import_zod39.z.record(ItemEnumSchema, FlowSchema).optional()
});

// src/schema/ProducerSchema.ts
var ProducerSchema = import_zod40.z.object({
  inventory: InventorySchema,
  limited: import_zod40.z.boolean(),
  manager: import_zod40.z.string(),
  previous_operation: OperationSchema,
  provider_id: import_zod40.z.number().optional(),
  recipe: RecipeEnumSchema,
  reference: import_zod40.z.string(),
  target: import_zod40.z.number().optional()
});

// src/schema/BuildingStorageSchema.ts
var import_zod41 = require("zod");
var BuildingStorageSchema = import_zod41.z.object({
  inventory: InventorySchema,
  operations: import_zod41.z.array(import_zod41.z.string()),
  reference: import_zod41.z.string()
});

// src/schema/enums/BuildingUpgradeTypeEnumSchema.ts
var import_zod42 = require("zod");
var BuildingUpgradeTypeEnumSchema = import_zod42.z.enum([
  "armsrack",
  "beehives",
  "bellows",
  "button cast",
  "cowshed",
  "crane",
  "crane lift",
  "curing chamber",
  "cutting table",
  "fermentory",
  "grindstone",
  "grooved bedstone",
  "guard booth",
  "hopping vessels",
  "lime kiln",
  "liming pots",
  "malt mill",
  "malt sieve",
  "manure pit",
  "plough house",
  "skinning table",
  "spinning wheel",
  "steel anvil",
  "stone oven",
  "stonecutter's hut",
  "tile moulds",
  "toolshed",
  "transmission",
  "treadle loom",
  "upholstry bench",
  "warehouse",
  "weaponsrack"
]);

// src/schema/BuildingSchema.ts
var BuildingSchema = import_zod43.z.object({
  capacity: import_zod43.z.number().optional(),
  construction: BuildingConstructionSchema.optional(),
  delivery_cost: DeliveryCostSchema,
  id: import_zod43.z.number(),
  land: import_zod43.z.array(LocationSchema).optional(),
  name: import_zod43.z.string(),
  owner_id: import_zod43.z.number(),
  producer: ProducerSchema.optional(),
  provider_id: import_zod43.z.number().optional(),
  size: import_zod43.z.number().optional(),
  storage: BuildingStorageSchema.optional(),
  sublocation: LocationSchema.optional(),
  town_id: import_zod43.z.number(),
  type: BuildingTypeEnumSchema,
  upgrades: import_zod43.z.array(BuildingUpgradeTypeEnumSchema).optional()
});

// src/schema/BuildingOperationSchema.ts
var import_zod44 = require("zod");
var BuildingOperationSchema = import_zod44.z.object({
  total_flow: import_zod44.z.record(ItemEnumSchema, FlowSchema).optional(),
  operations: import_zod44.z.array(OperationSchema).optional()
});

// src/models/building.ts
var Building = class extends BaseModel {
  static schema = BuildingSchema;
  capacity;
  construction;
  delivery_cost;
  id;
  land;
  name;
  owner_id;
  producer;
  provider_id;
  size;
  storage;
  sublocation;
  town_id;
  type;
  upgrades;
};
var BuildingOperation = class extends BaseModel {
  static schema = BuildingOperationSchema;
  total_flow;
  operations;
};

// src/api/buildings.ts
var import_lodash = require("lodash");
var _ = __toESM(require("lodash"));
var BuildingsAPI = class extends baseAPI_default {
  endpoint = apiRoutes.buildings;
  /**
   * Get data for a building.
   * @param id - The ID of the building.
   * @returns The data for the building.
   */
  async get({ id } = {}) {
    try {
      const response = await super.get({ id });
      return Building.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch building with ID ${id}: ${error.message}`);
    }
  }
  async getOperations(id) {
    try {
      const response = await super.get({ endpoint: apiRoutes.buildingOperations, id });
      if (response.status == 404) {
        return new BuildingOperation();
      }
      return BuildingOperation.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch building with ID ${id}: ${error.message}`);
    }
  }
  async setManager(id, item, manager) {
    try {
      const json = convertFloatsToStrings((0, import_lodash.pickBy)(manager, _.identity));
      const response = await super.patch({ endpoint: apiRoutes.buildingSetManager, id, item, data: json });
      if (response.status && response.status == 200) {
        return Building.validate(response.data["_embedded"][`/buildings/${id}`]);
      } else {
        throw new SetManagerFailedException(`Failed to set manager for ${item} on building ${id}: ${response.statusText}`);
      }
    } catch (error) {
      throw new SetManagerFailedException(`Failed to set manager for ${item} on building ${id}: ${error.message}`);
    }
  }
  async setProductionTargetMultiplier(id, target, autosetBuying = true, autosetSelling = true) {
    const payload = { target, autoset_buying: autosetBuying, autoset_selling: autosetSelling };
    const json = convertFloatsToStrings(payload);
    const response = await super.patch({ endpoint: apiRoutes.producer, id, data: json });
    return response.status == 200;
  }
};
var buildings_default = BuildingsAPI;

// src/schema/BusinessSchema.ts
var import_zod45 = require("zod");
var BusinessSchema = import_zod45.z.object({
  account: AccountSchema,
  account_id: import_zod45.z.string(),
  building_ids: import_zod45.z.array(import_zod45.z.number()),
  buildings: import_zod45.z.array(BuildingSchema),
  contract_ids: import_zod45.z.array(import_zod45.z.string()).optional().nullable(),
  id: import_zod45.z.number(),
  name: import_zod45.z.string(),
  owner_id: import_zod45.z.number(),
  transport_ids: import_zod45.z.array(import_zod45.z.number()).optional().nullable()
});

// src/schema/BusinessBuildingSchema.ts
var import_zod46 = require("zod");
var BusinessBuildingSchema = import_zod46.z.object({
  id: import_zod46.z.number(),
  type: BuildingTypeEnumSchema
});

// src/models/business.ts
var Business = class extends BaseModel {
  static schema = BusinessSchema;
  account;
  account_id;
  building_ids;
  buildings;
  contract_ids;
  id;
  name;
  owner_id;
  transport_ids;
};

// src/api/businesses.ts
var BusinessesAPI = class extends baseAPI_default {
  endpoint = apiRoutes.business;
  /**
   Get a business by its ID.
   * @param {number} id - The ID of the business.
   * @returns The business with the given ID.
   */
  async get({ id } = {}) {
    try {
      const response = await super.get({ id });
      return Business.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch business with ID ${id}: ${error.message}`);
    }
  }
};
var businesses_default = BusinessesAPI;

// src/schema/RegionSchema.ts
var import_zod47 = require("zod");
var RegionSchema = import_zod47.z.object({
  id: import_zod47.z.number(),
  // Adjust type as necessary, e.g., z.string() or z.number()
  name: import_zod47.z.string(),
  description: import_zod47.z.string().optional(),
  center: LocationSchema.optional(),
  size: import_zod47.z.number().optional()
});

// src/models/region.ts
var Region = class extends BaseModel {
  static schema = RegionSchema;
  id;
  name;
  description;
  center;
  size;
};

// src/api/regions.ts
var RegionAPI = class extends baseAPI_default {
  endpoint = apiRoutes.regions;
  /**
   * Get a list of all regions in the game.
   * @returns A list of all regions in the game.
   */
  async getAll() {
    try {
      const response = await super.get();
      return response.map((regionData) => Region.validate(regionData));
    } catch (error) {
      throw new Error(`Failed to fetch regions: ${error.message}`);
    }
  }
};
var regions_default = RegionAPI;

// src/api/static.ts
var import_axios = __toESM(require("axios"));
var import_lru_cache = require("lru-cache");

// src/schema/ItemSchema.ts
var import_zod50 = require("zod");

// src/schema/enums/ItemTypeEnumSchema.ts
var import_zod48 = require("zod");
var ItemTypeEnumSchema = import_zod48.z.enum([
  "commodity",
  "service",
  "special"
]);

// src/schema/ItemPriceSchema.ts
var import_zod49 = require("zod");
var ItemPriceSchema = import_zod49.z.object({
  low: import_zod49.z.number().optional(),
  typical: import_zod49.z.number(),
  high: import_zod49.z.number().optional()
});

// src/schema/ItemSchema.ts
var ItemSchema = import_zod50.z.object({
  name: ItemEnumSchema,
  type: ItemTypeEnumSchema,
  unit: import_zod50.z.string(),
  weight: import_zod50.z.number().optional(),
  tier: import_zod50.z.number(),
  classes: import_zod50.z.array(SkillEnumSchema).optional().default([]),
  price: ItemPriceSchema
});

// src/models/item.ts
var Item = class extends BaseModel {
  static schema = ItemSchema;
  name;
  type;
  unit;
  weight;
  tier;
  classes;
  price;
};

// src/schema/RecipeSchema.ts
var import_zod52 = require("zod");

// src/schema/IngredientSchema.ts
var import_zod51 = require("zod");
var IngredientSchema = import_zod51.z.object({
  product: ItemEnumSchema,
  amount: import_zod51.z.number()
});

// src/schema/RecipeSchema.ts
var RecipeSchema = import_zod52.z.object({
  name: RecipeEnumSchema,
  tier: import_zod52.z.number(),
  building: BuildingTypeEnumSchema,
  size: import_zod52.z.number(),
  product_class: SkillEnumSchema.optional().describe("class"),
  points: import_zod52.z.number().optional(),
  inputs: import_zod52.z.array(IngredientSchema).optional().default([]),
  outputs: import_zod52.z.array(IngredientSchema).optional().default([])
});

// src/models/recipe.ts
var Recipe = class extends BaseModel {
  static schema = RecipeSchema;
  name;
  tier;
  building;
  size;
  product_class;
  points;
  inputs;
  outputs;
};

// src/schema/TransportSchema.ts
var import_zod60 = require("zod");

// src/schema/TransportTypeSchema.ts
var import_zod54 = require("zod");

// src/schema/enums/TransportTypeEnumSchema.ts
var import_zod53 = require("zod");
var TransportTypeEnumSchema = import_zod53.z.enum([
  "cog",
  "handcart",
  "hulk",
  "snekkja",
  "tumbrel"
]);

// src/schema/TransportTypeSchema.ts
var TransportTypeSchema = import_zod54.z.object({
  type: TransportTypeEnumSchema,
  category: import_zod54.z.number(),
  tier: import_zod54.z.number(),
  capacity: import_zod54.z.number(),
  speed: import_zod54.z.number(),
  journey_duration: import_zod54.z.number().optional(),
  effective_days: import_zod54.z.number().optional(),
  operating_costs: import_zod54.z.record(ItemEnumSchema, import_zod54.z.number()),
  catches: import_zod54.z.string().optional(),
  fishing_range: import_zod54.z.number().optional()
});

// src/schema/TransportCargoSchema.ts
var import_zod55 = require("zod");
var TransportCargoSchema = import_zod55.z.object({
  reference: import_zod55.z.string(),
  inventory: InventorySchema.optional()
});

// src/schema/TradeRouteSchema.ts
var import_zod56 = require("zod");
var TradeRouteSchema = import_zod56.z.object({
  id: import_zod56.z.number(),
  reference: import_zod56.z.string(),
  local_town: import_zod56.z.number(),
  remote_town: import_zod56.z.number(),
  capacity: import_zod56.z.number(),
  reserved_import: import_zod56.z.number(),
  reserved_export: import_zod56.z.number(),
  distance: import_zod56.z.number(),
  moves: import_zod56.z.number(),
  provider_id: import_zod56.z.number(),
  account_id: import_zod56.z.string(),
  account: AccountSchema,
  managers: import_zod56.z.record(ItemEnumSchema, ManagerSchema),
  current_flows: import_zod56.z.record(ItemEnumSchema, FlowSchema),
  previous_flows: import_zod56.z.record(ItemEnumSchema, FlowSchema)
});

// src/schema/TransportJourneySchema.ts
var import_zod59 = require("zod");

// src/schema/TransportJourneyLegSchema.ts
var import_zod58 = require("zod");

// src/schema/PathSchema.ts
var import_zod57 = require("zod");
var PathSchema = import_zod57.z.object({
  x: import_zod57.z.number(),
  y: import_zod57.z.number(),
  c: import_zod57.z.number()
});

// src/schema/TransportJourneyLegSchema.ts
var TransportJourneyLegSchema = import_zod58.z.object({
  path: import_zod58.z.array(PathSchema)
});

// src/schema/TransportJourneySchema.ts
var TransportJourneySchema = import_zod59.z.object({
  category: import_zod59.z.string(),
  start_town_id: import_zod59.z.number(),
  distance: import_zod59.z.number(),
  moves: import_zod59.z.number(),
  legs: import_zod59.z.array(TransportJourneyLegSchema)
});

// src/schema/TransportSchema.ts
var TransportSchema = import_zod60.z.object({
  id: import_zod60.z.number(),
  reference: import_zod60.z.string(),
  type: TransportTypeSchema,
  size: import_zod60.z.number(),
  name: import_zod60.z.string(),
  owner_id: import_zod60.z.number(),
  hometown_id: import_zod60.z.number(),
  location: LocationSchema,
  domain: import_zod60.z.array(LocationSchema).optional(),
  capacity: import_zod60.z.number(),
  fish_quantity: import_zod60.z.number().optional(),
  inventory: InventorySchema,
  cargo: TransportCargoSchema.optional(),
  previous_operations: OperationSchema.optional(),
  provider_id: import_zod60.z.number().optional(),
  producer: ProducerSchema.optional(),
  route: TradeRouteSchema.optional(),
  journey: TransportJourneySchema
});

// src/models/transport.ts
var Transport = class extends BaseModel {
  static schema = TransportSchema;
  id;
  reference;
  type;
  size;
  name;
  owner_id;
  hometown_id;
  location;
  domain;
  capacity;
  fish_quantity;
  inventory;
  cargo;
  previous_operations;
  provider_id;
  producer;
  route;
  journey;
};
var TradeRoute = class extends BaseModel {
  static schema = TradeRouteSchema;
  id;
  reference;
  local_town;
  remote_town;
  capacity;
  reserved_import;
  reserved_export;
  distance;
  moves;
  provider_id;
  account_id;
  account;
  managers;
  current_flows;
  previous_flows;
};

// src/api/static.ts
var StaticAPI = class extends baseAPI_default {
  endpoint = staticUrl;
  cache;
  constructor(client) {
    super(client);
    this.cache = new import_lru_cache.LRUCache({ max: 1 });
  }
  async getBuildings() {
    const data = await this._get();
    return data["Gm"].map((item) => Building.validate(item));
  }
  async getItems() {
    const data = await this._get();
    return data["RB"].map((item) => Item.validate(item));
  }
  async getRecipes() {
    const data = await this._get();
    return data["F_"].map((item) => Recipe.validate(item));
  }
  async getTransport() {
    const data = await this._get();
    return data["g$"].map((item) => Transport.validate(item));
  }
  async _get() {
    if (this.cache.has("staticData")) {
      return this.cache.get("staticData");
    }
    const response = await import_axios.default.get(rootUrl);
    const pattern = /src="\/static\/js\/(.*?)">/;
    const filename = response.data.match(pattern)[1];
    const staticResponse = await import_axios.default.get(staticUrl + filename);
    const jsonPattern = /JSON\.parse\('(.*?)'\)/;
    const jsonData = JSON.parse(staticResponse.data.match(jsonPattern)[1].replace(/\\/g, ""));
    this.cache.set("staticData", jsonData);
    return jsonData;
  }
};
var static_default = StaticAPI;

// src/api/transports.ts
var import_lodash2 = require("lodash");
var _2 = __toESM(require("lodash"));
var TransportsAPI = class extends baseAPI_default {
  endpoint = apiRoutes.transports;
  /**
   * Get data for a town.
   * @param id - The ID of the transport.
   * @returns The data for the transport.
   */
  async get({ id } = {}) {
    try {
      const response = await super.get({ id });
      return Transport.validate(response);
    } catch (error) {
      throw new Error(`Failed to fetch town data for ID ${id}: ${error.message}`);
    }
  }
  /**
   * Sets the manager for the item.
   * @param id - The ID of the transport.
   * @param item - The item to set the manager for.
   * @param manager - The manager to set.
   * @returns The transport route with the manager set.
   */
  async setManager(id, item, manager) {
    const json = convertFloatsToStrings((0, import_lodash2.pickBy)(manager, _2.identity));
    const response = await super.patch({ endpoint: apiRoutes.transportManager, id, item, data: json });
    if (response.status == 200) {
      return TradeRoute.validate(response);
    } else {
      throw new SetManagerFailedException(
        `Failed to set manager for ${item} on transport ${id}: ${response.statusText}`
      );
    }
  }
};
var transports_default = TransportsAPI;

// src/game/town.ts
var Town2 = class {
  constructor(client, id, data = null) {
    this.id = id;
    this._client = client;
    this.data = data;
  }
  _client;
  _market;
  data;
  async load() {
    this.data = await this._client.townsApi.getTown(this.id);
    this._market = await this._client.townsApi.getMarketData(this.id);
  }
  get commoners() {
    return this.data.commoners;
  }
  get demands() {
    return this.data.commoners.demands;
  }
  get market() {
    return this._market.markets;
  }
  get name() {
    return this.data.name;
  }
  get structures() {
    const structures = {};
    for (const domain in this.data.domain) {
      if (this.data.domain[domain].structure !== null) {
        structures[domain] = this.data.domain[domain].structure;
      }
    }
    return structures;
  }
  get totalSatisfaction() {
    const demands = this.data.commoners.sustenance.flatMap((category) => category.products);
    const desireTotal = demands.reduce((acc, demand) => acc + demand.desire, 0);
    const resultTotal = demands.reduce((acc, demand) => acc + demand.result, 0);
    return Math.ceil(resultTotal / desireTotal * 100);
  }
  get totalStructures() {
    return Object.values(this.data.domain).filter((domain) => domain.structure !== null).length;
  }
  get totalTaxes() {
    return Object.values(this.data.government.taxes_collected).reduce((acc, value) => acc + value, 0);
  }
  async buy(item, expectedBalance, operation, volume, price) {
    return await this._client.townsApi.sendBuyOrder(item, this.id, expectedBalance, operation, price, volume);
  }
  async fetchMarketItem(item) {
    return await this._client.townsApi.getMarketItem(this.id, item);
  }
  item(item) {
    return this._market.markets[item];
  }
  async sell(item, expectedBalance, operation, volume, price) {
    return await this._client.townsApi.sendSellOrder(item, this.id, expectedBalance, operation, price, volume);
  }
};

// src/game/operation.ts
var BuildingOperation2 = class {
  data;
  operations;
  _client;
  player;
  buildingId;
  constructor(client, player, buildingId) {
    this._client = client;
    this.player = player;
    this.buildingId = buildingId;
  }
  async load() {
    this.data = await this._client.buildingsApi.getOperations(this.buildingId);
    if (this.data && this.data.operations) {
      this.operations = new OperationsList(
        ...await Promise.all(
          this.data.operations.map((operation) => {
            return this._client.getOperation(this.player, this, operation);
          })
        )
      );
    } else {
      this.operations = new OperationsList();
    }
  }
  get building() {
    return this.player.buildings.byId(this.buildingId);
  }
  get totalFlow() {
    return this.data.total_flow;
  }
};
var Operation = class {
  data;
  recipe;
  _client;
  player;
  buildingOperation;
  constructor(client, player, buildingOperation, data) {
    this._client = client;
    this.player = player;
    this.buildingOperation = buildingOperation;
    this.data = data;
  }
  async load() {
    const recipes = await this._client.staticApi.getRecipes();
    for (const recipe of recipes) {
      if (recipe.name === this.data.recipe) {
        this.recipe = await this._client.getRecipe({ recipe });
        break;
      }
    }
  }
  get building() {
    return this.player.buildings.byId(this.buildingId);
  }
  get buildingId() {
    return parseInt(this.data.reference.split("/")[1]);
  }
  get inputs() {
    if (!this.recipe) {
      return /* @__PURE__ */ new Map();
    }
    const inputs = /* @__PURE__ */ new Map();
    for (const ingredient of Object.values(this.recipe.inputs)) {
      inputs.set(ingredient.product, ingredient.amount * this.data.target);
    }
    return inputs;
  }
  get outputs() {
    if (!this.recipe) {
      return /* @__PURE__ */ new Map();
    }
    const outputs = /* @__PURE__ */ new Map();
    for (const ingredient of Object.values(this.recipe.outputs)) {
      outputs.set(ingredient.product, ingredient.amount * this.data.target);
    }
    return outputs;
  }
};
var OperationsList = class _OperationsList extends Array {
  get inputs() {
    const inputs = /* @__PURE__ */ new Map();
    this.forEach((operation) => {
      operation.inputs.forEach((amount, item) => {
        inputs.set(item, (inputs.get(item) || 0) + amount);
      });
    });
    return inputs;
  }
  get outputs() {
    const outputs = /* @__PURE__ */ new Map();
    this.forEach((operation) => {
      operation.outputs.forEach((amount, item) => {
        outputs.set(item, (outputs.get(item) || 0) + amount);
      });
    });
    return outputs;
  }
  byBuildingId(buildingId) {
    return new _OperationsList(
      ...this.filter((operation) => operation.buildingId === buildingId)
    );
  }
};

// src/game/recipe.ts
var Recipe2 = class {
  name;
  data;
  _client;
  constructor(options) {
    this._client = options.client;
    if (options.recipe) {
      this.data = options.recipe;
    }
    if (options.recipeName) {
      this.name = options.recipeName;
    }
  }
  async load() {
    if (!this.data && this.name) {
      const recipes = await this._client.staticApi.getRecipes();
      for (const recipe of recipes) {
        if (recipe.name === this.name) {
          this.data = recipe;
          break;
        }
      }
    }
  }
  get inputs() {
    const inputsMap = /* @__PURE__ */ new Map();
    for (const ingredient of this.data.inputs) {
      inputsMap.set(ingredient.product, ingredient);
    }
    return inputsMap;
  }
  get outputs() {
    const outputsMap = /* @__PURE__ */ new Map();
    for (const ingredient of this.data.outputs) {
      outputsMap.set(ingredient.product, ingredient);
    }
    return outputsMap;
  }
  get labour() {
    for (const inputIngredient of this.data.inputs) {
      if (inputIngredient.product === "labour" /* Labour */) {
        return inputIngredient.amount;
      }
    }
    return 0;
  }
  calculateTargetLabor(target, inventoryAssets = {}, inventoryManagers = {}) {
    for (const inputIngredient of this.data.inputs) {
      if (inputIngredient.product === "labour" /* Labour */) {
        continue;
      }
      const requiredAmount = inputIngredient.amount * target;
      let availableAmount = 0;
      const asset = inventoryAssets[inputIngredient.product];
      if (asset) {
        const manager = inventoryManagers[inputIngredient.product];
        const buyVolume = manager ? manager.buyVolume : 0;
        const capacity = asset.capacity || asset.balance + buyVolume;
        availableAmount = Math.min(asset.balance - asset.reserved + buyVolume, capacity);
      }
      if (requiredAmount > availableAmount) {
        target = Math.min(target, availableAmount / inputIngredient.amount);
      }
    }
    return this.labour * target;
  }
};

// src/game/building.ts
var Building2 = class {
  _client;
  _id;
  id;
  player;
  data;
  constructor(client, player, id) {
    this._client = client;
    this.player = player;
    this._id = id;
    this.id = this._id;
  }
  async load() {
    this.data = await this._client.buildingsApi.get({ id: this._id });
  }
  get buildingOperation() {
    return this.player.operations.get(this._id) || null;
  }
  get flows() {
    if (this.buildingOperation && this.buildingOperation.totalFlow) {
      return this.buildingOperation.data.total_flow;
    } else if (this.operation) {
      return this.operation.data.flows;
    } else {
      return null;
    }
  }
  get inventory() {
    return this.data && this.data.storage ? this.data.storage.inventory : null;
  }
  get items() {
    return this.data && this.data.storage ? this.data.storage.inventory.account.assets : null;
  }
  get operation() {
    return this.operations && this.operations.length === 1 ? this.operations[0] : null;
  }
  get operations() {
    return this.id in this.player.operations ? this.player.operations[this.id].operations : null;
  }
  get managers() {
    return this.data && this.data.storage ? this.data.storage.inventory.managers : {};
  }
  get previous_flows() {
    return this.data && this.data.storage ? this.data.storage.inventory.previous_flows : null;
  }
  get production() {
    return this.data ? this.data.producer : null;
  }
  get productionFlows() {
    return this.data && this.data.producer ? this.data.producer.inventory.previous_flows : null;
  }
  get size() {
    return this.data ? this.data.size : null;
  }
  get targetProduction() {
    return this.production && this.production.target ? this.production.target : 0;
  }
  get type() {
    return this.data ? this.data.type : null;
  }
  get underConstruction() {
    return this.data ? this.data.construction !== null : false;
  }
  get upgrades() {
    return this.data ? this.data.upgrades : null;
  }
  async flow(item) {
    return this.data && this.data.storage ? this.data.storage.inventory.previous_flows[item] : null;
  }
  async item(item) {
    return this.data && this.data.storage ? this.data.storage.inventory.account.assets[item] : null;
  }
  async manager(item) {
    return this.data && this.data.storage ? this.data.storage.inventory.managers[item] : null;
  }
  async patchManager(item, managerData) {
    if (!this.data || !this.data.storage || !this.data.storage.inventory.managers[item]) {
      throw new Error(`Item ${item} does not have a manager.`);
    }
    const manager = this.data.storage.inventory.managers[item];
    for (const key in managerData) {
      manager[key] = managerData[key];
    }
    const updatedObject = await this._client.buildingsApi.setManager(this.id, item, manager);
    Object.assign(this, updatedObject);
  }
  async setManager(item, manager) {
    const updatedObject = await this._client.buildingsApi.setManager(this.id, item, manager);
    Object.assign(this, updatedObject);
  }
  async setTargetProduction(target, autoset_buying = true, autoset_selling = true) {
    const updatedObject = await this._client.buildingsApi.setProductionTargetMultiplier(this.id, target, autoset_buying, autoset_selling);
    Object.assign(this, updatedObject);
  }
  async calculateCurrentLaborNeed() {
    if (this.production) {
      const recipe = new Recipe2({ client: this._client, recipeName: this.production.recipe });
      await recipe.load();
      if (recipe) {
        let inventoryAssets;
        if (this.items) {
          inventoryAssets = this.items;
        } else if (this.data && this.data.producer) {
          inventoryAssets = this.data.producer.inventory.account.assets;
        }
        let inventoryManagers;
        if (this.data && this.data.storage) {
          inventoryManagers = this.data.storage.inventory.managers;
        } else if (this.data && this.data.producer) {
          inventoryManagers = this.data.producer.inventory.managers;
        }
        return recipe.calculateTargetLabor(
          this.targetProduction,
          Object.fromEntries(inventoryAssets),
          Object.fromEntries(inventoryManagers)
        );
      }
    }
    return 0;
  }
};

// src/game/exports.ts
var Export = class {
  asset;
  flow;
  item;
  manager;
  town;
  transport;
  constructor(asset, flow, item, manager, town, transport) {
    this.asset = asset;
    this.flow = flow;
    this.item = item;
    this.manager = manager;
    this.town = town;
    this.transport = transport;
  }
  get market_data() {
    return this.town.market[this.item];
  }
  get flowed() {
    return this.flow.export || 0;
  }
  get value() {
    return this.manager.maxSellPrice;
  }
  get valueFlowed() {
    if (!this.flowed) {
      return 0;
    }
    return this.asset.sale * this.asset.sale_price;
  }
  get volume() {
    return this.manager.sellVolume;
  }
  get volumeFlowed() {
    return this.flow.export || 0;
  }
  async fetchMarketDetails() {
    return await this.town.fetchMarketItem(this.item);
  }
  async sell(volume, price) {
    await this.transport.sell(this.item, volume, price);
  }
  async patchManager(buyPrice, buyVolume, sellPrice, sellVolume) {
    await this.transport.patchManager(this.item, buyPrice, buyVolume, sellPrice, sellVolume);
  }
};
var ExportsList = class _ExportsList extends Array {
  data;
  constructor(...items) {
    super(...items);
  }
  get flowed() {
    return new _ExportsList(...this.data.filter((exp) => exp.flowed));
  }
  get value() {
    return this.data.reduce((acc, exp) => acc + exp.value, 0);
  }
  get valueFlowed() {
    return this.data.reduce((acc, exp) => acc + exp.valueFlowed, 0);
  }
  get volume() {
    return this.data.reduce((acc, exp) => acc + exp.volume, 0);
  }
  get volumeFlowed() {
    return this.data.reduce((acc, exp) => acc + exp.volumeFlowed, 0);
  }
  byTownId(id) {
    return new _ExportsList(...this.data.filter((exp) => +exp.town.data.id === id));
  }
  byTownName(name) {
    return new _ExportsList(...this.data.filter((exp) => exp.town.data.name === name));
  }
};

// src/game/imports.ts
var Import = class {
  asset;
  flow;
  item;
  manager;
  town;
  transport;
  constructor(asset, flow, item, manager, town, transport) {
    this.asset = asset;
    this.flow = flow;
    this.item = item;
    this.manager = manager;
    this.town = town;
    this.transport = transport;
  }
  get cost() {
    return this.manager.maxBuyPrice;
  }
  get cost_flowed() {
    if (!this.flowed) {
      return 0;
    }
    return this.asset.purchase * this.asset.purchase_price;
  }
  get flowed() {
    return this.flow.imported || 0;
  }
  get marketData() {
    return this.town.market[this.item];
  }
  get volume() {
    return this.manager.buyVolume;
  }
  get volumeFlowed() {
    return this.flow.imported || 0;
  }
  async buy(volume, price) {
    await this.transport.buy(this.item, volume, price);
  }
  async fetchMarketDetails() {
    return await this.town.fetchMarketItem(this.item);
  }
  async patchManager(buyPrice, buyVolume, sellPrice, sellVolume) {
    await this.transport.patchManager(this.item, buyPrice, buyVolume, sellPrice, sellVolume);
  }
};
var ImportsList = class _ImportsList extends Array {
  data;
  get cost() {
    return this.data.reduce((acc, imp) => acc + imp.cost, 0);
  }
  get costFlowed() {
    return this.data.reduce((acc, imp) => acc + imp.cost_flowed, 0);
  }
  get flowed() {
    return new _ImportsList(...this.data.filter((imp) => imp.flowed));
  }
  get volume() {
    return this.data.reduce((acc, imp) => acc + imp.volume, 0);
  }
  get volumeFlowed() {
    return this.data.reduce((acc, imp) => acc + imp.volumeFlowed, 0);
  }
  byTownId(id) {
    return new _ImportsList(...this.data.filter((imp) => +imp.town.data.id === id));
  }
  byTownName(name) {
    return new _ImportsList(...this.data.filter((imp) => imp.town.data.name === name));
  }
};

// src/models/account.ts
var Account = class extends BaseModel {
  static schema = AccountSchema;
  assets;
  id;
  master_id;
  name;
  owner_id;
  sponsor_id;
};

// src/models/manager.ts
var Manager = class extends BaseModel {
  static schema = ManagerSchema;
  _buyPrice;
  _buyVolume;
  _capacity;
  _maxHolding;
  _sellPrice;
  _sellVolume;
  constructor(data) {
    super();
    this.buyPrice = data.buyPrice;
    this.buyVolume = data.buyVolume;
    this.capacity = data.capacity;
    this.maxHolding = data.maxHolding;
    this.sellPrice = data.sellPrice;
    this.sellVolume = data.sellVolume;
  }
  get buyPrice() {
    return this._buyPrice;
  }
  set buyPrice(value) {
    this._buyPrice = value;
  }
  get buyVolume() {
    return this._buyVolume;
  }
  set buyVolume(value) {
    this._buyVolume = value;
  }
  get capacity() {
    return this._capacity;
  }
  set capacity(value) {
    this._capacity = value;
  }
  get maxHolding() {
    return this._maxHolding;
  }
  set maxHolding(value) {
    this._maxHolding = value;
  }
  get sellPrice() {
    return this._sellPrice;
  }
  set sellPrice(value) {
    this._sellPrice = value;
  }
  get sellVolume() {
    return this._sellVolume;
  }
  set sellVolume(value) {
    this._sellVolume = value;
  }
  get buying() {
    return this.buyPrice !== null && this.buyVolume !== null;
  }
  get maxBuyPrice() {
    return this.buyPrice * this.buyVolume;
  }
  get maxSellPrice() {
    return this.sellPrice * this.sellVolume;
  }
  get selling() {
    return this.sellPrice !== null && this.sellVolume !== null;
  }
};

// src/game/transport.ts
var Transport2 = class {
  id;
  town;
  exports;
  imports;
  inventory;
  route;
  data;
  _client;
  player;
  constructor(client, player, id) {
    this._client = client;
    this.player = player;
    this.id = id;
  }
  get docked() {
    return this.town !== null;
  }
  get market() {
    if (this.docked) {
      return this.town.market;
    } else {
      return null;
    }
  }
  async load() {
    this.data = await this._client.transportsApi.get({ id: this.id });
    if (this.data.route) {
      const data = await this._client.townsApi.getTown(this.data.route.remote_town);
    }
    this.loadImportsExports();
  }
  async buy(item, volume, price) {
    if (!this.docked) {
      throw new Error("The transport must be docked to buy an item.");
    }
    const expectedBalance = this.player.storehouse.items[item].balance;
    const result = await this.town.buy(item, expectedBalance, `route/${this.id}`, volume, price);
    this.player.storehouse.updateAccount(await Account.validate(result.embedded[`/accounts/${this.data.route.account.id}`]));
    return result;
  }
  async exportItem(item, volume, price) {
    if (!this.docked) {
      throw new Error("The transport must be docked to export an item.");
    }
    const manager = new Manager({ sellVolume: volume, sellPrice: price });
    await this.setManager(item, manager);
  }
  async importItem(item, volume, price) {
    if (!this.docked) {
      throw new Error("The transport must be docked to import an item.");
    }
    const manager = new Manager({ buyVolume: volume, buyPrice: price });
    await this.setManager(item, manager);
  }
  async patchManager(item, buyPrice, buyVolume, sellPrice, sellVolume) {
    if (!this.docked) {
      throw new Error("The transport must be docked to patch a manager.");
    }
    if (!(item in this.data.route.managers)) {
      throw new Error("The item does not have a manager.");
    }
    const manager = this.data.route.managers[item];
    if (buyPrice !== void 0) manager.buyPrice = buyPrice;
    if (buyVolume !== void 0) manager.buyVolume = buyVolume;
    if (sellPrice !== void 0) manager.sellPrice = sellPrice;
    if (sellVolume !== void 0) manager.sellVolume = sellVolume;
    this.updateRoute(await this._client.transportsApi.setManager(this.id, item, manager));
  }
  async sell(item, volume, price) {
    if (!this.docked) {
      throw new Error("The transport must be docked to sell an item.");
    }
    const expectedBalance = this.player.storehouse.items[item].balance;
    const result = await this.town.sell(item, expectedBalance, `route/${this.id}`, volume, price);
    this.player.storehouse.updateAccount(await Account.validate(result.embedded[`/accounts/${this.data.route.account.id}`]));
    return result;
  }
  async setManager(item, manager) {
    if (!this.docked) {
      throw new Error("The transport must be docked to set a manager.");
    }
    this.updateRoute(await this._client.transportsApi.setManager(this.id, item, manager));
  }
  updateRoute(route) {
    this.data.route = route;
    this.loadImportsExports();
  }
  loadImportsExports() {
    if (this.docked) {
      for (const item in this.route.managers) {
        const asset = this.route.account.assets[item];
        const flow = this.data.route.current_flows[item];
        if (this.route.managers[item].buyVolume) {
          this.imports[item] = new Import(asset, flow, item, this.route.managers[item], this.town, this);
        }
        if (this.route.managers[item].sellVolume) {
          this.exports[item] = new Export(asset, flow, item, this.route.managers[item], this.town, this);
        }
      }
    }
  }
};

// src/game/storehouse.ts
var Storehouse = class {
  _client;
  player;
  items;
  data;
  constructor(client, player) {
    this._client = client;
    this.player = player;
    this.items = /* @__PURE__ */ new Map();
  }
  async load() {
    const storehouses = this.player.buildings.byType("storehouse" /* Storehouse */).concat(this.player.buildings.byType("warehouse" /* Warehouse */));
    if (!storehouses.length) {
      throw new Error("No storehouses found.");
    }
    this.data = storehouses[0];
    this._loadInventory();
  }
  get flows() {
    return this.data.flows;
  }
  get id() {
    return this.data.id;
  }
  get operations() {
    return this.data.operations;
  }
  get previousFlows() {
    return this.data.previous_flows;
  }
  async buy(item, volume, price) {
    const result = await this.player.town.buy(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
    const validatedAccount = await Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]);
    this.updateAccount(validatedAccount);
    return result;
  }
  async patchManager(item, data) {
    await this.data.patchManager(item, data);
  }
  async sell(item, volume, price) {
    const result = await this.player.town.sell(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
    const validatedAccount = await Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]);
    this.updateAccount(validatedAccount);
    return result;
  }
  async setManager(item, manager) {
    await this._client.buildingsApi.setManager(this.data.id, item, manager);
  }
  updateAccount(account) {
    this.data.inventory.account = account;
    this._loadInventory();
  }
  _loadInventory() {
    this.data.items.forEach((data, item) => {
      this.items.set(item, new StorehouseItem(
        data,
        this.player.exports.get(item) || new ExportsList(),
        this.player.imports.get(item) || new ImportsList(),
        item,
        this.data.inventory.managers[item] || null,
        this.flows.get(item, null),
        this
      ));
    });
  }
};
var StorehouseItem = class {
  asset;
  exports;
  imports;
  item;
  manager;
  flow;
  storehouse;
  constructor(asset, exports2, imports, item, manager, flow, storehouse) {
    this.asset = asset;
    this.exports = exports2;
    this.imports = imports;
    this.item = item;
    this.manager = manager;
    this.flow = flow;
    this.storehouse = storehouse;
  }
  get averageCost() {
    let totalCost = 0;
    let totalVolume = 0;
    if (this.produced) {
      totalCost += this.productionCost;
      totalVolume += this.produced;
    }
    if (this.imported) {
      totalCost += this.importCostFlowed;
      totalVolume += this.imported;
    }
    if (this.purchased) {
      totalCost += this.purchasedCost;
      totalVolume += this.purchased;
    }
    return totalCost / totalVolume || 0;
  }
  get balance() {
    return this.asset.balance;
  }
  get capacity() {
    return this.asset.capacity;
  }
  get consumed() {
    return this.flow ? this.flow.consumption : 0;
  }
  get consumptionCost() {
    return this.consumed * this.averageCost || 0;
  }
  get exported() {
    return this.flow ? this.flow.export || 0 : 0;
  }
  get exportValue() {
    return this.exports.value;
  }
  get exportValueFlowed() {
    return this.exports.valueFlowed;
  }
  get exportVolume() {
    return this.exports.volume;
  }
  get exportVolumeFlowed() {
    return this.exports.volumeFlowed;
  }
  get imported() {
    return this.flow ? this.flow.imported || 0 : 0;
  }
  get importCost() {
    return this.imports.cost;
  }
  get importCostFlowed() {
    return this.imports.costFlowed;
  }
  get importVolume() {
    return this.imports.volume;
  }
  get importVolumeFlowed() {
    return this.imports.volumeFlowed;
  }
  get marketData() {
    return this.storehouse.player.town.item(this.item);
  }
  get sold() {
    return this.flow ? this.flow.sale || 0 : 0;
  }
  get saleValue() {
    return this.sold * this.asset.sale_price;
  }
  get produced() {
    return this.flow ? this.flow.production : 0;
  }
  get productionCost() {
    return this.flow ? this.flow.production_cost || 0 : 0;
  }
  get purchased() {
    return this.flow ? this.flow.purchase || 0 : 0;
  }
  get purchasedCost() {
    return this.purchased * this.asset.purchase_price;
  }
  buy(volume, price) {
    return this.storehouse.buy(this.item, volume, price);
  }
  fetchMarketDetails() {
    return this.storehouse.player.town.fetchMarketItem(this.item);
  }
  patchManager(data) {
    return this.storehouse.patchManager(this.item, data);
  }
  sell(volume, price) {
    return this.storehouse.sell(this.item, volume, price);
  }
  setManager(manager) {
    return this.storehouse.setManager(this.item, manager);
  }
};

// src/client.ts
var Client = class {
  user;
  token;
  baseUrl;
  session;
  endpoint;
  buildingsApi;
  businessesApi;
  regionsApi;
  playerApi;
  staticApi;
  townsApi;
  transportsApi;
  /**
   * Creates an instance of Client.
   * @param user - The API username.
   * @param token - The API token.
   * @param baseUrl - The base URL for the API.
   */
  constructor(user, token, baseUrl = apiUrl) {
    this.user = user;
    this.token = token;
    this.baseUrl = baseUrl;
    this.session = import_axios2.default.create({
      baseURL: this.baseUrl,
      headers: {
        "X-Merc-User": this.user,
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    this.buildingsApi = new buildings_default(this);
    this.businessesApi = new businesses_default(this);
    this.regionsApi = new regions_default(this);
    this.playerApi = new players_default(this);
    this.staticApi = new static_default(this);
    this.townsApi = new towns_default(this);
    this.transportsApi = new transports_default(this);
  }
  /**
   * Makes a GET request.
   * @returns The response data.
   */
  async get(endpoint) {
    try {
      const response = await this.session.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET ${endpoint} failed: ${error.message}`);
    }
  }
  /**-
   * Makes a PATCH request.
   * @param endpoint - The API endpoint.
   * @param data - The data to send.
   * @returns The response data.
   */
  async patch(endpoint, data) {
    try {
      return await this.session.patch(endpoint, data);
    } catch (error) {
      throw new Error(`PATCH ${endpoint} failed: ${error.message}`);
    }
  }
  /**
   * Makes a POST request.
   * @param endpoint - The API endpoint.
   * @param data - The data to send.
   * @returns The response data.
   */
  async post(endpoint, data) {
    try {
      const response = await this.session.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`POST ${endpoint} failed: ${error.message}`);
    }
  }
  /**
   * Makes a PUT request.
   * @param endpoint - The API endpoint.
   * @param data - The data to send.
   * @returns The response data.
   */
  async put(endpoint, data) {
    try {
      const response = await this.session.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`PUT ${endpoint} failed: ${error.message}`);
    }
  }
  get Turn() {
    return new turns_default(this);
  }
  async getTurn() {
    const turnAPI = new turns_default(this);
    return await turnAPI.get();
  }
  get Player() {
    return new players_default(this);
  }
  async getPlayer() {
    const playerAPI = new players_default(this);
    return await playerAPI.get();
  }
  get Towns() {
    return new towns_default(this);
  }
  async getTowns(filter = []) {
    const townsAPI = new towns_default(this);
    const towns = await townsAPI.getAll();
    const tasks = towns.filter((town) => !filter.length || filter.includes(town.name)).map((town) => this.getTown(town.id));
    return await Promise.all(tasks);
  }
  /**
   * Get data for a town.
   * @param id - The ID of the town.
   * @returns The data for the town.
   */
  async getTown(id) {
    const data = await this.townsApi.getTown(id);
    return new Town2(this, id, data);
  }
  async getBuilding(player, id) {
    const b = new Building2(this, player, id);
    await b.load();
    return b;
  }
  async getBuildingOperation(player, buildingId) {
    const buildingOperation = new BuildingOperation2(this, player, buildingId);
    await buildingOperation.load();
    return buildingOperation;
  }
  async getOperation(player, buildingOperation, operation) {
    const op = new Operation(this, player, buildingOperation, operation);
    await op.load();
    return op;
  }
  async getRecipe(options) {
    const r = new Recipe2({ client: this, recipe: options.recipe, recipeName: options.recipeName });
    await r.load();
    return r;
  }
  async getStorehouse(player) {
    const storehouse = new Storehouse(this, player);
    await storehouse.load();
    return storehouse;
  }
  async getTransport(player, id) {
    const transport = new Transport2(this, player, id);
    await transport.load();
    return transport;
  }
};
var client_default = Client;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=client.js.map