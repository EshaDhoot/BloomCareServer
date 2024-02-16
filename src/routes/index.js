import express from 'express';

import { signUp, logIn } from '../controllers/auth-controller.js';
import { AuthMiddleware } from '../middlewares/auth-middleware.js';
import { checkUser } from '../middlewares/jwt-middleware.js';
import { createThread } from '../controllers/thread-controller.js';
import { toggleLike } from '../controllers/like-controller.js';
import { createComment } from '../controllers/comment-controller.js';

const router = express.Router();

router.post('/thread/create',checkUser, createThread);

router.post('/thread/togglelike',checkUser, toggleLike);
router.post('/thread/comments', checkUser, createComment);
// router.post('/checkuser', checkUser);

router.post('/signup', AuthMiddleware, signUp);
router.post('/login', logIn);

export default router;