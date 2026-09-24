console.log("-------example 1:for loops")
//for loop to print numbers from 1 to 4 inclusive
for(let n =0;n <=4; n++){
    console.log('the current counter is ${n}')
}

console.log("-------example 2:while loops")
//for loop to print even numbers between initial value up to 100, exclusive
// the initial value is collected from the  dialog box using prompt()

let initial = parseInt(prompt("Enter a number less than 90: "))
for(initial; initial < 100; initial++){
    if(initial % 2 === 0){
        console.log('${initial} ')

    }
    
}
console.log("-------example for loops for decreasing counter")
//for loop to print from 9 to 1 inclusive, 9 8 7 6 5 4 3 2 1
for(let m =9; m >= 1; m-=3){
     console.log('${m} ')

}

console.log("-------example 4:loops for in an array")
let cars =[ 'Mazda','Tesla','Dodge','Bmw','Porshe']   
for(let n of cars){
    //check and print car's name with  5 characters
    if(n.length === 5){
        console.log(n)
    
    }
}
console.log("-------example 5:while loops for in a counter")
//while loop to print numbers from 0 to 4 0 1 2 3 4

let i = 0
while(i <=4){
    console.log(i)
    i++ //updated of i =incres i by 1
}
console.log("-------example 6: while loops to guess a number")
// the value of a constant variable CAN'T be change

const SECRET = 8
//collect the user number

let usernumber = parseInt(prompt("Enter a number between 1 and 10: "))
//use the while loop to recalled the user number if the collected number is not equal to the secret number
while(SECRET !== usernumber){
    usernumber = parseInt(prompt("Wrong guess!Enter another number: "))

}
console.log('Great the secret number is ${SECRET}')

//break statement is used to exit the loop when a certain condition is met
//this examlpe validate if the input number is between 1 and 9
while(true){
    let number = parseInt(prompt("Enter a number between 1 - 9: "))
    if(number >= 1 && number <= 9){
        break
    }

}

console.log("-------example 8: for loops for in a counter statement")
//skip numbers that are multipled of 3 between 0 and 10
for(let n = 0; n <= 10; n++){
    if(n%3 === 0){
        continue
    }
    console.log(n)
}