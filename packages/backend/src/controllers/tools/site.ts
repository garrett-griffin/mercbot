import { Request, Response } from 'express';
import {Site} from '../../models'; // Update the path as necessary

export const getPrimarySite = async (req: Request, res: Response) => {
    try {
        const primarySite = await Site.getPrimarySite();
        if (!primarySite) return res.status(404).json({ error: 'Primary site not found' });

        res.status(200).json(primarySite);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch primary site: ' + error.toString() });
    }
};

export const getAllSites = async (req: Request, res: Response) => {
    try {
        const sites = await Site.getAll();
        res.status(200).json(sites);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch sites: ' + error.toString() });
    }
};
