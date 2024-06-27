import { z } from 'zod';
import { BuildingTypeEnumSchema } from './enums/BuildingTypeEnumSchema';

export const BusinessBuildingSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    type: BuildingTypeEnumSchema
});

export type BusinessBuildingType = z.infer<typeof BusinessBuildingSchema>;
