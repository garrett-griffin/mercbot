import { z } from 'zod';

export const ManagerSchema = z.object({
    buy_price: z.number().optional(),
    buy_volume: z.number().optional(),
    capacity: z.number().optional(),
    max_holding: z.number().optional(),
    sell_price: z.number().optional(),
    sell_volume: z.number().optional()
});

export type ManagerType = z.infer<typeof ManagerSchema>;
