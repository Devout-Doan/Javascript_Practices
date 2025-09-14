// // //Bai 1
// // let myColor = ["Red", "Green", "White", "Black"];
// // let result = myColor.join(",");
// // console.log(result);
// //
// // //Bai 2
// // let num = "025468";
// // let result = "";
// //
// // for (let i = 0; i < num.length; i++) {
// //     result += num[i];
// //     if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
// //         result += "-";
// //     }
// // }
// //
// // console.log(result);
// //
// //
// //Bai 3
// let input = "The Quick Brown Fox";
// let result = "";
//
// for (let i = 0; i < input.length; i++) {
//     let char = input[i];
//     if (char === char.toLowerCase()) {
//         result += char.toUpperCase();
//     }
//     else {
//         result += char.toLowerCase();
//     }
// }
//
// console.log(result);

//Dictionary
let eng = ["hello", "cat", "dog", "book"];
let vie = ["xin chào", "mèo", "chó", "sách"];

function translate_() {
    let word = document.getElementById("word").value.toLowerCase();
    let index = eng.indexOf(word);

    if (index !== -1) {
        document.getElementById("result").innerText = "Vietnamese: " + vie[index];
    } else {
        document.getElementById("result").innerText = "Không tìm thấy";
    }
}





