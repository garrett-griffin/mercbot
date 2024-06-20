const BaseAPI = require('./baseAPI');
const { Business } = require('../models/business');

class BusinessesAPI extends BaseAPI {
    static rootUrl() {
        return 'api/businesses';
    }

    /**
     * Get a business by its ID.
     * @param {number} id - The ID of the business.
     * @returns {Promise<Business>} The business with the given ID.
     */
    async get(id) {
        try {
            const response = await super.get(`${BusinessesAPI.rootUrl()}/${id}`);
            return Business.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch business with ID ${id}: ${error.message}`);
        }
    }
}

module.exports = BusinessesAPI;
