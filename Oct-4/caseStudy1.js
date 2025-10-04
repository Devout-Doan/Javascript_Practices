// --- Cài đặt canvas ---
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// --- Quả bóng ---
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2; // tốc độ ngang
let dy = -2; // tốc độ dọc

// --- Thanh đỡ ---
const paddleHeight = 10;
const paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;

// Điều khiển bằng bàn phím
let rightPressed = false;
let leftPressed = false;

// --- Điểm số ---
let score = 0;

// --- Lắng nghe sự kiện ---
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// --- Vẽ bóng ---
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

// --- Vẽ thanh đỡ ---
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight - 5, paddleWidth, paddleHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

// --- Vẽ điểm số ---
function drawScore() {
    document.getElementById("score").textContent = "Score: " + score;
}

// --- Hàm chính ---
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // xóa màn hình
    drawBall();
    drawPaddle();
    drawScore();

    // Kiểm tra va chạm biên ngang
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // Kiểm tra va chạm biên trên
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    // Kiểm tra va chạm với thanh đỡ
    else if (y + dy > canvas.height - ballRadius - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            score++; // cộng điểm khi hứng được bóng
        } else {
            alert("Game Over! Final Score: " + score);
            document.location.reload(); // tải lại game
        }
    }

    // Cập nhật vị trí bóng
    x += dx;
    y += dy;

    // Cập nhật vị trí thanh đỡ
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 5;
    }

    requestAnimationFrame(draw); // gọi lại chính nó để game chạy liên tục
}

// --- Bắt đầu game ---
draw();
