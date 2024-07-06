import { BaseModel } from './baseModel';
import { RecipeSchema, RecipeType } from '../schema';
import { IngredientSchema, IngredientType } from '../schema';
import { RecipeEnumType } from "../schema/enums";
import { BuildingTypeEnumType } from "../schema/enums";
import { SkillEnumType } from "../schema/enums";
import { ItemEnumType } from "../schema/enums";

/**
 * Represents a recipe for producing items with associated details.
 */
export class Recipe extends BaseModel implements RecipeType {
    static schema = RecipeSchema;

    name: RecipeEnumType;
    tier: number;
    building: BuildingTypeEnumType;
    size: number;
    product_class: SkillEnumType | null;
    points: number | null;
    inputs: Ingredient[];
    outputs: Ingredient[];

    /**
     * Creates an instance of Recipe.
     * @param data - The data to initialize the recipe.
     */
    constructor(data: RecipeType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.inputs = this.inputs.map(input => Ingredient.build(input));
        this.outputs = this.outputs.map(output => Ingredient.build(output));
    }
}

/**
 * Represents an ingredient used in a recipe.
 */
export class Ingredient extends BaseModel implements IngredientType {
    static schema = IngredientSchema;

    product: ItemEnumType;
    amount: number;

    /**
     * Creates an instance of Ingredient.
     * @param data - The data to initialize the ingredient.
     */
    constructor(data: IngredientType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
