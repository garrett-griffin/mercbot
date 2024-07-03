import { BaseModel } from './baseModel';
import { FlowSchema, FlowType } from '../schema';

/**
 * Represents the flow of resources with associated attributes.
 */
export class Flow extends BaseModel implements FlowType {
    static schema = FlowSchema;

    consumption: number;
    expiration: number;
    export: number | null;
    imported: number | null;
    production: number;
    production_cost: number;
    purchase: number | null;
    purchase_cost: number;
    resident: number | null;
    sale: number | null;
    sale_value: number;
    shortfall: number;

    /**
     * Creates an instance of Flow.
     * @param data - The data to initialize the flow.
     */
    constructor(data: FlowType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
