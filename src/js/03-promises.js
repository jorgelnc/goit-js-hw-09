import Notiflix from "notiflix";

const form = document.querySelector(".form")

form.addEventListener("submit", submitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(({ position, delay }));
      } else {
        reject({ position, delay });
      }
    }, delay)
  }); 
}

function submitForm(e) {
  e.preventDefault();

  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(fulfilled)
      .catch(rejected);
    delay += step;
  }
}

function fulfilled({ position, delay }) {
Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function rejected({ position, delay }) {
Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); 
}