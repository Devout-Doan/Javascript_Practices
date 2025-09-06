function compareIE(){
    let a = +prompt("a: ");
    let b = +prompt("b: ");
    if ((a + b) < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }
    document.write(result);
}
function compareTernaryOperator(){
    let a = +prompt("a: ");
    let b = +prompt("b: ");
    result = (a + b) < 4 ? "Below" : "Over";
    document.write(result);
}