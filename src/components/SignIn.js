import React, {Component} from 'react';
import {AppBar, Button, TextField, Typography} from '@material-ui/core';

class SignIn extends Component {
  render() {
    return (
      // <div>NavBar</div>
      <div>
        <h1>Log In to FML.fm</h1>
      <p>{console.log('hello world')}</p>
        <div className="signin-container">
          <AppBar position="static">
            <Typography>Sign In</Typography>
          </AppBar>
          <form className="signin-form">
            <p><TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /></p>
            <p><TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /></p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >Sign In</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn;