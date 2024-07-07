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

    _initializeSubProperties() {
        super._initializeSubProperties();

        if(this.construction !== null) {
            this.construction = BuildingConstruction.build(this.construction);
        }

        if(this.delivery_cost !== null) {
            this.delivery_cost = DeliveryCost.build(this.delivery_cost);
        }

        if(this.land !== null && this.land !== undefined) {
            for(let i=0; i<this.land.length; i++) {
                this.land[i] = Location.build(this.land[i]);
            }
        }

        if(this.producer) {
            this.producer = Producer.build(this.producer);
        }

        if(this.storage !== null) {
            this.storage = BuildingStorage.build(this.storage);
        }

        if(this.sublocation !== null) {
            this.sublocation = Location.build(this.sublocation);
        }
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

    _initializeSubProperties() {
        super._initializeSubProperties();
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

    _initializeSubProperties() {
        super._initializeSubProperties();

        this.inventory = Inventory.build(this.inventory);
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

    _initializeSubProperties() {
        super._initializeSubProperties();

        if(this.total_flow !== null) {
            // Ensure each item in `assets` is a proper instance of AccountAsset
            Object.keys(this.total_flow).forEach((key: ItemEnumType) => {
                const total_flow = this.total_flow[key];
                this.total_flow[key] = Flow.build(total_flow);
            });
        }

        if(this.operations !== null) {
            for(let i=0; i<this.operations.length; i++) {
                this.operations[i] = Operation.build(this.operations[i]);
            }
        }
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

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
