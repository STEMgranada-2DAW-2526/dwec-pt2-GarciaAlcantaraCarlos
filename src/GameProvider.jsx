import { createContext, useReducer } from "react"

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
  if (action.type == 'CLICK_SHOOT') {

  } else if (action.type == 'CLICK_SHOOT') {

    } else if (action.type == 'CLICK_SHOOT') {

      } else if (action.type == 'CLICK_SHOOT') {

  } else if (action.type == 'CLICK_SHOOT') {
}

export default function GameProvider( {children} ) {
  
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GameContext value={{ state, dispatch }}>
      {children}
    </GameContext>
  );
}