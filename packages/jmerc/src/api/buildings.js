const BaseAPI = require('./baseAPI');
const { Building, BuildingOperation } = require('../models/building');
const { InventoryManager, Item } = require('../models/common');
const { SetManagerFailedException } = require('../utils/errors');
const { convertFloatsToStrings } = require('../utils/conversion');

class BuildingsAPI extends BaseAPI {
    static rootUrl() {
        return 'api/buildings';
    }

    /**
     * Get a building by its ID.
     * @param {number} id - The ID of the building.
     * @returns {Promise<Building>} The building.
     */
    async get(id) {
        try {
            const response = await super.get(`${BuildingsAPI.rootUrl()}/${id}`);
            return Building.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch building with ID ${id}: ${error.message}`);
        }
    }

    /**
     * Get the operations for a building.
     * @param {number} id - The ID of the building.
     * @returns {Promise<BuildingOperation>} The building operation information.
     */
    async getOperations(id) {
        try {
            const response = await super.get(`${BuildingsAPI.rootUrl()}/${id}/operations`);
            if (response.status === 404) {
                return new BuildingOperation();
            } else {
                return BuildingOperation.modelValidate(response);
            }
        } catch (error) {
            throw new Error(`Failed to fetch operations for building with ID ${id}: ${error.message}`);
        }
    }
}

module.exports = BuildingsAPI;
