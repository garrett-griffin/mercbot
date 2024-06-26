import { ItemEnumType } from "../schema/enums/ItemEnumSchema";
import { Inventory } from './Inventory';
import { InventoryAccountAsset } from './InventoryAccountAsset';
import { Town } from './Town';
import {Market, MarketItem, MarketItemDetails} from '../models/market';
import { TradeRoute } from '../models/transport';
import { Exports, Export } from './exports';
import { Imports, Import } from './imports';
import Client from '../client';
import { Player } from './Player';
import { Transport as TransportModel } from '../models/transport'
import { ItemTradeResult } from "../models/itemTrade";
import { Account } from "../models/account";
import { Manager } from "../models/manager";

class Transport {
    id: number;
    town: Town | null;
    exports: Exports;
    imports: Imports;
    inventory: Inventory;
    route: TradeRoute;
    private data: TransportModel;
    _client: Client;
    player: Player;

    get docked(): boolean {
        return this.town !== null;
    }

    get market(): Market | Record<ItemEnumType, MarketItem> | null {
        if (this.docked) {
            return this.town.market;
        } else {
            return null;
        }
    }

    async load(client: Client, player: Player): Promise<void> {
        this._client = client;
        this.player = player;
        this.data = await client.transportsApi.get({id: this.id});
        if (this.data.route) {
            this.town = await client.getTown(this.data.route.remote_town);
        }
        this._load_imports_exports();
    }

    async buy(item: ItemEnumType, volume: number, price: number): Promise<ItemTradeResult> {
        if (!this.docked) {
            throw new Error('The transport must be docked to buy an item.');
        }
        const expectedBalance = this.player.storehouse.items[item].balance;
        const result = await this.town.buy(item, expectedBalance, `route/${this.id}`, volume, price);
        this.player.storehouse.update_account(Account.validate(result.embedded[`/accounts/${this.data.route.account.id}`]));
        return result;
    }

    async exportItem(item: ItemEnumType, volume: number, price: number): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to export an item.');
        }
        const manager = new Manager({ sellVolume: volume, sellPrice: price });
        await this.setManager(item, manager);
    }

    async importItem(item: ItemEnumType, volume: number, price: number): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to import an item.');
        }
        const manager = new Manager({ buyVolume: volume, buyPrice: price });
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
        if (buyPrice !== undefined) manager.buyPrice = buyPrice;
        if (buyVolume !== undefined) manager.buyVolume = buyVolume;
        if (sellPrice !== undefined) manager.sellPrice = sellPrice;
        if (sellVolume !== undefined) manager.sellVolume = sellVolume;
        this.updateRoute(await this._client.transports_api.setManager(this.id, item, manager));
    }

    async sell(item: ItemEnumType, volume: number, price: number): Promise<ItemTradeResult> {
        if (!this.docked) {
            throw new Error('The transport must be docked to sell an item.');
        }
        const expectedBalance = this.player.storehouse.items[item].balance;
        const result = await this.town.sell(item, expectedBalance, `route/${this.id}`, volume, price);
        this.player.storehouse.update_account(Account.validate(result.embedded[`/accounts/${this.data.route.account.id}`]));
        return result;
    }

    async setManager(item: ItemEnumType, manager: Manager): Promise<void> {
        if (!this.docked) {
            throw new Error('The transport must be docked to set a manager.');
        }
        this.updateRoute(await this._client.transports_api.setManager(this.id, item, manager));
    }

    updateRoute(route: TransportRoute): void {
        this.data.route = route;
        this.loadImportsExports();
    }

    loadImportsExports(): void {
        if (this.docked) {
            for (const item in this.route.managers) {
                const asset = this.route.account.assets[item];
                const flow = this.data.route.current_flows[item];
                if (this.route.managers[item].buyVolume) {
                    this.imports[item] = new Import(asset, flow, item, this.route.managers[item], this.town, this);
                }
                if (this.route.managers[item].sellVolume) {
                    this.exports[item] = new Export(asset, flow, item, this.route.managers[item], this.town, this);
                }
            }
        }
    }
}

class TransportList extends Array<Transport> {
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

class TownItem {
    item: ItemEnumType;
    asset: InventoryAccountAsset;
    town: Town;

    constructor(item: ItemEnumType, asset: InventoryAccountAsset, town: Town) {
        this.item = item;
        this.asset = asset;
        this.town = town;
    }

    fetchDetails(): TownMarketItemDetails {
        return this.town.fetchMarketItem(this.item);
    }
}