import React, {Component} from 'react';
import Online from './Online';
// import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

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
  

	render() {
    return (
      <div className="dashboard">
        <div className="online-message">
          <Online />
        </div>
        <p>Dashboard</p>
      </div>
    )
  }
  
}

export default Dashboard;
