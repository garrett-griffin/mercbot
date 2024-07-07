// noinspection DuplicatedCode

import { z } from 'zod';

export const TownCultureSchema = z.object({
    special_market_pressure: z.record(z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]), z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])).optional()
});

export type TownCultureType = z.infer<typeof TownCultureSchema>;
