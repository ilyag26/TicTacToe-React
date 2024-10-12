// function getRandomInt(min,max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }
  
// function pickRandomColor(){
//     const colors = ['#FFE200', '#09FF00', '#FF0000', '#6800FF', '#FF7900','#00FFFE'];
//     return colors[getRandomInt(0,colors.length-1)];
// }

function checkWinning(array, player1, player2, pos){

    for(let i = 0; i!=7; i++){
      if(array[pos[i][0]] == player1 && array[pos[i][1]] == player1 && array[pos[i][2]] == player1){
        return player1;
      } else if(array[pos[i][0]] == player2 && array[pos[i][1]] == player2 && array[pos[i][2]] == player2){
        return player2;
      }
    }
  
}

export default checkWinning