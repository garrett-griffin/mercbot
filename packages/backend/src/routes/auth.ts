import express from 'express';
import { register, login, updateEmail, updatePassword, getUser } from '../controllers/auth/';
import passport from 'passport';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes
router.post('/updateEmail', passport.authenticate('jwt', { session: false }), updateEmail);
router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), getUser);

export default router;