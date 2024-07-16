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

    if (gameState[index] || checkWinner(gameState)) {
      return;
    }

    gameState[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner(gameState)) {
      cells.forEach((cell, i) => {
        if (
          winningCombinations.some(
            (combination) =>
              combination.includes(i) &&
              combination.every((index) => gameState[index] === currentPlayer)
          )
        ) {
          cell.classList.add('winner');
        }
      });
      turnIndicator.textContent = `Player ${
        currentPlayer === 'X' ? '1' : '2'
      } wins!`;
      return;
    }

    if (isDraw(gameState)) {
      cells.forEach((cell) => cell.classList.add('draw'));
      turnIndicator.textContent = "It's a draw!";
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnIndicator.textContent = `Player ${
      currentPlayer === 'X' ? '1' : '2'
    }'s turn (${currentPlayer})`;
  }

  function checkWinner(state) {
    return winningCombinations.some((combination) => {
      return combination.every((index) => state[index] === currentPlayer);
    });
  }

  function isDraw(state) {
    return state.every((cell) => cell);
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
