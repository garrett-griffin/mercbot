import { z } from 'zod';

export const rootUrl = 'https://play.mercatorio.io/'
export const apiUrl = rootUrl + 'api/';
export const staticUrl = rootUrl + 'static/js/';

export const apiRoutes = {
    buildings: `buildings/:id`,
    buildingOperations: `buildings/:id/operations`,
    buildingSetManager: `buildings/:id/storage/inventory/:item`,
    business: `businesses/:id`,
    marketData: `towns/:id/marketdata`,
    marketItem: `towns/:id/markets/:item`,
    orders: `towns/:id/markets/:item/orders`,
    player: `player`,
    producer: `buildings/:id/producer`,
    regions: `map/regions`,
    towns: `towns`,
    townData: `towns/:id/data`,
    transports: `transports/:id`,
    transportManager: `transports/:id/route/inventory/item`,
    turn: `clock`,
    // Add more routes here
};