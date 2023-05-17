import { useState } from "react";

import "./App.css";
import Board from "./assets/components/board.jsx";
import PopUp from "./assets/components/popup.jsx";

function App() {
  
  const [popUpState, setPopUpState] = useState(true);

  const [players, setPlayers] = useState(
    {
      playerOne:{
        name: null
      },
      playerTwo:{
        name: null
      }
    }
  )

  return (
    <>
      {popUpState ? (
        <PopUp setPopUpState={setPopUpState} setPlayers={setPlayers} players={players}></PopUp>
      ) : (
        <>
          <Board players={players}></Board>
          <div></div>
        </>
      )}
    </>
  );
}

export default App;
