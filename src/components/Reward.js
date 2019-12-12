import React from 'react';
import { connect } from 'react-redux';

class Reward extends React.Component {
  render() {
    return (
      <div>
        <p>Select your reward:</p>
        <input type="radio" name="reward" id="reward1" value="1" /> <label for="reward1">Destroy all zombies</label><br/>
        <input type="radio" name="reward" id="reward2" value="2" /> <label for="reward2">Fix 10% of the car</label><br/>
        <input type="radio" name="reward" id="reward3" value="3" /> <label for="reward3">Stop zombie spawning next turn</label><br/>
        <input type="radio" name="reward" id="reward4" value="4" /> <label for="reward4">Fix 3 HP of barricade immediately</label><br/>
        <button>Use Reward</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zombieKilled: state.zombieKilled
  };
}

export default connect(mapStateToProps)(Reward);
