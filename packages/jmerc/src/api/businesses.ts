import BaseAPI, {ResponseObject} from './baseAPI';
import { apiRoutes } from "./api-routes";
import {Business} from "../models";

class BusinessesAPI extends BaseAPI {

    endpoint: string = apiRoutes.business;

    /**
     Get a business by its ID.
     * @param {number} id - The ID of the business.
     * @returns The business with the given ID.
     */
    async get({ id }: { endpoint?: string, id?: number, item?: string } = {}): Promise<Business> {
        try {
            const response: ResponseObject = await super.get({ id });
            return Business.validate(response.data);
        } catch (error) {
            throw new Error(`Failed to fetch business with ID ${id}: ${(error as Error).message}`);
        }
    }
}

export default BusinessesAPI;