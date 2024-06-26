import { LocationSchema, LocationType } from '../schema/LocationSchema';
import {BaseModel} from "./BaseModel";

export class Location extends BaseModel implements LocationType {
    static schema = LocationSchema;

    x: number;
    y: number;
}