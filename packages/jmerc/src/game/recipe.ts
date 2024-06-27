import Client from "../client";
import {Ingredient, Recipe as RecipeModel} from "../models/recipe";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {ItemEnum} from "../models/enums/itemEnum";
import {AccountAsset} from "../models/account";
import {Manager} from "../models/manager";
import {RecipeEnumType} from "../schema/enums/RecipeEnumSchema";

export class Recipe {
    name: string;
    data: RecipeModel;
    _client: Client;

    constructor(options: {
        client: Client;
        recipe?: RecipeModel;
        recipeName?: RecipeEnumType;
    }) {
        this._client = options.client;
        if (options.recipe) {
            this.data = options.recipe;
        }
        if (options.recipeName) {
            this.name = options.recipeName;
        }
    }

    async load(): Promise<void> {
        if(!this.data && this.name) {
            const recipes = await this._client.staticApi.getRecipes();
            for (const recipe of recipes) {
                if (recipe.name === this.name) {
                    this.data = recipe;
                    break;
                }
            }
        }
    }

    get inputs(): Map<ItemEnumType, Ingredient> {
        const inputsMap = new Map<ItemEnumType, Ingredient>();
        for (const ingredient of this.data.inputs) {
            inputsMap.set(ingredient.product, ingredient);
        }
        return inputsMap;
    }

    get outputs(): Map<ItemEnumType, Ingredient> {
        const outputsMap = new Map<ItemEnumType, Ingredient>();
        for (const ingredient of this.data.outputs) {
            outputsMap.set(ingredient.product, ingredient);
        }
        return outputsMap;
    }

    get labour(): number {
        for (const inputIngredient of this.data.inputs) {
            if (inputIngredient.product === ItemEnum.Labour) {
                return inputIngredient.amount;
            }
        }
        return 0.0;
    }

    calculateTargetLabor(
        target: number,
        inventoryAssets: { [key: string]: AccountAsset } = {},
        inventoryManagers: { [key: string]: Manager } = {}
    ): number {
        for (const inputIngredient of this.data.inputs) {
            if (inputIngredient.product === ItemEnum.Labour) {
                continue;
            }
            const requiredAmount = inputIngredient.amount * target;
            let availableAmount = 0;

            const asset = inventoryAssets[inputIngredient.product];
            if (asset) {
                const manager = inventoryManagers[inputIngredient.product];
                const buyVolume = manager ? manager.buyVolume : 0;
                const capacity = asset.capacity || asset.balance + buyVolume;
                availableAmount = Math.min(asset.balance - asset.reserved + buyVolume, capacity);
            }

            if (requiredAmount > availableAmount) {
                target = Math.min(target, availableAmount / inputIngredient.amount);
            }
        }

        return this.labour * target;
    }
}