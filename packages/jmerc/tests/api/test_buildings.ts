import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('get', async () => {
    const player = await client.playerApi.get();
    const business = await client.businessesApi.get({ id: +player.household.business_ids[0] });
    console.log("Got to A - building length: "+business.buildings.length);
    for (const building of business.buildings) {
        console.log("Got to B");
        const buildingData = await client.buildingsApi.get({ id: +building.id });
        console.log("Got to C");
        expect(buildingData).not.toBeNull();
    }
});