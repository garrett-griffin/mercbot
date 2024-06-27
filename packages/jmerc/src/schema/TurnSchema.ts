import { z } from 'zod';

export const TurnSchema = z.object({
    turn: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    month: z.string().optional(),
    year: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional()
});

export type TurnType = z.infer<typeof TurnSchema>;
