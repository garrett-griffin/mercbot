const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const BusinessesAPI = require('../src/api/businesses');
const { Business } = require('../src/models/business');

describe('BusinessesAPI', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, businessesAPI;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        businessesAPI = new BusinessesAPI(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get a business by ID successfully', async () => {
        const response = {
            id: 1,
            name: 'Business1',
            account: { id: 'account1', name: 'Account1', owner_id: 1, assets: {} },
            account_id: 'account1',
            building_ids: [1, 2],
            buildings: [{ id: 1, type: 'Type1' }, { id: 2, type: 'Type2' }],
            contract_ids: ['contract1'],
            owner_id: 1,
            transport_ids: [1, 2]
        };
        mock.onGet(`${baseUrl}api/businesses/1`).reply(200, response);

        const business = await businessesAPI.get(1);
        expect(business).toBeInstanceOf(Business);
        expect(business.id).toBe(1);
        expect(business.name).toBe('Business1');
        expect(business.account.id).toBe('account1');
    });

    it('should handle get business by ID errors', async () => {
        mock.onGet(`${baseUrl}api/businesses/1`).reply(500);

        await expect(businessesAPI.get(1)).rejects.toThrow('Failed to fetch business with ID 1: GET api/businesses/1 failed: Request failed with status code 500');
    });
});
