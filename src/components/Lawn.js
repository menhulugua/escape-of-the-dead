import React from 'react';
import { connect } from 'react-redux';
import { LAWN_ACTION } from '../constants';

const Lawn = props => {
    return (
      <div>
      <div>Lawn</div>
      <div>Zombie number: {props.zombie}</div>
      <div>Zombie killed: {props.zombieKilled}</div>
      <button onClick={()=>props.rollDice(LAWN_ACTION)}  disabled={props.disabled}>Roll</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    zombie: state.zombie,
    zombieKilled: state.zombieKilled
  };
}

export default connect(mapStateToProps)(Lawn);
