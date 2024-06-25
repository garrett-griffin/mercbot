import { z } from 'zod';

export const SkillEnumSchema = z.enum([
    "crafting",
    "forging",
    "maritime",
    "mercantile",
    "nutrition",
    "textile",
    "weaponry"
]);

export type SkillEnumType = z.infer<typeof SkillEnumSchema>;
