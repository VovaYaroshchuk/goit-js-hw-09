const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startColorRandomizer);
stopBtn.addEventListener('click', stopColorRandomizer);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function startColorRandomizer() {
    colorSwitcher = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  
}
function stopColorRandomizer() {
    clearInterval(colorSwitcher);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

