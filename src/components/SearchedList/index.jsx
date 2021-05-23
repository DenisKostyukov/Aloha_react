import { Component } from "react";
import AlohaSorted from "../AlohaSorted";
class SearchedList extends Component {
	constructor(props) {
		super(props);
	}
	searchUser = ({ target: { value } }) => {
		const { users, setUsers } = this.props;
			const searched = users.filter((user) => {
				const { firstName, lastName } = user;
				return `${firstName} ${lastName}`
					.toLowerCase()
					.includes(value.toLowerCase());
			});
    setUsers(searched)
	};
	render() {
		const { users, deleteUser, setUsers } = this.props;
		return (
			<>
				<input onKeyUp={this.searchUser} />
				<AlohaSorted
					users={users}
					deleteUser={deleteUser}
					setUsers={setUsers}
					searchUser={this.searchUser}
				/>
			</>
		);
	}
}
export default SearchedList;
