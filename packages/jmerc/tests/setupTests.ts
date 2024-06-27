import { config } from 'dotenv';
import { Client } from '../src/client';

config();

const apiToken = process.env.API_TOKEN;
const user = process.env.API_USER;

if (!apiToken) {
    throw new Error('API_TOKEN environment variable not set');
}
if (!user) {
    throw new Error('API_USER environment variable not set');
}

export const client = new Client(user, apiToken);