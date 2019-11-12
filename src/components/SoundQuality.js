import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, } from '@material-ui/core';

const SoundQuality = props => (

	<div className="quality-selection">
		<h1>Sound Quality</h1>
		<h3>Manually control the music quality in the event of a poor connection.</h3>
		<FormControl>
			<InputLabel>{props.qualityState}</InputLabel>
			<Select
				value={props.qualityState}
				onChange={props.qualityFunc}>
				<MenuItem value={'low'}>Low</MenuItem>
				<MenuItem value={'normal'}>Normal</MenuItem>
				<MenuItem value={'high'}>High</MenuItem>
			</Select>
		</FormControl>
	</div>

)

export default SoundQuality;