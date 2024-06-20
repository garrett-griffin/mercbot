const BaseAPI = require('./baseAPI');
const Turn  = require('../models/turn');

class TurnsAPI extends BaseAPI {
    static rootUrl() {
        return 'api/clock'; // Adjust if the endpoint is different
    }

    /**
     * Get the current turn data.
     * @returns {Promise<Turn>} The current turn data.
     */
    async get() {
        try {
            const response = await super.get(TurnsAPI.rootUrl());
            return Turn.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch turn data: ${error.message}`);
        }
    }
}

module.exports = TurnsAPI;
