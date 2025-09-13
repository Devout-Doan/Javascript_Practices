const outputDiv = document.getElementById('output');
let numbers = [];
let sum = 0;

while (true) {
    // Yêu cầu người dùng nhập số
    let input = prompt("Nhập một số (nhập -1 để kết thúc):");

    // Nếu nhấn Cancel hoặc không nhập gì thì bỏ qua vòng lặp
    if (input === null) continue;

    // Chuyển đổi sang kiểu số
    let num = parseFloat(input);

    // Kiểm tra kết thúc
    if (num === -1) {
        break;
    }

    // Kiểm tra nếu không phải số hợp lệ
    if (isNaN(num)) {
        alert("Vui lòng nhập một số hợp lệ!");
        continue;
    }

    // Thêm vào mảng và tính tổng
    numbers.push(num);
    sum += num;

    // Hiển thị số vừa nhập
    outputDiv.innerHTML += `<p>Bạn vừa nhập: <strong>${num}</strong></p>`;
}

// Sau khi kết thúc nhập, hiển thị tổng
outputDiv.innerHTML += `<hr><p><strong>Tổng các số đã nhập: ${sum}</strong></p>`;
