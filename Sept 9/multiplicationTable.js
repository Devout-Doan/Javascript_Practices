// Lấy phần tử bảng từ HTML
const table = document.getElementById("bangCuuChuong");

// Tạo bảng cửu chương từ 2 đến 9
for (let i = 1; i <= 9; i++) {
    const row = document.createElement("tr"); // Tạo một hàng mới

    for (let j = 2; j <= 9; j++) {
        const cell = document.createElement("td");
        cell.textContent = `${j} x ${i} = ${j * i}`;
        row.appendChild(cell);
    }

    table.appendChild(row);
}
