import { RegionSchema, RegionType } from '../schema/RegionSchema';

export class Region implements RegionType {
    constructor(data: RegionType) {
        Object.assign(this, data);
    }

    static validate(data: unknown): Region {
        try {
            return new Region(RegionSchema.parse(data));
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}