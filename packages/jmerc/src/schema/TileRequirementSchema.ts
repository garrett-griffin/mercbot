import { z } from 'zod';

export const TileRequirementSchema = z.object({
    min: z.number().optional(),
    max: z.number().optional()
});

export type TileRequirementType = z.infer<typeof TileRequirementSchema>;
