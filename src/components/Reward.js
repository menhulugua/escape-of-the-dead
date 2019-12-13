import React from 'react';
import { connect } from 'react-redux';
import { REWARD_KILL } from '../constants';


const Reward = props => {
    return (
      <div>
        <p>Select your reward:</p>
        <input type="radio" name="reward" id="reward1" value="1" defaultChecked/> <label htmlFor="reward1">Destroy all zombies</label><br/>
        <input type="radio" name="reward" id="reward2" value="2" /> <label htmlFor="reward2">Fix 10% of the car</label><br/>
        <input type="radio" name="reward" id="reward3" value="3" /> <label htmlFor="reward3">Stop zombie spawning next turn</label><br/>
        <input type="radio" name="reward" id="reward4" value="4" /> <label htmlFor="reward4">Fix 3 HP of barricade immediately</label><br/>
        <button disabled={props.phase !== 5 || props.zombieKilled < REWARD_KILL} onClick={props.useReward}>Use Reward</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    phase: state.phase,
    zombieKilled: state.zombieKilled
  };
}

export default connect(mapStateToProps)(Reward);
