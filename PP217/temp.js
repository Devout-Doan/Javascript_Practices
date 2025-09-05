// Bài 2: Chuyển đổi Celsius sang Fahrenheit
function changeTempUnit() {
    let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));
    let fahrenheit = (celsius * 9 / 5) + 32;

    alert(celsius + "°C = " + fahrenheit.toFixed(2) + "°F");
}