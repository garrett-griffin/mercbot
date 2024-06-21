import { z } from 'zod';
import { TownDemandSchema } from './TownDemandSchema';
import { TownGovernmentTaxesSchema } from './TownGovernmentTaxesSchema';


export const TownGovernmentSchema = z.object({
    account_id: z.string(),
    demands: z.array(TownDemandSchema),
    taxes_collected: TownGovernmentTaxesSchema
});

export type TownGovernmentType = z.infer<typeof TownGovernmentSchema>;
