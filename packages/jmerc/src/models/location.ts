import { LocationSchema, LocationType } from '../schema/LocationSchema';

export class Location implements LocationType {
    constructor(data: LocationType) {
        Object.assign(this, data);
    }

    static validate(data: unknown): Location {
        try {
            return new Location(LocationSchema.parse(data));
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}