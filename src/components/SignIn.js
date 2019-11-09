//import React, { Component } from 'react';
import {AppBar, Button, TextField, Typography} from '@material-ui/core';

const SignIn = props => (
  	//render() { return (
		<div>
			<h3>Log In to FML.fm</h3>
			<div className="signin-container">
				<AppBar position="static">
					<Typography>Sign In</Typography>
				</AppBar>
				<form className="signin-form">
					<p>
						<TextField
							variant="outlined"
							margin="normal"
							//required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
					</p>
					<p>
						<TextField 
							variant="outlined"
							margin="normal"
							//required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
					</p>
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
    //)}
)

export default SignIn;