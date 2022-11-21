import React from "react"
import "../Components/Game.css"
function Square({val,chooseSquare,}){
    return (
        <div className="square" onClick={chooseSquare}> {val} </div>
    )
}

export default Square;