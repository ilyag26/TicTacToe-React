import { useState } from 'react';

function Table(){
  
  const [value, setValue] = useState(null);
  
  function makeStep(){
    setValue('X')
  }

  return (
    <button className="square" onClick={makeStep}>
      {value}
    </button>
  );

}

function Field(){

return(
  <>
    <div className="card">
      <h2 className="title-card">TicTacToe</h2>
        <div className="field">
          <div className="row">
          <Table />
          <Table />
          <Table />
          </div>
          <div className="row">
          <Table />
          <Table />
          <Table />
          </div>
          <div className="row">
          <Table />
          <Table />
          <Table />
          </div>
        </div>
    </div>
  </>
);


}

export default Field