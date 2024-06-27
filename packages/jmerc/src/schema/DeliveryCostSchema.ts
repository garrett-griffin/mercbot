import { z } from 'zod';

export const DeliveryCostSchema = z.object({
    land_distance: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    ferry_fee: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional()
});

export type DeliveryCostType = z.infer<typeof DeliveryCostSchema>;
