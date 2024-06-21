import { z } from 'zod';
import { MarketItemSchema } from './MarketItemSchema';
import {ItemEnumSchema} from "./enums/ItemEnumSchema";

export const MarketSchema = z.object({
    markets: z.record(ItemEnumSchema, MarketItemSchema),
    ts: z.number().describe('_ts')
});

export type MarketType = z.infer<typeof MarketSchema>;
