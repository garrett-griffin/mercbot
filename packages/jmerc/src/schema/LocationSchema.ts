import { z } from 'zod';

export const LocationSchema = z.object({
    x: z.number(),
    y: z.number()
});

export type LocationType = z.infer<typeof LocationSchema>;
