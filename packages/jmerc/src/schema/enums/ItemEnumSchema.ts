import { z } from 'zod';

export const ItemEnumSchema = z.enum([
    "alembics",
    "arms",
    "axes",
    "beer",
    "belts",
    "blades",
    "bread",
    "bricks",
    "butter",
    "candles",
    "carting",
    "casks",
    "cattle",
    "charcoal",
    "cheese",
    "clay",
    "cloth",
    "coats",
    "cog",
    "cookware",
    "copper ingots",
    "copper ore",
    "cured fish",
    "cured meat",
    "donations",
    "dye",
    "dyed cloth",
    "firewood",
    "fish",
    "flax fibres",
    "flax plants",
    "flour",
    "furniture",
    "garments",
    "glass",
    "glassware",
    "gold bars",
    "gold ore",
    "grain",
    "grindstones",
    "ham",
    "handcart",
    "harnesses",
    "herbs",
    "hides",
    "honey",
    "hop beer",
    "hulk",
    "iron ore",
    "jewellery",
    "labour",
    "lead bars",
    "lead ore",
    "leather",
    "light armor",
    "limestone",
    "lodging",
    "lumber",
    "malt",
    "manure",
    "meat",
    "medicine",
    "milk",
    "money",
    "mouldboards",
    "nails",
    "nets",
    "ox power",
    "pasties",
    "pickaxes",
    "pies",
    "ploughs",
    "protection",
    "resin",
    "rope",
    "sails",
    "salt",
    "scythes",
    "silver bars",
    "slaked lime",
    "snekkja",
    "spirits",
    "steel ingots",
    "stockfish",
    "swords",
    "tar",
    "thread",
    "tiles",
    "timber",
    "tools",
    "tumbrel",
    "wax",
    "wheels",
    "windows",
    "wine",
    "wool",
    "wrought iron",
    "yarn"
]);

export type ItemEnumType = z.infer<typeof ItemEnumSchema>;
