import { TurnSchema, TurnType } from '../schema/TurnSchema';

export class Turn implements TurnType {
    turn: number;
    month?: string;
    year?: number;

    static validate(data: unknown): Turn {
        try {
            return <Turn>TurnSchema.parse(data);
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}