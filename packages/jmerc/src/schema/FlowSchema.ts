import { z } from 'zod';

export const FlowSchema = z.object({
    consumption: z.number().optional().default(0.0),
    expiration: z.number().optional().default(0.0),
    export: z.number().optional(),
    imported: z.number().optional().nullable().default(null).describe('import'),
    production: z.number().optional().default(0.0),
    production_cost: z.number().optional().default(0.0),
    purchase: z.number().optional(),
    purchase_cost: z.number().optional().default(0.0),
    resident: z.number().optional(),
    sale: z.number().optional(),
    sale_value: z.number().optional().default(0.0),
    shortfall: z.number().optional().default(0.0)
});

export type FlowType = z.infer<typeof FlowSchema>;
