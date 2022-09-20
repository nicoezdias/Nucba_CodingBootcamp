import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
	const todos = await Todo.find();
	res.status(200).json({
		status: 'success',
		message: 'Todos los todos',
		data: todos,
	});
};

export const createTodo = async (req, res) => {
	const { description } = req.body;
	//TODO: handler Error

	const todo = await Todo.create({ description });

	res.status(201).json({
		status: 'created',
		message: 'Todo creado correctamente',
		data: todo,
	});
};

export const updateTodo = async (req, res) => {
	const { id, isComplete } = req.body;

	const todo = await Todo.findByIdAndUpdate(id, { isComplete }, { new: true });

	res.status(200).json({
		status: 'update',
		message: 'Todo actualizado correctamente',
		data: todo,
	});
};

export const deleteTodo = async (req, res) => {
	const { id } = req.params;
	await Todo.findByIdAndDelete(id);
	res.status(200).json({
		status: 'delete',
		message: 'Todo eliminado correctamente',
		data: [],
	});
};
