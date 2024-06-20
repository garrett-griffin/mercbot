const BaseAPI = require('./baseAPI');
const { BuildingType, ItemClass, RecipeClass, TransportType } = require('../models/static');
const axios = require('axios');
const LRU = require('lru-cache');
const { plainToClass } = require('class-transformer');

const BASE_URL = 'https://play.mercatorio.io/static/js/';
const ROOT_URL = 'https://play.mercatorio.io/';

class StaticAPI extends BaseAPI {
    constructor(client) {
        super(client);
        this.cache = new LRU({ max: 1 });
    }

    async getBuildings() {
        const data = await this._get();
        return data['Gm'].map(item => BuildingType.modelValidate(item));
    }

    async getItems() {
        const data = await this._get();
        return data['RB'].map(item => ItemClass.modelValidate(item));
    }

    async getRecipes() {
        const data = await this._get();
        return data['F_'].map(item => RecipeClass.modelValidate(item));
    }

    async getTransport() {
        const data = await this._get();
        return data['g$'].map(item => TransportType.modelValidate(item));
    }

    async _get() {
        if (this.cache.has('staticData')) {
            return this.cache.get('staticData');
        }

        const response = await axios.get(ROOT_URL);
        const pattern = /src="\/static\/js\/(.*?)">/;
        const filename = response.data.match(pattern)[1];

        const staticResponse = await axios.get(BASE_URL + filename);
        const jsonPattern = /JSON\.parse\('(.*?)'\)/;
        const jsonData = JSON.parse(staticResponse.data.match(jsonPattern)[1].replace(/\\/g, ''));

        this.cache.set('staticData', jsonData);
        return jsonData;
    }
}

module.exports = StaticAPI;
