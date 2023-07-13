import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTime = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(dateTime, options);


// let temporizador;
// let tiempoInicial;
// let ejecutando;

// function iniciarTemporizador() {
//     var fechaInicial = new Date;
//     fechaInicial.setFullYear(fechaInicial.getFullYear() + 1);
//     fechaInicial.setMonth(0);
//     fechaInicial.setDate(1);
//     fechaInicial.setHours(0);
//     fechaInicial.setMinutes(0);
//     fechaInicial.setSeconds(0);
//     temporizador = setInterval(() => {
//         actualizarTemporizador(fechaInicial);
//     })
// }

// function actualizarTemporizador(fechaFinal) {
//     let tiempoActual = Date.now();
//     let tiempoRestante = fechaFinal - tiempoActual;
//     let segundos = Math.floor(tiempoRestante / 1000) % 60;
//     let minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
//     let horas = Math.floor(tiempoRestante / (1000 * 60 * 60) % 24);
//     let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
// }