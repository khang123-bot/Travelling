import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import PostList from '../postList/PostList';
// import TodoList from '../todoList/TodoList';  

export default class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  };
  getOrder = () => {
    Axios.get('http://localhost:8080/admin')
      .then((response) => {
        const data = response.data.data.result;
        this.setState({ users: data });
        console.log(123,this.state.users)
      })
      .catch((e) => {
        console.log(2222, "Error retrieving data!");
      })
  }
  componentDidMount = () => {
    this.getOrder();
  }
  
  // search = (id)=>{
  //   Axios.get('http://localhost:8080/admin')
  //     .then((response) => {
  //       const data = response.data.data.result;
  //       this.setState({ users: data });
  //     })
  //     .catch((e) => {
  //       console.log(2222, "Error retrieving data!");
  //     })
  // }
  render() {
    const { users } = this.state;
    return (
      <Fragment>
        <PostList users={users} getOrder={this.getOrder}/>
      </Fragment>
    );
  }
}
