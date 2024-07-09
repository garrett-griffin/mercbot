import express from 'express';
import { getPrimarySite, getAllSites, createAction, getAction, deleteAction, updateAction, getAllActionsByUser, getRecurringAction, getAllRecurringActionsByPlayer, getAllRecurringActionsForAuthenticatedUser, createRecurringAction, updateRecurringAction, deleteRecurringAction } from '../controllers/tools'
import passport from 'passport';

const router = express.Router();

// Site routes
router.get('/site/primary', getPrimarySite);
router.get('/sites', getAllSites);

// Action routes
router.get('/action/:id', passport.authenticate('jwt', { session: false }), getAction);
router.get('/actions/:gameAccountId', passport.authenticate('jwt', { session: false }), getAllActionsByUser);
router.post('/action', passport.authenticate('jwt', { session: false }), createAction);
router.put('/action/:id', passport.authenticate('jwt', { session: false }), updateAction);
router.delete('/action/:id', passport.authenticate('jwt', { session: false }), deleteAction);

// RecurringAction routes
router.get('/recurringAction/:id', passport.authenticate('jwt', { session: false }), getRecurringAction);
router.get('/recurringActions/:gameAccountId', passport.authenticate('jwt', { session: false }), getAllRecurringActionsByPlayer);
router.get('/recurringActions', passport.authenticate('jwt', { session: false }), getAllRecurringActionsForAuthenticatedUser);
router.post('/recurringAction', passport.authenticate('jwt', { session: false }), createRecurringAction);
router.put('/recurringAction/:id', passport.authenticate('jwt', { session: false }), updateRecurringAction);
router.delete('/recurringAction/:id', passport.authenticate('jwt', { session: false }), deleteRecurringAction);




export default router;
