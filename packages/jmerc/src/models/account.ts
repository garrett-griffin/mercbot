import { BaseModel } from './baseModel';
import { AccountSchema, AccountType } from '../schema';
import { AccountAssetSchema, AccountAssetType } from '../schema';
import { ItemEnumType } from '../schema/enums';

/**
 * Represents an account with associated assets.
 */
export class Account extends BaseModel implements AccountType {
    static schema = AccountSchema;

    assets: Partial<Record<ItemEnumType, AccountAsset>>;
    id: string;
    master_id: string | null;
    name: string | null;
    owner_id: string;
    sponsor_id: string | null;

    /**
     * Creates an instance of Account.
     * @param data - The data to initialize the account.
     */
    constructor(data: AccountType) {
        super(data);
    }

    /**
     * Returns a map of the account's assets.
     */
    get assetsMap(): Map<ItemEnumType, AccountAsset> {
        return new Map(Object.entries(this.assets).map(([key, value]) => [key as ItemEnumType, value]));
    }
}

/**
 * Represents an asset within an account.
 */
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

    /**
     * Checks if the asset has been purchased.
     */
    get purchased(): boolean {
        return this.purchase !== null;
    }

    /**
     * Checks if the asset has been sold.
     */
    get sold(): boolean {
        return this.sale !== null;
    }

    /**
     * Calculates the total purchase value of the asset.
     */
    get totalPurchase(): number {
        return (this.purchase ?? 0) * (this.purchase_price ?? 0);
    }

    /**
     * Calculates the total sale value of the asset.
     */
    get totalSale(): number {
        return (this.sale ?? 0) * (this.sale_price ?? 0);
    }

    /**
     * Calculates the total value of the asset based on its balance and unit cost.
     */
    get totalValue(): number {
        return (this.balance ?? 0) * (this.unit_cost ?? 0);
    }
}
