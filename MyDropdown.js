const React = require('react');
const statesToValiues = {Washington:{min:6, def:10, max:14, step: 4}, NorthCarolina:{min:9, def:13, max:17, step: 4}} // also in custom-d3-component.js

class MyDropdown extends React.Component {
	stateChanged(eve){
		console.log(eve.target.options[eve.target.selectedIndex].value)
		var localsParams = statesToValiues[eve.target.options[eve.target.selectedIndex].value.trim().split(" ").join("")]
		 this.props.updateProps({
		 	statesNameNew: eve.target.options[eve.target.selectedIndex].value,	
		 	min: localsParams['min'],
		 	def: localsParams['def'],
		 	max: localsParams['max'],
		 	step: localsParams['step']

		 })
	}
  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <select className="selectpicker" onChange={this.stateChanged.bind(this)}>
        <option>Washington</option>
        <option>North Carolina</option>
      </select>
    );
  }
}

module.exports = MyDropdown;
