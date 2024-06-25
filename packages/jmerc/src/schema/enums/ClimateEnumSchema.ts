import { z } from 'zod';

export const ClimateEnumSchema = z.enum([
    "cold",
    "warm"
]);

export type ClimateEnumType = z.infer<typeof ClimateEnumSchema>;
