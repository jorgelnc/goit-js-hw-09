import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const dateTime = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button");
const daysOutput = document.querySelectorAll(".value")[0];
const hoursOutput = document.querySelectorAll(".value")[1];
const minutesOutput = document.querySelectorAll(".value")[2];
const secondsOutput = document.querySelectorAll(".value")[3];
startBtn.disabled = true;
let dateNow = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate > dateNow) {
    startBtn.disabled = false;
    } else {
    Notiflix.Notify.warning("Please choose a date in the future");
    }
    
  },
};

flatpickr(dateTime, options);

startBtn.addEventListener("click", onBtn);

function onBtn() {
  const timer = setInterval(() => {
    dateNow = new Date();

    if (dateNow < selectedDate) {
      countTimer = convertMs(selectedDate - dateNow);
      updateTime(countTimer);
      startBtn.disabled = true;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

function updateTime(countTimer) {
  daysOutput.textContent = `${dataOutput.days}`;
  hoursOutput.textContent = `${dataOutput.hours}`;
  minutesOutput.textContent = `${dataOutput.minutes}`;
  secondsOutput.textContent = `${dataOutput.seconds}`;
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  dataOutput = { days, hours, minutes, seconds };
  return dataOutput;
}