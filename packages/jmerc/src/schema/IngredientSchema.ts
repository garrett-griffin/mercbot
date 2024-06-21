import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const IngredientSchema = z.object({
    product: ItemEnumSchema,
    amount: z.number()
});

export type IngredientType = z.infer<typeof IngredientSchema>;
