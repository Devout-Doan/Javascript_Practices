// Bài 1: Chuyển từ độ C sang độ F
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
    return fahrenheit;
}

// Bài 2: Chuyển từ mét sang feet
function metersToFeet(meters) {
    const feet = meters * 3.2808;
    console.log(`${meters}m = ${feet}ft`);
    return feet;
}

// Bài 3: Tính diện tích hình vuông
function squareArea(a) {
    const area = a * a;
    console.log(`Diện tích hình vuông với cạnh ${a} = ${area}`);
    return area;
}

// Bài 4: Tính diện tích hình chữ nhật
function rectangleArea(a, b) {
    const area = a * b;
    console.log(`Diện tích hình chữ nhật (${a} x ${b}) = ${area}`);
    return area;
}

// Bài 5: Tính diện tích tam giác vuông
function rightTriangleArea(a, b) {
    const area = (a * b) / 2;
    console.log(`Diện tích tam giác vuông với cạnh a=${a}, b=${b} = ${area}`);
    return area;
}

// Bài 6: Giải phương trình bậc 1 (ax + b = 0)
function solveLinearEquation(a, b) {
    if (a === 0) {
        if (b === 0) {
            console.log("Phương trình vô số nghiệm.");
        } else {
            console.log("Phương trình vô nghiệm.");
        }
    } else {
        const x = -b / a;
        console.log(`Nghiệm của phương trình là x = ${x}`);
        return x;
    }
}

// Bài 7: Giải phương trình bậc 2 (ax^2 + bx + c = 0)
function solveQuadraticEquation(a, b, c) {
    if (a === 0) {
        solveLinearEquation(b, c);
        return;
    }
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log(`Phương trình có nghiệm kép x = ${x}`);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
}

// Bài 8: Kiểm tra tuổi hợp lệ (0 < age < 120)
function checkValidAge(age) {
    if (age > 0 && age < 120) {
        console.log(`${age} là tuổi hợp lệ.`);
        return true;
    } else {
        console.log(`${age} không phải là tuổi hợp lệ.`);
        return false;
    }
}

// Bài 9: Kiểm tra 3 cạnh có phải tam giác hợp lệ
function checkTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        console.log(`Ba cạnh ${a}, ${b}, ${c} tạo thành một tam giác hợp lệ.`);
        return true;
    } else {
        console.log(`Ba cạnh ${a}, ${b}, ${c} không tạo thành tam giác hợp lệ.`);
        return false;
    }
}

// Bài 10: Tính giá điện (giả sử mức cơ bản)
function calculateElectricity(kWh) {
    let price = 0;
    if (kWh <= 50) {
        price = kWh * 1678;
    } else if (kWh <= 100) {
        price = 50 * 1678 + (kWh - 50) * 1734;
    } else if (kWh <= 200) {
        price = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
    } else {
        price = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
    }
    console.log(`Số tiền điện phải trả cho ${kWh} kWh = ${price} VND`);
    return price;
}

// Bài 11: Tính thuế thu nhập cá nhân (giả sử theo mức cơ bản)
function calculateIncomeTax(income) {
    let tax = 0;
    if (income <= 5000000) {
        tax = income * 0.0*
