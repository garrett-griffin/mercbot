import { z } from 'zod';


export const PrestigeImpactSchema = z.object({
    factor: z.string(),
    impact: z.number(),
});

export type PrestigeImpactType = z.infer<typeof PrestigeImpactSchema>;
