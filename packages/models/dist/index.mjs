// src/action.ts
import { z as z12 } from "zod";

// src/gameAccount.ts
import { z as z11 } from "zod";

// src/user.ts
import { z } from "zod";
var UserSchema = z.object({
  pk: z.number().optional(),
  id: z.number().optional(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string().optional(),
  lockedOut: z.boolean().optional()
});

// src/season.ts
import { z as z3 } from "zod";

// src/site.ts
import { z as z2 } from "zod";
var SiteSchema = z2.object({
  pk: z2.number().int(),
  name: z2.string(),
  url: z2.string(),
  seasons: z2.array(SeasonSchema)
  // adjust this based on your `Season` schema
});

// src/season.ts
var SeasonSchema = z3.object({
  pk: z3.number().int(),
  number: z3.number().int(),
  siteId: z3.number().int(),
  site: SiteSchema,
  gameAccounts: z3.array(GameAccountSchema),
  // adjust this based on your `GameAccount` schema
  turns: z3.array(z3.unknown()).optional(),
  // adjust this based on your `Turn` schema
  Region: z3.array(z3.unknown()).optional()
  // adjust this based on your `Region` schema
});

// src/recurringAction.ts
import { z as z9 } from "zod";

// src/turn.ts
import { z as z8 } from "zod";

// src/town.ts
import { z as z7 } from "zod";

// src/location.ts
import { z as z6 } from "zod";

// src/region.ts
import { z as z5 } from "zod";

// src/townData.ts
import { z as z4 } from "zod";
var TownDataSchema = z4.object({
  pk: z4.number().int(),
  id: z4.string(),
  name: z4.string(),
  locationId: z4.number().int(),
  location: LocationSchema,
  // Assumes you have a Location Zod schema
  region: z4.number().int(),
  centerIds: z4.array(z4.number()),
  householdIds: z4.array(z4.string()),
  commonersId: z4.number().int(),
  commoners: z4.unknown(),
  // Assumes you have a Commoners Zod schema
  governmentId: z4.number().int(),
  government: z4.unknown(),
  // Assumes you have a TownGovernment Zod schema
  churchId: z4.number().int(),
  church: z4.unknown(),
  // Assumes you have a TownChurch Zod schema
  navigationZones: z4.any(),
  // Update to appropriate type
  cultureId: z4.number().int(),
  culture: z4.unknown(),
  // Assumes you have a TownCulture Zod schema
  domain: z4.array(z4.unknown()),
  // Assumes you have a TownDataDomain Zod schema
  turnId: z4.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  townId: z4.number().int(),
  Town: TownSchema,
  RegionRef: RegionSchema
});

// src/region.ts
var RegionSchema = z5.object({
  pk: z5.number().int(),
  id: z5.number(),
  name: z5.string(),
  description: z5.string().optional(),
  centerId: z5.number().int().optional(),
  center: LocationSchema.optional(),
  // Assumes you have a Location Zod schema
  size: z5.number().optional(),
  seasonId: z5.number().int(),
  season: SeasonSchema,
  // Assumes you have a Season Zod schema
  TownData: TownDataSchema
});

// src/location.ts
var LocationSchema = z6.object({
  pk: z6.number().int(),
  x: z6.number(),
  y: z6.number(),
  buildingLand: z6.array(z6.unknown()),
  // Assumes you have a Building Zod schema
  buildingSublocation: z6.unknown().optional(),
  regions: z6.array(RegionSchema),
  // Assumes you have a Region Zod schema
  towns: z6.array(TownSchema),
  // Assumes you have a Town Zod schema
  townDatas: z6.array(TownDataSchema),
  // Assumes you have a TownData Zod schema
  transports: z6.array(z6.unknown()),
  // Assumes you have a Transport Zod schema
  turnId: z6.number().int(),
  turn: TurnSchema
  // Assumes you have a Turn Zod schema
});

// src/town.ts
var TownSchema = z7.object({
  pk: z7.number().int(),
  id: z7.number(),
  name: z7.string(),
  locationId: z7.number().int(),
  location: LocationSchema,
  // Assumes you have a Location Zod schema
  region: z7.number(),
  capital: z7.boolean().default(false),
  turnId: z7.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  TownData: z7.array(TownDataSchema)
});

// src/turn.ts
var TurnSchema = z8.object({
  pk: z8.number().int(),
  turn: z8.number(),
  month: z8.string().optional(),
  year: z8.number().optional(),
  seasonId: z8.number().int(),
  season: SeasonSchema,
  // Assuming you've imported the Season Zod Schema
  accounts: z8.array(z8.unknown()),
  Building: z8.array(z8.unknown()),
  BuildingConstructionEffort: z8.array(z8.unknown()),
  BuildingConstruction: z8.array(z8.unknown()),
  BuildingOperation: z8.array(z8.unknown()),
  BuildingOperationFlow: z8.array(z8.unknown()),
  BuildingRequirement: z8.array(z8.unknown()),
  BuildingRequirements: z8.array(z8.unknown()),
  BuildingStorage: z8.array(z8.unknown()),
  BuildingType: z8.array(z8.unknown()),
  BuildingUpgrade: z8.array(z8.unknown()),
  BusinessBuilding: z8.array(z8.unknown()),
  Business: z8.array(z8.unknown()),
  Commoners: z8.array(z8.unknown()),
  DeliveryCost: z8.array(z8.unknown()),
  Flow: z8.array(z8.unknown()),
  Household: z8.array(z8.unknown()),
  Ingredient: z8.array(z8.unknown()),
  Inventory: z8.array(z8.unknown()),
  ItemOrder: z8.array(z8.unknown()),
  ItemPrice: z8.array(z8.unknown()),
  Item: z8.array(z8.unknown()),
  ItemTradeResult: z8.array(z8.unknown()),
  ItemTradeSettlement: z8.array(z8.unknown()),
  Location: z8.array(LocationSchema),
  Manager: z8.array(z8.unknown()),
  MarketItemDetails: z8.array(z8.unknown()),
  MarketItem: z8.array(z8.unknown()),
  Market: z8.array(z8.unknown()),
  MarketMapping: z8.array(z8.unknown()),
  Operation: z8.array(z8.unknown()),
  OperationFlow: z8.array(z8.unknown()),
  Path: z8.array(z8.unknown()),
  PrestigeImpact: z8.array(z8.unknown()),
  Producer: z8.array(z8.unknown()),
  Recipe: z8.array(z8.unknown()),
  Structure: z8.array(z8.unknown()),
  StructureTag: z8.array(z8.unknown()),
  Sustenance: z8.array(z8.unknown()),
  Tile: z8.array(z8.unknown()),
  TownChurch: z8.array(z8.unknown()),
  TownCulture: z8.array(z8.unknown()),
  Town: z8.array(TownSchema),
  TownData: z8.array(TownDataSchema),
  TownDataDomain: z8.array(z8.unknown()),
  TownDemandCategory: z8.array(z8.unknown()),
  TownDemand: z8.array(z8.unknown()),
  TownGovernment: z8.array(z8.unknown()),
  TownGovernmentTaxes: z8.array(z8.unknown()),
  TradeRoute: z8.array(z8.unknown()),
  TradeRouteManager: z8.array(z8.unknown()),
  TradeRouteFlow: z8.array(z8.unknown()),
  TransportCargo: z8.array(z8.unknown()),
  TransportJourneyLeg: z8.array(z8.unknown()),
  TransportJourney: z8.array(z8.unknown()),
  Transport: z8.array(z8.unknown()),
  TransportType: z8.array(z8.unknown()),
  WorkerSkill: z8.array(z8.unknown()),
  Action: z8.array(ActionSchema),
  RecurringAction: z8.array(RecurringActionSchema)
});

// src/recurringAction.ts
var RecurringActionSchema = z9.object({
  pk: z9.number().int(),
  type: z9.string(),
  status: z9.string().default("scheduled"),
  // note: consider using a Zod enum if you have pre-defined statuses
  schedule: z9.date(),
  gameAccountId: z9.number().int(),
  GameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  createdAt: z9.date().default(() => /* @__PURE__ */ new Date()),
  updatedAt: z9.date(),
  startTurnId: z9.number().int(),
  Turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  when: z9.string().default("beginning"),
  numTurns: z9.number().int().optional(),
  interval: z9.number().int(),
  Action: z9.array(ActionSchema)
  // Assumes you have an Action Zod schema
});

// src/player.ts
import { z as z10 } from "zod";
var PlayerSchema = z10.object({
  pk: z10.number().int(),
  username: z10.string(),
  householdId: z10.number().int(),
  household: z10.unknown().optional(),
  // Assumes you have a Household Zod schema
  discordId: z10.string().optional(),
  active: z10.boolean(),
  gameAccountId: z10.number().int(),
  gameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  settings: z10.array(z10.unknown()),
  // Adjust this when you have a Settings schema
  accounts: z10.array(z10.unknown()),
  // Adjust this when you have an Account schema
  buildings: z10.array(z10.unknown()),
  // Adjust this when you have a Building schema
  businesses: z10.array(z10.unknown())
  // Adjust this when you have a Business schema
});

// src/gameAccount.ts
var GameAccountSchema = z11.object({
  pk: z11.number().int(),
  apiUser: z11.string(),
  apiToken: z11.string(),
  userId: z11.number().int(),
  user: UserSchema,
  // should be the Zod schema for User
  seasonId: z11.number().int(),
  season: SeasonSchema,
  // should be the Zod schema for Season
  players: z11.array(PlayerSchema),
  // replace with the Zod schema for Player
  Action: z11.array(ActionSchema),
  // replace with the Zod schema for Action
  RecurringAction: z11.array(RecurringActionSchema)
  // replace with the Zod schema for RecurringAction
});

// src/action.ts
var ActionSchema = z12.object({
  pk: z12.number().int(),
  type: z12.string(),
  status: z12.string().default("scheduled"),
  // note: consider using a Zod enum if you have pre-defined statuses
  schedule: z12.date(),
  gameAccountId: z12.number().int(),
  GameAccount: GameAccountSchema,
  // Assumes you have a GameAccount Zod schema
  createdAt: z12.date().default(() => /* @__PURE__ */ new Date()),
  updatedAt: z12.date(),
  turnId: z12.number().int(),
  turn: TurnSchema,
  // Assumes you have a Turn Zod schema
  when: z12.string().default("beginning"),
  recurringActionId: z12.number().int(),
  RecurringAction: RecurringActionSchema
  // Assumes you have a RecurringAction Zod schema
});
export {
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
};
//# sourceMappingURL=index.mjs.map