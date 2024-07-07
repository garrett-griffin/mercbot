// noinspection TypeScriptFieldCanBeMadeReadonly

import axios, {AxiosInstance} from 'axios';
import {apiUrl} from "./api/api-routes";
import TurnsAPI from './api/turns';
import PlayerAPI from './api/players';
import TownsAPI from './api/towns';
import BuildingsAPI from './api/buildings';
import BusinessesAPI from './api/businesses';
import RegionsAPI from './api/regions';
import StaticAPI from './api/static';
import TransportsAPI from './api/transports';
import {RecipeEnumType} from "./schema/enums";
import { Town } from "./game";
import { Player } from "./game";
import { BuildingOperation, Operation } from "./game"
import {Recipe} from "./game";
import {Recipe as RecipeModel} from "./models/recipe"
import {Building} from "./game";
import {Transport} from "./game";
import {Storehouse} from "./game";
import { Operation as OperationModel } from "./models/operation"

/**
 * Client for interacting with the Mercatorio API.
 */
export class Client {
    private user: string;
    private token: string;
    private baseUrl: string;
    private session: AxiosInstance;
    endpoint: string;
    buildingsApi: BuildingsAPI;
    businessesApi: BusinessesAPI;
    regionsApi: RegionsAPI;
    playerApi: PlayerAPI;
    staticApi: StaticAPI;
    townsApi: TownsAPI;
    transportsApi: TransportsAPI;


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

        this.buildingsApi = new BuildingsAPI(this);
        this.businessesApi = new BusinessesAPI(this);
        this.regionsApi = new RegionsAPI(this);
        this.playerApi = new PlayerAPI(this);
        this.staticApi = new StaticAPI(this);
        this.townsApi = new TownsAPI(this);
        this.transportsApi = new TransportsAPI(this);
    }

    /**
     * Makes a GET request.
     * @returns The response data.
     */
    async get(endpoint: string): Promise<object> {
        try {
            const response = await this.session.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`GET ${endpoint} failed: ${(error as Error).message}`);
        }
    }

    /**-
     * Makes a PATCH request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async patch(endpoint: string, data: object): Promise<object> {
        try {
            return await this.session.patch(endpoint, data);
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

    async getPlayer(): Promise<Player> {
        const p = new Player(this);
        await p.load();
        return p;
    }

    get Towns(): TownsAPI {
        return new TownsAPI(this);
    }

    async getTowns(filter: string[] = []): Promise<Town[]> {
        const townsAPI = new TownsAPI(this);
        const towns = await townsAPI.getAll();
        const tasks = towns
            .filter(town => !filter.length || filter.includes(town.name))
            .map(town => this.getTown(town.id));
        return await Promise.all(tasks) as Town[];
    }

    /**
     * Get data for a town.
     * @param id - The ID of the town.
     * @returns The data for the town.
     */
    async getTown(id: number): Promise<Town> {
        const data = await this.townsApi.getTown(id);
        return new Town(this, id, data);
    }

    async getBuilding(player: Player, id: number): Promise<Building> {
        /**
         * Get a building by its ID.
         *
         * @param player - The player.
         * @param id - The ID of the building.
         *
         * @returns The building with the given ID.
         */
        const b = new Building(this, player, id);
        await b.load();

        return b;
    }

    async getBuildingOperation(player: Player, buildingId: number): Promise<BuildingOperation> {
        const buildingOperation = new BuildingOperation(this, player, buildingId);
        await buildingOperation.load();
        return buildingOperation;
    }

    async getOperation(player: Player, buildingOperation: BuildingOperation, operation: OperationModel): Promise<Operation> {
        const op = new Operation(this, player, buildingOperation, operation);
        await op.load();
        return op;
    }

    async getRecipe(options: {recipe?: RecipeModel, recipeName?: RecipeEnumType}): Promise<Recipe> {
        const r = new Recipe({ client: this, recipe: options.recipe, recipeName: options.recipeName});
        await r.load();
        return r;
    }

    async getStorehouse(player: Player): Promise<Storehouse> {
        const storehouse = new Storehouse(this, player);
        await storehouse.load();
        return storehouse;
    }

    async getTransport(player: Player, id: number): Promise<Transport> {
        const transport = new Transport(this, player, id);
        await transport.load();
        return transport;
    }
}

export default Client;
