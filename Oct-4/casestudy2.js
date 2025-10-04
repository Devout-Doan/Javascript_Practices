const puzzle = document.getElementById("puzzle");
const statusText = document.getElementById("status");
let tiles = [];
let size = 4; // 4x4 puzzle

// Tạo puzzle ban đầu
function createPuzzle() {
    tiles = [];
    for (let i = 1; i < size * size; i++) {
        tiles.push(i);
    }
    tiles.push(""); // ô trống
    render();
}

// Vẽ puzzle
function render() {
    puzzle.innerHTML = "";
    tiles.forEach((val, i) => {
        const tile = document.createElement("div");
        tile.className = "tile";
        if (val === "") {
            tile.classList.add("empty");
        } else {
            tile.textContent = val;
            tile.addEventListener("click", () => moveTile(i));
        }
        puzzle.appendChild(tile);
    });
}

// Di chuyển ô
function moveTile(i) {
    const emptyIndex = tiles.indexOf("");
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - size, emptyIndex + size];

    if (validMoves.includes(i)) {
        [tiles[i], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[i]]; // hoán đổi
        render();
        checkWin();
    }
}

// Trộn puzzle
function shuffle() {
    for (let i = 0; i < 100; i++) {
        const emptyIndex = tiles.indexOf("");
        const possibleMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - size, emptyIndex + size]
            .filter(idx => idx >= 0 && idx < size * size);
        const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        [tiles[emptyIndex], tiles[move]] = [tiles[move], tiles[emptyIndex]];
    }
    render();
}

// Kiểm tra thắng
function checkWin() {
    const winState = Array.from({length: size * size - 1}, (_, i) => i + 1).concat("");
    if (JSON.stringify(tiles) === JSON.stringify(winState)) {
        statusText.textContent = "🎉 Bạn đã thắng!";
    } else {
        statusText.textContent = "";
    }
}

// Khởi động
createPuzzle();
