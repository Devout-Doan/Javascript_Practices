function moveRight() {
    if (position < 300) { // Giới hạn tối đa 300px
        position += 20;
        document.getElementById("ball").style.left = position + "px";
    }
}
