import { BaseModel } from './BaseModel';
import { TownSchema, TownType } from '../schema/TownSchema';
import { TownDataSchema, TownDataType } from '../schema/TownDataSchema';
import {TownDemandCategorySchema, TownDemandCategoryType} from "../schema/TownDemandCategorySchema";
import {TownDemandSchema, TownDemandType} from "../schema/TownDemandSchema";
import { Location } from './location'
import {Commoners} from "./commoners";
import {TownGovernmentType} from "../schema/TownGovernmentSchema";
import {TownChurchType} from "../schema/TownChurchSchema";
import {TownCultureType} from "../schema/TownCultureSchema";
import {Tile} from "./tile";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";

export class Town extends BaseModel implements TownType {
    static schema = TownSchema;

    id: number;
    name: string;
    location: Location;
    region: number;
    capital: boolean;
}

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
}

export class TownDemand extends BaseModel implements TownDemandType {
    static schema = TownDemandSchema;

    product: ItemEnumType;
    bonus: number;
    desire: number;
    request: number;
    result: number;
}

export class TownDemandCategory extends BaseModel implements TownDemandCategoryType {
    static schema = TownDemandCategorySchema;
    name: string;
    products: TownDemand[];
}