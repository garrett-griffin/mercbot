import { z } from 'zod';

export const ItemTradeSettlementSchema = z.object({
    volume: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    price: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])
});

export type ItemTradeSettlementType = z.infer<typeof ItemTradeSettlementSchema>;
