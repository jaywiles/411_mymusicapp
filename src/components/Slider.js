import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider'


class Slider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: '',
		};
    }

    render() { return (
		<div className="slider">
			<p>Slider</p>
		</div>
	)}
  
}
    



    export default Slider;
