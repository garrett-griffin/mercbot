import { BaseModel } from './BaseModel';
import { FlowSchema, FlowType } from '../schema/FlowSchema';

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

    constructor(data: FlowType) {
        super();
        this.consumption = data.consumption;
        this.expiration = data.expiration;
        this.export = data.export;
        this.imported = data.imported;
        this.production = data.production;
        this.production_cost = data.production_cost;
        this.purchase = data.purchase;
        this.purchase_cost = data.purchase_cost;
        this.resident = data.resident;
        this.sale = data.sale;
        this.sale_value = data.sale_value;
        this.shortfall = data.shortfall;
    }
}