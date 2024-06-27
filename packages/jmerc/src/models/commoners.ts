import { BaseModel } from './baseModel';
import { TownDemandCategory, TownDemand } from './town';
import { CommonersSchema, CommonersType } from "../schema/CommonersSchema";

export class Commoners extends BaseModel implements CommonersType {
    static schema = CommonersSchema;
    account_id: string;
    count: number;
    migration: number;
    sustenance: TownDemandCategory[];

    get demands(): TownDemand[] {
        return this.sustenance.flatMap(category => category.products);
    }
}