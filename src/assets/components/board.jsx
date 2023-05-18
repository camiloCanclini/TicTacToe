import Square from "./square.jsx";
import PlayerCard from "./playerCard.jsx";
import WinnerPopUp from "./winnerPopUp.jsx";
import "./board.css";
import { useState } from "react";

export default function Board({ players, setPlayers }) {
  const initialSquares = Array(9).fill(null);

  const [squares, setSquares] = useState(initialSquares);
  const [turn, setTurn] = useState(true);
  const [showWinnner, setShowWinner] = useState(false);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (squares[i] || winner != null) {
      return; // Nothing To Do Because It already has a value
    }
    const nextSquares = squares.slice(); // Creating a Copy of the original array
    nextSquares[i] = turn ? "X" : "O"; // Setting Mark
    setSquares(nextSquares); // Function of useState Hook

    if (calculateWinner(nextSquares) != null) {
      setShowWinner(true);
      console.log("Hay un ganador " + showWinnner);
    }else{
      setTurn(!turn); // Changing turn
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setPlayers({
          ...players,
          ["playerOne"]: {
            ...players["playerOne"],
            wins: players.playerOne.wins + 1,
          },
          ["playerTwo"]: {
            ...players["playerTwo"],
            wins: players.playerTwo.wins + 1,
          },
        });
        //console.log("hay un ganador");
        if (squares[a] == "X") {
          setWinner(players.playerOne);
        } else {
          setWinner(players.playerTwo);
        }
        return true;
      }
    }
    return null;
  }
  const playAgain = () => {
    setTurn(!turn)
    setWinner(null)
    setSquares(initialSquares);
    setShowWinner(false);
  }
  return (
    <>
      {showWinnner ? (
        <WinnerPopUp
          winner={winner}
          closePopUp={() => setShowWinner(false)}
          playAgain={playAgain}
        />
      ) : null}
      
      <div className="flex flex-col justify-center items-center lg:flex-row w-full">
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
      {(winner != null && showWinnner == false) || !squares.includes(null) ? <button onClick={playAgain} className="playagain-btn cursor-pointer p-4 w-20 h-20 bg-yellow-500 rounded-full shadow-inner shadow-amber-300 mx-2 hover:scale-105 transition-all"><i class="fa-solid fa-rotate-right text-3xl"></i></button> : null}
    </>
  );
}
