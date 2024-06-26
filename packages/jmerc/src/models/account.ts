import { BaseModel } from './BaseModel';
import { AccountSchema, AccountType } from '../schema/AccountSchema';
import { AccountAssetSchema, AccountAssetType } from '../schema/AccountAssetSchema';
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";

export class Account extends BaseModel implements AccountType {
    static schema = AccountSchema;

    assets: Map<ItemEnumType, AccountAsset>;
    id: string;
    master_id: string | null;
    name: string | null;
    owner_id: number;
    sponsor_id: string | null;
}

export class AccountAsset extends BaseModel implements AccountAssetType {
    static schema = AccountAssetSchema;

    balance: number;
    capacity: number | null;
    purchase: number | null;
    purchase_price: number | null;
    reserved: number;
    reserved_capacity: number | null;
    sale: number | null;
    sale_price: number | null;
    unit_cost: number | null;

    get purchased(): boolean {
        return this.purchase !== null;
    }

    get sold(): boolean {
        return this.sale !== null;
    }

    get totalPurchase(): number {
        return this.purchase * this.purchase_price;
    }

    get totalSale(): number {
        return this.sale * this.sale_price;
    }

    get totalValue(): number {
        return this.balance * this.unit_cost;
    }
}