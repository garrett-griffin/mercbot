// noinspection DuplicatedCode

import { z } from 'zod';

export const ItemOrderSchema = z.object({
    volume: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    price: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])
});

export type ItemOrderType = z.infer<typeof ItemOrderSchema>;
