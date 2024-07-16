// document.addEventListener('DOMContentLoaded', () => {
//   const board = document.getElementById('board');
//   const cells = Array.from(document.getElementsByClassName('cell'));
//   const turnIndicator = document.getElementById('turn');
//   // const player1ScoreElem = document.getElementById('player1Score');
//   // const aiScoreElem = document.getElementById('aiScore');
//   // const difficultySelect = document.getElementById('difficulty');
//   // const timerElem = document.getElementById('timer');

//   let currentPlayer = 'X';
//   let gameState = Array(9).fill(null);
//   // let player1Score = 0;
//   // let aiScore = 0;
//   // let timer = 0;
//   // let interval;

//   const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   // function handleClick(event) {
//   //   const index = event.target.getAttribute('data-index');

//   //   if (gameState[index] || checkWinner(gameState)) {
//   //     console.log('gameState[index]:', gameState[index]);
//   //     // console.log('checkWinner(gameState):',  checkWinner(gameState));
//   //     return;
//   //   }

//   //   gameState[index] = currentPlayer;
//   //   event.target.textContent = currentPlayer;
//   //   console.log('gameState:', gameState);
//   //   console.log('currentPlayer:', currentPlayer);

//   //   if (checkWinner(gameState)) {
//   //     cells.forEach((cell, i) => {
//   //       if (
//   //         winningCombinations.some(
//   //           (combination) =>
//   //             combination.includes(i) &&
//   //             combination.every((index) => gameState[index] === currentPlayer)
//   //         )
          
//   //       ) {
//   //         cell.classList.add('winner');
//   //       }
//   //       console.log('combination:', combination); 
//   //     });
//   //     turnIndicator.textContent = `Player ${
//   //       currentPlayer === 'X' ? '1' : '2'
//   //     } wins!`;
//   //     return;
//   //   }
//   //   if (isDraw(gameState)) {
//   //     cells.forEach((cell) => cell.classList.add('draw'));
//   //     turnIndicator.textContent = "It's a draw!";
//   //     return;
//   //   }

//   //   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   //   turnIndicator.textContent = `Player ${
//   //     currentPlayer === 'X' ? '1' : '2'
//   //   }'s turn (${currentPlayer})`;
//   // }

//   function handleClick(event) {
//     const index = event.target.getAttribute('data-index');
//     console.log('Clicked cell index:', index);

//     // Check if the cell is already occupied or if there's a winner
//     if (gameState[index] || checkWinner(gameState)) {
//       console.log('Cell already occupied or game already won');
//       console.log('gameState[index]:', gameState[index]);
//       console.log('checkWinner(gameState):', checkWinner(gameState));
//       return;
//     }

//     // Update the game state and UI
//     gameState[index] = currentPlayer;
//     event.target.textContent = currentPlayer;
//     console.log('Updated gameState:', gameState);
//     console.log('Current player:', currentPlayer);

//     // Check if the current player has won
//     if (checkWinner(gameState)) {
//       console.log('Player', currentPlayer, 'has won');
//       cells.forEach((cell, i) => {
//         console.log('Checking cell index:', i); // Log the current cell index being checked
//         winningCombinations.some((combination) => {
//           console.log('Current combination:', combination); // Log the current combination being checked
//           const combinationIncludesIndex = combination.includes(i);
//           const combinationEveryIndex = combination.every((index) => gameState[index] === currentPlayer);
//           console.log('Combination includes index:', combinationIncludesIndex);
//           console.log('Combination every index is current player:', combinationEveryIndex);
//           if (combinationIncludesIndex && combinationEveryIndex) {
//             console.log('Winning combination found:', combination);
//             cell.classList.add('winner');
//             return true; // Exit the `some` loop early since we found a winning combination
//           }
//           return false;
//         });
//       });

//       turnIndicator.textContent = `Player ${
//         currentPlayer === 'X' ? '1' : '2'
//       } wins!`;
//       return;
//     }

//     // Check if the game is a draw
//     if (isDraw(gameState)) {
//       console.log('The game is a draw');
//       cells.forEach((cell) => cell.classList.add('draw'));
//       turnIndicator.textContent = "It's a draw!";
//       return;
//     }

//     // Switch to the other player
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     console.log('Switched player:', currentPlayer);
//     turnIndicator.textContent = `Player ${
//       currentPlayer === 'X' ? '1' : '2'
//     }'s turn (${currentPlayer})`;
//   }


//     function checkWinner(gameState) {
//       return winningCombinations.some((combination) => {
//         return combination.every((index) => gameState[index] === currentPlayer);
//       });
//     }

//   function isDraw(gameState) {
//     return gameState.every((cell) => cell);
//   }

//   function resetGame() {
//     gameState = Array(9).fill(null);
//     currentPlayer = 'X';
//     cells.forEach((cell) => {
//       cell.textContent = '';
//       cell.classList.remove('winner', 'draw');
//     });
//     turnIndicator.textContent = "Player 1's turn (X)";
//   }

//   cells.forEach((cell) => cell.addEventListener('click', handleClick));
//   window.resetGame = resetGame; // Make resetGame accessible globally
// });




// document.addEventListener('DOMContentLoaded', () => {
//   const board = document.getElementById('board');
//   const cells = Array.from(document.getElementsByClassName('cell'));
//   const turnIndicator = document.getElementById('turn');
//   let currentPlayer = 'X';
//   let gameState = Array(9).fill(null);

//   const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   function handleClick(event) {
//     const index = event.target.getAttribute('data-index');
//     console.log(`Cell clicked: ${index}, Current player: ${currentPlayer}`);

//     if (gameState[index] || checkWinner()) {
//       console.log(`Cell ${index} already occupied or game has been won.`);
//       return;
//     }

//     gameState[index] = currentPlayer;
//     event.target.textContent = currentPlayer;
//     console.log(`Game state updated: ${gameState}`);
//     console.log("gameState Array:", gameState);

//     if (checkWinner()) {
//       highlightWinningCells();
//       turnIndicator.textContent = `Player ${
//         currentPlayer === 'X' ? '1' : '2'
//       } wins!`;
//       console.log(`Player ${currentPlayer === 'X' ? '1' : '2'} wins!`);
//       return;
//     }

//     if (isDraw()) {
//       cells.forEach((cell) => cell.classList.add('draw'));
//       turnIndicator.textContent = "It's a draw!";
//       console.log("It's a draw!");
//       return;
//     }

//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     turnIndicator.textContent = `Player ${
//       currentPlayer === 'X' ? '1' : '2'
//     }'s turn (${currentPlayer})`;
//     console.log(
//       `Next turn: Player ${
//         currentPlayer === 'X' ? '1' : '2'
//       } (${currentPlayer})`
//     );
//   }

//   function checkWinner() {
//     const winner = winningCombinations.some((combination) => {
//       return combination.every((index) => gameState[index] === currentPlayer);
//     });
//     console.log(`Checking winner for player ${currentPlayer}: ${winner}`);
//     return winner;
//   }

//   function highlightWinningCells() {
//     winningCombinations.forEach((combination) => {
//       if (combination.every((index) => gameState[index] === currentPlayer)) {
//         combination.forEach((index) => cells[index].classList.add('winner'));
//         console.log(`Winning combination: ${combination}`);
//       }
//     });
//   }

//   function isDraw() {
//     const draw = gameState.every((cell) => cell);
//     console.log(`Checking draw: ${draw}`);
//     return draw;
//   }

//   function resetGame() {
//     gameState = Array(9).fill(null);
//     currentPlayer = 'X';
//     cells.forEach((cell) => {
//       cell.textContent = '';
//       cell.classList.remove('winner', 'draw');
//     });
//     turnIndicator.textContent = "Player 1's turn (X)";
//     console.log('Game reset');
//   }

//   cells.forEach((cell) => cell.addEventListener('click', handleClick));
//   window.resetGame = resetGame; // Make resetGame accessible globally
// });


document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const cells = Array.from(document.getElementsByClassName('cell'));
  const turnIndicator = document.getElementById('turn');
  let currentPlayer = 'X';
  let gameState = Array(9).fill(null);

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

  function handleClick(event) {
    const index = event.target.getAttribute('data-index');

    if (gameState[index] || checkWinner()) {
      return;
    }

    gameState[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner()) {
      highlightWinningCells();
      turnIndicator.textContent = `Player ${
        currentPlayer === 'X' ? '1' : '2'
      } wins!`;
      return;
    }

    if (isDraw()) {
      cells.forEach((cell) => cell.classList.add('draw'));
      turnIndicator.textContent = "It's a draw!";
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnIndicator.textContent = `Player ${
      currentPlayer === 'X' ? '1' : '2'
    }'s turn (${currentPlayer})`;
  }

  function checkWinner() {
    return winningCombinations.some((combination) => {
      return combination.every((index) => gameState[index] === currentPlayer);
    });
  }

  function highlightWinningCells() {
    winningCombinations.forEach((combination) => {
      if (combination.every((index) => gameState[index] === currentPlayer)) {
        combination.forEach((index) => cells[index].classList.add('winner'));
      }
    });
  }

  function isDraw() {
    return gameState.every((cell) => cell);
  }

  function resetGame() {
    gameState = Array(9).fill(null);
    currentPlayer = 'X';
    cells.forEach((cell) => {
      cell.textContent = '';
      cell.classList.remove('winner', 'draw');
    });
    turnIndicator.textContent = "Player 1's turn (X)";
  }

  cells.forEach((cell) => cell.addEventListener('click', handleClick));
  window.resetGame = resetGame; // Make resetGame accessible globally
});
