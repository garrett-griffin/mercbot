import { z } from 'zod';
import { NotificationSettingsSchema } from './NotificationSettingsSchema';

export const SettingsSchema = z.object({
    sound_volume: z.number(),
    notifications: NotificationSettingsSchema,
    commoners_splash: z.boolean(),
    construction_splash: z.boolean(),
    land_purchase_splash: z.boolean(),
    operations_splash: z.boolean(),
    production_splash: z.boolean(),
    recipes_splash: z.boolean(),
    sustenance_splash: z.boolean(),
    trading_splash: z.boolean(),
    trade_config_splash: z.boolean(),
    welcome_splash: z.boolean(),
    first_building_splash: z.boolean(),
    warehouse_splash: z.boolean(),
});

export type SettingsType = z.infer<typeof SettingsSchema>;