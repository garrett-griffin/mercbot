import { z } from 'zod';
import { RegionSchema } from './region'
import { TownSchema } from './town'
import { TurnSchema } from './turn'
import {TownDataSchema} from "./townData";

export const LocationSchema = z.object({
    pk: z.number().int(),
    x: z.number(),
    y: z.number(),
    buildingLand: z.array(z.unknown()),  // Assumes you have a Building Zod schema
    buildingSublocation: z.unknown().optional(),
    regions: z.array(RegionSchema),  // Assumes you have a Region Zod schema
    towns: z.array(TownSchema),  // Assumes you have a Town Zod schema
    townDatas: z.array(TownDataSchema),  // Assumes you have a TownData Zod schema
    transports: z.array(z.unknown()),  // Assumes you have a Transport Zod schema
    turnId: z.number().int(),
    turn: TurnSchema   // Assumes you have a Turn Zod schema
});

export type LocationType = z.infer<typeof LocationSchema>;