import { BaseModel } from './BaseModel';
import { PlayerSchema, PlayerType } from '../schema/PlayerSchema';
import { HouseholdSchema, HouseholdType } from '../schema/HouseholdSchema';
import { PrestigeImpactSchema, PrestigeImpactType } from '../schema/PrestigeImpactSchema';
import { WorkerSchema, WorkerType } from '../schema/WorkerSchema';
import { SustenanceSchema, SustenanceType } from '../schema/SustenanceSchema';
import { SettingsSchema, SettingsType } from '../schema/SettingsSchema';
import { NotificationSettingsSchema, NotificationSettingsType } from '../schema/NotificationSettingsSchema';

export class Player extends BaseModel implements PlayerType {
    static schema = PlayerSchema;
}

export class Household extends BaseModel implements HouseholdType {
    static schema = HouseholdSchema;
}

export class PrestigeImpact extends BaseModel implements PrestigeImpactType {
    static schema = PrestigeImpactSchema;
}

export class Worker extends BaseModel implements WorkerType {
    static schema = WorkerSchema;
}

export class Sustenance extends BaseModel implements SustenanceType {
    static schema = SustenanceSchema;
}

export class Settings extends BaseModel implements SettingsType {
    static schema = SettingsSchema;
}

export class NotificationSettings extends BaseModel implements NotificationSettingsType {
    static schema = NotificationSettingsSchema;
}