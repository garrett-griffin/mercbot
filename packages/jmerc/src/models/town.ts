import { BaseModel } from './baseModel';
import { TownSchema, TownType } from '../schema';
import { TownDataSchema, TownDataType } from '../schema';
import { TownDemandCategorySchema, TownDemandCategoryType } from "../schema";
import { TownDemandSchema, TownDemandType } from "../schema";
import { Location } from './location';
import { Commoners } from "./commoners";
import { TownGovernmentType } from "../schema";
import { TownChurchType } from "../schema";
import { TownCultureType } from "../schema";
import { Tile } from "./tile";
import { ItemEnumType } from "../schema/enums";
import {Ingredient} from "./recipe";

/**
 * Represents a town with associated attributes.
 */
export class Town extends BaseModel implements TownType {
    static schema = TownSchema;

    id: number;
    name: string;
    location: Location;
    region: number;
    capital: boolean;

    /**
     * Creates an instance of Town.
     * @param data - The data to initialize the town.
     */
    constructor(data: TownType) {
        super(data);
    }
}

/**
 * Represents detailed information about a town.
 */
export class TownData extends BaseModel implements TownDataType {
    static schema = TownDataSchema;

    id: string;
    name: string;
    location: Location;
    region: number;
    center_ids: number[];
    domain: Record<string, Tile>;
    household_ids: string[];
    commoners: Commoners;
    government: TownGovernmentType;
    church: TownChurchType;
    navigation_zones: Record<number, number>;
    culture: TownCultureType;

    /**
     * Creates an instance of TownData.
     * @param data - The data to initialize the town data.
     */
    constructor(data: TownDataType) {
        super(data);
    }
}

/**
 * Represents a demand for a product in a town.
 */
export class TownDemand extends BaseModel implements TownDemandType {
    static schema = TownDemandSchema;

    product: ItemEnumType;
    bonus: number;
    desire: number;
    request: number;
    result: number;

    /**
     * Creates an instance of TownDemand.
     * @param data - The data to initialize the town demand.
     */
    constructor(data: TownDemandType) {
        super(data);
    }
}

/**
 * Represents a category of demands in a town.
 */
export class TownDemandCategory extends BaseModel implements TownDemandCategoryType {
    static schema = TownDemandCategorySchema;

    name: string;
    products: TownDemand[];

    /**
     * Creates an instance of TownDemandCategory.
     * @param data - The data to initialize the town demand category.
     */
    constructor(data: TownDemandCategoryType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.products = this.products.map(product => TownDemand.build(product));
    }
}
