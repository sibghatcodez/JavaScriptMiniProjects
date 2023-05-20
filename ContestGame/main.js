const imp = document.querySelector('.imp');
const reaction = document.getElementById('reaction');
const prize = document.getElementById('prize');

const start = document.querySelector('.start');
const userInput = document.getElementById('userTXT');
const userSubmit = document.getElementById('submit');
const userTime = document.getElementById('time');

const startTest = document.querySelector('.startTest');
const startTestBtn = document.getElementById('startTest');


let result = "";
let timer;

let Rounds = 0;
let timeInSeconds = 0;

const StartTest = () => {

let randomTest = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
let test;

for(let i = 0; i < randomTest.length / 3; i++) {
    test = Math.floor(Math.random() * randomTest.length);
    result += randomTest[test];
}
reaction.textContent = result;

userTime.textContent = "0:00";
timeInSeconds = 0;

timer = setInterval(() => {
  timeInSeconds++;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  userTime.textContent = `${minutes}:${seconds}`;
}, 1000);
}

userSubmit.addEventListener('click', () => {
if(userInput.value != result) {
    userSubmit.style.borderColor = "#fb4f4f";
    userSubmit.style.color = "#fb4f4f";
    userSubmit.style.boxShadow = "10px 10px 20px 1px #fb4f4f9b, -2px -2px 20px 1px #fb4f4f9b";
    userSubmit.classList.add('shake');
    userSubmit.textContent = 'Wrong Input';

    setTimeout(() => {
    userSubmit.style.borderColor = "green";
    userSubmit.style.color = "green";
    userSubmit.style.boxShadow = "10px 10px 20px 1px #00800051, -2px -2px 20px 1px #00800051";
    userSubmit.classList.remove('shake');
    userSubmit.textContent = 'Enter';
    }, 1000)

} else {
result = "";
userInput.value = "";
startTest.style.display = 'flex';
imp.style.display = 'none';
start.style.display = 'none';
Rounds++;
clearInterval(timer);
UpdateTable();
}
});

startTestBtn.addEventListener('click', () => {

startTest.style.display = 'none';
imp.style.display = 'block';
start.style.display = 'flex';
StartTest();

});

function UpdateTable() {
    const tableBody = document.querySelector('tbody');

    const newRow = document.createElement('tr');

    const testNoCell = document.createElement('td');
    testNoCell.textContent = Rounds;
    
    const testTimeTaken = document.createElement('td');
    testTimeTaken.textContent = `${Math.floor(timeInSeconds / 60)}:${timeInSeconds % 60}`;

    newRow.appendChild(testNoCell);
    newRow.appendChild(testTimeTaken);
    tableBody.appendChild(newRow);
}
