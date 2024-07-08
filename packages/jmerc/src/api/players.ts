import BaseAPI, {ResponseObject} from './baseAPI';
import { apiRoutes } from "./api-routes";
import { Player } from '../models';

class PlayersAPI extends BaseAPI {
    endpoint: string = apiRoutes.player;

    async get(): Promise<Player> {
        try {
            const response: ResponseObject = await super.get();
            let result = await Player.validate(response.data);

            result.initializeSubProperties();
            return result;
        } catch (error) {
            throw new Error(`Failed to fetch player data: ${error.message}`);
        }
    }
}

export default PlayersAPI;
