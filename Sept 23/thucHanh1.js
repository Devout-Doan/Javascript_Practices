

//Thuc Hanh 1
class myDate {
    day;
    month;
    year;


    constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    }

    getDay() {
    return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }

    setDate(date) {
        this.day = date;
    }
    setMonth(month) {
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
}

//Thuc Hanh 2
class circle {
    constructor(radius = 0, color = "white") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


//Thuc Hanh 3
class Circle {
    constructor(radius = 30, color = "blue", x = 100, y = 100) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }


    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

//Bai tap hinh chu nhat
class Rectangle {
    constructor(length, width) {
        this.length = length; // Chiều dài
        this.width = width;   // Chiều rộng
    }

    // Tính diện tích
    getArea() {
        return this.length * this.width;
    }

    // Tính chu vi
    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    // Vẽ hình chữ nhật lên canvas
    draw(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");

        // Xóa canvas trước khi vẽ
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Chọn màu sắc và vẽ
        ctx.fillStyle = "#00aaff";
        ctx.fillRect(50, 50, this.length, this.width);

        ctx.strokeStyle = "#000";
        ctx.strokeRect(50, 50, this.length, this.width);
    }

    // Thay đổi chiều dài và chiều rộng
    setDimensions(newLength, newWidth) {
        this.length = newLength;
        this.width = newWidth;
    }
}

// ======= Chạy kịch bản chương trình =======

// 1. Khai báo và khởi tạo đối tượng Rectangle
const rect = new Rectangle(150, 100);

// 2. Vẽ hình chữ nhật ban đầu
rect.draw("myCanvas");
// 3. Hiển thị thông tin diện tích và chu vi
const infoDiv = document.getElementById("rectangleInfo");
infoDiv.innerHTML = `
      <strong>Chiều dài:</strong> ${rect.length} <br>
      <strong>Chiều rộng:</strong> ${rect.width} <br>
      <strong>Diện tích:</strong> ${rect.getArea()} <br>
      <strong>Chu vi:</strong> ${rect.getPerimeter()} 
    `;


//Bai tap chuyen doi don vi nhiet do
class Temperature {
    constructor(celsius) {
        this.setCelsius(celsius); // Gán giá trị khi khởi tạo
    }

    // Gán giá trị độ C, đảm bảo không nhỏ hơn -273
    setCelsius(value) {
        if (value < -273) {
            alert("Giá trị không hợp lệ! Nhiệt độ không thể nhỏ hơn -273°C");
            this.celsius = -273;
        } else {
            this.celsius = value;
        }
    }

    // Lấy giá trị độ C
    getCelsius() {
        return this.celsius;
    }

    // Chuyển đổi từ độ C sang Fahrenheit
    toFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }

    // Chuyển đổi từ độ C sang Kelvin
    toKelvin() {
        return this.celsius + 273.15;
    }
}

// ======= Kịch bản chương trình =======

// 1. Khởi tạo đối tượng Temperature với giá trị mặc định
const temp = new Temperature(0);

// 2. Gán giá trị nhiệt độ 25°C
temp.setCelsius(25);

// 3. Lấy giá trị Fahrenheit và Kelvin
const fahrenheit = temp.toFahrenheit();
const kelvin = temp.toKelvin();

// 4. Hiển thị kết quả ra màn hình
const infoDiv = document.getElementById("tempInfo");
infoDiv.innerHTML = `
      <strong>Nhiệt độ (°C):</strong> ${temp.getCelsius()}<br>
      <strong>Nhiệt độ (°F):</strong> ${fahrenheit.toFixed(2)}<br>
      <strong>Nhiệt độ (K):</strong> ${kelvin.toFixed(2)}
    `;