import { z } from 'zod';
import { ItemEnumSchema } from './enums';
import { FlowSchema } from './FlowSchema';
import { OperationSchema } from './OperationSchema';

export const BuildingOperationSchema = z.object({
    total_flow: z.record(ItemEnumSchema, FlowSchema),
    operations: z.array(OperationSchema).optional().nullable()
});

export type BuildingOperationType = z.infer<typeof BuildingOperationSchema>;
