function EnterAStringIE(){
    let login = prompt("Enter: ");
    let message;

    if (login == 'Employee') {
        message = 'Hello';
    } else if (login == 'Director') {
        message = 'Greetings';
    } else if (login == '') {
        message = 'No login';
    } else {
        message = '';
    }
    document.write(message);
}
function enterAStringTO(){
    let login = prompt("Enter: ");
    let message = (login == 'Employee') ? "Hello" :
        (login == 'Director') ? "Greetings" :
            "no login";
    document.write(message);
}
