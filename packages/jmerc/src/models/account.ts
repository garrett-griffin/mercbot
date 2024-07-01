import { BaseModel } from './baseModel';
import { AccountSchema, AccountType } from '../schema';
import { AccountAssetSchema, AccountAssetType } from '../schema';
import {ItemEnumType} from "../schema/enums";

export class Account extends BaseModel implements AccountType {
    static schema = AccountSchema;

    assets: Record<ItemEnumType, AccountAsset>;
    // assetsMap: Map<ItemEnumType, AccountAsset> = new Map();
    id: string;
    master_id: string | null;
    name: string | null;
    owner_id: string;
    sponsor_id: string | null;

    // constructor(data: AccountType) {
    //     super();
    //     this.id = data.id;
    //     this.master_id = data.master_id;
    //     this.name = data.name;
    //     this.owner_id = data.owner_id;
    //     this.sponsor_id = data.sponsor_id;
    //     this.assets = {} as Record<ItemEnumType, AccountAsset>;
    //
    //     // Convert assets record to Map and store in assetsMap
    //     for (const key in data.assets) {
    //         if (data.assets.hasOwnProperty(key)) {
    //             const assetData = data.assets[key];
    //             const asset = new AccountAsset(assetData);
    //             this.assets[key as ItemEnumType] = asset;
    //             this.assetsMap.set(key as ItemEnumType, asset);
    //         }
    //     }
    // }

    get assetsMap(): Map<ItemEnumType, AccountAsset> {
        return new Map(Object.entries(this.assets).map(([key, value]) => [key as ItemEnumType, value]));
    }
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

    // constructor(data: Partial<AccountAssetType>) {
    //     super();
    //     this.balance = data.balance ?? 0;
    //     this.capacity = data.capacity ?? null;
    //     this.purchase = data.purchase ?? null;
    //     this.purchase_price = data.purchase_price ?? null;
    //     this.reserved = data.reserved ?? 0;
    //     this.reserved_capacity = data.reserved_capacity ?? null;
    //     this.sale = data.sale ?? null;
    //     this.sale_price = data.sale_price ?? null;
    //     this.unit_cost = data.unit_cost ?? null;
    // }

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