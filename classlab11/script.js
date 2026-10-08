console.log("------Example 1");
//create an object 'car'
const car = {
    //properties
    type: "Fait",
    model: "500",
    color: "white",
    //methods
    carname: function(){
        return this.type + " " + this.model
    }

}
//call the property of object car
console.log(car.color)
console.log(car["type"])
console.log(car.carname())

console.log("------Example 2 :object constructor")
function course(title,instructor,code,session,students){
    this.t = title
    this.i = instructor
    this.c = code
    this.s = session
    this.number_students = students

}
//create an object using the course
let course1 = new course("Computer Application","prof.wu","Tech100","M1",20)
let course2 =new course("JS Programming","prof .Novak", "ET712","C3",18)

//access to the Course value
console.log(course.number_students)
console.log(course1.coursename)
console.log(course2.coursename)

console.log("------Example 3 :method of an object")
const Square = {
    //methods
    area(side){ return side*side},
    perimeter(side){ return 4*side},
}
//access to the method of an object
let s =9
let area1 = Square.area(s)
let Permeter = Square.perimeter(s)
console.log(`The square with side &{s}has an area of ${area1}and a perimeter of ${permeter1}`)

console.log("------Example 4 :method of an object using 'this' statement")
const Hen ={
    //properties
    name: "Helen",
    eggcount : 0,

    //method
    lay_an_egg(){
        this.eggcount++
        return 'EGG'
    }
}

console.log("------LAB Exercise 1")
const mycalculator = {
    //properties
    message:"Square calculator",
    side:2,
    description: "a text message calculate the area of a square and methods",
    //methods
    area_sqare(side){
        return Math.pow(side, 2);
    },
    volume_cube(side){
        return Math.pow(side, 3);
    }
    
    }
    //display results
    console.log("Area of square:" mycalculator.area_sqare());


console.log("\n------ Lab Exercise 2: Exception Handling -----");
function readProperty(obj, prop) {
try {
//if the object is null/undefined, or if the property does not exist on it, an error will be thrown and caught by the catch block.
if(!obj || !(prop in obj)){
return obj[prop];
}
return "Error accessing property";

}catch (error) {
return "Error accessing property";
}
}

// Example 1
const student = {
name: "John",
age: 20
};
console.log(readProperty(student, "name"));
// Example 2
console.log(readProperty(null, "name"));


// AI Assistance:
//In JavaScript, accessing a missing property on a valid object does not throw an error—it simply returns undefined. Because of this, your try block will not trigger the catch block if an object exists but the property is missing.
// ChatGPT helped debug the try-catch
// statement and explain runtime errors:• Passing null or undefined into obj[prop] throws a TypeError in JavaScript. Your try...catch block successfully intercepts this error and returns 
// the fallback string instead of crashing the program.

    
    


    
    
    



