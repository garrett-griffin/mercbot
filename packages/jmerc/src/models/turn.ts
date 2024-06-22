import { BaseModel } from './BaseModel';
import { TurnSchema, TurnType } from '../schema/TurnSchema';

export class Turn extends BaseModel implements TurnType {
    static schema = TurnSchema;
}