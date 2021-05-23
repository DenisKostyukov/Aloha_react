import Aloha from '../Aloha';

function AlohaList({users, deleteUser, searchUser}){
  const createUser = (users)=>{
   return users.map((user) => {
     const { firstName, lastName, id } = user;
      return <li key={id}>
        <Aloha name={`${firstName} ${lastName}`} user= {user} deleteUser = {deleteUser} searchUser = {searchUser}/>
      </li>;
    });
  };
  return <ul>{createUser(users)}</ul>
}
export default AlohaList