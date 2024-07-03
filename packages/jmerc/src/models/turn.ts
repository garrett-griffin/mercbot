import { BaseModel } from './baseModel';
import { TurnSchema, TurnType } from '../schema';

/**
 * Represents a turn in the game with associated attributes.
 */
export class Turn extends BaseModel implements TurnType {
    static schema = TurnSchema;

    turn: number;
    month: string | null;
    year: number | null;

    /**
     * Creates an instance of Turn.
     * @param data - The data to initialize the turn.
     */
    constructor(data: TurnType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
