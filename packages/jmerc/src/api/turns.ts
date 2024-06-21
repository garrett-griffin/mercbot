import BaseAPI from './baseAPI';
import { Turn } from '../models/turn';

class TurnsAPI extends BaseAPI {
    static rootUrl(): string {
        return 'api/clock'; // Adjust if the endpoint is different
    }

    /**
     * Get the current turn data.
     * @returns The current turn data.
     */
    async get(): Promise<Turn> {
        try {
            const response = await super.get(TurnsAPI.rootUrl());
            return Turn.modelValidate(response);
        } catch (error) {
            throw new Error(`Failed to fetch turn data: ${(error as Error).message}`);
        }
    }
}

export default TurnsAPI;
