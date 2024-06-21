import { z } from 'zod';
import { PathSchema } from './PathSchema';

export const TransportJourneyLegSchema = z.object({
    path: z.array(PathSchema)
});

export type TransportJourneyLegType = z.infer<typeof TransportJourneyLegSchema>;
