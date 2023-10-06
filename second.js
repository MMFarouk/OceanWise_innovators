const quizDataPage2 = [
  {
    question: "What percentage of the Earth's surface is covered by the ocean?",
    answers: {
      a: "30%",
      b: "70%",
      c: "50%"
    },
    correctAnswer: "b"
  },
  {
    question: "Name three essential services provided by the ocean?",
    answers: {
      a: "Freshwater supply, wind energy, and transportation",
      b: "Carbon sequestration, climate regulation, and oxygen production ",
      c: "Urban development, agriculture, and wildlife conservation"
    },
    correctAnswer: "b"
  },
  {
    question: "Which ocean is the largest in terms of both area and volume?",
    answers: {
      a: "Atlantic Ocean",
      b: "Pacific Ocean ",
      c: "ndian Ocean"
    },
    correctAnswer: "b"
  },
  {
    question: "Give an example of a marine animal?",
    answers: {
      a: "Tiger",
      b: "Dolphin",
      c: "Bear"
    },
    correctAnswer: "b"
  },
  {
    question: "Describe one ocean ecosystem and its significance?",
    answers: {
      a: "Coral reefs provide habitat for various marine species and protect coastlines from erosion",
      b: "Rainforests are found in the ocean and are home to unique terrestrial species",
      c: "Mountain ranges in the ocean are known for their agricultural value."
    },
    correctAnswer: "a"
  },
  {
    question: "What are phytoplankton, and where are they found in the ocean?",
    answers: {
      a: "Deep-sea corals, found in coastal areas",
      b: " Flying birds, found near the ocean surface",
      c: "Microscopic, plant-like organisms found throughout the ocean "
    },
    correctAnswer: "c"
  },
  {
    question: "How do phytoplankton contribute to marine food chains?",
    answers: {
      a: "Phytoplankton prey on larger marine animals.",
      b: "Phytoplankton compete with zooplankton for food resources",
      c: "Phytoplankton are a primary source of food for zooplankton and higher trophic levels"
    },
    correctAnswer: "c"
  },
  {
    question: "What are the factors that influence the growth of phytoplankton in the ocean?",
    answers: {
      a: "Wind speed and humidity",
      b: "Nutrient availability, light, and water turbulence",
      c: "Ocean depth and temperature"
    },
    correctAnswer: "b"
  },
  {
    question: "Compare and contrast coastal and open ocean environments in terms of phytoplankton growth",
    answers: {
      a: "Coastal environments have less phytoplankton due to pollution",
      b: "Both coastal and open ocean environments have similar phytoplankton growth.",
      c: "Coastal environments tend to have higher phytoplankton growth due to nutrient runoff."
    },
    correctAnswer: "c"
  },
  {
    question: "how does phytoplankton help in oxygen production?",
    answers: {
      a: "Phytoplankton produce oxygen through respiration.",
      b: "phytoplankton generate oxygen as a waste product.",
      c: "Phytoplankton release oxygen during photosynthesis"
    },
    correctAnswer: "c"
  }
];

const urlParams = new URLSearchParams(window.location.search);
const scoreFromPage1 = parseInt(urlParams.get('score'));
let scorePage2 = scoreFromPage1 || 0; // Use the score from the query string, or start from 0
let currentQuestionPage2 = 0;

const questionElementPage2 = document.getElementById("question");
const answersElementPage2 = document.getElementById("answers");
const nextButtonPage2 = document.getElementById("next");
const scoreElementPage2 = document.getElementById("score");

function showQuestionPage2() {
  const questionData = quizDataPage2[currentQuestionPage2];
  questionElementPage2.textContent = `${currentQuestionPage2 + 1}. ${questionData.question}`;

  let answersHTML = "";
  for (const option in questionData.answers) {
    answersHTML += `
        <label>
          <input type="radio" name="question" value="${option}">
          ${option}: ${questionData.answers[option]}
        </label><br>
      `;
  }
  answersElementPage2.innerHTML = answersHTML;

  scoreElementPage2.textContent = scorePage2; // Display the score
}

nextButtonPage2.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const questionData = quizDataPage2[currentQuestionPage2];
    if (userAnswer === questionData.correctAnswer) {
      scorePage2 += 10;
    }

    currentQuestionPage2++;
    if (currentQuestionPage2 < quizDataPage2.length) {
      showQuestionPage2();
    } else {
      // Redirect to the third quiz page
      window.location.href = "completion1.html?score=" + scorePage2;
    }
  }
  else alert("Please select an answer.");
});

showQuestionPage2();