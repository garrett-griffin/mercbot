const { plainToInstance, Expose, Type } = require('class-transformer');
const { Skill, Inventory } = require('./common');

class Household {
    @Expose() id;
    @Expose() name;
    @Expose() town_id;
    @Expose() portrait;
    @Expose() gender;
    @Expose() account_id;
    @Expose() business_ids;
    @Expose() prestige;
    @Type(() => PrestigeImpact) @Expose() prestige_impacts;
    @Type(() => Worker) @Expose() workers;
    @Expose() operations;
    @Expose() caps;
    @Type(() => Sustenance) @Expose() sustenance;
}

class PrestigeImpact {
    @Expose() factor;
    @Expose() impact;
}

class Worker {
    @Expose() assignment;
    @Expose() capacity;
    @Expose() name;
    @Type(() => Skill) @Expose() skills;
}

class Sustenance {
    @Expose() reference;
    @Type(() => Inventory) @Expose() inventory;
    @Expose() provider_id;
}

class Settings {
    @Expose() sound_volume;
    @Type(() => NotificationSettings) @Expose() notifications;
    @Expose() commoners_splash;
    @Expose() construction_splash;
    @Expose() land_purchase_splash;
    @Expose() operations_splash;
    @Expose() production_splash;
    @Expose() recipes_splash;
    @Expose() sustenance_splash;
    @Expose() trading_splash;
    @Expose() trade_config_splash;
    @Expose() welcome_splash;
    @Expose() first_building_splash;
    @Expose() warehouse_splash;
}

class NotificationSettings {
    @Expose() discord;
    @Expose() mutes;
}

class Player {
    @Expose() username;
    @Type(() => Household) @Expose() household;
    @Expose() discord_id;
    @Type(() => Settings) @Expose() settings;
    @Expose() active;

    static modelValidate(data) {
        return plainToInstance(Player, data);
    }
}

module.exports = { Player, Household, PrestigeImpact, Worker, Sustenance, Settings, NotificationSettings };
