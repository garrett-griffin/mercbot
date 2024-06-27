import { BaseModel } from './baseModel';
import { PlayerSchema, PlayerType } from '../schema/PlayerSchema';
import { HouseholdSchema, HouseholdType } from '../schema/HouseholdSchema';
import { PrestigeImpactSchema, PrestigeImpactType } from '../schema/PrestigeImpactSchema';
import { WorkerSchema, WorkerType } from '../schema/WorkerSchema';
import { SustenanceSchema, SustenanceType } from '../schema/SustenanceSchema';
import { SettingsSchema, SettingsType } from '../schema/SettingsSchema';
import { NotificationSettingsSchema, NotificationSettingsType } from '../schema/NotificationSettingsSchema';
import {SkillEnumType} from "../schema/enums/SkillEnumSchema";
import {Inventory} from "./inventory";

export class Player extends BaseModel implements PlayerType {
    static schema = PlayerSchema;

    username: string;
    household: Household;
    discord_id: string | null;
    settings: Settings;
    active: boolean;
}

export class Household extends BaseModel implements HouseholdType {
    static schema = HouseholdSchema;

    id: string;
    name: string;
    town_id: number;
    portrait: string;
    gender: string;
    account_id: string;
    business_ids: string[];
    prestige: number;
    prestige_impacts: PrestigeImpact[] | null;
    workers: Worker[];
    operations: string[];
    caps: Record<string, number>;
    sustenance: Sustenance;
}

export class PrestigeImpact extends BaseModel implements PrestigeImpactType {
    static schema = PrestigeImpactSchema;

    factor: string;
    impact: number;
}

export class Worker extends BaseModel implements WorkerType {
    static schema = WorkerSchema;

    assignment: string;
    capacity: number;
    name: string;
    skills: Record<SkillEnumType, number>;
}

export class Sustenance extends BaseModel implements SustenanceType {
    static schema = SustenanceSchema;

    reference: string;
    inventory: Inventory;
    provider_id: string | null;
}

export class Settings extends BaseModel implements SettingsType {
    static schema = SettingsSchema;

    sound_volume: number;
    notifications: NotificationSettings;
    commoners_splash: boolean;
    construction_splash: boolean;
    land_purchase_splash: boolean;
    operations_splash: boolean;
    production_splash: boolean;
    recipes_splash: boolean;
    sustenance_splash: boolean;
    trading_splash: boolean;
    trade_config_splash: boolean;
    welcome_splash: boolean;
    first_building_splash: boolean;
    warehouse_splash: boolean;
}

export class NotificationSettings extends BaseModel implements NotificationSettingsType {
    static schema = NotificationSettingsSchema;

    discord: boolean;
    mutes: string[] | null;
}