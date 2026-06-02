import {Router} from 'express';
import {register, login} from '../controllers/auth.controller.js'
import { profile } from '../controllers/profile.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile',authMiddleware,profile);

export default router;