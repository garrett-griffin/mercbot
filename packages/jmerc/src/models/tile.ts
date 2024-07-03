import { BaseModel } from './baseModel';
import { TileSchema, TileType } from '../schema/TileSchema';
import { Structure } from './structure';
import {Ingredient} from "./recipe";

/**
 * Represents a tile with associated attributes.
 */
export class Tile extends BaseModel implements TileType {
    static schema = TileSchema;

    owner_id: string | null;
    structure: Structure | null;
    ask_price: string | null;

    /**
     * Creates an instance of Tile.
     * @param data - The data to initialize the tile.
     */
    constructor(data: TileType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.structure = this.structure ? new Structure(this.structure) : null;
    }
}
