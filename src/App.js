
import React from "react";
import { Route, Routes } from "react-router-dom";
import GameStart from "./Components/Game";
import Homepage from "./Components/Home";

function App(){
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path="game" element={<GameStart/>}/>
    </Routes>
    </div>
  )
}

 export default App