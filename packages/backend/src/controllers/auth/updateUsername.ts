import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { User } from '../../models'; // Import your User model

const prisma = new PrismaClient();

const updateUsername = async (req: Request, res: Response) => {
    const { newUsername } = req.body;
    const user = req.user as User | undefined; // Use your User model to define the type of req.user

    if (!user) {
        return res.status(401).json({ error: 'You must be logged in to update your username' });
    }

    try {
        const userId = user.id; // Use the id property from your User model
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) return res.status(404).json({ error: 'User not found' });

        await prisma.user.update({ where: { id: userId }, data: { username: newUsername, email: newUsername } });
        res.status(200).json({ message: 'Username updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to update username: ' + error.toString() });
    }
};

export { updateUsername };