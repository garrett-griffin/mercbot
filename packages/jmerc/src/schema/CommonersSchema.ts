import { z } from 'zod';
import { TownDemandCategorySchema } from './TownDemandCategorySchema';

export const CommonersSchema = z.object({
    account_id: z.string(),
    count: z.number(),
    migration: z.number(),
    sustenance: z.array(TownDemandCategorySchema)
});

export type CommonersType = z.infer<typeof CommonersSchema>;
