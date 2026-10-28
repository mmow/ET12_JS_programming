
/*
Name: Mamtaz Mow
Course: JavaScript Programming
Lab Experiment: DOM Events and AI Assistance
Date: October 17, 2026
*/

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

// Function to get input values and validate them
function calculate(operation) {
    if (num1.value.trim() === "" || num2.value.trim() === "") {
        result.textContent = "Error: Please enter both numbers.";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);
    let answer;

    // Perform the selected operation
    switch (operation) {
        case "add":
            answer = a + b;
            break;

        case "subtract":
            answer = a - b;
            break;

        case "multiply":
            answer = a * b;
            break;

        case "divide":
            if (b === 0) {
                result.textContent = "Error: Cannot divide by zero!";
                return;
            }
            answer = a / b;
            break;
    }

    result.textContent = "Result: " + answer;
}

// Click event listeners
addBtn.addEventListener("click", function () {
    calculate("add");
});

subtractBtn.addEventListener("click", function () {
    calculate("subtract");
});

multiplyBtn.addEventListener("click", function () {
    calculate("multiply");
});

divideBtn.addEventListener("click", function () {
    calculate("divide");
});

// Mouseover and mouseout events
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function (button) {
    const originalColor = getComputedStyle(button).backgroundColor;

    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#333";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = originalColor;
    });
});


/*
AI Assistance:
ChatGPT helped explain how addEventListener()
handles click events, how textContent updates
the displayed counter, and how CSS styles a
circular div. AI assistance also helped organize
and debug the JavaScript code.
*/
