import { AccountAsset } from "../models";
import { Flow } from "../models";
import { ItemEnumType } from "../schema/enums";
import { Town } from './town';
import { Transport } from './transport';
import { Manager } from "../models";

export class Export {
    asset: AccountAsset;
    flow: Flow;
    item: ItemEnumType;
    manager: Manager;
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

    get market_data() {
        return this.town.market[this.item];
    }

    get flowed() {
        return this.flow.export || 0;
    }

    get value() {
        return this.manager.maxSellPrice;
    }

    get valueFlowed() {
        if (!this.flowed) {
            return 0.0;
        }

        return this.asset.sale * this.asset.sale_price;
    }

    get volume() {
        return this.manager.sell_volume;
    }

    get volumeFlowed() {
        return this.flow.export || 0;
    }

    async fetchMarketDetails() {
        return await this.town.fetchMarketItem(this.item);
    }

    async sell(volume: number, price: number) {
        await this.transport.sell(this.item, volume, price);
    }

    async patchManager(buyPrice?: number, buyVolume?: number, sellPrice?: number, sellVolume?: number) {
        await this.transport.patchManager(this.item, buyPrice, buyVolume, sellPrice, sellVolume);
    }
}

export class Exports extends Object {
    private data: { [key: string]: Export };

    constructor(data: { [key: string]: Export }) {
        super();
        this.data = data;
    }

    get(key: ItemEnumType): Export | undefined {
        return this.data[key];
    }

    set(key: ItemEnumType, value: Export) {
        this.data[key] = value;
    }

    get flowed() {
        return new Exports(
            Object.keys(this.data).filter((item) => this.data[item].flowed)
                .reduce((acc, item) => ({ ...acc, [item]: this.data[item] }), {})
        );
    }
    get value() {
        return Object.values(this.data).reduce((acc, exp) => acc + exp.value, 0);
    }
    get valueFlowed() {
        return Object.values(this.data).reduce(
            (acc, exp) => acc + exp.valueFlowed,
            0
        );
    }

    get volume() {
        return Object.values(this.data).reduce((acc, exp) => acc + exp.volume, 0);
    }
    get volumeFlowed() {
        return Object.values(this.data).reduce(
            (acc, exp) => acc + exp.volumeFlowed,
            0
        );
    }
}

export class ExportsList extends Array<Export> {
    private data: Export[];

    constructor(...items: Export[]) {
        super(...items);
    }
    get flowed() {
        return new ExportsList(...this.data.filter((exp) => exp.flowed));
    }
    get value() {
        return this.data.reduce((acc, exp) => acc + exp.value, 0);
    }
    get valueFlowed() {
        return this.data.reduce((acc, exp) => acc + exp.valueFlowed, 0);
    }
    get volume() {
        return this.data.reduce((acc, exp) => acc + exp.volume, 0);
    }
    get volumeFlowed() {
        return this.data.reduce((acc, exp) => acc + exp.volumeFlowed, 0);
    }

    byTownId(id: number) {
        return new ExportsList(...this.data.filter((exp) => +exp.town.data.id === id));
    }

    byTownName(name: string) {
        return new ExportsList(...this.data.filter((exp) => exp.town.data.name === name));
    }

}

export class ExportsSummed extends Object {
    private data: { [key: string]: ExportsList };

    constructor(data: { [key: string]: ExportsList } = {}) {
        super();
        this.data = data;
    }

    get(key: string): ExportsList | undefined {
        return this.data[key];
    }

    set(key: string, value: ExportsList) {
        this.data[key] = value;
    }
    get flowed() {
        return new ExportsSummed(
            Object.keys(this.data).filter((item) =>
                this.data[item].some((exp) => exp.flowed)
            ).reduce((acc, item) => ({ ...acc, [item]: this.data[item] }), {})
        );
    }
    get value() {
        return Object.values(this.data).reduce(
            (acc, exps) => acc + exps.reduce((acc, exp) => acc + exp.value, 0),
            0
        );
    }
    get valueFlowed() {
        return Object.values(this.data).reduce(
            (acc, exps) =>
                acc + exps.reduce((acc, exp) => acc + exp.valueFlowed, 0),
            0
        );
    }
    get volume() {
        return Object.values(this.data).reduce(
            (acc, exps) => acc + exps.reduce((acc, exp) => acc + exp.volume, 0),
            0
        );
    }
    get volumeFlowed(): number {
        return Object.values(this.data).reduce((acc, exps) => {
            return acc + exps.reduce((acc, exp) => acc + exp.volumeFlowed, 0);
        }, 0);
    }

    byTownId(id: number): ExportsSummed {
        const data = Object.entries(this.data).reduce((acc, [item, exps]) => {
            if (+exps[0].town.data.id === id) {
                acc[item] = exps;
            }
            return acc;
        }, {});
        return new ExportsSummed(data);
    }

    byTownName(name: string): ExportsSummed {
        const data = Object.entries(this.data).reduce((acc, [item, exps]) => {
            if (exps[0].town.data.name === name) {
                acc[item] = exps;
            }
            return acc;
        }, {});
        return new ExportsSummed(data);
    }
}