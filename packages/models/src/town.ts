import { z } from 'zod';
import { LocationSchema } from './location'
import { TurnSchema } from './turn'
import { TownDataSchema } from './townData'

export const TownSchema = z.object({
    pk: z.number().int(),
    id: z.number(),
    name: z.string(),
    locationId: z.number().int(),
    location: LocationSchema,  // Assumes you have a Location Zod schema
    region: z.number(),
    capital: z.boolean().default(false),
    turnId: z.number().int(),
    turn: TurnSchema,   // Assumes you have a Turn Zod schema
    TownData: z.array(TownDataSchema),
});

export type TownType = z.infer<typeof TownSchema>;