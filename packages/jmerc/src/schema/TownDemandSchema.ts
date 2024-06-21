import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';


export const TownDemandSchema = z.object({
    product: ItemEnumSchema,
    bonus: z.number().default(0.0),
    desire: z.number().default(0.0),
    request: z.number().default(0.0),
    result: z.number().default(0.0)
});

export type TownDemandType = z.infer<typeof TownDemandSchema>;
