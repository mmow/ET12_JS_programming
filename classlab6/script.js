let hourNow =15;

let greeting;

if(hourNow>24){greeting = "well come to the next day"}
if(hourNow>18){greeting = "Good morning"}
else if(hourNow>12){(greeting = "good afternoon")}
else if(hourNow>0){greeting ="good morning"}
else{greeting ="wellcome"}
document.write('<h2 class  = "greet">' +greeting+ '</h2>')

console.log("Mamtaz A Mow")
console.log(greeting)
console.log("example 1 : conversion between data types")
let num1 = prompt("Enter number 1")
num1 = parseInt ("num 1")
let num2 = parseInt(prompt("Enter number 2"))
let sum = num1 + num2

console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")

let firstname = prompt("Enter First name:")
let age = parseInt(prompt("Enter age:"))
let language = prompt("Enter language:")
let hobby = prompt("Enter yours hoppy: ")
console.log(`My name is ${firstname}.I am ${age} years old and my faviert  progring language is ${language} and my favorit hobby is ${hobby}`)