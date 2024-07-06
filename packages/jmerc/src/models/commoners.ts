import { BaseModel } from './baseModel';
import { TownDemandCategory, TownDemand } from './town';
import { CommonersSchema, CommonersType } from '../schema';
import {Building} from "./building";

/**
 * Represents the commoners in a town with their associated attributes.
 */
export class Commoners extends BaseModel implements CommonersType {
    static schema = CommonersSchema;
    account_id: string;
    count: number;
    migration: number;
    sustenance: TownDemandCategory[];

    /**
     * Creates an instance of Commoners.
     * @param data - The data to initialize the commoners.
     */
    constructor(data: CommonersType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();

        if(this.sustenance !== null) {
            for(let i=0; i<this.sustenance.length; i++) {
                this.sustenance[i] = TownDemandCategory.build(this.sustenance[i]);
            }
        }
    }

    /**
     * Returns the demands of the commoners by flattening the sustenance categories.
     */
    get demands(): TownDemand[] {
        return this.sustenance.flatMap(category => category.products);
    }
}
