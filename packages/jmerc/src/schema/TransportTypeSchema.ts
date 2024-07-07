import { z } from 'zod';
import { TransportTypeEnumSchema } from './enums';
import { ItemEnumSchema } from './enums';

export const TransportTypeSchema = z.object({
    type: TransportTypeEnumSchema,
    category: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    tier: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    speed: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    journey_duration: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    effective_days: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    operating_costs: z.record(ItemEnumSchema, z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])),
    catches: z.string().optional(),
    fishing_range: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional()
});

export type TransportTypeType = z.infer<typeof TransportTypeSchema>;
