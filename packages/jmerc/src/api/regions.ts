import BaseAPI from './baseAPI';
import { Region } from '../models/region';
import { RegionType } from '../schema/RegionSchema';

class RegionAPI extends BaseAPI {
    static rootUrl(): string {
        return 'api/map/regions';
    }

    /**
     * Get a list of all regions in the game.
     * @returns A list of all regions in the game.
     */
    async getAll(): Promise<RegionType[]> {
        try {
            const response = await super.get(RegionAPI.rootUrl()) as unknown[];
            return response.map((regionData: unknown) => Region.validate(regionData));
        } catch (error) {
            throw new Error(`Failed to fetch regions: ${(error as Error).message}`);
        }
    }
}

export default RegionAPI;
