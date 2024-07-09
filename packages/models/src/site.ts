import { z } from 'zod';
import {SeasonSchema} from "./season";

export const SiteSchema = z.object({
    pk: z.number().int(),
    name: z.string(),
    url: z.string(),
    seasons: z.array(SeasonSchema) // adjust this based on your `Season` schema
});

export type SiteType = z.infer<typeof SiteSchema>;