import { BaseModel } from './baseModel';
import { StructureSchema, StructureType } from '../schema';
import { BuildingTypeEnumType } from "../schema/enums";
import {Ingredient} from "./recipe";

/**
 * Represents a structure with associated attributes.
 */
export class Structure extends BaseModel implements StructureType {
    static schema = StructureSchema;

    id: string;
    type: BuildingTypeEnumType;
    tags: string[] | null;

    /**
     * Creates an instance of Structure.
     * @param data - The data to initialize the structure.
     */
    constructor(data: StructureType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
