import { LocationSchema, LocationType } from '../schema/LocationSchema';
import {BaseModel} from "./baseModel";

export class Location extends BaseModel implements LocationType {
    static schema = LocationSchema;

    x: number;
    y: number;
}