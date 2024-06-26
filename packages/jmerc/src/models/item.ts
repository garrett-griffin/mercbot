import { BaseModel } from './BaseModel';
import { ItemSchema, ItemType } from '../schema/ItemSchema';
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {ItemTypeEnumType} from "../schema/enums/ItemTypeEnumSchema";
import {SkillEnumType} from "../schema/enums/SkillEnumSchema";
import {ItemPriceType} from "../schema/ItemPriceSchema";

export class Item extends BaseModel implements ItemType {
    static schema = ItemSchema;

    name: ItemEnumType;
    type: ItemTypeEnumType;
    unit: string;
    weight: number | null;
    tier: number;
    classes: SkillEnumType[];
    price: ItemPriceType;
}