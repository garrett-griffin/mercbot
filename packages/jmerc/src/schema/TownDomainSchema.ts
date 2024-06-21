import { z } from 'zod';
import { StructureSchema } from './StructureSchema';


export const TownDomainSchema = z.object({
    owner_id: z.string().optional(),
    structure: StructureSchema.optional(),
    ask_price: z.string().optional()
});

export type TownDomainType = z.infer<typeof TownDomainSchema>;
