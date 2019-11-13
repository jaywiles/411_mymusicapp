import React from 'react';
import { Grid, Typography, Slider, }  from '@material-ui/core/';
// import { VolumeDown, VolumeUp, } from '@material-ui/icons/';

const VolumeSlider = props => {

	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="volume-slider">
			<Typography id="continuous-slider" gutterBottom>
				Volume: {props.volumeState}
			</Typography>
			<Grid container spacing={2}>
				<Grid item>
					{/* <VolumeDown /> */}
				</Grid>
				<Grid item xs>
					<Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
				</Grid>
				<Grid item>
					{/* <VolumeUp /> */}
				</Grid>
			</Grid>
			<Slider disabled defaultValue={30} aria-labelledby="continuous-slider" />
		</div>
	)
}

export default VolumeSlider;