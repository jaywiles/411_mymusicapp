import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
<<<<<<< HEAD
import SliderCard from './components/SliderCard';
// import {Button, TextField} from '@material-ui/core';
=======
import SignIn from './components/SignIn'
import { Button, TextField } from '@material-ui/core';

>>>>>>> 6cee34459ef9db82de8969437bc5372d0914b0b9

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
<<<<<<< HEAD
=======

			<section className="login-class">
				<SignIn />
			</section>

>>>>>>> 6cee34459ef9db82de8969437bc5372d0914b0b9
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
