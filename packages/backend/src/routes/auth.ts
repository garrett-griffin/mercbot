import express from 'express';
import { register, login, updateUsername, updatePassword, getUser } from '../controllers/auth/';
import passport from 'passport';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes
router.post('/updateUsername', passport.authenticate('jwt', { session: false }), updateUsername);
router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), getUser);

export default router;