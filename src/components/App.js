import React from 'react';
import { connect } from 'react-redux';

import Lawn from './Lawn';
import Barricade from './Barricade';
import Garage from './Garage';
import Reward from './Reward';
import { REWARD_KILL, PHASE_NAME } from '../constants';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Phase: {PHASE_NAME[this.props.phase]}</h3>
        <Lawn /><hr/>
        <Barricade /><hr/>
        <Garage /><hr/>
        {/* {this.props.zombieKilled >= REWARD_KILL && <Reward />} */}
        <Reward />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zombieKilled: state.zombieKilled,
    phase: state.phase
  };
}

export default connect(mapStateToProps)(App);
