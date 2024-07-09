import { Request, Response } from 'express';
import { User, RecurringAction, GameAccount } from '../../models'; // Update the path as necessary

export const getRecurringAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const recurringAction = await RecurringAction.findByPk(pk);
        if (!recurringAction) return res.status(404).json({ error: 'Recurring action not found' });

        res.json(recurringAction);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch recurring action: ' + err.message });
    }
};

export const getAllRecurringActionsByPlayer = async (req: Request, res: Response) => {
    try {
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to see your recurring actions' });
        }

        const gameAccountId = parseInt(req.params.gameAccountId);
        const recurringActions = await RecurringAction.getAllByPlayer(gameAccountId);
        res.json(recurringActions);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch recurring actions: ' + err.message });
    }
};

export const getAllRecurringActionsForAuthenticatedUser = async (req: Request, res: Response) => {
    try {
        const user = req.user as User | undefined; // Use your User model to define the type of req.user

        if (!user || !user.id) {
            return res.status(401).json({ error: 'You must be logged in to see your recurring actions' });
        }

        const gameAccounts = await GameAccount.getAllByUserId(user.id);
        const recurringActions = await Promise.all(
            gameAccounts.map(async (gameAccount) => {
                return RecurringAction.getAllByPlayer(gameAccount.pk);
            })
        );

        res.json(recurringActions.flat());
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to fetch recurring actions: ' + err.message });
    }
};

export const createRecurringAction = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newRecurringAction = await RecurringAction.createRecurringAction(data);
        res.status(201).json(newRecurringAction);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to create recurring action: ' + err.message });
    }
};

export const updateRecurringAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        const data = req.body;
        const updatedRecurringAction = await RecurringAction.updateRecurringAction(pk, data);
        if (!updatedRecurringAction) return res.status(404).json({ error: 'Recurring action not found' });

        res.json(updatedRecurringAction);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to update recurring action: ' + err.message });
    }
};

export const deleteRecurringAction = async (req: Request, res: Response) => {
    try {
        const pk = parseInt(req.params.id);
        await RecurringAction.deleteRecurringAction(pk);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to delete recurring action: ' + err.message });
    }
};
