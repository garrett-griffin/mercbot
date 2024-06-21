import { z } from 'zod';

export const NotificationSettingsSchema = z.object({
    discord: z.boolean(),
    mutes: z.array(z.string()).optional().default([]),
});

export type NotificationSettingsType = z.infer<typeof NotificationSettingsSchema>;