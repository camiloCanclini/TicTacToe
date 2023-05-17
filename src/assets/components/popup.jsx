import React, { useState } from "react";

export default function PopUp({setPopUpState}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopUpState(false);
  };

  return (
    <div className="absolute w-2/3 h-2/3">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Player One</label>
          <img src="src/assets/forms/cross.svg" alt="" width={30} height={30} />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Player Two</label>
          <input type="text" />
        </div>
        <input type="submit" value="Start" />
      </form>
    </div>
  );
}
