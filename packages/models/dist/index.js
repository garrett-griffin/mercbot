var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActionSchema: () => ActionSchema,
  GameAccountSchema: () => GameAccountSchema,
  LocationSchema: () => LocationSchema,
  PlayerSchema: () => PlayerSchema,
  RecurringActionSchema: () => RecurringActionSchema,
  RegionSchema: () => RegionSchema,
  SeasonSchema: () => SeasonSchema,
  SiteSchema: () => SiteSchema,
  TownDataSchema: () => TownDataSchema,
  TownSchema: () => TownSchema,
  TurnSchema: () => TurnSchema,
  UserSchema: () => UserSchema
});
module.exports = __toCommonJS(src_exports);

// src/action.ts
var import_zod12 = require("zod");

// src/gameAccount.ts
var import_zod11 = require("zod");

// src/user.ts
var import_zod = require("zod");
var UserSchema = import_zod.z.object({
  pk: import_zod.z.number().optional(),
  id: import_zod.z.number().optional(),
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(8),
  role: import_zod.z.string().optional(),
  lockedOut: import_zod.z.boolean().optional()
});

// src/season.ts
var import_zod3 = require("zod");

// src/site.ts
var import_zod2 = require("zod");
var SiteSchema = import_zod2.z.object({
  pk: import_zod2.z.number().int(),
  name: import_zod2.z.string(),
  url: import_zod2.z.string(),
  seasons: import_zod2.z.array(SeasonSchema)
  // adjust this based on your `Season` schema
});

// src/season.ts
var SeasonSchema = import_zod3.z.object({
  pk: import_zod3.z.number().int(),
  number: import_zod3.z.number().int(),
  siteId: import_zod3.z.number().int(),
  site: SiteSchema,
  gameAccounts: import_zod3.z.array(GameAccountSchema),
  // adjust this based on your `GameAccount` schema
  turns: import_zod3.z.array(import_zod3.z.unknown()).optional(),
  // adjust this based on your `Turn` schema
  Region: import_zod3.z.array(import_zod3.z.unknown()).optional()
  // adjust this based on your `Region` schema
});

// src/recurringAction.ts
var import_zod9 = require("zod");

// src/turn.ts
var import_zod8 = require("zod");

// src/town.ts
var import_zod7 = require("zod");

// src/location.ts
var import_zod6 = require("zod");

// src/region.ts
var import_zod5 = require("zod");

// src/townData.ts
var import_zod4 = require("zod");
var TownDataSchema = import_zod4.z.object({
  pk: import_zod4.z.number().int(),
  id: import_zod4.z.string(),
  name: import_zod4.z.string(),
  locationId: import_zod4.z.number().int(),
  location: LocationSchema,
  // Assumes you have a Location Zod schema
  region: import_zod4.z.number().int(),
  centerIds: import_zod4.z.array(import_zod4.z.number()),
  householdIds: import_zod4.z.array(import_zod4.z.string()),
  commonersId: import_zod4.z.number().int(),
  commoners: import_zod4.z.unknown(),
  // Assumes you have a Commoners Zod schema
  governmentId: import_zod4.z.number().int(),
  government: import_zod4.z.unknown(),
  // Assumes you have a TownGovernment Zod schema
  churchId: import_zod4.z.number().int(),
  church: import_zod4.z.unknown(),
  // Assumes you have a TownChurch Zod schema
  navigationZones: import_zod4.z.any(),
  // Update to appropriate type
  cultureId: import_zod4.z.number().int(),
  culture: import_zod4.z.unknown(),
  // Assumes you have a TownCulture Zod schema
  domain: import_zod4.z.array(import_zod4.z.unknown()),
  // Assumes you have a TownDataDomain Zod schema
  turnId: import_zod4.z.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  townId: import_zod4.z.number().int(),
  Town: TownSchema,
  RegionRef: RegionSchema
});

// src/region.ts
var RegionSchema = import_zod5.z.object({
  pk: import_zod5.z.number().int(),
  id: import_zod5.z.number(),
  name: import_zod5.z.string(),
  description: import_zod5.z.string().optional(),
  centerId: import_zod5.z.number().int().optional(),
  center: LocationSchema.optional(),
  // Assumes you have a Location Zod schema
  size: import_zod5.z.number().optional(),
  seasonId: import_zod5.z.number().int(),
  season: SeasonSchema,
  // Assumes you have a Season Zod schema
  TownData: TownDataSchema
});

// src/location.ts
var LocationSchema = import_zod6.z.object({
  pk: import_zod6.z.number().int(),
  x: import_zod6.z.number(),
  y: import_zod6.z.number(),
  buildingLand: import_zod6.z.array(import_zod6.z.unknown()),
  // Assumes you have a Building Zod schema
  buildingSublocation: import_zod6.z.unknown().optional(),
  regions: import_zod6.z.array(RegionSchema),
  // Assumes you have a Region Zod schema
  towns: import_zod6.z.array(TownSchema),
  // Assumes you have a Town Zod schema
  townDatas: import_zod6.z.array(TownDataSchema),
  // Assumes you have a TownData Zod schema
  transports: import_zod6.z.array(import_zod6.z.unknown()),
  // Assumes you have a Transport Zod schema
  turnId: import_zod6.z.number().int(),
  turn: TurnSchema
  // Assumes you have a Turn Zod schema
});

// src/town.ts
var TownSchema = import_zod7.z.object({
  pk: import_zod7.z.number().int(),
  id: import_zod7.z.number(),
  name: import_zod7.z.string(),
  locationId: import_zod7.z.number().int(),
  location: LocationSchema,
  // Assumes you have a Location Zod schema
  region: import_zod7.z.number(),
  capital: import_zod7.z.boolean().default(false),
  turnId: import_zod7.z.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  TownData: import_zod7.z.array(TownDataSchema)
});

// src/turn.ts
var TurnSchema = import_zod8.z.object({
  pk: import_zod8.z.number().int(),
  turn: import_zod8.z.number(),
  month: import_zod8.z.string().optional(),
  year: import_zod8.z.number().optional(),
  seasonId: import_zod8.z.number().int(),
  season: SeasonSchema,
  // Assuming you've imported the Season Zod Schema
  accounts: import_zod8.z.array(import_zod8.z.unknown()),
  Building: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingConstructionEffort: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingConstruction: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingOperation: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingOperationFlow: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingRequirement: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingRequirements: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingStorage: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingType: import_zod8.z.array(import_zod8.z.unknown()),
  BuildingUpgrade: import_zod8.z.array(import_zod8.z.unknown()),
  BusinessBuilding: import_zod8.z.array(import_zod8.z.unknown()),
  Business: import_zod8.z.array(import_zod8.z.unknown()),
  Commoners: import_zod8.z.array(import_zod8.z.unknown()),
  DeliveryCost: import_zod8.z.array(import_zod8.z.unknown()),
  Flow: import_zod8.z.array(import_zod8.z.unknown()),
  Household: import_zod8.z.array(import_zod8.z.unknown()),
  Ingredient: import_zod8.z.array(import_zod8.z.unknown()),
  Inventory: import_zod8.z.array(import_zod8.z.unknown()),
  ItemOrder: import_zod8.z.array(import_zod8.z.unknown()),
  ItemPrice: import_zod8.z.array(import_zod8.z.unknown()),
  Item: import_zod8.z.array(import_zod8.z.unknown()),
  ItemTradeResult: import_zod8.z.array(import_zod8.z.unknown()),
  ItemTradeSettlement: import_zod8.z.array(import_zod8.z.unknown()),
  Location: import_zod8.z.array(LocationSchema),
  Manager: import_zod8.z.array(import_zod8.z.unknown()),
  MarketItemDetails: import_zod8.z.array(import_zod8.z.unknown()),
  MarketItem: import_zod8.z.array(import_zod8.z.unknown()),
  Market: import_zod8.z.array(import_zod8.z.unknown()),
  MarketMapping: import_zod8.z.array(import_zod8.z.unknown()),
  Operation: import_zod8.z.array(import_zod8.z.unknown()),
  OperationFlow: import_zod8.z.array(import_zod8.z.unknown()),
  Path: import_zod8.z.array(import_zod8.z.unknown()),
  PrestigeImpact: import_zod8.z.array(import_zod8.z.unknown()),
  Producer: import_zod8.z.array(import_zod8.z.unknown()),
  Recipe: import_zod8.z.array(import_zod8.z.unknown()),
  Structure: import_zod8.z.array(import_zod8.z.unknown()),
  StructureTag: import_zod8.z.array(import_zod8.z.unknown()),
  Sustenance: import_zod8.z.array(import_zod8.z.unknown()),
  Tile: import_zod8.z.array(import_zod8.z.unknown()),
  TownChurch: import_zod8.z.array(import_zod8.z.unknown()),
  TownCulture: import_zod8.z.array(import_zod8.z.unknown()),
  Town: import_zod8.z.array(TownSchema),
  TownData: import_zod8.z.array(TownDataSchema),
  TownDataDomain: import_zod8.z.array(import_zod8.z.unknown()),
  TownDemandCategory: import_zod8.z.array(import_zod8.z.unknown()),
  TownDemand: import_zod8.z.array(import_zod8.z.unknown()),
  TownGovernment: import_zod8.z.array(import_zod8.z.unknown()),
  TownGovernmentTaxes: import_zod8.z.array(import_zod8.z.unknown()),
  TradeRoute: import_zod8.z.array(import_zod8.z.unknown()),
  TradeRouteManager: import_zod8.z.array(import_zod8.z.unknown()),
  TradeRouteFlow: import_zod8.z.array(import_zod8.z.unknown()),
  TransportCargo: import_zod8.z.array(import_zod8.z.unknown()),
  TransportJourneyLeg: import_zod8.z.array(import_zod8.z.unknown()),
  TransportJourney: import_zod8.z.array(import_zod8.z.unknown()),
  Transport: import_zod8.z.array(import_zod8.z.unknown()),
  TransportType: import_zod8.z.array(import_zod8.z.unknown()),
  WorkerSkill: import_zod8.z.array(import_zod8.z.unknown()),
  Action: import_zod8.z.array(ActionSchema),
  RecurringAction: import_zod8.z.array(RecurringActionSchema)
});

// src/recurringAction.ts
var RecurringActionSchema = import_zod9.z.object({
  pk: import_zod9.z.number().int(),
  type: import_zod9.z.string(),
  status: import_zod9.z.string().default("scheduled"),
  // note: consider using a Zod enum if you have pre-defined statuses
  schedule: import_zod9.z.date(),
  gameAccountId: import_zod9.z.number().int(),
  GameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  createdAt: import_zod9.z.date().default(() => /* @__PURE__ */ new Date()),
  updatedAt: import_zod9.z.date(),
  startTurnId: import_zod9.z.number().int(),
  Turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  when: import_zod9.z.string().default("beginning"),
  numTurns: import_zod9.z.number().int().optional(),
  interval: import_zod9.z.number().int(),
  Action: import_zod9.z.array(ActionSchema)
  // Assumes you have an Action Zod schema
});

// src/player.ts
var import_zod10 = require("zod");
var PlayerSchema = import_zod10.z.object({
  pk: import_zod10.z.number().int(),
  username: import_zod10.z.string(),
  householdId: import_zod10.z.number().int(),
  household: import_zod10.z.unknown().optional(),
  // Assumes you have a Household Zod schema
  discordId: import_zod10.z.string().optional(),
  active: import_zod10.z.boolean(),
  gameAccountId: import_zod10.z.number().int(),
  gameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  settings: import_zod10.z.array(import_zod10.z.unknown()),
  // Adjust this when you have a Settings schema
  accounts: import_zod10.z.array(import_zod10.z.unknown()),
  // Adjust this when you have an Account schema
  buildings: import_zod10.z.array(import_zod10.z.unknown()),
  // Adjust this when you have a Building schema
  businesses: import_zod10.z.array(import_zod10.z.unknown())
  // Adjust this when you have a Business schema
});

// src/gameAccount.ts
var GameAccountSchema = import_zod11.z.object({
  pk: import_zod11.z.number().int(),
  apiUser: import_zod11.z.string(),
  apiToken: import_zod11.z.string(),
  userId: import_zod11.z.number().int(),
  user: UserSchema,
  // should be the Zod schema for User
  seasonId: import_zod11.z.number().int(),
  season: SeasonSchema,
  // should be the Zod schema for Season
  players: import_zod11.z.array(PlayerSchema),
  // replace with the Zod schema for Player
  Action: import_zod11.z.array(ActionSchema),
  // replace with the Zod schema for Action
  RecurringAction: import_zod11.z.array(RecurringActionSchema)
  // replace with the Zod schema for RecurringAction
});

// src/action.ts
var ActionSchema = import_zod12.z.object({
  pk: import_zod12.z.number().int(),
  type: import_zod12.z.string(),
  status: import_zod12.z.string().default("scheduled"),
  // note: consider using a Zod enum if you have pre-defined statuses
  schedule: import_zod12.z.date(),
  gameAccountId: import_zod12.z.number().int(),
  GameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  createdAt: import_zod12.z.date().default(() => /* @__PURE__ */ new Date()),
  updatedAt: import_zod12.z.date(),
  turnId: import_zod12.z.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  when: import_zod12.z.string().default("beginning"),
  recurringActionId: import_zod12.z.number().int(),
  RecurringAction: RecurringActionSchema
  // Assumes you have a RecurringAction Zod schema
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionSchema,
  GameAccountSchema,
  LocationSchema,
  PlayerSchema,
  RecurringActionSchema,
  RegionSchema,
  SeasonSchema,
  SiteSchema,
  TownDataSchema,
  TownSchema,
  TurnSchema,
  UserSchema
});
//# sourceMappingURL=index.js.map