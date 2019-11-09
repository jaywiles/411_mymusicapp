import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn'
import { Button, TextField } from '@material-ui/core';


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		}
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div id="false-container">
          <section className="login-container">
            <SignIn />
          </section>
        </div>
      )
    } else {
      return (
        <div id="true-container">
        <header>
          <NavBar />
        </header>

        <section className="dashboard-container">
          <Dashboard />
        </section>
      </div>
      )
    }
  }
}

export default App;




  // {
  // return (
	// 	<div id="container">
	// 		<header>
	// 			<NavBar />
	// 		</header>

	// 		<section className="login-class">
	// 			<SignIn />
	// 		</section>

	// 		{/* <section className="">
	// 			<Dashboard />
	// 		</section> */}
	// 	</div>
	// )}