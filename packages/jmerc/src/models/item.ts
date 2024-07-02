import { BaseModel } from './baseModel';
import { ItemSchema, ItemType } from '../schema';
import { ItemEnumType } from "../schema/enums";
import { ItemTypeEnumType } from "../schema/enums";
import { SkillEnumType } from "../schema/enums";
import { ItemPriceType } from "../schema";

/**
 * Represents an item with associated attributes.
 */
export class Item extends BaseModel implements ItemType {
    static schema = ItemSchema;

    name: ItemEnumType;
    type: ItemTypeEnumType;
    unit: string;
    weight: number | null;
    tier: number;
    classes: SkillEnumType[];
    price: ItemPriceType;

    /**
     * Creates an instance of Item.
     * @param data - The data to initialize the item.
     */
    constructor(data: ItemType) {
        super(data);
    }
}
