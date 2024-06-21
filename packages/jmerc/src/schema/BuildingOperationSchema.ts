import { z } from 'zod';
import { ItemEnumSchema } from './enums/ItemEnumSchema';
import { FlowSchema } from './FlowSchema';
import { OperationSchema } from './OperationSchema';

export const BuildingOperationSchema = z.object({
    total_flow: z.record(ItemEnumSchema, FlowSchema).optional(),
    operations: z.array(OperationSchema).optional()
});

export type BuildingOperationType = z.infer<typeof BuildingOperationSchema>;
