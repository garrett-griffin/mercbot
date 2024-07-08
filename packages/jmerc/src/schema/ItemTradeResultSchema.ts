import { z } from 'zod';
import { ItemTradeSettlementSchema } from './ItemTradeSettlementSchema';

export const ItemTradeResultSchema = z.object({
    settlements: z.array(ItemTradeSettlementSchema).optional(),
    order_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    _embedded: z.record(z.string(), z.any()).optional().default({}),
    _embedded_patch: z.record(z.string(), z.any()).optional().default({})
});

export type ItemTradeResultType = z.infer<typeof ItemTradeResultSchema>;
