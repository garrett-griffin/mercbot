const { Expose, Type, plainToClass } = require('class-transformer');
const {
    DeliveryCost,
    Location,
    Producer,
    Inventory,
    BuildingType,
    BuildingUpgradeType,
    InventoryFlow,
    Operation
} = require('./common');

class Building {
    @Expose() capacity;
    @Type(() => BuildingConstruction) @Expose() construction;
    @Type(() => DeliveryCost) @Expose() delivery_cost;
    @Expose() id;
    @Type(() => Location) @Expose() land;
    @Expose() name;
    @Expose() owner_id;
    @Type(() => Producer) @Expose() producer;
    @Expose() provider_id;
    @Expose() size;
    @Type(() => BuildingStorage) @Expose() storage;
    @Type(() => Location) @Expose() sublocation;
    @Expose() town_id;
    @Type(() => BuildingType) @Expose() type;
    @Type(() => BuildingUpgradeType) @Expose() upgrades;

    static modelValidate(data) {
        return plainToClass(Building, data);
    }
}

class BuildingConstruction {
    @Type(() => Inventory) @Expose() inventory;
    @Expose() progress;
    @Expose() reference;
    @Expose() stage;
    @Expose() time;
    @Type(() => BuildingUpgradeType) @Expose() upgrade_type;
}

class BuildingStorage {
    @Type(() => Inventory) @Expose() inventory;
    @Expose() operations;
    @Expose() reference;
}

class BuildingOperation {
    @Type(() => InventoryFlow) @Expose() total_flow;
    @Type(() => Operation) @Expose() operations;
}

module.exports = { Building, BuildingConstruction, BuildingStorage, BuildingOperation };
