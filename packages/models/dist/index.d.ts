import { z } from 'zod';

declare const UserSchema: z.ZodObject<{
    pk: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodNumber>;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodString>;
    lockedOut: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    pk?: number;
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    lockedOut?: boolean;
}, {
    pk?: number;
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    lockedOut?: boolean;
}>;
type UserType = z.infer<typeof UserSchema>;

export { UserSchema, type UserType };
