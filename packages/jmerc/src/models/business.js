const { Expose, Type, plainToClass } = require('class-transformer');
const { Asset, BuildingType } = require('./common');

class Business {
    @Type(() => BusinessAccount) @Expose() account;
    @Expose() account_id;
    @Expose() building_ids;
    @Type(() => BusinessBuilding) @Expose() buildings;
    @Expose() contract_ids;
    @Expose() id;
    @Expose() name;
    @Expose() owner_id;
    @Expose() transport_ids;

    static modelValidate(data) {
        return plainToClass(Business, data);
    }
}

class BusinessAccount {
    @Expose() id;
    @Expose() name;
    @Expose() owner_id;
    @Type(() => BusinessAccountAsset) @Expose() assets;
}

class BusinessAccountAsset {
    @Expose() balance;
    @Expose() reserved;
    @Expose() unit_cost;
}

class BusinessBuilding {
    @Expose() id;
    @Type(() => BuildingType) @Expose() type;
}

module.exports = { Business, BusinessAccount, BusinessAccountAsset, BusinessBuilding };
