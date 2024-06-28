import { BaseModel } from './baseModel';
import { BuildingSchema, BuildingType as BuildingSchemaType } from '../schema/BuildingSchema';
import { BuildingConstructionSchema, BuildingConstructionType } from '../schema/BuildingConstructionSchema';
import { BuildingStorageSchema, BuildingStorageType } from '../schema/BuildingStorageSchema';
import { BuildingOperationSchema, BuildingOperationType } from '../schema/BuildingOperationSchema';
import {DeliveryCost} from "./deliveryCost";
import {Producer} from "./producer";
import {BuildingUpgradeTypeEnumType} from "../schema/enums/BuildingUpgradeTypeEnumSchema";
import { Location } from "./location";
import {BuildingTypeEnumType} from "../schema/enums/BuildingTypeEnumSchema";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {Inventory} from "./inventory";
import {Flow} from "./flow";
import {Operation} from "./operation";
import {BuildingTypeSchema, BuildingTypeType} from "../schema/BuildingTypeSchema";
import {BuildingRequirementsType} from "../schema/BuildingRequirementsSchema";
import {BuildingUpgradeType} from "../schema/BuildingUpgradeSchema";

export class Building extends BaseModel implements BuildingSchemaType {
    static schema = BuildingSchema;

    capacity: number | null;
    construction: BuildingConstruction | null;
    delivery_cost: DeliveryCost;
    id: number;
    land: Location[] | null;
    name: string;
    owner_id: string;
    producer: Producer | null;
    provider_id: number | null;
    size: number | null;
    storage: BuildingStorage | null;
    sublocation: Location | null;
    town_id: number;
    type: BuildingTypeEnumType;
    upgrades: BuildingUpgradeTypeEnumType[] | null;
}

export class BuildingConstruction extends BaseModel implements BuildingConstructionType {
    static schema = BuildingConstructionSchema;

    range: number | null;
    size: number | null;
    discount: number | null;
    time: number;
    materials: Record<ItemEnumType, number>;
}

export class BuildingStorage extends BaseModel implements BuildingStorageType {
    static schema = BuildingStorageSchema;

    inventory: Inventory;
    operations: string[];
    reference: string;
}

export class BuildingOperation extends BaseModel implements BuildingOperationType {
    static schema = BuildingOperationSchema;

    total_flow: Record<ItemEnumType, Flow> | null;
    operations: Operation[] | null;
}

export class BuildingType extends BaseModel implements BuildingTypeType {
    static schema = BuildingTypeSchema;

    type: BuildingTypeEnumType;
    supports_boost: boolean;
    requires: BuildingRequirementsType;
    construction: BuildingConstructionType | null;
    upgrades: BuildingUpgradeType[];
}