// noinspection DuplicatedCode

import { z } from 'zod';

export const LocationSchema = z.object({
    x: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    y: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])
});

export type LocationType = z.infer<typeof LocationSchema>;
