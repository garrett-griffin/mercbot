import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { ItemTypeEnumSchema } from './enums/ItemTypeEnumSchema';
import { SkillEnumSchema } from './enums/SkillEnumSchema';
import { ItemPriceSchema } from './ItemPriceSchema';

export const ItemSchema = z.object({
    name: ItemEnumSchema,
    type: ItemTypeEnumSchema,
    unit: z.string(),
    weight: z.number().optional(),
    tier: z.number(),
    classes: z.array(SkillEnumSchema).optional().default([]),
    price: ItemPriceSchema
});

export type ItemType = z.infer<typeof ItemSchema>;
