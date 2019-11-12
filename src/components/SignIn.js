import React, {Component} from 'react';
// import {Button, TextField} from '@material-ui/core';

class SignIn extends Component {
  state = {
    loggedIn: false,
    // need items here...
  }

  isLoggedIn() {
    if (this.loggedIn) {
      console.log('hello world')
    }
  }

  render() {
    return (
      // <div>NavBar</div>
      <div>
        <h1>Log In to FML.fm</h1>
      <p>{console.log('hello world')}</p>







      </div>
    )
  }

  
}

export default SignIn;