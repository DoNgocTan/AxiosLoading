import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
class App extends Component {
  state={
    users:[],
    loading:false
  };

  getUsers=()=>{
    this.setState({loading:true})
    axios('https://api.randomuser.me/?nat=US&results=5').then(response=>this.setState({
      users:[...this.state.users,...response.data.results],
      loading:false
    }))
   
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }
  componentWillMount()
  {
   
    this.getUsers();
  }
  render() { 
    const {loading,users}=this.state;
    return (<React.Fragment>
      <form onSubmit={this.handleSubmit}><input type="submit" value="load users" ></input></form>
    {/* <button onClick={this.getUsers}>api</button> */}
    <ul>{!loading ? users.map(user=><li key={user.id.value}>{user.name.first}</li>):<Loading mess="Hello"/>}</ul>
    </React.Fragment>);
  }
}
 
export default App;
