
import React from 'react';
import {useNavigate} from "react-router-dom"
  
function Homepage() {
  const navigate = useNavigate();
  return (
      <div>
        <h1 style={{color:"green"}}>Tic-tac-toe Game</h1>
        <button onClick={()=>navigate("/game")}>Start Game</button>
      </div>
  )
};
  
export default Homepage;