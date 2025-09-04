function tinhTongSoTien(){
let tongSoTien= +prompt("Nhập số tiền: ");
let tongSoThang = +prompt("Nhập số tháng: ");
let tongTien = tongSoTien*(1+tongSoThang*(6/100/12));
alert("Số tiền lãi của bạn là: " + tongTien);
}
