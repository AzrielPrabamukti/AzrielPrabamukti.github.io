const secretNumber = Math.floor(Math.random() * 9) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const resultElement = document.getElementById('result');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 9) {
    resultElement.textContent = 'Please enter a valid number between 1 and 9.';
  } else {
    attempts++;
    if(guess === secretNumber) {
    if(attempts > 2){
    resultElement.textContent = `You're sucks bro, you guessed the number in ${attempts} fuckin attempts.`;
    }else{
      resultElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
      }
    } else{
      resultElement.textContent = 'Wrong guess. Try again!';
    }
  }
}