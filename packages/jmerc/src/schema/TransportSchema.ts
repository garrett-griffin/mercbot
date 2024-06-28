import { z } from 'zod';
import { TransportTypeSchema } from './TransportTypeSchema';
import { LocationSchema } from './LocationSchema';
import { InventorySchema } from './InventorySchema';
import { TransportCargoSchema } from './TransportCargoSchema';
import { OperationSchema } from './OperationSchema';
import { ProducerSchema } from './ProducerSchema';
import { TradeRouteSchema } from './TradeRouteSchema';
import { TransportJourneySchema } from './TransportJourneySchema';
import {TransportTypeEnum} from "../models/enums/transportTypeEnum";
import {TransportTypeEnumSchema} from "./enums/TransportTypeEnumSchema";

export const TransportSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    reference: z.string(),
    type: TransportTypeEnumSchema,
    size: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    name: z.string(),
    owner_id: z.string(),
    hometown_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    location: LocationSchema,
    domain: z.array(LocationSchema).optional(),
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    fish_quantity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    inventory: InventorySchema,
    cargo: TransportCargoSchema.optional(),
    previous_operations: OperationSchema.optional(),
    provider_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    producer: ProducerSchema.optional(),
    route: TradeRouteSchema.optional(),
    journey: TransportJourneySchema
});

export type TransportType = z.infer<typeof TransportSchema>;
