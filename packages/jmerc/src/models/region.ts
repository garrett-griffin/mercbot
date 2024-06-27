import { BaseModel } from './baseModel';
import { RegionSchema, RegionType } from '../schema/RegionSchema';
import { Location} from "./location";

export class Region extends BaseModel implements RegionType {
    static schema = RegionSchema;

    id: number;
    name: string;
    description: string | null;
    center: Location | null;
    size: number | null;
}