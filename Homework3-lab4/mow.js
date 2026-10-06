console.log("\n------ Class Example 1: Arrays -----")
//Create an array of student objects with their names and scores
const students = [
    {name:"Mamtaz A Mow",score: 95}, 
    {name:"John Doe", score:85}, 
    {name:"Jane Smith", score: 90}]
    
console.log("\n------ Class Example 2: Loop Through Array -----"); 
 //Reusable function with conditional logic

 function evaluateGreat(score){
    if(score >= 90){
        return "A"
    if(score >= 80){
        return "B"
    if(score >= 70){
        return "C"
    if(score >= 60){
        return "D"
        return "F"
    }
    }

        }
    }
 }
 console.log("\n------ Class Example 3: Functions -----"); 
 
 //  Reusable Function using a Loop to Process Array Data
function processStudentResults(studentList) {
  const summary = []

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i]
    const letterGrade = evaluateGreat(student.score)
    const hasPassed = student.score >= 60 // Conditional evaluation

    summary.push({
      name: student.name,
      score: student.score,
      grade: letterGrade,
      status: hasPassed ? "Passed" : "Failed"
    })
  }

  return summary
}
// Array Manipulation & Execution
students.push({ name: "Fiona", score: 88 }); // Add item

const results = processStudentResults(students)
console.log(results)