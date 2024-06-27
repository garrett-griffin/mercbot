import { BaseModel } from './baseModel';
import { StructureSchema, StructureType } from '../schema/StructureSchema';
import {BuildingTypeEnumType} from "../schema/enums/BuildingTypeEnumSchema";

export class Structure extends BaseModel implements StructureType {
    static schema = StructureSchema;

    id: string;
    type: BuildingTypeEnumType;
    tags: string[] | null;
}