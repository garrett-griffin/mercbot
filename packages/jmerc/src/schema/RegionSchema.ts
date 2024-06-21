import { z } from 'zod';
import { LocationSchema } from './LocationSchema';

export const RegionSchema = z.object({
    id: z.number(), // Adjust type as necessary, e.g., z.string() or z.number()
    name: z.string(),
    description: z.string().optional(),
    center: LocationSchema.optional(),
    size: z.number().optional()
});

export type RegionType = z.infer<typeof RegionSchema>;
