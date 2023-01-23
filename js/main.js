
const board = ['','','','','','','','',''];
let player = 'X';
const cells = document.querySelectorAll('.cell');
const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]];



  // for loop die door de cellen heen loopt //
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() { // event listener die kijkt of er op een cel geklikt wordt //
    if (board[i] === '') { // als de cel leeg is, dan wordt er een X of O geplaatst //
      board[i] = player; // de waarde van de cel wordt gelijk gesteld aan de waarde van de speler //
      this.innerHTML = player;
      checkForWinner();// als er een X of O geplaatst is, dan wordt er gecheckt of er een winnaar is //
      switchPlayer();// als er op een cel geklikt wordt, dan wordt de speler gewisseld //
    } else {
      alert('This spot is already taken. Please choose another one.');
    }
  });
}

function switchPlayer() {
  if (player == 'X') { 
    player = 'O';
  } else {
    player = 'X';
  }
}

function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
    if (board[winningCombinations[i][0]] == player && board[winningCombinations[i][1]] == player && board[winningCombinations[i][2]] == player) {
      alert(player + ' wins!');
    }
  }
}