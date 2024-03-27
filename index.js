const b = document.querySelector('button.button_no')

b.addEventListener("mouseover", moveHover)

function moveHover() {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    b.style.left = i + "px"
    b.style.top = j + "px"
}
const buttonYes = document.getElementById('button_yes');
const modal = document.getElementById('modal');

buttonYes.addEventListener('click', () => {
    modal.style.display = 'block';
});

