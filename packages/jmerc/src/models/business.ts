import { BaseModel } from './BaseModel';
import { BusinessSchema, BusinessType } from '../schema/BusinessSchema';
import { BusinessBuildingSchema, BusinessBuildingType } from '../schema/BusinessBuildingSchema';
import {Account} from "./account";
import {Building} from "./building";
import {BuildingTypeEnumType} from "../schema/enums/BuildingTypeEnumSchema";

export class Business extends BaseModel implements BusinessType {
    static schema = BusinessSchema;

    account: Account;
    account_id: string;
    building_ids: number[];
    buildings: Building[];
    contract_ids: string[] | null;
    id: number;
    name: string;
    owner_id: number;
    transport_ids: number[] | null;

}

export class BusinessBuilding extends BaseModel implements BusinessBuildingType {
    static schema = BusinessBuildingSchema;

    id: number;
    type: BuildingTypeEnumType;

}