import { BaseModel } from './baseModel';
import { PlayerSchema, PlayerType } from '../schema';
import { HouseholdSchema, HouseholdType } from '../schema';
import { PrestigeImpactSchema, PrestigeImpactType } from '../schema';
import { WorkerSchema, WorkerType } from '../schema';
import { SustenanceSchema, SustenanceType } from '../schema';
import { SettingsSchema, SettingsType } from '../schema';
import { NotificationSettingsSchema, NotificationSettingsType } from '../schema';
import {SkillEnumType} from "../schema/enums";
import { Inventory } from "./inventory";

/**
 * Represents a player with associated attributes.
 */
export class Player extends BaseModel implements PlayerType {
    static schema = PlayerSchema;

    username: string;
    household: Household;
    discord_id: string | null;
    settings: Settings;
    active: boolean;

    /**
     * Creates an instance of Player.
     * @param data - The data to initialize the player.
     */
    constructor(data: PlayerType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.household =  Household.build(this.household);
        this.settings = Settings.build(this.settings);
    }
}

/**
 * Represents a household with associated attributes.
 */
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

    /**
     * Creates an instance of Household.
     * @param data - The data to initialize the household.
     */
    constructor(data: HouseholdType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        if(this.prestige_impacts !== null) {
            for(let i=0; i<this.prestige_impacts.length; i++) {
                this.prestige_impacts[i] = PrestigeImpact.build(this.prestige_impacts[i]);
            }
        }
        for(let i=0; i<this.workers.length; i++) {
            this.workers[i] = Worker.build(this.workers[i]);
        }
        this.sustenance = Sustenance.build(this.sustenance);
    }

    get capsMap(): Map<string, number> {
        return new Map(Object.entries(this.caps).map(([key, value]) => [key as string, value]));
    }
}

/**
 * Represents a prestige impact with associated attributes.
 */
export class PrestigeImpact extends BaseModel implements PrestigeImpactType {
    static schema = PrestigeImpactSchema;

    factor: string;
    impact: number;

    /**
     * Creates an instance of PrestigeImpact.
     * @param data - The data to initialize the prestige impact.
     */
    constructor(data: PrestigeImpactType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}

/**
 * Represents a worker with associated attributes.
 */
export class Worker extends BaseModel implements WorkerType {
    static schema = WorkerSchema;

    assignment: string;
    capacity: number;
    name: string;
    skills: Record<SkillEnumType, number>;

    /**
     * Creates an instance of Worker.
     * @param data - The data to initialize the worker.
     */
    constructor(data: WorkerType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }

    get skillsMap(): Map<SkillEnumType, number> {
        return new Map(Object.entries(this.skills).map(([key, value]) => [key as SkillEnumType, value]));
    }
}

/**
 * Represents sustenance with associated attributes.
 */
export class Sustenance extends BaseModel implements SustenanceType {
    static schema = SustenanceSchema;

    reference: string;
    inventory: Inventory;
    provider_id: string | null;

    /**
     * Creates an instance of Sustenance.
     * @param data - The data to initialize the sustenance.
     */
    constructor(data: SustenanceType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.inventory = Inventory.build(this.inventory);
    }
}

/**
 * Represents settings with associated attributes.
 */
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

    /**
     * Creates an instance of Settings.
     * @param data - The data to initialize the settings.
     */
    constructor(data: SettingsType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.notifications = NotificationSettings.build(this.notifications);
    }
}

/**
 * Represents notification settings with associated attributes.
 */
export class NotificationSettings extends BaseModel implements NotificationSettingsType {
    static schema = NotificationSettingsSchema;

    discord: boolean;
    mutes: string[] | null;

    /**
     * Creates an instance of NotificationSettings.
     * @param data - The data to initialize the notification settings.
     */
    constructor(data: NotificationSettingsType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
