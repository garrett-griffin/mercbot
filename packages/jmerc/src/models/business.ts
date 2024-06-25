import { BaseModel } from './BaseModel';
import { BusinessSchema, BusinessType } from '../schema/BusinessSchema';
import { BusinessBuildingSchema, BusinessBuildingType } from '../schema/BusinessBuildingSchema';

export class Business extends BaseModel implements BusinessType {
    static schema = BusinessSchema;
}

export class BusinessBuilding extends BaseModel implements BusinessBuildingType {
    static schema = BusinessBuildingSchema;
}