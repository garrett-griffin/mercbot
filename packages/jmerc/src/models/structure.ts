import { BaseModel } from './BaseModel';
import { StructureSchema, StructureType } from '../schema/StructureSchema';

export class Structure extends BaseModel implements StructureType {
    static schema = StructureSchema;
}