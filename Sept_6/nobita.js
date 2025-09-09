const nobita = document.getElementById("nobita");
const gameArea = document.getElementById("gameArea");
const step = 20; // Khoảng di chuyển mỗi lần nhấn phím

// Lắng nghe sự kiện nhấn phím
document.addEventListener("keydown", function(event) {
    let top = parseInt(window.getComputedStyle(nobita).top);
    let left = parseInt(window.getComputedStyle(nobita).left);

    switch (event.key) {
        case "ArrowUp": // Mũi tên lên
            if (top > 0) {
                nobita.style.top = (top - step) + "px";
            }
            break;

        case "ArrowDown": // Mũi tên xuống
            if (top + nobita.offsetHeight < gameArea.offsetHeight) {
                nobita.style.top = (top + step) + "px";
            }
            break;

        case "ArrowLeft": // Mũi tên trái
            if (left > 0) {
                nobita.style.left = (left - step) + "px";
            }
            break;

        case "ArrowRight": // Mũi tên phải
            if (left + nobita.offsetWidth < gameArea.offsetWidth) {
                nobita.style.left = (left + step) + "px";
            }
            break;
    }
});
