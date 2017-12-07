const React = require('react');
const statesToValiues = {Washington:{min:6, def:10, max:14, step: 4}, NorthCarolina:{min:9, def:13, max:17, step: 4},Ohio:{min:12,def:16,max:20,step:4}, Wisconsin:{min:4,def:8,max:12,step:4},Alabama:{min:3,def:7,max:11,step:4},Florida:{min:23,def:27,max:31,step:4},Virginia:{min:7,def:11,max:15,step:4}, Georgia:{min:10,def:14,max:18,step:4},Arizona:{min:5,def:9,max:13,step:4}, Pennsylvania:{min:14,def:18,max:22,step:4}, Illinois:{min:14,def:18,max:22,step:4}}












class MyDropdown extends React.Component {
	stateChanged(eve){
		console.log(eve.target.options[eve.target.selectedIndex].value)
		var localsParams = statesToValiues[eve.target.options[eve.target.selectedIndex].value.trim().split(" ").join("")]
		 this.props.updateProps({
		 	statesnamenew: eve.target.options[eve.target.selectedIndex].value,	
		 	min: localsParams['min'],
		 	def: localsParams['def'],
		 	max: localsParams['max'],
		 	step: localsParams['step'],
		 	changingMyStack: localsParams['def'],
		 	maxMyStack: localsParams['def']
		 })
	}
  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <select className="selectpicker show-tick show-menu-arrow" onChange={this.stateChanged.bind(this)}>
        <option>Washington</option>
        <option>North Carolina</option>
        <option>Ohio</option>
        <option>Wisconsin</option>
        <option>Alabama</option>
        <option>Florida</option>
        <option>Virginia</option>
        <option>Georgia</option>
        <option>Arizona</option>
        <option>Pennsylvania</option>
        <option>Illinois</option>
      </select>
    );
  }
}

module.exports = MyDropdown;
