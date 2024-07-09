import { z } from 'zod';
import { GameAccountSchema } from './gameAccount'
import { TurnSchema } from './turn'
import { ActionSchema } from './action'

export const RecurringActionSchema = z.object({
    pk: z.number().int(),
    type: z.string(),
    status: z.string().default("scheduled"),  // note: consider using a Zod enum if you have pre-defined statuses
    schedule: z.date(),
    gameAccountId: z.number().int(),
    GameAccount: GameAccountSchema,  // Assumes you have a GameAccount Zod schema
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date(),
    startTurnId: z.number().int(),
    Turn: TurnSchema,  // Assumes you have a Turn Zod schema
    when: z.string().default("beginning"),
    numTurns: z.number().int().optional(),
    interval: z.number().int(),
    Action: z.array(ActionSchema)  // Assumes you have an Action Zod schema
});

export type RecurringActionType = z.infer<typeof RecurringActionSchema>;