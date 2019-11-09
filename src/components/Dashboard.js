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

	onlineChange = () => {
		//let status = this.state.online === true ? false : true
		//let newNotification = [...this.state.notifications, notification]
		//console.log(this.state.notifications)
		// this.setState({
		// 	online: status
		// })
		// if (this.state.online === false) {
		// 	this.setState({
		// 		notifications: newNotification
		// 		// console.log("Your application is offline. You won't be able to share or stream music to other devices.")
		// 	})
		// }
		const notification = 'Your application is offline. You won\'t be able to share or stream music to other devices.'
		this.setState({
			notifications: [...this.state.notifications, notification]
		})
	}

	render() {
		return (
			<div className="dashboard">
				<div className="online-message">
					<FormGroup>
						{console.log(this.state.online)}
						<FormControlLabel
							control={<Switch onChange={() => this.onlineChange()} />}
							label="Online"
						/>
						{/* <h3>Test: </h3>
							{this.state.notifications.map(note =>{
								console.log(note)
							return (
								<p>{note}</p>
							)
						})} */}
					</FormGroup>
					{this.state.notifications.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
				<p>Dashboard</p>
				
			</div>
		)
	}
	
}

export default Dashboard;
