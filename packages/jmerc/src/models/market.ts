import { BaseModel } from './baseModel';
import { MarketSchema, MarketType } from '../schema/MarketSchema';
import { MarketItemDetailsSchema, MarketItemDetailsType } from '../schema/MarketItemDetailsSchema';
import { MarketItemSchema, MarketItemType } from "../schema/MarketItemSchema";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {ItemOrderType} from "../schema/ItemOrderSchema";

export class Market extends BaseModel implements MarketType {
    static schema = MarketSchema;

    markets: Record<ItemEnumType, MarketItem>;
    _ts: number;
}
export class    MarketItem extends BaseModel implements MarketItemType {
    static schema = MarketItemSchema;

    price: number | null;
    last_price: number | null;
    average_price: number | null;
    moving_average: number | null;
    highest_bid: number | null;
    lowest_ask: number | null;
    volume: number;
    volume_prev_12: number | null;
    bid_volume_10: number | null;
    ask_volume_10: number | null;
}

export class MarketItemDetails extends BaseModel implements MarketItemDetailsType {
    static schema = MarketItemDetailsSchema;

    id: number;
    product: ItemEnumType;
    asset: ItemEnumType;
    currency: string;
    bids: ItemOrderType[];
    asks: ItemOrderType[];
    data: MarketItem;
}