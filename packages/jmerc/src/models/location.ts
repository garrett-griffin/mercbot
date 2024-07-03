import { LocationSchema, LocationType } from '../schema';
import { BaseModel } from "./baseModel";
import {ItemEnumType} from "../schema/enums";
import {ItemTradeSettlement} from "./itemTrade";

/**
 * Represents a geographical location with coordinates.
 */
export class Location extends BaseModel implements LocationType {
    static schema = LocationSchema;

    x: number;
    y: number;

    /**
     * Creates an instance of Location.
     * @param data - The data to initialize the location.
     */
    constructor(data: LocationType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
