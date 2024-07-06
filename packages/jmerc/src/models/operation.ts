import { BaseModel } from './baseModel';
import { OperationSchema, OperationType } from '../schema';
import { RecipeEnumType } from '../schema/enums';
import { DeliveryCost } from './deliveryCost';
import { Flow } from './flow';
import { ItemEnumType } from "../schema/enums";
import {MarketItem} from "./market";
import {ItemTradeSettlement} from "./itemTrade";
import {AccountAsset} from "./account";
import {Manager} from "./manager";

/**
 * Represents an operation with associated attributes and calculations.
 */
export class Operation extends BaseModel implements OperationType {
    static schema = OperationSchema;

    target: number | null;
    production: number | null;
    provision: number | null;
    reference: string | null;
    recipe: RecipeEnumType | null;
    volume: number | null;
    tax_rate: number | null;
    tax: number | null;
    delivery_cost: DeliveryCost | null;
    flows: Record<ItemEnumType, Flow> | null;

    /**
     * Creates an instance of Operation.
     * @param data - The data to initialize the operation.
     */
    constructor(data: OperationType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.delivery_cost = this.delivery_cost ? DeliveryCost.build(this.delivery_cost) : null;
        if(this.flows) {
            // Ensure each item in `assets` is a proper instance of AccountAsset
            Object.keys(this.flows).forEach((key: ItemEnumType) => {
                const flow = this.flows[key];
                this.flows[key] = Flow.build(flow);
            });
        }
    }

    get flowsMap(): Map<ItemEnumType, Flow> {
        return new Map(Object.entries(this.flows).map(([key, value]) => [key as ItemEnumType, value]));
    }

    /**
     * Calculates the surplus of the operation.
     */
    get surplus(): number {
        return (this.production || 0) - (this.target || 0);
    }

    /**
     * Calculates the shortfall of the operation.
     */
    get shortfall(): number {
        return (this.target || 0) - (this.production || 0);
    }
}
