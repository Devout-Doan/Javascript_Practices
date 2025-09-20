function sum(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let result = a + b;
    document.getElementById("result").innerHTML = result;
}

function peri(x, y, z){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    if(a > 0 && b > 0 && c > 0){
        let result = a + b + c;
        document.getElementById("result").innerHTML = result;
        return;
    }
    document.getElementById("result").innerHTML = "There are problems, please try again.";

}

function semi_Peri(a, b, c){
    return (a + b + c)/2;
}

function area(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let se = semi_Peri(a, b, c);
    let result = Math.sqrt(se*(se-a)*(se-b)*(se-c));
    document.getElementById("result").innerHTML = result;
}

function findMin(a){
    let min = a[0];
    for(item of a){
        if (item < min){
            min = item;
        }
    }
    console.log(min);
    return min;
}

let x = [1, 2, 4,5,6]
findMin(x);