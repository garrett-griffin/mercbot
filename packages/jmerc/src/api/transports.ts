import BaseAPI from './baseAPI';
import { ResponseObject } from "./baseAPI";
import { apiRoutes } from "./api-routes";
import {Transport, TradeRoute} from '../models/transport';
import { ItemTypeEnumType } from "../schema/enums/ItemTypeEnumSchema";
import { Manager } from "../models/manager";
import { SetManagerFailedException, convertFloatsToStrings } from "../utils";
import { pickBy } from 'lodash';
import * as _ from 'lodash';

class TransportsAPI extends BaseAPI {

    endpoint: string = apiRoutes.transports;

    /**
     * Get data for a town.
     * @param id - The ID of the transport.
     * @returns The data for the transport.
     */
    async get({ id }: { endpoint?: string, id?: number, item?: string } = {}): Promise<Transport> {
        try {
            const response = await super.get({ id });
            return Transport.validate(response);
        } catch (error) {
            throw new Error(`Failed to fetch town data for ID ${id}: ${(error as Error).message}`);
        }
    }

    /**
     * Sets the manager for the item.
     * @param id - The ID of the transport.
     * @param item - The item to set the manager for.
     * @param manager - The manager to set.
     * @returns The transport route with the manager set.
     */
    async setManager(id: number, item: ItemTypeEnumType, manager: Manager): Promise<TradeRoute> {
        const json = convertFloatsToStrings(pickBy(manager, _.identity));
        const response: ResponseObject = await super.patch({ endpoint: apiRoutes.transportManager, id, item, data: json });
        if (response.status == 200) {
            return TradeRoute.validate(response);
        } else {
            throw new SetManagerFailedException(
                `Failed to set manager for ${item} on transport ${id}: ${response.statusText}`
            );
        }
    }
}

export default TransportsAPI;