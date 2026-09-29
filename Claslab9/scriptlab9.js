console.log("Mamtaz A Mow");
console.log("\n---example 1: intro to function");

//define a function that print from 3 to 1
function printcount() {
for(let num=3;num>=1; num--) {
    console.log(num);
}
}
console.log("\n----example 2:  function with prameters");
//function that prints a name .the name is passed as a parameter
function greeting(name){
    conson.log('Good afternoon ${name.toUpperCase()}')
}
console.log("\n----example 3:  function with parameters");
//function that prints a message that start with number 1 all the way up to the stopnumber
// the stopnumber and the message are passed to the function
function greetcount(msg, stopNumber) {
    for(let n =1; n<=stopNumber; n++) {
        console.log(`${msg} ${n}`);
    }

}
//function snake Eyes with number
console.log("\n----example 4:  function with parameters");
function snakeEyes(n1,n2) {
    if(n1===1 && n2===1) {
        console.log("Snake eyes!");
    }
    else {
        console.log("No snake eyes.");
    }
}
console.log("\n----example 5:  function that returna value")
//function that calculates the area square and returns the calculated area
function areaSquare(side) {
    console.log("Calculating area of square with side, side")
    return side * side
    console.log("The area is  ",side * side)


}
console.log("\n----example 6:  function that returna  Boolean value")
//function that "true" if the temperater is greater than 75
// otherowise, it returns "false"
//the function returns "true" if the temperature is greater than 75
// otherwise, it returns "false"

function checkTemperature(t) {
    if(t>75)
        return true;
    else
        return false;

}
//built-in function
console.log("\n----example 7:  JS built-in  math function")
const PI = Math.PI
console.log(PI)
console.log('Round PI =${Math.round(PI)}')
console.log('Ceil PI =${Math.ceil(PI)}')
console.log('Floor PI =${Math.floor(PI)}')
console.log('Power 2^5 =${Math.pow(2,5)}')
console.log('square root of 81 =${Math.sqrt(81)}')
console.log('random number =${Math.random()}')
console.log('Return a random number between 1and 9: ${Math.random()*9}')

console.log("\n----example 8:  JS built-in  math function")
// this is the function will random pick a color from an array

let colors = ['red', 'blue', 'green', 'yellow' ,'olive']
function pickColor(lastindex) {
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index

}
let index = pickColor(colors.length);
let pickcolor = colors[index]
console.log(`Randomly picked color: ${pickcolor}`)











