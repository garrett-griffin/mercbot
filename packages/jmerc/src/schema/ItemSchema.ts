import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { ItemTypeEnumSchema } from './enums/ItemTypeEnumSchema';
import { SkillEnumSchema } from './enums/SkillEnumSchema';
import { ItemPriceSchema } from './ItemPriceSchema';

export const ItemSchema = z.object({
    name: ItemEnumSchema,
    type: ItemTypeEnumSchema,
    unit: z.string(),
    weight: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    tier: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    classes: z.array(SkillEnumSchema).optional().default([]),
    price: ItemPriceSchema
});

export type ItemType = z.infer<typeof ItemSchema>;
