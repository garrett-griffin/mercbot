import { z } from 'zod';
import { TownDemandCategorySchema } from './TownDemandCategorySchema';

export const CommonersSchema = z.object({
    account_id: z.string(),
    count: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    migration: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    sustenance: z.array(TownDemandCategorySchema)
});

export type CommonersType = z.infer<typeof CommonersSchema>;
