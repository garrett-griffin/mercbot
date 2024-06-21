import { z } from 'zod';
import { TownDemandSchema } from './TownDemandSchema';


export const TownDemandCategorySchema = z.object({
    name: z.string(),
    products: z.array(TownDemandSchema)
});

export type TownDemandCategoryType = z.infer<typeof TownDemandCategorySchema>;
