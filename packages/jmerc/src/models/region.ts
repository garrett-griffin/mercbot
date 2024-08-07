import { BaseModel } from './baseModel';
import { RegionSchema, RegionType } from '../schema';
import { Location } from "./location";

/**
 * Represents a geographical region with associated attributes.
 */
export class Region extends BaseModel implements RegionType {
    static schema = RegionSchema;

    id: number;
    name: string;
    description: string | null;
    center: Location | null;
    size: number | null;

    /**
     * Creates an instance of Region.
     * @param data - The data to initialize the region.
     */
    constructor(data: RegionType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.center = this.center ? Location.build(this.center) : null;
    }
}
