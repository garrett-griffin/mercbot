import { z } from 'zod';

export const TileRequirementSchema = z.object({
    min: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    max: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional()
});

export type TileRequirementType = z.infer<typeof TileRequirementSchema>;
