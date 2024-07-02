import { BaseModel } from './baseModel';
import { ProducerSchema, ProducerType } from '../schema';
import { Inventory } from './inventory';
import { Operation } from './operation';
import { RecipeEnumType } from "../schema/enums";

/**
 * Represents a producer with associated attributes.
 */
export class Producer extends BaseModel implements ProducerType {
    static schema = ProducerSchema;

    inventory: Inventory;
    operation: Operation;
    limited: boolean;
    manager: string;
    previous_operation: Operation;
    provider_id: number | null;
    recipe: RecipeEnumType;
    reference: string;
    target: number | null;

    /**
     * Creates an instance of Producer.
     * @param data - The data to initialize the producer.
     */
    constructor(data: ProducerType) {
        super(data);
    }
}
