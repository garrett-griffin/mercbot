import { z } from 'zod';
import { HouseholdSchema } from './HouseholdSchema';
import { SettingsSchema } from './SettingsSchema';

export const PlayerSchema = z.object({
    username: z.string(),
    household: HouseholdSchema,
    discord_id: z.string().optional(),
    settings: SettingsSchema,
    active: z.boolean()
});

export type PlayerType = z.infer<typeof PlayerSchema>;
