import { combineReducers } from 'redux';
import { STARTING_THREAT, STARTING_HP, STARTING_CAR_FIX } from '../constants';

const zombieReducer = (state=STARTING_THREAT, action) => {
  switch(action.type) {
    case 'KILL_ZOMBIE':
      if (state - action.payload < 0)
        return 0;
      else
        return state - action.payload;
    case 'SPAWN_ZOMBIE':
      return state + action.payload;
    default:
      return state;
  }
}

const barricadeReducer = (state=STARTING_HP, action) => {
  switch(action.type) {
    case 'DAMAGE_BARRICADE':
      return state - action.payload;
    case 'FIX_BARRICADE':
      if (state + action.payload <= STARTING_HP)
        return state + action.payload;
      else
        return STARTING_HP;
    default:
      return state;
  }
}

const garageReducer = (state=STARTING_CAR_FIX, action) => {
  switch(action.type) {
    case 'FIX_GARAGE':
      return state + action.payload * 10;
    default:
      return state;
  }
}

const zombieKilledReducer = (state=0, action) => {
  switch(action.type) {
    case 'KILL_INCREASE':
      return state + action.payload;
    case 'USE_REWARD':
      return 0;
    default:
      return state;
  }
}

const phaseReducer = (state=1, action) => {
  switch(action.type) {
    case 'NEXT_PHASE':
      if (state === 5)
        return 1;
      else
        return state + 1;
    default:
      return state;
  }
}

const roundReducer = (state=1, action) => {
  switch(action.type) {
    case 'NEXT_ROUND':
      return state + 1;
    default:
      return state;
  }
}

const zombieSpawnReducer = (state=true, action) => {
  switch(action.type) {
    case 'NO_ZOMBIE_SPAWN':
      return false;
    case 'ZOMBIE_SPAWN':
      return true;
    default:
      return state;
  }
}

const actionPlayedReducer = (state=[], action) => {
  switch(action.type) {
    case 'PLAY_ACTION':
      return [...state, action.payload];
    case 'CLEAR_ACTION':
      return [];
    default:
      return state;
  }
}

const diceAssignedReducer = (state=[], action) => {
  switch(action.type) {
    case 'ASSIGN_DICE':
      return [...action.payload];
    case 'CLEAR_DICE':
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  zombie: zombieReducer,
  barricade: barricadeReducer,
  garage: garageReducer,
  zombieKilled: zombieKilledReducer,
  phase: phaseReducer,
  round: roundReducer,
  zombieSpawn: zombieSpawnReducer,
  actionPlayed: actionPlayedReducer,
  diceAssigned: diceAssignedReducer
});
