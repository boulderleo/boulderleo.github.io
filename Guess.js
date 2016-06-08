var guess = document.getElementById('guess')
var randomN = random(1, 100)
var message = document.getElementById('message')

var numberGleft = 6
var guessesLeft = document.getElementById('guesses')
var hasWon = false

function random(low, high) {
    return Math.floor(Math.random()*(high-low+1))+low
}

function checkNumber() {
       
    
       var userG = parseInt(guess.value) 
       var isN = userG == randomN
       var greaterN = userG > randomN
       var lessN = userG < randomN
       
       if (isN) {
           message.textContent = "Nice job! Hope you DIDN'T have fun!"
          
       }
      
       if (greaterN) {
           message.textContent = 'BWAHAHAHAHA! Guess is high.'
       }
       
       if (lessN) {
           message.textContent = 'BWAHAHAHAHA! Guess is low.'
       }   
        if (numberGleft > 0 && hasWon == false) 
            numberGleft = numberGleft - 1
            guesses.textContent = numberGleft

}

function replay() {
    location.reload()
}


