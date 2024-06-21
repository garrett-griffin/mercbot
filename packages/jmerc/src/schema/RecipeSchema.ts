import { z } from 'zod';
import { RecipeEnumSchema } from './enums/RecipeEnumSchema';
import { BuildingTypeEnumSchema } from './enums/BuildingTypeEnumSchema';
import { SkillEnumSchema } from './enums/SkillEnumSchema';
import { IngredientSchema } from './IngredientSchema';

export const RecipeSchema = z.object({
    name: RecipeEnumSchema,
    tier: z.number(),
    building: BuildingTypeEnumSchema,
    size: z.number(),
    product_class: SkillEnumSchema.optional().describe('class'),
    points: z.number().optional(),
    inputs: z.array(IngredientSchema).optional().default([]),
    outputs: z.array(IngredientSchema).optional().default([])
});

export type RecipeType = z.infer<typeof RecipeSchema>;
