import { BaseModel } from './BaseModel';
import { ManagerSchema, ManagerType } from '../schema/ManagerSchema';

export class Manager extends BaseModel implements ManagerType {
    static schema = ManagerSchema;

    private _buyPrice: number | null;
    private _buyVolume: number | null;
    private _capacity: number | null;
    private _maxHolding: number | null;
    private _sellPrice: number | null;
    private _sellVolume: number | null;

    constructor(data: {
        buyPrice?: number | null,
        buyVolume?: number | null,
        capacity?: number | null,
        maxHolding?: number | null,
        sellPrice?: number | null,
        sellVolume?: number | null,
    }) {
        super();
        this.buyPrice = data.buyPrice;
        this.buyVolume = data.buyVolume;
        this.capacity = data.capacity;
        this.maxHolding = data.maxHolding;
        this.sellPrice = data.sellPrice;
        this.sellVolume = data.sellVolume;
    }

    get buyPrice(): number | null {
        return this._buyPrice;
    }

    set buyPrice(value: number | null) {
        this._buyPrice = value;
    }

    get buyVolume(): number | null {
        return this._buyVolume;
    }

    set buyVolume(value: number | null) {
        this._buyVolume = value;
    }

    get capacity(): number | null {
        return this._capacity;
    }

    set capacity(value: number | null) {
        this._capacity = value;
    }

    get maxHolding(): number | null {
        return this._maxHolding;
    }

    set maxHolding(value: number | null) {
        this._maxHolding = value;
    }

    get sellPrice(): number | null {
        return this._sellPrice;
    }

    set sellPrice(value: number | null) {
        this._sellPrice = value;
    }

    get sellVolume(): number | null {
        return this._sellVolume;
    }

    set sellVolume(value: number | null) {
        this._sellVolume = value;
    }

    get buying(): boolean {
        return this.buyPrice !== null && this.buyVolume !== null;
    }

    get maxBuyPrice(): number {
        return this.buyPrice * this.buyVolume;
    }

    get maxSellPrice(): number {
        return this.sellPrice * this.sellVolume;
    }

    get selling(): boolean {
        return this.sellPrice !== null && this.sellVolume !== null;
    }
}