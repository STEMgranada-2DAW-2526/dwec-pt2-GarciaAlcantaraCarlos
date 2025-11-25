import { useGlobalState } from "./GameProvider";
import './Game.css'

export default function Game() {
  const { state } = useGlobalState();

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
      </div>
    </>
  )
}