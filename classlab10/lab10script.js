console.log("\n----example 1: Loacal and Global Variable")
//global variable
let msg ='This is a outside message'

function displaymsg() {
    //local variable
    
    let msg ='Hello, World!'
}
//calling function
displaymsg()

console.log(msg)

console.log("\n----example 2: constant variable")
//Constance veriables are variables that can't be change leter
const GRAVITY = 9.8
console.log(GRAVITY)
//GRVITY =9.9---> the console will show an error
console.log("\n----example 3: funcation in a variable")
const sum =function(num1, num2){
    return num1 + num2
}
//calling the function
let s = sum(2,7)
console.log(s)
console.log("\n----example 4: arrow function")
let greet =(n)=>{
    console.log('Welcome .to. function ${n}')
}
//calling the arrow function
greet("Peter Pan")

console.log("\n----example 5: functions calling functions")

//function taht randomly generates a number 1 and 6
function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
}

function calltwice(){
    let dice1 = rolldice()
    let dice2 = rolldice()
    console.log(`${dice1} ${dice2}`)
}
//calling the function
calltwice()
calltwice()
calltwice()
console.log("\n----example 6: functions returns functions")
//function that checks if a sum is greater than min number  is greater than the min number and less 
function makebetweenfunctions(min,max){
    return function(num){
        return num>=min && num<=max
    }
}

let child = makebetweenfunctions(3,7)
console.log(child(10)) // false

console.log("\n----example 7: functions with  default values")
//functin to roll a dice n times .n is pass to the function if n is not passed than n=1
function rollingdice(n){
    for(let i =1; i<=n; i++){
        console.log(rolldice())
    }
}
console.log("\n----example 8: functions with  default values")

//spread syntax---is used to iterate elements from the list
nums = [3,9,-6,10,1,0]
let maxnum =Math.max(...nums)
console.log(maxnum)




