const urlParams = new URLSearchParams(window.location.search);
const scoreFromPage3 = parseInt(urlParams.get('score'));
const totalQuestions = 8; // Total questions in the quiz

const rewardInfo = document.getElementById("reward-info");

function calculateScorePercentage(score, totalQuestions) {
  return (score / (totalQuestions * 10)) * 100; // Assuming each question carries 10 points
}

function displayReward(score, totalQuestions) {
  const percentage = calculateScorePercentage(score, totalQuestions);

  if (percentage >= 75) {
    rewardInfo.innerText = `Congratulations! You scored ${percentage}%. you won the badge of the Earth Number One Protector "KEEP ON THE GOOD WORK!!"`;
  } else {
    rewardInfo.innerText = `You scored ${percentage}%. Keep practicing for a better reward next time.`;
  }
}

displayReward(scoreFromPage3, totalQuestions);