//Dumb Component
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func
};
function createWarning(funcName){
  return ()=> console.warn(funcName + ' is not defined');
}
const defaultProps = {
   onPlus: () => createWarning('onPlus'),
   onSubtract: () => createWarning('onSubtract'),
   onRandomizeColor: () => createWarning('onRandomizeColor')
};

class Control extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>
          <button onClick = {this.props.onPlus}>+</button>
          <button onClick = {this.props.onSubtract}>-</button>
          <button onClick = {this.props.onRandomizeColor}>Randomize Color</button>
          </h1>
      </div>
    )
  }
}
export default Control;