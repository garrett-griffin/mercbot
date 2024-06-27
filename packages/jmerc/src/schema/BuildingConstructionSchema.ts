import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const BuildingConstructionSchema = z.object({
    range: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    size: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    discount: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    time: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    materials: z.record(ItemEnumSchema, z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]))
});

export type BuildingConstructionType = z.infer<typeof BuildingConstructionSchema>;