import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('all', async () => {
    const response = await client.regionsApi.getAll();
    expect(response.length).toBeGreaterThan(0);
});