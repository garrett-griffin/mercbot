import { BaseModel } from './baseModel';
import { ProducerSchema, ProducerType } from '../schema/ProducerSchema';
import { Inventory } from './inventory';
import { Operation } from './operation';
import {RecipeEnumType} from "../schema/enums/RecipeEnumSchema";

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
}