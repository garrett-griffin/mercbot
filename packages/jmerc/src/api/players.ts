import BaseAPI from './baseAPI';
import { apiRoutes } from "./api-routes";
import { Player } from '../models/player';

class PlayersAPI extends BaseAPI {
    endpoint: string = apiRoutes.player;

    async get(): Promise<Player> {
        try {
            const response = await super.get();
            return Player.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch player data: ${error.message}`);
        }
    }
}

export default PlayersAPI;
