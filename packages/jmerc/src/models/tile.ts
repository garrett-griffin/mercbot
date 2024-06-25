import { BaseModel } from './BaseModel';
import { TileSchema, TileType } from '../schema/TileSchema';
import { Structure } from './structure';

export class Tile extends BaseModel implements TileType {
    static schema = TileSchema;

    structure: Structure;
}