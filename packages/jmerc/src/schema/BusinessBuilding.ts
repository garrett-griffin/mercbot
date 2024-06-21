import { z } from 'zod';
import { BuildingTypeEnumSchema } from './enums/BuildingTypeEnumSchema';

export const BusinessBuildingSchema = z.object({
    id: z.number(),
    type: BuildingTypeEnumSchema
});

export type BusinessBuildingType = z.infer<typeof BusinessBuildingSchema>;
