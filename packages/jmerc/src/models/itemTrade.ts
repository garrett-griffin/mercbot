import { BaseModel } from './BaseModel';
import { ItemTradeSchema, ItemTradeType } from '../schema/ItemTradeSchema';
import {ItemTradeResultSchema, ItemTradeResultType} from "../schema/ItemTradeResultSchema";
import {ItemTradeSettlementSchema, ItemTradeSettlementType} from "../schema/ItemTradeSettlementSchema";

export class ItemTrade extends BaseModel implements ItemTradeType {
    direction: string;
    expectedBalance: number;
    operation: string;
    price: number;
    volume: number;

    constructor(
        direction: string,
        expectedBalance: number,
        operation: string,
        price: number,
        volume: number
    ) {
        super(); // Call the parent constructor
        this.direction = direction;
        this.expectedBalance = expectedBalance;
        this.operation = operation;
        this.price = price;
        this.volume = volume;
    }

    static schema = ItemTradeSchema;
}

export class ItemTradeResult extends BaseModel implements ItemTradeResultType {
    static schema = ItemTradeResultSchema;

    settlements: ItemTradeSettlement[] | null;
    order_id: number | null;
    embedded: Record<string, any>;
}

export class ItemTradeSettlement extends BaseModel implements ItemTradeSettlementType {
    static schema = ItemTradeSettlementSchema;
}