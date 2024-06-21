import { z } from 'zod';
import { AccountSchema } from './AccountSchema';
import { BuildingSchema } from './BuildingSchema';

export const BusinessSchema = z.object({
    account: AccountSchema,
    account_id: z.string(),
    building_ids: z.array(z.number()),
    buildings: z.array(BuildingSchema),
    contract_ids: z.array(z.string()).optional().nullable(),
    id: z.number(),
    name: z.string(),
    owner_id: z.number(),
    transport_ids: z.array(z.number()).optional().nullable()
});

export type BusinessType = z.infer<typeof BusinessSchema>;
