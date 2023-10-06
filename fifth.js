const quizDataPage2 = [
    {
      question: "What is the capital of Spain?",
      answers: {
        a: "Madrid",
        b: "Berlin",
        c: "Paris"
      },
      correctAnswer: "a"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Green Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Neptune"
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
        window.location.href = "sixth.html?score=" + scorePage2;
      }
    }
    else alert("Please select an answer.");
  });
  
  showQuestionPage2();