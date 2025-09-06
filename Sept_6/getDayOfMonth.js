function getDayOfMonth(){
    let day;
    let month = parseInt(prompt("Enter the month: "));
    if(month >=1 & month <=12){
        switch (month){
            case 1 || 3 || 5 || 7 || 8 || 10 || 12:
                day = 31
            break;
                case 2:
                    day = 28
                    break;
                    default:
                        day = 30
                        break;
    }
    document.write(`This month has ` + day + " days")
    }else{
        alert("There was a problem, please enter the month again!");
    }
}