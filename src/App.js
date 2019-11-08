import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import SliderCard from './components/SliderCard';
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
			<section className="">
				<Dashboard />
			</section>
			<section classname="container">
				<SliderCard />
			</section>
		</div>
	)}
}

export default App;
