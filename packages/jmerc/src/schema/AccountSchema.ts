import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { AccountAssetSchema } from './AccountAssetSchema';

export const AccountSchema = z.object({
    assets: z.object({}).transform(obj => new Map(Object.entries(obj))).transform(map => z.map(ItemEnumSchema, AccountAssetSchema).parse(map)),
    id: z.string(),
    master_id: z.string().optional(),
    name: z.string().optional(),
    owner_id: z.string(),
    sponsor_id: z.string().optional()
});

export type AccountType = z.infer<typeof AccountSchema>;
