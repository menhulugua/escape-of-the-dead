import React from 'react';
import { connect } from 'react-redux';
import { GARAGE_ACTION } from '../constants';

const Garage = props => {
    return (
      <div>
        <div>Garage</div>
        <div>Fix progress: {props.garage}%</div>
        <button onClick={()=>props.rollDice(GARAGE_ACTION)} disabled={props.disabled}>Roll</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    garage: state.garage,
  };
}

export default connect(mapStateToProps)(Garage);
