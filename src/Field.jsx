/* eslint-disable react/prop-types */
import { useState } from 'react';
import checkWinning from './Logic';

function Table({value, clickAction}){
  return (
    <button className="square" onClick={clickAction}>
      {value}
    </button>
  );

}

function Field(){

  let Player1 = 'X';
  let Player2 = 'O';

  let pos1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [arrayField, changeField] = useState(Array(9).fill(null));
  const [checkStep, changeStep ] = useState(0);

  function clickAction(i){
    const nextSquares = [...arrayField];
    if(checkStep == 0){
      nextSquares[i] = Player1;
      changeField(nextSquares);
      changeStep(1)
    } else{
      nextSquares[i] = Player2;
      changeField(nextSquares);
      changeStep(0);
    }
    
  }

  let status = checkWinning(arrayField.slice(), Player1, Player2, pos1)
  let progres;
  
  if(status == Player1 || status == Player2){
    progres = 'WINNER IS ' + status;
  } else {
    progres = 'GAME IS PROCESSING';
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
      </div>
    </>
);

}

export default Field