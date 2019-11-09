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

	render() { return (
		<div className="dashboard">
			<FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.online} onChange={this.onlineChange} />}
          label="Online"
        />
        {console.log(this.state.online)}
      </FormGroup>
      <p>Dashboard</p>
		</div>
	)}
  
}

export default Dashboard;
