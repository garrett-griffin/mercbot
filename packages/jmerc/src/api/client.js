const axios = require('axios');
const TurnsAPI = require('./turns');
const PlayerAPI = require('./players');
const TownsAPI = require('./towns');

/**
 * Client for interacting with the Mercatorio API.
 */
class Client {
    /**
     * Creates an instance of Client.
     * @param {string} user - The API username.
     * @param {string} token - The API token.
     * @param {string} [baseUrl=https://play.mercatorio.io/] - The base URL for the API.
     */
    constructor(user, token, baseUrl = 'https://play.mercatorio.io/') {
        this.user = user;
        this.token = token;
        this.baseUrl = baseUrl;
        this.session = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'X-Merc-User': this.user,
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    /**
     * Makes a GET request.
     * @param {string} endpoint - The API endpoint.
     * @returns {Promise<object>} The response data.
     */
    async get(endpoint) {
        try {
            const response = await this.session.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`GET ${endpoint} failed: ${error.message}`);
        }
    }

    async patch(endpoint, data) {
        try {
            const response = await this.session.patch(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`PATCH ${endpoint} failed: ${error.message}`);
        }
    }

    /**
     * Makes a POST request.
     * @param {string} endpoint - The API endpoint.
     * @param {object} data - The data to send.
     * @returns {Promise<object>} The response data.
     */
    async post(endpoint, data) {
        try {
            const response = await this.session.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`POST ${endpoint} failed: ${error.message}`);
        }
    }

    /**
     * Makes a PUT request.
     * @param {string} endpoint - The API endpoint.
     * @param {object} data - The data to send.
     * @returns {Promise<object>} The response data.
     */
    async put(endpoint, data) {
        try {
            const response = await this.session.put(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`PUT ${endpoint} failed: ${error.message}`);
        }
    }

    get Turn() {
        return new TurnsAPI(this);
    }

    async getTurn() {
        const turnAPI = new TurnsAPI(this);
        return await turnAPI.get();
    }

    get Player() {
        return new PlayerAPI(this);
    }

    async getPlayer() {
        const playerAPI = new PlayerAPI(this);
        return await playerAPI.get();
    }

    get Towns() {
        return new TownsAPI(this);
    }

    async getTowns() {
        const townsAPI = new TownsAPI(this);
        return await townsAPI.getAll();
    }

    /**
     * Get data for a town.
     * @param {number} id - The ID of the town.
     * @returns {Promise<Town>} The data for the town.
     */
    async getTown(id) {
        const townsAPI = new TownsAPI(this);
        return await townsAPI.getTown(id);
    }
}

module.exports = Client;

