import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle (onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

addTextToInput();

function onFormInput(e) { 
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) { 
  e.preventDefault();

  if (localStorage.getItem(STORAGE_KEY)) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  };
  
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
};

function addTextToInput() { 
  if (localStorage.getItem(STORAGE_KEY)) {
    feedbackForm.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    feedbackForm.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
};