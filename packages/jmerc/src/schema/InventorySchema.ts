import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { AccountSchema } from './AccountSchema';
import { ManagerSchema } from './ManagerSchema';
import { FlowSchema } from './FlowSchema';

export const InventorySchema = z.object({
    account: AccountSchema,
    capacity: z.number(),
    managers: z.map(ItemEnumSchema, ManagerSchema).optional(),
    previous_flows: z.record(ItemEnumSchema, FlowSchema).optional().default({}),
    reserved: z.number().optional(),
});

export type InventoryType = z.infer<typeof InventorySchema>;
