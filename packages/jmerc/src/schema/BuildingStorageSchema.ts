import { z } from 'zod';
import { InventorySchema } from './InventorySchema';

export const BuildingStorageSchema = z.object({
    inventory: InventorySchema,
    operations: z.array(z.string()),
    reference: z.string()
});

export type BuildingStorageType = z.infer<typeof BuildingStorageSchema>;
