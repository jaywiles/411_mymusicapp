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

  onlineChange = (notification) => {
    let status = this.state.online === true ? false : true
    let newNotification = [...this.state.notifications, notification]
    let notification = "Your application is offline. You won't be able to share or stream music to other devices."
    // console.log(notification)
    this.setState({
      online: status
    })
    if (this.state.online === false) {
      this.setState({
        notifications: newNotification
        // console.log("Your application is offline. You won't be able to share or stream music to other devices.")
      })
    }
  }

  

	render() {
    return (
      <div className="dashboard">
        <div className="online-message">
          <FormGroup>
            {console.log(this.state.online)}
            <FormControlLabel
              control={<Switch checked={this.state.online} onChange={this.onlineChange} />}
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
          <p>{this.state.notifications}</p>
        </div>
        <p>Dashboard</p>
        
      </div>
    )
  }
  
}

export default Dashboard;
