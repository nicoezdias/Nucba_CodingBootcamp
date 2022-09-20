import { v4 as uuid } from 'uuid';

class User {
	constructor(name, username, email) {
		this.id = uuid();
		this.name = name;
		this.username = username;
		this.email = email;
	}
}
class Users {
	constructor() {
		this.users = [];
	}

	GetUsers = () => {
		return this.users;
	};

	CreateUser = ({ name, username, email }) => {
		const newUser = new User(name, username, email);

		this.users.push(newUser);

		return newUser;
	};
}

const UserInstance = new Users();
export default UserInstance;
