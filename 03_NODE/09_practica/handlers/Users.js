import UserInstance from '../models/User.js.js';

export const getUsers = (req, res) => {
	const users = UserInstance.GetUsers();

	res.status(200).json({ status: 'success', data: users });
};

export const createUser = (req, res) => {
	const { name, username, email } = req.body;

	const newUser = UserInstance.CreateUser({ name, username, email });

	res.status(201).json({
		status: 'created',
		message: 'User creado con éxito',
		data: newUser,
	});
};
