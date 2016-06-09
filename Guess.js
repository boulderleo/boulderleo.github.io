var guess = document.getElementById('guess')
var message = document.getElementById('message')
var again = document.getElementById('again')
var guessesL = document.getElementById('guessesL')

var randomN = random(1, 100)
var numberGleft = 6
var hasWon = false

function random(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low
}

function checkNumber() {
    if (numberGleft > 0 && hasWon == false) {
        numberGleft = numberGleft - 1
        guessesL.textContent = numberGleft
    }

    var userG = parseInt(guess.value)
    var isN = userG == randomN
    var greaterN = userG > randomN
    var lessN = userG < randomN

    if (isN) {
        message.textContent = "Nice job! Hope you DIDN'T have fun!"
        hasWon = true
        again.removeAttribute('disabled')
    }

    if (greaterN) {
        message.textContent = 'BWAHAHAHAHA! Guess is high.'
    }

    if (lessN) {
        message.textContent = 'BWAHAHAHAHA! Guess is low.'
    }

    if (numberGleft == 0 && hasWon == false) {
        again.removeAttribute('disabled')
    }
}

function replay() {
    location.reload()
}


