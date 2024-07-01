import { BaseModel } from './baseModel';
import { InventorySchema, InventoryType } from '../schema';
import { Account, AccountAsset } from './account';
import { ItemEnumType } from "../schema/enums";
import {Manager} from "./manager";
import {Flow} from "./flow";

export class Inventory extends BaseModel implements InventoryType {
    static schema = InventorySchema;

    account: Account;
    assets: AccountAsset[];
    capacity: number;
    managers: Record<ItemEnumType, Manager> | null;
    previous_flows: Record<ItemEnumType, Flow> | null;
    reserved: number | null;

    get items(): Map<ItemEnumType, AccountAsset> {
        return new Map(Object.entries(this.account.assets).map(([key, value]) => [key as ItemEnumType, value]));
    }

    get managersMap(): Map<ItemEnumType, Manager> {
        console.log("Accessing managersMap");
        console.log("Managers: ", this.managers);
        return new Map(Object.entries(this.managers).map(([key, value]) => [key as ItemEnumType, value]));
    }

    get previousFlowsMap(): Map<ItemEnumType, Flow> {
        return new Map(Object.entries(this.previous_flows).map(([key, value]) => [key as ItemEnumType, value]));
    }
}