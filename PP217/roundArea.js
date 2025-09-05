// Bài 3: Tính diện tích hình tròn
function getRoundArea() {
    let banKinh = parseFloat(prompt("Nhập bán kính hình tròn:"));
    let dienTich = Math.PI * Math.pow(banKinh, 2);

    alert("Diện tích hình tròn là: " + dienTich.toFixed(2));
}