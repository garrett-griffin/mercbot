import { z } from 'zod';
import { ItemEnumSchema } from './enums';
import { AccountSchema } from './AccountSchema';
import { ManagerSchema } from './ManagerSchema';
import { FlowSchema } from './FlowSchema';

export const InventorySchema = z.object({
    account: AccountSchema,
    capacity: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    managers: z.record(ItemEnumSchema, ManagerSchema).optional(),
    previous_flows: z.record(ItemEnumSchema, FlowSchema).optional().default({}),
    reserved: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
});

export type InventoryType = z.infer<typeof InventorySchema>;
