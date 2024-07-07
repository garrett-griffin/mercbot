import { BaseModel } from './baseModel';
import { TileSchema, TileType } from '../schema';
import { Structure } from './structure';

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
        this.structure = this.structure ? Structure.build(this.structure) : null;
    }
}
