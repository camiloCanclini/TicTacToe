import React, { useState, useRef } from "react";
import './popup.css'
import crossIcon from '../forms/cross.svg'
import circleIcon from '../forms/circle.svg'

export default function PopUp({setPopUpState, setPlayers, players}) {
  
  const playerOneName = useRef(null);
  const playerTwoName = useRef(null);

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopUpState(false);
    setPlayers({
      ...players,
      ["playerOne"]: {
        ...players["playerOne"],
        name: playerOneName.current.value
      },
      ["playerTwo"]: {
        ...players["playerTwo"],
        name: playerTwoName.current.value
      }
    })
  };

  return (
    <div className="popup z-50 p-5 absolute w-4/5 sm:w-96 h-2/5 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly w-full h-full">
        <div className="flex p-4">
          <img src={crossIcon} alt="" width={40} height={40} className="m-2"/>
          <div className="flex-grow">
            <label htmlFor="playerOne">Player Name</label>
            <input ref={playerOneName} required type="text" id="playerOne" className="bg-blue-400 p-1 px-4 w-full rounded-xl"/>
          </div>
        </div>
        <div className="flex p-4">
          <img src={circleIcon} alt="" width={40} height={40} className="m-2"/>
          <div className="flex-grow">
            <label htmlFor="playerTwo">Player Name</label>
            <input ref={playerTwoName} required type="text" id="playerTwo" className="bg-red-400 p-1 px-4 w-full rounded-xl"/>
          </div>
        </div>
        <input type="submit" value="Start" className="cursor-pointer p-2 bg-yellow-500 rounded-full w-28 shadow-inner shadow-amber-300 mx-auto"/>
      </form>
    </div>
  );
}
