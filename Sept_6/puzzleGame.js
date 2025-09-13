const puzzleContainer = document.getElementById("puzzleContainer");
const message = document.getElementById("message");

// Example image pieces (3x3 puzzle)
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
];

// Shuffle array to create random starting puzzle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(images);

// Render shuffled images to puzzle container
images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("puzzle-piece");
    img.dataset.index = index;
    puzzleContainer.appendChild(img);
});

let firstSelected = null;

puzzleContainer.addEventListener("click", (e) => {
    const clicked = e.target;

    if (!clicked.classList.contains("puzzle-piece")) return;

    // If first click, store image
    if (!firstSelected) {
        firstSelected = clicked;
        clicked.style.borderColor = "blue";
    } else {
        // Swap two images
        let tempSrc = firstSelected.src;
        firstSelected.src = clicked.src;
        clicked.src = tempSrc;

        firstSelected.style.borderColor = "#ccc";
        firstSelected = null;

        // Check if puzzle is solved
        checkWin();
    }
});

function checkWin() {
    const pieces = document.querySelectorAll(".puzzle-piece");
    const currentOrder = Array.from(pieces).map(img => img.src.split("/").pop());
    const correctOrder = [
        "1.jpg","2.jpg","3.jpg","4.jpg",
    ];

    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        message.style.display = "block";
    }
}
