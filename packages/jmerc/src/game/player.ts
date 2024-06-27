import { Player as PlayerModel, Household, Sustenance } from '../models/player';
import { Business } from '../models/business';
import { Building, BuildingsList } from './Building';
import {Export, ExportsList, ExportsSummed} from './Exports';
import {Import, Imports, ImportsList, ImportsSummed} from './imports';
import { BuildingOperation, BuildingOperationsDict } from './operation';
import { Town } from './town';
import { Transport, TransportList } from './transport';
import Client from "../client";
import {Storehouse} from "./storehouse";
import {AssetEnum} from "../models/enums/assetEnum";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";

interface PlayerType {
    buildings: BuildingsList;
    business: Business;
    data: PlayerModel;
    exports: ExportsSummed;
    imports: ImportsSummed;
    operations: BuildingOperationsDict;
    town: Town;
    transports: TransportList;
}

export class Player {
    _client: Client;
    exports: ExportsSummed;
    imports: ImportsSummed;
    data: PlayerModel;
    business: Business;
    town: Town;
    operations: BuildingOperationsDict;
    buildings: BuildingsList;
    transports: TransportList;
    storehouse: Storehouse;

    constructor(client: Client) {
        this._client = client;
        this.exports = new ExportsSummed();
        this.imports = new ImportsSummed();
    }

    async load() {
        this.data = await this._client.playerApi.get();
        this.business = await this._client.businessesApi.get(
            { id: +this.data.household.business_ids[0] }
        );
        this.town = await this._client.getTown(this.data.household.town_id);

        let tasks = [];
        for (const operation of this.data.household.operations) {
            const id = parseInt(operation.split('/')[1]);
            tasks.push(this._client.getBuildingOperation(this, id));
        }

        this.operations = new BuildingOperationsDict(
            await Promise.all(tasks).then((ops) =>
                ops.reduce((acc, op) => {
                    acc[op.buildingId] = op;
                    return acc;
                }, {})
            )
        );

        let buildingTasks: Promise<Building>[] = [];
        for (const id of this.business.building_ids) {
            buildingTasks.push(this._client.getBuilding(this, id));
        }
        this.buildings = new BuildingsList(...await Promise.all(buildingTasks));

        let transportTasks: Promise<Transport>[] = [];
        if (this.business.transport_ids) {
            for (const id of this.business.transport_ids) {
                transportTasks.push(this._client.getTransport(this, id));
            }
        }
        this.transports = new TransportList(...await Promise.all(transportTasks));

        for (const transport of this.transports) {
            for (const item in transport.exports) {
                const exportItem: Export = transport.exports[item];
                if (!this.exports[item]) {
                    this.exports[item] = new ExportsList(...[exportItem]);
                } else {
                    this.exports[item].push(exportItem);
                }
            }

            for (const item in transport.imports) {
                const importItem: Import = transport.imports[item];
                if (!this.imports[item]) {
                    this.imports[item] = new ImportsList(...[importItem]);
                } else {
                    this.imports[item].push(importItem);
                }
            }
        }

        this.storehouse = await this._client.getStorehouse(this);
    }

    get household() {
        return this.data.household;
    }

    get money() {
        return this.business.account.assets.get(AssetEnum.Money).balance;
    }

    get prestige() {
        return this.data.household.prestige;
    }

    get sustenance() {
        return this.data.household.sustenance;
    }

    get sustenanceCost() {
        let totalCost = 0;
        for (const item of this.sustenanceItems) {
            totalCost += this.sustenanceItemCost(item);
        }
        return totalCost;
    }

    get sustenanceItems() {
        return Array.from(this.data.household.sustenance.inventory.managers.keys());
    }

    sustenanceItemConsumption(item: ItemEnumType) {
        return this.data.household.sustenance.inventory.previous_flows[item].consumption;
    }

    sustenanceItemCost(item: ItemEnumType) {
        return (
            this.sustenanceItemConsumption(item) *
            this.storehouse.items[item].averageCost
        );
    }
}