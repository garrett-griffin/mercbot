import { BaseModel } from './BaseModel';
import { OperationSchema, OperationType } from '../schema/OperationSchema';
import { RecipeEnumType } from '../schema/enums/RecipeEnumSchema';
import { DeliveryCost } from './deliveryCost';
import { Flow } from './flow';
import { ItemEnumType } from "../schema/enums/ItemEnumSchema";

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

    get surplus(): number {
        return (this.production || 0) - (this.target || 0);
    }

    get shortfall(): number {
        return (this.target || 0) - (this.production || 0);
    }
}