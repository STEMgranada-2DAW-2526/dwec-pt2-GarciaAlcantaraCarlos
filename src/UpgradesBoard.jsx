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
        <button>
          Cañón de Turrón Explosivo<br />
          15 caramelos (+2 daño)
        </button>
        <button>
          Renos-Lanzamisiles<br />
          15 caramelos (+5 daño)
        </button>
        <button>
          Árbol de Navidad Laser<br />
          15 caramelos (+2 daño)
        </button>
      </div>
    </div>
  )
}