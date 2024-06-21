import { z } from 'zod';
import { TransportTypeEnumSchema } from './enums/TransportTypeEnumSchema';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const TransportTypeSchema = z.object({
    type: TransportTypeEnumSchema,
    category: z.number(),
    tier: z.number(),
    capacity: z.number(),
    speed: z.number(),
    journey_duration: z.number().optional(),
    effective_days: z.number().optional(),
    operating_costs: z.record(ItemEnumSchema, z.number()),
    catches: z.string().optional(),
    fishing_range: z.number().optional()
});

export type TransportTypeType = z.infer<typeof TransportTypeSchema>;
