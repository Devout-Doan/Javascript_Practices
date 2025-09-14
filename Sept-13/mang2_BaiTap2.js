const size = 3; // Bàn cờ 3x3
let board = [];
let currentPlayer = "X";
let gameOver = false;

const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");


function initBoard() {
    board = [];
    gameOver = false;
    currentPlayer = "X";
    messageElement.textContent = "";


    boardElement.innerHTML = "";
    for (let i = 0; i < size; i++) {
        board[i] = [];
        const row = document.createElement("tr");

        for (let j = 0; j < size; j++) {
            board[i][j] = ".";
            const cell = document.createElement("td");
            cell.textContent = ".";
            cell.addEventListener("click", () => makeMove(i, j, cell));
            row.appendChild(cell);
        }

        boardElement.appendChild(row);
    }
}

function makeMove(row, col, cell) {
    if (gameOver || board[row][col] !== ".") return;

    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner(row, col)) {
        messageElement.textContent = `Người chơi ${currentPlayer} thắng!`;
        gameOver = true;
        return;
    }

    if (isDraw()) {
        messageElement.textContent = "Hòa!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner(row, col) {
    const player = currentPlayer;

    if (board[row].every(cell => cell === player)) return true;

    if (board.every(r => r[col] === player)) return true;

    if (row === col && board.every((r, i) => r[i] === player)) return true;

    if (row + col === size - 1 && board.every((r, i) => r[size - 1 - i] === player)) return true;

    return false;
}

function isDraw() {
    return board.flat().every(cell => cell !== ".");
}

function resetGame() {
    initBoard();
}

initBoard();
