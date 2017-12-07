import React from 'react';
const Format = require('d3-format');

class CustomDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.format = Format.format(props.format || 'i');
  }

  formatValue(v) {
    const t = typeof v;
    switch(t) {
      case 'object':
        return JSON.stringify(v);
      case 'number':
        return this.format(v);
      case 'string':
      default:
        return v;
    }
  }

  render() {
    const { value } = this.props;
    var v = value !== undefined ? value : this.props.var;
    if(this.props.myCustomDisplayMax == this.props.value){
      v = "All"
    }
    return (
      <b>
        {this.formatValue(v)}
      </b>
    );
  }
}

module.exports = CustomDisplay;