import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { User } from '../../models'; // Import your User model
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const updatePassword = async (req: Request, res: Response) => {
    const { currentPassword, newPassword } = req.body;
    const user = req.user as User | undefined; // Use your User model to define the type of req.user

    if (!user) {
        return res.status(401).json({ error: 'You must be logged in to update your password' });
    }

    try {
        const userId = user.id; // Use the id property from your User model
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) return res.status(404).json({ error: 'User not found' });

        // Check if the current password is correct
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, existingUser.password);
        if (!isCurrentPasswordValid) {
            return res.status(401).json({ error: 'Current password is incorrect' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);
        await prisma.user.update({ where: { id: userId }, data: { password: hashedNewPassword } });
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to update password: ' + error.toString() });
    }
};

export { updatePassword };