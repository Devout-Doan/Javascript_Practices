// Bài 4: Tính chu vi hình tròn
function getRoundPerimeter() {
    let banKinh = parseFloat(prompt("Nhập bán kính hình tròn:"));
    let chuVi = 2 * Math.PI * banKinh;

    alert("Chu vi hình tròn là: " + chuVi.toFixed(2));
}