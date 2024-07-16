// Define the game state array and current player variable
const gameState = ['O', 'O', 'X', 
                   'O', 'X', 'O',
                   'O', 'X', 'X'];

let currentPlayer = 'X';

// Define a function to check if a player has won
function checkWinner(gameState, currentPlayer) {
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
    if (
      combination.every((index) => {
        console.log('gameState[' + index + ']:', gameState[index]);
        return gameState[index] === currentPlayer;
      })
    ) {
      // If so, return true
      console.log('combination: ', combination);
      console.log('gameState: ', gameState);
      console.log('currentPlayer: ', currentPlayer);
      return true;
    }
  }

  // If no winning combinations are found, return false
  return false;
}

// Check if the current player has won
if (checkWinner(gameState, 'X')) {
  console.log(`Player X wins!`);
} else if (checkWinner(gameState, 'O')) {
  console.log(`Player O wins!`);
} else {
  console.log('No winner yet.');
}
