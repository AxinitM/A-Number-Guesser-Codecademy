// Keep track of the current scores for both players
let humanScore = 0;
let computerScore = 0;

// Keep track of the current round number
let currentRoundNumber = 1;


// 1. Generate a random target number between 0 and 9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// 2. Helper function to calculate the distance between two numbers
function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

// 3. Compare the human and computer guesses
function compareGuesses(userGuess, computerGuess, target) {
  // Check if the human guess is within the valid range (0–9)
  if (userGuess < 0 || userGuess > 9) {
    alert('Your number is out of range! Please choose a number between 0 and 9.');
    return; // Stop the function so the round doesn’t count
  }

  const userDiff = getAbsoluteDistance(userGuess, target);
  const computerDiff = getAbsoluteDistance(computerGuess, target);

  // Human wins if the difference is smaller or equal
  return userDiff <= computerDiff;
}

// 4. Update the score of the winner
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// 5. Move to the next round
function advanceRound() {
  currentRoundNumber++;
}
