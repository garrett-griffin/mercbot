import BaseAPI from './baseAPI';
import { apiRoutes } from "./api-routes";
import { Turn } from '../models/turn';

class TurnsAPI extends BaseAPI {
    endpoint: string = apiRoutes.turn;

    /**
     * Get the current turn data.
     * @returns The current turn data.
     */
    async get(): Promise<Turn> {
        try {
            const response = await super.get(TurnsAPI.rootUrl());
            return Turn.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch turn data: ${(error as Error).message}`);
        }
    }
}

export default TurnsAPI;
