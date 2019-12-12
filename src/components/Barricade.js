import React from 'react';
import { connect } from 'react-redux';
import { BARRICADE_ACTION } from '../constants';

const Barricade = props => {
    return (
      <div>
      <div>Barricade</div>
      <div>HP: {props.barricade}</div>
      <button onClick={()=>props.rollDice(BARRICADE_ACTION)} disabled={props.disabled}>Roll</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    barricade: state.barricade
  };
}

export default connect(mapStateToProps)(Barricade);
