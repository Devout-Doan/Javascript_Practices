const fixedText = "This is a fun typing game!";

let index = 0;

const textBox = document.getElementById("textBox");

textBox.addEventListener("keydown", function(event) {
    event.preventDefault();

    if (index < fixedText.length) {
        textBox.value += fixedText[index];
        index++;
    }
});
