import { z } from 'zod';
import { TransportJourneyLegSchema } from './TransportJourneyLegSchema';

export const TransportJourneySchema = z.object({
    category: z.string(),
    start_town_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    distance: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    moves: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    legs: z.array(TransportJourneyLegSchema)
});

export type TransportJourneyType = z.infer<typeof TransportJourneySchema>;
