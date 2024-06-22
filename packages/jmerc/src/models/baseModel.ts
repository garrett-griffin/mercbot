import { z } from 'zod';

export abstract class BaseModel {
    static schema: z.Schema;

    static async validate(data: unknown): Promise<any> {
        try {
            return await this.schema.parse(data);
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}