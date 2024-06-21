import { z } from 'zod';

export const ItemOrderSchema = z.object({
    volume: z.number(),
    price: z.number()
});

export type ItemOrderType = z.infer<typeof ItemOrderSchema>;
