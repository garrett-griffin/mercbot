import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('getBuildings', async () => {
    const buildings = await client.staticApi.getBuildings();
    expect(buildings.length).toBeGreaterThan(0);
});

test('getItems', async () => {
    const items = await client.staticApi.getItems();
    expect(items.length).toBeGreaterThan(0);
});

test('getRecipes', async () => {
    const recipes = await client.staticApi.getRecipes();
    expect(recipes.length).toBeGreaterThan(0);
});

test('getTransport', async () => {
    const transport = await client.staticApi.getTransport();
    expect(transport.length).toBeGreaterThan(0);
});