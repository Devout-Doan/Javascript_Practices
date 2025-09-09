function checkFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            document.writeln("FizzBuzz<br>");
        } else if (i % 5 === 0) {
            document.writeln("Buzz<br>");
        } else if (i % 3 === 0) {
            document.writeln("Fizz<br>");
        } else {
            document.writeln(i + "<br>");
        }
    }
}
function runWhileLoop(){
    let i = 1;
    let n = +prompt("Enter the number:");
    while (i < n){
        document.writeln(i + " While loop<br>");
        i++;
    }
};
function runDoWhile(){
    let i = 10;
    do {
        document.writeln(i +"<br>");
        i--;
    }while(i>0);

};
function runForloop(){
    for(let i = 0; i<10; i++){
        document.writeln(i + " Forloop<br>");
    }
}