import { Router } from 'express';
import { getUsers, createUser } from '../handlers/Users.js';

const router = Router();

router.get('/', getUsers).post('/', createUser);

export default router;
