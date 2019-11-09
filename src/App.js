import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
// import { Button, TextField } from '@material-ui/core';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
		}
	}

	signIn () {
		this.setState({ loggedIn: true })
	}

	render() {
		
		return (
			<div id="container">
				<header>
					<NavBar />
				</header>

				<section className="dashboard">
					{ this.state.loggedIn && (
						<Dashboard />
					)}
					{ !this.state.loggedIn && (
						<SignIn />
					)}
				</section>
			</div>
		)
	}
}

export default App;