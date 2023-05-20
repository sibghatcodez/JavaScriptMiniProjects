const errorMessage = document.getElementById('error-message');
const formBox = document.querySelector('.myform');
const startBtn = document.getElementById('startBtn');
const gameStartBox = document.querySelector('.game-start');
const roundDisplay = document.getElementById('roundDisplay');
const roundsWin = document.getElementById('roundsToWin');
const result = document.getElementById('result');
const roundsWon = document.getElementById('roundsWon');

let Rounds = 0;
let TotalRounds = 0;
let points = 0;
let won = 0;
let lose = 0;
let roundsToWin = 0;
let TheGameOver = false;

function CheckGame() {
  const rounds = parseInt(document.getElementById('userInput').value);
  TotalRounds = rounds;

  if (rounds <= 4 || rounds % 2 !== 0) {
    errorMessage.textContent = 'Round number should be above 4 and should be an even number.';
  } else {
    errorMessage.textContent = '';
    PlayGame(rounds);
  }
}

function PlayGame(rounds) {
  formBox.style.display = 'none';
  gameStartBox.style.display = 'block';
  RoundsUpdate(rounds)
}

const RoundsUpdate = (rounds) => {
  roundsToWin = rounds / 2;
  
  if(Rounds == rounds) GameOver(1);
  if(points == roundsToWin) GameOver(2);
  
  Rounds++;
  if(!TheGameOver) {
  roundDisplay.textContent = `Round ${Rounds} of ${rounds}`;
  roundsWin.textContent = `You need to win atleast ${roundsToWin} to win the game.`
  roundsWon.textContent = `Rounds won ${points} out of ${roundsToWin}`
  }
}

function GameOver(condition) {
  if(condition == 1) { TheGameOver = true; result.textContent = 'You lost the game!'; }
  else if(condition == 2) { TheGameOver = true; result.textContent = 'You won the game!'; }
  roundsWon.textContent = "";
  // roundsWon.style.display = 'none';
  roundsWin.textContent = "";
}
const squares = document.querySelectorAll('.squares');

squares.forEach(square => {
  square.addEventListener('click', () => {
    if(!TheGameOver) result.textContent = `${(Check(square.value))}`;
    RoundsUpdate(TotalRounds);
  });
});

//paper - 0
//rock - 1
//scissor - 2

function Check(user) {
  let computer = Math.floor(Math.random()*3);

  if(user == 0 && computer == 0) return "Paper vs Paper | Draw";
  if(user == 0 && computer == 1) { points++; return "Paper vs Rock | Win"; }
  if(user == 0 && computer == 2) { return "Paper vs Scissor | Lose";}

  if(user == 1 && computer == 0) { return "Rock vs Paper | Lose";}
  if(user == 1 && computer == 1) { return "Rock vs Rock | Draw";}
  if(user == 1 && computer == 2) { points++; return "Rock vs Scissor | Win";}

  if(user == 2 && computer == 0) { points++; return "Scissor vs Paper | Win";}
  if(user == 2 && computer == 1) { return "Scissor vs Rock | Lose";}
  if(user == 2 && computer == 2) { return "Scissor vs Scissor | Draw";}
}

startBtn.addEventListener('click', CheckGame);