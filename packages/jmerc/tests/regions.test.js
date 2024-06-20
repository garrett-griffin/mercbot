const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const RegionAPI = require('../src/api/regions');
const { Region } = require('../src/models/region');

describe('RegionAPI', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, mapAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        mapAPI = new RegionAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get a list of all regions successfully', async () => {
        const response = [
            { id: 1, name: 'Region1', description: 'Description1' },
            { id: 2, name: 'Region2', description: 'Description2' }
        ];
        mock.onGet(`${baseUrl}api/map/regions`).reply(200, response);

        const regions = await mapAPI.getAll();
        expect(regions.length).toBe(2);
        expect(regions[0]).toBeInstanceOf(Region);
        expect(regions[0].id).toBe(1);
        expect(regions[0].name).toBe('Region1');
        expect(regions[0].description).toBe('Description1');
    });

    it('should handle get all regions errors', async () => {
        mock.onGet(`${baseUrl}api/map/regions`).reply(500);

        await expect(mapAPI.getAll()).rejects.toThrow('Failed to fetch regions: GET api/map/regions failed: Request failed with status code 500');
    });
});
