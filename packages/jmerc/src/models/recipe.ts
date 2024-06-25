import { BaseModel } from './BaseModel';
import { RecipeSchema, RecipeType } from '../schema/RecipeSchema';
import { IngredientSchema, IngredientType } from '../schema/IngredientSchema';

export class Recipe extends BaseModel implements RecipeType {
    static schema = RecipeSchema;
}

export class Ingredient extends BaseModel implements IngredientType {
    static schema = IngredientSchema;
}