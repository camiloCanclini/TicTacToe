import { useState } from "react";

import "./App.css";
import Board from "./assets/components/board/board.jsx";
import PopUp from "./assets/components/popup/popup.jsx";

function App() {
  
  const [popUpState, setPopUpState] = useState(true);

  const [players, setPlayers] = useState(
    {
      playerOne:{
        name: null,
        icon:'X',
        wins: 0,
      },
      playerTwo:{
        name: null,
        icon: 'O',
        wins: 0,
      }
    }
  )

  return (
    <>
      {popUpState ? (
        <PopUp setPopUpState={setPopUpState} setPlayers={setPlayers} players={players}></PopUp>
      ) : (
        <>
          <Board players={players} setPlayers={setPlayers}></Board>
          <div></div>
        </>
      )}
    </>
  );
}

export default App;
