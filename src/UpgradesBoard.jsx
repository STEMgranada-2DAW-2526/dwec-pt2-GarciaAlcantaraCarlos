import { useGlobalState } from "./GameProvider";
import './UpgradesBoard.css'

export default function UpgradesBoard () {
  const { state, dispact } = useGlobalState();

  return (
    <div className="upgradePanel">
      <button className="mainMultiplier"></button>
      <div className="progressButtons">
        <button></button>
      </div>
    </div>
  )
}