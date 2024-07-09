import { Request, Response } from 'express';
import {GameAccount, User} from '../../models'; // Update the path as necessary

export const createGameAccount = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user) {
            return res.status(401).json({ error: 'You must be logged in to add a new account' });
        }

        data.userId = user.id;

        const newGameAccount = await GameAccount.createGameAccount(data);
        res.status(201).json(newGameAccount);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to create game account: ' + err.message });
    }
};

export const getGameAccounts = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to see your game accounts' });
        }

        const gameAccounts = await GameAccount.getAllByUserId(+user.id);
        res.json(gameAccounts);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch game accounts: ' + err.message });
    }
};

export const getGameAccountsByUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const gameAccounts = await GameAccount.getAllByUserId(+userId);
        res.json(gameAccounts);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch game accounts: ' + err.message });
    }
};

export const getGameAccount = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const gameAccount = await GameAccount.findUnique(pk);
        if (!gameAccount) return res.status(404).json({ error: 'Game account not found' });

        res.json(gameAccount);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch game account: ' + err.message });
    }
};

export const updateGameAccount = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to update your game accounts' });
        }

        const data = req.body;

        data.userId = user.id;

        const updatedGameAccount = await GameAccount.updateGameAccount(pk, data);
        if (!updatedGameAccount) return res.status(404).json({ error: 'Game account not found' });

        res.json(updatedGameAccount);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to update game account: ' + err.message });
    }
};

export const deleteGameAccount = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to update your game accounts' });
        }

        await GameAccount.deleteGameAccount(pk);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to delete game account: ' + err.message });
    }
};
