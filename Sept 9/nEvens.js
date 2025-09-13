function getEvenNumbers() {
    let N = +prompt('Enter your number');
    let nums = "";
    for (let i = 0; i <= N; i++) {
        if (i % 2 == 0) {
            nums += i + " ";
        }
    }
    document.getElementById('nums').innerText = nums;
}