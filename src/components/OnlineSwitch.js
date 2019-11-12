import React from 'react';
import { FormControlLabel, FormGroup, Switch, } from '@material-ui/core';

const OnlineSwitch = props => (

	<div className="online-switch">
		<h1>Online Mode</h1>
		<h3>Is this application connected to the internet?</h3>
		<FormGroup>
			<FormControlLabel
				control={
					<Switch 
						checked={props.onlineState} 
						onChange={props.onlineFunc} 
					/>}
				label="Online"
			/>
		</FormGroup>
	</div>

)

export default OnlineSwitch;
