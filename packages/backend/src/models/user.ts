import { UserSchema, UserType } from 'models';

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
}

export default User;