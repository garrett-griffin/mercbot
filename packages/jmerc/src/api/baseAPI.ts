import Client from '../client';
import AxiosResponse from 'axios';

export interface ResponseObject {
    // `data` is the response that was provided by the server
    data?: object,

    // `status` is the HTTP status code from the server response
    status?: number,

    // `statusText` is the HTTP status message from the server response
    // As of HTTP/2 status text is blank or unsupported.
    // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
    statusText?: string,

    // `headers` the HTTP headers that the server responded with
    // All header names are lower cased and can be accessed using the bracket notation.
    // Example: `response.headers['content-type']`
    headers?: object,

    // `config` is the config that was provided to `axios` for the request
    config?: object,

    // `request` is the request that generated this response
    // It is the last ClientRequest instance in node.js (in redirects)
    // and an XMLHttpRequest instance in the browser
    request?: object
}

abstract class BaseAPI {
    private client: Client;
    endpoint: string;

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
     * @param id - The id of the object to get.
     * @param item - The name of the item to get.
     * @returns The response data.
     */
    async get({ endpoint, id, item }: { endpoint?: string, id?: number, item?: string } = {}): Promise<object> {
        let url = this.endpoint;
        if(endpoint) {
            url = endpoint;
        }
        if(id) {
            url = url.replace(':id', id.toString());
        }
        if(item) {
            url = url.replace(':item', item);
        }
        return this.client.get(url);
    }

    /**
     * Makes a POST request.
     * @param endpoint - The API endpoint.
     * @param id - The id of the object to get.
     * @param item - The name of the item to get.
     * @param data - The data to send.
     * @returns The response data.
     */
    async post({ endpoint, id, item, data }: { endpoint?: string, id?: number, item?: string, data?: object } = {}): Promise<object> {
        let url = this.endpoint;
        if(endpoint) {
            url = endpoint;
        }
        if(id) {
            url = url.replace(':id', id.toString());
        }
        if(item) {
            url = url.replace(':item', item);
        }
        return this.client.post(url, data);
    }

    /**
     * Makes a PUT request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async put({ endpoint, id, item, data }: { endpoint?: string, id?: number, item?: string, data?: object } = {}): Promise<object> {
        let url = this.endpoint;
        if(endpoint) {
            url = endpoint;
        }
        if(id) {
            url = url.replace(':id', id.toString());
        }
        if(item) {
            url = url.replace(':item', item);
        }
        return this.client.put(url, data);
    }

    /**
     * Makes a PATCH request.
     * @param endpoint - The API endpoint.
     * @param data - The data to send.
     * @returns The response data.
     */
    async patch({ endpoint, id, item, data }: { endpoint?: string, id?: number, item?: string, data?: object } = {}): Promise<object> {
        let url = this.endpoint;
        if(endpoint) {
            url = endpoint;
        }
        if(id) {
            url = url.replace(':id', id.toString());
        }
        if(item) {
            url = url.replace(':item', item);
        }
        return this.client.patch(url, data);
    }
}

export default BaseAPI;
