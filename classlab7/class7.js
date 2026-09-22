console.log("Mamtaz A Mow")
console.log("\nExamle 1:arry")
let mixedArray = ['cars',10,true,'apples',-3.5]
console.log(`The 4th value is ${mixedArray[3]}`)
console.log(`original array = ${mixedArray}`)

//remove the first value (left-most) in array mixedarray

mixedArray.shift()
console.log(`Array after shift method = ${mixedArray}`)


//add a value to the -most in array mixedarray
mixedArray.unshift("NY,280")
console.log(`Array after unshift method = ${mixedArray}`)

//add values to the right-most in array mixedarray
mixedArray.push(-360,'QCC')
console.log(`Array after push method = ${mixedArray}`)
//METHODS THAT RETURN A VALUE
//find the index of 'cherries'

indexcherries = mixedArray.indexOf("cherries")
console.log(`The index of cherries is ${indexcherries}`)

//it returns -1 if the value odesn't exist

indexqcc = mixedArray.indexOf("QCC")
console.log(`what is the index of QCC ? ${indexqcc}`)

console.log("\n--------example 3:if statement")
//check for one condition
//it will run code warp in between the curly braces if the statement is true
//otherwise ,if thestatement will skip the code in between the curly braces

let goodmood = true
let gotsleep = true
/*
if (goodsleep == true && goodmood == true){
    console.log("Today is a good day")
}
    */
   if(goodmood && gotsleep){
    console.log("Today is a good day")
   }

console.log('Good bye!')
console.log("\n--------example 4:if else statement")

//has two branches

let n1 =4
let n2 = 10

if (n1==n2){
    console.log("Good Bye!")

}
//has two branches
if (n1==n2){
    console.log("the number are equal")

}
else{
    console.log("the number are not equal")
}
console.log("\n--------example 5:if else if statement isNAN function")
let userinput = prompt("Enter a number")
let checkinput = isNaN(userinput)
if (checkinput){
    console.log(`${userinput}is a string`)
}
else{
    console.log(`${userinput}is a number`)
}

console.log("\n--------example 6:multiway conditional statement")
//check if the number is zero, negative or positive
let inputnumber = parseInt(userinput)
if (inputnumber === 0){
    console.log("The number is zero")
}
else if (inputnumber < 0){
    console.log("The number is negative")
}
else{
    console.log("The number is not a number")
}
// And operator && a true if all statements are true
//check if username is 6+ characters and has no spaces
let username = prompt("Enter a username")
if (username.length >= 6 && username.indexOf(" ") === -1){
console.log("Valid username")
}
else{
    console.log("Invalid username")
}
// Or operator || returns a true if any of the statements are true
//rate a book if is excellent ,goog, or average, invalid

let rate = prompt("How do you like the book? (\n3 excellent, 2 for good, 1 for average)")
if (rate == 3 || rate == 2 ){
    console.log("Thank you for your feedback")
}
else if(rate == 1 || rate == 0){
    console.log("we are sorry that you find  The b ook boring")
    }
    else{
        console.log("Invalid username")
    }
    


