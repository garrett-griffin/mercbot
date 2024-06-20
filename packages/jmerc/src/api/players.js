const BaseAPI = require('./baseAPI');
const { Player } = require('../models/player');

class PlayersAPI extends BaseAPI {
    static rootUrl() {
        return 'api/player';
    }

    /**
     * Get the current player data.
     * @returns {Promise<Player>} The current player data.
     */
    async get() {
        try {
            const response = await super.get(PlayersAPI.rootUrl());
            return Player.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch player data: ${error.message}`);
        }
    }
}

module.exports = PlayersAPI;
