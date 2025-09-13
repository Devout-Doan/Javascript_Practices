// Bài 1: Kiểm tra a có chia hết cho b không
function checkDivisible(a, b) {
    if (b === 0) {
        console.log("Không thể chia cho 0");
        return;
    }
    if (a % b === 0) {
        console.log(`${a} chia hết cho ${b}`);
    } else {
        console.log(`${a} không chia hết cho ${b}`);
    }
}

// Bài 2: Kiểm tra điều kiện vào lớp 10 (tuổi từ 15 trở lên và có kết quả đỗ)
function checkEligibility(age, passed) {
    if (age >= 15 && passed === true) {
        console.log("Đủ điều kiện vào lớp 10");
    } else {
        console.log("Không đủ điều kiện vào lớp 10");
    }
}

// Bài 3: Kiểm tra số nguyên là âm, dương hay bằng 0
function checkNumberType(num) {
    if (num > 0) {
        console.log(`${num} là số dương`);
    } else if (num < 0) {
        console.log(`${num} là số âm`);
    } else {
        console.log(`${num} bằng 0`);
    }
}

// Bài 4: Tìm số lớn nhất trong 3 số
function findMaxOfThree(a, b, c) {
    let max = Math.max(a, b, c);
    console.log(`Số lớn nhất là: ${max}`);
    return max;
}

// Bài 5: Xếp loại học lực
function classifyStudent(testScore, midtermScore, finalScore) {
    let average = (testScore + midtermScore + finalScore) / 3;
    if (average >= 8) {
        console.log("Học lực: Giỏi");
    } else if (average >= 6.5) {
        console.log("Học lực: Khá");
    } else if (average >= 5) {
        console.log("Học lực: Trung bình");
    } else {
        console.log("Học lực: Yếu");
    }
    return average;
}

// Bài 6: Tính hoa hồng theo doanh số
function calculateCommission(sales) {
    let commission = 0;
    if (sales <= 10000000) {
        commission = sales * 0.05; // 5%
    } else if (sales <= 20000000) {
        commission = sales * 0.07; // 7%
    } else {
        commission = sales * 0.1; // 10%
    }
    console.log(`Hoa hồng nhận được: ${commission.toFixed(0)} VND`);
    return commission;
}

// Bài 7: Tính cước điện thoại
function calculatePhoneBill(minutes) {
    let baseFee = 25000; // phí cố định
    let cost = 0;

    if (minutes <= 50) {
        cost = minutes * 600;
    } else if (minutes <= 200) {
        cost = 50 * 600 + (minutes - 50) * 400;
    } else {
        cost = 50 * 600 + 150 * 400 + (minutes - 200) * 200;
    }

    let total = baseFee + cost;
    console.log(`Cước điện thoại: ${total} VND`);
    return total;
}

// =========================
// TEST các bài tập
// =========================
console.log("=== TEST CÁC BÀI ===");

checkDivisible(10, 2);           // Bài 1
checkEligibility(16, true);      // Bài 2
checkNumberType(-5);             // Bài 3
findMaxOfThree(5, 10, 3);        // Bài 4
classifyStudent(7, 8, 9);        // Bài 5
calculateCommission(25000000);   // Bài 6
calculatePhoneBill(250);         // Bài 7
