import BaseAPI, {ResponseObject} from './baseAPI';
import { apiRoutes } from "./api-routes";
import { Region } from '../models';
import { RegionType } from '../schema';

class RegionAPI extends BaseAPI {
    endpoint: string = apiRoutes.regions;

    /**
     * Get a list of all regions in the game.
     * @returns A list of all regions in the game.
     */
    async getAll(): Promise<RegionType[]> {
        try {
            const response: ResponseObject = await super.get();
            return (response.data as unknown[]).map((regionData: unknown) => Region.validate(regionData) as RegionType);
        } catch (error) {
            throw new Error(`Failed to fetch regions: ${(error as Error).message}`);
        }
    }
}

export default RegionAPI;
