function checkWinner(state, player) {
  // Define the winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check each winning combination
  for (let combination of winningCombinations) {
    // Check if the current player has occupied all cells in the combination
    if (combination.every((index) => state[index] === player)) {
      // If so, return true
      return true;
    }
  }

  // If no winning combinations are found, return false
  return false;
}

function isDraw(state) {
  return state.every((cell) => cell !== null);
}

const gameState = ['O', 'O', 'X', 
                   'X', 'X', 'O', 
                   'O', 'X', 'X'];

if (checkWinner(gameState, 'X')) {
  console.log('Player X wins!');
} else if (checkWinner(gameState, 'O')) {
  console.log('Player O wins!');
} else if (isDraw(gameState)) {
  console.log('The game is a draw!');
} else {
  console.log('The game is still in progress.');
}
