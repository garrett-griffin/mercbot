import { BaseModel } from './BaseModel';
import { RegionSchema, RegionType } from '../schema/RegionSchema';

export class Region extends BaseModel implements RegionType {
    static schema = RegionSchema;
}