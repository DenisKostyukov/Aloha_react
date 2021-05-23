import {Component} from 'react';
import AlohaList from '../AlohaList';

class AlohaSorted extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDirectSort:true,
    }
  }
  sortUsers = ()=>{
    const {isDirectSort} = this.state;
    const {users, setUsers} = this.props;
    const copyOfUsers = [...users];
    setUsers(copyOfUsers.sort((a,b)=>isDirectSort ?a.id-b.id : b.id-a.id))
    this.setState({isDirectSort: !isDirectSort})
  }
  render(){
    const {users, deleteUser, searchUser} = this.props;
    return (
      <>
        <AlohaList users = {users} deleteUser = {deleteUser} searchUser = {searchUser}/>
        <button onClick={this.sortUsers}>Sort</button>
      </>
    )
  }
}
export default AlohaSorted;