import { createContext, useReducer, useContext } from "react"

export const GameContext = createContext();

const initialState = {
  damageDealt: 0,
  waveGoal: 10,
  caramels: 20,
  damagePerShot: 1,
  autoShotsPerSecond: 1,
  round: 1,
  multiplierCost: 20,
  upgrades: []
}

function globalReducer(state, action) {

  const newState = { ...state };

  if (action.type == 'CLICK_SHOOT' || action.type == 'AUTO_SHOOT') {
    newState.damageDealt = newState.damageDealt + state.damagePerShot;
  } else if (action.type == 'BUY_MULTIPLIER') {
    if (newState.caramels >= newState.multiplierCost) {
      newState.caramels = newState.caramels - newState.multiplierCost;
      newState.multiplierCost = newState.multiplierCost * 1.2;
      newState.autoShotsPerSecond = newState.autoShotsPerSecond + 1;
    }
  } else if (action.type == 'BUY_DAMAGE_UPGRADE') {
    console.log('buyu');
  } else if (action.type == 'NEXT_WAVE') {
    newState.damageDealt = 0;
    newState.waveGoal = newState.waveGoal * 1.1;
    newState.round = newState.round + 1;
    newState.caramels = newState.caramels + 10;
  }

  return newState;
}

export function GameProvider( {children} ) {
  
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(GameContext);
}