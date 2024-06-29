import { z } from 'zod';
import { ClimateEnumSchema } from './enums/ClimateEnumSchema';
import { ItemEnumSchema } from './enums/ItemEnumSchema';

export const BuildingRequirementSchema = z.object({
    center: z.boolean().optional().default(false),
    climate: ClimateEnumSchema.optional(),
    min: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    resource: ItemEnumSchema.optional()
});

export type BuildingRequirementType = z.infer<typeof BuildingRequirementSchema>;
