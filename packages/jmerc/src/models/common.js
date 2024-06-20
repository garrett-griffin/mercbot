const { Expose, Type, plainToClass } = require('class-transformer');

class Structure {
    @Expose() id;
    @Expose() type;
    @Expose() resource;
    @Expose() tags;
}

class Tile {
    @Expose() id;
    @Expose() owner_id;
    @Type( () => Structure) @Expose() structure;
    @Expose() ask_price;
}

class Location {
    @Expose() x;
    @Expose() y;

    static modelValidate(data) {
        return plainToClass(Location, data);
    }
}

class Inventory {
    @Type(() => InventoryAccount) @Expose() account;
    @Expose() capacity;
    @Expose() managers;
    @Expose() previous_flows;
    @Expose() reserved;

    get items() {
        return this.account.assets;
    }

    static modelValidate(data) {
        return plainToClass(Inventory, data);
    }
}

class InventoryAccount {
    @Expose() assets;
    @Expose() id;
    @Expose() master_id;
    @Expose() name;
    @Expose() owner_id;
    @Expose() sponsor_id;

    static modelValidate(data) {
        return plainToClass(InventoryAccount, data);
    }
}

class InventoryAccountAsset {
    @Expose() balance;
    @Expose() capacity;
    @Expose() purchase;
    @Expose() purchase_price;
    @Expose() reserved;
    @Expose() reserved_capacity;
    @Expose() sale;
    @Expose() sale_price;
    @Expose() unit_cost;

    get purchased() {
        return this.purchase !== null;
    }

    get sold() {
        return this.sale !== null;
    }

    get totalPurchase() {
        return this.purchase * this.purchase_price;
    }

    get totalSale() {
        return this.sale * this.sale_price;
    }

    get totalValue() {
        return this.balance * this.unit_cost;
    }

    static modelValidate(data) {
        return plainToClass(InventoryAccountAsset, data);
    }
}

class DeliveryCost {
    @Expose() land_distance;
    @Expose() ferry_fee;

    static modelValidate(data) {
        return plainToClass(DeliveryCost, data);
    }
}

class InventoryManager {
    @Expose() buy_price;
    @Expose() buy_volume;
    @Expose() capacity;
    @Expose() max_holding;
    @Expose() sell_price;
    @Expose() sell_volume;

    get buying() {
        return this.buy_price !== null && this.buy_volume !== null;
    }

    get maxBuyPrice() {
        return this.buy_price * this.buy_volume;
    }

    get maxSellPrice() {
        return this.sell_price * this.sell_volume;
    }

    get selling() {
        return this.sell_price !== null && this.sell_volume !== null;
    }

    modelDump() {
        return this;
    }

    static modelValidate(data) {
        return plainToClass(InventoryManager, data);
    }
}

class InventoryFlow {
    @Expose() consumption = 0.0;
    @Expose() expiration = 0.0;
    @Expose() export;
    @Expose() imported;
    @Expose() production = 0.0;
    @Expose() production_cost = 0.0;
    @Expose() purchase;
    @Expose() purchase_cost = 0.0;
    @Expose() resident;
    @Expose() sale;
    @Expose() sale_value = 0.0;
    @Expose() shortfall = 0.0;

    static modelValidate(data) {
        return plainToClass(InventoryFlow, data);
    }
}

class Operation {
    @Expose() target;
    @Expose() production;
    @Expose() provision;
    @Expose() reference;
    @Type(() => Recipe) @Expose() recipe;
    @Expose() volume;
    @Expose() tax_rate;
    @Expose() tax;
    @Type(() => DeliveryCost) @Expose() delivery_cost;
    @Expose() flows;

    get surplus() {
        return this.production - this.target;
    }

    get shortfall() {
        return this.target - this.production;
    }

    static modelValidate(data) {
        return plainToClass(Operation, data);
    }
}

class Path {
    @Expose() x;
    @Expose() y;
    @Expose() c;

    static modelValidate(data) {
        return plainToClass(Path, data);
    }
}

class Producer {
    @Type(() => Inventory) @Expose() inventory;
    @Expose() limited;
    @Expose() manager;
    @Type(() => Operation) @Expose() previous_operation;
    @Expose() provider_id;
    @Type(() => Recipe) @Expose() recipe;
    @Expose() reference;
    @Expose() target;

    static modelValidate(data) {
        return plainToClass(Producer, data);
    }
}

class ItemTrade {
    @Expose() direction;
    @Expose() expected_balance;
    @Expose() operation;
    @Expose() price;
    @Expose() volume;

    static modelValidate(data) {
        return plainToClass(ItemTrade, data);
    }
}

class ItemTradeResult {
    @Expose() settlements;
    @Expose() order_id;
    @Expose({ name: '_embedded' }) embedded = {};

    static modelValidate(data) {
        return plainToClass(ItemTradeResult, data);
    }
}

class ItemTradeSettlement {
    @Expose() volume;
    @Expose() price;

    static modelValidate(data) {
        return plainToClass(ItemTradeSettlement, data);
    }
}

class BuildingType {
    static Apothecary = "apothecary";
    static Bakery = "bakery";
    // Add all other building types here...
}

class BuildingUpgradeType {
    static Armsrack = "armsrack"
    static Beehives = "beehives"
    static Bellows = "bellows"
    static ButtonCast = "button cast"
    static Cowshed = "cowshed"
    static Crane = "crane"
    static CraneLift = "crane lift"
    static CuringChamber = "curing chamber"
    static CuttingTable = "cutting table"
    static Fermentory = "fermentory"
    static Grindstone = "grindstone"
    static GroovedBedstone = "grooved bedstone"
    static GuardBooth = "guard booth"
    static HoppingVessels = "hopping vessels"
    static LimeKiln = "lime kiln"
    static LimingPots = "liming pots"
    static MaltMill = "malt mill"
    static MaltSieve = "malt sieve"
    static ManurePit = "manure pit"
    static PloughHouse = "plough house"
    static SkinningTable = "skinning table"
    static SpinningWheel = "spinning wheel"
    static SteelAnvil = "steel anvil"
    static StoneOven = "stone oven"
    static StonecuttersHut = "stonecutter's hut"
    static TileMoulds = "tile moulds"
    static Toolshed = "toolshed"
    static Transmission = "transmission"
    static TreadleLoom = "treadle loom"
    static UpholstryBench = "upholstry bench"
    static Warehouse = "warehouse"
    static Weaponsrack = "weaponsrack"
}

class Item {
    static Alembics = "alembics"
    static Arms = "arms"
    static Axes = "axes"
    static Beer = "beer"
    static Belts = "belts"
    static Blades = "blades"
    static Bread = "bread"
    static Bricks = "bricks"
    static Butter = "butter"
    static Candles = "candles"
    static Carting = "carting"
    static Casks = "casks"
    static Cattle = "cattle"
    static Charcoal = "charcoal"
    static Cheese = "cheese"
    static Clay = "clay"
    static Cloth = "cloth"
    static Coats = "coats"
    static Cog = "cog"
    static Cookware = "cookware"
    static CopperIngots = "copper ingots"
    static CopperOre = "copper ore"
    static CuredFish = "cured fish"
    static CuredMeat = "cured meat"
    static Donations = "donations"
    static Dye = "dye"
    static DyedCloth = "dyed cloth"
    static Firewood = "firewood"
    static Fish = "fish"
    static FlaxFibres = "flax fibres"
    static FlaxPlants = "flax plants"
    static Flour = "flour"
    static Furniture = "furniture"
    static Garments = "garments"
    static Glass = "glass"
    static Glassware = "glassware"
    static GoldBars = "gold bars"
    static GoldOre = "gold ore"
    static Grain = "grain"
    static Grindstones = "grindstones"
    static Ham = "ham"
    static Handcart = "handcart"
    static Harnesses = "harnesses"
    static Herbs = "herbs"
    static Hides = "hides"
    static Honey = "honey"
    static HopBeer = "hop beer"
    static Hulk = "hulk"
    static IronOre = "iron ore"
    static Jewellery = "jewellery"
    static Labour = "labour"
    static LeadBars = "lead bars"
    static LeadOre = "lead ore"
    static Leather = "leather"
    static LightArmor = "light armor"
    static Limestone = "limestone"
    static Lodging = "lodging"
    static Lumber = "lumber"
    static Malt = "malt"
    static Manure = "manure"
    static Meat = "meat"
    static Medicine = "medicine"
    static Milk = "milk"
    static Money = "money"
    static Mouldboards = "mouldboards"
    static Nails = "nails"
    static Nets = "nets"
    static OxPower = "ox power"
    static Pasties = "pasties"
    static Pickaxes = "pickaxes"
    static Pies = "pies"
    static Ploughs = "ploughs"
    static Protection = "protection"
    static Resin = "resin"
    static Rope = "rope"
    static Sails = "sails"
    static Salt = "salt"
    static Scythes = "scythes"
    static SilverBars = "silver bars"
    static SlakedLime = "slaked lime"
    static Snekkja = "snekkja"
    static Spirits = "spirits"
    static SteelIngots = "steel ingots"
    static Stockfish = "stockfish"
    static Swords = "swords"
    static Tar = "tar"
    static Thread = "thread"
    static Tiles = "tiles"
    static Timber = "timber"
    static Tools = "tools"
    static Tumbrel = "tumbrel"
    static Wax = "wax"
    static Wheels = "wheels"
    static Windows = "windows"
    static Wine = "wine"
    static Wool = "wool"
    static WroughtIron = "wrought iron"
    static Yarn = "yarn"
}

class Asset {
    static Cog = "cog";
    static Handcart = "handcart";
    static Money = "money";
    static Snekkja = "snekkja";
    static Tumbrel = "tumbrel";
}

class Climate {
    static Cold = "cold";
    static Warm = "warm";
}

class ItemType {
    static Commodity = "commodity";
    static Service = "service";
    static Special = "special";
}

class Recipe {
    static BakeBread1 = "bake bread 1"
    static BakeBread2 = "bake bread 2"
    static BakePasties1 = "bake pasties 1"
    static BakePasties2 = "bake pasties 2"
    static BakePies1 = "bake pies 1"
    static BindGarments1 = "bind garments 1"
    static BindGarments2 = "bind garments 2"
    static BlowGlassware1 = "blow glassware 1"
    static BlowGlassware2 = "blow glassware 2"
    static BoilDye1 = "boil dye 1"
    static BoilDye2 = "boil dye 2"
    static BorderPatrol1 = "border patrol 1"
    static BorderPatrol2 = "border patrol 2"
    static BreedCattle1a = "breed cattle 1a"
    static BreedCattle1b = "breed cattle 1b"
    static BreedCattle2a = "breed cattle 2a"
    static BreedCattle2b = "breed cattle 2b"
    static BrewBeer1 = "brew beer 1"
    static BrewBeer2 = "brew beer 2"
    static BrewBeer3 = "brew beer 3"
    static BrewBeer4 = "brew beer 4"
    static BrewHopBeer1 = "brew hop beer 1"
    static BrewHopBeer2 = "brew hop beer 2"
    static BuildCog1 = "build cog 1"
    static BuildCog2 = "build cog 2"
    static BuildHandcart1 = "build handcart 1"
    static BuildHandcart2 = "build handcart 2"
    static BuildHulk1 = "build hulk 1"
    static BuildSnekkja1 = "build snekkja 1"
    static BuildSnekkja2 = "build snekkja 2"
    static BuildTumbrel1 = "build tumbrel 1"
    static BurnBricks1 = "burn bricks 1"
    static BurnCharcoal1 = "burn charcoal 1"
    static BurnCharcoal2 = "burn charcoal 2"
    static BurnCharcoal3 = "burn charcoal 3"
    static BurnCharcoal4 = "burn charcoal 4"
    static BurnCookware1 = "burn cookware 1"
    static BurnCookware2 = "burn cookware 2"
    static BurnGlass1 = "burn glass 1"
    static BurnLime1 = "burn lime 1"
    static BurnTar1 = "burn tar 1"
    static BurnTar2 = "burn tar 2"
    static BurnTiles1 = "burn tiles 1"
    static BurnTiles2 = "burn tiles 2"
    static ButcherCattle1a = "butcher cattle 1a"
    static ButcherCattle1b = "butcher cattle 1b"
    static ButcherCattle2 = "butcher cattle 2"
    static Carting1 = "carting 1"
    static Carting2 = "carting 2"
    static ChurnButter1 = "churn butter 1"
    static ChurnButter2 = "churn butter 2"
    static CogOperations = "cog operations"
    static CraftArms1 = "craft arms 1"
    static CraftBelts1 = "craft belts 1"
    static CraftBelts2 = "craft belts 2"
    static CraftBelts3 = "craft belts 3"
    static CraftBelts4 = "craft belts 4"
    static CraftCookware1 = "craft cookware 1"
    static CraftFurniture1 = "craft furniture 1"
    static CraftFurniture2 = "craft furniture 2"
    static CraftFurniture3 = "craft furniture 3"
    static CraftFurniture4 = "craft furniture 4"
    static CraftPloughs1 = "craft ploughs 1"
    static CraftPloughs2 = "craft ploughs 2"
    static CraftPloughs3 = "craft ploughs 3"
    static CraftScythes1 = "craft scythes 1"
    static CraftScythes2 = "craft scythes 2"
    static CraftTools1 = "craft tools 1"
    static CraftTools2 = "craft tools 2"
    static CraftWheels1 = "craft wheels 1"
    static CraftWheels2 = "craft wheels 2"
    static CraftWheels3 = "craft wheels 3"
    static CutBricks1 = "cut bricks 1"
    static CutGrindstones1 = "cut grindstones 1"
    static DeliveryDuty1 = "delivery duty 1"
    static DeliveryDuty2 = "delivery duty 2"
    static DigClay1 = "dig clay 1"
    static DigClay2 = "dig clay 2"
    static DistillSpirits1 = "distill spirits 1"
    static DistillSpirits2 = "distill spirits 2"
    static DryFish1 = "dry fish 1"
    static DryFish2 = "dry fish 2"
    static DryStockfish1 = "dry stockfish 1"
    static DryStockfish2 = "dry stockfish 2"
    static DyeCloth1 = "dye cloth 1"
    static DyeCloth2 = "dye cloth 2"
    static ExtractStone1 = "extract stone 1"
    static ExtractStone2 = "extract stone 2"
    static ExtractStone3 = "extract stone 3"
    static Fishing1 = "fishing 1"
    static Fishing2a = "fishing 2a"
    static Fishing2b = "fishing 2b"
    static Fishing3 = "fishing 3"
    static ForgeArms1 = "forge arms 1"
    static ForgeArms2 = "forge arms 2"
    static ForgeArms2b = "forge arms 2b"
    static ForgeAxes1 = "forge axes 1"
    static ForgeAxes1b = "forge axes 1b"
    static ForgeAxes2 = "forge axes 2"
    static ForgeAxes2b = "forge axes 2b"
    static ForgeBlades1 = "forge blades 1"
    static ForgeBlades1b = "forge blades 1b"
    static ForgeBlades2 = "forge blades 2"
    static ForgeBlades2b = "forge blades 2b"
    static ForgeMouldboards1 = "forge mouldboards 1"
    static ForgePickaxes1 = "forge pickaxes 1"
    static ForgePickaxes1b = "forge pickaxes 1b"
    static ForgePickaxes2 = "forge pickaxes 2"
    static ForgePickaxes2b = "forge pickaxes 2b"
    static ForgeSwords1 = "forge swords 1"
    static ForgeSwords1b = "forge swords 1b"
    static ForgeSwords2 = "forge swords 2"
    static ForgeSwords2b = "forge swords 2b"
    static ForgeTools1 = "forge tools 1"
    static ForgeTools2 = "forge tools 2"
    static ForgeTools3 = "forge tools 3"
    static GatherFirewood1 = "gather firewood 1"
    static GatherFirewood2 = "gather firewood 2"
    static GatherResin1 = "gather resin 1"
    static GatherResin2 = "gather resin 2"
    static GrainPayment = "grain payment"
    static GrowFlax1 = "grow flax 1"
    static GrowFlax2 = "grow flax 2"
    static GrowFlax3 = "grow flax 3"
    static GrowFlax4a = "grow flax 4a"
    static GrowFlax4b = "grow flax 4b"
    static GrowGrain1 = "grow grain 1"
    static GrowGrain2 = "grow grain 2"
    static GrowGrain3a = "grow grain 3a"
    static GrowGrain3b = "grow grain 3b"
    static GrowGrain4a = "grow grain 4a"
    static GrowGrain4b = "grow grain 4b"
    static GrowHerbs1 = "grow herbs 1"
    static GrowHerbs2 = "grow herbs 2"
    static HammerNails1 = "hammer nails 1"
    static HandcartOperations = "handcart operations"
    static HarnessOx1 = "harness ox 1"
    static HarnessOx2a = "harness ox 2a"
    static HarnessOx2b = "harness ox 2b"
    static HarnessOx3a = "harness ox 3a"
    static HarnessOx3b = "harness ox 3b"
    static HarnessOx4a = "harness ox 4a"
    static HarnessOx4b = "harness ox 4b"
    static HerdSheep1 = "herd sheep 1"
    static HerdSheep2 = "herd sheep 2"
    static HoldBanquet1a = "hold banquet 1a"
    static HoldBanquet1b = "hold banquet 1b"
    static HoldBanquet2a = "hold banquet 2a"
    static HoldBanquet2b = "hold banquet 2b"
    static HoldBanquet2c = "hold banquet 2c"
    static HoldBanquet3a = "hold banquet 3a"
    static HoldBanquet3b = "hold banquet 3b"
    static HoldBanquet3c = "hold banquet 3c"
    static HoldBanquet4a = "hold banquet 4a"
    static HoldBanquet4b = "hold banquet 4b"
    static HoldFeast1 = "hold feast 1"
    static HoldFeast2 = "hold feast 2"
    static HoldFeast3 = "hold feast 3"
    static HoldMass1 = "hold mass 1"
    static HoldMass2 = "hold mass 2"
    static HoldMass3 = "hold mass 3"
    static HoldPrayer1 = "hold prayer 1"
    static HoldPrayer2 = "hold prayer 2"
    static HoldPrayer3 = "hold prayer 3"
    static HoldSermon1 = "hold sermon 1"
    static HoldSermon2a = "hold sermon 2a"
    static HoldSermon2b = "hold sermon 2b"
    static HoldSermon3a = "hold sermon 3a"
    static HoldSermon3b = "hold sermon 3b"
    static Hunting1 = "hunting 1"
    static Hunting2 = "hunting 2"
    static Hunting3 = "hunting 3"
    static Hunting4 = "hunting 4"
    static Hunting5 = "hunting 5"
    static KeepBees1 = "keep bees 1"
    static KnightDuty1 = "knight duty 1"
    static KnightDuty2 = "knight duty 2"
    static KnightDuty3 = "knight duty 3"
    static KnightDuty4 = "knight duty 4"
    static KnitGarments1 = "knit garments 1"
    static KnitGarments2 = "knit garments 2"
    static LetCottages1 = "let cottages 1"
    static LetCottages2 = "let cottages 2"
    static Logging1 = "logging 1"
    static Logging2 = "logging 2"
    static Logging3 = "logging 3"
    static Maintain1 = "maintain 1"
    static MakeAlembics1 = "make alembics 1"
    static MakeAlembics2 = "make alembics 2"
    static MakeBricks1 = "make bricks 1"
    static MakeBricks2 = "make bricks 2"
    static MakeCandles1 = "make candles 1"
    static MakeCandles2 = "make candles 2"
    static MakeCasks1 = "make casks 1"
    static MakeCasks2 = "make casks 2"
    static MakeCheese1 = "make cheese 1"
    static MakeCheese2 = "make cheese 2"
    static MakeCheese3 = "make cheese 3"
    static MakeCheese4 = "make cheese 4"
    static MakeCheese5 = "make cheese 5"
    static MakeHarnesses1 = "make harnesses 1"
    static MakeHarnesses2 = "make harnesses 2"
    static MakeHarnesses2b = "make harnesses 2b"
    static MakeJewellery1 = "make jewellery 1"
    static MakeJewellery2 = "make jewellery 2"
    static MakeLeatherArmor1 = "make leather armor 1"
    static MakeMedicine1 = "make medicine 1"
    static MakeMedicine2 = "make medicine 2"
    static MakeNets1 = "make nets 1"
    static MakeNets2 = "make nets 2"
    static MakeNets3 = "make nets 3"
    static MakeRope1 = "make rope 1"
    static MakeWindows1 = "make windows 1"
    static MakeWine1 = "make wine 1"
    static MakeWine2 = "make wine 2"
    static MakeWine3 = "make wine 3"
    static Malting1 = "malting 1"
    static Malting2 = "malting 2"
    static Milling1 = "milling 1"
    static Milling2 = "milling 2"
    static Milling3 = "milling 3"
    static MineCopper1 = "mine copper 1"
    static MineCopper2 = "mine copper 2"
    static MineCopper3 = "mine copper 3"
    static MineCopper4 = "mine copper 4"
    static MineGold1 = "mine gold 1"
    static MineGold1b = "mine gold 1b"
    static MineGold2 = "mine gold 2"
    static MineGold2b = "mine gold 2b"
    static MineIron1 = "mine iron 1"
    static MineIron2 = "mine iron 2"
    static MineIron3 = "mine iron 3"
    static MineIron4 = "mine iron 4"
    static MineLead1 = "mine lead 1"
    static MineLead2 = "mine lead 2"
    static MineLead2b = "mine lead 2b"
    static MineLead3 = "mine lead 3"
    static MineLead3b = "mine lead 3b"
    static MineSalt1 = "mine salt 1"
    static MineSalt2 = "mine salt 2"
    static MineSalt3 = "mine salt 3"
    static MintCopperCoins1 = "mint copper coins 1"
    static MintCopperCoins2 = "mint copper coins 2"
    static MintGoldCoins1 = "mint gold coins 1"
    static MintGoldCoins2 = "mint gold coins 2"
    static MintSilverCoins1 = "mint silver coins 1"
    static MintSilverCoins2 = "mint silver coins 2"
    static Patrol1 = "patrol 1"
    static Patrol2a = "patrol 2a"
    static Patrol2b = "patrol 2b"
    static Patrol3a = "patrol 3a"
    static Patrol3b = "patrol 3b"
    static RefineSteel1 = "refine steel 1"
    static RefineSteel1b = "refine steel 1b"
    static RefineSteel2 = "refine steel 2"
    static RefineSteel2b = "refine steel 2b"
    static Retting1 = "retting 1"
    static Retting2 = "retting 2"
    static SaltingFish1 = "salting fish 1"
    static SaltingFish2 = "salting fish 2"
    static SaltingMeat1 = "salting meat 1"
    static SaltingMeat2 = "salting meat 2"
    static Sawing1 = "sawing 1"
    static Sawing2 = "sawing 2"
    static Sawing3 = "sawing 3"
    static Sawing4 = "sawing 4"
    static Service1 = "service 1"
    static Service2 = "service 2"
    static Service3 = "service 3"
    static Service4 = "service 4"
    static SewCoats1a = "sew coats 1a"
    static SewCoats1b = "sew coats 1b"
    static SewCoats2a = "sew coats 2a"
    static SewCoats2b = "sew coats 2b"
    static SewGambeson1 = "sew gambeson 1"
    static SewGarments1 = "sew garments 1"
    static SewGarments2a = "sew garments 2a"
    static SewGarments2b = "sew garments 2b"
    static SewGarments3a = "sew garments 3a"
    static SewGarments3b = "sew garments 3b"
    static SewGarments4a = "sew garments 4a"
    static SewGarments4b = "sew garments 4b"
    static SewSails1 = "sew sails 1"
    static SewSails2 = "sew sails 2"
    static ShearSheep1 = "shear sheep 1"
    static ShearSheep2 = "shear sheep 2"
    static ShearSheep3 = "shear sheep 3"
    static SmeltCopper1 = "smelt copper 1"
    static SmeltCopper2 = "smelt copper 2"
    static SmeltGold1 = "smelt gold 1"
    static SmeltGold2 = "smelt gold 2"
    static SmeltIron1 = "smelt iron 1"
    static SmeltIron2 = "smelt iron 2"
    static SmeltLead1 = "smelt lead 1"
    static SmeltLead2a = "smelt lead 2a"
    static SmeltLead2b = "smelt lead 2b"
    static SmokingFish1 = "smoking fish 1"
    static SmokingFish2 = "smoking fish 2"
    static SmokingHam1 = "smoking ham 1"
    static SmokingHam2 = "smoking ham 2"
    static SmokingMeat1 = "smoking meat 1"
    static SmokingMeat2 = "smoking meat 2"
    static SnekkjaOperations = "snekkja operations"
    static SpinThread1 = "spin thread 1"
    static SpinThread2 = "spin thread 2"
    static SpinYarn1 = "spin yarn 1"
    static SpinYarn2 = "spin yarn 2"
    static SplitTimber1 = "split timber 1"
    static SplitTimber2 = "split timber 2"
    static TanHides1 = "tan hides 1"
    static TanHides2 = "tan hides 2"
    static TrapFish1 = "trap fish 1"
    static TrapFish2 = "trap fish 2"
    static TrapFish3 = "trap fish 3"
    static Trapping1 = "trapping 1"
    static Trapping2 = "trapping 2"
    static TumbrelOperations = "tumbrel operations"
    static WeaveCloth1 = "weave cloth 1"
    static WeaveCloth2a = "weave cloth 2a"
    static WeaveCloth2b = "weave cloth 2b"
    static WeaveCloth3a = "weave cloth 3a"
    static WeaveCloth3b = "weave cloth 3b"
    static WeaveCloth4a = "weave cloth 4a"
    static WeaveCloth4b = "weave cloth 4b"
    static YokeOx1a = "yoke ox 1a"
    static YokeOx1b = "yoke ox 1b"
    static YokeOx2a = "yoke ox 2a"
    static YokeOx2b = "yoke ox 2b"
    static YokeOx3 = "yoke ox 3"
    static YokeOx3manure = "yoke ox 3 (manure)"
}

class Skill {
    static Crafting = "crafting";
    static Forging = "forging";
    static Maritime = "maritime"
    static Mercantile = "mercantile"
    static Nutrition = "nutrition"
    static Textile = "textile"
    static Weaponry = "weaponry"
}

class SkillLevel {
    static Novice = 99;
    static Worker = 599;
    static Journeyman = 2699;
    static Master = 9999;
}

class TransportType {
    static Cog = "cog";
    static Handcart = "handcart";
    static Hulk = "hulk";
    static Snekkja = "snekkja";
    static Tumbrel = "tumbrel";
}

module.exports = {
    Location,
    Inventory,
    InventoryAccount,
    InventoryAccountAsset,
    DeliveryCost,
    InventoryManager,
    Producer,
    InventoryFlow,
    Operation,
    Path,
    ItemTrade,
    ItemTradeResult,
    ItemTradeSettlement,
    BuildingType,
    BuildingUpgradeType,
    Item,
    Asset,
    Climate,
    ItemType,
    Recipe,
    Skill,
    SkillLevel,
    TransportType
};