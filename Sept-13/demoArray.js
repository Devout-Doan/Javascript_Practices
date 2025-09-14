let nameStudents = ["John", "Doe", "Tom", "Jack", "Kim", "Mary"];
let length = nameStudents.length;
// document.write(nameStudents[0] + "<br>");
// document.write(nameStudents[length-1]);




function printItems() {
    for (let index = 0; index < nameStudents.length; index++) {
        document.write(nameStudents[index] + ", ");}
}

function countMatchingItems() {
    let finding = prompt("What is the name that you are looking for?");
    let positionIndex;
    let count = 0;
    for (let index = 0; index < nameStudents.length; index++) {
        if (nameStudents[index] == finding) {
            count++;
            positionIndex = index;
        }
    }
    if (count === 0) {
        document.write("There is no one who has name is " + finding);
    } else {
        document.write("There are " + count + " students who has name is " + nameStudents[positionIndex]);
    }
}

let array =[];
function addElement() {
    const newItem = document.getElementById("addItem").value;
    array.push(newItem);
}

function displayItem() {
    const output = document.getElementById("toDisplay");
    output.innerHTML = "";
    if(array.length === 0) {
        output.innerHTML = "The array is empty.";
        return;
    }
    array.forEach((item, index) => {
        const div = document.createElement("div");
        div.textContent = `The item of index ${index} is ` + item;
        output.appendChild(div);
    })
}

// Original array
let arr = [-3, 5, 1, 3, 2, 10];

console.log("Original array:", arr);

function reverseArr() {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
        console.log(arr);
    }
}

let nums = [1, 5, 6, 7, 8];
function findMaxNumber() {
 let max = 0;
 nums.forEach((num) => {
     if (num >= max){
         max = num;
     }
 })
    console.log(max);
}

let values = [];
let rows = 6;
let cols = 6;

function createBoard(){
    values = Array.from({length:rows}, () => Array(cols).fill(0));
    renderBoard();
}

function renderBoard() {
    const board = document.getElementById("board");
    let html = "<table>";
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < cols; j++) {
            if (i === 0 && j ===0){

                html += "<td>"+ "x" + "</td>"
            }else if(i === 0){
                html += "<td>"+ j + "</td>"
            }else if(j == 0){
                html += "<td>"+ i + "</td>"
            }else{
            html += "<td>"+ values[i][j] + "</td>";
            }

        }
        html += "</tr>";
    }
    html += "</table>";

    board.innerHTML = html;
}
function changeValue(){
    row = +prompt("Enter the row (1-3):");
    col = +prompt("Enter the col (1-3):");
    value = +prompt("Enter the value:");

    if(row > rows || row < 0 || col > cols || col < 0){
        alert("There is a problem, please enter numbers again!");
        return;
    }
    values[row][col] = value;
    renderBoard();
}








