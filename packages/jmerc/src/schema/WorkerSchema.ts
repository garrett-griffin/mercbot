import { z } from 'zod';
import { SkillEnumSchema } from './enums/SkillEnumSchema';

export const WorkerSchema = z.object({
    assignment: z.string(),
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    name: z.string(),
    skills: z.record(SkillEnumSchema, z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])),
});

export type WorkerType = z.infer<typeof WorkerSchema>;