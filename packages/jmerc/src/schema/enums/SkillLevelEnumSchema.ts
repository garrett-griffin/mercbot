import { z } from 'zod';

export const SkillLevelEnumSchema = z.enum([
    "99",
    "599",
    "2699",
    "9999"
]);

export type SkillLevelEnumType = z.infer<typeof SkillLevelEnumSchema>;
