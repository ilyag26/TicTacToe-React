/* eslint-disable react/prop-types */
import { useState } from 'react';

function checkWinning(array, player1, player2){

  if(array[0] == player1 && array[1] == player1 && array[2] == player1){
    return player1
  } else if(array[3] == player1 && array[4] == player1 && array[5] == player1){
    return player1
  } else if(array[6] == player1 && array[7] == player1 && array[8] == player1){
    return player1
  } else if(array[0] == player1 && array[3] == player1 && array[6] == player1){
    return player1
  } else if(array[1] == player1 && array[4] == player1 && array[7] == player1){
    return player1
  } else if(array[2] == player1 && array[5] == player1 && array[8] == player1){
    return player1
  } else if(array[0] == player1 && array[4] == player1 && array[8] == player1){
    return player1
  } else if(array[2] == player1 && array[4] == player1 && array[6] == player1){
    return player1
  } else if(array[0] == player2 && array[1] == player2 && array[2] == player2){
    return player2
  } else if(array[3] == player2 && array[4] == player2 && array[5] == player2){
    return player2
  } else if(array[6] == player2 && array[7] == player2 && array[8] == player2){
    return player2
  } else if(array[0] == player2 && array[3] == player2 && array[6] == player2){
    return player2
  } else if(array[1] == player2 && array[4] == player2 && array[7] == player2){
    return player2
  } else if(array[2] == player2 && array[5] == player2 && array[8] == player2){
    return player2
  } else if(array[0] == player2 && array[4] == player2 && array[8] == player2){
    return player2
  } else if(array[2] == player2 && array[4] == player2 && array[6] == player2){
    return player2
  }

}

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
  const [arrayField, changeField] = useState(Array(9).fill(null))
  const [checkStep, changeStep ] = useState(0)

  function clickAction(i){
    const nextSquares = [...arrayField]
    if(checkStep == 0){
      nextSquares[i] = Player1;
      changeField(nextSquares);
      changeStep(1)
    } else{
      nextSquares[i] = Player2;
      changeField(nextSquares);
      changeStep(0)
    }
    
  }

  let status = checkWinning(arrayField.slice(), Player1, Player2)
  let progres;
  if(status == Player1 || status == Player2){
    progres = 'WINNER IS ' + status
  } else {
    progres = 'GAME IS PROCESSING'
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