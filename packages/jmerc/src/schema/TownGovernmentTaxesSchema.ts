import { z } from 'zod';


export const TownGovernmentTaxesSchema = z.object({
    land_tax: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional().default(String(0.0)),
    structure_tax: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional().default(String(0.0)),
    ferry_fees: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional().default(String(0.0))
});

export type TownGovernmentTaxesType = z.infer<typeof TownGovernmentTaxesSchema>;
