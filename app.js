"use strict";
let display = document.getElementById("display")
let empty = true
let decimals = 0;
let firstNumber, secondNumber, operator;
let clearAll = document.getElementById("clearAll")
clearAll.addEventListener("click", (e)=>{
    display.innerText = "0"
    empty = true
    decimals = 0
    firstNumber = undefined
    secondNumber = undefined
})
let clear = document.getElementById("clear")
clear.addEventListener("click", (e)=>{
    display.innerText = "0"
    empty = true
    decimals = 0
})
let one = document.getElementById("one")
one.addEventListener("click", (e)=>{placeNumber("1")})
let two = document.getElementById("two")
two.addEventListener("click", (e)=>{placeNumber("2")})
let three = document.getElementById("three")
three.addEventListener("click", (e)=>{placeNumber("3")})
let four = document.getElementById("four")
four.addEventListener("click", (e)=>{placeNumber("4")})
let five = document.getElementById("five")
five.addEventListener("click", (e)=>{placeNumber("5")})
let six = document.getElementById("six")
six.addEventListener("click", (e)=>{placeNumber("6")})
let seven = document.getElementById("seven")
seven.addEventListener("click", (e)=>{placeNumber("7")})
let eight = document.getElementById("eight")
eight.addEventListener("click", (e)=>{placeNumber("8")})
let nine = document.getElementById("nine")
nine.addEventListener("click", (e)=>{placeNumber("9")})
let zero = document.getElementById("zero")
zero.addEventListener("click", (e)=>{if(!empty) placeNumber("0")})
let point = document.getElementById("point")
point.addEventListener("click", (e)=>{
    if(empty) placeNumber("0.")
    if(display.innerText.includes(".")) return
    if(!empty) placeNumber(".")
})
let plus = document.getElementById("plus")
plus.addEventListener("click", (e)=>{placeOperator("plus")})
let minus = document.getElementById("minus")
minus.addEventListener("click", (e)=>{placeOperator("minus")})
let multiplication = document.getElementById("multiplication")
multiplication.addEventListener("click", (e)=>{placeOperator("multiplication")})
let divide = document.getElementById("divide")
divide.addEventListener("click", (e)=>{placeOperator("divide")})
let change = document.getElementById("change")
change.addEventListener("click", (e)=>{
    if(empty){
        display.innerText = "-"
        empty = false
    }
    if(display.innerText < 0){display.innerText = display.innerText.substring(1, display.innerText.length+1)}
    else if(display.innerText > 0){display.innerText = `-${display.innerText}`}
    else{
        display.innerText = "-"
        empty = false
    }
})
let equal = document.getElementById("equal")
equal.addEventListener("click", (e)=>{
    if(empty){
        if(operator == "plus") sumar(parseFloat(display.innerText), parseFloat(secondNumber))
        if(operator == "minus") restar(parseFloat(display.innerText), parseFloat(secondNumber))
        if(operator == "multiplication") multiplicar(parseFloat(display.innerText), parseFloat(secondNumber))
        if(operator == "divide") dividir(parseFloat(display.innerText), parseFloat(secondNumber))
        if(display.innerText > 9999999999 || display.innerText < -9999999999){
            display.innerText = (parseFloat(display.innerText)).toExponential(3)
            firstNumber = 0
            return
        }
        if(display.innerText.length > 8 && display.innerText.includes(".")){
            display.innerText = display.innerText.substring(0, display.innerText.indexOf(".")+4)}
        return
    }
    secondNumber = display.innerText;
    if(!empty){
        if(operator == "plus") sumar(parseFloat(firstNumber), parseFloat(secondNumber))
        if(operator == "minus") restar(parseFloat(firstNumber), parseFloat(secondNumber))
        if(operator == "multiplication") multiplicar(parseFloat(firstNumber), parseFloat(secondNumber))
        if(operator == "divide") dividir(parseFloat(firstNumber), parseFloat(secondNumber))
        firstNumber = 0
    }
    empty = true
    decimals = 0
    if(display.innerText.length > 8 && display.innerText.includes(".")){
        display.innerText = display.innerText.substring(0, display.innerText.indexOf(".")+4)}
})
function placeNumber(number){
    if(empty){
        display.innerText = number
        empty = false
        return
    }
    if(display.innerText.length >= 8 || decimals > 2) return
    if(display.innerText.includes(".")) decimals++
    if(!empty){display.innerText = display.innerText.concat(number)}
}
function placeOperator(sign){
    firstNumber = display.innerText
    empty = true
    decimals = 0
    operator = sign
}
function sumar(a,b){display.innerText = a+b}
function restar(a,b){display.innerText = a-b}
function multiplicar(a,b){display.innerText = a*b}
function dividir(a,b){display.innerText = a/b}