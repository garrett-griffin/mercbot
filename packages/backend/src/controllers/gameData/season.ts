import { Request, Response } from 'express';
import {Season} from '../../models'; // Update the path as necessary

export const getCurrentSeason = async (req: Request, res: Response) => {
    try {
        const currentSeason = await Season.getCurrentSeason();
        if (!currentSeason) return res.status(404).json({ error: 'Current season not found' });

        res.status(200).json(currentSeason);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch current season: ' + error.toString() });
    }
};

export const getCurrentSeasonForSite = async (req: Request, res: Response) => {
    const siteId = parseInt(req.params.siteId);

    try {
        const currentSeason = await Season.getCurrentSeasonForSite(siteId);
        if (!currentSeason) return res.status(404).json({ error: 'Current season not found for the given site' });

        res.status(200).json(currentSeason);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch current season for site: ' + error.toString() });
    }
};
