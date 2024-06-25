import { BaseModel } from './BaseModel';
import { MarketSchema, MarketType } from '../schema/MarketSchema';
import { MarketItemDetailsSchema, MarketItemDetailsType } from '../schema/MarketItemDetailsSchema';

export class Market extends BaseModel implements MarketType {
    static schema = MarketSchema;
}

export class MarketItemDetails extends BaseModel implements MarketItemDetailsType {
    static schema = MarketItemDetailsSchema;
}