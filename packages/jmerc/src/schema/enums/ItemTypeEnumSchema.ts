import { z } from 'zod';

export const ItemTypeEnumSchema = z.enum([
    "commodity",
    "service",
    "special"
]);

export type ItemTypeEnum = z.infer<typeof ItemTypeEnumSchema>;
