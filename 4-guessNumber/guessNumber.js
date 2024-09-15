let randomNumber = parseInt((Math.random() * 100 + 1));

const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const result = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1; 
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(document.querySelector("#guessField").value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if(guess < 1) {
        alert("Please enter a number between 1 and 100")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMsg(`Game Over, Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`You guessed it right!!!`)
        endGame();
    } else if (guess < randomNumber) {
        displayMsg(`Too low, try again`)
    } else if (guess > randomNumber) {
        displayMsg(`Too high, try again`)
    }
}

function displayGuess(guess) {
    document.querySelector("#guessField").value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    result.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(guess) {
    document.querySelector("#guessField").value = ""
    document.querySelector("#guessField").setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(guess) {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', function(e) {
        randomNumber = parseInt((Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        result.innerHTML = `${11 - numGuess}`
        document.querySelector("#guessField").removeAttribute('disabled')
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true
    })
}