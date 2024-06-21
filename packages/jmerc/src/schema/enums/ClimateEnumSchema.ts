import { z } from 'zod';

export const ClimateEnumSchema = z.enum([
    "cold",
    "warm"
]);

export type ClimateEnum = z.infer<typeof ClimateEnumSchema>;
