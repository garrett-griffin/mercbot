import { BaseModel } from './BaseModel';
import { MarketSchema, MarketType } from '../schema/MarketSchema';
import { MarketItemDetailsSchema, MarketItemDetailsType } from '../schema/MarketItemDetailsSchema';
import { MarketItemSchema, MarketItemType } from "../schema/MarketItemSchema";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";

export class Market extends BaseModel implements MarketType {
    static schema = MarketSchema;

    markets: Record<ItemEnumType, MarketItem>;
    ts: number;
}
export class MarketItem extends BaseModel implements MarketItemType {
    static schema = MarketItemSchema;
}

export class MarketItemDetails extends BaseModel implements MarketItemDetailsType {
    static schema = MarketItemDetailsSchema;
}