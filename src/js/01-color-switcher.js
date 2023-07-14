
const startButton = document.querySelectorAll("button")[0];
const stopButton = document.querySelectorAll("button")[1];
let body = document.querySelector("body");
stopButton.disabled = true;
let timerColor = {};

startButton.addEventListener("click", (e) => {
timerColor = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    e.target.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener("click", (e) => {
    clearInterval(timerColor);
    e.target.disabled = true;
    startButton.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}