import { z } from 'zod';
import { BuildingConstructionSchema } from './BuildingConstructionSchema';
import { DeliveryCostSchema } from './DeliveryCostSchema';
import { LocationSchema } from './LocationSchema';
import { ProducerSchema } from './ProducerSchema';
import { BuildingStorageSchema } from './BuildingStorageSchema';
import { BuildingUpgradeTypeEnumSchema } from './enums/BuildingUpgradeTypeEnumSchema';
import {BuildingTypeEnumSchema} from "./enums/BuildingTypeEnumSchema";

export const BuildingSchema = z.object({
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    construction: BuildingConstructionSchema.optional().nullable(),
    delivery_cost: DeliveryCostSchema.optional(),
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    land: z.array(LocationSchema).optional(),
    name: z.string().optional(),
    owner_id: z.string().optional(),
    producer: ProducerSchema.optional(),
    provider_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    size: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    storage: BuildingStorageSchema.optional(),
    sublocation: LocationSchema.optional(),
    town_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    type: BuildingTypeEnumSchema,
    upgrades: z.array(BuildingUpgradeTypeEnumSchema).optional()
});

export type BuildingType = z.infer<typeof BuildingSchema>;
