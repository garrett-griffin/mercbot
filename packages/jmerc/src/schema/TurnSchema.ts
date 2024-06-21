import { z } from 'zod';

export const TurnSchema = z.object({
    turn: z.number()
});

export type TurnType = z.infer<typeof TurnSchema>;
