import { Component } from "react";
class Input extends Component{
  constructor(props){
    super(props);
    this.state={
      value:null
    }
  };
 
  writeValue = ({target}) =>{
    const {users} = this.props;
    console.log(users)
    this.setState({
      value:target.value,
    })
  }
  render(){
    const {value} = this.state;
    return(
      <>
      <input onKeyUp={this.writeValue} id = "input"/>
      <p>{value}</p>
      </>
    )
  }
}
export default Input