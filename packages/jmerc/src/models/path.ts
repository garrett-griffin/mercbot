import { BaseModel } from './BaseModel';
import { PathSchema, PathType } from '../schema/PathSchema';

export class Path extends BaseModel implements PathType {
    static schema = PathSchema;

    x: number;
    y: number;
    c: number;
}