/**
 * Hero Game - Di chuyển nhân vật
 * Cập nhật:
 * - Thay ảnh nhân vật
 * - Thêm thuộc tính speed
 * - Di chuyển bằng các phím mũi tên
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed; // Thuộc tính tốc độ

    // Lấy phần tử hình ảnh nhân vật
    this.getHeroElement = function() {
        return `<img width="${this.size}" height="${this.size}"
      src="${this.image}"
      style="top:${this.top}px; left:${this.left}px; position:absolute;" />`;
    };

    // Di chuyển sang phải
    this.moveRight = function() {
        this.left += this.speed;
    };

    // Di chuyển sang trái
    this.moveLeft = function() {
        this.left -= this.speed;
    };

    // Di chuyển lên
    this.moveUp = function() {
        this.top -= this.speed;
    };

    // Di chuyển xuống
    this.moveDown = function() {
        this.top += this.speed;
    };
}

// Khởi tạo nhân vật với ảnh khác, ví dụ: charizard.png
var hero = new Hero('charizard.png', 50, 50, 120, 30); // size=120, speed=30

// Bắt sự kiện bàn phím để điều khiển nhân vật
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowRight':
            if (hero.left < window.innerWidth - hero.size) {
                hero.moveRight();
            }
            break;
        case 'ArrowLeft':
            if (hero.left > 0) {
                hero.moveLeft();
            }
            break;
        case 'ArrowUp':
            if (hero.top > 0) {
                hero.moveUp();
            }
            break;
        case 'ArrowDown':
            if (hero.top < window.innerHeight - hero.size) {
                hero.moveDown();
            }
            break;
    }
    updateGame();
});

// Cập nhật vị trí nhân vật trên màn hình
function updateGame() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

// Chạy ứng dụng
updateGame();
