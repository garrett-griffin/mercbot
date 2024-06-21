import { z } from 'zod';
import { TransportJourneyLegSchema } from './TransportJourneyLegSchema';

export const TransportJourneySchema = z.object({
    category: z.string(),
    start_town_id: z.number(),
    distance: z.number(),
    moves: z.number(),
    legs: z.array(TransportJourneyLegSchema)
});

export type TransportJourneyType = z.infer<typeof TransportJourneySchema>;
