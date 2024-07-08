import { ItemEnumType } from "../schema/enums";
import { Inventory } from '../models';
import { Town } from './town';
import {MarketItem, MarketItemDetails} from '../models';
import { TradeRoute } from '../models';
import { Exports, Export } from './exports';
import { Imports, Import } from './imports';
import Client from '../client';
import { Player } from './player';
import { Transport as TransportModel } from '../models/transport'
import { ItemTradeResult } from "../models";
import { Account } from "../models";
import { Manager } from "../models";

export class Transport {
    id: number;
    town: Town | null;
    exports: Exports;
    imports: Imports;
    inventory: Inventory;
    route: TradeRoute;
    data: TransportModel;
    _client: Client;
    player: Player;

    constructor(client: Client, player: Player, id: number) {
        this._client = client;
        this.player = player;
        this.id = id;
    }

    get docked(): boolean {
        return this.town !== null;
    }

    get market(): Record<ItemEnumType, MarketItem> | null {
        if (this.docked) {
            return this.town.market;
        } else {
            return null;
        }
    }

    async load(): Promise<void> {
        this.data = await this._client.transportsApi.get({id: this.id});
        if (this.data.route) {
            const data = await this._client.townsApi.getTown(this.data.route.remote_town);
            this.town = new Town(this._client, this.data.route.remote_town, data);
        }
        this.loadImportsExports();
    }

    async buy(item: ItemEnumType, volume: number, price: number): Promise<ItemTradeResult> {
        if (!this.docked) {
            throw new Error('The transport must be docked to buy an item.');
        }
        const expectedBalance = this.player.storehouse.items[item].balance;
        const result = await this.town.buy(item, expectedBalance, `route/${this.id}`, volume, price);
        this.player.storehouse.updateAccount(await Account.validate(result._embedded[`/accounts/${this.data.route.account.id}`]));
        return result;
    }

    async exportItem(item: ItemEnumType, volume: number, price: number): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to export an item.');
        }
        const manager = new Manager({ sell_volume: volume, sell_price: price });
        await this.setManager(item, manager);
    }

    async importItem(item: ItemEnumType, volume: number, price: number): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to import an item.');
        }
        const manager = new Manager({ buy_volume: volume, buy_price: price });
        await this.setManager(item, manager);
    }

    async patchManager(item: ItemEnumType, buyPrice?: number, buyVolume?: number, sellPrice?: number, sellVolume?: number): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to patch a manager.');
        }
        if (!(item in this.data.route.managers)) {
            throw new Error('The item does not have a manager.');
        }
        const manager = this.data.route.managers[item];
        if (buyPrice !== undefined) manager.buy_price = buyPrice;
        if (buyVolume !== undefined) manager.buy_volume = buyVolume;
        if (sellPrice !== undefined) manager.sell_price = sellPrice;
        if (sellVolume !== undefined) manager.sell_volume = sellVolume;
        this.updateRoute(await this._client.transportsApi.setManager(this.id, item, manager));
    }

    async sell(item: ItemEnumType, volume: number, price: number): Promise<ItemTradeResult> {
        if (!this.docked) {
            throw new Error('The transport must be docked to sell an item.');
        }
        const expectedBalance = this.player.storehouse.items[item].balance;
        const result = await this.town.sell(item, expectedBalance, `route/${this.id}`, volume, price);
        this.player.storehouse.updateAccount(await Account.validate(result._embedded[`/accounts/${this.data.route.account.id}`]));
        return result;
    }

    async setManager(item: ItemEnumType, manager: Manager): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to set a manager.');
        }
        this.updateRoute(await this._client.transportsApi.setManager(this.id, item, manager));
    }

    updateRoute(route: TradeRoute): void {
        this.data.route = route;
        this.loadImportsExports();
    }

    loadImportsExports(): void {
        if (this.docked) {
            for (const item in this.route?.managers) {
                const asset = this.route.account.assets[item];
                const flow = this.data.route.current_flows[item];
                if (this.route.managers[item].buyVolume) {
                    this.imports[item] = new Import(asset, flow, item as ItemEnumType, this.route.managers[item], this.town, this);
                }
                if (this.route.managers[item].sellVolume) {
                    this.exports[item] = new Export(asset, flow, item as ItemEnumType, this.route.managers[item], this.town, this);
                }
            }
        }
    }
}

export class TransportList extends Array<Transport> {
    byTownName(name: string): TransportList {
        const transports: TransportList = new TransportList();
        for (const transport of this) {
            if (transport.docked && transport.town.name === name) {
                transports.push(transport);
            }
        }
        return transports;
    }

    searchMarkets(item: ItemEnumType): TownItem[] {
        const items: TownItem[] = [];
        for (const transport of this) {
            if (transport.docked && item in transport.town.market) {
                items.push(new TownItem(item, transport.town.market[item], transport.town));
            }
        }
        return items;
    }
}

export class TownItem {
    item: ItemEnumType;
    marketItem: MarketItem;
    town: Town;

    constructor(item: ItemEnumType, marketItem: MarketItem, town: Town) {
        this.item = item;
        this.marketItem = marketItem;
        this.town = town;
    }

    fetchDetails(): Promise<MarketItemDetails> {
        return this.town.fetchMarketItem(this.item);
    }
}