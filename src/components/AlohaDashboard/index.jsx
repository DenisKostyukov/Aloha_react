import { Component } from "react";

import SearchedList from './SearchedList';
class AlohaDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					id: 1,
					firstName: "User 1",
					lastName: "Surname 1",
				},
				{
					id: 2,
					firstName: "User 12",
					lastName: "Surname 2",
				},
				{
					id: 3,
					firstName: "User 3",
					lastName: "Surname 3",
				},
				{
					id: 4,
					firstName: "User 4",
					lastName: "Surname 4",
				},
			],
		};
	}

	setUsers = (users) => {
		this.setState({
			users,
		});
	};
	deleteUser = (user) => {
		const { users} = this.state;
		this.setUsers(users.filter((userArr)=>userArr !== user));

	};
	search = ({value}) =>{
		console.log(value)
	}
	render() {
		const { users } = this.state;
		return (
			<>
				<SearchedList users={users} setUsers={this.setUsers} deleteUser={this.deleteUser}/>
			</>
		);
	}
}
export default AlohaDashboard;
