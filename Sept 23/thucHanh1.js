

//Thuc Hanh 1
class myDate {
    day;
    month;
    year;


    constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    }

    getDay() {
    return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }

    setDate(date) {
        this.day = date;
    }
    setMonth(month) {
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
}

//Thuc Hanh 2
class circle {
    constructor(radius = 0, color = "white") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


//Thuc Hanh 3
class Circle {
    constructor(radius = 30, color = "blue", x = 100, y = 100) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }


    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

