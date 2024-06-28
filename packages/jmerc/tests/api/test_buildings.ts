import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('get', async () => {
    const player = await client.playerApi.get();
    const business = await client.businessesApi.get({ id: +player.household.business_ids[0] });
    for (const building of business.buildings) {
        const buildingData = await client.buildingsApi.get({ id: +building.id });
        expect(buildingData).not.toBeNull();
    }
});