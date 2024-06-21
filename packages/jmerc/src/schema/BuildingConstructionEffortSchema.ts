import { z } from 'zod';
import { InventorySchema } from './InventorySchema';
import { BuildingUpgradeTypeEnumSchema } from './enums/BuildingUpgradeTypeEnumSchema';

export const BuildingConstructionEffortSchema = z.object({
    inventory: InventorySchema,
    progress: z.number(),
    reference: z.string(),
    stage: z.string(),
    time: z.number().optional(),
    upgrade_type: BuildingUpgradeTypeEnumSchema.optional()
});

export type BuildingConstructionEffortType = z.infer<typeof BuildingConstructionEffortSchema>;
