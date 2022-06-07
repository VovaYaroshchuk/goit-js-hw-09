import Notiflix from 'notiflix';

const delayInput = document.querySelector("[name='delay']");
const stepInput = document.querySelector("[name='step']");
const amountInput = document.querySelector("[name='amount']");
const createPromisesBtn = document.querySelector("[type='submit']");

createPromisesBtn.addEventListener("click", submitBtnClick)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function submitBtnClick(e) {
    e.preventDefault();

    let delay = Number(delayInput.value);
    let step = Number(stepInput.value);
    let amount = Number(amountInput.value);

    for (let position = 1; position <= amount; position += 1) {
        createPromise(position, delay )
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        delay += step;
    }
  }





// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });