import { z } from 'zod';
import { BuildingTypeEnumSchema } from './enums';

export const StructureSchema = z.object({
    id: z.string(),
    type: BuildingTypeEnumSchema,
    tags: z.array(z.string()).optional()
});

export type StructureType = z.infer<typeof StructureSchema>;
