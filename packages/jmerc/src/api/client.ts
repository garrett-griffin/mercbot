import axios, { AxiosInstance } from 'axios';
import { apiUrl } from "./api-routes";
import TurnsAPI from './turns';
import PlayerAPI from './players';
import { TownsAPI } from './towns';

/**
 * Client for interacting with the Mercatorio API.
 */
class Client {
    private user: string;
    private token: string;
    private baseUrl: string;
    private session: AxiosInstance;
    endpoint: string;

    /**
     * Creates an instance of Client.
     * @param user - The API username.
     * @param token - The API token.
     * @param baseUrl - The base URL for the API.
     */
    constructor(user: string, token: string, baseUrl: string = apiUrl) {
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
     * @returns The response data.
     */
    async get(): Promise<object> {
        try {
            const response = await this.session.get(this.endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`GET ${endpoint} failed: ${(error as Error).message}`);
        }
    }

    /**
     * Makes a PATCH request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async patch(endpoint: string, data: object): Promise<object> {
        try {
            const response = await this.session.patch(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`PATCH ${endpoint} failed: ${(error as Error).message}`);
        }
    }

    /**
     * Makes a POST request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async post(endpoint: string, data: object): Promise<object> {
        try {
            const response = await this.session.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`POST ${endpoint} failed: ${(error as Error).message}`);
        }
    }

    /**
     * Makes a PUT request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async put(endpoint: string, data: object): Promise<object> {
        try {
            const response = await this.session.put(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`PUT ${endpoint} failed: ${(error as Error).message}`);
        }
    }

    get Turn(): TurnsAPI {
        return new TurnsAPI(this);
    }

    async getTurn(): Promise<object> {
        const turnAPI = new TurnsAPI(this);
        return await turnAPI.get();
    }

    get Player(): PlayerAPI {
        return new PlayerAPI(this);
    }

    async getPlayer(): Promise<object> {
        const playerAPI = new PlayerAPI(this);
        return await playerAPI.get();
    }

    get Towns(): TownsAPI {
        return new TownsAPI(this);
    }

    async getTowns(): Promise<object[]> {
        const townsAPI = new TownsAPI(this);
        return await townsAPI.getAll();
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async getTown(id: number): Promise<object> {
        const townsAPI = new TownsAPI(this);
        return await townsAPI.getTown(id);
    }
}

export default Client;
