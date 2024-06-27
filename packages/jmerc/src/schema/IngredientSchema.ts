import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const IngredientSchema = z.object({
    product: ItemEnumSchema,
    amount: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])
});

export type IngredientType = z.infer<typeof IngredientSchema>;
