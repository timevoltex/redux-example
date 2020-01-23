//Dumb Component
import React, {Component} from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  number: PropTypes.number //숫자형태
};

const defaultProps = {
  number: -1 //기본값
};

class Value extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
export default Value;