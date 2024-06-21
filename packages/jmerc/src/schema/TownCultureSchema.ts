import { z } from 'zod';

export const TownCultureSchema = z.object({
    special_market_pressure: z.record(z.number(), z.number()).optional()
});

export type TownCultureType = z.infer<typeof TownCultureSchema>;
