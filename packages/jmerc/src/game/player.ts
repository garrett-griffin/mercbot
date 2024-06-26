import { Player as PlayerModel, Household, Sustenance } from '../models/player';
import { Business } from '../models/business';
import { Building } from './Building';
import { BuildingsList } from './BuildingsList';
import { ExportsList, ExportsSummed } from './Exports';
import {Imports, ImportsList, ImportsSummed} from './Imports';
import { BuildingOperation, BuildingOperationsDict } from './BuildingOperation';
import { Town } from './Town';
import { Transport, TransportList } from './Transport';
import { Client } from '../client/Client';
import { Common } from '../models/Common';

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

    constructor(client: Client) {
        this._client = client;
        this.exports = new ExportsSummed();
        this.imports = new ImportsSummed();
    }

    async load() {
        this.data = await this._client.playerApi.get();
        this.business = await this._client.businessesApi.get(
            this.data.household.business_ids[0]
        );
        this.town = await this._client.town(this.data.household.town_id);

        let tasks = [];
        for (const operation of this.data.household.operations) {
            const id = parseInt(operation.split('/')[1]);
            tasks.push(this._client.buildingOperation(this, id));
        }

        this.operations = new BuildingOperationsDict(
            await Promise.all(tasks).then((ops) =>
                ops.reduce((acc, op) => {
                    acc[op.buildingId] = op;
                    return acc;
                }, {})
            )
        );

        tasks = [];
        for (const id of this.business.buildingIds) {
            tasks.push(this._client.building(this, id));
        }
        this.buildings = new BuildingsList(await Promise.all(tasks));

        tasks = [];
        if (this.business.transportIds) {
            for (const id of this.business.transportIds) {
                tasks.push(this._client.transport(this, id));
            }
        }
        this.transports = new TransportList(await Promise.all(tasks));

        for (const transport of this.transports) {
            for (const item in transport.exports) {
                if (!this.exports[item]) {
                    this.exports[item] = new ExportsList([transport.exports[item]]);
                } else {
                    this.exports[item].push(transport.exports[item]);
                }
            }

            for (const item in transport.imports) {
                if (!this.imports[item]) {
                    this.imports[item] = new ImportsList([transport.imports[item]]);
                } else {
                    this.imports[item].push(transport.imports[item]);
                }
            }
        }

        this.storehouse = await this._client.storehouse(this);
    }

    get household() {
        return this.data.household;
    }

    get money() {
        return this.business.account.assets.get(Common.Asset.Money).balance;
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

    sustenanceItemConsumption(item) {
        return this.data.household.sustenance.inventory.previousFlows[item].consumption;
    }

    sustenanceItemCost(item) {
        return (
            this.sustenanceItemConsumption(item) *
            this.storehouse.items[item].averageCost
        );
    }
}