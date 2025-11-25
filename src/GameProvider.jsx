import { createContext, useState } from "react"

const initialState = {
  damageDealt: 0,
  waveGoal: 100,
  caramels: 20,
  gamaePerShot: 1,
  authoShotsPerSecond: 1,
  
  upgrades: []
}

export const GameContext = createContext();

export default function GameProvider() {

  const [test, setTest] = useState('test')

  return (
    <GameContext value={ test }>
      {children}
    </GameContext>
  )
}