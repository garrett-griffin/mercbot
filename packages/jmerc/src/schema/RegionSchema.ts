import { z } from 'zod';
import { LocationSchema } from './LocationSchema';

export const RegionSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    name: z.string(),
    description: z.string().optional(),
    center: LocationSchema.optional(),
    size: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional()
});

export type RegionType = z.infer<typeof RegionSchema>;
