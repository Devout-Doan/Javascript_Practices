function tinhDiemTrungBinh() {
    dk1 = +prompt("Nhap diem cua hoc ki 1");
    let dk2 = +prompt("Nhap diem cua hoc ki 2");
    let dtb = (dk1 + dk2) / 2;
    if(dk1 <0 || dk1 > 10 || dk2 < 0 || dk2 > 10) {
        alert("So nhap khong phu hop")
    }
    else{
    if (dtb >= 8) {
        alert("Ban da dat voi " + dtb + " diem")
    } else {
        alert("Ban khong dat voi " + dtb + " diem")
    }
}}