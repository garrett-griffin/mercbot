import { BaseModel } from './BaseModel';
import { ProducerSchema, ProducerType } from '../schema/ProducerSchema';
import { Inventory } from './inventory';
import { Operation } from './operation';
import { Recipe } from './recipe';

export class Producer extends BaseModel implements ProducerType {
    static schema = ProducerSchema;

    inventory: Inventory;
    operation: Operation;
}