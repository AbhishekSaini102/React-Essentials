document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const cells = Array.from(document.getElementsByClassName('cell'));
  const turnIndicator = document.getElementById('turn');
  const player1ScoreElem = document.getElementById('player1Score');
  const aiScoreElem = document.getElementById('aiScore');
  const difficultySelect = document.getElementById('difficulty');
  const timerElem = document.getElementById('timer');
  let currentPlayer = 'X';
  let gameState = Array(9).fill(null);
  let player1Score = 0;
  let aiScore = 0;
  let timer = 0;
  let interval;

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
      if (currentPlayer === 'X') {
        player1Score++;
        player1ScoreElem.textContent = player1Score;
        turnIndicator.textContent = 'Player 1 wins!';
      } else {
        aiScore++;
        aiScoreElem.textContent = aiScore;
        turnIndicator.textContent = 'AI wins!';
      }
      clearInterval(interval);
      return;
    }

    if (isDraw(gameState)) {
      cells.forEach((cell) => cell.classList.add('draw'));
      turnIndicator.textContent = "It's a draw!";
      clearInterval(interval);
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnIndicator.textContent = `Player ${
      currentPlayer === 'X' ? '1' : 'AI'
    }'s turn (${currentPlayer})`;

    if (currentPlayer === 'O') {
      setTimeout(aiMove, 500);
    }
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
    timer = 0;
    timerElem.textContent = timer;
    clearInterval(interval);
    interval = setInterval(() => {
      timer++;
      timerElem.textContent = timer;
    }, 1000);
  }

  function aiMove() {
    const difficulty = difficultySelect.value;
    let move;

    if (difficulty === 'easy') {
      move = randomMove();
    } else if (difficulty === 'medium') {
      move = Math.random() < 0.5 ? randomMove() : bestMove();
    } else {
      move = bestMove();
    }

    gameState[move] = currentPlayer;
    cells[move].textContent = currentPlayer;

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
      aiScore++;
      aiScoreElem.textContent = aiScore;
      turnIndicator.textContent = 'AI wins!';
      clearInterval(interval);
      return;
    }

    if (isDraw(gameState)) {
      cells.forEach((cell) => cell.classList.add('draw'));
      turnIndicator.textContent = "It's a draw!";
      clearInterval(interval);
      return;
    }

    currentPlayer = 'X';
    turnIndicator.textContent = `Player 1's turn (X)`;
  }

  function randomMove() {
    let availableMoves = gameState
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  function bestMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
      if (gameState[i] === null) {
        gameState[i] = 'O';
        let score = minimax(gameState, 0, false);
        gameState[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  }

  function minimax(state, depth, isMaximizing) {
    if (checkWinnerForMinimax(state, 'O')) {
      return 10 - depth;
    }
    if (checkWinnerForMinimax(state, 'X')) {
      return depth - 10;
    }
    if (isDraw(state)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (state[i] === null) {
          state[i] = 'O';
          let score = minimax(state, depth + 1, false);
          state[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (state[i] === null) {
          state[i] = 'X';
          let score = minimax(state, depth + 1, true);
          state[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  function checkWinnerForMinimax(state, player) {
    return winningCombinations.some((combination) => {
      return combination.every((index) => state[index] === player);
    });
  }

  

  // Call this function when a player wins
  // For example: triggerCelebration();

  cells.forEach((cell) => cell.addEventListener('click', handleClick));
  window.resetGame = resetGame; // Make resetGame accessible globally
  interval = setInterval(() => {
    timer++;
    timerElem.textContent = timer;
  }, 1000);
});
//

function triggerCelebration() {
  const celebration = document.getElementById('celebration');
  celebration.classList.add('active');

  // Remove the active class after the animation duration
  setTimeout(() => {
    celebration.classList.remove('active');
  }, 4000);
}