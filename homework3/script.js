
/*
Name: Your Name
Course: JavaScript Programming
Lab Experiment: DOM Events and AI Assistance
Date: October 17, 2026
*/

console.log("\n------ Lab Exercise: Click Counter Circle ------");

// Collect the circle and the reset button
const circle = document.getElementById("circle");
const resetBtn = document.getElementById("resetBtn");

// Initialize the counter
let counter = 0;

// Increment counter when circle is clicked
circle.addEventListener("click", function() {
    counter++;
    circle.textContent = counter;
});

// Reset counter when Reset button is clicked
resetBtn.addEventListener("click", function() {
    counter = 0;
    circle.textContent = counter;
});

/*
AI Assistance:
ChatGPT helped explain how addEventListener()
handles click events, how textContent updates
the displayed counter, and how CSS styles a
circular div. AI assistance also helped organize
and debug the JavaScript code.
*/
