import { BaseModel } from './baseModel';
import { BuildingSchema, BuildingType as BuildingSchemaType } from '../schema';
import { BuildingConstructionSchema, BuildingConstructionType } from '../schema';
import { BuildingStorageSchema, BuildingStorageType } from '../schema';
import { BuildingOperationSchema, BuildingOperationType } from '../schema';
import {DeliveryCost} from "./deliveryCost";
import {Producer} from "./producer";
import {BuildingUpgradeTypeEnumType} from "../schema/enums";
import { Location } from "./location";
import {BuildingTypeEnumType} from "../schema/enums";
import {ItemEnumType} from "../schema/enums";
import {Inventory} from "./inventory";
import {Flow} from "./flow";
import {Operation} from "./operation";
import {BuildingTypeSchema, BuildingTypeType} from "../schema";
import {BuildingRequirementsType} from "../schema";
import {BuildingUpgradeType} from "../schema";

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

    get materialsMap() : Map<ItemEnumType, number> {
        return new Map(Object.entries(this.materials).map(([key, value]) => [key as ItemEnumType, value]));
    }
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