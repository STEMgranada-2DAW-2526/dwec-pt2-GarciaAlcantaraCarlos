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

  return (
    <>
      <div className="statsBoard">
        <div className="cell">
          <p>Ronda</p>
          <p>{ state.round }</p>
        </div>
        <div className="cell">
          <p>Daño de oleada</p>
          <p>{ state.damageDealt } / { state.waveGoal }</p>
        </div>
        <div className="cell">
          <p>Caramelos sangrientos</p>
          <p>{ state.caramels }</p>
        </div>
      </div>
      <button className="mainClicker" onClick={ () => dispatch({ type: 'CLICK_SHOOT' }) }>
        <img src="/canion_turron.png" alt="Cañón disparador" />
      </button>
    </>
  )
}