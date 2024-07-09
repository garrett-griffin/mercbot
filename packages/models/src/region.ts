import { z } from 'zod';
import { LocationSchema } from './location'
import { SeasonSchema } from './season'
import {TownDataSchema} from "./townData";

export const RegionSchema = z.object({
    pk: z.number().int(),
    id: z.number(),
    name: z.string(),
    description: z.string().optional(),
    centerId: z.number().int().optional(),
    center: LocationSchema.optional(),  // Assumes you have a Location Zod schema
    size: z.number().optional(),
    seasonId: z.number().int(),
    season: SeasonSchema,   // Assumes you have a Season Zod schema
    TownData: TownDataSchema
});

export type RegionType = z.infer<typeof RegionSchema>;