import { z } from 'zod';
import { TransportTypeSchema } from './TransportTypeSchema';
import { LocationSchema } from './LocationSchema';
import { InventorySchema } from './InventorySchema';
import { TransportCargoSchema } from './TransportCargoSchema';
import { OperationSchema } from './OperationSchema';
import { ProducerSchema } from './ProducerSchema';
import { TradeRouteSchema } from './TradeRouteSchema';
import { TransportJourneySchema } from './TransportJourneySchema';

export const TransportSchema = z.object({
    id: z.number(),
    reference: z.string(),
    type: TransportTypeSchema,
    size: z.number(),
    name: z.string(),
    owner_id: z.number(),
    hometown_id: z.number(),
    location: LocationSchema,
    domain: z.array(LocationSchema).optional(),
    capacity: z.number(),
    fish_quantity: z.number().optional(),
    inventory: InventorySchema,
    cargo: TransportCargoSchema.optional(),
    previous_operations: OperationSchema.optional(),
    provider_id: z.number().optional(),
    producer: ProducerSchema.optional(),
    route: TradeRouteSchema.optional(),
    journey: TransportJourneySchema
});

export type TransportType = z.infer<typeof TransportSchema>;
