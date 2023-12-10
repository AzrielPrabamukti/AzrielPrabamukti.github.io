
function rollDice() {
  const diceElement = document.getElementById('dice');

  // Add class to trigger animation
  diceElement.classList.add('rolling');

  // Delay to allow the animation to play before changing the text
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Update the content with an animation effect
    diceElement.innerHTML = `<span class="dice">${randomNumber}</span>`;

    // Remove the class to reset the animation
    diceElement.classList.remove('rolling');
  }, 50); // Adjust the delay based on the transition duration
}
