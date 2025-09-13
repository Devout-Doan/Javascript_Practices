const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsContainer = document.querySelector('.buttons');

// YES button click -> Show message
yesBtn.addEventListener('click', () => {
    alert('<3');
});

// NO button drag or mouse over -> Move randomly
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('dragstart', moveNoButton);

function moveNoButton() {
    // Make the NO button "absolute" so it can move anywhere
    noBtn.classList.add('moving');

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
