const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const TransportsAPI = require('../src/api/transports');
const { Transport, TransportRoute } = require('../src/models/transport');
const { Item, InventoryManager } = require('../src/models/common');
const { SetManagerFailedException } = require('../src/utils/errors');

describe('TransportsAPI', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, transportsAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        transportsAPI = new TransportsAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get a transport by ID successfully', async () => {
        const response = { id: 1, name: 'Transport1', type: 'Type1', capacity: 100 };
        mock.onGet(`${baseUrl}api/transports/1`).reply(200, response);

        const transport = await transportsAPI.get(1);
        expect(transport).toBeInstanceOf(Transport);
        expect(transport.id).toBe(1);
        expect(transport.name).toBe('Transport1');
        expect(transport.type).toBe('Type1');
        expect(transport.capacity).toBe(100);
    });

    it('should handle get transport by ID errors', async () => {
        mock.onGet(`${baseUrl}api/transports/1`).reply(500);

        await expect(transportsAPI.get(1)).rejects.toThrow('Failed to fetch transport with ID 1: GET api/transports/1 failed: Request failed with status code 500');
    });

    // it('should set manager for an item in a transport successfully', async () => {
    //     const manager = new InventoryManager();
    //     manager.id = 1;
    //     manager.name = 'Manager1';
    //     manager.quantity = 100;
    //
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     const response = { id: 1, name: 'Route1', stops: ['Stop1', 'Stop2'] };
    //
    //     mock.onPatch(`${baseUrl}api/transports/1/route/inventory/item1`).reply(200, response);
    //
    //     const transportRoute = await transportsAPI.setManager(1, item, manager);
    //     expect(transportRoute).toBeInstanceOf(TransportRoute);
    //     expect(transportRoute.id).toBe(1);
    //     expect(transportRoute.name).toBe('Route1');
    //     expect(transportRoute.stops).toEqual(['Stop1', 'Stop2']);
    // });
    //
    // it('should handle set manager for an item in a transport errors', async () => {
    //     const manager = new InventoryManager();
    //     manager.id = 1;
    //     manager.name = 'Manager1';
    //     manager.quantity = 100;
    //
    //     const item = new Item();
    //     item.value = 'item1';
    //     item.name = 'Item1';
    //
    //     mock.onPatch(`${baseUrl}api/transports/1/route/inventory/item1`).reply(500);
    //
    //     await expect(transportsAPI.setManager(1, item, manager)).rejects.toThrow(SetManagerFailedException);
    // });
});
