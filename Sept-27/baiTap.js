//Bai tap 1



// ===== Class Battery =====
class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(value) {
        this.energy = value;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

// ===== Class FlashLamp =====
class FlashLamp {
    constructor() {
        this.status = false; // false = off, true = on
        this.battery = null; // chưa có pin
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery ? this.battery.getEnergy() : 0;
    }

    light() {
        if (this.status && this.battery && this.battery.getEnergy() > 0) {
            console.log("💡 Đèn đang sáng!");
            this.battery.decreaseEnergy();
        } else if (!this.battery || this.battery.getEnergy() <= 0) {
            console.log("⚠️ Pin hết năng lượng, đèn không thể sáng.");
        } else {
            console.log("🔌 Đèn đang tắt.");
        }
    }

    turnOn() {
        if (this.battery && this.battery.getEnergy() > 0) {
            this.status = true;
            console.log("🔛 Đèn đã bật.");
        } else {
            console.log("⚠️ Không thể bật đèn vì pin hết năng lượng.");
        }
    }

    turnOff() {
        this.status = false;
        console.log("🔴 Đèn đã tắt.");
    }
}

// ======== TEST ========
const battery = new Battery(5); // Pin với năng lượng ban đầu là 5
const lamp = new FlashLamp();

lamp.setBattery(battery);

console.log("🔋 Năng lượng pin ban đầu:", lamp.getBatteryInfo());

// Bật đèn và sử dụng
lamp.turnOn();

for (let i = 0; i < 7; i++) {
    lamp.light();
    console.log("Năng lượng pin còn lại:", lamp.getBatteryInfo());
}

lamp.turnOff();

// Tom and Jerry
// ===== Lớp Rat (Chuột) =====
class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.alive = true; // true = còn sống, false = chết
    }

    // Hành vi: Chuột kêu
    scream() {
        if (this.alive) {
            console.log(`${this.name}: "Chít chít!"`);
            return `${this.name}: "Chít chít!"`;
        } else {
            console.log(`${this.name} đã chết, không thể kêu.`);
            return `${this.name} đã chết, không thể kêu.`;
        }
    }
}

// ===== Lớp Cat (Mèo) =====
class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    // Hành vi: Mèo kêu
    scream() {
        console.log(`${this.name}: "Meo meo!"`);
        return `${this.name}: "Meo meo!"`;
    }

    // Mèo bắt chuột
    catchRat(rat) {
        if (!(rat instanceof Rat)) {
            return `${this.name} chỉ bắt được chuột thôi!`;
        }

        if (this.maxSpeed > rat.speed) {
            console.log(`${this.name} đã bắt được ${rat.name}!`);
            return `${this.name} đã bắt được ${rat.name}!`;
        } else {
            console.log(`${rat.name} chạy quá nhanh, ${this.name} không bắt được.`);
            return `${rat.name} chạy quá nhanh, ${this.name} không bắt được.`;
        }
    }

    // Mèo ăn chuột
    eatRat(rat) {
        if (!(rat instanceof Rat)) {
            return `${this.name} chỉ ăn chuột thôi!`;
        }

        if (!rat.alive) {
            console.log(`${this.name} đang ăn ${rat.name}...`);
            this.weight += rat.weight;
            return `${this.name} đã ăn ${rat.name} và tăng cân lên ${this.weight}kg!`;
        } else {
            console.log(`${this.name} giết ${rat.name} trước khi ăn.`);
            rat.alive = false;
            this.weight += rat.weight;
            return `${this.name} đã giết và ăn ${rat.name}. Cân nặng mèo giờ là ${this.weight}kg!`;
        }
    }
}

// ===== Mô phỏng chương trình =====

// Tạo một vài con chuột
const rat1 = new Rat("Jerry", 0.5, 10);
const rat2 = new Rat("Speedy", 0.6, 18);

// Tạo mèo
const cat = new Cat("Tom", 5, 15);

// Hiển thị ra màn hình web
const outputDiv = document.getElementById("output");

function log(message) {
    console.log(message);
    outputDiv.innerHTML += `<p>${message}</p>`;
}

// Chạy mô phỏng
log(cat.scream());
log(rat1.scream());
log(rat2.scream());

log(cat.catchRat(rat1));
log(cat.eatRat(rat1));

log(cat.catchRat(rat2));
log(cat.eatRat(rat2));

log(`${cat.name} hiện có cân nặng: ${cat.weight}kg`);

