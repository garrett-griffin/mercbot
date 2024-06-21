import { z } from 'zod';
import { BuildingTypeEnumSchema } from './enums/BuildingTypeEnumSchema';
import { BuildingRequirementsSchema } from './BuildingRequirementsSchema';
import { BuildingConstructionSchema } from './BuildingConstructionSchema';
import { BuildingUpgradeSchema } from './BuildingUpgradeSchema';

export const BuildingTypeSchema = z.object({
    type: BuildingTypeEnumSchema,
    supports_boost: z.boolean().optional().default(false),
    requires: BuildingRequirementsSchema,
    construction: BuildingConstructionSchema.optional(),
    upgrades: z.array(BuildingUpgradeSchema).optional().default([])
});

export type BuildingTypeType = z.infer<typeof BuildingTypeSchema>;
