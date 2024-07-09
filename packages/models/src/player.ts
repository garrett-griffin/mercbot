import { z } from 'zod';
import { GameAccountSchema } from './gameAccount'

export const PlayerSchema = z.object({
    pk: z.number().int(),
    username: z.string(),
    householdId: z.number().int(),
    household: z.unknown().optional(),  // Assumes you have a Household Zod schema
    discordId: z.string().optional(),
    active: z.boolean(),
    gameAccountId: z.number().int(),
    gameAccount: GameAccountSchema,  // Assumes you have a GameAccount Zod schema
    settings: z.array(z.unknown()),  // Adjust this when you have a Settings schema
    accounts: z.array(z.unknown()),  // Adjust this when you have an Account schema
    buildings: z.array(z.unknown()),  // Adjust this when you have a Building schema
    businesses: z.array(z.unknown()),  // Adjust this when you have a Business schema
});

export type PlayerType = z.infer<typeof PlayerSchema>;