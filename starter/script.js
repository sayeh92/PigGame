'use strict';

const diceRoll = document.querySelector('.btn.btn--roll');
const diceImage = document.querySelector('.dice');
const current = document.getElementById('current--0');
const score = document.getElementById('score--0');
const hold = document.querySelector('.btn.btn--hold');
const newGame = document.querySelector('.btn.btn--new');
const player1Switch = document.querySelector('player.player--0');
const player2Switch = document.querySelector('player.player--1');

diceRoll.addEventListener('click', roll);
hold.addEventListener('click', stop);
newGame.addEventListener('click', restartGame);



function activePlayer(){
  if (player1Switch ) {
    roll;
    stop;
    restartGame;
    console.log("Player 1");
    player1Switch.classList.add("player--active")
  } else { 
    roll;
    stop;
    restartGame;
    console.log("Player 2");
    player1Switch.classList.add("player--active")
  }
}


let totalScore = 0;``
let currentNum = 0;


function roll() {
  let randomNum = Math.floor(Math.random() * 7);
  if (randomNum !== 0) {
    currentNum += randomNum;
    current.textContent = currentNum;
    diceImage.src = `dice-${randomNum}.png`;
  } else {
    currentNum = 0;
    current.textContent = 0;
    activePlayer();
  }
}

function stop() {
  totalScore += currentNum;
  score.textContent = totalScore;
  currentNum = 0;
  current.textContent = 0;
}

function restartGame(){
  totalScore = 0;
  score.textContent = 0;
  console.log("game over");
  currentNum = 0;
  current.textContent = 0 ;
  
}
//If this part (let totalScore = 0;)  was inside the function it would reset each time
// which is logical. since by every clicking it generates a new roll
