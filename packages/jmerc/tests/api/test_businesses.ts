import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('get', async () => {
    const player = await client.playerApi.get();
    const business = await client.businessesApi.get({ id: +player.household.business_ids[0] });
    expect(business).not.toBeNull();
});