function getDayOfMonth() {
    let month = parseInt(document.getElementById("monthInput").value);
    let result = document.getElementById("result");
    /*Check input*/
    if (isNaN(month)||month <1 || month >= 12) {
        result.textContent = "Please enter a valid month";
        return;
    }
    let dayNumber;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            dayNumber = 31;
            break;
        case 2:
            dayNumber = "Month 2 has 28 or 29 days."
            return;
            default:
                dayNumber = 31;
    }
    result.textContent = `Month ${month} has ${dayNumber} days`;
}