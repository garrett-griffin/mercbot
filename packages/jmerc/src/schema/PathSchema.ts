import { z } from 'zod';

export const PathSchema = z.object({
    x: z.number(),
    y: z.number(),
    c: z.number()
});

export type PathType = z.infer<typeof PathSchema>;
