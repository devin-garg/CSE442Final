import React from 'react';


class Range extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.updateProps({
      value: +event.target.value,
      changingStack: event.target.value,
      maxStack: event.target.value
    });
  }

  render() {
    var { value, min, max, step } = this.props;

    return (
      <input type="range" onChange={this.handleChange.bind(this)} value={value} min={min} max={max} step={step} className="slider"/>
    );
  }

}

Range.defaultProps = {
  value: 0,
  min: 0,
  max: 1,
  step: 1
};

module.exports = Range;