import { v4 as uuid } from 'uuid';

class Post {
	constructor(userId, body, title) {
		this.id = uuid();
		this.userId = userId;
		this.body = body;
		this.title = title;
	}
}

class Posts {
	constructor() {
		this.posts = [];
	}

	GetPosts = () => {
		return this.posts;
	};

	CreatePost = ({ userId, body, title }) => {
		const newPost = new Post(userId, body, title);

		this.posts.push(newPost);
		return newPost;
	};
}

const PostInstance = new Posts();
export default PostInstance;
