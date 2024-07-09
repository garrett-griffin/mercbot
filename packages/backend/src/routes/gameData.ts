import express from 'express';
import { getTown, getAllTowns, getRegion, getAllRegions, getTurn, getCurrentSeason, getCurrentSeasonForSite } from '../controllers/gameData'
import { createGameAccount, getGameAccounts, getGameAccount, updateGameAccount, deleteGameAccount } from "../controllers/gameData";
import passport from 'passport';

const router = express.Router();

// Town routes
router.get('/town/:id', getTown);
router.get('/towns', getAllTowns);

// Region routes
router.get('/region/:id', getRegion);
router.get('/regions', getAllRegions);

// Turn route
router.get('/turn/current', getTurn);

// Season routes
router.get('/season/current', getCurrentSeason);
router.get('/season/current/:siteId', getCurrentSeasonForSite);

// GameAccount routes
router.post('/gameAccount', passport.authenticate('jwt', { session: false }), createGameAccount);
router.get('/gameAccounts', passport.authenticate('jwt', { session: false }), getGameAccounts);
router.get('/gameAccount/:id', passport.authenticate('jwt', { session: false }), getGameAccount);
router.put('/gameAccount/:id', passport.authenticate('jwt', { session: false }), updateGameAccount);
router.delete('/gameAccount/:id', passport.authenticate('jwt', { session: false }), deleteGameAccount);


export default router;
