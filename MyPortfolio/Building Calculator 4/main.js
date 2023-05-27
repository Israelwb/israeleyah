Total = 0
document.querySelector('#clear').addEventListener('click', clearValue)
document.querySelector('#division').addEventListener('click', displayValueDivide)
document.querySelector('#multi').addEventListener('click', displayValueMult)
document.querySelector('#delete').addEventListener('click', displayValueDel)
document.querySelector('#lion').addEventListener('click', displayValueSeven)
document.querySelector('#tiger').addEventListener('click', displayValueEight)
document.querySelector('#snake').addEventListener('click', displayValueNine)
document.querySelector('#sub').addEventListener('click', displayValueSub)
document.querySelector('#chicken').addEventListener('click', displayValueFour)
document.querySelector('#goat').addEventListener('click', displayValueFive)
document.querySelector('#sheep').addEventListener('click', displayValueSix)
document.querySelector('#add').addEventListener('click', displayValueAdd)
document.querySelector('#book').addEventListener('click', displayValueOne)
document.querySelector('#pencil').addEventListener('click', displayValueTwo)
document.querySelector('#pen').addEventListener('click', displayValueThree)
document.querySelector('#module').addEventListener('click', displayValueMod)
document.querySelector('#zero').addEventListener('click', displayValueZero)
document.querySelector('#dot').addEventListener('click', displayValueDot)
document.querySelector('#equal').addEventListener('click', displayValueEqual)

function clearValue() {
    Total = ' '
    document.querySelector('#display').value = Total
}
function displayValueDivide() {
    Total = '/'
    document.querySelector('#display').value += Total
   
}
function displayValueMult() {
    Total = '*'
    document.querySelector('#display').value += Total
   
}
function displayValueDel() {
    
    document.querySelector('#display').value = document.querySelector('#display').value.slice(0, -1)
   
}
function displayValueSeven() {
    Total = 7
    document.querySelector('#display').value += Total
   
}
function displayValueEight() {
    Total = 8
    document.querySelector('#display').value += Total
}
function displayValueNine() {
    Total = 9
    document.querySelector('#display').value += Total
   
}
function displayValueSub() {
    Total = '-'
    document.querySelector('#display').value += Total
   
}
function displayValueFour() {
    Total = 4
    document.querySelector('#display').value += Total
}
function displayValueFive() {
    Total = 5
    document.querySelector('#display').value += Total
}
function displayValueSix() {
    Total = 6
    document.querySelector('#display').value += Total
}
function displayValueAdd() {
    Total = '+'
    document.querySelector('#display').value += Total
}
function displayValueOne() {
    Total = 1
    document.querySelector('#display').value += Total
}
function displayValueTwo() {
    Total = 2
    document.querySelector('#display').value += Total
}
function displayValueThree() {
    Total = 3
    document.querySelector('#display').value += Total
}
function displayValueMod() {
    Total = '%'
    document.querySelector('#display').value += Total
}
function displayValueZero() {
    Total = 0
    document.querySelector('#display').value += Total
}
function displayValueDot() {
    Total = '.'
    document.querySelector('#display').value += Total
}
function displayValueEqual() {
    
    Total = eval(document.querySelector('#display').value)
    document.querySelector('#display').value = Total
}