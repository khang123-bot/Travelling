import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Logout extends Component {
  render() {
    return (
      <div> you have been logged out 

          <Link to="/logout">Logout</Link>
      </div>
    );
  }
}
