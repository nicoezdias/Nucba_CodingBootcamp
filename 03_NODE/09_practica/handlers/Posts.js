import PostInstance from '../models/Post.js.js';

export const getPosts = (req, res) => {
	const posts = PostInstance.GetPosts();

	res.status(200).json({ status: 'success', data: posts });
};

export const getPostsByUserId = (req, res) => {
	const userId = req.params.userId;
	const posts = PostInstance.GetPosts().filter(
		(post) => post.userId === userId
	);

	res.status(200).json({ status: 'success', data: posts });
};

export const createPost = (req, res) => {
	const { userId, body, title } = req.body;

	const newPost = PostInstance.CreatePost({ userId, body, title });

	res.status(201).json({
		status: 'created',
		message: 'Post creado con éxito',
		data: newPost,
	});
};
