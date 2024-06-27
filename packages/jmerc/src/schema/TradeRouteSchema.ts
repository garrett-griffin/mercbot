import { z } from 'zod';
import { AccountSchema } from './AccountSchema';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { ManagerSchema } from './ManagerSchema';
import { FlowSchema } from './FlowSchema';

export const TradeRouteSchema = z.object({
    id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    reference: z.string(),
    local_town: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    remote_town: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    reserved_import: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    reserved_export: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    distance: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    moves: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    provider_id: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    account_id: z.string(),
    account: AccountSchema,
    managers: z.record(ItemEnumSchema, ManagerSchema),
    current_flows: z.record(ItemEnumSchema, FlowSchema),
    previous_flows: z.record(ItemEnumSchema, FlowSchema)
});

export type TradeRouteType = z.infer<typeof TradeRouteSchema>;
