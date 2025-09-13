// Bài 1: In dãy Fibonacci
function printFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Dãy Fibonacci:", fib.join(", "));
}

// Bài 2: Tính giai thừa của một số nguyên dương
function factorial(num) {
    if (num < 0) return "Không có giai thừa cho số âm!";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(`Giai thừa của ${num} là: ${result}`);
    return result;
}

// Bài 3: In tam giác vuông với các góc vuông ở các vị trí khác nhau
function printTriangles(size) {
    console.log("Tam giác 1:");
    for (let i = 1; i <= size; i++) {
        console.log("*".repeat(i));
    }

    console.log("Tam giác 2:");
    for (let i = size; i >= 1; i--) {
        console.log("*".repeat(i));
    }

    console.log("Tam giác 3:");
    for (let i = 1; i <= size; i++) {
        console.log(" ".repeat(size - i) + "*".repeat(i));
    }

    console.log("Tam giác 4:");
    for (let i = size; i >= 1; i--) {
        console.log(" ".repeat(size - i) + "*".repeat(i));
    }
}

// Bài 4: In hình chữ nhật rỗng
function printRectangle(width, height) {
    for (let i = 1; i <= height; i++) {
        if (i === 1 || i === height) {
            console.log("*".repeat(width));
        } else {
            console.log("*" + " ".repeat(width - 2) + "*");
        }
    }
}

// Bài 5: Tính lãi ngân hàng (lãi mẹ đẻ lãi con)
function calculateCompoundInterest(principal, months, monthlyRate) {
    let amount = principal;
    for (let i = 0; i < months; i++) {
        amount += amount * (monthlyRate / 100);
    }
    console.log(
        `Số tiền cuối cùng sau ${months} tháng là: ${amount.toFixed(2)}`
    );
    return amount;
}

// Bài 6: In hình trái tim
function printHeart() {
    const heart = [
        "  **   **  ",
        " **** **** ",
        " ********* ",
        "  *******  ",
        "   *****   ",
        "    ***    ",
        "     *     "
    ];
    heart.forEach(line => console.log(line));
}

// Test các bài tập
printFibonacci(10);
factorial(5);
printTriangles(6);
printRectangle(15, 5);
calculateCompoundInterest(1000000, 12, 1.5);
printHeart();
