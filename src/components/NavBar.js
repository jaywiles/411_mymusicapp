import React, {Component} from 'react';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: '',
		};
	}

	render() { return (
		<div className="nav-bar">
			<p>NavBar</p>
		</div>
	)}
  
}

export default NavBar;
