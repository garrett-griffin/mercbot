import { z } from 'zod';

export const ItemTradeSchema = z.object({
    direction: z.string(),
    expected_balance: z.number(),
    operation: z.string(),
    price: z.number(),
    volume: z.number()
});

export type ItemTradeType = z.infer<typeof ItemTradeSchema>;
