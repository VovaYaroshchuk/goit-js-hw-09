const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');



startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  });
  
  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
// function startColorRandomizer() {
//    let colorSwitcher = setInterval(() => {
//         document.body.style.backgroundColor = getRandomHexColor(); 
//     }, 1000);
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
  
// }
// function stopColorRandomizer() {
//     clearInterval(colorSwitcher);
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
// }

