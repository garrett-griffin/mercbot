import { z } from 'zod';

export abstract class BaseModel {
    static schema: z.Schema;

    static async validate(data: unknown | unknown[]): Promise<any | any[]> {
        try {
            if (Array.isArray(data)) {
                return await Promise.all(data.map((item) => this.schema.parse(item)));
            } else {
                return await this.schema.parse(data);
            }
        } catch (errors) {
            throw new Error('Validation failed: ' + errors + ' - data: ' + JSON.stringify(data));
        }
    }
}