const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const { TurnInProgressException } = require('../src/utils/errors');

describe('Client', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should set authentication headers correctly', () => {
        const client = new Client(user, token);
        expect(client.session.defaults.headers['X-Merc-User']).toBe(user);
        expect(client.session.defaults.headers['Authorization']).toBe(`Bearer ${token}`);
        expect(client.session.defaults.headers['Content-Type']).toBe('application/json');
        expect(client.session.defaults.headers['Accept']).toBe('application/json');
    });

    it('should use the default base URL', () => {
        const client = new Client(user, token);
        expect(client.session.defaults.baseURL).toBe(baseUrl);
    });

    it('should use a custom base URL if provided', () => {
        const customUrl = 'https://test.mercatorio.io/';
        const client = new Client(user, token, customUrl);
        expect(client.session.defaults.baseURL).toBe(customUrl);
    });

    it('should make a GET request successfully', async () => {
        const client = new Client(user, token);
        mock.onGet(`${baseUrl}api/test-endpoint`).reply(200, {success: true});

        const data = await client.get('api/test-endpoint');
        expect(data).toEqual({success: true});
    });

    it('should handle GET request errors', async () => {
        const client = new Client(user, token);
        mock.onGet(`${baseUrl}api/test-endpoint`).reply(500);

        await expect(client.get('api/test-endpoint')).rejects.toThrow('GET api/test-endpoint failed: Request failed with status code 500');
    });

    it('should make a POST request successfully', async () => {
        const client = new Client(user, token);
        const postData = {key: 'value'};
        mock.onPost(`${baseUrl}api/test-endpoint`, postData).reply(200, {success: true});

        const data = await client.post('api/test-endpoint', postData);
        expect(data).toEqual({success: true});
    });

    it('should handle POST request errors', async () => {
        const client = new Client(user, token);
        const postData = {key: 'value'};
        mock.onPost(`${baseUrl}api/test-endpoint`, postData).reply(500);

        await expect(client.post('api/test-endpoint', postData)).rejects.toThrow('POST api/test-endpoint failed: Request failed with status code 500');
    });

    it('should make a PATCH request successfully', async () => {
        const client = new Client(user, token);
        const patchData = { key: 'value' };
        mock.onPatch(`${baseUrl}api/test-endpoint`, patchData).reply(200, { success: true });

        const data = await client.patch('api/test-endpoint', patchData);
        expect(data).toEqual({ success: true });
    });

    it('should handle PATCH request errors', async () => {
        const client = new Client(user, token);
        const patchData = { key: 'value' };
        mock.onPatch(`${baseUrl}api/test-endpoint`, patchData).reply(500);

        await expect(client.patch('api/test-endpoint', patchData)).rejects.toThrow('PATCH api/test-endpoint failed: Request failed with status code 500');
    });

    it('should make a PUT request successfully', async () => {
        const client = new Client(user, token);
        const putData = { key: 'value' };
        mock.onPut(`${baseUrl}api/test-endpoint`, putData).reply(200, { success: true });

        const data = await client.put('api/test-endpoint', putData);
        expect(data).toEqual({ success: true });
    });

    it('should handle PUT request errors', async () => {
        const client = new Client(user, token);
        const putData = { key: 'value' };
        mock.onPut(`${baseUrl}api/test-endpoint`, putData).reply(500);

        await expect(client.put('api/test-endpoint', putData)).rejects.toThrow('PUT api/test-endpoint failed: Request failed with status code 500');
    });
});