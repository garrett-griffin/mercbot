// Storehouse.ts
import Client from "../client";
import {Building} from './Building'
import { Player } from "./player";
import {Flow} from "../models/flow";
import {Account, AccountAsset} from "../models/account";
import {Manager} from "../models/manager";
import {ItemEnum} from "../models/enums/itemEnum";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {ItemTradeResultType} from "../schema/ItemTradeResultSchema";
import { ExportsList } from './Exports'
import { ImportsList } from './imports'
import { BuildingTypeEnum} from "../models/enums/buildingTypeEnum";

class Storehouse {
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

    async buy(item: Item, volume: number, price: number) {
        const result = await this.player.town.buy(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
        this.updateAccount(Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]));
        return result;
    }

    async patchManager(item: Item, data: any) {
        await this.data.patchManager(item, data);
    }

    async sell(item: Item, volume: number, price: number) {
        const result = await this.player.town.sell(item, this.items.get(item)?.balance, `storage/${this.data.id}`, volume, price);
        this.updateAccount(Account.validate(result.embedded[`/accounts/${this.data.inventory.account.id}`]));
        return result;
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

    
}