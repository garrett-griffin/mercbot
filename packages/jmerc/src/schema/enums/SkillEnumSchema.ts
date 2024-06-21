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

export type SkillEnum = z.infer<typeof SkillEnumSchema>;
