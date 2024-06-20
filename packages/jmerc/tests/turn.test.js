const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const TurnsAPI = require('../src/api/turns');
const Turn = require('../src/models/turn');

describe('Turn', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, turnsAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        turnsAPI = new TurnsAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get the current turn number successfully', async () => {
        const response = { turn: 42, month: "June", year: 2024 };
        mock.onGet(`${baseUrl}api/clock`).reply(200, response);
        const turnData = await turnsAPI.get();
        expect(turnData).toBeInstanceOf(Turn);
        expect(turnData.turn).toBe(42);
        expect(turnData.month).toBe("June");
        expect(turnData.year).toBe(2024);
    });

    it('should handle GET request errors', async () => {
        mock.onGet(`${baseUrl}api/clock`).reply(500);

        await expect(turnsAPI.get()).rejects.toThrow('Failed to fetch turn data: GET api/clock failed: Request failed with status code 500');
    });
});
