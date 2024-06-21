import BaseAPI from './baseAPI';
import { Town, TownData, TownMarket, TownMarketItemDetails } from '../models/towns';
import { Item, ItemTrade, ItemTradeResult } from '../models/common';
import { BuySellOrderFailedException } from '../utils/';
import { convertFloatsToStrings } from '../utils/';

class TownsAPI extends BaseAPI {
    static rootUrl(): string {
        return 'api/towns';
    }

    async initCache(): Promise<void> {
        // Implement cache initialization if needed
    }

    /**
     * Get a list of all towns in the game.
     * @returns A list of all towns in the game.
     */
    async getAll(): Promise<Town[]> {
        try {
            const response = await super.get(TownsAPI.rootUrl());
            return response.map((townData: any) => Town.modelValidate(townData));
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
            const response = await super.get(`${TownsAPI.rootUrl()}/${id}`);
            return Town.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch town data for ID ${id}: ${(error as Error).message}`);
        }
    }

    /**
     * Get market data for a town.
     * @param id - The ID of the town.
     * @returns The market data for the town.
     */
    async getMarketData(id: number): Promise<TownMarket> {
        try {
            const response = await super.get(`${TownsAPI.rootUrl()}/${id}/marketdata`);
            return TownMarket.modelValidate(response);
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
    async getMarketItem(townId: number, item: Item): Promise<TownMarketItemDetails> {
        try {
            const response = await super.get(`${TownsAPI.rootUrl()}/${townId}/markets/${item.value}`);
            return TownMarketItemDetails.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch market item data for town ID ${townId} and item ${item.name}: ${(error as Error).message}`);
        }
    }