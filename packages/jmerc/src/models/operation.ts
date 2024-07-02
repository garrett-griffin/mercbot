import { BaseModel } from './baseModel';
import { OperationSchema, OperationType } from '../schema';
import { RecipeEnumType } from '../schema/enums';
import { DeliveryCost } from './deliveryCost';
import { Flow } from './flow';
import { ItemEnumType } from "../schema/enums";

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
