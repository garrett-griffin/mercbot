import { z } from 'zod';
import { ItemEnumSchema } from './enums';


export const TownDemandSchema = z.object({
    product: ItemEnumSchema,
    bonus: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).default(String(0.0)),
    desire: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).default(String(0.0)),
    request: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).default(String(0.0)),
    result: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).default(String(0.0))
});

export type TownDemandType = z.infer<typeof TownDemandSchema>;
