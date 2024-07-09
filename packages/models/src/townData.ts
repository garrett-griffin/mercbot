import { z } from 'zod';
import { LocationSchema } from './location'
import { TurnSchema } from './turn'
import {TownSchema} from "./town";
import {RegionSchema} from "./region";

export const TownDataSchema = z.object({
    pk: z.number().int(),
    id: z.string(),
    name: z.string(),
    locationId: z.number().int(),
    location: LocationSchema,  // Assumes you have a Location Zod schema
    region: z.number().int(),
    centerIds: z.array(z.number()),
    householdIds: z.array(z.string()),
    commonersId: z.number().int(),
    commoners: z.unknown(),  // Assumes you have a Commoners Zod schema
    governmentId: z.number().int(),
    government: z.unknown(),  // Assumes you have a TownGovernment Zod schema
    churchId: z.number().int(),
    church: z.unknown(),  // Assumes you have a TownChurch Zod schema
    navigationZones: z.any(),  // Update to appropriate type
    cultureId: z.number().int(),
    culture: z.unknown(),  // Assumes you have a TownCulture Zod schema
    domain: z.array(z.unknown()),  // Assumes you have a TownDataDomain Zod schema
    turnId: z.number().int(),
    turn: TurnSchema,   // Assumes you have a Turn Zod schema
    townId: z.number().int(),
    Town: TownSchema,
    RegionRef: RegionSchema
});

export type TownDataType = z.infer<typeof TownDataSchema>;