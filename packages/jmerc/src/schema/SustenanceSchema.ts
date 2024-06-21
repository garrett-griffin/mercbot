import { z } from 'zod';
import { InventorySchema } from './InventorySchema';

export const SustenanceSchema = z.object({
    reference: z.string(),
    inventory: InventorySchema,
    provider_id: z.string().optional(),
});

export type SustenanceType = z.infer<typeof SustenanceSchema>;