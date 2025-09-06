/*
The BMI fomulas is not working correctly
* */
function getBMI() {
    let w = +prompt("Enter your weight (kg): ");
    let h = +prompt("Enter your height (m): ");
    let BMI_real = w/(h*h);
    let BMI = parseInt(BMI_real);
    if (BMI <18.5){
        document.write("Your BMI is " + BMI + ", you're underweight! eat more")
    }else if (BMI < 22.9){
        document.write("Your BMI is " + BMI + ", you're normal! keep it")
    }else if (BMI < 24.5){
        document.write("Your BMI is " + BMI + ", you're overweight! care your meal")
    } else{
        document.write("Your BMI is " + BMI + ", you're obese! you're going to get your body leaner")
    }
}