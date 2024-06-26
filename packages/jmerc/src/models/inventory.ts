import { BaseModel } from './BaseModel';
import { InventorySchema, InventoryType } from '../schema/InventorySchema';
import { Account, AccountAsset } from './account';
import { ItemEnumType } from "../schema/enums/ItemEnumSchema";
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

    get items(): Record<ItemEnumType, AccountAsset> {
        return this.account.assets;
    }
}