import { test, expect } from '@jest/globals';
import { client } from '../setupTests';

test('get', async () => {
    const player = await client.playerApi.get();
    expect(player).not.toBeNull();
});