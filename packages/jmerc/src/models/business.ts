import { BaseModel } from './baseModel';
import { BusinessSchema, BusinessType } from '../schema';
import { BusinessBuildingSchema, BusinessBuildingType } from '../schema';
import { Account } from './account';
import { Building } from './building';
import { BuildingTypeEnumType } from '../schema/enums';

/**
 * Represents a business with associated attributes.
 */
export class Business extends BaseModel implements BusinessType {
    static schema = BusinessSchema;

    account: Account;
    account_id: string;
    building_ids: number[];
    buildings: Building[];
    contract_ids: string[] | null;
    id: number;
    name: string;
    owner_id: string;
    transport_ids: number[] | null;

    /**
     * Creates an instance of Business.
     * @param data - The data to initialize the business.
     */
    constructor(data: BusinessType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();

        if(this.account !== null) {
            this.account = new Account(this.account);
        }

        if(this.buildings !== null) {
            for(let i=0; i<this.buildings.length; i++) {
                this.buildings[i] = new Building(this.buildings[i]);
            }
        }
    }
}

/**
 * Represents a building within a business.
 */
export class BusinessBuilding extends BaseModel implements BusinessBuildingType {
    static schema = BusinessBuildingSchema;

    id: number;
    type: BuildingTypeEnumType;

    /**
     * Creates an instance of BusinessBuilding.
     * @param data - The data to initialize the business building.
     */
    constructor(data: BusinessBuildingType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
