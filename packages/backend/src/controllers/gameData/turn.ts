import { Request, Response } from 'express';
import { Turn } from '../../models'; // Update the path as necessary

export const getTurn = async (req: Request, res: Response) => {
    try {
        const currentTurn = await Turn.getCurrentTurn(null);
        if (!currentTurn) return res.status(404).json({ error: 'Current turn not found' });

        res.status(200).json(currentTurn);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch current turn: ' + error.toString() });
    }
};
