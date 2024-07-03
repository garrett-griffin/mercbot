import { BaseModel } from './baseModel';
import { MarketSchema, MarketType } from '../schema';
import { MarketItemDetailsSchema, MarketItemDetailsType } from '../schema';
import { MarketItemSchema, MarketItemType } from "../schema";
import { ItemEnumType } from "../schema/enums";
import { ItemOrderType } from "../schema";
import {AccountAsset} from "./account";

/**
 * Represents the market with associated attributes.
 */
export class Market extends BaseModel implements MarketType {
    static schema = MarketSchema;

    markets: Record<ItemEnumType, MarketItem>;
    _ts: number;

    /**
     * Creates an instance of Market.
     * @param data - The data to initialize the market.
     */
    constructor(data: MarketType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();

        // Ensure each item in `assets` is a proper instance of AccountAsset
        Object.keys(this.markets).forEach((key: ItemEnumType) => {
            const market = this.markets[key];
            this.markets[key] = new MarketItem(market);
        });
    }
}

/**
 * Represents a market item with associated attributes.
 */
export class MarketItem extends BaseModel implements MarketItemType {
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

    /**
     * Creates an instance of MarketItem.
     * @param data - The data to initialize the market item.
     */
    constructor(data: MarketItemType) {
        super(data);
    }
}

/**
 * Represents detailed information about a market item.
 */
export class MarketItemDetails extends BaseModel implements MarketItemDetailsType {
    static schema = MarketItemDetailsSchema;

    id: number;
    product: ItemEnumType;
    asset: ItemEnumType;
    currency: string;
    bids: ItemOrderType[];
    asks: ItemOrderType[];
    data: MarketItem;

    /**
     * Creates an instance of MarketItemDetails.
     * @param data - The data to initialize the market item details.
     */
    constructor(data: MarketItemDetailsType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.data = new MarketItem(this.data);
    }
}
