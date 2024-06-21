import { z } from 'zod';
import { DeliveryCostSchema } from './DeliveryCostSchema';
import { RecipeEnumSchema } from './enums/RecipeEnumSchema';
import { FlowSchema } from './FlowSchema';
import {ItemEnumSchema} from "./enums/ItemEnumSchema";

export const OperationSchema = z.object({
    target: z.number(),
    production: z.number().optional(),
    provision: z.number().optional(),
    reference: z.string().optional(),
    recipe: RecipeEnumSchema.optional(),
    volume: z.number().optional(),
    tax_rate: z.number().optional(),
    tax: z.number().optional(),
    delivery_cost: DeliveryCostSchema.optional(),
    flows: z.record(ItemEnumSchema, FlowSchema).optional()
});

export type OperationType = z.infer<typeof OperationSchema>;
