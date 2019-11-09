import React, {Component} from 'react';

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
    let online = this.state.online === true ? false : true
    this.setState({
      online: status
    })
  }

	render() { return (
		<div className="dashboard">
			<p>Dashboard</p>
		</div>
	)}
  
}

export default Dashboard;
