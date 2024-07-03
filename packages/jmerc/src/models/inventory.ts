import { BaseModel } from './baseModel';
import { InventorySchema, InventoryType } from '../schema';
import { Account, AccountAsset } from './account';
import { ItemEnumType } from "../schema/enums";
import { Manager } from "./manager";
import { Flow } from "./flow";

/**
 * Represents the inventory with associated attributes.
 */
export class Inventory extends BaseModel implements InventoryType {
    static schema = InventorySchema;

    account: Account;
    capacity: number;
    managers: Record<ItemEnumType, Manager> | null;
    previous_flows: Record<ItemEnumType, Flow> | null;
    reserved: number | null;

    /**
     * Creates an instance of Inventory.
     * @param data - The data to initialize the inventory.
     */
    constructor(data: InventoryType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();

        this.account = new Account(this.account);
        if(this.managers !== null) {
            // Ensure each item in `assets` is a proper instance of AccountAsset
            Object.keys(this.managers).forEach((key: ItemEnumType) => {
                const manager = this.managers[key];
                this.managers[key] = new Manager(manager);
            });
        }
        if(this.previous_flows !== null) {
            // Ensure each item in `assets` is a proper instance of AccountAsset
            Object.keys(this.previous_flows).forEach((key: ItemEnumType) => {
                const flow = this.previous_flows[key];
                this.previous_flows[key] = new Flow(flow);
            });
        }

    }

    get assets(): Map<ItemEnumType, AccountAsset> {
        return this.items;
    }

    /**
     * Returns a map of the items in the inventory.
     */
    get items(): Map<ItemEnumType, AccountAsset> {
        return new Map(Object.entries(this.account.assets).map(([key, value]) => [key as ItemEnumType, value]));
    }

    /**
     * Returns a map of the managers in the inventory.
     */
    get managersMap(): Map<ItemEnumType, Manager> {
        return new Map(Object.entries(this.managers).map(([key, value]) => [key as ItemEnumType, value]));
    }

    /**
     * Returns a map of the previous flows in the inventory.
     */
    get previousFlowsMap(): Map<ItemEnumType, Flow> {
        return new Map(Object.entries(this.previous_flows).map(([key, value]) => [key as ItemEnumType, value]));
    }
}
