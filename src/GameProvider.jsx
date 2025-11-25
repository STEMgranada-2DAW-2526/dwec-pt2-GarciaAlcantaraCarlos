import { createContext, useReducer, useContext } from "react"

export const GameContext = createContext();

const initialState = {
  damageDealt: 0,
  waveGoal: 100,
  caramels: 20,
  gamaePerShot: 1,
  authoShotsPerSecond: 1,
  round: 1,
  upgrades: []
}

function globalReducer(state, action) {

  const newState = { ...state };

  if (action.type == 'CLICK_SHOOT') {
    console.log('click')
  } else if (action.type == 'AUTO_SHOOT') {
    
  } else if (action.type == 'BUY_MULTIPLIER') {

  } else if (action.type == 'BUY_DAMAGE_UPGRADE') {

  } else if (action.type == 'NEXT_WAVE') {

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