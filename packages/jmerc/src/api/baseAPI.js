class BaseAPI {
    /**
     * Creates an instance of BaseAPI.
     * @param {Client} client - The client to use for making requests.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Makes a GET request.
     * @param {string} endpoint - The API endpoint.
     * @returns {Promise<object>} The response data.
     */
    async get(endpoint) {
        return this.client.get(endpoint);
    }

    /**
     * Makes a POST request.
     * @param {string} endpoint - The API endpoint.
     * @param {object} data - The data to send.
     * @returns {Promise<object>} The response data.
     */
    async post(endpoint, data) {
        return this.client.post(endpoint, data);
    }

    /**
     * Makes a POST request.
     * @param {string} endpoint - The API endpoint.
     * @param {object} data - The data to send.
     * @returns {Promise<object>} The response data.
     */
    async put(endpoint, data) {
        return this.client.put(endpoint, data);
    }

    /**
     * Makes a PATCH request.
     * @param {string} endpoint - The API endpoint.
     * @param {object} data - The data to send.
     * @returns {Promise<object>} The response data.
     */
    async patch(endpoint, data) {
        return this.client.patch(endpoint, data);
    }
}

module.exports = BaseAPI;
