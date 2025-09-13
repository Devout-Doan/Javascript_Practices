// Bài 1: Đếm từ 1 đến 100 và hiển thị số 99
function bai1() {
    for (let i = 1; i <= 100; i++) {
        if (i === 99) {
            alert("Đã đến số 99!");
        }
    }
}

// Bài 2: Kiểm tra nhiệt độ
function bai2() {
    let temp = parseFloat(prompt("Nhập nhiệt độ hiện tại:"));
    if (temp > 100) {
        alert("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.");
    } else if (temp < 20) {
        alert("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.");
    } else {
        alert("Nhiệt độ bình thường.");
    }
}

// Bài 3: Hiển thị 20 số Fibonacci đầu tiên
function bai3() {
    let fib = [0, 1];
    for (let i = 2; i < 20; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("20 số Fibonacci đầu tiên:", fib.join(", "));
}

// Bài 4: Tìm số Fibonacci đầu tiên chia hết cho 5
function bai4() {
    let a = 0, b = 1;
    while (true) {
        let next = a + b;
        if (next % 5 === 0) {
            console.log("Số Fibonacci đầu tiên chia hết cho 5:", next);
            break;
        }
        a = b;
        b = next;
    }
}

// Bài 5: Tính tổng 20 số Fibonacci đầu tiên
function bai5() {
    let fib = [0, 1];
    for (let i = 2; i < 20; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    let sum = fib.reduce((acc, val) => acc + val, 0);
    console.log("Tổng 20 số Fibonacci đầu tiên:", sum);
}

// Bài 6: Tính tổng 30 số chia hết cho 7 đầu tiên
function bai6() {
    let sum = 0;
    let count = 0;
    let num = 0;
    while (count < 30) {
        if (num % 7 === 0) {
            sum += num;
            count++;
        }
        num++;
    }
    console.log("Tổng 30 số chia hết cho 7 đầu tiên:", sum);
}

// Bài 7: FizzBuzz
function bai7() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Bài 8: Game đoán số
function bai8() {
    let max = parseInt(prompt("Nhập số tối đa bạn muốn đoán:"));
    let randomNum = Math.floor(Math.random() * max) + 1;
    let attempts = 0;
    let guess;

    while (attempts <= 3) {
        guess = parseInt(prompt("Nhập số bạn đoán:"));
        attempts++;

        if (guess === randomNum) {
            alert(`Chúc mừng! Bạn đã đoán đúng sau ${attempts} lần.`);
            break;
        } else if (guess > randomNum) {
            alert("Số bạn đoán lớn hơn số bí mật. Thử lại!");
        } else {
            alert("Số bạn đoán nhỏ hơn số bí mật. Thử lại!");
        }
    }
}
