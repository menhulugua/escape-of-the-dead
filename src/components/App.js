import React from 'react';
import { connect } from 'react-redux';

import Lawn from './Lawn';
import Barricade from './Barricade';
import Garage from './Garage';
import Reward from './Reward';
import { REWARD_KILL, PHASE_NAME, ZOMBIE_KILL, BARRICADE_FIX, GARAGE_FIX, DICE_COUNT, ROLL_DICE, LAWN_ACTION, BARRICADE_ACTION, GARAGE_ACTION } from '../constants';
import { spawnZombie, phaseProgress, damageBarricade, assignDice, clearDice, playAction, clearAction, killZombie, fixBarricade, fixGarage, killIncrease } from '../actions';



class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.phaseProceed();
    }, 0);
  }

  componentDidUpdate(prevProps) {

    if (prevProps.phase !== this.props.phase){
        console.log(prevProps.phase, this.props.phase);
        setTimeout(() => {
          this.phaseProceed();
        }, 0);
    }

  }

  async phaseProceed() {
    switch(this.props.phase) {
      case 1:
        let zombie = this.props.zombie;
        await this.props.spawnZombie(this.props.garage);
        alert(`Spawned ${this.props.zombie - zombie} zombie${this.props.zombie - zombie > 1? 's' : ''}`);
        this.props.phaseProgress();
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:
        this.props.damageBarricade(this.props.zombie);
        alert(`Lose HP: ${this.props.zombie}`);
        this.props.phaseProgress();
        break;
      case 5:
        if (this.props.zombieKilled < REWARD_KILL) {
          alert('No reward to claim');
          this.props.clearAction();
          this.props.phaseProgress();
        }
        break;
      default:
        alert('Something is wrong, phase does not exist');
        this.restartGame();
        break;
    }
  }

  restartGame() {

  }

  confirmDice = () => {
    var dice = [];
    var select = document.querySelectorAll('select');
    for (let i = 0; i < select.length; i++)
      dice.push(select[i].value);
    this.props.assignDice(dice);
    // action that's not assigned any dice is considered done
    if (!dice.includes(LAWN_ACTION))
      this.props.playAction(LAWN_ACTION);
    if (!dice.includes(BARRICADE_ACTION))
      this.props.playAction(BARRICADE_ACTION);
    if (!dice.includes(GARAGE_ACTION))
      this.props.playAction(GARAGE_ACTION);

    this.props.phaseProgress();
  }

  rollDice = async(type) => {
    // type 1 for Lawn, 2 for Barricade, 3 for Garage
    let diceCount = this.props.diceAssigned.filter(action => action === type).length;
    let rollResult = ROLL_DICE(diceCount);
    alert(`Result: ${rollResult}`);
    let successRoll = 0;
    let successNumberArray = [];

    switch(type) {
      case '1': //kill zombie
        successNumberArray = [...ZOMBIE_KILL];
        break;
      case '2': //fix barricade
        successNumberArray = [...BARRICADE_FIX];
        break;
      case '3': //fix car
        successNumberArray = [...GARAGE_FIX];
        break;
      default:
        alert('Something is wrong, action does not exit');
        this.restartGame();
        return 0;
    }

    rollResult.forEach(value => {
      if (successNumberArray.includes(value))
        successRoll++;
    });

    switch(type) {
      case '1': //kill zombie
        this.props.killZombie(successRoll);
        let killIncreased = this.props.zombie >= successRoll? successRoll : this.props.zombie;
        this.props.killIncrease(killIncreased);
        break;
      case '2': //fix barricade
        this.props.fixBarricade(successRoll);
        break;
      case '3': //fix car
        this.props.fixGarage(successRoll);
        break;
      default:
        break;
    }

    await this.props.playAction(type);
    setTimeout(() => {
    if (this.props.actionPlayed.length === 3)
      this.props.phaseProgress();
    }, 1000);
  }

  renderAssignDice() {
    var select = [];
    for (let i = 0; i < DICE_COUNT; i++) {
      select.push(
        <select key={i}>
          <option value="1">Lawn</option>
          <option value="2">Barricade</option>
          <option value="3">Garage</option>
        </select>
      );
    }

    return select;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Phase: {PHASE_NAME[this.props.phase]}</h3>
        <div>
          <p>Assign Dice</p>
          {this.renderAssignDice()}
          <button onClick={this.confirmDice} disabled={this.props.phase !== 2}>Confirm</button>
        </div><hr/>
        <Lawn rollDice={this.rollDice} disabled={this.props.phase !== 3 || this.props.actionPlayed.includes(LAWN_ACTION) } /><hr/>
        <Barricade rollDice={this.rollDice} disabled={this.props.phase !== 3 || this.props.actionPlayed.includes(BARRICADE_ACTION)} /><hr/>
        <Garage rollDice={this.rollDice} disabled={this.props.phase !== 3 || this.props.actionPlayed.includes(GARAGE_ACTION)} /><hr/>
        {/* {this.props.zombieKilled >= REWARD_KILL && <Reward />} */}
        <Reward />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zombieKilled: state.zombieKilled,
    garage: state.garage,
    phase: state.phase,
    zombie: state.zombie,
    diceAssigned: state.diceAssigned,
    actionPlayed: state.actionPlayed
  };
}

export default connect(mapStateToProps, { spawnZombie, phaseProgress, damageBarricade, assignDice, clearDice, playAction, clearAction, killZombie, fixBarricade, fixGarage, killIncrease })(App);
