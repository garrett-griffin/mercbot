import { BaseModel } from './baseModel';
import { ManagerSchema, ManagerType } from '../schema';

/**
 * Represents a manager with associated attributes and operations.
 */
export class Manager extends BaseModel implements ManagerType {
    static schema = ManagerSchema;

    buy_price: number | null;
    buy_volume: number | null;
    capacity: number | null;
    max_holding: number | null;
    sell_price: number | null;
    sell_volume: number | null;

    /**
     * Creates an instance of Manager.
     * @param data - The data to initialize the manager.
     */
    constructor(data: ManagerType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }

    /**
     * Checks if the manager is currently buying.
     */
    get buying(): boolean {
        return this.buy_price !== null && this.buy_volume !== null;
    }

    /**
     * Calculates the maximum buy price.
     */
    get maxBuyPrice(): number {
        return (this.buy_price ?? 0) * (this.buy_volume ?? 0);
    }

    /**
     * Calculates the maximum sell price.
     */
    get maxSellPrice(): number {
        return (this.sell_price ?? 0) * (this.sell_volume ?? 0);
    }

    /**
     * Checks if the manager is currently selling.
     */
    get selling(): boolean {
        return this.sell_price !== null && this.sell_volume !== null;
    }
}
