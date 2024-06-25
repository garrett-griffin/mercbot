import { z } from 'zod';

export const TransportTypeEnumSchema = z.enum([
    "cog",
    "handcart",
    "hulk",
    "snekkja",
    "tumbrel"
]);

export type TransportTypeEnumType = z.infer<typeof TransportTypeEnumSchema>;
