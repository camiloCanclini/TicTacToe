import React, { useState } from "react";
import './popup.css'

export default function PopUp({setPopUpState}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopUpState(false);
  };

  return (
    <div className="popup absolute w-2/5 h-2/5 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full h-full">
        <div className="flex p-4">
          <img src="src/assets/forms/cross.svg" alt="" width={40} height={40} className="m-2"/>
          <div className="flex-grow">
            <label htmlFor="playerOne">Player Name</label>
            <input type="text" id="playerOne" className="bg-blue-400 p-1 px-4 w-full rounded-xl"/>
          </div>
        </div>
        <div className="flex p-4">
          <img src="src/assets/forms/circle.svg" alt="" width={40} height={40} className="m-2"/>
          <div className="flex-grow">
            <label htmlFor="playerTwo">Player Name</label>
            <input type="text" id="playerTwo" className="bg-red-400 p-1 px-4 w-full rounded-xl"/>
          </div>
        </div>
        <input type="submit" value="Start" className="cursor-pointer p-2 bg-yellow-500 rounded-full w-28 shadow-inner shadow-amber-300 mx-auto"/>
      </form>
    </div>
  );
}
