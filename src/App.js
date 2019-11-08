import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
// import {Button, TextField} from '@material-ui/core';


class App extends Component {
	
  	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		}
  	}

  	render() { return (
		<div id="container">
			<header>
				<NavBar />
			</header>

			<section>
				<Dashboard />
			</section>
		</div>
	)}
}

export default App;
