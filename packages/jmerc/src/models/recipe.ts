import { BaseModel } from './baseModel';
import { RecipeSchema, RecipeType } from '../schema/RecipeSchema';
import { IngredientSchema, IngredientType } from '../schema/IngredientSchema';
import {RecipeEnumType} from "../schema/enums/RecipeEnumSchema";
import {BuildingTypeEnumType} from "../schema/enums/BuildingTypeEnumSchema";
import {SkillEnumType} from "../schema/enums/SkillEnumSchema";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";

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
}

export class Ingredient extends BaseModel implements IngredientType {
    static schema = IngredientSchema;

    product: ItemEnumType;
    amount: number;
}