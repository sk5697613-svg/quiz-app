const questions = [
  {
    question: "Which Harappan site is famous for its dockyard?",
    answers: [
      { text: "Harappa", correct: false },
      { text: "Lothal", correct: true },
      { text: "Kalibangan", correct: false },
      { text: "Ropar", correct: false },
    ],
  },
  {
    question: "Who was founded the Maurya Empire?",
    answers: [
      { text: "Ashoka", correct: false },
      { text: "Chandragupta Maurya", correct: true },
      { text: "Bindusar", correct: false },
      { text: "Harshavardhana", correct: false },
    ],
  },
  {
    question: "Who was the 24th Tirthankara of Jainism?",
    answers: [
      { text: "Rishabhanatha", correct: false },
      { text: "Parshvanatha", correct: false },
      { text: "Mahavira", correct: true },
      { text: "Gautam Buddha", correct: false },
    ],
  },
  {
    question: "Who built the Qutub Minar in Delhi?",
    answers: [
      { text: "Qutb ud-Din Aibak", correct: true },
      { text: "Babar", correct: false },
      { text: "Mahavira", correct: false },
      { text: "Humayun", correct: false },
    ],
  },
  {
    question: "Who founded the Mughal Empire in India?",
    answers: [
      { text: "Qutub ud-Din Aibak", correct: false },
      { text: "Babar", correct: true },
      { text: "Mahavira", correct: false },
      { text: "Humayun", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which planet is the largest planet in our solar system?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean on the Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question:
      "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
    answers: [
      { text: "Tropic of Cancer", correct: false },
      { text: "Equator", correct: true },
      { text: "Prime Meridian", correct: false },
      { text: "Tropic of Capricorn", correct: false },
    ],
  },
  {
    question: "Which is the highest mountain peak in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kanchenjunga", correct: false },
    ],
  },
  {
    question: "When did the Constitution of India come into effect?",
    answers: [
      { text: "15 August 1947", correct: false },
      { text: "26 November 1949", correct: false },
      { text: "26 January 1950", correct: true },
      { text: "02 October 1950", correct: false },
    ],
  },
  {
    question: "Who designed the Indian national flag?",
    answers: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "Pingali Venkayya", correct: true },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "B.R. Ambedkar", correct: false },
    ],
  },
  {
    question: "Who wrote India's national anthem, 'Jana Gana Mana'?",
    answers: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Sarojini Naidu", correct: false },
    ],
  },
  {
    question: "Which is the minimum age to become a member of the Lok Sabha?",
    answers: [
      { text: "18", correct: false },
      { text: "21", correct: false },
      { text: "25", correct: true },
      { text: "30", correct: false },
    ],
  },
  {
    question: "How many Union territories are there in India?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which house of Parliament is called the Council of States?",
    answers: [
      { text: "Lok Sabha", correct: false },
      { text: "Rajya Sabha", correct: true },
      { text: "Legislative Assembly", correct: false },
      { text: "Gram Sabha", correct: false },
    ],
  },
  {
    question: "Who is the constitutional head of the Indian Union States?",
    answers: [
      { text: "Prime Minister", correct: false },
      { text: "President", correct: true },
      { text: "Chief Justice of India", correct: false },
      { text: "Home Minister", correct: false },
    ],
  },
  {
    question: "Which institution issues most currency notes in India?",
    answers: [
      { text: "State Bank of India", correct: false },
      { text: "Reserve Bank of India", correct: true },
      { text: "Ministry of Finance", correct: false },
      { text: "NITI Aayog", correct: false },
    ],
  },
  {
    question: "What does GDP stand for?",
    answers: [
      { text: "Gross Domestic Product", correct: true },
      { text: "General Development Plan", correct: false },
      { text: "Government Deposit Policy", correct: false },
      { text: "Gross Development Price", correct: false },
    ],
  },
  {
    question: "Which sector includes farming and fishing?",
    answers: [
      { text: "Primary Sector", correct: true },
      { text: "Secondary Sector", correct: false },
      { text: "Tertiary Sector", correct: false },
      { text: "Banking Sector", correct: false },
    ],
  },
  {
    question: "What is the SI unit of force?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: true },
      { text: "Watt", correct: false },
      { text: "Pascal", correct: false },
    ],
  },
  {
    question: "What is the SI unit of power?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: false },
      { text: "Watt", correct: true },
      { text: "Pascal", correct: false },
    ],
  },
  {
    question: "Which instrument measures temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Ammeter", correct: false },
      { text: "Hygrometer", correct: false },
    ],
  },
  {
    question: "Which instrument measures electric current?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: false },
      { text: "Ammeter", correct: true },
      { text: "Hygrometer", correct: false },
    ],
  },
  {
    question: "What is the SI unit of electrical resistance?",
    answers: [
      { text: "volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Ohm", correct: true },
      { text: "Coulomb", correct: false },
    ],
  },
  {
    question: "Sound cannot travel through which of the following?",
    answers: [
      { text: "Air", correct: false },
      { text: "Water", correct: false },
      { text: "Steel", correct: false },
      { text: "Vacuum", correct: true },
    ],
  },
  {
    question: "What is the pH value of a neutral solution at 25deg C?",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "7", correct: true },
      { text: "14", correct: false },
    ],
  },
  {
    question: "Which gas is commonly used by plants during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at ordinary room temperature?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Mercury", correct: true },
      { text: "Copper", correct: false },
      { text: "Aluminium", correct: false },
    ],
  },
  {
    question: "Which part of a plant mainly absorbs water from the soil?",
    answers: [
      { text: "Flower", correct: false },
      { text: "Leaf", correct: false },
      { text: "Root", correct: true },
      { text: "Fruit", correct: false },
    ],
  },
  {
    question: "Which pigment helps plants absorb sunlight for photosynthesis?",
    answers: [
      { text: "Haemoglobin", correct: false },
      { text: "Chlorophyll", correct: true },
      { text: "Melanin", correct: false },
      { text: "Insulin", correct: false },
    ],
  },
  {
    question: "Which blood cells help the body fight infections?",
    answers: [
      { text: "White blood cells", correct: true },
      { text: "Red blood cells", correct: false },
      { text: "Platelets", correct: false },
      { text: "Plasma Only", correct: false },
    ],
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Kidney", correct: false },
      { text: "Heart", correct: true },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "Which is the national animal of India?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Bengal Tiger", correct: true },
      { text: "Cow", correct: false },
      { text: "Wolf", correct: false },
    ],
  },
  {
    question: "Who is the first Indian woman to go into space?",
    answers: [
      { text: "Sunita Williams", correct: false },
      { text: "Kalpana Chawla", correct: true },
      { text: "Bachendri Pal", correct: false },
      { text: "P.T. Usha", correct: false },
    ],
  },
  {
    question: "Where are the headquarters of the United Nations located?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: false },
      { text: "New York City", correct: true },
      { text: "Geneva", correct: false },
    ],
  },
  {
    question: "Who is known as the Father of the Computer?",
    answers: [
      { text: "Alan Turing", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "John  Von Neumann", correct: false },
    ],
  },
  {
    question: "What is the full form of CPU?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Processing Utility", correct: false },
      { text: "Central Program Unit", correct: false },
      { text: "Control Processing User", correct: false },
    ],
  },
  {
    question: "Which of the following is an input device?",
    answers: [
      { text: "Monitor", correct: false },
      { text: "Printer", correct: false },
      { text: "Keyboard", correct: true },
      { text: "Speaker", correct: false },
    ],
  },
  {
    question: "Which keyboard shortcut is commonly used to copy selected text?",
    answers: [
      { text: "Ctrl + X", correct: false },
      { text: "Ctrl + C", correct: true },
      { text: "Ctrl + V", correct: false },
      { text: "Ctrl + Z", correct: false },
    ],
  },
  {
    question: "Which keyboard shortcut is commonly used to paste copied text?",
    answers: [
      { text: "Ctrl + X", correct: false },
      { text: "Ctrl + C", correct: false },
      { text: "Ctrl + V", correct: true },
      { text: "Ctrl + Z", correct: false },
    ],
  },
  {
    question: "Which of the following is an operating system?",
    answers: [
      { text: "Microsoft Word", correct: false },
      { text: "Windows", correct: true },
      { text: "Google Chrome", correct: false },
      { text: "PowerPoint", correct: false },
    ],
  },
  {
    question: "How many bits are there in one byte?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: true },
      { text: "16", correct: false },
      { text: "32", correct: false },
    ],
  },
  {
    question: "What is a group of four bits called?",
    answers: [
      { text: "Byte", correct: false },
      { text: "Nibble", correct: true },
      { text: "Kilobyte", correct: false },
      { text: "Word", correct: false },
    ],
  },
  /* {
    question:
      "Which part of a computer performs arithmetic and logical operations?",
    answers: [
      { text: "ALU", correct: true },
      { text: "Mouse", correct: false },
      { text: "Monitor", correct: false },
      { text: "Printer", correct: false },
    ],
  },
  {
    question:
      "Which type of memory loses its contents when the power is switched off?",
    answers: [
      { text: "RAM", correct: true },
      { text: "ROM", correct: false },
      { text: "Hard Disk", correct: false },
      { text: "DVD", correct: false },
    ],
  }, */
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
