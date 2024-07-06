import { BaseModel } from './baseModel';
import { ProducerSchema, ProducerType } from '../schema';
import { Inventory } from './inventory';
import { Operation } from './operation';
import { RecipeEnumType } from "../schema/enums";
import {NotificationSettings} from "./player";

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

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.inventory = Inventory.build(this.inventory);
        this.operation = Operation.build(this.operation);
        this.previous_operation = Operation.build(this.previous_operation);
    }
}
