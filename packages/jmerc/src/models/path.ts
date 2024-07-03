import { BaseModel } from './baseModel';
import { PathSchema, PathType } from '../schema';
import {DeliveryCost} from "./deliveryCost";
import {ItemEnumType} from "../schema/enums";
import {Flow} from "./flow";

/**
 * Represents a path with associated coordinates and cost.
 */
export class Path extends BaseModel implements PathType {
    static schema = PathSchema;

    x: number;
    y: number;
    c: number;

    /**
     * Creates an instance of Path.
     * @param data - The data to initialize the path.
     */
    constructor(data: PathType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}
