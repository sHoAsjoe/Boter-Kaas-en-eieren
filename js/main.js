console.log ('hello world');

let  cells = document.querySelectorAll('.cell');
// console.log (cells);
let playersMessage = document.querySelector('.playerMessage');
// console.log (playersMessage);
const restaBtn = document.querySelector('resetbutton');

const winCondition = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4 ,7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 8],
];
// speler X is eerste
let xPlayer = 'true';
let count = 0;

// spel logica 


// vak toont X of O bij klikken 

cells.forEach((element) => {
     element.addEventListener("click", () => {
        if (xPlayer) {
            xPlayer = false;
            //laat X zien op het bord
            element.innerText = 'X';
            element.disabled = true;
        } else {
            xPlayer = true;
            //
            element.innerText = 'O';
            element.disabled = true;
        }
        // verhoog met 1 bij elke klik
        count += 1;
        if (count === 9){
            //Het is gelijk spel
        }
        // check winner 
        // winChecker (){

        // }
     });
});

// loop through playfield



// functie check winnen
function checkWinner () {

}