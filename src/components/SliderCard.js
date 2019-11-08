import React, {Component} from 'react';

class SliderCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: '',
    };
    
  }


  


	render() { return (
		// <div className="SliderCard">
		// 	<p>SliderCard</p>
    // </div>
    
    <div className={classes.root}>
    <Typography id="continuous-slider" gutterBottom>
      Volume
    </Typography>
    <Grid container spacing={2}>
      <Grid item>
        <VolumeDown />
      </Grid>
      <Grid item xs>
        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
      </Grid>
      <Grid item>
        <VolumeUp />
      </Grid>
    </Grid>
    <Slider disabled defaultValue={30} aria-labelledby="continuous-slider" />
  </div>
  )}
  

  
}



export default SliderCard;









  



