import { z } from 'zod';


export const TownGovernmentTaxesSchema = z.object({
    land_tax: z.number().optional().default(0.0),
    structure_tax: z.number().optional().default(0.0),
    ferry_fees: z.number().optional().default(0.0)
});

export type TownGovernmentTaxesType = z.infer<typeof TownGovernmentTaxesSchema>;
