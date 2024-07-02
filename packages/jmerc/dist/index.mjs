var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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
  townData: `towns/:id`,
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
      url = url.replace(":id", id.toString());
    }
    if (item) {
      url = url.replace(":item", item);
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
      url = url.replace(":id", id.toString());
    }
    if (item) {
      url = url.replace(":item", item);
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
      url = url.replace(":id", id.toString());
    }
    if (item) {
      url = url.replace(":item", item);
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
      url = url.replace(":id", id.toString());
    }
    if (item) {
      url = url.replace(":item", item);
    }
    return this.client.patch(url, data);
  }
};
var baseAPI_default = BaseAPI;

// src/models/index.ts
var models_exports = {};
__export(models_exports, {
  Account: () => Account,
  AccountAsset: () => AccountAsset,
  Building: () => Building,
  BuildingConstruction: () => BuildingConstruction,
  BuildingOperation: () => BuildingOperation,
  BuildingStorage: () => BuildingStorage,
  BuildingType: () => BuildingType,
  Business: () => Business,
  BusinessBuilding: () => BusinessBuilding,
  Commoners: () => Commoners,
  DeliveryCost: () => DeliveryCost,
  Flow: () => Flow,
  Household: () => Household,
  Ingredient: () => Ingredient,
  Inventory: () => Inventory,
  Item: () => Item,
  ItemTrade: () => ItemTrade,
  ItemTradeResult: () => ItemTradeResult,
  ItemTradeSettlement: () => ItemTradeSettlement,
  Location: () => Location,
  Manager: () => Manager,
  Market: () => Market,
  MarketItem: () => MarketItem,
  MarketItemDetails: () => MarketItemDetails,
  NotificationSettings: () => NotificationSettings,
  Operation: () => Operation,
  Path: () => Path,
  Player: () => Player,
  PrestigeImpact: () => PrestigeImpact,
  Producer: () => Producer,
  Recipe: () => Recipe,
  Region: () => Region,
  Settings: () => Settings,
  Structure: () => Structure,
  Sustenance: () => Sustenance,
  Tile: () => Tile,
  Town: () => Town,
  TownData: () => TownData,
  TownDemand: () => TownDemand,
  TownDemandCategory: () => TownDemandCategory,
  TradeRoute: () => TradeRoute,
  Transport: () => Transport,
  TransportCargo: () => TransportCargo,
  TransportJourney: () => TransportJourney,
  TransportJourneyLeg: () => TransportJourneyLeg,
  TransportType: () => TransportType,
  Turn: () => Turn,
  Worker: () => Worker,
  enums: () => enums_exports
});

// src/models/enums/index.ts
var enums_exports = {};
__export(enums_exports, {
  AssetEnum: () => AssetEnum,
  BuildingTypeEnum: () => BuildingTypeEnum,
  BuildingUpgradeTypeEnum: () => BuildingUpgradeTypeEnum,
  ClimateEnum: () => ClimateEnum,
  ItemEnum: () => ItemEnum,
  ItemTypeEnum: () => ItemTypeEnum,
  RecipeEnum: () => RecipeEnum,
  SkillEnum: () => SkillEnum,
  SkillLevelEnum: () => SkillLevelEnum,
  TransportTypeEnum: () => TransportTypeEnum
});

// src/models/enums/assetEnum.ts
var AssetEnum = /* @__PURE__ */ ((AssetEnum2) => {
  AssetEnum2["Cog"] = "cog";
  AssetEnum2["Handcart"] = "handcart";
  AssetEnum2["Hulk"] = "hulk";
  AssetEnum2["Money"] = "money";
  AssetEnum2["Snekkja"] = "snekkja";
  AssetEnum2["Tumbrel"] = "tumbrel";
  return AssetEnum2;
})(AssetEnum || {});

// src/models/enums/buildingTypeEnum.ts
var BuildingTypeEnum = /* @__PURE__ */ ((BuildingTypeEnum2) => {
  BuildingTypeEnum2["Apothecary"] = "apothecary";
  BuildingTypeEnum2["Bakery"] = "bakery";
  BuildingTypeEnum2["Bloomery"] = "bloomery";
  BuildingTypeEnum2["BoardingHouse"] = "boardinghouse";
  BuildingTypeEnum2["Brewery"] = "brewery";
  BuildingTypeEnum2["Brickworks"] = "brickworks";
  BuildingTypeEnum2["Butchery"] = "butchery";
  BuildingTypeEnum2["Carpentry"] = "carpentry";
  BuildingTypeEnum2["Cartshed"] = "cartshed";
  BuildingTypeEnum2["Cathedral"] = "cathedral";
  BuildingTypeEnum2["Center"] = "center";
  BuildingTypeEnum2["CeramicKiln"] = "ceramic kiln";
  BuildingTypeEnum2["Chandlery"] = "chandlery";
  BuildingTypeEnum2["Chapel"] = "chapel";
  BuildingTypeEnum2["CharcoalHut"] = "charcoal hut";
  BuildingTypeEnum2["CharcoalKiln"] = "charcoal kiln";
  BuildingTypeEnum2["Church"] = "church";
  BuildingTypeEnum2["ClayPit"] = "clay pit";
  BuildingTypeEnum2["CopperMine"] = "copper mine";
  BuildingTypeEnum2["Coppersmith"] = "coppersmith";
  BuildingTypeEnum2["Cottage"] = "cottage";
  BuildingTypeEnum2["Dairy"] = "dairy";
  BuildingTypeEnum2["DyeBoiler"] = "dye boiler";
  BuildingTypeEnum2["Dyeworks"] = "dyeworks";
  BuildingTypeEnum2["Farmstead"] = "farmstead";
  BuildingTypeEnum2["Fisher"] = "fisher";
  BuildingTypeEnum2["FishingShack"] = "fishing shack";
  BuildingTypeEnum2["FlaxFarm"] = "flax farm";
  BuildingTypeEnum2["Foundry"] = "foundry";
  BuildingTypeEnum2["GlassBlower"] = "glass blower";
  BuildingTypeEnum2["GlassHouse"] = "glass house";
  BuildingTypeEnum2["GoldMine"] = "gold mine";
  BuildingTypeEnum2["GrainFarm"] = "grain farm";
  BuildingTypeEnum2["Guardhouse"] = "guardhouse";
  BuildingTypeEnum2["HerbGarden"] = "herb garden";
  BuildingTypeEnum2["Hjell"] = "hjell";
  BuildingTypeEnum2["Household"] = "household";
  BuildingTypeEnum2["HuntingLodge"] = "hunting lodge";
  BuildingTypeEnum2["IronMine"] = "iron mine";
  BuildingTypeEnum2["Jeweller"] = "jeweller";
  BuildingTypeEnum2["LeadMine"] = "lead mine";
  BuildingTypeEnum2["Leatherworks"] = "leatherworks";
  BuildingTypeEnum2["LoggingCamp"] = "logging camp";
  BuildingTypeEnum2["Markethall"] = "markethall";
  BuildingTypeEnum2["Malthouse"] = "malthouse";
  BuildingTypeEnum2["Mansion"] = "mansion";
  BuildingTypeEnum2["Mint"] = "mint";
  BuildingTypeEnum2["NetMaker"] = "net maker";
  BuildingTypeEnum2["Outpost"] = "outpost";
  BuildingTypeEnum2["Park"] = "park";
  BuildingTypeEnum2["Pasture"] = "pasture";
  BuildingTypeEnum2["Quarry"] = "quarry";
  BuildingTypeEnum2["RettingPit"] = "retting pit";
  BuildingTypeEnum2["Ropewalk"] = "ropewalk";
  BuildingTypeEnum2["Rowhouse"] = "rowhouse";
  BuildingTypeEnum2["SailLoft"] = "sail loft";
  BuildingTypeEnum2["Saltery"] = "saltery";
  BuildingTypeEnum2["SaltMine"] = "salt mine";
  BuildingTypeEnum2["Sawmill"] = "sawmill";
  BuildingTypeEnum2["SewingShop"] = "sewing shop";
  BuildingTypeEnum2["Shipyard"] = "shipyard";
  BuildingTypeEnum2["Smithy"] = "smithy";
  BuildingTypeEnum2["Smokery"] = "smokery";
  BuildingTypeEnum2["Spinnery"] = "spinnery";
  BuildingTypeEnum2["Stable"] = "stable";
  BuildingTypeEnum2["Storehouse"] = "storehouse";
  BuildingTypeEnum2["Square"] = "square";
  BuildingTypeEnum2["Tannery"] = "tannery";
  BuildingTypeEnum2["TarKiln"] = "tar kiln";
  BuildingTypeEnum2["Toolworks"] = "toolworks";
  BuildingTypeEnum2["Townhall"] = "townhall";
  BuildingTypeEnum2["Townhouse"] = "townhouse";
  BuildingTypeEnum2["Townroad"] = "townroad";
  BuildingTypeEnum2["Vignoble"] = "vignoble";
  BuildingTypeEnum2["Warehouse"] = "warehouse";
  BuildingTypeEnum2["Weavery"] = "weavery";
  BuildingTypeEnum2["Windmill"] = "windmill";
  return BuildingTypeEnum2;
})(BuildingTypeEnum || {});

// src/models/enums/buildingUpgradeTypeEnum.ts
var BuildingUpgradeTypeEnum = /* @__PURE__ */ ((BuildingUpgradeTypeEnum2) => {
  BuildingUpgradeTypeEnum2["Armsrack"] = "armsrack";
  BuildingUpgradeTypeEnum2["Beehives"] = "beehives";
  BuildingUpgradeTypeEnum2["Bellows"] = "bellows";
  BuildingUpgradeTypeEnum2["ButtonCast"] = "button cast";
  BuildingUpgradeTypeEnum2["Cowshed"] = "cowshed";
  BuildingUpgradeTypeEnum2["Crane"] = "crane";
  BuildingUpgradeTypeEnum2["CraneLift"] = "crane lift";
  BuildingUpgradeTypeEnum2["CuringChamber"] = "curing chamber";
  BuildingUpgradeTypeEnum2["CuttingTable"] = "cutting table";
  BuildingUpgradeTypeEnum2["Fermentory"] = "fermentory";
  BuildingUpgradeTypeEnum2["Grindstone"] = "grindstone";
  BuildingUpgradeTypeEnum2["GroovedBedstone"] = "grooved bedstone";
  BuildingUpgradeTypeEnum2["GuardBooth"] = "guard booth";
  BuildingUpgradeTypeEnum2["HoppingVessels"] = "hopping vessels";
  BuildingUpgradeTypeEnum2["LimeKiln"] = "lime kiln";
  BuildingUpgradeTypeEnum2["LimingPots"] = "liming pots";
  BuildingUpgradeTypeEnum2["MaltMill"] = "malt mill";
  BuildingUpgradeTypeEnum2["MaltSieve"] = "malt sieve";
  BuildingUpgradeTypeEnum2["ManurePit"] = "manure pit";
  BuildingUpgradeTypeEnum2["PloughHouse"] = "plough house";
  BuildingUpgradeTypeEnum2["SkinningTable"] = "skinning table";
  BuildingUpgradeTypeEnum2["SpinningWheel"] = "spinning wheel";
  BuildingUpgradeTypeEnum2["SteelAnvil"] = "steel anvil";
  BuildingUpgradeTypeEnum2["StoneOven"] = "stone oven";
  BuildingUpgradeTypeEnum2["StonecuttersHut"] = "stonecutter's hut";
  BuildingUpgradeTypeEnum2["TileMoulds"] = "tile moulds";
  BuildingUpgradeTypeEnum2["Toolshed"] = "toolshed";
  BuildingUpgradeTypeEnum2["Transmission"] = "transmission";
  BuildingUpgradeTypeEnum2["TreadleLoom"] = "treadle loom";
  BuildingUpgradeTypeEnum2["UpholstryBench"] = "upholstry bench";
  BuildingUpgradeTypeEnum2["Warehouse"] = "warehouse";
  BuildingUpgradeTypeEnum2["Weaponsrack"] = "weaponsrack";
  return BuildingUpgradeTypeEnum2;
})(BuildingUpgradeTypeEnum || {});

// src/models/enums/climateEnum.ts
var ClimateEnum = /* @__PURE__ */ ((ClimateEnum2) => {
  ClimateEnum2["Cold"] = "cold";
  ClimateEnum2["Warm"] = "warm";
  return ClimateEnum2;
})(ClimateEnum || {});

// src/models/enums/itemEnum.ts
var ItemEnum = /* @__PURE__ */ ((ItemEnum2) => {
  ItemEnum2["Alembics"] = "alembics";
  ItemEnum2["Arms"] = "arms";
  ItemEnum2["Axes"] = "axes";
  ItemEnum2["Beer"] = "beer";
  ItemEnum2["Belts"] = "belts";
  ItemEnum2["Blades"] = "blades";
  ItemEnum2["Bread"] = "bread";
  ItemEnum2["Bricks"] = "bricks";
  ItemEnum2["Butter"] = "butter";
  ItemEnum2["Candles"] = "candles";
  ItemEnum2["Carting"] = "carting";
  ItemEnum2["Casks"] = "casks";
  ItemEnum2["Cattle"] = "cattle";
  ItemEnum2["Charcoal"] = "charcoal";
  ItemEnum2["Cheese"] = "cheese";
  ItemEnum2["Clay"] = "clay";
  ItemEnum2["Cloth"] = "cloth";
  ItemEnum2["Coats"] = "coats";
  ItemEnum2["Cog"] = "cog";
  ItemEnum2["Cookware"] = "cookware";
  ItemEnum2["CopperIngots"] = "copper ingots";
  ItemEnum2["CopperOre"] = "copper ore";
  ItemEnum2["CuredFish"] = "cured fish";
  ItemEnum2["CuredMeat"] = "cured meat";
  ItemEnum2["Donations"] = "donations";
  ItemEnum2["Dye"] = "dye";
  ItemEnum2["DyedCloth"] = "dyed cloth";
  ItemEnum2["Firewood"] = "firewood";
  ItemEnum2["Fish"] = "fish";
  ItemEnum2["FlaxFibres"] = "flax fibres";
  ItemEnum2["FlaxPlants"] = "flax plants";
  ItemEnum2["Flour"] = "flour";
  ItemEnum2["Furniture"] = "furniture";
  ItemEnum2["Garments"] = "garments";
  ItemEnum2["Glass"] = "glass";
  ItemEnum2["Glassware"] = "glassware";
  ItemEnum2["GoldBars"] = "gold bars";
  ItemEnum2["GoldOre"] = "gold ore";
  ItemEnum2["Grain"] = "grain";
  ItemEnum2["Grindstones"] = "grindstones";
  ItemEnum2["Ham"] = "ham";
  ItemEnum2["Handcart"] = "handcart";
  ItemEnum2["Harnesses"] = "harnesses";
  ItemEnum2["Herbs"] = "herbs";
  ItemEnum2["Hides"] = "hides";
  ItemEnum2["Honey"] = "honey";
  ItemEnum2["HopBeer"] = "hop beer";
  ItemEnum2["Hulk"] = "hulk";
  ItemEnum2["IronOre"] = "iron ore";
  ItemEnum2["Jewellery"] = "jewellery";
  ItemEnum2["Labour"] = "labour";
  ItemEnum2["LeadBars"] = "lead bars";
  ItemEnum2["LeadOre"] = "lead ore";
  ItemEnum2["Leather"] = "leather";
  ItemEnum2["LightArmor"] = "light armor";
  ItemEnum2["Limestone"] = "limestone";
  ItemEnum2["Lodging"] = "lodging";
  ItemEnum2["Lumber"] = "lumber";
  ItemEnum2["Malt"] = "malt";
  ItemEnum2["Manure"] = "manure";
  ItemEnum2["Meat"] = "meat";
  ItemEnum2["Medicine"] = "medicine";
  ItemEnum2["Milk"] = "milk";
  ItemEnum2["Money"] = "money";
  ItemEnum2["Mouldboards"] = "mouldboards";
  ItemEnum2["Nails"] = "nails";
  ItemEnum2["Nets"] = "nets";
  ItemEnum2["OxPower"] = "ox power";
  ItemEnum2["Pasties"] = "pasties";
  ItemEnum2["Pickaxes"] = "pickaxes";
  ItemEnum2["Pies"] = "pies";
  ItemEnum2["Ploughs"] = "ploughs";
  ItemEnum2["Protection"] = "protection";
  ItemEnum2["Resin"] = "resin";
  ItemEnum2["Rope"] = "rope";
  ItemEnum2["Sails"] = "sails";
  ItemEnum2["Salt"] = "salt";
  ItemEnum2["Scythes"] = "scythes";
  ItemEnum2["SilverBars"] = "silver bars";
  ItemEnum2["SlakedLime"] = "slaked lime";
  ItemEnum2["Snekkja"] = "snekkja";
  ItemEnum2["Spirits"] = "spirits";
  ItemEnum2["SteelIngots"] = "steel ingots";
  ItemEnum2["Stockfish"] = "stockfish";
  ItemEnum2["Swords"] = "swords";
  ItemEnum2["Tar"] = "tar";
  ItemEnum2["Thread"] = "thread";
  ItemEnum2["Tiles"] = "tiles";
  ItemEnum2["Timber"] = "timber";
  ItemEnum2["Tools"] = "tools";
  ItemEnum2["Tumbrel"] = "tumbrel";
  ItemEnum2["Wax"] = "wax";
  ItemEnum2["Wheels"] = "wheels";
  ItemEnum2["Windows"] = "windows";
  ItemEnum2["Wine"] = "wine";
  ItemEnum2["Wool"] = "wool";
  ItemEnum2["WroughtIron"] = "wrought iron";
  ItemEnum2["Yarn"] = "yarn";
  return ItemEnum2;
})(ItemEnum || {});

// src/models/enums/itemTypeEnum.ts
var ItemTypeEnum = /* @__PURE__ */ ((ItemTypeEnum2) => {
  ItemTypeEnum2["Commodity"] = "commodity";
  ItemTypeEnum2["Service"] = "service";
  ItemTypeEnum2["Special"] = "special";
  return ItemTypeEnum2;
})(ItemTypeEnum || {});

// src/models/enums/recipeEnum.ts
var RecipeEnum = /* @__PURE__ */ ((RecipeEnum2) => {
  RecipeEnum2["BakeBread1"] = "bake bread 1";
  RecipeEnum2["BakeBread2"] = "bake bread 2";
  RecipeEnum2["BakePasties1"] = "bake pasties 1";
  RecipeEnum2["BakePasties2"] = "bake pasties 2";
  RecipeEnum2["BakePies1"] = "bake pies 1";
  RecipeEnum2["BindGarments1"] = "bind garments 1";
  RecipeEnum2["BindGarments2"] = "bind garments 2";
  RecipeEnum2["BlowGlassware1"] = "blow glassware 1";
  RecipeEnum2["BlowGlassware2"] = "blow glassware 2";
  RecipeEnum2["BoilDye1"] = "boil dye 1";
  RecipeEnum2["BoilDye2"] = "boil dye 2";
  RecipeEnum2["BorderPatrol1"] = "border patrol 1";
  RecipeEnum2["BorderPatrol2"] = "border patrol 2";
  RecipeEnum2["BreedCattle1a"] = "breed cattle 1a";
  RecipeEnum2["BreedCattle1b"] = "breed cattle 1b";
  RecipeEnum2["BreedCattle2a"] = "breed cattle 2a";
  RecipeEnum2["BreedCattle2b"] = "breed cattle 2b";
  RecipeEnum2["BrewBeer1"] = "brew beer 1";
  RecipeEnum2["BrewBeer2"] = "brew beer 2";
  RecipeEnum2["BrewBeer3"] = "brew beer 3";
  RecipeEnum2["BrewBeer4"] = "brew beer 4";
  RecipeEnum2["BrewHopBeer1"] = "brew hop beer 1";
  RecipeEnum2["BrewHopBeer2"] = "brew hop beer 2";
  RecipeEnum2["BuildCog1"] = "build cog 1";
  RecipeEnum2["BuildCog2"] = "build cog 2";
  RecipeEnum2["BuildHandcart1"] = "build handcart 1";
  RecipeEnum2["BuildHandcart2"] = "build handcart 2";
  RecipeEnum2["BuildHulk1"] = "build hulk 1";
  RecipeEnum2["BuildSnekkja1"] = "build snekkja 1";
  RecipeEnum2["BuildSnekkja2"] = "build snekkja 2";
  RecipeEnum2["BuildTumbrel1"] = "build tumbrel 1";
  RecipeEnum2["BurnBricks1"] = "burn bricks 1";
  RecipeEnum2["BurnCharcoal1"] = "burn charcoal 1";
  RecipeEnum2["BurnCharcoal2"] = "burn charcoal 2";
  RecipeEnum2["BurnCharcoal3"] = "burn charcoal 3";
  RecipeEnum2["BurnCharcoal4"] = "burn charcoal 4";
  RecipeEnum2["BurnCookware1"] = "burn cookware 1";
  RecipeEnum2["BurnCookware2"] = "burn cookware 2";
  RecipeEnum2["BurnGlass1"] = "burn glass 1";
  RecipeEnum2["BurnLime1"] = "burn lime 1";
  RecipeEnum2["BurnTar1"] = "burn tar 1";
  RecipeEnum2["BurnTar2"] = "burn tar 2";
  RecipeEnum2["BurnTiles1"] = "burn tiles 1";
  RecipeEnum2["BurnTiles2"] = "burn tiles 2";
  RecipeEnum2["ButcherCattle1a"] = "butcher cattle 1a";
  RecipeEnum2["ButcherCattle1b"] = "butcher cattle 1b";
  RecipeEnum2["ButcherCattle2"] = "butcher cattle 2";
  RecipeEnum2["Carting1"] = "carting 1";
  RecipeEnum2["Carting2"] = "carting 2";
  RecipeEnum2["ChurnButter1"] = "churn butter 1";
  RecipeEnum2["ChurnButter2"] = "churn butter 2";
  RecipeEnum2["CogOperations"] = "cog operations";
  RecipeEnum2["CraftArms1"] = "craft arms 1";
  RecipeEnum2["CraftBelts1"] = "craft belts 1";
  RecipeEnum2["CraftBelts2"] = "craft belts 2";
  RecipeEnum2["CraftBelts3"] = "craft belts 3";
  RecipeEnum2["CraftBelts4"] = "craft belts 4";
  RecipeEnum2["CraftCookware1"] = "craft cookware 1";
  RecipeEnum2["CraftFurniture1"] = "craft furniture 1";
  RecipeEnum2["CraftFurniture2"] = "craft furniture 2";
  RecipeEnum2["CraftFurniture3"] = "craft furniture 3";
  RecipeEnum2["CraftFurniture4"] = "craft furniture 4";
  RecipeEnum2["CraftPloughs1"] = "craft ploughs 1";
  RecipeEnum2["CraftPloughs2"] = "craft ploughs 2";
  RecipeEnum2["CraftPloughs3"] = "craft ploughs 3";
  RecipeEnum2["CraftScythes1"] = "craft scythes 1";
  RecipeEnum2["CraftScythes2"] = "craft scythes 2";
  RecipeEnum2["CraftTools1"] = "craft tools 1";
  RecipeEnum2["CraftTools2"] = "craft tools 2";
  RecipeEnum2["CraftWheels1"] = "craft wheels 1";
  RecipeEnum2["CraftWheels2"] = "craft wheels 2";
  RecipeEnum2["CraftWheels3"] = "craft wheels 3";
  RecipeEnum2["CutBricks1"] = "cut bricks 1";
  RecipeEnum2["CutGrindstones1"] = "cut grindstones 1";
  RecipeEnum2["DeliveryDuty1"] = "delivery duty 1";
  RecipeEnum2["DeliveryDuty2"] = "delivery duty 2";
  RecipeEnum2["DigClay1"] = "dig clay 1";
  RecipeEnum2["DigClay2"] = "dig clay 2";
  RecipeEnum2["DistillSpirits2"] = "distill spirits 2";
  RecipeEnum2["DryFish1"] = "dry fish 1";
  RecipeEnum2["DryFish2"] = "dry fish 2";
  RecipeEnum2["DryStockfish1"] = "dry stockfish 1";
  RecipeEnum2["DryStockfish2"] = "dry stockfish 2";
  RecipeEnum2["DyeCloth1"] = "dye cloth 1";
  RecipeEnum2["DyeCloth2"] = "dye cloth 2";
  RecipeEnum2["ExtractStone1"] = "extract stone 1";
  RecipeEnum2["ExtractStone2"] = "extract stone 2";
  RecipeEnum2["ExtractStone3"] = "extract stone 3";
  RecipeEnum2["Fishing1"] = "fishing 1";
  RecipeEnum2["Fishing2a"] = "fishing 2a";
  RecipeEnum2["Fishing2b"] = "fishing 2b";
  RecipeEnum2["Fishing3"] = "fishing 3";
  RecipeEnum2["ForgeArms1"] = "forge arms 1";
  RecipeEnum2["ForgeArms2"] = "forge arms 2";
  RecipeEnum2["ForgeArms2b"] = "forge arms 2b";
  RecipeEnum2["ForgeAxes1"] = "forge axes 1";
  RecipeEnum2["ForgeAxes1b"] = "forge axes 1b";
  RecipeEnum2["ForgeAxes2"] = "forge axes 2";
  RecipeEnum2["ForgeAxes2b"] = "forge axes 2b";
  RecipeEnum2["ForgeBlades1"] = "forge blades 1";
  RecipeEnum2["ForgeBlades1b"] = "forge blades 1b";
  RecipeEnum2["ForgeBlades2"] = "forge blades 2";
  RecipeEnum2["ForgeBlades2b"] = "forge blades 2b";
  RecipeEnum2["ForgeMouldboards1"] = "forge mouldboards 1";
  RecipeEnum2["ForgePickaxes1"] = "forge pickaxes 1";
  RecipeEnum2["ForgePickaxes1b"] = "forge pickaxes 1b";
  RecipeEnum2["ForgePickaxes2"] = "forge pickaxes 2";
  RecipeEnum2["ForgePickaxes2b"] = "forge pickaxes 2b";
  RecipeEnum2["ForgeSwords1"] = "forge swords 1";
  RecipeEnum2["ForgeSwords1b"] = "forge swords 1b";
  RecipeEnum2["ForgeSwords2"] = "forge swords 2";
  RecipeEnum2["ForgeSwords2b"] = "forge swords 2b";
  RecipeEnum2["ForgeTools1"] = "forge tools 1";
  RecipeEnum2["ForgeTools2"] = "forge tools 2";
  RecipeEnum2["ForgeTools3"] = "forge tools 3";
  RecipeEnum2["GatherFirewood1"] = "gather firewood 1";
  RecipeEnum2["GatherFirewood2"] = "gather firewood 2";
  RecipeEnum2["GatherFirewood3"] = "gather firewood 3";
  RecipeEnum2["GatherResin1"] = "gather resin 1";
  RecipeEnum2["GatherResin2"] = "gather resin 2";
  RecipeEnum2["GrainPayment"] = "grain payment";
  RecipeEnum2["GrowFlax1"] = "grow flax 1";
  RecipeEnum2["GrowFlax2"] = "grow flax 2";
  RecipeEnum2["GrowFlax3"] = "grow flax 3";
  RecipeEnum2["GrowFlax4a"] = "grow flax 4a";
  RecipeEnum2["GrowFlax4b"] = "grow flax 4b";
  RecipeEnum2["GrowGrain1"] = "grow grain 1";
  RecipeEnum2["GrowGrain2"] = "grow grain 2";
  RecipeEnum2["GrowGrain3a"] = "grow grain 3a";
  RecipeEnum2["GrowGrain3b"] = "grow grain 3b";
  RecipeEnum2["GrowGrain4a"] = "grow grain 4a";
  RecipeEnum2["GrowGrain4b"] = "grow grain 4b";
  RecipeEnum2["GrowHerbs1"] = "grow herbs 1";
  RecipeEnum2["GrowHerbs2"] = "grow herbs 2";
  RecipeEnum2["HammerNails1"] = "hammer nails 1";
  RecipeEnum2["HandcartOperations"] = "handcart operations";
  RecipeEnum2["HarnessOx1"] = "harness ox 1";
  RecipeEnum2["HarnessOx2a"] = "harness ox 2a";
  RecipeEnum2["HarnessOx2b"] = "harness ox 2b";
  RecipeEnum2["HarnessOx3a"] = "harness ox 3a";
  RecipeEnum2["HarnessOx3b"] = "harness ox 3b";
  RecipeEnum2["HarnessOx4a"] = "harness ox 4a";
  RecipeEnum2["HarnessOx4b"] = "harness ox 4b";
  RecipeEnum2["HerdSheep1"] = "herd sheep 1";
  RecipeEnum2["HerdSheep2"] = "herd sheep 2";
  RecipeEnum2["HoldBanquet1a"] = "hold banquet 1a";
  RecipeEnum2["HoldBanquet1b"] = "hold banquet 1b";
  RecipeEnum2["HoldBanquet2a"] = "hold banquet 2a";
  RecipeEnum2["HoldBanquet2b"] = "hold banquet 2b";
  RecipeEnum2["HoldBanquet2c"] = "hold banquet 2c";
  RecipeEnum2["HoldBanquet3a"] = "hold banquet 3a";
  RecipeEnum2["HoldBanquet3b"] = "hold banquet 3b";
  RecipeEnum2["HoldBanquet3c"] = "hold banquet 3c";
  RecipeEnum2["HoldBanquet4a"] = "hold banquet 4a";
  RecipeEnum2["HoldBanquet4b"] = "hold banquet 4b";
  RecipeEnum2["HoldFeast1"] = "hold feast 1";
  RecipeEnum2["HoldFeast2"] = "hold feast 2";
  RecipeEnum2["HoldFeast3"] = "hold feast 3";
  RecipeEnum2["HoldMass1"] = "hold mass 1";
  RecipeEnum2["HoldMass2"] = "hold mass 2";
  RecipeEnum2["HoldMass3"] = "hold mass 3";
  RecipeEnum2["HoldPrayer1"] = "hold prayer 1";
  RecipeEnum2["HoldPrayer2"] = "hold prayer 2";
  RecipeEnum2["HoldPrayer3"] = "hold prayer 3";
  RecipeEnum2["HoldSermon1"] = "hold sermon 1";
  RecipeEnum2["HoldSermon2a"] = "hold sermon 2a";
  RecipeEnum2["HoldSermon2b"] = "hold sermon 2b";
  RecipeEnum2["HoldSermon3a"] = "hold sermon 3a";
  RecipeEnum2["HoldSermon3b"] = "hold sermon 3b";
  RecipeEnum2["HulkOperations"] = "hulk operations";
  RecipeEnum2["Hunting1"] = "hunting 1";
  RecipeEnum2["Hunting2"] = "hunting 2";
  RecipeEnum2["Hunting3"] = "hunting 3";
  RecipeEnum2["Hunting4"] = "hunting 4";
  RecipeEnum2["Hunting5"] = "hunting 5";
  RecipeEnum2["KeepBees1"] = "keep bees 1";
  RecipeEnum2["KnightDuty1"] = "knight duty 1";
  RecipeEnum2["KnightDuty2"] = "knight duty 2";
  RecipeEnum2["KnightDuty3"] = "knight duty 3";
  RecipeEnum2["KnightDuty4"] = "knight duty 4";
  RecipeEnum2["KnitGarments1"] = "knit garments 1";
  RecipeEnum2["KnitGarments2"] = "knit garments 2";
  RecipeEnum2["LetCottages1"] = "let cottages 1";
  RecipeEnum2["LetCottages2"] = "let cottages 2";
  RecipeEnum2["LetRowhouses1"] = "let rowhouses 1";
  RecipeEnum2["LetRowhouses2"] = "let rowhouses 2";
  RecipeEnum2["LetRowhouses3"] = "let rowhouses 3";
  RecipeEnum2["Logging1"] = "logging 1";
  RecipeEnum2["Logging2"] = "logging 2";
  RecipeEnum2["Logging3"] = "logging 3";
  RecipeEnum2["Logging4"] = "logging 4";
  RecipeEnum2["Maintain1"] = "maintain 1";
  RecipeEnum2["MakeAlembics1"] = "make alembics 1";
  RecipeEnum2["MakeAlembics2"] = "make alembics 2";
  RecipeEnum2["MakeBricks1"] = "make bricks 1";
  RecipeEnum2["MakeBricks2"] = "make bricks 2";
  RecipeEnum2["MakeCandles1"] = "make candles 1";
  RecipeEnum2["MakeCandles2"] = "make candles 2";
  RecipeEnum2["MakeCasks1"] = "make casks 1";
  RecipeEnum2["MakeCasks2"] = "make casks 2";
  RecipeEnum2["MakeCheese1"] = "make cheese 1";
  RecipeEnum2["MakeCheese2"] = "make cheese 2";
  RecipeEnum2["MakeCheese3"] = "make cheese 3";
  RecipeEnum2["MakeCheese4"] = "make cheese 4";
  RecipeEnum2["MakeCheese5"] = "make cheese 5";
  RecipeEnum2["MakeHarnesses1"] = "make harnesses 1";
  RecipeEnum2["MakeHarnesses2"] = "make harnesses 2";
  RecipeEnum2["MakeHarnesses2b"] = "make harnesses 2b";
  RecipeEnum2["MakeJewellery1"] = "make jewellery 1";
  RecipeEnum2["MakeJewellery2"] = "make jewellery 2";
  RecipeEnum2["MakeLeatherArmor1"] = "make leather armor 1";
  RecipeEnum2["MakeMedicine1"] = "make medicine 1";
  RecipeEnum2["MakeMedicine2"] = "make medicine 2";
  RecipeEnum2["MakeNets1"] = "make nets 1";
  RecipeEnum2["MakeNets2"] = "make nets 2";
  RecipeEnum2["MakeNets3"] = "make nets 3";
  RecipeEnum2["MakeRope1"] = "make rope 1";
  RecipeEnum2["MakeRope2"] = "make rope 2";
  RecipeEnum2["MakeRope3"] = "make rope 3";
  RecipeEnum2["MakeWindows1"] = "make windows 1";
  RecipeEnum2["MakeWindows2"] = "make windows 2";
  RecipeEnum2["MakeWine1"] = "make wine 1";
  RecipeEnum2["MakeWine2"] = "make wine 2";
  RecipeEnum2["MakeWine3"] = "make wine 3";
  RecipeEnum2["Malting1"] = "malting 1";
  RecipeEnum2["Malting2"] = "malting 2";
  RecipeEnum2["Milling1"] = "milling 1";
  RecipeEnum2["Milling2"] = "milling 2";
  RecipeEnum2["Milling3"] = "milling 3";
  RecipeEnum2["MineCopper1"] = "mine copper 1";
  RecipeEnum2["MineCopper2"] = "mine copper 2";
  RecipeEnum2["MineCopper3"] = "mine copper 3";
  RecipeEnum2["MineCopper4"] = "mine copper 4";
  RecipeEnum2["MineCopper5"] = "mine copper 5";
  RecipeEnum2["MineGold1"] = "mine gold 1";
  RecipeEnum2["MineGold1b"] = "mine gold 1b";
  RecipeEnum2["MineGold2"] = "mine gold 2";
  RecipeEnum2["MineGold2b"] = "mine gold 2b";
  RecipeEnum2["MineGold3"] = "mine gold 3";
  RecipeEnum2["MineIron1"] = "mine iron 1";
  RecipeEnum2["MineIron2"] = "mine iron 2";
  RecipeEnum2["MineIron3"] = "mine iron 3";
  RecipeEnum2["MineIron4"] = "mine iron 4";
  RecipeEnum2["MineIron5"] = "mine iron 5";
  RecipeEnum2["MineLead1"] = "mine lead 1";
  RecipeEnum2["MineLead2"] = "mine lead 2";
  RecipeEnum2["MineLead2b"] = "mine lead 2b";
  RecipeEnum2["MineLead3"] = "mine lead 3";
  RecipeEnum2["MineLead3b"] = "mine lead 3b";
  RecipeEnum2["MineLead4"] = "mine lead 4";
  RecipeEnum2["MineSalt1"] = "mine salt 1";
  RecipeEnum2["MineSalt2"] = "mine salt 2";
  RecipeEnum2["MineSalt3"] = "mine salt 3";
  RecipeEnum2["MintCopperCoins1"] = "mint copper coins 1";
  RecipeEnum2["MintCopperCoins2"] = "mint copper coins 2";
  RecipeEnum2["MintCopperCoins3"] = "mint copper coins 3";
  RecipeEnum2["MintGoldCoins1"] = "mint gold coins 1";
  RecipeEnum2["MintGoldCoins2"] = "mint gold coins 2";
  RecipeEnum2["MintGoldCoins3"] = "mint gold coins 3";
  RecipeEnum2["MintLeatherCoins1"] = "mint leather coins 1";
  RecipeEnum2["MintSilverCoins1"] = "mint silver coins 1";
  RecipeEnum2["MintSilverCoins2"] = "mint silver coins 2";
  RecipeEnum2["MintSilverCoins3"] = "mint silver coins 3";
  RecipeEnum2["MintSteelCoins1"] = "mint steel coins 1";
  RecipeEnum2["Patrol1"] = "patrol 1";
  RecipeEnum2["Patrol2a"] = "patrol 2a";
  RecipeEnum2["Patrol2b"] = "patrol 2b";
  RecipeEnum2["Patrol3a"] = "patrol 3a";
  RecipeEnum2["Patrol3b"] = "patrol 3b";
  RecipeEnum2["RefineSteel1"] = "refine steel 1";
  RecipeEnum2["RefineSteel1b"] = "refine steel 1b";
  RecipeEnum2["RefineSteel2"] = "refine steel 2";
  RecipeEnum2["RefineSteel2b"] = "refine steel 2b";
  RecipeEnum2["Retting1"] = "retting 1";
  RecipeEnum2["Retting2"] = "retting 2";
  RecipeEnum2["SaltingFish1"] = "salting fish 1";
  RecipeEnum2["SaltingFish2"] = "salting fish 2";
  RecipeEnum2["SaltingMeat1"] = "salting meat 1";
  RecipeEnum2["SaltingMeat2"] = "salting meat 2";
  RecipeEnum2["Sawing1"] = "sawing 1";
  RecipeEnum2["Sawing2"] = "sawing 2";
  RecipeEnum2["Sawing3"] = "sawing 3";
  RecipeEnum2["Sawing3Firewood"] = "sawing 3 (firewood)";
  RecipeEnum2["Sawing4"] = "sawing 4";
  RecipeEnum2["Service1"] = "service 1";
  RecipeEnum2["Service2"] = "service 2";
  RecipeEnum2["Service3"] = "service 3";
  RecipeEnum2["Service4"] = "service 4";
  RecipeEnum2["SewCoats1a"] = "sew coats 1a";
  RecipeEnum2["SewCoats1b"] = "sew coats 1b";
  RecipeEnum2["SewCoats2a"] = "sew coats 2a";
  RecipeEnum2["SewCoats2b"] = "sew coats 2b";
  RecipeEnum2["SewGambeson1"] = "sew gambeson 1";
  RecipeEnum2["SewGarments1"] = "sew garments 1";
  RecipeEnum2["SewGarments2a"] = "sew garments 2a";
  RecipeEnum2["SewGarments2b"] = "sew garments 2b";
  RecipeEnum2["SewGarments3a"] = "sew garments 3a";
  RecipeEnum2["SewGarments3b"] = "sew garments 3b";
  RecipeEnum2["SewGarments4a"] = "sew garments 4a";
  RecipeEnum2["SewGarments4b"] = "sew garments 4b";
  RecipeEnum2["SewSails1"] = "sew sails 1";
  RecipeEnum2["SewSails2"] = "sew sails 2";
  RecipeEnum2["ShearSheep1"] = "shear sheep 1";
  RecipeEnum2["ShearSheep2"] = "shear sheep 2";
  RecipeEnum2["ShearSheep3"] = "shear sheep 3";
  RecipeEnum2["SmeltCopper1"] = "smelt copper 1";
  RecipeEnum2["SmeltCopper2"] = "smelt copper 2";
  RecipeEnum2["SmeltGold1"] = "smelt gold 1";
  RecipeEnum2["SmeltGold2"] = "smelt gold 2";
  RecipeEnum2["SmeltIron1"] = "smelt iron 1";
  RecipeEnum2["SmeltIron2"] = "smelt iron 2";
  RecipeEnum2["SmeltLead1"] = "smelt lead 1";
  RecipeEnum2["SmeltLead2a"] = "smelt lead 2a";
  RecipeEnum2["SmeltLead2b"] = "smelt lead 2b";
  RecipeEnum2["SmeltLead3"] = "smelt lead 3 (silver)";
  RecipeEnum2["SmokingFish1"] = "smoking fish 1";
  RecipeEnum2["SmokingFish2"] = "smoking fish 2";
  RecipeEnum2["SmokingHam1"] = "smoking ham 1";
  RecipeEnum2["SmokingHam2"] = "smoking ham 2";
  RecipeEnum2["SmokingMeat1"] = "smoking meat 1";
  RecipeEnum2["SmokingMeat2"] = "smoking meat 2";
  RecipeEnum2["SnekkjaOperations"] = "snekkja operations";
  RecipeEnum2["SpinThread1"] = "spin thread 1";
  RecipeEnum2["SpinThread2"] = "spin thread 2";
  RecipeEnum2["SpinYarn1"] = "spin yarn 1";
  RecipeEnum2["SpinYarn2"] = "spin yarn 2";
  RecipeEnum2["SplitTimber1"] = "split timber 1";
  RecipeEnum2["SplitTimber2"] = "split timber 2";
  RecipeEnum2["SplitTimber3"] = "split timber 3";
  RecipeEnum2["TanHides1"] = "tan hides 1";
  RecipeEnum2["TanHides2"] = "tan hides 2";
  RecipeEnum2["TanHides3"] = "tan hides 3";
  RecipeEnum2["TrapFish1"] = "trap fish 1";
  RecipeEnum2["TrapFish2"] = "trap fish 2";
  RecipeEnum2["TrapFish3"] = "trap fish 3";
  RecipeEnum2["Trapping1"] = "trapping 1";
  RecipeEnum2["Trapping2"] = "trapping 2";
  RecipeEnum2["TumbrelOperations"] = "tumbrel operations";
  RecipeEnum2["WeaveCloth1"] = "weave cloth 1";
  RecipeEnum2["WeaveCloth2a"] = "weave cloth 2a";
  RecipeEnum2["WeaveCloth2b"] = "weave cloth 2b";
  RecipeEnum2["WeaveCloth3a"] = "weave cloth 3a";
  RecipeEnum2["WeaveCloth3b"] = "weave cloth 3b";
  RecipeEnum2["WeaveCloth4a"] = "weave cloth 4a";
  RecipeEnum2["WeaveCloth4b"] = "weave cloth 4b";
  RecipeEnum2["YokeOx1a"] = "yoke ox 1a";
  RecipeEnum2["YokeOx1b"] = "yoke ox 1b";
  RecipeEnum2["YokeOx2a"] = "yoke ox 2a";
  RecipeEnum2["YokeOx2b"] = "yoke ox 2b";
  RecipeEnum2["YokeOx3"] = "yoke ox 3";
  RecipeEnum2["YokeOx3manure"] = "yoke ox 3 (manure)";
  return RecipeEnum2;
})(RecipeEnum || {});

// src/models/enums/skillEnum.ts
var SkillEnum = /* @__PURE__ */ ((SkillEnum2) => {
  SkillEnum2["Crafting"] = "crafting";
  SkillEnum2["Forging"] = "forging";
  SkillEnum2["Maritime"] = "maritime";
  SkillEnum2["Mercantile"] = "mercantile";
  SkillEnum2["Nutrition"] = "nutrition";
  SkillEnum2["Textile"] = "textile";
  SkillEnum2["Weaponry"] = "weaponry";
  return SkillEnum2;
})(SkillEnum || {});

// src/models/enums/skillLevelEnum.ts
var SkillLevelEnum = /* @__PURE__ */ ((SkillLevelEnum2) => {
  SkillLevelEnum2[SkillLevelEnum2["Novice"] = 99] = "Novice";
  SkillLevelEnum2[SkillLevelEnum2["Worker"] = 599] = "Worker";
  SkillLevelEnum2[SkillLevelEnum2["Journeyman"] = 2699] = "Journeyman";
  SkillLevelEnum2[SkillLevelEnum2["Master"] = 9999] = "Master";
  return SkillLevelEnum2;
})(SkillLevelEnum || {});

// src/models/enums/transportTypeEnum.ts
var TransportTypeEnum = /* @__PURE__ */ ((TransportTypeEnum2) => {
  TransportTypeEnum2["Cog"] = "cog";
  TransportTypeEnum2["Handcart"] = "handcart";
  TransportTypeEnum2["Hulk"] = "hulk";
  TransportTypeEnum2["Snekkja"] = "snekkja";
  TransportTypeEnum2["Tumbrel"] = "tumbrel";
  return TransportTypeEnum2;
})(TransportTypeEnum || {});

// src/models/baseModel.ts
var BaseModel = class {
  static schema;
  initialized = false;
  constructor(data) {
    Object.assign(this, data);
    this.initializeSubProperties();
  }
  /**
   * Validates the input data against the schema and creates an instance of the class.
   * @param data - The input data to validate and instantiate.
   * @returns A promise that resolves to an instance of the class.
   */
  static async validate(data) {
    const parsedData = await this.schema.parseAsync(data);
    const instance = new this(parsedData);
    instance.initializeSubProperties();
    return instance;
  }
  /**
   * Validates an array of input data against the schema and creates instances of the class.
   * @param data - The input data to validate and instantiate.
   * @returns A promise that resolves to an array of instances of the class.
   */
  static async validateArray(data) {
    const parsedDataArray = await Promise.all(data.map((item) => this.schema.parseAsync(item)));
    return parsedDataArray.map((parsedData) => {
      const instance = new this(parsedData);
      instance.initializeSubProperties();
      return instance;
    });
  }
  /**
   * Initializes sub-properties of the class instance that are also instances of other classes.
   * It checks each property, and if it's an object with a schema, it creates a new instance of that class.
   */
  initializeSubProperties() {
    if (this.initialized) return;
    for (const key of Object.keys(this)) {
      const value = this[key];
      if (value && typeof value === "object" && "schema" in value.constructor) {
        this[key] = new value.constructor(value);
      } else if (Array.isArray(value)) {
        this[key] = value.map(
          (item) => item && typeof item === "object" && "schema" in item.constructor ? new item.constructor(item) : item
        );
      }
    }
    this.initialized = true;
  }
};

// src/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
  AccountAssetSchema: () => AccountAssetSchema,
  AccountSchema: () => AccountSchema,
  BuildingConstructionEffortSchema: () => BuildingConstructionEffortSchema,
  BuildingConstructionSchema: () => BuildingConstructionSchema,
  BuildingOperationSchema: () => BuildingOperationSchema,
  BuildingRequirementSchema: () => BuildingRequirementSchema,
  BuildingRequirementsSchema: () => BuildingRequirementsSchema,
  BuildingSchema: () => BuildingSchema,
  BuildingStorageSchema: () => BuildingStorageSchema,
  BuildingTypeSchema: () => BuildingTypeSchema,
  BuildingUpgradeSchema: () => BuildingUpgradeSchema,
  BusinessBuildingSchema: () => BusinessBuildingSchema,
  BusinessSchema: () => BusinessSchema,
  CommonersSchema: () => CommonersSchema,
  DeliveryCostSchema: () => DeliveryCostSchema,
  FlowSchema: () => FlowSchema,
  HouseholdSchema: () => HouseholdSchema,
  IngredientSchema: () => IngredientSchema,
  InventorySchema: () => InventorySchema,
  ItemOrderSchema: () => ItemOrderSchema,
  ItemPriceSchema: () => ItemPriceSchema,
  ItemSchema: () => ItemSchema,
  ItemTradeResultSchema: () => ItemTradeResultSchema,
  ItemTradeSchema: () => ItemTradeSchema,
  ItemTradeSettlementSchema: () => ItemTradeSettlementSchema,
  LocationSchema: () => LocationSchema,
  ManagerSchema: () => ManagerSchema,
  MarketItemDetailsSchema: () => MarketItemDetailsSchema,
  MarketItemSchema: () => MarketItemSchema,
  MarketSchema: () => MarketSchema,
  NotificationSettingsSchema: () => NotificationSettingsSchema,
  OperationSchema: () => OperationSchema,
  PathSchema: () => PathSchema,
  PlayerSchema: () => PlayerSchema,
  PrestigeImpactSchema: () => PrestigeImpactSchema,
  ProducerSchema: () => ProducerSchema,
  RecipeSchema: () => RecipeSchema,
  RegionSchema: () => RegionSchema,
  SettingsSchema: () => SettingsSchema,
  StructureSchema: () => StructureSchema,
  SustenanceSchema: () => SustenanceSchema,
  TileRequirementSchema: () => TileRequirementSchema,
  TileSchema: () => TileSchema,
  TownChurchSchema: () => TownChurchSchema,
  TownCultureSchema: () => TownCultureSchema,
  TownDataSchema: () => TownDataSchema,
  TownDemandCategorySchema: () => TownDemandCategorySchema,
  TownDemandSchema: () => TownDemandSchema,
  TownGovernmentSchema: () => TownGovernmentSchema,
  TownGovernmentTaxesSchema: () => TownGovernmentTaxesSchema,
  TownSchema: () => TownSchema,
  TradeRouteSchema: () => TradeRouteSchema,
  TransportCargoSchema: () => TransportCargoSchema,
  TransportJourneyLegSchema: () => TransportJourneyLegSchema,
  TransportJourneySchema: () => TransportJourneySchema,
  TransportSchema: () => TransportSchema,
  TransportTypeSchema: () => TransportTypeSchema,
  TurnSchema: () => TurnSchema,
  WorkerSchema: () => WorkerSchema,
  enums: () => enums_exports2
});

// src/schema/enums/index.ts
var enums_exports2 = {};
__export(enums_exports2, {
  AssetEnumSchema: () => AssetEnumSchema,
  BuildingTypeEnumSchema: () => BuildingTypeEnumSchema,
  BuildingUpgradeTypeEnumSchema: () => BuildingUpgradeTypeEnumSchema,
  ClimateEnumSchema: () => ClimateEnumSchema,
  ItemEnumSchema: () => ItemEnumSchema,
  ItemTypeEnumSchema: () => ItemTypeEnumSchema,
  RecipeEnumSchema: () => RecipeEnumSchema,
  SkillEnumSchema: () => SkillEnumSchema,
  SkillLevelEnumSchema: () => SkillLevelEnumSchema,
  TransportTypeEnumSchema: () => TransportTypeEnumSchema
});

// src/schema/enums/AssetEnumSchema.ts
import { z } from "zod";
var AssetEnumSchema = z.enum([
  "cog",
  "handcart",
  "hulk",
  "money",
  "snekkja",
  "tumbrel"
]);

// src/schema/enums/BuildingTypeEnumSchema.ts
import { z as z2 } from "zod";
var BuildingTypeEnumSchema = z2.enum([
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
  "rowhouse",
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

// src/schema/enums/BuildingUpgradeTypeEnumSchema.ts
import { z as z3 } from "zod";
var BuildingUpgradeTypeEnumSchema = z3.enum([
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

// src/schema/enums/ClimateEnumSchema.ts
import { z as z4 } from "zod";
var ClimateEnumSchema = z4.enum([
  "cold",
  "warm"
]);

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

// src/schema/enums/ItemTypeEnumSchema.ts
import { z as z6 } from "zod";
var ItemTypeEnumSchema = z6.enum([
  "commodity",
  "service",
  "special"
]);

// src/schema/enums/RecipeEnumSchema.ts
import { z as z7 } from "zod";
var RecipeEnumSchema = z7.enum([
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
  "gather firewood 3",
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
  "let rowhouses 1",
  "let rowhouses 2",
  "let rowhouses 3",
  "logging 1",
  "logging 2",
  "logging 3",
  "logging 4",
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
  "make rope 2",
  "make rope 3",
  "make windows 1",
  "make windows 2",
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
  "sawing 3 (firewood)",
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
  "split timber 3",
  "tan hides 1",
  "tan hides 2",
  "tan hides 3",
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

// src/schema/enums/SkillEnumSchema.ts
import { z as z8 } from "zod";
var SkillEnumSchema = z8.enum([
  "crafting",
  "forging",
  "maritime",
  "mercantile",
  "nutrition",
  "textile",
  "weaponry"
]);

// src/schema/enums/SkillLevelEnumSchema.ts
import { z as z9 } from "zod";
var SkillLevelEnumSchema = z9.enum([
  "99",
  "599",
  "2699",
  "9999"
]);

// src/schema/enums/TransportTypeEnumSchema.ts
import { z as z10 } from "zod";
var TransportTypeEnumSchema = z10.enum([
  "cog",
  "handcart",
  "hulk",
  "snekkja",
  "tumbrel"
]);

// src/schema/AccountAssetSchema.ts
import { z as z11 } from "zod";
var AccountAssetSchema = z11.object({
  balance: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]),
  capacity: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  purchase: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  purchase_price: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  reserved: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]),
  reserved_capacity: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  sale: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  sale_price: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional(),
  unit_cost: z11.union([z11.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z11.number()]).optional()
});

// src/schema/AccountSchema.ts
import { z as z12 } from "zod";
var AccountSchema = z12.object({
  assets: z12.record(ItemEnumSchema, AccountAssetSchema.optional()),
  id: z12.string(),
  master_id: z12.string().optional(),
  name: z12.string().optional(),
  owner_id: z12.string(),
  sponsor_id: z12.string().optional()
});

// src/schema/BuildingConstructionEffortSchema.ts
import { z as z16 } from "zod";

// src/schema/InventorySchema.ts
import { z as z15 } from "zod";

// src/schema/ManagerSchema.ts
import { z as z13 } from "zod";
var ManagerSchema = z13.object({
  buy_price: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional(),
  buy_volume: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional(),
  capacity: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional(),
  max_holding: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional(),
  sell_price: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional(),
  sell_volume: z13.union([z13.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z13.number()]).optional()
});

// src/schema/FlowSchema.ts
import { z as z14 } from "zod";
var FlowSchema = z14.object({
  consumption: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  expiration: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  export: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional(),
  imported: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().nullable().default(null).describe("import"),
  production: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  production_cost: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  purchase: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional(),
  purchase_cost: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  resident: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional(),
  sale: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional(),
  sale_value: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0)),
  shortfall: z14.union([z14.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z14.number()]).optional().default(String(0))
});

// src/schema/InventorySchema.ts
var InventorySchema = z15.object({
  account: AccountSchema,
  capacity: z15.union([z15.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z15.number()]),
  managers: z15.record(ItemEnumSchema, ManagerSchema).optional(),
  previous_flows: z15.record(ItemEnumSchema, FlowSchema).optional().default({}),
  reserved: z15.union([z15.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z15.number()]).optional()
});

// src/schema/BuildingConstructionEffortSchema.ts
var BuildingConstructionEffortSchema = z16.object({
  inventory: InventorySchema,
  progress: z16.union([z16.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z16.number()]),
  reference: z16.string(),
  stage: z16.string(),
  time: z16.union([z16.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z16.number()]).optional(),
  upgrade_type: BuildingUpgradeTypeEnumSchema.optional()
});

// src/schema/BuildingConstructionSchema.ts
import { z as z17 } from "zod";
var BuildingConstructionSchema = z17.object({
  range: z17.union([z17.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z17.number()]).optional(),
  size: z17.union([z17.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z17.number()]).optional(),
  discount: z17.union([z17.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z17.number()]).optional(),
  time: z17.union([z17.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z17.number()]),
  materials: z17.record(ItemEnumSchema, z17.union([z17.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z17.number()]))
});

// src/schema/BuildingOperationSchema.ts
import { z as z20 } from "zod";

// src/schema/OperationSchema.ts
import { z as z19 } from "zod";

// src/schema/DeliveryCostSchema.ts
import { z as z18 } from "zod";
var DeliveryCostSchema = z18.object({
  land_distance: z18.union([z18.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z18.number()]),
  ferry_fee: z18.union([z18.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z18.number()]).optional()
});

// src/schema/OperationSchema.ts
var OperationSchema = z19.object({
  target: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]),
  production: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]).optional(),
  provision: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]).optional(),
  reference: z19.string().optional(),
  recipe: RecipeEnumSchema.optional(),
  volume: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]).optional(),
  tax_rate: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]).optional(),
  tax: z19.union([z19.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z19.number()]).optional(),
  delivery_cost: DeliveryCostSchema.optional(),
  flows: z19.record(ItemEnumSchema, FlowSchema).optional()
});

// src/schema/BuildingOperationSchema.ts
var BuildingOperationSchema = z20.object({
  total_flow: z20.record(ItemEnumSchema, FlowSchema),
  operations: z20.array(OperationSchema).optional().nullable()
});

// src/schema/BuildingRequirementSchema.ts
import { z as z21 } from "zod";
var BuildingRequirementSchema = z21.object({
  center: z21.boolean().optional().default(false),
  climate: ClimateEnumSchema.optional(),
  min: z21.union([z21.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z21.number()]).optional(),
  resource: ItemEnumSchema.optional()
});

// src/schema/BuildingRequirementsSchema.ts
import { z as z23 } from "zod";

// src/schema/TileRequirementSchema.ts
import { z as z22 } from "zod";
var TileRequirementSchema = z22.object({
  min: z22.union([z22.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z22.number()]).optional(),
  max: z22.union([z22.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z22.number()]).optional()
});

// src/schema/BuildingRequirementsSchema.ts
var BuildingRequirementsSchema = z23.object({
  fertility: TileRequirementSchema.optional(),
  forest: TileRequirementSchema.optional(),
  climate: ClimateEnumSchema.optional()
});

// src/schema/BuildingSchema.ts
import { z as z27 } from "zod";

// src/schema/LocationSchema.ts
import { z as z24 } from "zod";
var LocationSchema = z24.object({
  x: z24.union([z24.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z24.number()]),
  y: z24.union([z24.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z24.number()])
});

// src/schema/ProducerSchema.ts
import { z as z25 } from "zod";
var ProducerSchema = z25.object({
  inventory: InventorySchema,
  limited: z25.boolean(),
  manager: z25.string(),
  previous_operation: OperationSchema,
  provider_id: z25.union([z25.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z25.number()]).optional(),
  recipe: RecipeEnumSchema,
  reference: z25.string(),
  target: z25.union([z25.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z25.number()]).optional()
});

// src/schema/BuildingStorageSchema.ts
import { z as z26 } from "zod";
var BuildingStorageSchema = z26.object({
  inventory: InventorySchema,
  operations: z26.array(z26.string()),
  reference: z26.string()
});

// src/schema/BuildingSchema.ts
var BuildingSchema = z27.object({
  capacity: z27.union([z27.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z27.number()]).optional(),
  construction: BuildingConstructionSchema.optional().nullable(),
  delivery_cost: DeliveryCostSchema.optional(),
  id: z27.union([z27.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z27.number()]),
  land: z27.array(LocationSchema).optional(),
  location: LocationSchema.optional(),
  name: z27.string().optional(),
  owner_id: z27.string().optional(),
  producer: ProducerSchema.optional(),
  provider_id: z27.union([z27.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z27.number()]).optional(),
  size: z27.union([z27.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z27.number()]).optional(),
  storage: BuildingStorageSchema.optional(),
  sublocation: LocationSchema.optional(),
  town_id: z27.union([z27.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z27.number()]).optional(),
  type: BuildingTypeEnumSchema,
  upgrades: z27.array(BuildingUpgradeTypeEnumSchema).optional()
});

// src/schema/BuildingTypeSchema.ts
import { z as z29 } from "zod";

// src/schema/BuildingUpgradeSchema.ts
import { z as z28 } from "zod";
var BuildingUpgradeSchema = z28.object({
  type: BuildingUpgradeTypeEnumSchema,
  construction: BuildingConstructionSchema
});

// src/schema/BuildingTypeSchema.ts
var BuildingTypeSchema = z29.object({
  type: BuildingTypeEnumSchema,
  supports_boost: z29.boolean().optional().default(false),
  requires: BuildingRequirementsSchema,
  construction: BuildingConstructionSchema.optional(),
  upgrades: z29.array(BuildingUpgradeSchema).optional().default([])
});

// src/schema/BusinessBuildingSchema.ts
import { z as z30 } from "zod";
var BusinessBuildingSchema = z30.object({
  id: z30.union([z30.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z30.number()]),
  type: BuildingTypeEnumSchema
});

// src/schema/BusinessSchema.ts
import { z as z31 } from "zod";
var BusinessSchema = z31.object({
  account: AccountSchema,
  account_id: z31.string(),
  building_ids: z31.array(z31.union([z31.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z31.number()])).optional(),
  buildings: z31.array(BuildingSchema).optional(),
  contract_ids: z31.array(z31.string()).optional().nullable(),
  id: z31.union([z31.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z31.number()]),
  name: z31.string(),
  owner_id: z31.string(),
  transport_ids: z31.array(z31.union([z31.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z31.number()])).optional().nullable()
});

// src/schema/CommonersSchema.ts
import { z as z34 } from "zod";

// src/schema/TownDemandCategorySchema.ts
import { z as z33 } from "zod";

// src/schema/TownDemandSchema.ts
import { z as z32 } from "zod";
var TownDemandSchema = z32.object({
  product: ItemEnumSchema,
  bonus: z32.union([z32.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z32.number()]).default(String(0)),
  desire: z32.union([z32.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z32.number()]).default(String(0)),
  request: z32.union([z32.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z32.number()]).default(String(0)),
  result: z32.union([z32.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z32.number()]).default(String(0))
});

// src/schema/TownDemandCategorySchema.ts
var TownDemandCategorySchema = z33.object({
  name: z33.string(),
  products: z33.array(TownDemandSchema)
});

// src/schema/CommonersSchema.ts
var CommonersSchema = z34.object({
  account_id: z34.string(),
  count: z34.union([z34.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z34.number()]),
  migration: z34.union([z34.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z34.number()]),
  sustenance: z34.array(TownDemandCategorySchema)
});

// src/schema/HouseholdSchema.ts
import { z as z38 } from "zod";

// src/schema/PrestigeImpactSchema.ts
import { z as z35 } from "zod";
var PrestigeImpactSchema = z35.object({
  factor: z35.string(),
  impact: z35.union([z35.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z35.number()])
});

// src/schema/WorkerSchema.ts
import { z as z36 } from "zod";
var WorkerSchema = z36.object({
  assignment: z36.string(),
  capacity: z36.union([z36.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z36.number()]),
  name: z36.string(),
  skills: z36.record(SkillEnumSchema, z36.union([z36.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z36.number()]))
});

// src/schema/SustenanceSchema.ts
import { z as z37 } from "zod";
var SustenanceSchema = z37.object({
  reference: z37.string(),
  inventory: InventorySchema,
  provider_id: z37.string().optional()
});

// src/schema/HouseholdSchema.ts
var HouseholdSchema = z38.object({
  id: z38.string(),
  name: z38.string(),
  town_id: z38.union([z38.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z38.number()]),
  portrait: z38.string(),
  gender: z38.string(),
  account_id: z38.string(),
  business_ids: z38.array(z38.string()),
  prestige: z38.union([z38.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z38.number()]),
  prestige_impacts: z38.array(PrestigeImpactSchema).optional(),
  workers: z38.array(WorkerSchema),
  operations: z38.array(z38.string()),
  caps: z38.record(z38.string(), z38.union([z38.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z38.number()])),
  sustenance: SustenanceSchema
});

// src/schema/IngredientSchema.ts
import { z as z39 } from "zod";
var IngredientSchema = z39.object({
  product: ItemEnumSchema,
  amount: z39.union([z39.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z39.number()])
});

// src/schema/ItemOrderSchema.ts
import { z as z40 } from "zod";
var ItemOrderSchema = z40.object({
  volume: z40.union([z40.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z40.number()]),
  price: z40.union([z40.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z40.number()])
});

// src/schema/ItemPriceSchema.ts
import { z as z41 } from "zod";
var ItemPriceSchema = z41.object({
  low: z41.union([z41.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z41.number()]).optional(),
  typical: z41.union([z41.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z41.number()]),
  high: z41.union([z41.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z41.number()]).optional()
});

// src/schema/ItemSchema.ts
import { z as z42 } from "zod";
var ItemSchema = z42.object({
  name: ItemEnumSchema,
  type: ItemTypeEnumSchema,
  unit: z42.string(),
  weight: z42.union([z42.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z42.number()]).optional(),
  tier: z42.union([z42.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z42.number()]),
  classes: z42.array(SkillEnumSchema).optional().default([]),
  price: ItemPriceSchema
});

// src/schema/ItemTradeResultSchema.ts
import { z as z44 } from "zod";

// src/schema/ItemTradeSettlementSchema.ts
import { z as z43 } from "zod";
var ItemTradeSettlementSchema = z43.object({
  volume: z43.union([z43.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z43.number()]),
  price: z43.union([z43.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z43.number()])
});

// src/schema/ItemTradeResultSchema.ts
var ItemTradeResultSchema = z44.object({
  settlements: z44.array(ItemTradeSettlementSchema).optional(),
  order_id: z44.union([z44.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z44.number()]).optional(),
  embedded: z44.record(z44.string(), z44.any()).optional().default({})
});

// src/schema/ItemTradeSchema.ts
import { z as z45 } from "zod";
var ItemTradeSchema = z45.object({
  direction: z45.string(),
  expected_balance: z45.union([z45.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z45.number()]),
  operation: z45.string(),
  price: z45.union([z45.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z45.number()]),
  volume: z45.union([z45.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z45.number()])
});

// src/schema/MarketItemDetailsSchema.ts
import { z as z47 } from "zod";

// src/schema/MarketItemSchema.ts
import { z as z46 } from "zod";
var MarketItemSchema = z46.object({
  price: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  last_price: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  average_price: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  moving_average: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  highest_bid: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  lowest_ask: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  volume: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]),
  volume_prev_12: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  bid_volume_10: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0)),
  ask_volume_10: z46.union([z46.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z46.number()]).optional().default(String(0))
});

// src/schema/MarketItemDetailsSchema.ts
var MarketItemDetailsSchema = z47.object({
  id: z47.union([z47.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z47.number()]),
  product: ItemEnumSchema,
  asset: ItemEnumSchema,
  currency: z47.string(),
  bids: z47.array(ItemOrderSchema),
  asks: z47.array(ItemOrderSchema),
  data: MarketItemSchema
});

// src/schema/MarketSchema.ts
import { z as z48 } from "zod";
var MarketSchema = z48.object({
  markets: z48.record(ItemEnumSchema, MarketItemSchema),
  _ts: z48.union([z48.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z48.number()]).describe("_ts")
});

// src/schema/NotificationSettingsSchema.ts
import { z as z49 } from "zod";
var NotificationSettingsSchema = z49.object({
  discord: z49.boolean(),
  mutes: z49.nullable(z49.array(z49.string())).optional().default([])
});

// src/schema/PathSchema.ts
import { z as z50 } from "zod";
var PathSchema = z50.object({
  x: z50.union([z50.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z50.number()]),
  y: z50.union([z50.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z50.number()]),
  c: z50.union([z50.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z50.number()])
});

// src/schema/PlayerSchema.ts
import { z as z52 } from "zod";

// src/schema/SettingsSchema.ts
import { z as z51 } from "zod";
var SettingsSchema = z51.object({
  sound_volume: z51.union([z51.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z51.number()]),
  notifications: NotificationSettingsSchema,
  commoners_splash: z51.boolean(),
  construction_splash: z51.boolean(),
  land_purchase_splash: z51.boolean(),
  operations_splash: z51.boolean(),
  production_splash: z51.boolean(),
  recipes_splash: z51.boolean(),
  sustenance_splash: z51.boolean(),
  trading_splash: z51.boolean(),
  trade_config_splash: z51.boolean(),
  welcome_splash: z51.boolean(),
  first_building_splash: z51.boolean(),
  warehouse_splash: z51.boolean()
});

// src/schema/PlayerSchema.ts
var PlayerSchema = z52.object({
  username: z52.string(),
  household: HouseholdSchema,
  discord_id: z52.string().optional(),
  settings: SettingsSchema,
  active: z52.boolean()
});

// src/schema/RecipeSchema.ts
import { z as z53 } from "zod";
var RecipeSchema = z53.object({
  name: RecipeEnumSchema,
  tier: z53.union([z53.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z53.number()]),
  building: BuildingTypeEnumSchema,
  size: z53.union([z53.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z53.number()]),
  product_class: SkillEnumSchema.optional().describe("class"),
  points: z53.union([z53.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z53.number()]).optional(),
  inputs: z53.array(IngredientSchema).optional().default([]),
  outputs: z53.array(IngredientSchema).optional().default([])
});

// src/schema/RegionSchema.ts
import { z as z54 } from "zod";
var RegionSchema = z54.object({
  id: z54.union([z54.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z54.number()]),
  name: z54.string(),
  description: z54.string().optional(),
  center: LocationSchema.optional(),
  size: z54.union([z54.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z54.number()]).optional()
});

// src/schema/StructureSchema.ts
import { z as z55 } from "zod";
var StructureSchema = z55.object({
  id: z55.string(),
  type: BuildingTypeEnumSchema,
  tags: z55.array(z55.string()).optional()
});

// src/schema/TileSchema.ts
import { z as z56 } from "zod";
var TileSchema = z56.object({
  owner_id: z56.string().optional(),
  structure: StructureSchema.optional(),
  ask_price: z56.string().optional()
});

// src/schema/TownChurchSchema.ts
import { z as z57 } from "zod";
var TownChurchSchema = z57.object({
  project_ids: z57.array(z57.string()).optional().nullable()
});

// src/schema/TownCultureSchema.ts
import { z as z58 } from "zod";
var TownCultureSchema = z58.object({
  special_market_pressure: z58.record(z58.union([z58.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z58.number()]), z58.union([z58.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z58.number()])).optional()
});

// src/schema/TownDataSchema.ts
import { z as z61 } from "zod";

// src/schema/TownGovernmentSchema.ts
import { z as z60 } from "zod";

// src/schema/TownGovernmentTaxesSchema.ts
import { z as z59 } from "zod";
var TownGovernmentTaxesSchema = z59.object({
  land_tax: z59.union([z59.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z59.number()]).optional().default(String(0)),
  structure_tax: z59.union([z59.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z59.number()]).optional().default(String(0)),
  ferry_fees: z59.union([z59.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z59.number()]).optional().default(String(0))
});

// src/schema/TownGovernmentSchema.ts
var TownGovernmentSchema = z60.object({
  account_id: z60.string(),
  demands: z60.array(TownDemandSchema),
  taxes_collected: TownGovernmentTaxesSchema
});

// src/schema/TownDataSchema.ts
var TownDataSchema = z61.object({
  id: z61.string(),
  name: z61.string(),
  location: LocationSchema,
  region: z61.union([z61.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z61.number()]),
  center_ids: z61.array(z61.union([z61.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z61.number()])),
  domain: z61.record(z61.string(), TileSchema),
  household_ids: z61.array(z61.string()),
  commoners: CommonersSchema,
  government: TownGovernmentSchema,
  church: TownChurchSchema,
  navigation_zones: z61.record(z61.union([z61.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z61.number()]), z61.union([z61.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z61.number()])),
  culture: TownCultureSchema
});

// src/schema/TownSchema.ts
import { z as z62 } from "zod";
var TownSchema = z62.object({
  id: z62.union([z62.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z62.number()]),
  name: z62.string(),
  location: LocationSchema,
  region: z62.union([z62.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z62.number()]),
  capital: z62.boolean().default(false)
});

// src/schema/TradeRouteSchema.ts
import { z as z63 } from "zod";
var TradeRouteSchema = z63.object({
  id: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  reference: z63.string(),
  local_town: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  remote_town: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  capacity: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  reserved_import: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  reserved_export: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  distance: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  moves: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  provider_id: z63.union([z63.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z63.number()]),
  account_id: z63.string(),
  account: AccountSchema,
  managers: z63.record(ItemEnumSchema, ManagerSchema),
  current_flows: z63.record(ItemEnumSchema, FlowSchema),
  previous_flows: z63.record(ItemEnumSchema, FlowSchema)
});

// src/schema/TransportCargoSchema.ts
import { z as z64 } from "zod";
var TransportCargoSchema = z64.object({
  reference: z64.string(),
  inventory: InventorySchema.optional()
});

// src/schema/TransportJourneyLegSchema.ts
import { z as z65 } from "zod";
var TransportJourneyLegSchema = z65.object({
  path: z65.array(PathSchema)
});

// src/schema/TransportJourneySchema.ts
import { z as z66 } from "zod";
var TransportJourneySchema = z66.object({
  category: z66.string(),
  start_town_id: z66.union([z66.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z66.number()]),
  distance: z66.union([z66.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z66.number()]),
  moves: z66.union([z66.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z66.number()]),
  legs: z66.array(TransportJourneyLegSchema)
});

// src/schema/TransportSchema.ts
import { z as z67 } from "zod";
var TransportSchema = z67.object({
  id: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]),
  reference: z67.string(),
  type: TransportTypeEnumSchema,
  size: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]),
  name: z67.string(),
  owner_id: z67.string(),
  hometown_id: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]),
  location: LocationSchema,
  domain: z67.array(LocationSchema).optional(),
  capacity: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]),
  fish_quantity: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]).optional(),
  inventory: InventorySchema,
  cargo: TransportCargoSchema.optional(),
  previous_operations: OperationSchema.optional(),
  provider_id: z67.union([z67.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z67.number()]).optional(),
  producer: ProducerSchema.optional(),
  route: TradeRouteSchema.optional(),
  journey: TransportJourneySchema
});

// src/schema/TransportTypeSchema.ts
import { z as z68 } from "zod";
var TransportTypeSchema = z68.object({
  type: TransportTypeEnumSchema,
  category: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]),
  tier: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]),
  capacity: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]),
  speed: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]),
  journey_duration: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]).optional(),
  effective_days: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]).optional(),
  operating_costs: z68.record(ItemEnumSchema, z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()])),
  catches: z68.string().optional(),
  fishing_range: z68.union([z68.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z68.number()]).optional()
});

// src/schema/TurnSchema.ts
import { z as z69 } from "zod";
var TurnSchema = z69.object({
  turn: z69.union([z69.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z69.number()]),
  month: z69.string().optional(),
  year: z69.union([z69.string().transform((v) => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z69.number()]).optional()
});

// src/models/account.ts
var Account = class extends BaseModel {
  static schema = AccountSchema;
  assets;
  id;
  master_id;
  name;
  owner_id;
  sponsor_id;
  /**
   * Creates an instance of Account.
   * @param data - The data to initialize the account.
   */
  constructor(data) {
    super(data);
  }
  /**
   * Returns a map of the account's assets.
   */
  get assetsMap() {
    return new Map(Object.entries(this.assets).map(([key, value]) => [key, value]));
  }
};
var AccountAsset = class extends BaseModel {
  static schema = AccountAssetSchema;
  balance;
  capacity;
  purchase;
  purchase_price;
  reserved;
  reserved_capacity;
  sale;
  sale_price;
  unit_cost;
  /**
   * Checks if the asset has been purchased.
   */
  get purchased() {
    return this.purchase !== null;
  }
  /**
   * Checks if the asset has been sold.
   */
  get sold() {
    return this.sale !== null;
  }
  /**
   * Calculates the total purchase value of the asset.
   */
  get totalPurchase() {
    return (this.purchase ?? 0) * (this.purchase_price ?? 0);
  }
  /**
   * Calculates the total sale value of the asset.
   */
  get totalSale() {
    return (this.sale ?? 0) * (this.sale_price ?? 0);
  }
  /**
   * Calculates the total value of the asset based on its balance and unit cost.
   */
  get totalValue() {
    return (this.balance ?? 0) * (this.unit_cost ?? 0);
  }
};

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
  /**
   * Creates an instance of Building.
   * @param data - The data to initialize the building.
   */
  constructor(data) {
    super(data);
  }
};
var BuildingConstruction = class extends BaseModel {
  static schema = BuildingConstructionSchema;
  range;
  size;
  discount;
  time;
  materials;
  /**
   * Creates an instance of BuildingConstruction.
   * @param data - The data to initialize the building construction.
   */
  constructor(data) {
    super(data);
  }
  /**
   * Returns a map of the materials required for construction.
   */
  get materialsMap() {
    return new Map(Object.entries(this.materials).map(([key, value]) => [key, value]));
  }
};
var BuildingStorage = class extends BaseModel {
  static schema = BuildingStorageSchema;
  inventory;
  operations;
  reference;
  /**
   * Creates an instance of BuildingStorage.
   * @param data - The data to initialize the building storage.
   */
  constructor(data) {
    super(data);
  }
};
var BuildingOperation = class extends BaseModel {
  static schema = BuildingOperationSchema;
  total_flow;
  operations;
  /**
   * Creates an instance of BuildingOperation.
   * @param data - The data to initialize the building operation.
   */
  constructor(data) {
    super(data);
  }
};
var BuildingType = class extends BaseModel {
  static schema = BuildingTypeSchema;
  type;
  supports_boost;
  requires;
  construction;
  upgrades;
  /**
   * Creates an instance of BuildingType.
   * @param data - The data to initialize the building type.
   */
  constructor(data) {
    super(data);
  }
};

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
  /**
   * Creates an instance of Business.
   * @param data - The data to initialize the business.
   */
  constructor(data) {
    super(data);
  }
};
var BusinessBuilding = class extends BaseModel {
  static schema = BusinessBuildingSchema;
  id;
  type;
  /**
   * Creates an instance of BusinessBuilding.
   * @param data - The data to initialize the business building.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/commoners.ts
var Commoners = class extends BaseModel {
  static schema = CommonersSchema;
  account_id;
  count;
  migration;
  sustenance;
  /**
   * Creates an instance of Commoners.
   * @param data - The data to initialize the commoners.
   */
  constructor(data) {
    super(data);
  }
  /**
   * Returns the demands of the commoners by flattening the sustenance categories.
   */
  get demands() {
    return this.sustenance.flatMap((category) => category.products);
  }
};

// src/models/deliveryCost.ts
var DeliveryCost = class extends BaseModel {
  static schema = DeliveryCostSchema;
  land_distance;
  ferry_fee;
  /**
   * Creates an instance of DeliveryCost.
   * @param data - The data to initialize the delivery cost.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/flow.ts
var Flow = class extends BaseModel {
  static schema = FlowSchema;
  consumption;
  expiration;
  export;
  imported;
  production;
  production_cost;
  purchase;
  purchase_cost;
  resident;
  sale;
  sale_value;
  shortfall;
  /**
   * Creates an instance of Flow.
   * @param data - The data to initialize the flow.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/inventory.ts
var Inventory = class extends BaseModel {
  static schema = InventorySchema;
  account;
  assets;
  capacity;
  managers;
  previous_flows;
  reserved;
  /**
   * Creates an instance of Inventory.
   * @param data - The data to initialize the inventory.
   */
  constructor(data) {
    super(data);
  }
  /**
   * Returns a map of the items in the inventory.
   */
  get items() {
    return new Map(Object.entries(this.account.assets).map(([key, value]) => [key, value]));
  }
  /**
   * Returns a map of the managers in the inventory.
   */
  get managersMap() {
    console.log("Accessing managersMap");
    console.log("Managers: ", this.managers);
    return new Map(Object.entries(this.managers).map(([key, value]) => [key, value]));
  }
  /**
   * Returns a map of the previous flows in the inventory.
   */
  get previousFlowsMap() {
    return new Map(Object.entries(this.previous_flows).map(([key, value]) => [key, value]));
  }
};

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
  /**
   * Creates an instance of Item.
   * @param data - The data to initialize the item.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/itemTrade.ts
var ItemTrade = class extends BaseModel {
  static schema = ItemTradeSchema;
  direction;
  expected_balance;
  operation;
  price;
  volume;
  /**
   * Creates an instance of ItemTrade.
   * @param data - The data to initialize the item trade.
   */
  constructor(data) {
    super(data);
  }
};
var ItemTradeResult = class extends BaseModel {
  static schema = ItemTradeResultSchema;
  settlements;
  order_id;
  embedded;
  /**
   * Creates an instance of ItemTradeResult.
   * @param data - The data to initialize the item trade result.
   */
  constructor(data) {
    super(data);
  }
};
var ItemTradeSettlement = class extends BaseModel {
  static schema = ItemTradeSettlementSchema;
  volume;
  price;
  /**
   * Creates an instance of ItemTradeSettlement.
   * @param data - The data to initialize the item trade settlement.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/location.ts
var Location = class extends BaseModel {
  static schema = LocationSchema;
  x;
  y;
  /**
   * Creates an instance of Location.
   * @param data - The data to initialize the location.
   */
  constructor(data) {
    super(data);
  }
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
  /**
   * Creates an instance of Manager.
   * @param data - The data to initialize the manager.
   */
  constructor(data) {
    super(data);
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
  /**
   * Checks if the manager is currently buying.
   */
  get buying() {
    return this.buyPrice !== null && this.buyVolume !== null;
  }
  /**
   * Calculates the maximum buy price.
   */
  get maxBuyPrice() {
    return (this.buyPrice ?? 0) * (this.buyVolume ?? 0);
  }
  /**
   * Calculates the maximum sell price.
   */
  get maxSellPrice() {
    return (this.sellPrice ?? 0) * (this.sellVolume ?? 0);
  }
  /**
   * Checks if the manager is currently selling.
   */
  get selling() {
    return this.sellPrice !== null && this.sellVolume !== null;
  }
};

// src/models/market.ts
var Market = class extends BaseModel {
  static schema = MarketSchema;
  markets;
  _ts;
  /**
   * Creates an instance of Market.
   * @param data - The data to initialize the market.
   */
  constructor(data) {
    super(data);
  }
};
var MarketItem = class extends BaseModel {
  static schema = MarketItemSchema;
  price;
  last_price;
  average_price;
  moving_average;
  highest_bid;
  lowest_ask;
  volume;
  volume_prev_12;
  bid_volume_10;
  ask_volume_10;
  /**
   * Creates an instance of MarketItem.
   * @param data - The data to initialize the market item.
   */
  constructor(data) {
    super(data);
  }
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
  /**
   * Creates an instance of MarketItemDetails.
   * @param data - The data to initialize the market item details.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/operation.ts
var Operation = class extends BaseModel {
  static schema = OperationSchema;
  target;
  production;
  provision;
  reference;
  recipe;
  volume;
  tax_rate;
  tax;
  delivery_cost;
  flows;
  /**
   * Creates an instance of Operation.
   * @param data - The data to initialize the operation.
   */
  constructor(data) {
    super(data);
  }
  /**
   * Calculates the surplus of the operation.
   */
  get surplus() {
    return (this.production || 0) - (this.target || 0);
  }
  /**
   * Calculates the shortfall of the operation.
   */
  get shortfall() {
    return (this.target || 0) - (this.production || 0);
  }
};

// src/models/path.ts
var Path = class extends BaseModel {
  static schema = PathSchema;
  x;
  y;
  c;
  /**
   * Creates an instance of Path.
   * @param data - The data to initialize the path.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/player.ts
var Player = class extends BaseModel {
  static schema = PlayerSchema;
  username;
  household;
  discord_id;
  settings;
  active;
  /**
   * Creates an instance of Player.
   * @param data - The data to initialize the player.
   */
  constructor(data) {
    super(data);
  }
};
var Household = class extends BaseModel {
  static schema = HouseholdSchema;
  id;
  name;
  town_id;
  portrait;
  gender;
  account_id;
  business_ids;
  prestige;
  prestige_impacts;
  workers;
  operations;
  caps;
  sustenance;
  /**
   * Creates an instance of Household.
   * @param data - The data to initialize the household.
   */
  constructor(data) {
    super(data);
  }
};
var PrestigeImpact = class extends BaseModel {
  static schema = PrestigeImpactSchema;
  factor;
  impact;
  /**
   * Creates an instance of PrestigeImpact.
   * @param data - The data to initialize the prestige impact.
   */
  constructor(data) {
    super(data);
  }
};
var Worker = class extends BaseModel {
  static schema = WorkerSchema;
  assignment;
  capacity;
  name;
  skills;
  /**
   * Creates an instance of Worker.
   * @param data - The data to initialize the worker.
   */
  constructor(data) {
    super(data);
  }
};
var Sustenance = class extends BaseModel {
  static schema = SustenanceSchema;
  reference;
  inventory;
  provider_id;
  /**
   * Creates an instance of Sustenance.
   * @param data - The data to initialize the sustenance.
   */
  constructor(data) {
    super(data);
  }
};
var Settings = class extends BaseModel {
  static schema = SettingsSchema;
  sound_volume;
  notifications;
  commoners_splash;
  construction_splash;
  land_purchase_splash;
  operations_splash;
  production_splash;
  recipes_splash;
  sustenance_splash;
  trading_splash;
  trade_config_splash;
  welcome_splash;
  first_building_splash;
  warehouse_splash;
  /**
   * Creates an instance of Settings.
   * @param data - The data to initialize the settings.
   */
  constructor(data) {
    super(data);
  }
};
var NotificationSettings = class extends BaseModel {
  static schema = NotificationSettingsSchema;
  discord;
  mutes;
  /**
   * Creates an instance of NotificationSettings.
   * @param data - The data to initialize the notification settings.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/producer.ts
var Producer = class extends BaseModel {
  static schema = ProducerSchema;
  inventory;
  operation;
  limited;
  manager;
  previous_operation;
  provider_id;
  recipe;
  reference;
  target;
  /**
   * Creates an instance of Producer.
   * @param data - The data to initialize the producer.
   */
  constructor(data) {
    super(data);
  }
};

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
  /**
   * Creates an instance of Recipe.
   * @param data - The data to initialize the recipe.
   */
  constructor(data) {
    super(data);
  }
};
var Ingredient = class extends BaseModel {
  static schema = IngredientSchema;
  product;
  amount;
  /**
   * Creates an instance of Ingredient.
   * @param data - The data to initialize the ingredient.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/region.ts
var Region = class extends BaseModel {
  static schema = RegionSchema;
  id;
  name;
  description;
  center;
  size;
  /**
   * Creates an instance of Region.
   * @param data - The data to initialize the region.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/structure.ts
var Structure = class extends BaseModel {
  static schema = StructureSchema;
  id;
  type;
  tags;
  /**
   * Creates an instance of Structure.
   * @param data - The data to initialize the structure.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/tile.ts
var Tile = class extends BaseModel {
  static schema = TileSchema;
  owner_id;
  structure;
  ask_price;
  /**
   * Creates an instance of Tile.
   * @param data - The data to initialize the tile.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/town.ts
var Town = class extends BaseModel {
  static schema = TownSchema;
  id;
  name;
  location;
  region;
  capital;
  /**
   * Creates an instance of Town.
   * @param data - The data to initialize the town.
   */
  constructor(data) {
    super(data);
  }
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
  /**
   * Creates an instance of TownData.
   * @param data - The data to initialize the town data.
   */
  constructor(data) {
    super(data);
  }
};
var TownDemand = class extends BaseModel {
  static schema = TownDemandSchema;
  product;
  bonus;
  desire;
  request;
  result;
  /**
   * Creates an instance of TownDemand.
   * @param data - The data to initialize the town demand.
   */
  constructor(data) {
    super(data);
  }
};
var TownDemandCategory = class extends BaseModel {
  static schema = TownDemandCategorySchema;
  name;
  products;
  /**
   * Creates an instance of TownDemandCategory.
   * @param data - The data to initialize the town demand category.
   */
  constructor(data) {
    super(data);
  }
};

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
  /**
   * Creates an instance of Transport.
   * @param data - The data to initialize the transport.
   */
  constructor(data) {
    super(data);
  }
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
  /**
   * Creates an instance of TradeRoute.
   * @param data - The data to initialize the trade route.
   */
  constructor(data) {
    super(data);
  }
};
var TransportCargo = class extends BaseModel {
  static schema = TransportCargoSchema;
  reference;
  inventory;
  /**
   * Creates an instance of TransportCargo.
   * @param data - The data to initialize the transport cargo.
   */
  constructor(data) {
    super(data);
  }
};
var TransportJourney = class extends BaseModel {
  static schema = TransportJourneySchema;
  category;
  start_town_id;
  distance;
  moves;
  legs;
  /**
   * Creates an instance of TransportJourney.
   * @param data - The data to initialize the transport journey.
   */
  constructor(data) {
    super(data);
  }
};
var TransportJourneyLeg = class extends BaseModel {
  static schema = TransportJourneyLegSchema;
  path;
  /**
   * Creates an instance of TransportJourneyLeg.
   * @param data - The data to initialize the transport journey leg.
   */
  constructor(data) {
    super(data);
  }
};
var TransportType = class extends BaseModel {
  static schema = TransportTypeSchema;
  type;
  category;
  tier;
  capacity;
  speed;
  journey_duration;
  effective_days;
  operating_costs;
  catches;
  fishing_range;
  /**
   * Creates an instance of TransportType.
   * @param data - The data to initialize the transport type.
   */
  constructor(data) {
    super(data);
  }
};

// src/models/turn.ts
var Turn = class extends BaseModel {
  static schema = TurnSchema;
  turn;
  month;
  year;
  /**
   * Creates an instance of Turn.
   * @param data - The data to initialize the turn.
   */
  constructor(data) {
    super(data);
  }
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

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  BuySellOrderFailedException: () => BuySellOrderFailedException,
  SetManagerFailedException: () => SetManagerFailedException,
  TurnInProgressException: () => TurnInProgressException,
  convertFloatsToStrings: () => convertFloatsToStrings
});

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
var TurnInProgressException = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TurnInProgressException";
  }
};
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
      return Town.validateArray(response);
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
  async _sendOrder(item, id, expected_balance, operation, price, volume, direction) {
    const trade = new ItemTrade({
      direction,
      expected_balance,
      operation,
      price,
      volume
    });
    const json = convertFloatsToStrings(trade);
    const response = await super.post({ endpoint: apiRoutes.orders, id, item, data: json });
    if (response.status === 200) {
      return await ItemTradeResult.validate(response);
    } else {
      throw new BuySellOrderFailedException(`Failed to send ${direction} order: ${response.statusText}`);
    }
  }
};
var towns_default = TownsAPI;

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
        return new BuildingOperation({
          total_flow: null,
          operations: null
        });
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
var StaticAPI = class extends baseAPI_default {
  endpoint = staticUrl;
  cache;
  constructor(client) {
    super(client);
    this.cache = new LRUCache({ max: 1 });
  }
  async getBuildings() {
    const data = await this._get();
    return data["Gm"].map((item) => BuildingType.validate(item));
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
    return data["g$"].map((item) => TransportType.validate(item));
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
var Building3 = class {
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
      console.log("Giving total flow: " + JSON.stringify(this.buildingOperation.totalFlow));
      return this.buildingOperation.totalFlow;
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
    return this.data && this.data.storage ? new Map(Object.entries(this.data.storage.inventory.account.assets).map(([key, value]) => [key, value])) : null;
  }
  get producerItems() {
    return this.data && this.data.producer ? new Map(Object.entries(this.data.producer.inventory.account.assets).map(([key, value]) => [key, value])) : null;
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
          inventoryAssets = this.producerItems;
        }
        let inventoryManagers;
        if (this.data && this.data.storage) {
          inventoryManagers = this.data.storage.inventory.managersMap;
        } else if (this.data && this.data.producer) {
          inventoryManagers = this.data.producer.inventory.managersMap;
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
var BuildingsList = class _BuildingsList extends Array {
  byId(id) {
    return this.find((building) => building.id === id);
  }
  byType(type) {
    return new _BuildingsList(...this.filter((building) => building.data.type === type));
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
var Exports = class _Exports extends Object {
  data;
  constructor(data) {
    super();
    this.data = data;
  }
  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  get flowed() {
    return new _Exports(
      Object.keys(this.data).filter((item) => this.data[item].flowed).reduce((acc, item) => ({ ...acc, [item]: this.data[item] }), {})
    );
  }
  get value() {
    return Object.values(this.data).reduce((acc, exp) => acc + exp.value, 0);
  }
  get valueFlowed() {
    return Object.values(this.data).reduce(
      (acc, exp) => acc + exp.valueFlowed,
      0
    );
  }
  get volume() {
    return Object.values(this.data).reduce((acc, exp) => acc + exp.volume, 0);
  }
  get volumeFlowed() {
    return Object.values(this.data).reduce(
      (acc, exp) => acc + exp.volumeFlowed,
      0
    );
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
var ExportsSummed = class _ExportsSummed extends Object {
  data;
  constructor(data = {}) {
    super();
    this.data = data;
  }
  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  get flowed() {
    return new _ExportsSummed(
      Object.keys(this.data).filter(
        (item) => this.data[item].some((exp) => exp.flowed)
      ).reduce((acc, item) => ({ ...acc, [item]: this.data[item] }), {})
    );
  }
  get value() {
    return Object.values(this.data).reduce(
      (acc, exps) => acc + exps.reduce((acc2, exp) => acc2 + exp.value, 0),
      0
    );
  }
  get valueFlowed() {
    return Object.values(this.data).reduce(
      (acc, exps) => acc + exps.reduce((acc2, exp) => acc2 + exp.valueFlowed, 0),
      0
    );
  }
  get volume() {
    return Object.values(this.data).reduce(
      (acc, exps) => acc + exps.reduce((acc2, exp) => acc2 + exp.volume, 0),
      0
    );
  }
  get volumeFlowed() {
    return Object.values(this.data).reduce((acc, exps) => {
      return acc + exps.reduce((acc2, exp) => acc2 + exp.volumeFlowed, 0);
    }, 0);
  }
  byTownId(id) {
    const data = Object.entries(this.data).reduce((acc, [item, exps]) => {
      if (+exps[0].town.data.id === id) {
        acc[item] = exps;
      }
      return acc;
    }, {});
    return new _ExportsSummed(data);
  }
  byTownName(name) {
    const data = Object.entries(this.data).reduce((acc, [item, exps]) => {
      if (exps[0].town.data.name === name) {
        acc[item] = exps;
      }
      return acc;
    }, {});
    return new _ExportsSummed(data);
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
var Imports = class _Imports extends Object {
  data;
  constructor(data) {
    super();
    this.data = data;
  }
  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  get cost() {
    return Object.values(this.data).reduce((acc, imp) => acc + imp.cost, 0);
  }
  get costFlowed() {
    return Object.values(this.data).reduce((acc, imp) => acc + imp.cost_flowed, 0);
  }
  get flowed() {
    return new _Imports(
      Object.entries(this.data).reduce((acc, [item, imp]) => {
        if (imp.flowed) {
          acc[item] = imp;
        }
        return acc;
      }, {})
    );
  }
  get volume() {
    return Object.values(this.data).reduce((acc, imp) => acc + imp.volume, 0);
  }
  get volumeFlowed() {
    return Object.values(this.data).reduce((acc, imp) => acc + imp.volumeFlowed, 0);
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
var ImportsSummed = class _ImportsSummed extends Object {
  data;
  constructor(data = {}) {
    super();
    this.data = data;
  }
  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  get cost() {
    return Object.values(this.data).reduce((acc, imps) => acc + imps.cost, 0);
  }
  get costFlowed() {
    return Object.values(this.data).reduce((acc, imps) => acc + imps.costFlowed, 0);
  }
  get flowed() {
    return new _ImportsSummed(
      Object.entries(this.data).reduce((acc, [item, imps]) => {
        if (imps.flowed) {
          acc[item] = imps;
        }
        return acc;
      }, {})
    );
  }
  get volume() {
    return Object.values(this.data).reduce((acc, imps) => acc + imps.volume, 0);
  }
  get volumeFlowed() {
    return Object.values(this.data).reduce((acc, imps) => acc + imps.volumeFlowed, 0);
  }
  byTownId(id) {
    return new _ImportsSummed(
      Object.entries(this.data).reduce((acc, [item, imps]) => {
        if (+imps[0].town.data.id === id) {
          acc[item] = imps;
        }
        return acc;
      }, {})
    );
  }
  byTownName(name) {
    return new _ImportsSummed(
      Object.entries(this.data).reduce((acc, [item, imps]) => {
        if (imps[0].town.data.name === name) {
          acc[item] = imps;
        }
        return acc;
      }, {})
    );
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
      console.log(JSON.stringify(this.data.total_flow));
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
    return new Map(Object.entries(this.data.total_flow).map(([key, value]) => [key, value]));
  }
};
var BuildingOperationList = class extends Array {
  byBuildingId(buildingId) {
    return this.find((o) => o.buildingId === buildingId);
  }
  byItemInput(item) {
    return new OperationsList(
      ...this.flatMap(
        (buildingOperation) => buildingOperation.operations.filter(
          (operation) => operation.recipe && item in operation.recipe.inputs
        )
      )
    );
  }
  byItemOutput(item) {
    return new OperationsList(
      ...this.flatMap(
        (buildingOperation) => buildingOperation.operations.filter(
          (operation) => operation.recipe && item in operation.recipe.outputs
        )
      )
    );
  }
};
var BuildingOperationsDict = class extends Map {
  byBuildingType(buildingType) {
    return new OperationsList(
      ...Array.from(this.values()).flatMap(
        (buildingOperation) => buildingOperation.operations.filter(
          (operation) => operation.building && operation.building.type === buildingType
        )
      )
    );
  }
  byItemInput(item) {
    return new OperationsList(
      ...Array.from(this.values()).flatMap(
        (buildingOperation) => buildingOperation.operations.filter(
          (operation) => operation.recipe && item in operation.recipe.inputs
        )
      )
    );
  }
  byItemOutput(item) {
    return new OperationsList(
      ...Array.from(this.values()).flatMap(
        (buildingOperation) => buildingOperation.operations.filter(
          (operation) => operation.recipe && item in operation.recipe.outputs
        )
      )
    );
  }
};
var Operation2 = class {
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

// src/game/transport.ts
var Transport3 = class {
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
      this.town = new Town2(this._client, this.data.route.remote_town, data);
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
      for (const item in this.route?.managers) {
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
var TransportList = class _TransportList extends Array {
  byTownName(name) {
    const transports = new _TransportList();
    for (const transport of this) {
      if (transport.docked && transport.town.name === name) {
        transports.push(transport);
      }
    }
    return transports;
  }
  searchMarkets(item) {
    const items = [];
    for (const transport of this) {
      if (transport.docked && item in transport.town.market) {
        items.push(new TownItem(item, transport.town.market[item], transport.town));
      }
    }
    return items;
  }
};
var TownItem = class {
  item;
  marketItem;
  town;
  constructor(item, marketItem, town) {
    this.item = item;
    this.marketItem = marketItem;
    this.town = town;
  }
  fetchDetails() {
    return this.town.fetchMarketItem(this.item);
  }
};

// src/game/player.ts
var Player2 = class {
  _client;
  exports;
  imports;
  data;
  business;
  town;
  operations;
  buildings;
  transports;
  storehouse;
  constructor(client) {
    this._client = client;
    this.exports = new ExportsSummed();
    this.imports = new ImportsSummed();
  }
  async load() {
    this.data = await this._client.playerApi.get();
    this.business = await this._client.businessesApi.get(
      { id: +this.data.household.business_ids[0] }
    );
    this.town = await this._client.getTown(this.data.household.town_id);
    let tasks = [];
    for (const operation of this.data.household.operations) {
      const id = parseInt(operation.split("/")[1]);
      if (!operation.includes("transport")) {
        tasks.push(this._client.getBuildingOperation(this, id));
      }
    }
    this.operations = new BuildingOperationsDict(
      await Promise.all(tasks).then(
        (ops) => ops.map((op) => [op.buildingId, op])
      )
    );
    let buildingTasks = [];
    for (const id of this.business.building_ids) {
      buildingTasks.push(this._client.getBuilding(this, id));
    }
    this.buildings = new BuildingsList(...await Promise.all(buildingTasks));
    let transportTasks = [];
    if (this.business.transport_ids) {
      for (const id of this.business.transport_ids) {
        transportTasks.push(this._client.getTransport(this, id));
      }
    }
    this.transports = new TransportList(...await Promise.all(transportTasks));
    for (const transport of this.transports) {
      for (const item in transport.exports) {
        const exportItem = transport.exports[item];
        if (!this.exports[item]) {
          this.exports[item] = new ExportsList(...[exportItem]);
        } else {
          this.exports[item].push(exportItem);
        }
      }
      for (const item in transport.imports) {
        const importItem = transport.imports[item];
        if (!this.imports[item]) {
          this.imports[item] = new ImportsList(...[importItem]);
        } else {
          this.imports[item].push(importItem);
        }
      }
    }
    this.storehouse = await this._client.getStorehouse(this);
  }
  get household() {
    return this.data.household;
  }
  get money() {
    return this.business.account.assetsMap.get("money" /* Money */).balance;
  }
  get prestige() {
    return this.data.household.prestige;
  }
  get sustenance() {
    return this.data.household.sustenance;
  }
  get sustenanceCost() {
    let totalCost = 0;
    for (const item of this.sustenanceItems) {
      totalCost += this.sustenanceItemCost(item);
    }
    return totalCost;
  }
  get sustenanceItems() {
    return Array.from(this.data.household.sustenance.inventory.managersMap.keys());
  }
  sustenanceItemConsumption(item) {
    return this.data.household.sustenance.inventory.previous_flows[item].consumption;
  }
  sustenanceItemCost(item) {
    return this.sustenanceItemConsumption(item) * this.storehouse.items[item].averageCost;
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
    try {
      const result = await this.player.town.buy(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
      const validatedAccount = await Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]);
      this.updateAccount(validatedAccount);
      return result;
    } catch (error) {
      throw new Error(`Failed to buy item ${item}: ${error.message}`);
    }
  }
  async patchManager(item, data) {
    await this.data.patchManager(item, data);
  }
  async sell(item, volume, price) {
    try {
      const result = await this.player.town.sell(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
      const validatedAccount = await Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]);
      this.updateAccount(validatedAccount);
      return result;
    } catch (error) {
      throw new Error(`Failed to sell item ${item}: ${error.message}`);
    }
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
    const p = new Player2(this);
    await p.load();
    return p;
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
    const b = new Building3(this, player, id);
    await b.load();
    return b;
  }
  async getBuildingOperation(player, buildingId) {
    const buildingOperation = new BuildingOperation2(this, player, buildingId);
    await buildingOperation.load();
    return buildingOperation;
  }
  async getOperation(player, buildingOperation, operation) {
    const op = new Operation2(this, player, buildingOperation, operation);
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
    const transport = new Transport3(this, player, id);
    await transport.load();
    return transport;
  }
};

// src/game/index.ts
var game_exports = {};
__export(game_exports, {
  Building: () => Building3,
  BuildingOperation: () => BuildingOperation2,
  BuildingOperationList: () => BuildingOperationList,
  BuildingOperationsDict: () => BuildingOperationsDict,
  BuildingsList: () => BuildingsList,
  Export: () => Export,
  Exports: () => Exports,
  ExportsList: () => ExportsList,
  ExportsSummed: () => ExportsSummed,
  Import: () => Import,
  Imports: () => Imports,
  ImportsList: () => ImportsList,
  ImportsSummed: () => ImportsSummed,
  Operation: () => Operation2,
  OperationsList: () => OperationsList,
  Player: () => Player2,
  Recipe: () => Recipe2,
  Storehouse: () => Storehouse,
  StorehouseItem: () => StorehouseItem,
  Town: () => Town2,
  TownItem: () => TownItem,
  Transport: () => Transport3,
  TransportList: () => TransportList
});

// src/api/index.ts
var api_exports = {};
export {
  AssetEnum,
  Building3 as Building,
  BuildingOperation2 as BuildingOperation,
  BuildingOperationList,
  BuildingOperationsDict,
  BuildingTypeEnum,
  BuildingUpgradeTypeEnum,
  BuildingsList,
  Client,
  ClimateEnum,
  Export,
  Exports,
  ExportsList,
  ExportsSummed,
  Import,
  Imports,
  ImportsList,
  ImportsSummed,
  ItemEnum,
  ItemTypeEnum,
  Operation2 as Operation,
  OperationsList,
  Player2 as Player,
  Recipe2 as Recipe,
  RecipeEnum,
  SkillEnum,
  SkillLevelEnum,
  Storehouse,
  StorehouseItem,
  Town2 as Town,
  TownItem,
  Transport3 as Transport,
  TransportList,
  TransportTypeEnum,
  api_exports as api,
  game_exports as game,
  models_exports as models,
  schema_exports as schema,
  utils_exports as utils
};
//# sourceMappingURL=index.mjs.map