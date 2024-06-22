import Client from './client';

abstract class BaseAPI {
    private client: Client;

    /**
     * Creates an instance of BaseAPI.
     * @param client - The client to use for making requests.
     */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Makes a GET request.
     * @param endpoint - The API endpoint.
     * @returns The response data.
     */
    async get(endpoint: string): Promise<object> {
        return this.client.get(endpoint);
    }

    /**
     * Makes a POST request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async post(endpoint: string, data: object): Promise<object> {
        return this.client.post(endpoint, data);
    }

    /**
     * Makes a PUT request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async put(endpoint: string, data: object): Promise<object> {
        return this.client.put(endpoint, data);
    }

    /**
     * Makes a PATCH request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async patch(endpoint: string, data: object): Promise<object> {
        return this.client.patch(endpoint, data);
    }
}

export default BaseAPI;
