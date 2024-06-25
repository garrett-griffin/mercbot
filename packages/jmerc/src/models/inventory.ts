import { BaseModel } from './BaseModel';
import { InventorySchema, InventoryType } from '../schema/InventorySchema';
import { Account, AccountAsset } from './account';
import { ItemEnumType } from "../schema/enums/ItemEnumSchema";

export class Inventory extends BaseModel implements InventoryType {
    static schema = InventorySchema;

    account: Account;
    assets: AccountAsset[];

    get items(): Map<ItemEnumType, AccountAsset> {
        return this.account.assets;
    }
}