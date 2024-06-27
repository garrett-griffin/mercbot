import { z } from 'zod';
import { MarketItemSchema } from './MarketItemSchema';
import {ItemEnumSchema} from "./enums/ItemEnumSchema";

export const MarketSchema = z.object({
    markets: z.record(ItemEnumSchema, MarketItemSchema),
    ts: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).describe('_ts')
});

export type MarketType = z.infer<typeof MarketSchema>;
