import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { User } from '../../models'; // Import your User model

const prisma = new PrismaClient();

const getUser = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, username: true } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch user: ' + error.toString() });
    }
};

export { getUser };