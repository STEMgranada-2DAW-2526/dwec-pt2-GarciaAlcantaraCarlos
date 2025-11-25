import './App.css'
import { GameProvider } from './GameProvider'
import Game from './Game'
import UpgradesBoard from './UpgradesBoard'

function App() {

  return (
    <>
      <GameProvider>
        <Game />
        <UpgradesBoard />
      </GameProvider>
    </>
  )
}

export default App
