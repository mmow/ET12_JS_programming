
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Validate the form when the user clicks Submit.
form.addEventListener("submit", function(event) {

    // Stop the browser from refreshing or submitting the form normally.
    event.preventDefault();

    // Clear previous error and success messages.
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // Get the current input values.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;

    // Validate the full name.
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Regular expression for a basic email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Password must contain at least 5 characters
    // and at least one #, $ or % symbol.
    const passwordPattern = /^(?=.*[#$%]).{5,}$/;

    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Password must be at least 5 characters and contain #, $ or %.";
        isValid = false;
    }

    // Display success only if every field is valid.
    if (isValid) {
        successMessage.textContent =
            "Registration successful! All inputs are valid.";

        form.reset();
    }
});

// AI assistance reflection:
// AI helped me understand event.preventDefault(), regular expressions,
// DOM manipulation, and how to display validation error messages.
// I reviewed the code and tested the validation rules.
