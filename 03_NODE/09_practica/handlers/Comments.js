import CommentInstance from '../models/Comment.js';

export const getComments = (req, res) => {
	const comments = CommentInstance.GetComments();

	res.status(200).json({ status: 'success', data: comments });
};

export const createComment = (req, res) => {
	const { postId, name, email, body } = req.body;

	const newComment = CommentInstance.CreateComment({
		postId,
		name,
		email,
		body,
	});

	res.status(200).send({
		status: 'created',
		message: 'Comentario creao con exito',
		data: newComment,
	});
};
