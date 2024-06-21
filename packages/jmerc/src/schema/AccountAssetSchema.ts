import { z } from 'zod';

export const AccountAssetSchema = z.object({
    balance: z.number(),
    capacity: z.number().optional(),
    purchase: z.number().optional(),
    purchase_price: z.number().optional(),
    reserved: z.number(),
    reserved_capacity: z.number().optional(),
    sale: z.number().optional(),
    sale_price: z.number().optional(),
    unit_cost: z.number().optional()
});

export type InventoryAccountAssetType = z.infer<typeof AccountAssetSchema>;
