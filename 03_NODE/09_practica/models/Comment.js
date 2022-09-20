import { v4 as uuid } from 'uuid';

class Comment {
	constructor(postId, name, email, body) {
		this.id = uuid();
		this.postId = postId;
		this.name = name;
		this.email = email;
		this.body = body;
	}
}

class Comments {
	constructor() {
		this.comments = [];
	}

	GetComments = () => {
		return this.comments;
	};

	CreateComment = ({ postId, name, email, body }) => {
		const newComment = new Comment(postId, name, email, body);

		this.comments.push(newComment);
		console.log(this.comments);
		return newComment;
	};
}

const CommentInstance = new Comments();
export default CommentInstance;
