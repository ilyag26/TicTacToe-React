/* eslint-disable react/prop-types */
import { useState } from 'react';

function Table({value, clickAction}){
  return (
    <button className="square" onClick={clickAction}>
      {value}
    </button>
  );

}

function Field(){

  const [state, changeState] = useState("Game is processing...")
  const [arrayField, changeField] = useState(Array(9).fill(null))
  const [checkStep, changeStep ] = useState(0)

  function clickAction(i){
    const nextSquares = [...arrayField]
    
    if(checkStep == 0){
      nextSquares[i] = 'X';
      changeField(nextSquares);
      changeStep(1)
    } else{
      nextSquares[i] = '0';
      changeField(nextSquares);
      changeStep(0)
    }
    checkWinning()

  }

  function checkWinning(){
    const check = [...arrayField]
    if(check[0] == 'X' && check[1] == 'X' && check[2] == "X"){
        changeState("WINNER X");
    }
  }

  return(
    <>
      <div className="card">
        <h2 className="title-card">{state}</h2>
          <div className="field">
            <div className="row">
            <Table value={arrayField[0]} clickAction={() => clickAction(0)} />
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