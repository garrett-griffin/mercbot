import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { Region } from '../../models'; // Update the path as necessary

const prisma = new PrismaClient();

const getRegion = async (req: Request, res: Response) => {
    const regionId = parseInt(req.params.id);

    try {
        const region = await Region.findUnique(regionId);
        if (!region) return res.status(404).json({ error: 'Region not found' });

        res.status(200).json(region);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch region: ' + error.toString() });
    }
};

const getAllRegions = async (req: Request, res: Response) => {
    try {
        const regions = await prisma.region.findMany({
            include: {
                season: true
            }
        });

        res.status(200).json(regions);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch regions: ' + error.toString() });
    }
};

export {getAllRegions, getRegion};
