import { Router } from 'express';
import { getPosts, getPostsByUserId, createPost } from '../handlers/Posts.js';

const router = Router();

router
	.get('/', getPosts)
	.get('/user/:userId', getPostsByUserId)
	.post('/', createPost);

export default router;
