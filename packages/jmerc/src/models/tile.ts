import { BaseModel } from './BaseModel';
import { TileSchema, TileType } from '../schema/TileSchema';
import { Structure } from './structure';

export class Tile extends BaseModel implements TileType {
    static schema = TileSchema;

    owner_id: string | null;
    structure: Structure | null;
    ask_price: string | null;
}