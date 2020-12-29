import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import './register.css'
import Login from '../login/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      // registerSuccess: false
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  getAllInput = (event) =>{
    event.preventDefault();
    const order = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    const checkEmail = {
      username: this.state.username
    }
    this.props.createUser(checkEmail,order);
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.getAllInput}>
          <div className="container">
            <h1>Register</h1>
            <ol>
              <li>Email must be in right format of email</li>
              <li>Password length must be at least 8 characters</li>
              <li>Password must contains at least 1 number and 1 special character and 1 uppercase character</li>
              <li>Password must not contains any blanks</li>
            </ol>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="username" id="email" required onChange={this.handleInput} />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="psw" required onChange={this.handleInput} />
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="confirmPassword" id="psw-repeat" required onChange={this.handleInput} />
            <hr />
            <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
            <button type="submit" className="registerbtn">Register</button>
          </div>
          <div className="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
        </form>
      </Fragment>
    );
  }
}
