import { z } from 'zod';
import { UserSchema as UserSchema } from './user';
import { SeasonSchema as SeasonSchema } from './season'
import {ActionSchema} from "./action";
import {RecurringActionSchema} from "./recurringAction";
import {PlayerSchema} from "./player";

export const GameAccountSchema = z.object({
    pk: z.number().int(),
    apiUser: z.string(),
    apiToken: z.string(),
    userId: z.number().int(),
    user: UserSchema,  // should be the Zod schema for User
    seasonId: z.number().int(),
    season: SeasonSchema,  // should be the Zod schema for Season
    players: z.array(PlayerSchema), // replace with the Zod schema for Player
    Action: z.array(ActionSchema), // replace with the Zod schema for Action
    RecurringAction: z.array(RecurringActionSchema), // replace with the Zod schema for RecurringAction
});

export type GameAccountType = z.infer<typeof GameAccountSchema>;