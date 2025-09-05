// Tỉ giá cố định giữa các loại tiền
const exchangeRates = {
    VND: { USD: 0.0000438, EUR: 0.000041 },
    USD: { VND: 22800, EUR: 0.94 },
    EUR: { VND: 24400, USD: 1.06 }
};

function convertCurrency() {
    // Lấy dữ liệu từ form
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    // Kiểm tra input hợp lệ
    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Vui lòng nhập số tiền hợp lệ!";
        resultDiv.style.color = "red";
        return;
    }

    // Nếu từ và đến cùng loại tiền tệ
    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Result: ${amount} ${toCurrency}`;
        resultDiv.style.color = "blue";
        return;
    }

    // Lấy tỉ giá từ bảng exchangeRates
    const rate = exchangeRates[fromCurrency][toCurrency];

    if (!rate) {
        resultDiv.textContent = "Tỉ giá chưa được cập nhật!";
        resultDiv.style.color = "red";
        return;
    }

    // Tính kết quả
    const convertedAmount = amount * rate;
    resultDiv.textContent = `Result: ${convertedAmount.toFixed(6)} ${toCurrency}`;
    resultDiv.style.color = "blue";
}
