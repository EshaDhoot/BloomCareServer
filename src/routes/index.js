import express from 'express';

import { signUp, logIn } from '../controllers/auth-controller.js';
import { AuthMiddleware } from '../middlewares/auth-middleware.js';
import { checkUser } from '../middlewares/jwt-middleware.js';

const router = express.Router();

router.post('/checkuser', checkUser);
router.post('/signup', AuthMiddleware, signUp);
router.post('/login', logIn);

export default router;