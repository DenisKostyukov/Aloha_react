import Aloha from '../Aloha';

function AlohaList({users}){
  const createUser = (users)=>{
   return users.map(({ firstName, lastName, id }, index) => {
      return <li key={id}>
        <Aloha name={`${firstName} ${lastName}`} />
      </li>;
    });
  };
  return <ul>{createUser(users)}</ul>
}
export default AlohaList