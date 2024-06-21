import { z } from 'zod';

export const MarketItemSchema = z.object({
    price: z.number().optional().default(0.0),
    last_price: z.number().optional().default(0.0),
    average_price: z.number().optional().default(0.0),
    moving_average: z.number().optional().default(0.0),
    highest_bid: z.number().optional().default(0.0),
    lowest_ask: z.number().optional().default(0.0),
    volume: z.number(),
    volume_prev_12: z.number().optional().default(0),
    bid_volume_10: z.number().optional().default(0),
    ask_volume_10: z.number().optional().default(0)
});

export type MarketItemType = z.infer<typeof MarketItemSchema>;
