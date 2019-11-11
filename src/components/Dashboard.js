import React, {Component} from 'react';
// import Online from './Online';
import {FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch, Typography} from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
      online: true,
      quality: null,
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
  
  // put slider here??

	soundQuality = () => {
    this.setState({ quality: this.state.quality })
    console.log(this.state.quality)
    this.toggleNotification("Music quality is degraded. Increase quality if your connection allows it.")
	}

	render() {
		return (
			<div className="dashboard">
        <h1>Online Mode</h1>
        <h3>Is this application connected to the internet?</h3>
				<div className="online-switch">
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

				<div className="volume-slider">
				{
					// volume goes here
				}
				</div>

				<div className="quality-selection">
          <h1>Sound Quality</h1>
          <h3>Manually control the music quality in the event of a poor connection.</h3>
					<FormControl>
					<InputLabel>{this.state.quality}</InputLabel>
					<Select
						value={this.state.quality}
            onChange={this.soundQuality}
					>
						<MenuItem value={1}>Low</MenuItem>
						<MenuItem value={2}>Normal</MenuItem>
						<MenuItem value={3}>High</MenuItem>
					</Select>
					</FormControl>
				</div>

				<div className="notifications">
					<h3>Notifications:</h3>
					{this.state.notifications.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>				
			</div>
		)
	}
	
}

export default Dashboard;
