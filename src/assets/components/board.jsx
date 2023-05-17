import Square from "./square.jsx";
import PlayerCard from "./playerCard.jsx";
import "./board.css";
import { useState } from "react";

export default function Board({ players }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(true);

  function handleClick(i) {
    if (squares[i]) {
      return; // Nothing To Do Because It already has a value
    }
    const nextSquares = squares.slice(); // Creating a Copy of the original array
    nextSquares[i] = turn ? "X" : "O"; // Setting Mark
    setTurn(!turn); // Changing turn
    setSquares(nextSquares); // Function of useState Hook
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row w-full">
        <PlayerCard player={players.playerOne} turn={turn}></PlayerCard>
        <PlayerCard player={players.playerTwo} turn={!turn}></PlayerCard>
      </div>
      <div className="board grid grid-rows-3 justify-stretch max-w-sm w-full p-4 sm:w-3/5 gap-2 rounded-lg ">
        <div className=" flex columns-3 gap-2 items-center">
          <Square state={squares[0]} onClickFunction={() => handleClick(0)} />
          <Square state={squares[1]} onClickFunction={() => handleClick(1)} />
          <Square state={squares[2]} onClickFunction={() => handleClick(2)} />
        </div>
        <div className="flex columns-3 gap-2 items-center">
          <Square state={squares[3]} onClickFunction={() => handleClick(3)} />
          <Square state={squares[4]} onClickFunction={() => handleClick(4)} />
          <Square state={squares[5]} onClickFunction={() => handleClick(5)} />
        </div>
        <div className="flex columns-3 gap-2 items-center">
          <Square state={squares[6]} onClickFunction={() => handleClick(6)} />
          <Square state={squares[7]} onClickFunction={() => handleClick(7)} />
          <Square state={squares[8]} onClickFunction={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
