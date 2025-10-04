module.exports = {
    numToStr
};

function numToStr(arr) {
    //your code here
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}