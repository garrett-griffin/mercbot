import { BaseModel } from './baseModel';
import { DeliveryCostSchema, DeliveryCostType } from '../schema';

/**
 * Represents the delivery cost with associated attributes.
 */
export class DeliveryCost extends BaseModel implements DeliveryCostType {
    static schema = DeliveryCostSchema;

    land_distance: number;
    ferry_fee: number | null;

    /**
     * Creates an instance of DeliveryCost.
     * @param data - The data to initialize the delivery cost.
     */
    constructor(data: DeliveryCostType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
