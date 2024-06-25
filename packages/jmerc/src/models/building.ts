import { BaseModel } from './BaseModel';
import { BuildingSchema, BuildingType } from '../schema/BuildingSchema';
import { BuildingConstructionSchema, BuildingConstructionType } from '../schema/BuildingConstructionSchema';
import { BuildingStorageSchema, BuildingStorageType } from '../schema/BuildingStorageSchema';
import { BuildingOperationSchema, BuildingOperationType } from '../schema/BuildingOperationSchema';

export class Building extends BaseModel implements BuildingType {
    static schema = BuildingSchema;
}

export class BuildingConstruction extends BaseModel implements BuildingConstructionType {
    static schema = BuildingConstructionSchema;
}

export class BuildingStorage extends BaseModel implements BuildingStorageType {
    static schema = BuildingStorageSchema;
}

export class BuildingOperation extends BaseModel implements BuildingOperationType {
    static schema = BuildingOperationSchema;
}