import { z } from 'zod';

export const ItemTypeEnumSchema = z.enum([
    "commodity",
    "service",
    "special"
]);

export type ItemTypeEnumType = z.infer<typeof ItemTypeEnumSchema>;
