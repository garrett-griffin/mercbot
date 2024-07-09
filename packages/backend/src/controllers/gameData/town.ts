import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Town } from '../../models' // Update the path as necessary

const prisma = new PrismaClient();

const getTown = async (req: Request, res: Response) => {
    const townId = parseInt(req.params.id);

    try {
        const town = await Town.findUnique(townId);
        if (!town) return res.status(404).json({ error: 'Town not found' });

        res.status(200).json(town);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch town: ' + error.toString() });
    }
};

const getAllTowns = async (req: Request, res: Response) => {
    try {
        const towns = await prisma.town.findMany({
            include: {
                location: true,
                region: true,
                turn: true,
                townData: true
            }
        });

        res.status(200).json(towns);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch towns: ' + error.toString() });
    }
};

export { getTown, getAllTowns };
