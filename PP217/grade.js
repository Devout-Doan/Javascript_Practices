// Bài 1: Tính tổng và điểm trung bình
function gradeCal() {
    let vatLy = parseFloat(prompt("Nhập điểm môn Vật lý:"));
    let hoaHoc = parseFloat(prompt("Nhập điểm môn Hóa học:"));
    let sinhHoc = parseFloat(prompt("Nhập điểm môn Sinh học:"));

    let tong = vatLy + hoaHoc + sinhHoc;
    let trungBinh = tong / 3;

    alert("Tổng điểm: " + tong + "\nĐiểm trung bình: " + trungBinh.toFixed(2));
}