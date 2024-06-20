const { Expose, Type, plainToClass } = require('class-transformer');
const {Location, Tile} = require("./common");

class Town {
    @Expose() id;
    @Expose() name;
    @Type(() => Location) @Expose() location;
    @Expose() region;
    @Expose() capital;
    @Expose() center_ids;
    @Expose() outposts;
    @Type(() => Tile) @Expose() domain;
    @Expose() household_ids;
    @Expose() commoners;
    @Expose() government;
    @Expose() church;
    @Expose() navigation_zones;
    @Expose() special_markets;
    @Expose() culture;

    @Expose()
    set domain(domainObject) {
        this._domain = Object.entries(domainObject).map(([id, tileData]) => {
            let tile = plainToClass(Tile, { id, ...tileData });
            tile.id = id;
            return tile;
        });
    }

    static modelValidate(data) {
        return plainToClass(Town, data);
    }
}

class TownData {
    @Expose() id;
    @Expose() population;
    @Expose() economy;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(TownData, data);
    }
}

class TownMarket {
    @Expose() id;
    @Expose() items;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(TownMarket, data);
    }
}

class TownMarketItemDetails {
    @Expose() id;
    @Expose() name;
    @Expose() price;
    @Expose() volume;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(TownMarketItemDetails, data);
    }
}

module.exports = { Town, TownData, TownMarket, TownMarketItemDetails };
