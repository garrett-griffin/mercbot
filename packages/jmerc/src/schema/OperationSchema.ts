import { z } from 'zod';
import { DeliveryCostSchema } from './DeliveryCostSchema';
import { RecipeEnumSchema } from './enums/RecipeEnumSchema';
import { FlowSchema } from './FlowSchema';
import {ItemEnumSchema} from "./enums/ItemEnumSchema";

export const OperationSchema = z.object({
    target: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    production: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    provision: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    reference: z.string().optional(),
    recipe: RecipeEnumSchema.optional(),
    volume: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    tax_rate: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    tax: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]).optional(),
    delivery_cost: DeliveryCostSchema.optional(),
    flows: z.record(ItemEnumSchema, FlowSchema).optional()
});

export type OperationType = z.infer<typeof OperationSchema>;
