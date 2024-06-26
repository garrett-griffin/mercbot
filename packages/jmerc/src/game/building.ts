import { BuildingModel } from './BuildingModel';
import { Recipe } from './Recipe';
import { BuildingOperation, Operation, OperationsList } from './Operation';
import { Client } from '../client/Client';
import { Player } from '../game/Player';
import { Common } from '../models/Common';

interface BuildingType {
    id: number;
    data: BuildingModel;
    player: Player;
}

class Building {
    private _client: Client;
    private _id: number;

    constructor(client: Client, player: Player, id: number) {
        this._client = client;
        this.player = player;
        this._id = id;
    }

    async load() {
        this.data = await this._client.buildingsApi.get(this._id);
    }

    get buildingOperation() {
        return this.player.operations.get(this._id, None);
    }

    get flows() {
        if (this.buildingOperation && this.buildingOperation.totalFlow) {
            return this.buildingOperation.data.totalFlow;
        } else if (this.operation) {
            return this.operation.data.flows;
        } else {
            return None;
        }
    }

    // ... rest of the class ...

}

class BuildingsList extends Array<Building> {
    byId(id: number) {
        return this.find((building) => building._id === id);
    }

    byType(type: Common.BuildingType) {
        return new BuildingsList(this.filter((building) => building.data.type === type));
    }
}