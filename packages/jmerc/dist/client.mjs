// src/client.ts
import axios2 from "axios";

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
import { z } from "zod";
var TurnSchema = z.object({
  turn: z.number(),
  month: z.string().optional(),
  year: z.number().optional()
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
import { z as z15 } from "zod";

// src/schema/HouseholdSchema.ts
import { z as z12 } from "zod";

// src/schema/PrestigeImpactSchema.ts
import { z as z2 } from "zod";
var PrestigeImpactSchema = z2.object({
  factor: z2.string(),
  impact: z2.number()
});

// src/schema/WorkerSchema.ts
import { z as z4 } from "zod";

// src/schema/enums/SkillEnumSchema.ts
import { z as z3 } from "zod";
var SkillEnumSchema = z3.enum([
  "crafting",
  "forging",
  "maritime",
  "mercantile",
  "nutrition",
  "textile",
  "weaponry"
]);

// src/schema/WorkerSchema.ts
var WorkerSchema = z4.object({
  assignment: z4.string(),
  capacity: z4.number(),
  name: z4.string(),
  skills: z4.record(SkillEnumSchema, z4.number())
  // Using z.record to define a dictionary with Skill as key and float as value
});

// src/schema/SustenanceSchema.ts
import { z as z11 } from "zod";

// src/schema/InventorySchema.ts
import { z as z10 } from "zod";

// src/schema/enums/ItemEnumSchema.ts
import { z as z5 } from "zod";
var ItemEnumSchema = z5.enum([
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
import { z as z7 } from "zod";

// src/schema/AccountAssetSchema.ts
import { z as z6 } from "zod";
var AccountAssetSchema = z6.object({
  balance: z6.number(),
  capacity: z6.number().optional(),
  purchase: z6.number().optional(),
  purchase_price: z6.number().optional(),
  reserved: z6.number(),
  reserved_capacity: z6.number().optional(),
  sale: z6.number().optional(),
  sale_price: z6.number().optional(),
  unit_cost: z6.number().optional()
});

// src/schema/AccountSchema.ts
var AccountSchema = z7.object({
  assets: z7.map(ItemEnumSchema, AccountAssetSchema),
  id: z7.string(),
  master_id: z7.string().optional(),
  name: z7.string().optional(),
  owner_id: z7.number(),
  sponsor_id: z7.string().optional()
});

// src/schema/ManagerSchema.ts
import { z as z8 } from "zod";
var ManagerSchema = z8.object({
  buy_price: z8.number().optional(),
  buy_volume: z8.number().optional(),
  capacity: z8.number().optional(),
  max_holding: z8.number().optional(),
  sell_price: z8.number().optional(),
  sell_volume: z8.number().optional()
});

// src/schema/FlowSchema.ts
import { z as z9 } from "zod";
var FlowSchema = z9.object({
  consumption: z9.number().optional().default(0),
  expiration: z9.number().optional().default(0),
  export: z9.number().optional(),
  imported: z9.number().optional().nullable().default(null).describe("import"),
  production: z9.number().optional().default(0),
  production_cost: z9.number().optional().default(0),
  purchase: z9.number().optional(),
  purchase_cost: z9.number().optional().default(0),
  resident: z9.number().optional(),
  sale: z9.number().optional(),
  sale_value: z9.number().optional().default(0),
  shortfall: z9.number().optional().default(0)
});

// src/schema/InventorySchema.ts
var InventorySchema = z10.object({
  account: AccountSchema,
  capacity: z10.number(),
  managers: z10.map(ItemEnumSchema, ManagerSchema).optional(),
  previous_flows: z10.record(ItemEnumSchema, FlowSchema).optional().default({}),
  reserved: z10.number().optional()
});

// src/schema/SustenanceSchema.ts
var SustenanceSchema = z11.object({
  reference: z11.string(),
  inventory: InventorySchema,
  provider_id: z11.string().optional()
});

// src/schema/HouseholdSchema.ts
var HouseholdSchema = z12.object({
  id: z12.string(),
  name: z12.string(),
  town_id: z12.number(),
  portrait: z12.string(),
  gender: z12.string(),
  account_id: z12.string(),
  business_ids: z12.array(z12.string()),
  prestige: z12.number(),
  prestige_impacts: z12.array(PrestigeImpactSchema).optional(),
  workers: z12.array(WorkerSchema),
  operations: z12.array(z12.string()),
  caps: z12.record(z12.string(), z12.number()),
  sustenance: SustenanceSchema
});

// src/schema/SettingsSchema.ts
import { z as z14 } from "zod";

// src/schema/NotificationSettingsSchema.ts
import { z as z13 } from "zod";
var NotificationSettingsSchema = z13.object({
  discord: z13.boolean(),
  mutes: z13.array(z13.string()).optional().default([])
});

// src/schema/SettingsSchema.ts
var SettingsSchema = z14.object({
  sound_volume: z14.number(),
  notifications: NotificationSettingsSchema,
  commoners_splash: z14.boolean(),
  construction_splash: z14.boolean(),
  land_purchase_splash: z14.boolean(),
  operations_splash: z14.boolean(),
  production_splash: z14.boolean(),
  recipes_splash: z14.boolean(),
  sustenance_splash: z14.boolean(),
  trading_splash: z14.boolean(),
  trade_config_splash: z14.boolean(),
  welcome_splash: z14.boolean(),
  first_building_splash: z14.boolean(),
  warehouse_splash: z14.boolean()
});

// src/schema/PlayerSchema.ts
var PlayerSchema = z15.object({
  username: z15.string(),
  household: HouseholdSchema,
  discord_id: z15.string().optional(),
  settings: SettingsSchema,
  active: z15.boolean()
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
import { z as z17 } from "zod";

// src/schema/LocationSchema.ts
import { z as z16 } from "zod";
var LocationSchema = z16.object({
  x: z16.number(),
  y: z16.number()
});

// src/schema/TownSchema.ts
var TownSchema = z17.object({
  id: z17.number(),
  name: z17.string(),
  location: LocationSchema,
  region: z17.number(),
  capital: z17.boolean().default(false)
});

// src/schema/TownDataSchema.ts
import { z as z28 } from "zod";

// src/schema/TileSchema.ts
import { z as z20 } from "zod";

// src/schema/StructureSchema.ts
import { z as z19 } from "zod";

// src/schema/enums/BuildingTypeEnumSchema.ts
import { z as z18 } from "zod";
var BuildingTypeEnumSchema = z18.enum([
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
var StructureSchema = z19.object({
  id: z19.string(),
  type: BuildingTypeEnumSchema,
  tags: z19.array(z19.string()).optional()
});

// src/schema/TileSchema.ts
var TileSchema = z20.object({
  owner_id: z20.string().optional(),
  structure: StructureSchema.optional(),
  ask_price: z20.string().optional()
});

// src/schema/CommonersSchema.ts
import { z as z23 } from "zod";

// src/schema/TownDemandCategorySchema.ts
import { z as z22 } from "zod";

// src/schema/TownDemandSchema.ts
import { z as z21 } from "zod";
var TownDemandSchema = z21.object({
  product: ItemEnumSchema,
  bonus: z21.number().default(0),
  desire: z21.number().default(0),
  request: z21.number().default(0),
  result: z21.number().default(0)
});

// src/schema/TownDemandCategorySchema.ts
var TownDemandCategorySchema = z22.object({
  name: z22.string(),
  products: z22.array(TownDemandSchema)
});

// src/schema/CommonersSchema.ts
var CommonersSchema = z23.object({
  account_id: z23.string(),
  count: z23.number(),
  migration: z23.number(),
  sustenance: z23.array(TownDemandCategorySchema)
});

// src/schema/TownGovernmentSchema.ts
import { z as z25 } from "zod";

// src/schema/TownGovernmentTaxesSchema.ts
import { z as z24 } from "zod";
var TownGovernmentTaxesSchema = z24.object({
  land_tax: z24.number().optional().default(0),
  structure_tax: z24.number().optional().default(0),
  ferry_fees: z24.number().optional().default(0)
});

// src/schema/TownGovernmentSchema.ts
var TownGovernmentSchema = z25.object({
  account_id: z25.string(),
  demands: z25.array(TownDemandSchema),
  taxes_collected: TownGovernmentTaxesSchema
});

// src/schema/TownChurchSchema.ts
import { z as z26 } from "zod";
var TownChurchSchema = z26.object({
  project_ids: z26.array(z26.string()).optional()
});

// src/schema/TownCultureSchema.ts
import { z as z27 } from "zod";
var TownCultureSchema = z27.object({
  special_market_pressure: z27.record(z27.number(), z27.number()).optional()
});

// src/schema/TownDataSchema.ts
var TownDataSchema = z28.object({
  id: z28.string(),
  name: z28.string(),
  location: LocationSchema,
  region: z28.number(),
  center_ids: z28.array(z28.number()),
  domain: z28.record(z28.string(), TileSchema),
  household_ids: z28.array(z28.string()),
  commoners: CommonersSchema,
  government: TownGovernmentSchema,
  church: TownChurchSchema,
  navigation_zones: z28.record(z28.number(), z28.number()),
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
import { z as z30 } from "zod";

// src/schema/MarketItemSchema.ts
import { z as z29 } from "zod";
var MarketItemSchema = z29.object({
  price: z29.number().optional().default(0),
  last_price: z29.number().optional().default(0),
  average_price: z29.number().optional().default(0),
  moving_average: z29.number().optional().default(0),
  highest_bid: z29.number().optional().default(0),
  lowest_ask: z29.number().optional().default(0),
  volume: z29.number(),
  volume_prev_12: z29.number().optional().default(0),
  bid_volume_10: z29.number().optional().default(0),
  ask_volume_10: z29.number().optional().default(0)
});

// src/schema/MarketSchema.ts
var MarketSchema = z30.object({
  markets: z30.record(ItemEnumSchema, MarketItemSchema),
  ts: z30.number().describe("_ts")
});

// src/schema/MarketItemDetailsSchema.ts
import { z as z32 } from "zod";

// src/schema/ItemOrderSchema.ts
import { z as z31 } from "zod";
var ItemOrderSchema = z31.object({
  volume: z31.number(),
  price: z31.number()
});

// src/schema/MarketItemDetailsSchema.ts
var MarketItemDetailsSchema = z32.object({
  id: z32.number(),
  product: ItemEnumSchema,
  asset: ItemEnumSchema,
  currency: z32.string(),
  bids: z32.array(ItemOrderSchema),
  asks: z32.array(ItemOrderSchema),
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
import { z as z33 } from "zod";
var ItemTradeSchema = z33.object({
  direction: z33.string(),
  expected_balance: z33.number(),
  operation: z33.string(),
  price: z33.number(),
  volume: z33.number()
});

// src/schema/ItemTradeResultSchema.ts
import { z as z35 } from "zod";

// src/schema/ItemTradeSettlementSchema.ts
import { z as z34 } from "zod";
var ItemTradeSettlementSchema = z34.object({
  volume: z34.number(),
  price: z34.number()
});

// src/schema/ItemTradeResultSchema.ts
var ItemTradeResultSchema = z35.object({
  settlements: z35.array(ItemTradeSettlementSchema).optional(),
  order_id: z35.number().optional(),
  embedded: z35.record(z35.string(), z35.any()).optional().default({})
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
import { z as z43 } from "zod";

// src/schema/BuildingConstructionSchema.ts
import { z as z36 } from "zod";
var BuildingConstructionSchema = z36.object({
  range: z36.number().optional(),
  size: z36.number().optional(),
  discount: z36.number().optional(),
  time: z36.number(),
  materials: z36.record(ItemEnumSchema, z36.number())
});

// src/schema/DeliveryCostSchema.ts
import { z as z37 } from "zod";
var DeliveryCostSchema = z37.object({
  land_distance: z37.number(),
  ferry_fee: z37.number().optional()
});

// src/schema/ProducerSchema.ts
import { z as z40 } from "zod";

// src/schema/OperationSchema.ts
import { z as z39 } from "zod";

// src/schema/enums/RecipeEnumSchema.ts
import { z as z38 } from "zod";
var RecipeEnumSchema = z38.enum([
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
var OperationSchema = z39.object({
  target: z39.number(),
  production: z39.number().optional(),
  provision: z39.number().optional(),
  reference: z39.string().optional(),
  recipe: RecipeEnumSchema.optional(),
  volume: z39.number().optional(),
  tax_rate: z39.number().optional(),
  tax: z39.number().optional(),
  delivery_cost: DeliveryCostSchema.optional(),
  flows: z39.record(ItemEnumSchema, FlowSchema).optional()
});

// src/schema/ProducerSchema.ts
var ProducerSchema = z40.object({
  inventory: InventorySchema,
  limited: z40.boolean(),
  manager: z40.string(),
  previous_operation: OperationSchema,
  provider_id: z40.number().optional(),
  recipe: RecipeEnumSchema,
  reference: z40.string(),
  target: z40.number().optional()
});

// src/schema/BuildingStorageSchema.ts
import { z as z41 } from "zod";
var BuildingStorageSchema = z41.object({
  inventory: InventorySchema,
  operations: z41.array(z41.string()),
  reference: z41.string()
});

// src/schema/enums/BuildingUpgradeTypeEnumSchema.ts
import { z as z42 } from "zod";
var BuildingUpgradeTypeEnumSchema = z42.enum([
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
var BuildingSchema = z43.object({
  capacity: z43.number().optional(),
  construction: BuildingConstructionSchema.optional(),
  delivery_cost: DeliveryCostSchema,
  id: z43.number(),
  land: z43.array(LocationSchema).optional(),
  name: z43.string(),
  owner_id: z43.number(),
  producer: ProducerSchema.optional(),
  provider_id: z43.number().optional(),
  size: z43.number().optional(),
  storage: BuildingStorageSchema.optional(),
  sublocation: LocationSchema.optional(),
  town_id: z43.number(),
  type: BuildingTypeEnumSchema,
  upgrades: z43.array(BuildingUpgradeTypeEnumSchema).optional()
});

// src/schema/BuildingOperationSchema.ts
import { z as z44 } from "zod";
var BuildingOperationSchema = z44.object({
  total_flow: z44.record(ItemEnumSchema, FlowSchema).optional(),
  operations: z44.array(OperationSchema).optional()
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
import { pickBy } from "lodash";
import * as _ from "lodash";
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
      const json = convertFloatsToStrings(pickBy(manager, _.identity));
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
import { z as z45 } from "zod";
var BusinessSchema = z45.object({
  account: AccountSchema,
  account_id: z45.string(),
  building_ids: z45.array(z45.number()),
  buildings: z45.array(BuildingSchema),
  contract_ids: z45.array(z45.string()).optional().nullable(),
  id: z45.number(),
  name: z45.string(),
  owner_id: z45.number(),
  transport_ids: z45.array(z45.number()).optional().nullable()
});

// src/schema/BusinessBuildingSchema.ts
import { z as z46 } from "zod";
var BusinessBuildingSchema = z46.object({
  id: z46.number(),
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
import { z as z47 } from "zod";
var RegionSchema = z47.object({
  id: z47.number(),
  // Adjust type as necessary, e.g., z.string() or z.number()
  name: z47.string(),
  description: z47.string().optional(),
  center: LocationSchema.optional(),
  size: z47.number().optional()
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
import axios from "axios";
import { LRUCache } from "lru-cache";

// src/schema/ItemSchema.ts
import { z as z50 } from "zod";

// src/schema/enums/ItemTypeEnumSchema.ts
import { z as z48 } from "zod";
var ItemTypeEnumSchema = z48.enum([
  "commodity",
  "service",
  "special"
]);

// src/schema/ItemPriceSchema.ts
import { z as z49 } from "zod";
var ItemPriceSchema = z49.object({
  low: z49.number().optional(),
  typical: z49.number(),
  high: z49.number().optional()
});

// src/schema/ItemSchema.ts
var ItemSchema = z50.object({
  name: ItemEnumSchema,
  type: ItemTypeEnumSchema,
  unit: z50.string(),
  weight: z50.number().optional(),
  tier: z50.number(),
  classes: z50.array(SkillEnumSchema).optional().default([]),
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
import { z as z52 } from "zod";

// src/schema/IngredientSchema.ts
import { z as z51 } from "zod";
var IngredientSchema = z51.object({
  product: ItemEnumSchema,
  amount: z51.number()
});

// src/schema/RecipeSchema.ts
var RecipeSchema = z52.object({
  name: RecipeEnumSchema,
  tier: z52.number(),
  building: BuildingTypeEnumSchema,
  size: z52.number(),
  product_class: SkillEnumSchema.optional().describe("class"),
  points: z52.number().optional(),
  inputs: z52.array(IngredientSchema).optional().default([]),
  outputs: z52.array(IngredientSchema).optional().default([])
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
import { z as z60 } from "zod";

// src/schema/TransportTypeSchema.ts
import { z as z54 } from "zod";

// src/schema/enums/TransportTypeEnumSchema.ts
import { z as z53 } from "zod";
var TransportTypeEnumSchema = z53.enum([
  "cog",
  "handcart",
  "hulk",
  "snekkja",
  "tumbrel"
]);

// src/schema/TransportTypeSchema.ts
var TransportTypeSchema = z54.object({
  type: TransportTypeEnumSchema,
  category: z54.number(),
  tier: z54.number(),
  capacity: z54.number(),
  speed: z54.number(),
  journey_duration: z54.number().optional(),
  effective_days: z54.number().optional(),
  operating_costs: z54.record(ItemEnumSchema, z54.number()),
  catches: z54.string().optional(),
  fishing_range: z54.number().optional()
});

// src/schema/TransportCargoSchema.ts
import { z as z55 } from "zod";
var TransportCargoSchema = z55.object({
  reference: z55.string(),
  inventory: InventorySchema.optional()
});

// src/schema/TradeRouteSchema.ts
import { z as z56 } from "zod";
var TradeRouteSchema = z56.object({
  id: z56.number(),
  reference: z56.string(),
  local_town: z56.number(),
  remote_town: z56.number(),
  capacity: z56.number(),
  reserved_import: z56.number(),
  reserved_export: z56.number(),
  distance: z56.number(),
  moves: z56.number(),
  provider_id: z56.number(),
  account_id: z56.string(),
  account: AccountSchema,
  managers: z56.record(ItemEnumSchema, ManagerSchema),
  current_flows: z56.record(ItemEnumSchema, FlowSchema),
  previous_flows: z56.record(ItemEnumSchema, FlowSchema)
});

// src/schema/TransportJourneySchema.ts
import { z as z59 } from "zod";

// src/schema/TransportJourneyLegSchema.ts
import { z as z58 } from "zod";

// src/schema/PathSchema.ts
import { z as z57 } from "zod";
var PathSchema = z57.object({
  x: z57.number(),
  y: z57.number(),
  c: z57.number()
});

// src/schema/TransportJourneyLegSchema.ts
var TransportJourneyLegSchema = z58.object({
  path: z58.array(PathSchema)
});

// src/schema/TransportJourneySchema.ts
var TransportJourneySchema = z59.object({
  category: z59.string(),
  start_town_id: z59.number(),
  distance: z59.number(),
  moves: z59.number(),
  legs: z59.array(TransportJourneyLegSchema)
});

// src/schema/TransportSchema.ts
var TransportSchema = z60.object({
  id: z60.number(),
  reference: z60.string(),
  type: TransportTypeSchema,
  size: z60.number(),
  name: z60.string(),
  owner_id: z60.number(),
  hometown_id: z60.number(),
  location: LocationSchema,
  domain: z60.array(LocationSchema).optional(),
  capacity: z60.number(),
  fish_quantity: z60.number().optional(),
  inventory: InventorySchema,
  cargo: TransportCargoSchema.optional(),
  previous_operations: OperationSchema.optional(),
  provider_id: z60.number().optional(),
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
    this.cache = new LRUCache({ max: 1 });
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
    const response = await axios.get(rootUrl);
    const pattern = /src="\/static\/js\/(.*?)">/;
    const filename = response.data.match(pattern)[1];
    const staticResponse = await axios.get(staticUrl + filename);
    const jsonPattern = /JSON\.parse\('(.*?)'\)/;
    const jsonData = JSON.parse(staticResponse.data.match(jsonPattern)[1].replace(/\\/g, ""));
    this.cache.set("staticData", jsonData);
    return jsonData;
  }
};
var static_default = StaticAPI;

// src/api/transports.ts
import { pickBy as pickBy2 } from "lodash";
import * as _2 from "lodash";
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
    const json = convertFloatsToStrings(pickBy2(manager, _2.identity));
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
  constructor(asset, exports, imports, item, manager, flow, storehouse) {
    this.asset = asset;
    this.exports = exports;
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
    this.session = axios2.create({
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
export {
  Client,
  client_default as default
};
//# sourceMappingURL=client.mjs.map