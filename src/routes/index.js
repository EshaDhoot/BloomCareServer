import express from 'express';

import { signUp, logIn } from '../controllers/auth-controller.js'
import { AuthMiddleware } from '../middlewares/auth-middleware.js'

const router = express.Router();

router.post('/signup', AuthMiddleware, signUp);
router.post('/login', AuthMiddleware, logIn);

export default router;