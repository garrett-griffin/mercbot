import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import passport from 'passport';
import {User} from "../../models";

const register = async (req: Request, res: Response) => {
    const { reg_email, reg_password } = req.body;

    const username = reg_email;
    try {
        // Check if the user already exists
        const existingUser = await prisma.user.findFirst({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: 'Account already exists.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(reg_password, saltRounds);

        // Create a new user
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email: username,
            },
        });

        // Authenticate the user using Passport
        passport.authenticate('local', { session: false }, (err: Error, user: User, info: any) => {
            if (err || !user) {
                return res.status(400).json({ error: 'Invalid email or password' });
            }

            // Sign a token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '24h' });

            res.status(201).json({ message: 'Registration successful', token });
        })(req, res);
    } catch (error: any) {
        res.status(500).json({ error: 'Registration failed. Try again: ' + error.message });
    }
};

export { register };