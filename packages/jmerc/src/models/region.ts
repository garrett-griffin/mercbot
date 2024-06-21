import { RegionSchema } from '../schema/RegionSchema';
import { LocationSchema, LocationType } from '../schema/LocationSchema';

export class Region {
    id: number;
    name: string;
    description: string | null;
    center: LocationType | null;
    size: number | null;

    static validate(data: unknown): Region {
        try {
            return RegionSchema.parse(data);
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}

export class Location {
    x: number;
    y: number;

    static validate(data: unknown): Location {
        try {
            return LocationSchema.parse(data);
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}