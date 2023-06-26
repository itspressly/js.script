const computerchoicedisplay = document.getElementById('computer-choice')

const playerchoicedisplay = document.getElementById('player-choice')

const resultdisplay = document.getElementById('result')

const possiblechoices = document.querySelectorAll('button')

let playerchoice
let computerchoice

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
playerchoice = e.target.id
playerchoicedisplay.innerHTML = playerchoice
generatecomputerchoice()
}))

function generatecomputerchoice() {
    const randomnumber = math.floor(math.random()  * 3) // or you can use possiblechoices.length 
   

    if (randomnumber === 1) {
        computerchoice = 'rock'
    }

    if (randomnumber === 2) {
        computerchoice = 'scissors'
    }

    if (randomnumber === 3) {
        computerchoice = 'paper'
    }
}

computerchoicedisplay.innerHTML = computerchoice