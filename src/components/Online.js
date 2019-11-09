import React, {Component} from 'react';
import Dashboard from './Dashboard'
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core';

class Online extends Component {

	constructor(props) {
		super(props);
		this.state = {
      someString: '',
      // notifications: [],
      // online: true,
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
    let status = this.props.online === true ? false : true
    this.setState({
      online: status
    })
    if (this.props.online === false) {
      console.log('this works')
      this.props.notifications.bind("Your application is offline. You won't be able to share or stream music to other devices.")
    }
  }

	render() {
    return (
      <div className="online-container">
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={this.props.online} onChange={this.onlineChange} />}
            label="Online"
          />
          {/* <h3>Test: {this.state.testing}</h3> */}
        </FormGroup>
        {/* {this.offlineMessage()} */}
      </div>
    )
  }
  
}

export default Online;
