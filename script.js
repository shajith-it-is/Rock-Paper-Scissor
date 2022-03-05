const bodyElement = document.querySelector('body');

const result = bodyElement.querySelector('#result');
const comp = bodyElement.querySelector('#comp');
const user = bodyElement.querySelector('#user');

const RPC = {1: 'rock',2: 'paper',3: 'scissor'};

let userChoice;
let compChoice;

buttonGroup = document.querySelectorAll('button');

buttonGroup.forEach(choices => {
    choices.addEventListener('click',(ele)=>{
        result.innerHTML = null;
        userChoice = ele.target.id;
        writingUserChoice(userChoice);
        writingCompChoice();
        checkResult();
    });
});

function writingUserChoice(id) {
    user.innerHTML = RPC[id];
}

function writingCompChoice() {
    compChoice = Math.floor(Math.random() * (3) + 1);
    comp.innerHTML = RPC[compChoice];
}

function checkResult() {
    if(userChoice == compChoice) {
        result.innerHTML = "Draw";
    }
    else if((userChoice ==1 && compChoice == 3) || (userChoice == 2 && compChoice == 1) || (userChoice == 3 && compChoice == 2)) {
        result.innerHTML = "User wins";
    }
    else {
        result.innerHTML = "Comp wins";
    }
}