// config/passportConfig.ts
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
}

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email', // Use "email" field as the username
        },
        async (email: string, password: string, done: (err: any, user: any, options: any) => void) => {
            try {
                const user = await prisma.user.findFirst({ where: { email } });
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                const isValidPassword = await bcrypt.compare(password, user.password);
                if (!isValidPassword) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user, {});
            } catch (err) {
                return done(err, null, {});
            }
        }
    )
);

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        async (jwtPayload: { id: number }, done: (err: any, user: any) => void) => {
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        pk: jwtPayload.id,
                    },
                });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

passport.serializeUser((user: any, done: (err: any, id: number) => void) => {
    done(null, user.pk);
});

passport.deserializeUser(async (id: number, done: (err: any, user: any) => void) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                pk: id,
            },
        });
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport;