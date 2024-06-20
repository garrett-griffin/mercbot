const BaseAPI = require('./baseAPI');
const { Region: Regions } = require('../models/region');

class RegionAPI extends BaseAPI {
    static rootUrl() {
        return 'api/map/regions';
    }

    /**
     * Get a list of all regions in the game.
     * @returns {Promise<Regions[]>} A list of all regions in the game.
     */
    async getAll() {
        try {
            const response = await super.get(RegionAPI.rootUrl());
            return response.map(regionData => Regions.modelValidate(regionData));
        } catch (error) {
            throw new Error(`Failed to fetch regions: ${error.message}`);
        }
    }
}

module.exports = RegionAPI;
