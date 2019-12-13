export const STARTING_THREAT = 1;
export const STARTING_HP = 10;
export const FAIL_HP = 0;
export const STARTING_CAR_FIX = 0;
export const VICTORY_CAR_FIX = 10;
export const ZOMBIE_KILL = [3,4,5,6];
export const REWARD_KILL = 10;
export const BARRICADE_FIX = [3,4,5,6];
export const GARAGE_FIX = [1,2,3,4,5,6];
export const DICE_COUNT = 4;
export const PHASE_NAME = ['', 'Spawn Zombie', 'Assign Action Dice', 'Play Action', 'Zombie Attack', 'Reward'];
export const LAWN_ACTION = '1';
export const BARRICADE_ACTION = '2';
export const GARAGE_ACTION = '3';

export const SPAWN_COUNT = progress => {
  if (progress < 40)
    return 1;
  else if (progress < 70)
    return 2;
  else if (progress < 90)
    return 3;
  else {
    return 4;
  }
}

export const ROLL_DICE = number => {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(Math.floor(Math.random() * 6) + 1)
  }
  return result;
}
