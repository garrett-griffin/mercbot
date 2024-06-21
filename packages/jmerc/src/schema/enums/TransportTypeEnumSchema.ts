import { z } from 'zod';

export const TransportTypeEnumSchema = z.enum([
    "cog",
    "handcart",
    "hulk",
    "snekkja",
    "tumbrel"
]);

export type TransportTypeEnum = z.infer<typeof TransportTypeEnumSchema>;
