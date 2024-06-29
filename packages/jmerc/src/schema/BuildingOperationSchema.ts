import { z } from 'zod';
import { ItemEnumSchema } from './enums';
import { FlowSchema } from './FlowSchema';
import { OperationSchema } from './OperationSchema';
import {AccountAssetSchema} from "./AccountAssetSchema";

export const BuildingOperationSchema = z.object({
    total_flow: z.object({}).transform(obj => new Map(Object.entries(obj))).transform(map => z.map(ItemEnumSchema, FlowSchema).parse(map)),
    operations: z.array(OperationSchema).optional().nullable()
});

export type BuildingOperationType = z.infer<typeof BuildingOperationSchema>;
