// noinspection DuplicatedCode

import { z } from 'zod';
import { LocationSchema } from './LocationSchema';
import { TileSchema } from './TileSchema';
import { CommonersSchema } from './CommonersSchema';
import { TownGovernmentSchema } from './TownGovernmentSchema';
import { TownChurchSchema } from './TownChurchSchema';
import {TownCultureSchema} from './TownCultureSchema';

export const TownDataSchema = z.object({
    id: z.string(),
    name: z.string(),
    location: LocationSchema,
    region: z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]),
    center_ids: z.array(z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])),
    domain: z.record(z.string(), TileSchema),
    household_ids: z.array(z.string()),
    commoners: CommonersSchema,
    government: TownGovernmentSchema,
    church: TownChurchSchema,
    navigation_zones: z.record(z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()]), z.union([z.string().transform(v => /\./.test(String(v)) ? parseFloat(String(v)) : parseInt(String(v), 10)), z.number()])),
    culture: TownCultureSchema
});

export type TownDataType = z.infer<typeof TownDataSchema>;
