import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { AccountAssetSchema } from './AccountAssetSchema';

export const AccountSchema = z.object({
    assets: z.map(ItemEnumSchema, AccountAssetSchema),
    id: z.string(),
    master_id: z.string().optional(),
    name: z.string().optional(),
    owner_id: z.number(),
    sponsor_id: z.string().optional()
});

export type AccountType = z.infer<typeof AccountSchema>;
