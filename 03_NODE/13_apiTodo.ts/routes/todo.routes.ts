import { Router } from 'express';
import {
	createTodo,
	getTodos,
	updateTodo,
	deleteTodo,
} from '../controllers/todo';

const router = Router();

router.get('/', getTodos).put('/', updateTodo).post('/', createTodo);

router.delete('/:id', deleteTodo);

export { router as todoRouter };
