import { BaseModel } from './baseModel';
import { DeliveryCostSchema, DeliveryCostType } from '../schema/DeliveryCostSchema';

export class DeliveryCost extends BaseModel implements DeliveryCostType {
    static schema = DeliveryCostSchema;

    land_distance: number;
    ferry_fee: number | null;
}