import { Component } from "react";
import AlohaSorted from "../AlohaSorted";

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
          firstName: "User 2",
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

  setUsers = (users)=>{
    this.setState({
      users,
    })
  }

	render() {
    const {users} = this.state
		return (
			<>
				<AlohaSorted users={users} setUsers={this.setUsers} />
			</>
		);
	}
}
export default AlohaDashboard;
