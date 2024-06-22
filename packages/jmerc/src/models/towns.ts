import { BaseModel } from './BaseModel';
import { TownSchema, TownType } from '../schema/TownSchema';
import { TownDataSchema, TownDataType } from '../schema/TownDataSchema';
import { MarketSchema, MarketType } from '../schema/MarketSchema';
import { MarketItemDetailsSchema, MarketItemDetailsType } from '../schema/MarketItemDetailsSchema';

export class Town extends BaseModel implements TownType {
    static schema = TownSchema;
}

export class TownData extends BaseModel implements TownDataType {
    static schema = TownDataSchema;
}

export class Market extends BaseModel implements MarketType {
    static schema = MarketSchema;
}

export class MarketItemDetails extends BaseModel implements MarketItemDetailsType {
    static schema = MarketItemDetailsSchema;
}