import { z } from 'zod';
import { SiteSchema } from './site';
import { GameAccountSchema } from "./gameAccount"

export const SeasonSchema = z.object({
    pk: z.number().int(),
    number: z.number().int(),
    siteId: z.number().int(),
    site: SiteSchema,
    gameAccounts: z.array(GameAccountSchema), // adjust this based on your `GameAccount` schema
    turns: z.array(z.unknown()).optional(), // adjust this based on your `Turn` schema
    Region: z.array(z.unknown()).optional(), // adjust this based on your `Region` schema
});

export type SeasonType = z.infer<typeof SeasonSchema>;