import { z } from 'zod';
import { LocationSchema } from './LocationSchema';


export const TownSchema = z.object({
    id: z.string(),
    name: z.string(),
    location: LocationSchema,
    region: z.number(),
    capital: z.boolean().default(false)
});

export type TownType = z.infer<typeof TownSchema>;
