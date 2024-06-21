import { z } from 'zod';

export const ItemPriceSchema = z.object({
    low: z.number().optional(),
    typical: z.number(),
    high: z.number().optional()
});

export type ItemPriceType = z.infer<typeof ItemPriceSchema>;
