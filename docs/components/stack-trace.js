import React from 'react';

class StackTrace extends React.PureComponent {
	constructor(props) {
    	super(props);
  	}

  	handleChange(event) {
	    this.props.updateProps({
      		value: +event.target.value
    	});
  	}

  	render() {
    	var { value, min, max, step } = this.props;
  		console.log(this.props)
    	return (
      		<input type="range" onChange={this.handleChange.bind(this)} value={value} min={min} max={max} step={step} />
    	);
  	}
}

StackTrace.defaultProps = {
  	value: 0,
  	min: 0,
  	max: 1,
  	step: 1
};

module.exports = StackTrace;