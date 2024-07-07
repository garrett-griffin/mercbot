import { z } from 'zod';
import { InventorySchema } from './InventorySchema';
import { BuildingUpgradeTypeEnumSchema } from './enums';

export const BuildingConstructionEffortSchema = z.object({
    inventory: InventorySchema,
    progress: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    reference: z.string(),
    stage: z.string(),
    time: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    upgrade_type: BuildingUpgradeTypeEnumSchema.optional()
});

export type BuildingConstructionEffortType = z.infer<typeof BuildingConstructionEffortSchema>;
