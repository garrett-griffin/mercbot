import { z } from 'zod';
import { AccountSchema } from './AccountSchema';
import { BuildingSchema } from './BuildingSchema';

export const BusinessSchema = z.object({
    account: AccountSchema,
    account_id: z.string(),
    building_ids: z.array(z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])).optional(),
    buildings: z.array(BuildingSchema).optional(),
    contract_ids: z.array(z.string()).optional().nullable(),
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    name: z.string(),
    owner_id: z.string(),
    transport_ids: z.array(z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])).optional().nullable()
});

export type BusinessType = z.infer<typeof BusinessSchema>;
