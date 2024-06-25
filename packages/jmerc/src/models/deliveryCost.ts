import { BaseModel } from './BaseModel';
import { DeliveryCostSchema, DeliveryCostType } from '../schema/DeliveryCostSchema';

export class DeliveryCost extends BaseModel implements DeliveryCostType {
    static schema = DeliveryCostSchema;
}