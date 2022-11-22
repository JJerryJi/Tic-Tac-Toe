import './Game.css';
import { useState, useEffect } from "react";
import Square from './Square'
import {Patterns} from "../Patterns"
import { Box,Heading,Center } from '@chakra-ui/react'
import swal from 'sweetalert';

function GameStart() {

  
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player,setPlayer] = useState("O");
  const [result, SetResult] = useState({winner:"none",state: "none"});

  useEffect(()=>{
    checkWin();    
    checkIfTie();
    if(player == "X") {
      setPlayer("O");
    }else{
      setPlayer("X");
    }
  } ,[board])

  useEffect(()=>{
    if(result.state != "none") {
      swal(`Game Finished! Winning Player: ${result.winner}`,{
        buttons: {
          catch: {
            text: "Confirm!",
            value: "catch",
          },
          cancel: true,
        },
      })
      .then((value) => {
        switch (value) {
       
          case "catch":
            swal("Gotcha!","Time to Celebrate", "success");
            break;
       
          default:
            swal("Let's Startover");
        }
      });
    }
    restartGame();
  },[result])

  const chooseSquare = (square) => {
    setBoard(board.map((val,idx)=>{
      if (idx == square && val == ""){
        return player;
      }
      return val;


    }));
    

  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[[currPattern[0]]];
      if(firstPlayer == "") return;
      let foundWinningPattern = true
      currPattern.forEach((idx) => {
        if(board[idx] != firstPlayer){
          foundWinningPattern = false
        }
      })
    if(foundWinningPattern){
      SetResult({winner: player, state:"Won"})
    }
    })
  }

  const checkIfTie = ()=>{
    let filled = true;
    board.forEach((square) => {
      if(square == ""){
        filled = false;
      }
    })

    if(filled){
      SetResult({winner: "No One", state: "Tie"})
    }
  }

  const restartGame = () =>{
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  }

  return (
  <Box p={10}>
    <Center p={5}> <Heading>Tic-Tac-Toe Game</Heading> </Center>
    <Center>
    <Box className="board">
      <Box className='row'> 
        <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
        <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
        <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
       </Box>
      <Box className='row'> 
        <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
        <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
        <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
      </Box>
      <Box className='row'>
        <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
        <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
        <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
      </Box>
    </Box>
    </Center>
  </Box>
  )
  ;
}

export default GameStart;
