import { useEffect } from "react";
import { useGlobalState } from "./GameProvider";
import './Game.css'

export default function Game() {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch ({ type: 'AUTO_SHOOT' })
    }, (1000 / state.autoShotsPerSecond))

    return () => clearInterval(ticker)
  }, [dispatch, state.autoShotsPerSecond])

  useEffect(() => {
    if (state.damageDealt >= state.waveGoal) {
      dispatch({ type: 'NEXT_WAVE' })
    }
  }, [dispatch, state.damageDealt])

  return (
    <>
      <div className="statsBoard">
        <div className="cell">
          <p>Ronda</p>
          <p>{ state.round }</p>
        </div>
        <div className="cell">
          <p>Daño de oleada</p>
          <p>{ state.damageDealt.toFixed(0) } / { state.waveGoal.toFixed(0) }</p>
        </div>
        <div className="cell">
          <p>Caramelos sangrientos</p>
          <p>{ state.caramels.toFixed(0) }</p>
        </div>
      </div>
      <button className="mainClicker" onClick={ () => dispatch({ type: 'CLICK_SHOOT' }) }>
        <img src="/canion_turron.png" alt="Cañón disparador" />
      </button>
    </>
  )
}