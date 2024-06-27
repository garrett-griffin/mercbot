import { z } from 'zod';
import { PrestigeImpactSchema } from './PrestigeImpactSchema';
import { WorkerSchema } from './WorkerSchema';
import { SustenanceSchema } from "./SustenanceSchema";


export const HouseholdSchema = z.object({
    id: z.string(),
    name: z.string(),
    town_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    portrait: z.string(),
    gender: z.string(),
    account_id: z.string(),
    business_ids: z.array(z.string()),
    prestige: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    prestige_impacts: z.array(PrestigeImpactSchema).optional(),
    workers: z.array(WorkerSchema),
    operations: z.array(z.string()),
    caps: z.record(z.string(), z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])),
    sustenance: SustenanceSchema,
});

export type HouseholdType = z.infer<typeof HouseholdSchema>;
