import { z } from 'zod';

/**
 * A base model class that provides schema validation and initialization of sub-properties.
 * Classes extending BaseModel should define a static schema property for validation.
 */
export class BaseModel {
    static schema: z.Schema;
    private initialized = false;

    constructor(data: any) {
        Object.assign(this, data);
        this.initializeSubProperties();
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
        for (const key of Object.keys(this)) {
            const value = this[key];
            if (value && typeof value === 'object' && 'schema' in value.constructor) {
                // Re-instantiate property if it has a schema
                this[key] = new (value.constructor as any)(value);
            } else if (Array.isArray(value)) {
                // Re-instantiate array items if they have a schema
                this[key] = value.map((item: any) =>
                    item && typeof item === 'object' && 'schema' in item.constructor ? new (item.constructor as any)(item) : item
                );
            }
        }
        this.initialized = true;
    }
}
