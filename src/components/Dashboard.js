import React, {Component} from 'react';
// import Online from './Online';
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: '',
			notifications: [],
			online: true,
			testing: 'this sucks',
		};
	}

	addNotification = (notification) => {
		this.setState({ notifications: [...this.state.notifications, notification] })
	}

	goOnline = () => {
		let msg = 'Your application is offline. You won\'t be able to share or stream music to other devices.'

		this.setState({ online: !this.state.online })

		if (this.state.online === false) {
			this.addNotification(msg)
		}
	}

	render() {
		return (
			<div className="dashboard">
				<div className="online-message">
					<FormGroup>
						{console.log(this.state.online)}
						<FormControlLabel
							control={<Switch checked={this.state.online} onChange={() => this.goOnline()} />}
							label="Online"
						/>
					</FormGroup>
				</div>
				<h3>Notifications:</h3>
				{this.state.notifications.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		)
	}
	
}

export default Dashboard;
