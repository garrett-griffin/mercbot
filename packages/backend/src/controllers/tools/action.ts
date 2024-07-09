import { Request, Response } from 'express';
import { Action, User, GameAccount } from '../../models'; // Update the path as necessary

export const getAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const action = await Action.findByPk(pk);
        if (!action) return res.status(404).json({ error: 'Action not found' });

        res.json(action);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch action: ' + err.message });
    }
};

export const getAllActionsByUser = async (req: Request, res: Response) => {
    try {
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to see your actions' });
        }

        const gameAccounts = await GameAccount.getAllByUserId(+user.id);
        const actions = await Promise.all(
            gameAccounts.map(gameAccount => Action.getAllByPlayer(gameAccount.pk))
        );

        res.json(actions.flat());
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch actions: ' + err.message });
    }
};

export const createAction = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newAction = await Action.createAction(data);
        res.status(201).json(newAction);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to create action: ' + err.message });
    }
};

export const updateAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const data = req.body;
        const updatedAction = await Action.updateAction(pk, data);
        if (!updatedAction) return res.status(404).json({ error: 'Action not found' });

        res.json(updatedAction);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to update action: ' + err.message });
    }
};

export const deleteAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        await Action.deleteAction(pk);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to delete action: ' + err.message });
    }
};
