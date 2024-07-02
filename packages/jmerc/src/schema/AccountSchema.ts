import { z } from 'zod';
import { ItemEnumSchema } from './enums';
import { AccountAssetSchema } from './AccountAssetSchema';

export const AccountSchema = z.object({
    assets: z.record(ItemEnumSchema, AccountAssetSchema.optional()),
    id: z.string(),
    master_id: z.string().optional(),
    name: z.string().optional(),
    owner_id: z.string(),
    sponsor_id: z.string().optional()
});

export type AccountType = z.infer<typeof AccountSchema>;
