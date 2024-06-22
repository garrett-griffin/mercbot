import { z } from 'zod';
import { StructureSchema } from './StructureSchema';


export const TileSchema = z.object({
    owner_id: z.string().optional(),
    structure: StructureSchema.optional(),
    ask_price: z.string().optional()
});

export type TileType = z.infer<typeof TileSchema>;
