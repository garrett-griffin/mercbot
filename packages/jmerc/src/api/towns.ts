import BaseAPI from './baseAPI';
import { apiRoutes } from "./api-routes";
import { Town, TownData, Market, MarketItemDetails } from '../models/towns';
import { ItemEnum } from "../schema/enums/ItemEnumSchema";

class TownsAPI extends BaseAPI {

    endpoint: string = apiRoutes.towns;

    async initCache(): Promise<void> {
        // Implement cache initialization if needed
    }

    /**
     * Get a list of all towns in the game.
     * @returns A list of all towns in the game.
     */
    async getAll(): Promise<Town[]> {
        try {
            const response = await super.get() as unknown[];
            return response.map((townData: unknown) => Town.validate(townData) as Town);
        } catch (error) {
            throw new Error(`Failed to fetch towns: ${(error as Error).message}`);
        }
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async getTown(id: number): Promise<Town> {
        try {
            const response = await super.get(apiRoutes.townData.replace(':id', id.toString()));
            return TownData.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch town data for ID ${id}: ${(error as Error).message}`);
        }
    }

    /**
     * Get market data for a town.
     * @param id - The ID of the town.
     * @returns The market data for the town.
     */
    async getMarketData(id: number): Promise<Market> {
        try {
            const response = await super.get(apiRoutes.marketData.replace(':id', id.toString()));
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
    async getMarketItem(townId: number, item: ItemEnum): Promise<MarketItemDetails> {
        try {
            const response = await super.get(apiRoutes.marketItem.replace(':id', townId.toString()).replace(':item', item.toString()));
            return MarketItemDetails.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market item data for town ID ${townId} and item ${item}: ${(error as Error).message}`);
        }
    }
}

export default TownsAPI;