import { BaseModel } from './BaseModel';
import { TownSchema, TownType } from '../schema/TownSchema';
import { TownDataSchema, TownDataType } from '../schema/TownDataSchema';
import {TownDemandCategorySchema, TownDemandCategoryType} from "../schema/TownDemandCategorySchema";
import {TownDemandSchema, TownDemandType} from "../schema/TownDemandSchema";

export class Town extends BaseModel implements TownType {
    static schema = TownSchema;
}

export class TownData extends BaseModel implements TownDataType {
    static schema = TownDataSchema;
}

export class TownDemand extends BaseModel implements TownDemandType {
    static schema = TownDemandSchema;
}

export class TownDemandCategory extends BaseModel implements TownDemandCategoryType {
    static schema = TownDemandCategorySchema;
    products: TownDemand[];
}