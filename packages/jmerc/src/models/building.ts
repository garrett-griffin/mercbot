import { BaseModel } from './baseModel';
import { BuildingSchema, BuildingType as BuildingSchemaType } from '../schema';
import { BuildingConstructionSchema, BuildingConstructionType } from '../schema';
import { BuildingStorageSchema, BuildingStorageType } from '../schema';
import { BuildingOperationSchema, BuildingOperationType } from '../schema';
import { DeliveryCost } from './deliveryCost';
import { Producer } from './producer';
import { BuildingUpgradeTypeEnumType } from '../schema/enums';
import { Location } from './location';
import { BuildingTypeEnumType } from '../schema/enums';
import { ItemEnumType } from '../schema/enums';
import { Inventory } from './inventory';
import { Flow } from './flow';
import { Operation } from './operation';
import { BuildingTypeSchema, BuildingTypeType } from '../schema';
import { BuildingRequirementsType } from '../schema';
import { BuildingUpgradeType } from '../schema';

/**
 * Represents a building with various attributes.
 */
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

    /**
     * Creates an instance of Building.
     * @param data - The data to initialize the building.
     */
    constructor(data: BuildingSchemaType) {
        super(data);
    }
}

/**
 * Represents the construction details of a building.
 */
export class BuildingConstruction extends BaseModel implements BuildingConstructionType {
    static schema = BuildingConstructionSchema;

    range: number | null;
    size: number | null;
    discount: number | null;
    time: number;
    materials: Record<ItemEnumType, number>;

    /**
     * Creates an instance of BuildingConstruction.
     * @param data - The data to initialize the building construction.
     */
    constructor(data: BuildingConstructionType) {
        super(data);
    }

    /**
     * Returns a map of the materials required for construction.
     */
    get materialsMap(): Map<ItemEnumType, number> {
        return new Map(Object.entries(this.materials).map(([key, value]) => [key as ItemEnumType, value]));
    }
}

/**
 * Represents the storage details of a building.
 */
export class BuildingStorage extends BaseModel implements BuildingStorageType {
    static schema = BuildingStorageSchema;

    inventory: Inventory;
    operations: string[];
    reference: string;

    /**
     * Creates an instance of BuildingStorage.
     * @param data - The data to initialize the building storage.
     */
    constructor(data: BuildingStorageType) {
        super(data);
    }
}

/**
 * Represents the operation details of a building.
 */
export class BuildingOperation extends BaseModel implements BuildingOperationType {
    static schema = BuildingOperationSchema;

    total_flow: Record<ItemEnumType, Flow> | null;
    operations: Operation[] | null;

    /**
     * Creates an instance of BuildingOperation.
     * @param data - The data to initialize the building operation.
     */
    constructor(data: BuildingOperationType) {
        super(data);
    }
}

/**
 * Represents the type details of a building.
 */
export class BuildingType extends BaseModel implements BuildingTypeType {
    static schema = BuildingTypeSchema;

    type: BuildingTypeEnumType;
    supports_boost: boolean;
    requires: BuildingRequirementsType;
    construction: BuildingConstructionType | null;
    upgrades: BuildingUpgradeType[];

    /**
     * Creates an instance of BuildingType.
     * @param data - The data to initialize the building type.
     */
    constructor(data: BuildingTypeType) {
        super(data);
    }
}
