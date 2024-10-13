/* eslint-disable react/prop-types */
import { useState } from 'react';
import {checkWinning,getRandomInt} from './Logic';

function Table({value, clickAction}){
  return (
    <button className="square" onClick={clickAction}>
      {value}
    </button>
  );

}

function Field(){
  let block = false;
  let Player1 = 'X';
  let Player2 = 'O';
  let stepMake = false;

  const [arrayField, changeField] = useState(Array(9).fill(null));
  const reset = <button className="resetGame" onClick={resetGame}>RESET</button>

  let pos1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [6, 4, 2]
  ];

  let status = checkWinning(arrayField.slice(), Player1, Player2, pos1)
  let progres; 
  
  if(status == Player1 || status == Player2){
    progres = 'WINNER IS ' + status;
    block = true;
  } else {
    progres = 'GAME IS PROCESSING';
  }

  function clickAction(i){
    const nextSquares = [...arrayField];
    if(block === false && nextSquares[i] == null){
        nextSquares[i] = Player1;
        computerStep(nextSquares)
        changeField(nextSquares);
        stepMake = false;
    } 
  }

  function computerStep(nextSquares){
    while (stepMake != true){
      let step = getRandomInt(0,7);
      for(let i = 0; i!=nextSquares.length; i++){
        if(nextSquares[step] != 'X' && nextSquares[step] != 'O'){
          nextSquares[step] = Player2;
          stepMake = true;
        }
      } 
    }
    console.log(nextSquares)
  }

  function resetGame(){
    block = false;
    changeField(Array(9).fill(null))
  }

  return(
    <>
      <div className="card">
        <h2 className="title-card">{progres}</h2>
          <div className="field">
            <div className="row">
            <Table value={arrayField[0]} clickAction={() => clickAction(0)}/>
            <Table value={arrayField[1]} clickAction={() => clickAction(1)}/>
            <Table value={arrayField[2]} clickAction={() => clickAction(2)}/>
            </div>
            <div className="row">
            <Table value={arrayField[3]} clickAction={() => clickAction(3)}/>
            <Table value={arrayField[4]} clickAction={() => clickAction(4)}/>
            <Table value={arrayField[5]} clickAction={() => clickAction(5)}/>
            </div>
            <div className="row">
            <Table value={arrayField[6]} clickAction={() => clickAction(6)}/>
            <Table value={arrayField[7]} clickAction={() => clickAction(7)}/>
            <Table value={arrayField[8]} clickAction={() => clickAction(8)}/>
            </div>
          </div>
          {reset}
      </div>
    </>
);

}

export default Field