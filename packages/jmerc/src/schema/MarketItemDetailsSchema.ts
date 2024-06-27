import { z } from 'zod';
import { MarketItemSchema } from './MarketItemSchema';
import { ItemOrderSchema } from './ItemOrderSchema';
import {ItemEnumSchema} from "./enums/ItemEnumSchema";

export const MarketItemDetailsSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    product: ItemEnumSchema,
    asset: ItemEnumSchema,
    currency: z.string(),
    bids: z.array(ItemOrderSchema),
    asks: z.array(ItemOrderSchema),
    data: MarketItemSchema
});

export type MarketItemDetailsType = z.infer<typeof MarketItemDetailsSchema>;
