const BaseAPI = require('./baseAPI');
const { Town, TownData, TownMarket, TownMarketItemDetails } = require('../models/towns');
const { Item, ItemTrade, ItemTradeResult } = require('../models/common');
const { BuySellOrderFailedException } = require('../utils/errors');
const { convertFloatsToStrings } = require('../utils/conversion');

class TownsAPI extends BaseAPI {
    static rootUrl() {
        return 'api/towns';
    }

    async initCache() {
        // Implement cache initialization if needed
    }

    /**
     * Get a list of all towns in the game.
     * @returns {Promise<Town[]>} A list of all towns in the game.
     */
    async getAll() {
        try {
            const response = await super.get(TownsAPI.rootUrl());
            return response.map(townData => Town.modelValidate(townData));
        } catch (error) {
            throw new Error(`Failed to fetch towns: ${error.message}`);
        }
    }

    /**
     * Get data for a town.
     * @param {number} id - The ID of the town.
     * @returns {Promise<Town>} The data for the town.
     */
    async getTown(id) {
        try {
            const response = await super.get(`${TownsAPI.rootUrl()}/${id}`);
            return Town.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch town data for ID ${id}: ${error.message}`);
        }
    }

    /**
     * Get market data for a town.
     * @param {number} id - The ID of the town.
     * @returns {Promise<TownMarket>} The market data for the town.
     */
    async getMarketData(id) {
        try {
            const response = await super.get(`${TownsAPI.rootUrl()}/${id}/marketdata`);
            return TownMarket.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market data for town ID ${id}: ${error.message}`);
        }
    }

    /**
     * Get the market overview for an item in a town.
     * @param {number} townId - The ID of the town.
     * @param {Item} item - The item to get the overview for.
     * @returns {Promise<TownMarketItemDetails>} The market overview for the town.
     */
    async getMarketItem(townId, item) {
        try {
            const response = await super.get(`${TownsAPI.rootUrl()}/${townId}/markets/${item.value}`);
            return TownMarketItemDetails.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market item data for town ID ${townId} and item ${item.name}: ${error.message}`);
        }
    }

    // /**
    //  * Send a buy order to a town.
    //  * @param {Item} item - The item to buy.
    //  * @param {number} id - The ID of the town.
    //  * @param {number} expected_balance - The expected balance after the purchase.
    //  * @param {string} operation - The operation to use for the purchase.
    //  * @param {number} price - The price of the item.
    //  * @param {number} volume - The volume of the item to buy.
    //  * @returns {Promise<ItemTradeResult>} The result of the purchase.
    //  * @throws {BuySellOrderFailedException} If the order failed to send.
    //  */
    // async sendBuyOrder(item, id, expected_balance, operation, price, volume) {
    //     return await this._sendOrder(item, id, expected_balance, operation, price, volume, "bid");
    // }
    //
    // /**
    //  * Send a sell order to a town.
    //  * @param {Item} item - The item to sell.
    //  * @param {number} id - The ID of the town.
    //  * @param {number} expected_balance - The expected balance after the sale.
    //  * @param {string} operation - The operation to use for the sale.
    //  * @param {number} price - The price of the item.
    //  * @param {number} volume - The volume of the item to sell.
    //  * @returns {Promise<ItemTradeResult>} The result of the sale.
    //  * @throws {BuySellOrderFailedException} If the order failed to send.
    //  */
    // async sendSellOrder(item, id, expected_balance, operation, price, volume) {
    //     return await this._sendOrder(item, id, expected_balance, operation, price, volume, "ask");
    // }
    //
    // /**
    //  * Send a buy or sell order to a town.
    //  * @param {Item} item - The item to buy or sell.
    //  * @param {number} id - The ID of the town.
    //  * @param {number} expected_balance - The expected balance after the trade.
    //  * @param {string} operation - The operation to use for the trade.
    //  * @param {number} price - The price of the item.
    //  * @param {number} volume - The volume of the item to trade.
    //  * @param {string} direction - The direction of the trade.
    //  * @returns {Promise<ItemTradeResult>} The result of the trade.
    //  * @throws {BuySellOrderFailedException} If the order failed to send.
    //  */
    // async _sendOrder(item, id, expected_balance, operation, price, volume, direction) {
    //     const trade = new ItemTrade();
    //     trade.direction = direction;
    //     trade.expected_balance = expected_balance;
    //     trade.operation = operation;
    //     trade.price = price;
    //     trade.volume = volume;
    //
    //     const json = convertFloatsToStrings(trade);
    //     try {
    //         const response = await this.client.post(`${TownsAPI.rootUrl()}/${id}/markets/${item.value}/orders`, json);
    //         if (response.status === 200) {
    //             return ItemTradeResult.modelValidate(response.data);
    //         } else {
    //             throw new BuySellOrderFailedException(`Failed to send ${direction} order: ${response.data}`);
    //         }
    //     } catch (error) {
    //         throw new BuySellOrderFailedException(`Failed to send ${direction} order: ${error.message}`);
    //     }
    // }
}

module.exports = TownsAPI;
