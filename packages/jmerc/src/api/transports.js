const BaseAPI = require('./baseAPI');
const { Transport, TransportRoute } = require('../models/transport');
const { Item, InventoryManager } = require('../models/common');
const { SetManagerFailedException } = require('../utils/errors');
const { convertFloatsToStrings } = require('../utils/conversion');

class TransportsAPI extends BaseAPI {
    static rootUrl() {
        return 'api/transports';
    }

    /**
     * Get transport by its ID.
     * @param {number} id - The ID of the transport.
     * @returns {Promise<Transport>} The transport with the given ID.
     */
    async get(id) {
        try {
            const response = await super.get(`${TransportsAPI.rootUrl()}/${id}`);
            return Transport.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch transport with ID ${id}: ${error.message}`);
        }
    }

    // /**
    //  * Sets the manager for the item.
    //  * @param {number} id - The ID of the transport.
    //  * @param {Item} item - The item to set the manager for.
    //  * @param {InventoryManager} manager - The manager to set.
    //  * @returns {Promise<TransportRoute>} The updated transport route.
    //  */
    // async setManager(id, item, manager) {
    //     const json = convertFloatsToStrings(manager.modelDump());
    //     try {
    //         const response = await this.client.patch(`${TransportsAPI.rootUrl()}/${id}/route/inventory/${item.value}`, json);
    //         if (response.status === 200) {
    //             return TransportRoute.modelValidate(response.data);
    //         } else {
    //             throw new SetManagerFailedException(`Failed to set manager for ${item.name} on transport ${id}: ${response.data}`);
    //         }
    //     } catch (error) {
    //         throw new SetManagerFailedException(`Failed to set manager for ${item.name} on transport ${id}: ${error.message}`);
    //     }
    // }
}

module.exports = TransportsAPI;
