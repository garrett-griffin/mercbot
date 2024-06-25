import { z } from 'zod';

export const BuildingUpgradeTypeEnumSchema = z.enum([
    "armsrack",
    "beehives",
    "bellows",
    "button cast",
    "cowshed",
    "crane",
    "crane lift",
    "curing chamber",
    "cutting table",
    "fermentory",
    "grindstone",
    "grooved bedstone",
    "guard booth",
    "hopping vessels",
    "lime kiln",
    "liming pots",
    "malt mill",
    "malt sieve",
    "manure pit",
    "plough house",
    "skinning table",
    "spinning wheel",
    "steel anvil",
    "stone oven",
    "stonecutter's hut",
    "tile moulds",
    "toolshed",
    "transmission",
    "treadle loom",
    "upholstry bench",
    "warehouse",
    "weaponsrack"
]);

export type BuildingUpgradeTypeEnumType = z.infer<typeof BuildingUpgradeTypeEnumSchema>;
