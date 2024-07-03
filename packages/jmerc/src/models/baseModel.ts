import { z } from 'zod';
import {Player} from "./player";

/**
 * A base model class that provides schema validation and initialization of sub-properties.
 * Classes extending BaseModel should define a static schema property for validation.
 */
export class BaseModel {
    static schema: z.Schema;
    initialized = false;

    constructor(data: any) {
        Object.assign(this, data);
        this.initializeSubProperties();
        if(Object.keys(this).includes("household")) {
            Object.entries(this).forEach(([key, value]) => {
                if(key == "household") {
                    console.log(typeof value);
                }
            })
        }
        //console.log("KEYS: "+JSON.stringify(Object.keys(this)));
    }

    /**
     * Validates the input data against the schema and creates an instance of the class.
     * @param data - The input data to validate and instantiate.
     * @returns A promise that resolves to an instance of the class.
     */
    static async validate<T extends typeof BaseModel>(this: T, data: unknown): Promise<InstanceType<T>> {
        const parsedData = await this.schema.parseAsync(data);
        const instance = new this(parsedData) as InstanceType<T>;
        instance.initializeSubProperties();
        return instance;
    }

    /**
     * Validates an array of input data against the schema and creates instances of the class.
     * @param data - The input data to validate and instantiate.
     * @returns A promise that resolves to an array of instances of the class.
     */
    static async validateArray<T extends typeof BaseModel>(this: T, data: unknown[]): Promise<InstanceType<T>[]> {
        const parsedDataArray = await Promise.all(data.map(item => this.schema.parseAsync(item)));
        return parsedDataArray.map(parsedData => {
            const instance = new this(parsedData) as InstanceType<T>;
            instance.initializeSubProperties();
            return instance;
        });
    }

    /**
     * Initializes sub-properties of the class instance that are also instances of other classes.
     * It checks each property, and if it's an object with a schema, it creates a new instance of that class.
     */
    initializeSubProperties() {
        if (this.initialized) return;
        this._initializeSubProperties();
        this.initialized = true;
    }

    _initializeSubProperties() {}
}
