import React, {Component} from 'react';
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
      someString: '',
      notifications: [],
      online: true,
		};
  }
  
  onlineChange = () => {
    let status = this.state.online === true ? false : true
    this.setState({
      online: status
    })
  }

  offlineMessage = () => {
    if (!this.state.online) {
      return (
        <h3>Your application is offline. You won't be able to share or stream music to other devices.</h3>
      )
    }
  }

	render() {
    return (
      <div className="dashboard">
        <div className="online-message">
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={this.state.online} onChange={this.onlineChange} />}
              label="Online"
            />
            {console.log(this.state.online)}
          </FormGroup>
          {this.offlineMessage()}
        </div>
        <p>Dashboard</p>
      </div>
    )
  }
  
}

export default Dashboard;
