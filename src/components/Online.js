import React, {Component} from 'react';
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
      someString: '',
      // notifications: [],
      online: true,
		};
  }
  
  // onlineChange = () => {
  //   let status = this.state.online === true ? false : true
  //   this.setState({
  //     online: status
  //   })
  // }

  // offlineMessage = () => {
  //   if (!this.state.online) {
  //     return (
  //       <h3>Your application is offline. You won't be able to share or stream music to other devices.</h3>
  //     )
  //   }
  // }

  onlineChange = () => {
    let status = this.state.online === true ? false : true
    this.setState({
      online: status
    })
    if (this.state.online === false) {
      console.log('this works')
      // this.state.notifications.push("Your application is offline. You won't be able to share or stream music to other devices.")
    }
  }

	render() {
    return (
      <div className="online-container">
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={this.state.online} onChange={this.onlineChange} />}
            label="Online"
          />
          <h3>Test: {this.state.testing}</h3>
        </FormGroup>
        {/* {this.offlineMessage()} */}
      </div>
    )
  }
  
}

export default Dashboard;
