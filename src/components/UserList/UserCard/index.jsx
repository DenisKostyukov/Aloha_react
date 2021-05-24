function UserCard(props){
  const {
    user: {id,firstName,lastName, isSelected},
    toggleUserSelection,
  } = props;

  const handleClick = () => {
    toggleUserSelection(id);
  };

  const style ={
    border:isSelected ? "5px solid black" : undefined,
  };
  return (
    <article onClick={handleClick} style={style}>
      <p>ID: {id}</p>
      <h1>User Name: {firstName} {lastName}</h1>
    </article>
  )
}

export default UserCard;