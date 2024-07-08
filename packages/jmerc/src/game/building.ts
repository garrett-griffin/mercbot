import {Building as BuildingModel} from '../models/building';
import Client from "../client";
import {Player} from './player';
import {BuildingTypeEnumType, ItemEnumType} from "../schema/enums";
import {AccountAsset, Manager} from "../models";
import {Recipe} from "./recipe";

export class Building {
    _client: Client;
    _id: number;
    id: number;
    player: Player;
    data: BuildingModel;

    constructor(client: Client, player: Player, id: number) {
        this._client = client;
        this.player = player;
        this._id = id;
        this.id = this._id;
    }

    async load() {
        this.data = await this._client.buildingsApi.get({ id: this._id });
    }

    get buildingOperation() {
        return this.player.operations.get(this._id) || null;
    }

    get flows() {
        if (this.buildingOperation && this.buildingOperation.totalFlow) {
            return this.buildingOperation.totalFlow;
        } else if (this.operation) {
            return this.operation.data.flows;
        } else {
            return null;
        }
    }

    get inventory() {
        return this.data && this.data.storage ? this.data.storage.inventory : null;
    }

    get items() {
        return this.data && this.data.storage ? new Map(Object.entries(this.data.storage.inventory.account.assets).map(([key, value]) => [key as ItemEnumType, value])) : null;
    }

    get producerItems() {
        return this.data && this.data.producer ? new Map(Object.entries(this.data.producer.inventory.account.assets).map(([key, value]) => [key as ItemEnumType, value])) : null;
    }

    get operation() {
        return this.operations && this.operations.length === 1 ? this.operations[0] : null;
    }

    get operations() {
        return this.id in this.player.operations ? this.player.operations[this.id].operations : null;
    }

    get managers() {
        return this.data && this.data.storage ? this.data.storage.inventory.managers : {};
    }

    get previous_flows() {
        return this.data && this.data.storage ? this.data.storage.inventory.previous_flows : null;
    }

    get production() {
        return this.data ? this.data.producer : null;
    }

    get productionFlows() {
        return this.data && this.data.producer ? this.data.producer.inventory.previous_flows : null;
    }

    get size() {
        return this.data ? this.data.size : null;
    }

    get targetProduction() {
        return this.production && this.production.target ? this.production.target : 0.0;
    }

    get type() {
        return this.data ? this.data.type : null;
    }

    get underConstruction() {
        return this.data ? this.data.construction !== null : false;
    }

    get upgrades() {
        return this.data ? this.data.upgrades : null;
    }

    async flow(item: ItemEnumType) {
        return this.data && this.data.storage ? this.data.storage.inventory.previous_flows[item] : null;
    }

    async item(item: ItemEnumType) {
        return this.data && this.data.storage ? this.data.storage.inventory.account.assets[item] : null;
    }

    async manager(item: ItemEnumType) {
        return this.data && this.data.storage ? this.data.storage.inventory.managers[item] : null;
    }

    async patchManager(item: ItemEnumType, managerData: { [key: string]: any }) {
        if (!this.data || !this.data.storage || !this.data.storage.inventory.managers[item]) {
            throw new Error(`Item ${item} does not have a manager.`);
        }

        const manager = this.data.storage.inventory.managers[item];
        for (const key in managerData) {
            manager[key] = managerData[key];
        }

        this.data = await this._client.buildingsApi.setManager(this.id, item, manager);
    }

    async setManager(item: ItemEnumType, manager: Manager) {
        this.data = await this._client.buildingsApi.setManager(this.id, item, manager);
    }

    async setTargetProduction(target: number, autoset_buying: boolean = true, autoset_selling: boolean = true) {
        return await this._client.buildingsApi.setProductionTargetMultiplier(this.id, target, autoset_buying, autoset_selling);
    }

    async calculateCurrentLaborNeed(): Promise<number> {
        /* Calculates the current labor need based on the building's production recipe.
        Returns:
          number: The labor required for the target multiplier.
        */
        if (this.production) {
            const recipe = new Recipe({ client: this._client, recipeName: this.production.recipe });
            await recipe.load();
            if (recipe) {
                let inventoryAssets: Map<ItemEnumType, AccountAsset>;
                if (this.items) {
                    inventoryAssets = this.items;
                } else if (this.data && this.data.producer) {
                    inventoryAssets = this.producerItems;
                }

                let inventoryManagers: Map<ItemEnumType, Manager>;
                if (this.data && this.data.storage) {
                    inventoryManagers = this.data.storage.inventory.managersMap;
                } else if (this.data && this.data.producer) {
                    inventoryManagers = this.data.producer.inventory.managersMap;
                }

                return recipe.calculateTargetLabor(
                    this.targetProduction,
                    Object.fromEntries(inventoryAssets),
                    Object.fromEntries(inventoryManagers)
                );
            }
        }

        return 0.0;
    }

}

export class BuildingsList extends Array<Building> {
    byId(id: number) {
        return this.find((building) => building.id === id);
    }

    byType(type: BuildingTypeEnumType) {
        return new BuildingsList(...this.filter((building) => building.data.type === type));
    }
}