let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

function handleClick(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    if (checkForWin()) {
      document.getElementById("message").innerText = `${currentPlayer} wins!`;
      return;
    }
    if (checkForDraw()) {
      document.getElementById("message").innerText = "It's a draw!";
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkForWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function checkForDraw() {
  return board.every(cell => {
    return cell !== "";
  });
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("message").innerText = "";
  Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.innerText = "";
  });
}
