import "./square.css";
import trophyIcon from '../forms/trophy.svg'
import crossIcon from '../forms/cross.svg'
import circleIcon from '../forms/circle.svg'

export default function Square({ state, onClickFunction }) {
    return (
      <div className="square w-full h-56 bg-slate-100 rounded-lg hover:scale-105" onClick={onClickFunction}>
        {state === 'X' ? (
          <img className="w-full h-full" src={crossIcon} alt="" />
        ) : state === 'O' ? (
          <img className="w-full h-full" src={circleIcon} alt="" />
        ) : null}
      </div>
    );
  }
  