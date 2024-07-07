// imports.ts
// noinspection TypeScriptFieldCanBeMadeReadonly,DuplicatedCode

import { Town } from './town';
import { Transport } from './transport';
import {AccountAsset} from "../models";
import {Flow} from "../models";
import {ItemEnumType} from "../schema/enums";
import {Manager} from "../models";

export class Import {
    asset: AccountAsset
    flow: Flow
    item: ItemEnumType
    manager: Manager
    town: Town;
    transport: Transport;

    constructor(asset: AccountAsset, flow: Flow, item: ItemEnumType, manager: Manager, town: Town, transport: Transport) {
        this.asset = asset;
        this.flow = flow;
        this.item = item;
        this.manager = manager;
        this.town = town;
        this.transport = transport;
    }

    get cost() {
        return this.manager.maxBuyPrice;
    }

    get cost_flowed() {
        if (!this.flowed) {
            return 0.0;
        }

        return this.asset.purchase * this.asset.purchase_price;
    }

    get flowed() {
        return this.flow.imported || 0;
    }

    get marketData() {
        return this.town.market[this.item];
    }

    get volume() {
        return this.manager.buy_volume;
    }

    get volumeFlowed() {
        return this.flow.imported || 0;
    }

    async buy(volume: number, price: number) {
        await this.transport.buy(this.item, volume, price);
    }

    async fetchMarketDetails() {
        return await this.town.fetchMarketItem(this.item);
    }

    async patchManager(buyPrice?: number, buyVolume?: number, sellPrice?: number, sellVolume?: number) {
        await this.transport.patchManager(this.item, buyPrice, buyVolume, sellPrice, sellVolume);
    }
}

export class Imports extends Object {
    private data: { [key: string]: Import };

    constructor(data: { [key: string]: Import }) {
        super();
        this.data = data;
    }

    get(key: ItemEnumType): Import | undefined {
        return this.data[key];
    }

    set(key: ItemEnumType, value: Import) {
        this.data[key] = value;
    }

    get cost(): number {
        return Object.values(this.data).reduce((acc, imp) => acc + imp.cost, 0);
    }

    get costFlowed(): number {
        return Object.values(this.data).reduce((acc, imp) => acc + imp.cost_flowed, 0);
    }

    get flowed(): Imports {
        return new Imports(
            Object.entries(this.data).reduce((acc, [item, imp]) => {
                if (imp.flowed) {
                    acc[item] = imp;
                }
                return acc;
            }, {})
        );
    }

    get volume(): number {
        return Object.values(this.data).reduce((acc, imp) => acc + imp.volume, 0);
    }

    get volumeFlowed(): number {
        return Object.values(this.data).reduce((acc, imp) => acc + imp.volumeFlowed, 0);
    }
}

export class ImportsList extends Array<Import> {

    private data: Import[];
    get cost(): number {
        return this.data.reduce((acc, imp) => acc + imp.cost, 0);
    }

    get costFlowed(): number {
        return this.data.reduce((acc, imp) => acc + imp.cost_flowed, 0);
    }

    get flowed(): ImportsList {
        return new ImportsList(...this.data.filter((imp) => imp.flowed));
    }

    get volume(): number {
        return this.data.reduce((acc, imp) => acc + imp.volume, 0);
    }

    get volumeFlowed(): number {
        return this.data.reduce((acc, imp) => acc + imp.volumeFlowed, 0);
    }

    byTownId(id: number): ImportsList {
        return new ImportsList(...this.data.filter((imp) => +imp.town.data.id === id));
    }

    byTownName(name: string): ImportsList {
        return new ImportsList(...this.data.filter((imp) => imp.town.data.name === name));
    }
}

export class ImportsSummed extends Object {
    private data: { [key: string]: ImportsList };

    constructor(data: { [key: string]: ImportsList } = {}) {
        super();
        this.data = data;
    }

    get(key: string): ImportsList | undefined {
        return this.data[key];
    }

    set(key: string, value: ImportsList) {
        this.data[key] = value;
    }

    get cost(): number {
        return Object.values(this.data).reduce((acc, imps) => acc + imps.cost, 0);
    }

    get costFlowed(): number {
        return Object.values(this.data).reduce((acc, imps) => acc + imps.costFlowed, 0);
    }

    get flowed(): ImportsSummed {
        return new ImportsSummed(
            Object.entries(this.data).reduce((acc, [item, imps]) => {
                if (imps.flowed) {
                    acc[item] = imps;
                }
                return acc;
            }, {})
        );
    }

    get volume(): number {
        return Object.values(this.data).reduce((acc, imps) => acc + imps.volume, 0);
    }

    get volumeFlowed(): number {
        return Object.values(this.data).reduce((acc, imps) => acc + imps.volumeFlowed, 0);
    }

    byTownId(id: number): ImportsSummed {
        return new ImportsSummed(
            Object.entries(this.data).reduce((acc, [item, imps]) => {
                if (+imps[0].town.data.id === id) { // Convert to number using +
                    acc[item] = imps;
                }
                return acc;
            }, {})
        );
    }

    byTownName(name: string): ImportsSummed {
        return new ImportsSummed(
            Object.entries(this.data).reduce((acc, [item, imps]) => {
                if (imps[0].town.data.name === name) {
                    acc[item] = imps;
                }
                return acc;
            }, {})
        );
    }
}