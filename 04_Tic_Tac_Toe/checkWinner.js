// Define the currentPlayer and gameState variables
let currentPlayer = 'X';
let gameState = ['X', 'O', 'X', null, 'X', null, null, null, 'X'];

// X | O | X
// ---------
//   | O |
// ---------
//   |   |

// Define the winningCombinations array
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

// Define the checkWinner function
function checkWinner(gameState) {
  // console.log(gameState);
  // console.log(currentPlayer);
  // console.log(winningCombinations);
  // console.log("function:", winningCombinations.some((combination) => {
  //   console.log("combinations: ", combination);

  //   console.log("every: ", combination.every((index) => gameState[index] === currentPlayer));

  // }));
  
  return winningCombinations.some((combination) => {
    // console.log(combination);
    // console.log(combination.every((index) => gameState[index] === currentPlayer));
    // console.log(currentPlayer);
    // console.log(gameState);

    return combination.every((index) => gameState[index] === currentPlayer);
    
  
  
  });
}

// Call the checkWinner function with the current gameState
let isWinner = checkWinner(gameState);

// Log the result
// console.log(isWinner); // Outputs: true
