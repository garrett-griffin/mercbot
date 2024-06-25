import { z } from 'zod';

export const rootUrl = 'https://play.mercatorio.io/'
export const apiUrl = rootUrl + 'api/';
export const staticUrl = rootUrl + 'static/js/';

export const apiRoutes = {
    turn: `clock`,
    towns: `towns`,
    townData: `towns/:id/data`,
    marketData: `towns/:id/marketdata`,
    marketItem: `towns/:id/markets/:item`,
    regions: 'map/regions',
    // Add more routes here
};