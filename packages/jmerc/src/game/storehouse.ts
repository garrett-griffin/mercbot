// Storehouse.ts
import Client from "../client";
import {Building} from './building'
import { Player } from "./player";
import {Flow} from "../models";
import {Account, AccountAsset} from "../models";
import {Manager} from "../models";
import {ItemEnumType} from "../schema/enums";
import { ExportsList } from './exports'
import { ImportsList } from './imports'
import { BuildingTypeEnum} from "../models/enums";
import {MarketItem, MarketItemDetails} from "../models";
import {ItemTradeResult} from "../models";

export class Storehouse {
    _client: Client;
    player: Player;
    items: Map<ItemEnumType, StorehouseItem>;
    data: Building;

    constructor(client: Client, player: Player) {
        this._client = client;
        this.player = player;
        this.items = new Map<ItemEnumType, StorehouseItem>();
    }

    async load() {
        const storehouses = this.player.buildings.byType(BuildingTypeEnum.Storehouse).concat(this.player.buildings.byType(BuildingTypeEnum.Warehouse));
        if (!storehouses.length) {
            throw new Error('No storehouses found.');
        }

        this.data = storehouses[0];
        this._loadInventory();
    }

    get flows() {
        return this.data.flows;
    }

    get id() {
        return this.data.id;
    }

    get operations() {
        return this.data.operations;
    }

    get previousFlows() {
        return this.data.previous_flows;
    }

    async buy(item: ItemEnumType, volume: number, price: number) {
        try {
            const result = await this.player.town.buy(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
            const validatedAccount = await Account.validate(result._embedded[`/accounts/${this.data.inventory.account.id}`]);
            this.updateAccount(validatedAccount);
            return result;
        } catch (error) {
            throw new Error(`Failed to buy item ${item}: ${(error as Error).message}`);
        }
    }


    async patchManager(item: ItemEnumType, data: any) {
        await this.data.patchManager(item, data);
    }

    async sell(item: ItemEnumType, volume: number, price: number) {
        try {
            const result = await this.player.town.sell(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
            const validatedAccount = await Account.validate(result._embedded[`/accounts/${this.data.inventory.account.id}`]);
            this.updateAccount(validatedAccount);
            return result;
        } catch (error) {
            throw new Error(`Failed to sell item ${item}: ${(error as Error).message}`);
        }
    }


    async setManager(item: ItemEnumType, manager: Manager) {
        await this._client.buildingsApi.setManager(this.data.id, item, manager);
    }

    updateAccount(account: Account) {
        this.data.inventory.account = account;
        this._loadInventory();
    }

    private _loadInventory() {
        this.data.items.forEach((data, item) => {
            this.items.set(item, new StorehouseItem(
                data,
                this.player.exports.get(item) || new ExportsList(),
                this.player.imports.get(item) || new ImportsList(),
                item,
                this.data.inventory.managers[item] || null,
                this.flows.get(item, null),
                this
            ));
        });
    }
}

export class StorehouseItem {

    asset: AccountAsset;
    exports: ExportsList;
    imports: ImportsList;
    item: ItemEnumType;
    manager: Manager;
    flow: Flow;
    storehouse: Storehouse;

    constructor(
        asset: AccountAsset,
        exports: ExportsList,
        imports: ImportsList,
        item: ItemEnumType,
        manager: Manager,
        flow: Flow,
        storehouse: Storehouse
    ) {
        this.asset = asset;
        this.exports = exports;
        this.imports = imports;
        this.item = item;
        this.manager = manager;
        this.flow = flow;
        this.storehouse = storehouse;
    }


    get averageCost(): number {
        let totalCost = 0;
        let totalVolume = 0;
        if (this.produced) {
            totalCost += this.productionCost;
            totalVolume += this.produced;
        }
        if (this.imported) {
            totalCost += this.importCostFlowed;
            totalVolume += this.imported;
        }
        if (this.purchased) {
            totalCost += this.purchasedCost;
            totalVolume += this.purchased;
        }
        return totalCost / totalVolume || 0;
    }

    get balance(): number {
        return this.asset.balance;
    }

    get capacity(): number {
        return this.asset.capacity;
    }

    get consumed(): number {
        return this.flow ? this.flow.consumption : 0;
    }

    get consumptionCost(): number {
        return (this.consumed * this.averageCost) || 0;
    }

    get exported(): number {
        return this.flow ? this.flow.export || 0 : 0;
    }

    get exportValue(): number {
        return this.exports.value;
    }

    get exportValueFlowed(): number {
        return this.exports.valueFlowed;
    }

    get exportVolume(): number {
        return this.exports.volume;
    }

    get exportVolumeFlowed(): number {
        return this.exports.volumeFlowed;
    }

    get imported(): number {
        return this.flow ? this.flow.imported || 0 : 0;
    }

    get importCost(): number {
        return this.imports.cost;
    }

    get importCostFlowed(): number {
        return this.imports.costFlowed;
    }

    get importVolume(): number {
        return this.imports.volume;
    }

    get importVolumeFlowed(): number {
        return this.imports.volumeFlowed;
    }

    get marketData(): MarketItem {
        return this.storehouse.player.town.item(this.item);
    }

    get sold(): number {
        return this.flow ? this.flow.sale || 0 : 0;
    }

    get saleValue(): number {
        return this.sold * this.asset.sale_price;
    }

    get produced(): number {
        return this.flow ? this.flow.production : 0;
    }

    get productionCost(): number {
        return this.flow ? this.flow.production_cost || 0 : 0;
    }

    get purchased(): number {
        return this.flow ? this.flow.purchase || 0 : 0;
    }

    get purchasedCost(): number {
        return this.purchased * this.asset.purchase_price;
    }

    buy(volume: number, price: number): Promise<ItemTradeResult> {
        return this.storehouse.buy(this.item, volume, price);
    }

    fetchMarketDetails(): Promise<MarketItemDetails> {
        return this.storehouse.player.town.fetchMarketItem(this.item);
    }

    patchManager(data: any): Promise<void> {
        return this.storehouse.patchManager(this.item, data);
    }

    sell(volume: number, price: number): Promise<ItemTradeResult> {
        return this.storehouse.sell(this.item, volume, price);
    }

    setManager(manager: Manager): Promise<void> {
        return this.storehouse.setManager(this.item, manager);
    }
}