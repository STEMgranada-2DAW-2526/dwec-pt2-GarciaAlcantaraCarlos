import { useGlobalState } from "./GameProvider";
import './UpgradesBoard.css'

export default function UpgradesBoard () {
  const { state, dispatch } = useGlobalState();

  return (
    <div className="upgradePanel">
      <button className="mainMultiplier" onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}>
        Disparos por segundo: {state.autoShotsPerSecond} <br />
        Mejorar disparos automáticos: {state.multiplierCost.toFixed(0)} caramelos
      </button>
      <div className="progressButtons">
        <button 
          className={state.upgrades > 0 ? 'bought' : '' + state.upgrades == 0 ? ' buyable' : ''}
          onClick={ () => dispatch({ type: 'BUY_DAMAGE_UPGRADE', cost: 15, step: 0 }) }
        >
          Cañón de Turrón Explosivo
          <span>15 caramelos (+2 daño)</span>
        </button>
        <button
          className={state.upgrades > 1 ? 'bought' : '' + state.upgrades == 1 ? ' buyable' : ''}
          onClick={ () => dispatch({ type: 'BUY_DAMAGE_UPGRADE', cost: 30, step: 1 }) }
        >
          Renos-Lanzamisiles
          <span>30 caramelos (+5 daño)</span>
        </button>
        <button 
          className={state.upgrades > 2 ? 'bought' : '' + state.upgrades == 2 ? ' buyable' : ''}
          onClick={ () => dispatch({ type: 'BUY_DAMAGE_UPGRADE', cost: 50, step: 2 }) }
        >
          Árbol de Navidad Laser
          <span>50 caramelos (+10 daño)</span>
        </button>
      </div>
    </div>
  )
}