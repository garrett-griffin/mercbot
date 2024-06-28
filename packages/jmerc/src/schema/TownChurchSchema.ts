import { z } from 'zod';

export const TownChurchSchema = z.object({
    project_ids: z.array(z.string()).optional().nullable()
});

export type TownChurchType = z.infer<typeof TownChurchSchema>;
