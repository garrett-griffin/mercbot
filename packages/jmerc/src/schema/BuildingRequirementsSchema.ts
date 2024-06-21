import { z } from 'zod';
import { TileRequirementSchema } from './TileRequirementSchema';
import { ClimateEnumSchema } from './enums/ClimateEnumSchema';

export const BuildingRequirementsSchema = z.object({
    fertility: TileRequirementSchema.optional(),
    forest: TileRequirementSchema.optional(),
    climate: ClimateEnumSchema.optional()
});

export type BuildingRequirementsType = z.infer<typeof BuildingRequirementsSchema>;
