import { z } from 'zod';
import { SkillEnumSchema } from './enums/SkillEnumSchema';

export const WorkerSchema = z.object({
    assignment: z.string(),
    capacity: z.number(),
    name: z.string(),
    skills: z.record(SkillEnumSchema, z.number()), // Using z.record to define a dictionary with Skill as key and float as value
});

export type WorkerType = z.infer<typeof WorkerSchema>;