import "./square.css";


export default function Square({ state, onClickFunction }) {
    return (
      <div className="square w-full h-56 bg-slate-100 rounded-lg hover:scale-105" onClick={onClickFunction}>
        {state === 'X' ? (
          <img className="w-full h-full" src="src/assets/forms/cross.svg" alt="" />
        ) : state === 'O' ? (
          <img className="w-full h-full" src="src/assets/forms/circle.svg" alt="" />
        ) : null}
      </div>
    );
  }
  