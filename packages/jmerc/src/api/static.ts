import axios from 'axios';
import BaseAPI from './baseAPI';
import Client from '../client';
import { staticUrl, rootUrl } from "./api-routes";
import {Building, BuildingType} from '../models'
import { LRUCache } from "lru-cache";
import { Item } from '../models';
import { Recipe } from '../models';
import {Transport, TransportType} from '../models';

class StaticAPI extends BaseAPI {
    endpoint: string = staticUrl;
    cache: LRUCache<string, object[]>;

    constructor(client: Client) {
        super(client);
        this.cache = new LRUCache<string, object[]>({ max: 1 });
    }

    async getBuildings(): Promise<Building[]> {
        const data = await this._get();
        return data['Gm'].map(item => BuildingType.validate(item));
    }

    async getItems(): Promise<Item[]> {
        const data = await this._get();
        return data['RB'].map(item => Item.validate(item));
    }

    async getRecipes(): Promise<Recipe[]> {
        const data = await this._get();
        return data['F_'].map(item => Recipe.validate(item));
    }

    async getTransport(): Promise<Transport[]> {
        const data = await this._get();
        return data['g$'].map(item => TransportType.validate(item));
    }

    async _get(): Promise<object> {
        if (this.cache.has('staticData')) {
            return this.cache.get('staticData');
        }

        const response = await axios.get(rootUrl);
        const pattern = /src="\/static\/js\/(.*?)">/;
        const filename = response.data.match(pattern)[1];

        const staticResponse = await axios.get(staticUrl + filename);
        const jsonPattern = /JSON\.parse\('(.*?)'\)/;
        const jsonData = JSON.parse(staticResponse.data.match(jsonPattern)[1].replace(/\\/g, ''));

        this.cache.set('staticData', jsonData);
        return jsonData;
    }
}

export default StaticAPI;