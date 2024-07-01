// Import necessary types and classes
import { BuildingOperation as BuildingOperationModel } from "../models/building";
import Client from "../client";
import {Player} from "./player";
import {Building} from "./building";
import {Flow} from "../models";
import {ItemEnumType} from "../schema/enums";
import {BuildingTypeEnumType} from "../schema/enums";
import { Operation as OperationModel } from "../models/operation";
import {Ingredient} from "../models";
import {Recipe} from "./recipe";

// Define the BuildingOperation class
export class BuildingOperation {
    data: BuildingOperationModel;
    operations: OperationsList;
    _client: Client
    player: Player;
    buildingId: number;

    constructor(client: Client, player: Player, buildingId: number) {
        this._client = client;
        this.player = player;
        this.buildingId = buildingId;
    }

    async load(): Promise<void> {
        this.data = await this._client.buildingsApi.getOperations(this.buildingId);
        if (this.data && this.data.operations) {
            console.log(JSON.stringify(this.data.total_flow));
            this.operations = new OperationsList(
                ...(await Promise.all(
                    this.data.operations.map((operation) => {
                        return this._client.getOperation(this.player, this, operation);
                    })
                ))
            );
        } else {
            this.operations = new OperationsList();
        }
    }

    get building(): Building | undefined {
        return this.player.buildings.byId(this.buildingId);
    }

    get totalFlow(): Map<ItemEnumType, Flow> | null {
        return new Map(Object.entries(this.data.total_flow).map(([key, value]) => [key as ItemEnumType, value]));
    }
}

// Define the BuildingOperationList class
export class BuildingOperationList extends Array<BuildingOperation> {
    byBuildingId(buildingId: number): BuildingOperation {
        return this.find((o) => o.buildingId === buildingId);
    }

    byItemInput(item: ItemEnumType): OperationsList {
        return new OperationsList(
            ...this.flatMap((buildingOperation) =>
                buildingOperation.operations.filter((operation) =>
                    operation.recipe && item in operation.recipe.inputs
                )
            )
        );
    }

    byItemOutput(item: ItemEnumType): OperationsList {
        return new OperationsList(
            ...this.flatMap((buildingOperation) =>
                buildingOperation.operations.filter((operation) =>
                    operation.recipe && item in operation.recipe.outputs
                )
            )
        );
    }
}

// Define the BuildingOperationsDict class
export class BuildingOperationsDict extends Map<number, BuildingOperation> {
    byBuildingType(buildingType: BuildingTypeEnumType): OperationsList {
        return new OperationsList(
            ...Array.from(this.values()).flatMap((buildingOperation) =>
                buildingOperation.operations.filter((operation) =>
                    operation.building && operation.building.type === buildingType
                )
            )
        );
    }

    byItemInput(item: ItemEnumType): OperationsList {
        return new OperationsList(
            ...Array.from(this.values()).flatMap((buildingOperation) =>
                buildingOperation.operations.filter((operation) =>
                    operation.recipe && item in operation.recipe.inputs
                )
            )
        );
    }

    byItemOutput(item: ItemEnumType): OperationsList {
        return new OperationsList(
            ...Array.from(this.values()).flatMap((buildingOperation) =>
                buildingOperation.operations.filter((operation) =>
                    operation.recipe && item in operation.recipe.outputs
                )
            )
        );
    }
}

// Define the Operation class
export class Operation {
    data: OperationModel;
    recipe: Recipe | null;
    _client: Client;
    player: Player;
    buildingOperation: BuildingOperation;

    constructor(
        client: Client,
        player: Player,
        buildingOperation: BuildingOperation,
        data: OperationModel
    ) {
        this._client = client;
        this.player = player;
        this.buildingOperation = buildingOperation;
        this.data = data;
    }

    async load(): Promise<void> {
        const recipes = await this._client.staticApi.getRecipes();
        for (const recipe of recipes) {
            if (recipe.name === this.data.recipe) {
                this.recipe = await this._client.getRecipe({ recipe });
                break;
            }
        }
    }

    get building(): Building | undefined {
        return this.player.buildings.byId(this.buildingId);
    }

    get buildingId(): number {
        return parseInt(this.data.reference.split('/')[1]);
    }

    get inputs(): Map<ItemEnumType, number> {
        if (!this.recipe) {
            return new Map();
        }
        const inputs = new Map();
        for (const ingredient of Object.values(this.recipe.inputs) as Ingredient[]) {
            inputs.set(ingredient.product, ingredient.amount * this.data.target);
        }
        return inputs;
    }

    get outputs(): Map<ItemEnumType, number> {
        if (!this.recipe) {
            return new Map();
        }
        const outputs = new Map();
        for (const ingredient of Object.values(this.recipe.outputs) as Ingredient[]) {
            outputs.set(ingredient.product, ingredient.amount * this.data.target);
        }
        return outputs;
    }
}

// Define the OperationsList class
export class OperationsList extends Array<Operation> {
    get inputs(): Map<ItemEnumType, number> {
        const inputs = new Map();
        this.forEach((operation) => {
            operation.inputs.forEach((amount, item) => {
                inputs.set(item, (inputs.get(item) || 0) + amount);
            });
        });
        return inputs;
    }

    get outputs(): Map<ItemEnumType, number> {
        const outputs = new Map();
        this.forEach((operation) => {
            operation.outputs.forEach((amount, item) => {
                outputs.set(item, (outputs.get(item) || 0) + amount);
            });
        });
        return outputs;
    }

    byBuildingId(buildingId: number): OperationsList {
        return new OperationsList(
            ...this.filter((operation) => operation.buildingId === buildingId)
        );
    }
}