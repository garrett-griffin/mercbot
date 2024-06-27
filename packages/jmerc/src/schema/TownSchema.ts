import { z } from 'zod';
import { LocationSchema } from './LocationSchema';


export const TownSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    name: z.string(),
    location: LocationSchema,
    region: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    capital: z.boolean().default(false)
});

export type TownType = z.infer<typeof TownSchema>;
