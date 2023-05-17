import { useState } from "react";

import "./App.css";
import Board from "./assets/components/board.jsx";
import PopUp from "./assets/components/popup.jsx";

function App() {
  const [popUpState, setPopUpState] = useState(true);
  return (
    <>
      {popUpState ? (
        <PopUp setPopUpState={setPopUpState}></PopUp>
      ) : (
        <>
          <Board></Board>
          <div></div>
        </>
      )}
    </>
  );
}

export default App;
