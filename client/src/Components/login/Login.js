import React, { Component, Fragment } from 'react';
import "./login.css";

export default class Login extends Component {
  constructor(props){
    super(props);
    let loggedIn = false
    this.state = {
      username:"",
      password:"",
      loggedIn
    }
  }
  handleInput = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  getAllInput = (event)=>{
    event.preventDefault();
    const inforLogin = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.login(inforLogin);
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.getAllInput}>
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username" required onChange={this.handleInput}/>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" required onChange={this.handleInput}/>
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
          </label>
          </div>
          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </Fragment>
    );
  }
}
