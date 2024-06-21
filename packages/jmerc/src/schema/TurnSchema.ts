import { z } from 'zod';

export const TurnSchema = z.object({
    turn: z.number(),
    month: z.string().optional(),
    year: z.number().optional()
});

export type TurnType = z.infer<typeof TurnSchema>;
