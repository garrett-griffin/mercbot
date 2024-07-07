import BaseAPI, {ResponseObject} from './baseAPI';
import {apiRoutes} from "./api-routes";
import {Town, TownData} from '../models';
import {Market, MarketItemDetails} from '../models';
import {ItemEnumType} from "../schema/enums";
import {ItemTrade, ItemTradeResult} from "../models";
import {BuySellOrderFailedException, convertFloatsToStrings} from '../utils'

class TownsAPI extends BaseAPI {

    endpoint: string = apiRoutes.towns;

    /**
     * Get a list of all towns in the game.
     * @returns A list of all towns in the game.
     */
    async getAll(): Promise<Town[]> {
        try {
            const response = await super.get() as unknown[];
            return Town.validateArray(response);
        } catch (error) {
            throw new Error(`Failed to fetch towns: ${(error as Error).message}`);
        }
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async get({ id }: { endpoint?: string, id?: number, item?: string } = {}): Promise<TownData> {
        try {
            const response = await super.get({ endpoint: apiRoutes.townData, id });
            return TownData.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch town data for ID ${id}: ${(error as Error).message}`);
        }
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async getTown(id: number): Promise<TownData> {
        return await this.get({id});
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async getTownData(id: number): Promise<TownData> {
        return await this.get({id});
    }

    /**
     * Get market data for a town.
     * @param id - The ID of the town.
     * @returns The market data for the town.
     */
    async getMarketData(id: number): Promise<Market> {
        try {
            const response = await super.get({ endpoint: apiRoutes.marketData, id });
            return Market.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market data for town ID ${id}: ${(error as Error).message}`);
        }
    }

    /**
     * Get the market overview for an item in a town.
     * @param townId - The ID of the town.
     * @param item - The item to get the overview for.
     * @returns The market overview for the town.
     */
    async getMarketItem(townId: number, item: ItemEnumType): Promise<MarketItemDetails> {
        try {
            const response = await super.get( {endpoint: apiRoutes.marketItem, id: townId, item});
            return MarketItemDetails.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market item data for town ID ${townId} and item ${item}: ${(error as Error).message}`);
        }
    }

    async sendBuyOrder(
        item: ItemEnumType,
        id: number,
        expectedBalance: number,
        operation: string,
        price: number,
        volume: number
    ): Promise<ItemTradeResult> {
        return await this._sendOrder(
            item, id, expectedBalance, operation, price, volume, "bid"
        );
    }

    async sendSellOrder(
        item: ItemEnumType,
        id: number,
        expectedBalance: number,
        operation: string,
        price: number,
        volume: number
    ): Promise<ItemTradeResult> {
        return await this._sendOrder(
            item, id, expectedBalance, operation, price, volume, "ask"
        );
    }

    async _sendOrder(
        item: ItemEnumType,
        id: number,
        expected_balance: number,
        operation: string,
        price: number,
        volume: number,
        direction: string
    ): Promise<ItemTradeResult> {
        const trade = ItemTrade.build({
            direction,
            expected_balance,
            operation,
            price,
            volume
        });
        const json = convertFloatsToStrings(trade);
        console.log(json);
        const response: ResponseObject = await super.post({ endpoint: apiRoutes.orders, id, item, data: json });

        if (response.status === 200) {
            return await ItemTradeResult.validate(response);
        } else {
            throw new BuySellOrderFailedException(`Failed to send ${direction} order: status: ${response.status} - text: ${response.statusText}`);
        }
    }

}

export default TownsAPI;