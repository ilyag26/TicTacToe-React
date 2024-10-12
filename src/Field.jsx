import imageTicTacToe from './img/tictactoe.png'
import pickRandomColor from './Logic'

function Field(){

  function Click1(){
  
    document.body.style.backgroundColor = pickRandomColor();
  
  }

return(
  <>
    <div className="card">
      <h2 className="title-card">TicTacToe</h2>
      <img src={imageTicTacToe}></img>
      <button onClick={Click1}>CLICK</button>
    </div>
  </>
);


}

export default Field