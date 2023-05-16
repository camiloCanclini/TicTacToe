import Square from "./square.jsx";
import "./board.css";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice(); // Creating a Copy of the original array
    nextSquares[i] = "X";
    setSquares(nextSquares); // Function of useState Hook
  }
  return (
    <div className="grid grid-rows-3 justify-stretch align-center h-1/2 w-full p-4 md:w-3/5 gap-2 rounded-lg ">
      <div className="columns-3 gap-2 w-full">
        <Square state={squares[0]} onClickFunction={() => handleClick(0)} />
        <Square state={squares[1]} onClickFunction={() => handleClick(1)} />
        <Square state={squares[2]} onClickFunction={() => handleClick(2)} />
      </div>
      <div className="columns-3 gap-2">
        <Square state={squares[3]} onClickFunction={() => handleClick(3)} />
        <Square state={squares[4]} onClickFunction={() => handleClick(4)} />
        <Square state={squares[5]} onClickFunction={() => handleClick(5)} />
      </div>
      <div className="columns-3 gap-2">
        <Square state={squares[6]} onClickFunction={() => handleClick(6)} />
        <Square state={squares[7]} onClickFunction={() => handleClick(7)} />
        <Square state={squares[8]} onClickFunction={() => handleClick(8)} />
      </div>
    </div>
  );
}
