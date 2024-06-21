import { z } from 'zod';
import { InventorySchema } from './InventorySchema';

export const TransportCargoSchema = z.object({
    reference: z.string(),
    inventory: InventorySchema.optional()
});

export type TransportCargoType = z.infer<typeof TransportCargoSchema>;
