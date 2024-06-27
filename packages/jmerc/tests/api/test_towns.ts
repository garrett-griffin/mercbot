import { test, expect } from '@jest/globals';
import { client } from '../setupTests';
import {ItemEnum} from "../../src/models/enums/itemEnum";

test('getAll', async () => {
    const towns = await client.townsApi.getAll();
    expect(towns.length).toBeGreaterThan(0);
});

test('data', async () => {
    const towns = await client.townsApi.getAll();
    for (const town of towns) {
        const data = await client.townsApi.getTownData(town.id);
        expect(data).not.toBeNull();
    }
});

test('marketData', async () => {
    const towns = await client.townsApi.getAll();
    for (const town of towns) {
        const data = await client.townsApi.getMarketData(town.id);
        expect(data).not.toBeNull();
    }
});

test('getMarketItemOverview', async () => {
    const towns = await client.townsApi.getAll();
    for (const town of towns) {
        const data = await client.townsApi.getMarketItem(town.id, ItemEnum.Arms);
        expect(data).not.toBeNull();
    }
});