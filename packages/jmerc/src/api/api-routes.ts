import { z } from 'zod';

export const rootUrl = 'https://play.mercatorio.io/'
export const apiUrl = rootUrl + 'api/';
export const staticUrl = rootUrl + 'static/js/';

export const apiRoutes = {
    turn: `clock`,
    towns: `towns`,
    townData: {
        get: z.object({
            url: `${apiUrl}/towns/:id/data`,
            method: 'GET',
        }),
    },
    // Add more routes here
};