import { z } from 'zod';
import { BuildingUpgradeTypeEnumSchema } from './enums/BuildingUpgradeTypeEnumSchema';
import { BuildingConstructionSchema } from './BuildingConstructionSchema';

export const BuildingUpgradeSchema = z.object({
    type: BuildingUpgradeTypeEnumSchema,
    construction: BuildingConstructionSchema
});

export type BuildingUpgradeType = z.infer<typeof BuildingUpgradeSchema>;
