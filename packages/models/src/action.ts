import { z } from 'zod';
import { GameAccountSchema } from './gameAccount'
import { TurnSchema } from './turn';
import { RecurringActionSchema } from './recurringAction'

export const ActionSchema = z.object({
    pk: z.number().int(),
    type: z.string(),
    status: z.string().default("scheduled"),  // note: consider using a Zod enum if you have pre-defined statuses
    schedule: z.date(),
    gameAccountId: z.number().int(),
    GameAccount: GameAccountSchema,  // Assumes you have a GameAccount Zod schema
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date(),
    turnId: z.number().int(),
    turn: TurnSchema,  // Assumes you have a Turn Zod schema
    when: z.string().default("beginning"),
    recurringActionId: z.number().int(),
    RecurringAction: RecurringActionSchema  // Assumes you have a RecurringAction Zod schema
});

export type ActionType = z.infer<typeof ActionSchema>;