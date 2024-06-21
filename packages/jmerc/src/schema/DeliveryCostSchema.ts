import { z } from 'zod';

export const DeliveryCostSchema = z.object({
    land_distance: z.number(),
    ferry_fee: z.number().optional()
});

export type DeliveryCostType = z.infer<typeof DeliveryCostSchema>;
