import { z } from 'zod';
import { InventorySchema } from './InventorySchema';
import { OperationSchema } from './OperationSchema';
import { RecipeEnumSchema } from './enums/RecipeEnumSchema';

export const ProducerSchema = z.object({
    inventory: InventorySchema,
    limited: z.boolean(),
    manager: z.string(),
    previous_operation: OperationSchema,
    provider_id: z.number().optional(),
    recipe: RecipeEnumSchema,
    reference: z.string(),
    target: z.number().optional()
});

export type ProducerType = z.infer<typeof ProducerSchema>;
