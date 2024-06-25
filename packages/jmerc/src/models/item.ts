import { BaseModel } from './BaseModel';
import { ItemSchema, ItemType } from '../schema/ItemSchema';

export class Item extends BaseModel implements ItemType {
    static schema = ItemSchema;
}