
/* =================================
   LITTLE LEARNERS - JAVASCRIPT
   ================================= */

// 1. LEARNING DATA: 10 ITEMS PER CATEGORY

const colors = [
  { name: "Red", value: "#ff5252" },
  { name: "Blue", value: "#42a5f5" },
  { name: "Yellow", value: "#ffca28" },
  { name: "Green", value: "#66bb6a" },
  { name: "Orange", value: "#ff9638" },
  { name: "Purple", value: "#ab75dc" },
  { name: "Pink", value: "#f48fb1" },
  { name: "Brown", value: "#a66b45" },
  { name: "Black", value: "#333333" },
  { name: "White", value: "#eeeeee" }
];

const numbers = [
  { name: "One", emoji: "1️⃣", hint: "One sun" },
  { name: "Two", emoji: "2️⃣", hint: "Two eyes" },
  { name: "Three", emoji: "3️⃣", hint: "Three stars" },
  { name: "Four", emoji: "4️⃣", hint: "Four wheels" },
  { name: "Five", emoji: "5️⃣", hint: "Five fingers" },
  { name: "Six", emoji: "6️⃣", hint: "Six ducks" },
  { name: "Seven", emoji: "7️⃣", hint: "Seven days" },
  { name: "Eight", emoji: "8️⃣", hint: "Eight legs on a spider" },
  { name: "Nine", emoji: "9️⃣", hint: "Nine balloons" },
  { name: "Ten", emoji: "🔟", hint: "Ten little toes" }
];

const animals = [
  { name: "Dog", emoji: "🐶", hint: "Woof woof!" },
  { name: "Cat", emoji: "🐱", hint: "Meow!" },
  { name: "Lion", emoji: "🦁", hint: "Roar!" },
  { name: "Elephant", emoji: "🐘", hint: "A big animal" },
  { name: "Monkey", emoji: "🐵", hint: "Loves to climb" },
  { name: "Rabbit", emoji: "🐰", hint: "Hops around" },
  { name: "Cow", emoji: "🐮", hint: "Moo!" },
  { name: "Duck", emoji: "🦆", hint: "Quack quack!" },
  { name: "Frog", emoji: "🐸", hint: "Ribbit!" },
  { name: "Bear", emoji: "🐻", hint: "A furry friend" }
];

const shapes = [
  { name: "Circle", emoji: "🔴", hint: "Round like a ball" },
  { name: "Square", emoji: "🟦", hint: "Four equal sides" },
  { name: "Triangle", emoji: "🔺", hint: "Three sides" },
  { name: "Star", emoji: "⭐", hint: "Twinkles in the sky" },
  { name: "Heart", emoji: "❤️", hint: "A symbol of love" },
  { name: "Diamond", emoji: "🔷", hint: "A diamond shape" },
  { name: "Oval", emoji: "🥚", hint: "Like an egg" },
  { name: "Rectangle", emoji: "▰", hint: "Like a book" },
  { name: "Crescent", emoji: "🌙", hint: "Like a crescent moon" },
  { name: "Hexagon", emoji: "⬡", hint: "Six sides" }
];

// 2. TRACK LEARNING PROGRESS

const visitedCards = new Set();
const totalCards =
  colors.length + numbers.length + animals.length + shapes.length;

function speak(text) {
  // Read a word aloud when browser speech is available.
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance(text);
  message.lang = "en-US";
  message.rate = 0.85;
  message.pitch = 1.2;

  window.speechSynthesis.speak(message);
}

function updateProgress() {
  const count = visitedCards.size;
  const percentage = (count / totalCards) * 100;

  document.getElementById("progress-count").textContent = count;
  document.getElementById("progress-fill").style.width =
    percentage + "%";

  const message = document.getElementById("progress-message");

  if (count === 0) {
    message.textContent = "Your learning adventure starts here!";
  } else if (count < 10) {
    message.textContent = "Great start! Keep exploring! 🌟";
  } else if (count < 25) {
    message.textContent = "Amazing! You are learning so much! 🎉";
  } else if (count < totalCards) {
    message.textContent = "Super learner! Almost all cards explored! 🏆";
  } else {
    message.textContent = "You explored every card! You are a star! 🌈";
  }
}

// 3. CREATE INTERACTIVE LEARNING CARDS

function createCards(items, gridId, category) {
  const grid = document.getElementById(gridId);

  items.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "learning-card";

    const cardId = category + "-" + index;
    card.setAttribute("aria-label", item.name + ". Tap to learn.");

    if (category === "colors") {
      const swatch = document.createElement("span");
      swatch.className = "color-swatch";
      swatch.style.backgroundColor = item.value;

      if (item.name === "White") {
        swatch.style.border = "2px solid #888";
      }

      card.appendChild(swatch);
    } else {
      const emoji = document.createElement("span");
      emoji.className = "card-emoji";
      emoji.textContent = item.emoji;
      card.appendChild(emoji);
    }

    const name = document.createElement("span");
    name.className = "card-name";
    name.textContent = item.name;

    const hint = document.createElement("span");
    hint.className = "card-hint";
    hint.textContent = item.hint || "Tap to learn!";

    card.append(name, hint);

    card.addEventListener("click", () => {
      speak(item.name);

      visitedCards.add(cardId);
      card.classList.add("visited");
      updateProgress();

      hint.textContent = "Great job! ⭐";

      // Restore the original hint after a short time.
      window.setTimeout(() => {
        hint.textContent = item.hint || "Tap to learn!";
      }, 1800);
    });

    grid.appendChild(card);
  });
}

createCards(colors, "color-grid", "colors");
createCards(numbers, "number-grid", "numbers");
createCards(animals, "animal-grid", "animals");
createCards(shapes, "shape-grid", "shapes");

updateProgress();

// 4. WELCOME POPUP

const welcomeDialog = document.getElementById("welcome-dialog");
const startButton = document.getElementById("start-button");

if (welcomeDialog && typeof welcomeDialog.showModal === "function") {
  welcomeDialog.showModal();
}

if (startButton) {
  startButton.addEventListener("click", () => {
    if (welcomeDialog && welcomeDialog.open) {
      welcomeDialog.close();
    }

    speak("Welcome, little learner! Let's learn and play!");
  });
}

// 5. BACK-TO-TOP BUTTON

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// 6. RESET LEARNING PROGRESS

document.getElementById("reset-progress").addEventListener("click", () => {
  visitedCards.clear();

  document.querySelectorAll(".learning-card").forEach(card => {
    card.classList.remove("visited");

    const hint = card.querySelector(".card-hint");
    if (hint) {
      hint.textContent = "Tap to learn!";
    }
  });

  updateProgress();
  speak("Let's start a fresh learning adventure!");
});

// 7. QUIZ DATA

const quizQuestions = [
  {
    question: "Which one is a color?",
    options: ["Red", "Dog", "Circle", "Seven"],
    answer: "Red"
  },
  {
    question: "What number comes after 2?",
    options: ["One", "Three", "Five", "Ten"],
    answer: "Three"
  },
  {
    question: "Which animal says meow?",
    options: ["Cow", "Lion", "Cat", "Duck"],
    answer: "Cat"
  },
  {
    question: "How many sides does a triangle have?",
    options: ["Two", "Three", "Four", "Six"],
    answer: "Three"
  },
  {
    question: "Which animal can hop?",
    options: ["Rabbit", "Elephant", "Fish", "Cow"],
    answer: "Rabbit"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const feedback = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");
const restartButton = document.getElementById("restart-quiz");

function loadQuestion() {
  const question = quizQuestions[currentQuestion];

  answered = false;
  questionNumber.textContent = currentQuestion + 1;
  questionText.textContent = question.question;
  feedback.textContent = "";
  optionsContainer.replaceChildren();

  nextButton.disabled = true;
  nextButton.hidden = false;
  restartButton.hidden = true;

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(option, button);
    });

    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected, selectedButton) {
  if (answered) return;

  answered = true;

  const correctAnswer = quizQuestions[currentQuestion].answer;
  const allOptions = optionsContainer.querySelectorAll("button");

  allOptions.forEach(button => {
    button.disabled = true;

    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (selected === correctAnswer) {
    score++;
    feedback.textContent = "Wonderful! That's correct! 🎉";
    speak("Wonderful! That's correct!");
  } else {
    selectedButton.classList.add("incorrect");
    feedback.textContent = "Good try! The answer is " + correctAnswer + ".";
    speak("Good try! The answer is " + correctAnswer);
  }

  nextButton.disabled = false;
  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "See My Score 🏆"
      : "Next Question ➜";
}

nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  questionNumber.textContent = quizQuestions.length;
  questionText.textContent = "You finished the quiz!";
  optionsContainer.replaceChildren();

  feedback.textContent =
    "You got " + score + " out of " +
    quizQuestions.length + " answers correct! " +
    (score === quizQuestions.length
      ? "Perfect score! 🌟"
      : "Keep practicing. You're doing great! 💛");

  speak(
    "You got " + score + " out of " +
    quizQuestions.length + " answers correct!"
  );

  nextButton.hidden = true;
  restartButton.hidden = false;
}

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
});

loadQuestion();

/*
AI Assistance:
ChatGPT helped explain how addEventListener()
handles click events, how textContent updates
the displayed counter, and how CSS styles a
circular div. AI assistance also helped organize
and debug the JavaScript code.
AI also help me with sound 
*/
