import { z } from 'zod';
import { ItemTradeSettlementSchema } from './ItemTradeSettlementSchema';

export const ItemTradeResultSchema = z.object({
    settlements: z.array(ItemTradeSettlementSchema).optional(),
    order_id: z.number().optional(),
    embedded: z.record(z.string(), z.any()).optional().default({})
});

export type ItemTradeResultType = z.infer<typeof ItemTradeResultSchema>;
