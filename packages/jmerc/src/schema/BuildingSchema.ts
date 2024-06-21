import { z } from 'zod';
import { BuildingConstructionSchema } from './BuildingConstructionSchema';
import { DeliveryCostSchema } from './DeliveryCostSchema';
import { LocationSchema } from './LocationSchema';
import { ProducerSchema } from './ProducerSchema';
import { BuildingStorageSchema } from './BuildingStorageSchema';
import { BuildingTypeSchema } from './BuildingTypeSchema';
import { BuildingUpgradeTypeEnumSchema } from './enums/BuildingUpgradeTypeEnumSchema';

export const BuildingSchema = z.object({
    capacity: z.number().optional(),
    construction: BuildingConstructionSchema.optional(),
    delivery_cost: DeliveryCostSchema,
    id: z.number(),
    land: z.array(LocationSchema).optional(),
    name: z.string(),
    owner_id: z.number(),
    producer: ProducerSchema.optional(),
    provider_id: z.number().optional(),
    size: z.number().optional(),
    storage: BuildingStorageSchema.optional(),
    sublocation: LocationSchema.optional(),
    town_id: z.number(),
    type: BuildingTypeSchema,
    upgrades: z.array(BuildingUpgradeTypeEnumSchema).optional()
});

export type BuildingType = z.infer<typeof BuildingSchema>;
