import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('get', async () => {
    const player = await client.playerApi.get();
    const business = await client.businessesApi.get({ id: +player.household.business_ids[0]});
    for (const transportId of business.transport_ids) {
        const transport = await client.transportsApi.get({ id: transportId });
        expect(transport).not.toBeNull();
    }
});