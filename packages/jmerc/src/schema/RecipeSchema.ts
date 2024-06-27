import { z } from 'zod';
import { RecipeEnumSchema } from './enums/RecipeEnumSchema';
import { BuildingTypeEnumSchema } from './enums/BuildingTypeEnumSchema';
import { SkillEnumSchema } from './enums/SkillEnumSchema';
import { IngredientSchema } from './IngredientSchema';

export const RecipeSchema = z.object({
    name: RecipeEnumSchema,
    tier: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    building: BuildingTypeEnumSchema,
    size: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    product_class: SkillEnumSchema.optional().describe('class'),
    points: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    inputs: z.array(IngredientSchema).optional().default([]),
    outputs: z.array(IngredientSchema).optional().default([])
});

export type RecipeType = z.infer<typeof RecipeSchema>;
