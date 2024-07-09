import { PrismaClient } from '@prisma/client';
import { UserSchema, UserType } from 'models';

const prisma = new PrismaClient();

export class User {
    pk: number | undefined;
    id: number | undefined;
    email: string | undefined;
    password: string | undefined;
    role: string | undefined;
    lockedOut: boolean | undefined;

    constructor(data: UserType) {
        this.pk = data.pk;
        this.id = data.pk;
        this.email = data.email;
        this.password = data.password;
        this.role = data.role;
        this.lockedOut = data.lockedOut;
    }

    static async findUnique(pk: number): Promise<User | null> {
        return User.findByPk(pk);
    }

    static async findById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { id } });
        return user ? new User(user) : null;
    }

    static async findByPk(pk: number): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { pk } });
        return user ? new User(user) : null;
    }

    static async createUser(data: UserType): Promise<User> {
        const validatedData = UserSchema.parse(data);
        const user = await prisma.user.create({ data: validatedData });
        return new User(user);
    }

    static async updateUser(pk: number, data: Partial<UserType>): Promise<User | null> {
        const user = await prisma.user.update({
            where: { pk },
            data
        });
        return user ? new User(user) : null;
    }
}

export default User;
