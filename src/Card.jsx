import imageTicTacToe from './img/tictactoe.png'
function Card(){

// const listNumbers = [
//   '[]','[]','[]',
// ]

function getRandomInt(min,max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function pickRandomColor(){
  const colors = ['#FFE200', '#09FF00', '#FF0000', '#6800FF', '#FF7900','#00FFFE'];
  return colors[getRandomInt(0,colors.length-1)];
}

function Click1(){

  document.body.style.backgroundColor = pickRandomColor();

}

// const listShow = listNumbers.map(list => <span key={list}>{list}</span>);

return(
  <>
    <div className="card">
      <h2>TicTacToe</h2>
      <p>Here you can play tic tac toe</p>
      <img src={imageTicTacToe}></img>
      <button onClick={Click1}>CLICK</button>
    </div>
  </>
);


}

export default Card