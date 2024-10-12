
function Card(){

const listNumbers = [
  '[]','[]','[]',
]

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

const listShow = listNumbers.map(list => <span key={list}>{list}</span>);

return(
  <>
    <button onClick={Click1}>
    CLICK
    </button>
    <h3>TIC TAC TOE FIELD:</h3>
    <div>{listShow}<br />{listShow}<br />{listShow}<br /></div>
  </>
);


}

export default Card