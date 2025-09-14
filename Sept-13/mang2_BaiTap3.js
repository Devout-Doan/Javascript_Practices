//Bai 1
console.log("===== BÀI 1 =====");
let arr1 = [5, 12, 8, 20, 7, 10, 15, 3, 9, 25];
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 10) count++;
}
console.log("Mảng:", arr1);
console.log("Số phần tử >= 10:", count);

//Bai 2
console.log("\n===== BÀI 2 =====");
let arr2 = [4, 7, 15, 2, 30, 19, 11, 5, 27, 8];
let max2 = arr2[0];
let indexMax = 0;
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max2) {
        max2 = arr2[i];
        indexMax = i;
    }
}
console.log("Mảng:", arr2);
console.log("Giá trị lớn nhất:", max2, "ở vị trí:", indexMax);

//Bai 3
console.log("\n===== BÀI 3 =====");
let arr3 = [10, 15, 7, 20, 5];
let max3 = arr3[0];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > max3) max3 = arr3[i];
    sum += arr3[i];
}
let avg = sum / arr3.length;
console.log("Mảng:", arr3);
console.log("Giá trị lớn nhất:", max3);
console.log("Giá trị trung bình:", avg);

//Bai 4
console.log("\n===== BÀI 4 =====");
let arr4 = [1, 2, 3, 4, 5];
console.log("Mảng ban đầu:", arr4);
let reversed = [];
for (let i = arr4.length - 1; i >= 0; i--) {
    reversed.push(arr4[i]);
}
console.log("Mảng đảo ngược:", reversed);

//Bai 5
console.log("\n===== BÀI 5 =====");
let arr5 = [2, -5, -3, 8, 0, -1, 4];
let negativeCount = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < 0) negativeCount++;
}
console.log("Mảng:", arr5);
console.log("Số phần tử âm:", negativeCount);

//Bai 6
console.log("\n===== BÀI 6 =====");
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let V6 = 5;
console.log("Mảng:", arr6);
console.log("Giá trị V:", V6);
if (arr6.includes(V6)) {
    console.log("V is in the array");
} else {
    console.log("V is not in the array");
}

//Bai 7
console.log("\n===== BÀI 7 =====");
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let V7 = 4;
console.log("Mảng ban đầu:", arr7);
console.log("Giá trị V:", V7);
let indexV7 = arr7.indexOf(V7);
if (indexV7 !== -1) {
    for (let i = indexV7; i < arr7.length - 1; i++) {
        arr7[i] = arr7[i + 1];
    }
    arr7[arr7.length - 1] = 0;
    console.log("Mảng sau khi xóa V:", arr7);
} else {
    console.log("V is not in the array");
}

//Bai 8
console.log("\n===== BÀI 8 =====");
let arr8 = [5, 1, 9, 3, 7, 2, 10, 6, 4, 8];
console.log("Mảng ban đầu:", arr8);
arr8.sort((a, b) => b - a);
console.log("Mảng giảm dần:", arr8);

//Bai 9
console.log("\n===== BÀI 9 =====");
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = a.concat(b);
console.log("Mảng a:", a);
console.log("Mảng b:", b);
console.log("Mảng c (kết hợp):", c);


// === Luyen Tap Mang 02
//Bai 1
console.log("===== BÀI 1 =====");
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < a.length; i++) {
    console.log("row " + i);
    for (let j = 0; j < a[i].length; j++) {
        console.log(" " + a[i][j]);
    }
}

//Bai 2
console.log("\n===== BÀI 2 =====");
let arr2 = ['c', 's', 'c', '2', '6', '1'];
console.log("Mảng ban đầu:", arr2);
let reversed = arr2.reverse().join("");
console.log("Sau khi đảo ngược:", reversed);

//Bai 3
console.log("\n===== BÀI 3 =====");
let arr3 = ['c', 's', 'c', '2', '6', '1', 'x', '9', 'b', '7', 'm'];
console.log("Mảng:", arr3);
let countDigits = 0;
for (let i = 0; i < arr3.length; i++) {
    if (!isNaN(arr3[i]) && arr3[i] !== ' ') {
        countDigits++;
    }
}
console.log("Số ký tự là số (0-9):", countDigits);

//Bai 4
console.log("\n===== BÀI 4 =====");
let str = "This is a test string with several words";
console.log("Chuỗi:", str);
let words = str.trim().split(/\s+/); // tách theo khoảng trắng
let wordCount = words.filter(word => word !== "").length;

console.log("Số từ trong chuỗi:", wordCount);

//Bai 5
console.log("===== BÀI 5 =====");

let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");

if (str1 === str2) {
    console.log("Hai chuỗi giống nhau");
} else {
    console.log("Hai chuỗi KHÔNG giống nhau");
}

//Bai 6
console.log("\n===== BÀI 6 =====");

let arr = ['a', '-', 'b', 'c', '-', 'd', '-', 'e'];

console.log("Mảng ban đầu:", arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
        arr[i] = '_';
    }
}

console.log("Mảng sau khi thay thế:", arr);


