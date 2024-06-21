import BaseAPI from './baseAPI';
import { Region as Regions } from '../models/region';

class RegionAPI extends BaseAPI {
    static rootUrl(): string {
        return 'api/map/regions';
    }

    /**
     * Get a list of all regions in the game.
     * @returns A list of all regions in the game.
     */
    async getAll(): Promise<Regions[]> {
        try {
            const response = await super.get(RegionAPI.rootUrl());
            return response.map((regionData: any) => Regions.modelValidate(regionData));
        } catch (error) {
            throw new Error(`Failed to fetch regions: ${(error as Error).message}`);
        }
    }
}

export default RegionAPI;
