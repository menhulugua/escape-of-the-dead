import { SPAWN_COUNT } from ../constants;

export const killZombie = killed => {
  return {
    type: 'KILL_ZOMBIE',
    payload: killed
  };
}

export const spawnZombie = progress => {
  return {
    type: 'SPAWN_ZOMBIE',
    payload: SPAWN_COUNT(progress)
  };
}

export const damageBarricade = damage => {
  return {
    type: 'DAMAGE_BARRICADE',
    payload: damage
  };
}

export const fixBarricade = fix => {
  return {
    type: 'FIX_BARRICADE',
    payload: fix
  };
}

export const fixGarage = fix => {
  return {
    type: 'FIX_GARAGE',
    payload: fix
  };
}

export const useReward = () => {
  return {
    type: 'USE_REWARD'
  };
}

export const phaseProgress = () => {
  return {
    type: 'NEXT_PHASE'
  };
}

export const zombieSpawn = () => {
  return {
    type: 'ZOMBIE_SPAWN'
  };
}

export const noZombieSpawn = () => {
  return {
    type: 'NO_ZOMBIE_SPAWN'
  };
}
