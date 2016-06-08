var number = document.getElementById('number')
function add() {
    var adding1 = parseInt(number.textContent)+1
    number.textContent = adding1
}
function subtract() {
   var subtracting1 = parseInt(number.textContent)-1
   number.textContent = subtracting1
}
function negate() {
    var negating = parseInt(number.textContent)*-1
    number.textContent = negating
}
function reset() {
    number.textContent = 0
}