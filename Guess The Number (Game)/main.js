const box = document.querySelector('.box');
const hint = document.querySelector('.game-hint');
const userInput = document.getElementById('userNumber');
const gameBtn = document.getElementById('numCheck');
const tryAgain = document.getElementById('tryAgain');
const chances = document.querySelector('.chances');

let guessNum = Math.floor(Math.random() * 10);
let chancesLeft = 3;
tryAgain.style.display = 'none';

console.log(guessNum);

function PlayGame() {
    tryAgain.style.display = 'none';
    gameBtn.style.display = 'inline-block';
    userInput.style.display = 'inline-block';

    let user = Number(userInput.value);
    if (user !== guessNum) {
        chancesLeft--;
        chances.textContent = `You have ${chancesLeft} chances left`
        if(chancesLeft == 0) GameOverLost();
        if (user > guessNum) {
            hint.style.display = 'block';
            hint.textContent = "HINT: Entered number is high!";
        }
        if (user < guessNum) {
            hint.style.display = 'block';
            hint.textContent = "HINT: Entered number is low...";
        }
    } 
    else {
        GameOverWon();
    }
}

function GameOverLost() {
    chancesLeft = 3;
    chances.textContent = "Game Over! You lost (:";
    tryAgain.style.display = 'block';
    gameBtn.style.display = 'none';
    userInput.style.display = 'none';
    hint.style.display = 'none';
    hint.textContent = '';
}

function GameOverWon() {
    guessNum = Math.floor(Math.random() * 10);
    chancesLeft = 3;
    chances.textContent = "Game Over! You Won :)";
    tryAgain.style.display = 'block';
    gameBtn.style.display = 'none';
    userInput.style.display = 'none';
    hint.style.display = 'none';
    userInput.value = '1';
    hint.textContent = '';
}
function RestartGame() {
    chances.textContent = `You have ${chancesLeft} chances left`;
    tryAgain.style.display = 'none';
    gameBtn.style.display = 'inline-block';
    userInput.style.display = 'inline-block';
}


gameBtn.addEventListener('click', PlayGame);
tryAgain.addEventListener('click', RestartGame);
