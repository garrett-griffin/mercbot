import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const BuildingConstructionSchema = z.object({
    range: z.number().optional(),
    size: z.number().optional(),
    discount: z.number().optional(),
    time: z.number(),
    materials: z.record(ItemEnumSchema, z.number())
});

export type BuildingConstructionType = z.infer<typeof BuildingConstructionSchema>;
