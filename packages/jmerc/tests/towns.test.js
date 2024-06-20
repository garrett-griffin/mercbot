const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const TownsAPI = require('../src/api/towns');
const { Town, TownData, TownMarket, TownMarketItemDetails } = require('../src/models/towns');
const { Item, ItemTradeResult } = require('../src/models/common');
const { BuySellOrderFailedException } = require('../src/utils/errors');

describe('TownsAPI', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, townsAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        townsAPI = new TownsAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get a list of all towns successfully', async () => {
        const response = [
            { id: 1, name: 'Town1', description: 'Description1' },
            { id: 2, name: 'Town2', description: 'Description2' }
        ];
        mock.onGet(`${baseUrl}api/towns`).reply(200, response);

        const towns = await townsAPI.getAll();
        expect(towns.length).toBe(2);
        expect(towns[0]).toBeInstanceOf(Town);
        expect(towns[0].id).toBe(1);
        expect(towns[0].name).toBe('Town1');
        expect(towns[0].description).toBe('Description1');
    });

    it('should handle get all towns errors', async () => {
        mock.onGet(`${baseUrl}api/towns`).reply(500);

        await expect(townsAPI.getAll()).rejects.toThrow('Failed to fetch towns: GET api/towns failed: Request failed with status code 500');
    });

    it('should get data for a town successfully', async () => {
        const response = { id: 1, population: 1000, economy: 'growing' };
        mock.onGet(`${baseUrl}api/towns/1`).reply(200, response);

        const townData = await townsAPI.getTown(1);
        expect(townData).toBeInstanceOf(Town);
        expect(townData.id).toBe(1);
        expect(townData.population).toBe(1000);
        expect(townData.economy).toBe('growing');
    });

    it('should handle get data for a town errors', async () => {
        mock.onGet(`${baseUrl}api/towns/1`).reply(500);

        await expect(townsAPI.getTown(1)).rejects.toThrow('Failed to fetch town data for ID 1: GET api/towns/1 failed: Request failed with status code 500');
    });

    it('should get market data for a town successfully', async () => {
        const response = { id: 1, items: ['item1', 'item2'] };
        mock.onGet(`${baseUrl}api/towns/1/marketdata`).reply(200, response);

        const townMarket = await townsAPI.getMarketData(1);
        expect(townMarket).toBeInstanceOf(TownMarket);
        expect(townMarket.id).toBe(1);
        expect(townMarket.items).toEqual(['item1', 'item2']);
    });

    it('should handle get market data for a town errors', async () => {
        mock.onGet(`${baseUrl}api/towns/1/marketdata`).reply(500);

        await expect(townsAPI.getMarketData(1)).rejects.toThrow('Failed to fetch market data for town ID 1: GET api/towns/1/marketdata failed: Request failed with status code 500');
    });

    it('should get market item data for a town successfully', async () => {
        const response = { id: 1, name: 'Item1', price: 100, volume: 200 };
        const item = new Item();
        item.value = 'item1';
        item.name = 'Item1';

        mock.onGet(`${baseUrl}api/towns/1/markets/item1`).reply(200, response);

        const marketItem = await townsAPI.getMarketItem(1, item);
        expect(marketItem).toBeInstanceOf(TownMarketItemDetails);
        expect(marketItem.id).toBe(1);
        expect(marketItem.name).toBe('Item1');
        expect(marketItem.price).toBe(100);
        expect(marketItem.volume).toBe(200);
    });

    it('should handle get market item data for a town errors', async () => {
        const item = new Item();
        item.value = 'item1';
        item.name = 'Item1';

        mock.onGet(`${baseUrl}api/towns/1/markets/item1`).reply(500);

        await expect(townsAPI.getMarketItem(1, item)).rejects.toThrow('Failed to fetch market item data for town ID 1 and item Item1: GET api/towns/1/markets/item1 failed: Request failed with status code 500');
    });

    // it('should send a buy order successfully', async () => {
    //     const response = { success: true, balance: 500, item: 'item1' };
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     mock.onPost(`${baseUrl}api/towns/1/markets/item1/orders`).reply(200, response);
    //
    //     const result = await townsAPI.sendBuyOrder(item, 1, 1000, 'operation1', 50, 10);
    //     expect(result).toBeInstanceOf(ItemTradeResult);
    //     expect(result.success).toBe(true);
    //     expect(result.balance).toBe(500);
    // });
    //
    // it('should handle send buy order errors', async () => {
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     mock.onPost(`${baseUrl}api/towns/1/markets/item1/orders`).reply(500);
    //
    //     await expect(townsAPI.sendBuyOrder(item, 1, 1000, 'operation1', 50, 10)).rejects.toThrow(BuySellOrderFailedException);
    // });
    //
    // it('should send a sell order successfully', async () => {
    //     const response = { success: true, balance: 1500, item: 'item1' };
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     mock.onPost(`${baseUrl}api/towns/1/markets/item1/orders`).reply(200, response);
    //
    //     const result = await townsAPI.sendSellOrder(item, 1, 2000, 'operation1', 60, 5);
    //     expect(result).toBeInstanceOf(ItemTradeResult);
    //     expect(result.success).toBe(true);
    //     expect(result.balance).toBe(1500);
    // });
    //
    // it('should handle send sell order errors', async () => {
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     mock.onPost(`${baseUrl}api/towns/1/markets/item1/orders`).reply(500);
    //
    //     await expect(townsAPI.sendSellOrder(item, 1, 2000, 'operation1', 60, 5)).rejects.toThrow(BuySellOrderFailedException);
    // });
});
