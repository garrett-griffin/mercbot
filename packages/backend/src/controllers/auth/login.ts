import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as jwt from "jsonwebtoken";
import {User} from "../../models";
import passport from 'passport';

const login = async (req: Request, res: Response) => {
    try {
        // Authenticate the user using Passport
        passport.authenticate('local', { session: false }, (err: Error, user: User, info: any) => {
            if (err || !user) {
                return res.status(400).json({ error: 'Invalid email or password' });
            }

            // Sign a token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

            res.json({
                message: 'Login successful',
                token,
                id: user.id,
                email: user.email,
                role: user.role,
                lockedOut: user.lockedOut,
            });
        })(req, res);
    } catch (error: any) {
        res.status(500).json({ error: 'Login failed. Try again: ' + error.toString() });
    }
};

export { login };