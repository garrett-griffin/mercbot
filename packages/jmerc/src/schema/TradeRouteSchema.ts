import { z } from 'zod';
import { AccountSchema } from './AccountSchema';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { ManagerSchema } from './ManagerSchema';
import { FlowSchema } from './FlowSchema';

export const TradeRouteSchema = z.object({
    id: z.number(),
    reference: z.string(),
    local_town: z.number(),
    remote_town: z.number(),
    capacity: z.number(),
    reserved_import: z.number(),
    reserved_export: z.number(),
    distance: z.number(),
    moves: z.number(),
    provider_id: z.number(),
    account_id: z.string(),
    account: AccountSchema,
    managers: z.record(ItemEnumSchema, ManagerSchema),
    current_flows: z.record(ItemEnumSchema, FlowSchema),
    previous_flows: z.record(ItemEnumSchema, FlowSchema)
});

export type TransportRouteType = z.infer<typeof TradeRouteSchema>;
