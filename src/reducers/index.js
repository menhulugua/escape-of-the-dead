import { combineReducers } from 'redux';
import { STARTING_THREAT, STARTING_HP, STARTING_CAR_FIX } from '../constants';

const zombieReducer = (state=STARTING_THREAT, action) => {
  switch(action.type) {
    case 'KILL_ZOMBIE':
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
      return state + action.payload;
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
    case 'KILL_ZOMBIE':
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

export default combineReducers({
  zombie: zombieReducer,
  barricade: barricadeReducer,
  garage: garageReducer,
  zombieKilled: zombieKilledReducer,
  phase: phaseReducer,
  round: roundReducer,
  zombieSpawn: zombieSpawnReducer
});
