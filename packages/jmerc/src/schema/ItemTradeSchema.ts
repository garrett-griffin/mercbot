import { z } from 'zod';

export const ItemTradeSchema = z.object({
    direction: z.string(),
    expected_balance: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    operation: z.string(),
    price: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    volume: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])
});

export type ItemTradeType = z.infer<typeof ItemTradeSchema>;
