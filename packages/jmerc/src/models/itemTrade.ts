import { BaseModel } from './baseModel';
import { ItemTradeSchema, ItemTradeType } from '../schema';
import { ItemTradeResultSchema, ItemTradeResultType } from "../schema";
import { ItemTradeSettlementSchema, ItemTradeSettlementType } from "../schema";

/**
 * Represents an item trade with associated attributes.
 */
export class ItemTrade extends BaseModel implements ItemTradeType {
    static schema = ItemTradeSchema;

    direction: string;
    expected_balance: number;
    operation: string;
    price: number;
    volume: number;

    /**
     * Creates an instance of ItemTrade.
     * @param data - The data to initialize the item trade.
     */
    constructor(data: ItemTradeType) {
        super(data);
    }
}

/**
 * Represents the result of an item trade with associated attributes.
 */
export class ItemTradeResult extends BaseModel implements ItemTradeResultType {
    static schema = ItemTradeResultSchema;

    settlements: ItemTradeSettlement[] | null;
    order_id: number | null;
    embedded: Record<string, any>;

    /**
     * Creates an instance of ItemTradeResult.
     * @param data - The data to initialize the item trade result.
     */
    constructor(data: ItemTradeResultType) {
        super(data);
    }
}

/**
 * Represents the settlement details of an item trade with associated attributes.
 */
export class ItemTradeSettlement extends BaseModel implements ItemTradeSettlementType {
    static schema = ItemTradeSettlementSchema;

    volume: number;
    price: number;

    /**
     * Creates an instance of ItemTradeSettlement.
     * @param data - The data to initialize the item trade settlement.
     */
    constructor(data: ItemTradeSettlementType) {
        super(data);
    }
}
