import React, {Component} from 'react';
// import Online from './Online';
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
			online: true,
		};
	}

	// this recives a string and adds or removes it based on if it is in the notifications array
	toggleNotification = ( msg ) => {
		let msgIndex = this.state.notifications.indexOf( msg )

		if ( this.state.notifications.includes( msg ) ) {
			this.state.notifications.splice( msgIndex, 1 )
		} else {
			this.setState({ notifications: [...this.state.notifications, msg] })
		}
	}

	goOnline = () => {
		this.setState({ online: !this.state.online })
		this.toggleNotification("Your application is offline. You won't be able to share or stream music to other devices.")
	}

	render() {
		return (
			<div className="dashboard">
				<div className="online-message">
					<FormGroup>
						<FormControlLabel
							control={
								<Switch 
									checked={this.state.online} 
									onChange={this.goOnline} 
								/>}
							label="Online"
						/>
					</FormGroup>
				</div>

				{
					// volume goes here
				}

				{
					// quality goes here
				}

				<h3>Notifications:</h3>
				{this.state.notifications.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		)
	}
	
}

export default Dashboard;
