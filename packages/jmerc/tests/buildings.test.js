const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const BuildingsAPI = require('../src/api/buildings');
const { SetManagerFailedException } = require('../src/utils/errors');
const { BuildingOperation } = require('../src/models/building');
const { Item } = require('../src/models/common');
const Client = require("../src/api/client");
const {Player} = require("../src/models/player");

describe('Buildings API', () => {

    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, buildings;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        buildings = new BuildingsAPI(client);
    });

    afterEach(() => {
        mock.restore();
    });

    it('should handle get building by ID errors', async () => {
        mock.onGet(`${baseUrl}api/buildings/1`).reply(500);

        await expect(buildings.get(1)).rejects.toThrow('Failed to fetch building with ID 1: GET api/buildings/1 failed: Request failed with status code 500');
    });

    it('should handle get operations for a building errors', async () => {
        mock.onGet(`${baseUrl}api/buildings/1/operations`).reply(500);

        await expect(buildings.getOperations(1)).rejects.toThrow('Failed to fetch operations for building with ID 1: GET api/buildings/1/operations failed: Request failed with status code 500');
    });
});
