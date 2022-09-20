import { Router } from 'express';
import { getComments, createComment } from '../handlers/Comments.js';

const router = Router();

router.get('/', getComments).post('/', createComment);

export default router;
