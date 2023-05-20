const question = document.getElementById('question');
const options = document.querySelectorAll('.opt');
const check = document.getElementById('check');
const next = document.getElementById('next');

let selectedElement = "";

console.log(options)

let rounds = 1;
let quiz_round = "q"+rounds;
let selected = false;
let answer = "";
let roundActive = false;

let quiz = {
    q1 : {
        q : "Whats the full form of html?",
        ans : "1, Hyper Text Markup Language",
        1 : "1, Hyper Text Markup Language",
        2 : "2, Hyper Links and Text Markup Language",
        3 : "3, Home tool Markup Language",
        4 : "4, Happy Transition Markup Language"
    }
    ,
    q2 : {
        q : "Whats the full form of CSS?",
        ans : "2, Cascading Style Sheets",
        1 : "1, Colorful Cascading Sheets",
        2 : "2, Cascading Style Sheets",
        3 : "3, Creative Style Sheets",
        4 : "4, Computer Style Sheets"
    }
    ,
    q3 : {
        q : "Whats the full form of DB?",
        ans : "3, Database",
        1 : "1, Delta base",
        2 : "2, Django Base",
        3 : "3, Database",
        4 : "4, Data based"
    }
    ,
    q4 : {
        q : "Whats the full form of lol?",
        ans : "4, Laughing Out Loud",
        1 : "1, League of Lolipop",
        2 : "2, League of Legends",
        3 : "3, Legend of Lols",
        4 : "4, Laughing Out Loud"
    }
}


question.textContent = quiz[quiz_round].q;
for(let i = 1, j = 0; i <= 4; i++) {
    options[j].textContent = quiz[quiz_round][i];
    j++;
    answer = quiz[quiz_round].ans;
}

options.forEach(opt => {
    opt.addEventListener('click', () => {
        if(!selected) {
        opt.classList.add("selected");
        selectedElement = opt.classList[1];
        selected = true;
        }
    })
});


check.addEventListener('click', () => {
    if (document.querySelector(`.${selectedElement}`).textContent == answer) {
        document.querySelector(`.${selectedElement}`).classList.add('right');
    } else if (selectedElement) {
        document.querySelector(`.${selectedElement}`).classList.add('wrong');

        options.forEach(opt => {
            if(opt.textContent == answer) opt.classList.add('right');
        });
    }
    roundActive = true;
});

next.addEventListener('click', () => {

    if(roundActive) {

        options.forEach(opt => {
            if(opt.textContent == answer) opt.classList.remove('right');
        });

    if(document.querySelector(`.${selectedElement}`).textContent != answer) {
        document.querySelector(`.${selectedElement}`).classList.remove('wrong');
    } else {
        document.querySelector(`.${selectedElement}`).classList.remove('right');
    }

    document.querySelector(`.${selectedElement}`).classList.remove('selected');


    rounds++;
    quiz_round = "q"+rounds;

    question.textContent = quiz[quiz_round].q;
    for(let i = 1, j = 0; i <= 4; i++) {
    options[j].textContent = quiz[quiz_round][i];
    j++;
    answer = quiz[quiz_round].ans;
    }

    roundActive = false;
    selected = false;

    }
     else { 
        return false;
    }
});
