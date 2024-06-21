import { z } from 'zod';

export const ItemTradeSettlementSchema = z.object({
    volume: z.number(),
    price: z.number()
});

export type ItemTradeSettlementType = z.infer<typeof ItemTradeSettlementSchema>;
