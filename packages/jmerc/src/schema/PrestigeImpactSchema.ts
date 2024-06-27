import { z } from 'zod';


export const PrestigeImpactSchema = z.object({
    factor: z.string(),
    impact: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
});

export type PrestigeImpactType = z.infer<typeof PrestigeImpactSchema>;
