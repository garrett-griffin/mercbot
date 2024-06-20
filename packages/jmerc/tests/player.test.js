const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const PlayersAPI = require('../src/api/players');
const { Player } = require('../src/models/player');

describe('Player', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, playersAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        playersAPI = new PlayersAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get the player data successfully', async () => {
        const response = {
            username: 'Player1',
            household: { id: 'household1', name: 'Household1', town_id: 1, portrait: 'portrait1', gender: 'male', account_id: 'account1', business_ids: ['business1'], prestige: 100.0, workers: [], operations: [], caps: {}, sustenance: {} },
            discord_id: null,
            settings: { sound_volume: 100, notifications: {}, commoners_splash: false, construction_splash: false, land_purchase_splash: false, operations_splash: false, production_splash: false, recipes_splash: false, sustenance_splash: false, trading_splash: false, trade_config_splash: false, welcome_splash: false, first_building_splash: false, warehouse_splash: false },
            active: true
        };
        mock.onGet(`${baseUrl}api/player`).reply(200, response);

        const playerData = await playersAPI.get();
        expect(playerData).toBeInstanceOf(Player);
        expect(playerData.username).toBe('Player1');
        expect(playerData.household.name).toBe('Household1');
    });

    it('should handle GET request errors', async () => {
        mock.onGet(`${baseUrl}api/player`).reply(500);

        await expect(playersAPI.get()).rejects.toThrow('Failed to fetch player data: GET api/player failed: Request failed with status code 500');
    });
});
