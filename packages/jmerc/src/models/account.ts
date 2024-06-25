import { BaseModel } from './BaseModel';
import { AccountSchema, AccountType } from '../schema/AccountSchema';
import { AccountAssetSchema, AccountAssetType } from '../schema/AccountAssetSchema';

export class Account extends BaseModel implements AccountType {
    static schema = AccountSchema;
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