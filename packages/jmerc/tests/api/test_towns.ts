import { test, expect } from '@jest/globals';
import { client } from '../setupTests';
import {ItemEnum} from "../../src/models/enums";

let towns;

beforeAll(async () => {
    towns = await client.townsApi.getAll();
});

test('getAll', async () => {
    expect(towns.length).toBeGreaterThan(0);
}, 60000);

test('data', async () => {
    for (const town of towns) {
        const data = await client.townsApi.getTownData(town.id);
        expect(data).not.toBeNull();
    }
}, 60000);

test('marketData', async () => {
    for (const town of towns) {
        const data = await client.townsApi.getMarketData(town.id);
        expect(data).not.toBeNull();
    }
}, 60000);

test('getMarketItemOverview', async () => {
    for (const town of towns) {
        const data = await client.townsApi.getMarketItem(town.id, ItemEnum.Arms);
        expect(data).not.toBeNull();
    }
}, 60000);