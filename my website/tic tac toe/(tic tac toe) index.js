const computerchoicedisplay = document.getElementById('computer-choice')

const playerchoicedisplay = document.getElementById('player-choice')

const resultdisplay = document.getElementById('result')

const possiblechoices = document.querySelectorAll('button')

let playerchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
playerchoice = e.target.id
playerchoicedisplay.innerHTML = playerchoice
generatecomputerchoice()
getresult()
}))

function generatecomputerchoice() {
    let randomnumber = Math.floor(Math.random()  * 3 + 1) // or you can use possiblechoices.length 
   

    if (randomnumber === 1) {
        computerchoice = 'rock'
    }

    if (randomnumber === 2) {
        computerchoice = 'scissors'
    }

    if (randomnumber === 3) {
        computerchoice = 'paper'
    }


    computerchoicedisplay.innerHTML = computerchoice
}

function getresult() {
    if (computerchoice === playerchoice) {
        result = 'its a draw!'
    }

    if (computerchoice ===  'rock'&& playerchoice === "paper") {
        result = 'you win!'
    }

    if (computerchoice ===  'rock'&& playerchoice === "scissors") {
        result = 'you lost!'
    }

    if (computerchoice ===  'paper'&& playerchoice === "scissors") {
        result = 'you win!'
    }

    if (computerchoice ===  'paper'&& playerchoice === "rock") {
        result = 'you lost!'
    }
    if (computerchoice ===  'scissors'&& playerchoice === "rock") {
        result = 'you win!'
    }

    if (computerchoice ===  'scissors'&& playerchoice === "paper") {
        result = 'you lost!'
    }

    resultdisplay.innerHTML = result
}



