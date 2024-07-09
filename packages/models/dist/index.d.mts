import { z } from 'zod';

declare const ActionSchema: any;
type ActionType = z.infer<typeof ActionSchema>;

declare const GameAccountSchema: any;
type GameAccountType = z.infer<typeof GameAccountSchema>;

declare const LocationSchema: any;
type LocationType = z.infer<typeof LocationSchema>;

declare const PlayerSchema: any;
type PlayerType = z.infer<typeof PlayerSchema>;

declare const RecurringActionSchema: any;
type RecurringActionType = z.infer<typeof RecurringActionSchema>;

declare const RegionSchema: any;
type RegionType = z.infer<typeof RegionSchema>;

declare const SeasonSchema: any;
type SeasonType = z.infer<typeof SeasonSchema>;

declare const SiteSchema: any;
type SiteType = z.infer<typeof SiteSchema>;

declare const TownSchema: any;
type TownType = z.infer<typeof TownSchema>;

declare const TownDataSchema: any;
type TownDataType = z.infer<typeof TownDataSchema>;

declare const TurnSchema: any;
type TurnType = z.infer<typeof TurnSchema>;

declare const UserSchema: z.ZodObject<{
    pk: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodNumber>;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodString>;
    lockedOut: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    pk?: number;
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    lockedOut?: boolean;
}, {
    pk?: number;
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    lockedOut?: boolean;
}>;
type UserType = z.infer<typeof UserSchema>;

export { ActionSchema, type ActionType, GameAccountSchema, type GameAccountType, LocationSchema, type LocationType, PlayerSchema, type PlayerType, RecurringActionSchema, type RecurringActionType, RegionSchema, type RegionType, SeasonSchema, type SeasonType, SiteSchema, type SiteType, TownDataSchema, type TownDataType, TownSchema, type TownType, TurnSchema, type TurnType, UserSchema, type UserType };
