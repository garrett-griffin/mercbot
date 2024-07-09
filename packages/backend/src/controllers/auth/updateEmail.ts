import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { User } from '../../models'; // Import your User model

const prisma = new PrismaClient();

const updateEmail = async (req: Request, res: Response) => {
    const { newEmail } = req.body;
    const user = req.user as User | undefined; // Use your User model to define the type of req.user

    if (!user) {
        return res.status(401).json({ error: 'You must be logged in to update your email' });
    }

    try {
        const userId = user.id; // Use the id property from your User model
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) return res.status(404).json({ error: 'User not found' });

        await prisma.user.update({ where: { id: userId }, data: { email: newEmail } });
        res.status(200).json({ message: 'Email updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to update email: ' + error.toString() });
    }
};

export { updateEmail };